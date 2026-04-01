import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // States
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using useEffect (runs only once on mount)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array → runs only once

  return (
    <div className="app-container">
      <div className="card">
        <h1>Users from API</h1>
        <p>Exercise 3: Fetching Data with useEffect + Async/Await</p>

        {/* Loading State */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading users...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
            <br />
            <small>Make sure you are connected to the internet.</small>
          </div>
        )}

        {/* Success State - List Rendering */}
        {!loading && !error && (
          <>
            <h2>Users List ({users.length})</h2>
            <div className="users-grid">
              {users.map((user) => (
                <div key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Company:</strong> {user.company.name}</p>
                  <p><strong>Website:</strong> {user.website}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {!loading && !error && users.length === 0 && (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;