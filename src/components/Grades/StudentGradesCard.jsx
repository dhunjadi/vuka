import React, { useContext, useEffect } from "react";
import userList from "../Login/userList";
import Navbar from "../Navbar/Navbar";
import ClassCard from "./ClassCard";
import { v4 as uuidv4 } from "uuid";
import gradesList from "./gradesList";
import { GradesContext } from '../../context/GradesContext'

export default function StudentGradesCard(props) {

  const { setStudentID } = useContext(GradesContext)
  const student = userList.find(
    (element) => element.id === props.match.params.id
  );
  const foundClassList = gradesList.find((el) => el.id === student.id);

useEffect(()=>{
  setStudentID(student.id)
}, [setStudentID, student.id])

  const displayClasses = foundClassList.classes.map((classCard) => {
    return <ClassCard key={uuidv4()} classCard={classCard} />;
  });

  return (
    <div id="student-grades-card">
      <Navbar />
      <div className="container">{displayClasses}</div>
    </div>
  );
}
