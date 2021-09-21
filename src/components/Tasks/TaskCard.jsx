import React from "react";

export default function TaskCard({ taskCard }) {
  const { title, text, subject } = taskCard;

  return (
    <div className="task-card">
      <h1 className="task-card-title">{title}</h1>
      <span>{subject}</span>
      <p className="task-card-text">{text}</p>
      <div className="task-card-btn">
        <button>Mark as Completed</button>
      </div>
    </div>
  );
}
