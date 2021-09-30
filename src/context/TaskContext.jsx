import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import taskList from "../components/Tasks/taskList";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    const data = localStorage.getItem("my-tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-tasks", JSON.stringify(tasks));
  });

  const handleCreateTask = () => {
    const newTask = {
      id: uuidv4(),
      title: "New Task Title",
      text: "New Task Text",
      study: "New Task Study",
      subject: "New Task Subject",
      year: "New Task Year",
      published: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const selectedTaskinfo = tasks.find(task => task.id === selectedTaskId)

  const handleTaskSelect = (id) => {
    setSelectedTaskId(id)
  }

  const handleTaskChange = (id, task) => {
    const newTasks = [...tasks]
    const index = newTasks.findIndex(x => x.id === id)
    newTasks[index] = task
    setTasks(newTasks)
  }

  const taskContextValue = {
    tasks,
    setTasks,
    handleCreateTask,
    handleDeleteTask,
    handleTaskSelect,
    selectedTaskinfo,
    handleTaskChange
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
};
