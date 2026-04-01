import React from 'react';
import './App.css';

function App() {
  // Student details stored in JavaScript variables (as required)
  const studentName = "Iswarya";
  const regNo = "23BCE7099";
  const department = "Computer Science and Engineering";
  const year = "3rd Year";
  const section = "A";
  const email = "meghana.23bce7099@vitapstudent.ac.in";

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        {/* Header */}
        <div className="profile-header">
          <div className="avatar">👩‍🎓</div>
          <h1>{studentName}</h1>
          <p className="reg-no">Reg. No: {regNo}</p>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <h2>Student Information</h2>
          
          <div className="detail-item">
            <span className="label">Department</span>
            <span className="value">{department}</span>
          </div>

          <div className="detail-item">
            <span className="label">Year</span>
            <span className="value">{year}</span>
          </div>

          <div className="detail-item">
            <span className="label">Section</span>
            <span className="value">{section}</span>
          </div>

          <div className="detail-item">
            <span className="label">Email</span>
            <span className="value">{email}</span>
          </div>
        </div>

        <div className="profile-footer">
          VIT-AP University, Andhra Pradesh
        </div>
      </div>
    </div>
  );
}

export default App;