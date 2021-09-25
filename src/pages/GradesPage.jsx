import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { UserContext } from "../context/UserContex";
import ClassCard from "../components/Grades/ClassCard";
import { v4 as uuidv4 } from "uuid";

export default function GradesPage() {
  const { loggedInUser } = useContext(UserContext);
  const [currentSemester, setCurrentSemester] = useState(1);

  const filtered = loggedInUser.classes.filter((element) => {
    return element.semester === currentSemester;
  });

  const displayClasses = filtered.map((classCard) => {
    return <ClassCard key={uuidv4()} classCard={classCard} />;
  });

  return (
    <div id="grades">
      <Navbar />
      <div className="container">
        <div className="semester-container">
          <h4>Semesters:</h4>
          <div
            className={currentSemester === 1 ? "semester active-semester" : "semester"} 
            onClick={() => {setCurrentSemester(1)}}
          >
           1
            </div>
          <div
            className={currentSemester === 2 ? "semester active-semester" : "semester"}
            onClick={() => {setCurrentSemester(2)}}
          >
            2
            </div>
          <div
            className={currentSemester === 3 ? "semester active-semester" : "semester"} 
            onClick={() => {setCurrentSemester(3)}}
          >
            3
            </div>
          <div
              className={currentSemester === 4 ? "semester active-semester" : "semester"} 
              onClick={() => {setCurrentSemester(4)}}
          >
            4
            </div>
          <div
            className={currentSemester === 5 ? "semester active-semester" : "semester"}  
            onClick={() => {setCurrentSemester(5)}}
          >
            5
          </div>
          <div 
            className={currentSemester === 6 ? "semester active-semester" : "semester"}
            onClick={() => {setCurrentSemester(6)}}
          >
            6
          </div>
        </div>
        <div className="grades-container">{displayClasses}</div>
      </div>
    </div>
  );
}
