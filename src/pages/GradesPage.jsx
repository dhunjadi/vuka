import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { UserContext } from "../context/UserContex";
import ClassCard from '../components/Grades/ClassCard'
import { v4 as uuidv4 } from "uuid";

export default function GradesPage() {
  const { loggedInUser } = useContext(UserContext);

    const displayClasses = loggedInUser.classes.map((classCard) =>{
        return <ClassCard key={uuidv4()} classCard={classCard} />
    })

  return (
    <div id="grades">
      <Navbar />
      <div className="container">
        <div className="student-name-container">
          <h1>
            {loggedInUser.fName} {loggedInUser.lName}
          </h1>
        </div>
        {displayClasses}
      </div>
    </div>
  );
}
