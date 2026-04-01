import React from 'react';

function StudentCard(props) {
  const { name, regNo, department, marks, year } = props;

  // Calculate grade
  const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "D";
  };

  return (
    <div className="student-card">
      <div className="card-header">
        <div className="avatar">👨‍🎓</div>
        <h2>{name}</h2>
        <p className="reg-no">Reg. No: {regNo}</p>
      </div>

      <div className="card-body">
        <div className="info-row">
          <span className="label">Department</span>
          <span className="value">{department}</span>
        </div>
        <div className="info-row">
          <span className="label">Year</span>
          <span className="value">{year}</span>
        </div>
        <div className="info-row">
          <span className="label">Marks</span>
          <span className="value marks">{marks}/100</span>
        </div>
        <div className="info-row">
          <span className="label">Grade</span>
          <span className={`grade ${getGrade(marks).replace('+', '')}`}>
            {getGrade(marks)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;