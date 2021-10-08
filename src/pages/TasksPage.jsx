import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import TaskCard from "../components/Tasks/TaskCard";
import { UserContext } from "../context/UserContex";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

export default function TasksPage() {
  const { loggedInUser } = useContext(UserContext);
  const { tasks,  handleCreateTask } = useContext(TaskContext);

  // Filtering tasks for students (based on their study program, study year and whether the task is published or not)
  const filteredStudents = tasks.filter((task) => {
    return (
      task.study === loggedInUser.study &&
      task.year <= loggedInUser.year &&
      task.status === "published"
    );
  });

  // Displaying published tasks for students
  const displayTasksStudents = filteredStudents
    .sort((a, b) => {
      return b.year - a.year;
    })
    .map((taskCard) => {
      return <TaskCard key={uuidv4()} taskCard={taskCard} />;
    });

  // Displaying all tasks so professors and admin can add, remove or edit, publish and unpublish tasks for students
  const displayTasksProfAndAdmin = tasks
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
              <button onClick={handleCreateTask}>Create New Task</button>
            </div>
          )}

          {loggedInUser.year < 6
            ? displayTasksStudents
            : displayTasksProfAndAdmin}
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
