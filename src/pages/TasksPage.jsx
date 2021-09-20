import React, { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import taskList from '../taskList'
import TaskCard from '../components/Tasks/TaskCard'
import { UserContext } from "../context/UserContex";
import { v4 as uuidv4 } from "uuid";

export default function TasksPage() {

    const { loggedInUser } = useContext(UserContext);

    const filtered = taskList.filter(task => {
        return task.study === loggedInUser.study
    })
    
    const displayTasks = filtered.map(taskCard => {
        return <TaskCard key={uuidv4()} taskCard={taskCard} />
    })

    return (
        <div id='tasks'>
            <Navbar />
            {displayTasks}
        </div>
    )
}
