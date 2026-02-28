import databento as db
import pandas as pd
from datetime import datetime, timedelta
from pathlib import Path
import zipfile
import os
from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError

''' Python Script to download data form data bento and convert it to LEAN format 
    Requires manual saving/moving to the lean data directory within Algos folder
    
    To add:
    Overwrite if file exists logic - Take from the medium article tbh - TBD 28SEP24
    '''

def get_data_from_databento(ticker, start_date, end_date):
    """
    Fetches OHLCV data for a given ticker from Data Bento for the specified date range.
    Args:
        ticker (str): The stock ticker symbol.
        start_date (datetime): The start date of the data to retrieve.
        end_date (datetime): The end date of the data to retrieve.
    
    Returns:
        pd.DataFrame: A DataFrame containing the retrieved data.
    """
    client = db.Historical(os.getenv('databento_api_key'))
    dataset = client.timeseries.get_range(
        dataset="XNAS.ITCH",
        symbols=ticker,
        start=start_date.strftime('%Y-%m-%d'),
        end=end_date.strftime('%Y-%m-%d'),
        schema='ohlcv-1d'
    )
    
    df = dataset.to_df()
    return df

# testing convert_utc_to_ny time
def convert_utc_to_ny(df, datetime_column='ts_event'):
    """
    Convert a datetime column from UTC to New York time (Eastern Time).
    
    Args:
        df (pd.DataFrame): The DataFrame containing the datetime column in UTC.
        datetime_column (str): The name of the datetime column to be converted. Defaults to 'ts_event'.
    
    Returns:
        pd.DataFrame: The DataFrame with the converted New York time column.
    """
    # Ensure the datetime column is in UTC timezone
    df[datetime_column] = pd.to_datetime(df[datetime_column])
    try:
        df[datetime_column] = df[datetime_column].dt.tz_localize('UTC')  # Localize to UTC
    except:
        # Do nothing, we want it to convert first
        pass
    # Convert the UTC time to New York time (Eastern Time)
    df[datetime_column] = df[datetime_column].dt.tz_convert('America/New_York')
    
    return df

def convert_to_lean_format(csv_file, ticker, frequency='daily'):
    '''
    Converts a CSV file containing stock data into a format compatible with LEAN Local CLI Framework.
    Args:
        csv_file (str): The path to the input CSV file containing stock data.
        ticker (str): The stock ticker symbol.
        frequency (str, optional): The frequency of the data. Can be 'daily', 'hourly', or 'minute'. Defaults to 'daily'.
    Returns:
        None: The function saves the converted data to a file in the appropriate directory based on the frequency. Located within project directory.
    '''
    # Read the Loaded CSV File
    df = pd.read_csv(csv_file)
    
    # Convert the time to NY time (exchange time zone) Optional, still deciding if needed
    #convert_utc_to_ny(df, datetime_column='ts_event')
    
    # Strip the extra time info from CONVERTED time zone to match lean format
    df['date'] = pd.to_datetime(df.pop('ts_event')).dt.strftime('%Y%m%d %H:%M')
    df = df[['date', 'open', 'high', 'low', 'close', 'volume']]
    
    # Conversion from dollars to deci-cents
    df[['open', 'high', 'low', 'close']] = (df[['open', 'high', 'low', 'close']] * 10000).astype(int)
    
    # Data type sorting for directory saving for csv
    if frequency == 'daily':
        output_dir = 'data/equity/usa/daily/'
        output_file = f"{output_dir}{ticker.lower()}.csv"
    elif frequency == 'hourly':
        output_dir = 'data/equity/usa/hourly/'
        output_file = f"{output_dir}{ticker.lower()}.csv"
    else:
        output_dir = 'data/equity/usa/minute/'
        output_file = f"{output_dir}{(ticker.lower())}.csv"
    
    df.to_csv(output_file, index=False, header=False)
        
    # Zip File
    zip_file = os.path.join(output_dir, f'{ticker.lower()}.zip')
    # Create a zip file and add the csv file to it
    with zipfile.ZipFile(zip_file, 'w') as zf:
        zf.write(output_file, arcname=f'{ticker.lower()}.csv')

    # Optionally, remove the csv file after zipping (if you want the zip to be the only output)
    #os.remove(csv_file)

    print(f"{output_file} has been successfully zipped into {zip_file}.")
    
def download_and_append_data(ticker, start_date, end_date, folder='databento/downloads', frequency='daily'):
    """
    Downloads and appends stock data from Data Bento API if necessary, then converts the data to QuantConnect format.
    Args:
        ticker (str): The stock ticker symbol.
        start_date (str): The start date for data retrieval.
        end_date (str): The end date for data retrieval.
        folder (str): Folder to save the CSV file.
        frequency (str): Data frequency ('daily', 'hourly', 'minute').
    
    Returns:
        str: The ticker symbol.
    """
    # Define file path for the ticker - Saves the databento download file
    #fname = ticker.lower() + '.csv'
    fname = f'{ticker}_data.csv'
    path = Path(folder) / fname

    # Convert start_date and end_date to datetime objects
    start_date = pd.to_datetime(start_date)
    end_date = pd.to_datetime(end_date)

    # Check if the file exists
    if path.exists():
        # Open the file and retrieve existing dates
        df_existing = pd.read_csv(path, index_col=0)
        df_existing.index = pd.to_datetime(df_existing.index)  # Ensure the index is converted to Timestamps
        dates = pd.DatetimeIndex(df_existing.index.sort_values(ascending=True))
        
        # Convert the existing dates to tz-naive (remove timezone)
        dates = dates.tz_localize(None)
    else:
        dates = None

    # If no file or date range is not covered
    if dates is None or start_date < dates[0] or end_date > dates[-1]:
        print(f'Fetching data for {ticker} from {start_date} to {end_date}')
        
        # Attempt to fetch new data from Data Bento
        try:
            # Add buffer (delta) to the date range to handle overlaps
            delta = timedelta(days=3)
            df_new = get_data_from_databento(ticker, start_date - delta, end_date + delta)
            
            # If file exists, append new data
            if path.exists():
                df_combined = pd.concat([df_existing, df_new]).drop_duplicates()
                df_combined.sort_index(inplace=True)
                df_combined.to_csv(path)

            else:
                # Save the new data if no file exists
                df_new.to_csv(path)
            print(f'Ticker {ticker} data saved to {path}')
        
        except Exception as e:
            print(f'Error fetching data for {ticker}: {e}')
            return None
    else:
        print(f'Ticker {ticker} already up-to-date')

    # Convert to QuantConnect format (path = path to csv file incl. .csv, ticker = ticker symbol, frequency = 'daily', 'hourly', 'minute')
    convert_to_lean_format(path, ticker, frequency)

    return ticker

# Example ticker list and date range
if __name__ == '__main__':
    ticker_list = ['IWM']
    for ticker in ticker_list:
        download_and_append_data(ticker, '2023-01-01', '2023-12-31', frequency='daily')