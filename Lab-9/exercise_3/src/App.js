import React, { useState } from 'react';
import './App.css';

function App() {
  // Step 1: Initialize counter using useState Hook (default value = 0)
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1>Simple Counter</h1>
        <p>Exercise 3: useState Hook & Event Handling</p>

        {/* Display current count dynamically */}
        <div className="counter-display">
          <h2>{count}</h2>
        </div>

        {/* Buttons with onClick event handlers */}
        <div className="button-group">
          <button onClick={decrement} className="btn decrement">
            - Decrement
          </button>

          <button onClick={reset} className="btn reset">
            Reset
          </button>

          <button onClick={increment} className="btn increment">
            Increment +
          </button>
        </div>

        <div className="current-value">
          Current Value: <strong>{count}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;