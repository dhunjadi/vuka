import React, { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";

export default function EditNews({ selectedNewsinfo }) {
  const { title, type, text, id, published } = selectedNewsinfo;
  const { handleNewsChange, handleNewsSelect } = useContext(NewsContext);

  const handleChange = (changes) => {
    handleNewsChange(id, { ...selectedNewsinfo, ...changes });
  };
  return (
    <div className="modal">
      <div className="edit-news-modal-title">
        <p>Edit News</p>
        <input
          type="text"
          value={title}
          onChange={(e) => handleChange({ title: e.target.value })}
        />
      </div>
      <div className="edit-news-modal-input">
        <select
          value={type}
          onChange={(e) => handleChange({ type: e.target.value })}
        >
          <option value="general">General</option>
          <option value="hospitality">Hospitality</option>
          <option value="mechatronics">Mechatronics</option>
          <option value="professor">Professor</option>
        </select>
        <textarea
          cols="45"
          rows="10"
          value={text}
          onChange={(e) => handleChange({ text: e.target.value })}
        ></textarea>
        <select
          value={published}
          onChange={(e) => handleChange({ published: e.target.value })}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
      <div className="edit-news-modal-btns">
        <button onClick={() => handleNewsSelect(undefined)}>OK</button>
      </div>
    </div>
  );
}
