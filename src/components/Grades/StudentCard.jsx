import React from "react";
import { Link } from "react-router-dom";

export default function StudentCard({ studentCard }) {
  const { id } = studentCard;
  console.log(studentCard);
  return (
    <div>
      <Link to={`/grades/student/${id}`}>{studentCard.fName}</Link>
    </div>
  );
}
