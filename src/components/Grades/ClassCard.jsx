import React, { useContext } from "react";
import { GradesContext } from "../../context/GradesContext";
import { UserContext } from "../../context/UserContex";
import EditGradesModal from "../Grades/EditGradesModal";

export default function ClassCard({ classCard, student }) {
  const { loggedInUser, showEditGradesModal } = useContext(UserContext)
  const { title, semester, exam1, exam2, essay, presentation, ects } =
    classCard;

    const { handleClassSelect } = useContext(GradesContext)


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
        <p>Exam 2: {exam2}</p>
        <p>Essay: {essay}</p>
        <p>Presentation: {presentation}</p>
      </div>
      {loggedInUser.year > 5 &&
      <button onClick={()=> handleClassSelect(title)}>Edit</button>}
      {showEditGradesModal && 
      <EditGradesModal classCard={classCard} student={student}/>
      }
    </div>
  );
}