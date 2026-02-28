FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py ./
COPY subscriptions.sample.json ./
ENV HOST=0.0.0.0
ENV PORT=8788
EXPOSE 8788
CMD ["uvicorn", "app:APP", "--host", "0.0.0.0", "--port", "8788"]
