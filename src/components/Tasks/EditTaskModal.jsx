import React from 'react'

export default function EditTaskModal() {
    return (
<div className="edit-task-modal">
      <div className="edit-task-modal-title">
        <p>Edit Task</p>
        <input
          type="text"
        />
      </div>
      <div className="edit-task-modal-input">
        <select>
          <option value="hospitality">Hospitality</option>
          <option value="mechatronics">Mechatronics</option>
        </select>
        <select>
          <option value="tourism">Tourism</option>
          <option value="economics">Economics</option>
          <option value="mechanics">Mechanics</option>
        </select>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <textarea
          cols="45"
          rows="10"
        ></textarea>
      </div>
      <div className="edit-task-modal-btns">
        <button>OK</button>
      </div>
    </div>
    )
}
