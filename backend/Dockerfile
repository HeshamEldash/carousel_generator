# Use the official Python base image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the Pipfile and Pipfile.lock to the container
COPY Pipfile Pipfile.lock ./

# Install Pipenv
RUN pip install pipenv

# Install dependencies from Pipfile.lock
RUN pipenv install --system --deploy --ignore-pipfile

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000 for the Flask app
EXPOSE 5000

# Set the environment variables
ENV FLASK_APP=app.py \
    FLASK_RUN_HOST=0.0.0.0

# Run the Flask application
CMD ["pipenv", "run", "flask", "run"]