import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContex";
import { TaskContext } from "../../context/TaskContext";
import EditTaskModal from './EditTaskModal'

export default function TaskCard({ taskCard }) {
  const { study, title, text, subject, year, id } = taskCard;
  const { loggedInUser } = useContext(UserContext);
  const { handleDeleteTask, handleTaskSelect, selectedTaskinfo } = useContext(TaskContext);
  const [completed, setCompleted] = useState(false);

  return (
    <div className={completed ? "task-card task-card-completed" : "task-card"}>
      <h1 className="task-card-title">{title}</h1>
      <div className="task-info">
        {loggedInUser.year > 5 ? (
          <span>
            Study Program: {study.charAt(0).toUpperCase() + study.slice(1)}
          </span>
        ) : null}
        <span>
          Subject: {subject.charAt(0).toUpperCase() + subject.slice(1)}
        </span>
        <span>Year: {year}</span>
      </div>

      <p className="task-card-text">{text}</p>
      <div className="task-card-btns">
        {loggedInUser.year < 6 ? (
          <button
            onClick={() => {
              setCompleted(true);
            }}
          >
            Mark as Completed
          </button>
        ) : (
          <>
            <button onClick={()=> handleTaskSelect(id)}>Edit Task</button>
            <button onClick={() => handleDeleteTask(id)}>Delete Task</button>
          </>
        )}
      </div>
      {selectedTaskinfo && 
      <EditTaskModal 
      selectedTaskinfo={selectedTaskinfo}
      />}
    </div>
  );
}
