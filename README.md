Ran tool
Ran tool
Ran tool
Read file: README.md
Read file: server/package.json
Read file: frontend/package.json
Read file: frontend/README.md
Read file: server/index.js
Read file: frontend/src
Read file: frontend/src/App.jsx
Read file: frontend/src/main.jsx
Here’s a summary of your project for a comprehensive README:

---

# EventHost

## Overview

**EventHost** is a full-stack web application for event information and registration. It features a modern React frontend (using Vite and Tailwind CSS) and a simple Express backend for handling registrations.

---

## Project Structure

```
.
├── frontend/   # React + Vite frontend
├── server/     # Express backend API
└── README.md   # Project documentation
```

---

## Features

- **Frontend:**  
  - Built with React, Vite, and Tailwind CSS.
  - Animations with Framer Motion.
  - Components for event info, agenda, speakers, registration, and more.
  - Registration form that submits to the backend.

- **Backend:**  
  - Express server with CORS enabled.
  - Single endpoint (`POST /register`) to accept and store registrations in a JSON file.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Setup

#### 1. Clone the repository

```sh
git clone <your-repo-url>
cd EventHost
```

#### 2. Install dependencies

```sh
cd server
npm install
cd ../frontend
npm install
```

#### 3. Run the backend

```sh
cd ../server
node index.js
# Server runs on http://localhost:3001
```

#### 4. Run the frontend

```sh
cd ../frontend
npm run dev
# Frontend runs on http://localhost:5173 (default Vite port)
```

---

## API

### POST /register

- Accepts: JSON body with registration details.
- Stores each registration in `server/registrations.json`.

---

## Scripts

- **Frontend**
  - `npm run dev` – Start development server
  - `npm run build` – Build for production
  - `npm run preview` – Preview production build
  - `npm run lint` – Lint code

- **Backend**
  - `node index.js` – Start backend server

---

## Dependencies

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Icons, and more.
- **Backend:** Express, CORS.

---

## License

MIT

---

<img width="1338" height="630" alt="image" src="https://github.com/user-attachments/assets/c9d09c13-63e2-459c-a52f-be1b071388c7" />
<img width="1342" height="633" alt="image" src="https://github.com/user-attachments/assets/c802da16-14fa-44ae-812f-e694e98018f2" />
<img width="1337" height="634" alt="image" src="https://github.com/user-attachments/assets/0e89dcbe-f91c-4566-a34e-3c7ffea32a0c" />


