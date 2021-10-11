import React, { useContext } from "react";
import { GradesContext } from "../../context/GradesContext";

export default function EditGradesModal({selectedClass}) {
  const { title, exam1, exam2, essay, presentation } = selectedClass
  const { handleGradeChange, handleClassSelect } = useContext(GradesContext)

  const handleChange = (changes) => {
    handleGradeChange(title, { ...selectedClass, ...changes });
  };
  
  return (
    <div className="modal">
      <div className="edit-news-modal-title">
        <p>{title}</p>
        <div className="edit-grades-modal pair">
          <label htmlFor="">Exam 1: </label>
          <select
            value={exam1}
            onChange={(e) => handleChange({ exam1: e.target.value })}
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="edit-grades-modal pair">
          <label htmlFor="">Exam 2: </label>
          <select
            value={exam2}
            onChange={(e) => handleChange({ exam2: e.target.value })}
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="edit-grades-modal pair">
            <label htmlFor="">Essay: </label>
            <select
              value={essay}
              onChange={(e) => handleChange({ essay: e.target.value })}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="edit-grades-modal pair">
            <label htmlFor="">Presentation: </label>
            <select
              value={presentation}
              onChange={(e) => handleChange({ presentation: e.target.value })}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="edit-news-modal-input"></div>
      <div className="edit-news-modal-btns">
        <button onClick={()=> handleClassSelect(undefined)}>OK</button>
      </div>
    </div>
  );
}
