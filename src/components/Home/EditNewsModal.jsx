import React from 'react'

export default function EditNewsModal(props) {
    const {setShowEditNewsModal} = props
    return (
        <div className="modal">
          <div className="edit-news-modal-title">
            <p>Edit News</p>
            <input type="text" />
          </div>
          <div className="edit-news-modal-input">
            <select>
              <option value="general">General</option>
              <option value="hospitality">Hospitality</option>
              <option value="mechatronics">Mechatronics</option>
            </select>
            <textarea cols="45" rows="10" ></textarea>
          </div>
          <div className="edit-news-modal-btns">
            <button >Confirm Changes</button>
            <button onClick={()=> setShowEditNewsModal(false)}>
              Cancel
            </button>
          </div>
        </div>
    )
}
