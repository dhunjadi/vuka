import React from "react";

export default function EditNews(props) {
  const { info, handleNewsChange, setShowEditNewsModal } = props;

const handleChange = (changes) => {
    handleNewsChange(info.id, {...info, ...changes})
}

  return (
    <div className="modal">
      <div className="edit-news-modal-title">
        <p>Edit News</p>
        <input type="text" 
        value={info.title} 
        onChange={(e)=> handleChange({title: e.target.value})}
        />
      </div>
      <div className="edit-news-modal-input">
        <select 
        value={info.type}
        onChange={(e)=> handleChange({type: e.target.value})}>
          <option value="general">General</option>
          <option value="hospitality">Hospitality</option>
          <option value="mechatronics">Mechatronics</option>
        </select>
        <textarea cols="45" rows="10" value={info.textFull} onChange={(e)=> handleChange({textFull: e.target.value})}></textarea>
      </div>
      <div className="edit-news-modal-btns">
        <button>Confirm Changes</button>
        <button onClick={()=> setShowEditNewsModal(false)}>Cancel</button>
      </div>
    </div>
  );
}
