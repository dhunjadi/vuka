import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'


export default function EditTaskModal({selectedTaskinfo}) {
  const { title, study, subject, year, text, id, status } = selectedTaskinfo
  const { handleTaskChange, handleTaskSelect } = useContext(TaskContext)

  const handleChange = (changes) => {
    handleTaskChange(id, {...selectedTaskinfo, ...changes})
  }

    return (
<div className="edit-task-modal">
      <div className="edit-task-modal-title">
        <p>Edit Task</p>
        <input
          type="text"
          value={title}
          onChange={(e)=> handleChange({title: e.target.value})}
        />
      </div>
      <div className="edit-task-modal-input">
        <select
        value={study}
        onChange={(e)=> handleChange({study: e.target.value})}
        >
          <option value=""></option>
          <option value="hospitality">Hospitality</option>
          <option value="mechatronics">Mechatronics</option>
        </select>
        <select
        value={subject}
        onChange={(e)=> handleChange({subject: e.target.value})}
        >
          <option value=""></option>
          <option value="tourism">Tourism</option>
          <option value="economics">Economics</option>
          <option value="mechanics">Mechanics</option>
        </select>
        <select
        value={year}
        onChange={(e)=> handleChange({year: e.target.value})}
        >
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <textarea
          cols="45"
          rows="10"
          value={text}
          onChange={(e)=> handleChange({text: e.target.value})}
        ></textarea>
        <p>Status:</p>
        <select
        value={status}
        onChange={(e)=> handleChange({status: e.target.value})}
        >
          <option value="published">Published</option>
          <option value="unpublished">Unpublished</option>
        </select>
      </div>
      <div className="edit-task-modal-btns">
        <button onClick={()=> handleTaskSelect(undefined)}>
          OK
        </button>
      </div>
    </div>
    )
}
