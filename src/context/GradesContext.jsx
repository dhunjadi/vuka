import { createContext, useState, useEffect } from "react";

export const GradesContext = createContext();

export const GradesContextProvider = ({ children }) => {
const [grades, setGrades] = useState([])
const [selectedClassTitle, setSelectedClassTitle] = useState()

const selectedClass = grades.find(x => x.title === selectedClassTitle)

const handleClassSelect = (title) =>{
  setSelectedClassTitle(title)
}

const handleGradeChange = (title, grade) => {
  const newGrades = [...grades]
  const index = newGrades.findIndex(x => x.title === title)
  newGrades[index] = grade
  setGrades(newGrades)
}

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
        grades,
        setGrades,
        handleClassSelect,
        selectedClass,
        handleGradeChange
    }
    return (
        <GradesContext.Provider value={gradesContextValue}>
          {children}
        </GradesContext.Provider>
      );
}