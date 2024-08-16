# Office Management System
[![Netlify Status](https://api.netlify.com/api/v1/badges/de02603f-1898-4610-8b45-51e950584766/deploy-status)](https://app.netlify.com/sites/office-system/deploys)
A React-based basic office management system that allows users to manage employees.
![2024-08-16 (1)](https://github.com/user-attachments/assets/9f7f8182-6a7a-46e0-89b5-b7b7b72e48c9)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## Demo

Check out the live demo of the project:

- [Frontend on Netlify](https://master--office-system.netlify.app/)
- [Backend API](http://office-management.nubitlan.com/office-system-api/routes/api.php)

## Features

- User authentication with JWT
- Employee management (add, edit, delete employees)
- Role-based access control
- Responsive design

## Technologies

- **Frontend**: React, Axios, Bootstrap
- **Backend**: PHP, MySQL, JWT for authentication
- **Deployment**: Netlify (frontend), Digital Ocean (backend)
  
## Setup

### Prerequisites

- Node.js (>= 12.x)
- PHP (>= 7.x)
- MySQL
- Composer (for PHP dependencies)

### Frontend Setup

Clone the repository:
   ```bash
   git clone https://github.com/sofi-alvarado/office-system.git

Go to the project directory

```bash
  cd office-system.git
```

Install dependencies

```bash
  npm install
```

Create an .env file in the root of your project this configuration:

REACT_APP_API_URL=https://office-management.nubitlan.com/routes/api.php?action

Start the server

```bash
  npm run start
```
