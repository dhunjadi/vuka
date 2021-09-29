import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import TaskCard from "../components/Tasks/TaskCard";
import { UserContext } from "../context/UserContex";
import { TaskContext } from "../context/TaskContext"; 
import { v4 as uuidv4 } from "uuid";

export default function TasksPage() {
  const { loggedInUser } = useContext(UserContext);
  const { taskList } = useContext(TaskContext)

  const filtered = taskList.filter((task) => {
    return task.study === loggedInUser.study && task.year <= loggedInUser.year && task.published === true;
  });

  const displayTasks = filtered
    .sort((a, b) => {
      return b.year - a.year;
    })
    .map((taskCard) => {
      return <TaskCard key={uuidv4()} taskCard={taskCard} />;
    });

  if (loggedInUser.length !== 0) {
    return (
      <div id="tasks">
        <Navbar />
        <div className="container">
          {loggedInUser.year > 5 && (
            <div className="task-page-btns-container">
              <button>Add New Task</button>
            </div>
          )}

          {displayTasks}
        </div>
      </div>
    );
  } else {
    return (
      <div id="tasks">
        <div className="container">
          <h1>You need to log in to access this page</h1>
        </div>
      </div>
    );
  }
}
