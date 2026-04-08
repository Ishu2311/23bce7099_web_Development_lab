const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// Routes
app.use('/api', userRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send(`
        <h1>Node.js + MongoDB CRUD API</h1>
        <p>Exercise 3 - Backend Persistence with Mongoose</p>
        <h3>Available Endpoints:</h3>
        <ul>
            <li><b>POST</b> /api/users</li>
            <li><b>GET</b> /api/users</li>
            <li><b>GET</b> /api/users/:id</li>
            <li><b>PUT</b> /api/users/:id</li>
            <li><b>DELETE</b> /api/users/:id</li>
        </ul>
    `);
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
};

startServer();