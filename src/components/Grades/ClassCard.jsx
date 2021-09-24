import React from "react";

export default function ClassCard({ classCard }) {
  const { title, semester, exam1, exam2, essay, presentation, ects } =
    classCard;

  return (
    <div className="class-card">
      <div className="class-card-title">
        <h3>{title}</h3>
      </div>
      <div className="class-card-info">
        <p>Semester: {semester}</p>
        <p>ECTS: {ects}</p>
      </div>
      <div className="class-card-grades">
        <p>Exam 1: {exam1}</p>
        <p>Exam 2:{exam2}</p>
        <p>Essay: {essay}</p>
        <p>Presentation: {presentation}</p>
      </div>
    </div>
  );
}
