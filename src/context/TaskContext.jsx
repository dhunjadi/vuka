import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "task title1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "hospitality",
      subject: "economics",
      year: 1,
      published: true,
    },
    {
      id: 2,
      title: "task title2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "hospitality",
      subject: "tourism",
      year: 1,
      published: true,
    },
    {
      id: 3,
      title: "task title3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "mechatronics",
      subject: "mechanics",
      year: 1,
      published: true,
    },
    {
      id: 4,
      title: "task title4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "mechatronics",
      subject: "mechanics",
      year: 1,
      published: true,
    },
    {
      id: 5,
      title: "task title5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "hospitality",
      subject: "economics",
      year: 3,
      published: true,
    },
    {
      id: 6,
      title: "task title6",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "hospitality",
      subject: "economics",
      year: 2,
      published: true,
    },
    {
      id: 7,
      title: "task title7",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "mechatronics",
      subject: "mechanics",
      year: 1,
      published: true,
    },
    {
      id: 8,
      title: "task title8",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "mechatronics",
      subject: "mechanics",
      year: 3,
      published: true,
    },
    {
      id: 9,
      title: "task title9",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "mechatronics",
      subject: "mechanics",
      year: 2,
      published: true,
    },
    {
      id: 10,
      title: "task title10",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi mollitia possimus a temporibus ipsam laboriosam in aperiam quos maxime est illo dicta corporis, id quia consectetur magnam, error quisquam totam eum perferendis, quo ea enim? Ipsam iste totam dignissimos laborum quo perferendis recusandae ut, quasi vitae hic nostrum ullam?",
      study: "hospitality",
      subject: "economics",
      year: 1,
      published: true,
    },
  ]);


  useEffect(() => {
    const data = localStorage.getItem("my-tasks");
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-tasks", JSON.stringify(taskList));
  });

  const handleCreateTask = () =>{
      const newTask = {
        id: uuidv4(),
        title: 'New Task Title',
        text: 'New Task Text',
        study: 'New Task Study',
        subject: 'New Task Subject',
        year: 'New Task Year',
        published: false
      }
      setTaskList([...taskList, newTask])
  }

  const handleDeleteTask = (id) =>{
    setTaskList(taskList.filter(task => task.id !== id))
  }

  const taskContextValue = {
    taskList,
    setTaskList,
    handleCreateTask,
    handleDeleteTask
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
};
