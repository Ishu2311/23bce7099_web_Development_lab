const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());           // Parse JSON request body
app.use(express.urlencoded({ extended: true }));

// ======================
// Nice Welcome Page (Root Route)
// ======================
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User Management API</title>
      <style>
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f2f5;
        }
        .container {
          max-width: 900px;
          margin: 40px auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #28a745;
          text-align: center;
        }
        .status {
          text-align: center;
          font-size: 1.1em;
          color: #28a745;
          font-weight: bold;
          margin-bottom: 30px;
        }
        h2 {
          color: #333;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
        }
        pre {
          background: #f8f9fa;
          padding: 18px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 1.05em;
          overflow-x: auto;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 12px 0;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          color: #666;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>✅ User Management API</h1>
        <p class="status">Server is Running Successfully on Port ${PORT}</p>

        <h2>Available Endpoints</h2>
        <pre>
GET    http://localhost:3000/api/users          → Get all users
GET    http://localhost:3000/api/users/:id      → Get user by ID
POST   http://localhost:3000/api/users          → Create new user
PUT    http://localhost:3000/api/users/:id      → Update user
DELETE http://localhost:3000/api/users/:id      → Delete user
        </pre>

        <h2>Quick Test Links</h2>
        <ul>
          <li><a href="http://localhost:3000/api/users" target="_blank">👉 Get All Users</a></li>
          <li><a href="http://localhost:3000/api/users/1" target="_blank">👉 Get User with ID 1</a></li>
        </ul>

        <div class="footer">
          <p>Use <strong>Postman</strong> or <strong>Thunder Client</strong> (VS Code) for full testing (POST, PUT, DELETE)</p>
          <p>Your API is ready! 🎉</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Use User Routes
app.use('/api/users', userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: "Route not found",
    availableEndpoints: "/, /api/users, /api/users/:id"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});