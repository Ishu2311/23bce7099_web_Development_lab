const express = require('express');
const router = express.Router();

// Sample Data
let users = [
  { id: 1, name: "Iswarya", email: "iswarya@example.com", age: 24 },
  { id: 2, name: "Rahul Kumar", email: "rahul@example.com", age: 26 }
];

// GET All Users - No API Key required now
router.get('/', (req, res) => {
  res.json({
    success: true,
    requestTime: req.requestTime,
    count: users.length,
    data: users
  });
});

// GET User by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  
  res.json({ success: true, data: user });
});

// POST Create User
router.post('/', (req, res) => {
  const { name, email, age } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    age: age || null
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

module.exports = router;