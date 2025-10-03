# Meet-in-the-Middle App

Simple MERN capstone project to organize meetings with OTP-based authentication.

## Features
- OTP authentication (JWT-secured)
- Create / invite / manage meetings
- MongoDB (Mongoose)

## Tech
- Frontend: React (Vite), Tailwind, Material-UI, Axios
- Backend: Node.js, Express, MongoDB, JWT

## Project layout
- Frontend/  — React app (Vite) in Frontend/
- Backend/   — Express API in Backend/

## Setup

1. Backend
- cd Backend
- npm install
- create .env with:
  - MONGO_URI=
  - JWT_SECRET=
  - JWT_EXPIRES_IN=
- npm run dev

2. Frontend
- cd Frontend
- npm install
- create .env (if needed):
  - VITE_API_URL=http://localhost:5000/api
- npm run dev

## Notes
- Do not commit .env files.
- Check DevTools → Application → Local Storage for token/user keys when debugging auth-related issues.

Author: Prashant