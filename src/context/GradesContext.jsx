import { createContext, useState, useEffect } from "react";
import gradesList from '../components/Grades/gradesList'

export const GradesContext = createContext();

export const GradesContextProvider = ({ children }) => {
const [grades, setGrades] = useState(gradesList)
const [studentID, setStudentID] = useState("1")
const [selectedClassTitle, setSelectedClassTitle] = useState()

/* const foundClassList = gradesList.find((el) => el.id === studentID); */
console.log(studentID)
console.log(grades)
console.log(grades[studentID - 1].classes)

const selectedClass = grades[studentID - 1].classes.find(x => x.title === selectedClassTitle)
console.log(selectedClass)

const handleClassSelect = (title) =>{
  setSelectedClassTitle(title)
} 

 const handleGradeChange = (title, grade) => {
  const newGrades = [...grades]
  const index = newGrades[studentID - 1].classes.findIndex(x => x.title === title)
  newGrades[studentID - 1].classes[index] = grade
  setGrades(newGrades)
}


// Local Storage
useEffect(() => {
  const data = localStorage.getItem("my-grades");
  if (data) {
    setGrades(JSON.parse(data));
  }
}, []); 

useEffect(() => {
  localStorage.setItem("my-grades", JSON.stringify(grades));
});

    const gradesContextValue = {
      selectedClass,
      handleClassSelect,
      handleGradeChange,
      grades,
      setGrades,
      studentID,
      setStudentID
    }
    return (
        <GradesContext.Provider value={gradesContextValue}>
          {children}
        </GradesContext.Provider>
      );
}