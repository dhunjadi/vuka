import React, { useContext } from "react";
import { GradesContext } from "../../context/GradesContext";

export default function EditGradesModal({ selectedClass }) {
  const { handleClassSelect, handleGradeChange } = useContext(GradesContext);

  const handleChange = (changes) => {
    handleGradeChange(selectedClass.title, { ...selectedClass, ...changes });
  };

  console.log(selectedClass)

  return (
    <div className="modal">
      <div className="edit-news-modal-title">
        <p>{selectedClass.title}</p>
        <div className="edit-grades-modal pair">
          <label htmlFor="">Exam 1: </label>
          <select
            value={selectedClass.exam1}
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
            value={selectedClass.exam2}
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
              value={selectedClass.essay}
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
              value={selectedClass.presentation}
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
        <button onClick={() => handleClassSelect(undefined)}>OK</button>
      </div>
    </div>
  );
}
