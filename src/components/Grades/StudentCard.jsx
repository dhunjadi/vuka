import React from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ studentCard }) {
  const { id } = studentCard;
  console.log(studentCard);
  return (
    <div className='student-card'>
      <Link to={`/grades/student/${id}`}>
        <div className="student-name">
          <p>{studentCard.fName} {studentCard.lName}</p>
        </div>
        <div className="student-info">
          <p>ID: {studentCard.id}</p>
          <p>Type: {studentCard.studentStatus}</p>
        </div>
        </Link>
    </div>
  );
}
