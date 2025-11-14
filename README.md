# Job Portal (Assignment 9)

## Setup

1. `npm install`
2. `npm start` (starts React dev server)
3. Make sure backend (Assignment 8) runs at http://localhost:3000

## Folder structure

- api/ (backend controllers/models/routes/services)
- src/App/Navbar
- src/pages (Home, About, Jobs, Contact, CompanyShowcase)

## Key functionalities

- Login using backend `/user/login` (no signup)
- Session saved in localStorage
- Job Listings rendered from local `jobPosts` array
- Company Showcase fetches images from backend `/user/getAll`
