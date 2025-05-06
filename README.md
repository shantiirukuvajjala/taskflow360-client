# TaskFlow360 – React Frontend

This is the React + TypeScript frontend for **TaskFlow360**, a full-stack task management application built to demonstrate clean architecture, modular UI design, and integration with a .NET 8 Web API backend.

---

## 🚀 Features

- 📋 Add, delete, and mark tasks as completed
- 🔄 Persist tasks using Axios + RESTful API
- 🧩 Reusable components: `TaskForm`, `TaskCard`, `TaskDashboard`
- 🎯 Clean functional component design using hooks
- 🎨 Responsive UI with inline styles and semantic layout

---

## 🛠 Tech Stack

| Layer     | Tech Used                   |
|-----------|-----------------------------|
| Frontend  | React, TypeScript           |
| API Calls | Axios                       |
| Styling   | CSS-in-JS (inline styles)   |
| Backend   | .NET 8 Web API (in separate repo) |
| Tools     | VS Code, Git, GitHub        |

---

## 📦 Folder Structure

src/
│
├── components/
│ ├── TaskForm.tsx # Controlled form for new task
│ └── TaskCard.tsx # Individual task item card
│
├── models/
│ └── Tasks.ts # Task interface
│
├── pages/
│ └── TaskDashboard.tsx # Main container with state and logic
│
├── services/
│ └── taskService.ts # Axios calls to backend API
│
└── App.tsx # Root component


---

## ▶️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+)
- Backend API running locally at `http://localhost:5034`

### Setup

# Clone the repo
git clone https://github.com/shantiirukuvajjala/taskflow360-client.git
cd taskflow360-client

# Install dependencies
npm install

# Start the development server
npm start
Open your browser at http://localhost:3000

API Base URL
Make sure the following backend is running:

API: .NET backend repo

Base URL used in frontend: http://localhost:5034/api/tasks


### Author Notes
This project was created as part of my personal portfolio to upskill in:

React (I transitioned from Angular)

TypeScript-based component architecture

Full-stack development with clean design practices

