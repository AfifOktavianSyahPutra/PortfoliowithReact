# Personal Portfolio - Afif Oktavian Syah Putra

This repository contains a full-stack portfolio application built with React on the frontend and Express + MySQL on the backend.

## Project structure
- `frontend/` - React app source and build scripts
- `backend/` - Express API server, MySQL initialization, controllers, routes, services
- `backend/db/portfolio-data.sql` - persisted schema and seed data for the portfolio database
- `BNSP-Web-Developer-Assistant-Study-Guide.md` - certification study guide and repository notes

## How to Run the Project
The repository is split into two projects:

### Backend
1. Open a terminal and run:
   ```bash
   cd backend
   npm install
   ```
2. Copy `.env.example` to `.env` and set your MySQL credentials.
3. Start the backend server:
   ```bash
   npm run server
   ```
4. The backend API listens by default on `http://localhost:5000`.

### Frontend
1. Open a second terminal and run:
   ```bash
   cd frontend
   npm install
   ```
2. Start the React development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:1100` in your browser.

## Notes
- The backend initializes MySQL and portfolio schema on startup.
- Portfolio data is loaded exclusively from MySQL; there is no local JSON fallback.
- The frontend fetches portfolio data from the backend endpoint `/api/portfolio-data`.

## Verification
- Backend: open `http://localhost:5000/api/portfolio-data` after starting the server.
- Frontend: run `npm run build` inside `frontend/` to verify the React app compiles.