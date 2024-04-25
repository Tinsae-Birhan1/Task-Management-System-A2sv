# Task-Management-System-A2sv
## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Docker and Docker Compose (optional)

### Installation Steps

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Tinsae-Birhan1/Task-Management-System-A2sv
```

2. Navigate to the project directory:

```bash
cd Task-Management-System-A2sv
```

3. Install dependencies using one of the following methods:

#### Using Docker Compose (Recommended)

Run the following command to start the application using Docker Compose:

```bash
docker-compose up
```

This command will build the Docker image and start the containers for the application.

#### Using npm and Nodemon

Alternatively, you can install dependencies using npm and run the application with Nodemon for live code reloading:

```bash
npm install
nodemon
```

This command will install dependencies and start the application. Nodemon will monitor changes to your files and automatically restart the server.

## API Documentation

The API documentation is generated using Swagger and can be accessed at `/api-docs` endpoint after starting the server.
