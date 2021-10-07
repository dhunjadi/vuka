import React, { useContext, useEffect } from "react";
import userList from "../Login/userList";
import Navbar from "../Navbar/Navbar";
import ClassCard from "./ClassCard";
import { v4 as uuidv4 } from "uuid";
import { GradesContext } from '../../context/GradesContext'

export default function StudentGradesCard(props) {
  const student = userList.find(
    (element) => element.id === props.match.params.id
  );
  const { setGrades } = useContext(GradesContext)

  useEffect(()=>{
    setGrades([])
    setGrades(student.classes)
  }, [setGrades, student.classes])
  

  const displayClasses = student.classes.map((classCard) => {
    return <ClassCard key={uuidv4()} classCard={classCard} student={student}/>;
  });

  return (
    <div id="student-grades-card">
      <Navbar />
      <div className="container">{displayClasses}</div>
    </div>
  );
}
