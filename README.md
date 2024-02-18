# Kudos Board

## Setup

1. Clone the repository
4. Copy the docker compose override file `docker-compose.override.example.yml` to `docker-compose.override.yml`
5. Copy the `.env.example` file to `.env` and fill in the required values
6. Run `docker compose up -d` to start the application
7. Run `docker compose exec frontend test:unit` to run the unit tests