# Frontend Build Stage
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci --only=production
COPY frontend/ ./
RUN npm run build

# Backend Stage
FROM python:3.11-slim
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY company_site/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY company_site/ ./

# Copy frontend build
COPY --from=frontend-builder /app/frontend/.next ./static/

# Collect static files
RUN cd backend && python manage.py collectstatic --noinput

# Create non-root user
RUN useradd --create-home --shell /bin/bash app
RUN chown -R app:app /app
USER app

EXPOSE 8000

WORKDIR /app/backend
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]