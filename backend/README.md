# Express + MySQL Backend

This backend initializes MySQL and serves portfolio data through an Express API. It uses `backend/db/portfolio-data.sql` as the source for schema and seed data.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and configure MySQL credentials:
   - `MYSQL_HOST`
   - `MYSQL_PORT`
   - `MYSQL_USER`
   - `MYSQL_PASSWORD`
   - `MYSQL_DATABASE`
3. Start the API server:
   ```bash
   npm run server
   ```

## API Endpoints

- GET /api/health
- GET /api/portfolio-data
- GET /api/portfolio-items
- GET /api/portfolio-items/:id
- POST /api/portfolio-items
- PUT /api/portfolio-items/:id
- DELETE /api/portfolio-items/:id
