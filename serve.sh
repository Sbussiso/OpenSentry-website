#!/bin/bash

# Simple script to serve the OpenSentry website locally

PORT=8000

echo "🚀 Starting OpenSentry website local server..."
echo "📍 Server will be available at: http://localhost:$PORT"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3 HTTP server..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "Using Python HTTP server..."
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    echo "Using PHP built-in server..."
    php -S localhost:$PORT
else
    echo "❌ Error: No suitable HTTP server found."
    echo "Please install Python 3 or PHP to run this script."
    exit 1
fi
