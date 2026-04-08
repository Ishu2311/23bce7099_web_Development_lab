const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// GLOBAL MIDDLEWARE
// ======================
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`📌 [${timestamp}] ${req.method} ${req.originalUrl}`);
  req.requestTime = new Date();
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// BEAUTIFUL HOME PAGE
// ======================
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Middleware Demo | Exercise 2</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 0;
          min-height: 100vh;
          color: #333;
        }
        .container {
          max-width: 900px;
          margin: 40px auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #28a745, #20c997);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 2.8rem;
          font-weight: 700;
        }
        .header p {
          margin: 10px 0 0;
          font-size: 1.2rem;
          opacity: 0.95;
        }
        .content {
          padding: 40px;
        }
        .status {
          text-align: center;
          padding: 15px;
          background: #d4edda;
          color: #155724;
          border-radius: 10px;
          font-weight: 600;
          margin-bottom: 30px;
        }
        .card {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
          border-left: 6px solid #28a745;
        }
        h2 {
          color: #28a745;
          margin-top: 0;
        }
        pre {
          background: #2d3748;
          color: #e6fffa;
          padding: 18px;
          border-radius: 10px;
          font-size: 1.05em;
          overflow-x: auto;
          white-space: pre-wrap;
        }
        .btn {
          display: inline-block;
          background: #28a745;
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          margin: 10px 5px;
          transition: all 0.3s;
        }
        .btn:hover {
          background: #218838;
          transform: translateY(-3px);
        }
        .footer {
          text-align: center;
          padding: 25px;
          background: #f8f9fa;
          color: #666;
          font-size: 0.95rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Middleware Demo</h1>
          <p>Exercise 2 - Node.js & Express</p>
        </div>
        
        <div class="content">
          <div class="status">
            🚀 Server is Running Successfully on http://localhost:${PORT}
          </div>

          <div class="card">
            <h2>📋 What This Demo Demonstrates</h2>
            <ul>
              <li>✅ Global Middleware using <code>app.use()</code></li>
              <li>✅ Custom Request Logger</li>
              <li>✅ Request Timing Middleware</li>
              <li>✅ Response Time Logger</li>
              <li>✅ Proper use of <code>next()</code></li>
              <li>✅ Middleware Execution Order</li>
            </ul>
          </div>

          <div class="card">
            <h2>🔗 Test These Endpoints</h2>
            <p><strong>Click below to test:</strong></p>
            <a href="/api/users" class="btn" target="_blank">Get All Users</a>
            <a href="/api/users/1" class="btn" target="_blank">Get User by ID</a>
          </div>

          <div class="card">
            <h2>📊 Expected Middleware Logs in Terminal</h2>
            <pre>
📌 [2026-04-08T...] GET /api/users
   IP: ::1
   ⏱️  Request Time: ...
   ⏱️  Response Time: 12ms | Status: 200
            </pre>
          </div>
        </div>

        <div class="footer">
          <p>Made for VIT-AP University • Lab Sheet 11 • Node.js Basics</p>
          <p>Student: Iswarya</p>
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
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Middleware Demo Server running on http://localhost:${PORT}`);
});