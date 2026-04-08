const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/users.json');

let users = JSON.parse(fs.readFileSync(dataPath)).users;

// Helper to save data
const saveUsers = () => {
  fs.writeFileSync(dataPath, JSON.stringify({ users }, null, 2));
};

// Get all users
exports.getAllUsers = (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
};

// Get user by ID
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  res.json({ success: true, data: user });
};

// Create new user
exports.createUser = (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }

  const newUser = {
    id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email,
    age: age || null
  };

  users.push(newUser);
  saveUsers();

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
};

// Update user
exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    age: age !== undefined ? age : users[userIndex].age
  };

  saveUsers();

  res.json({
    success: true,
    message: "User updated successfully",
    data: users[userIndex]
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1)[0];
  saveUsers();

  res.json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser
  });
};