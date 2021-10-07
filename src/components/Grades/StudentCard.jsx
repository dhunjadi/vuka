import React from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ studentCard }) {
  const { id } = studentCard;

  return (
    <div className="student-card">
      <Link to={`/grades/student/${id}`}>
        <div className="student-name">
          <p>
            Name: {studentCard.fName} {studentCard.lName}
          </p>
        </div>
        <div className="student-info">
          <p>Type: {studentCard.studentStatus}</p>
          <p>ID: {studentCard.id}</p>
        </div>
      </Link>
    </div>
  );
}
