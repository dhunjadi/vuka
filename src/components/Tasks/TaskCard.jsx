import React, { useState } from "react";

export default function TaskCard({ taskCard }) {
  const { title, text, subject, year } = taskCard;
  const [completed, setCompleted] = useState(false)

  return (
    <div className={completed ? 'task-card task-card-completed' : 'task-card'}>
      <h1 className="task-card-title">{title}</h1>
      <span>{subject} Year: {year}</span>
      <p className="task-card-text">{text}</p>
      <div className="task-card-btn">
        <button onClick={()=> {setCompleted(true)}}>Mark as Completed</button>
      </div>
    </div>
  );
}
