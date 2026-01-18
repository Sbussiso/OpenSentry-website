# OpenSentry Website Dockerfile
# Simple Python HTTP server for local development

FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy website files
COPY index.html .
COPY docs.html .
COPY css/ ./css/
COPY js/ ./js/
COPY ["Opensentry website vid.mp4", "."]

# Expose port 8000
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000')" || exit 1

# Run Python HTTP server
CMD ["python", "-m", "http.server", "8000"]
