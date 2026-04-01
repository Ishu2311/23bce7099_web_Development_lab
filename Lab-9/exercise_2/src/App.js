import React from 'react';
import './App.css';
import StudentCard from './StudentCard';

function App() {
  // Student data (passed as props to child component)
  const students = [
    {
      name: "Iswarya",
      regNo: "23BCE7099",
      department: "Computer Science and Engineering",
      year: "3rd Year",
      marks: 92
    },
    {
      name: "Rahul Sharma",
      regNo: "23BCE7123",
      department: "Electronics and Communication Engineering",
      year: "2nd Year",
      marks: 78
    },
    {
      name: "Priya Patel",
      regNo: "23BCE7456",
      department: "Mechanical Engineering",
      year: "4th Year",
      marks: 85
    },
    {
      name: "Arjun Reddy",
      regNo: "23BCE7890",
      department: "Computer Science and Engineering",
      year: "3rd Year",
      marks: 95
    }
  ];

  return (
    <div className="app-container">
      <div className="header">
        <h1>VIT-AP University</h1>
        <p>Lab Sheet 9 - Exercise 2: Reusable Student Cards using Props</p>
      </div>

      <div className="students-container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            regNo={student.regNo}
            department={student.department}
            year={student.year}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;