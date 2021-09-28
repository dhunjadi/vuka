import React, { useState, useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import { v4 as uuidv4 } from "uuid";

export default function AddNewsModal(props) {
  const { showNewNewsModal, setShowNewNewsModal } = props;
  const { setNews } = useContext(NewsContext);
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsText, setNewNewsText] = useState("");
  const [newNewsType, setNewNewsType] = useState("General");

  const handleAddNewNews = () => {
    const newNews = {
      id: uuidv4(),
      title: newNewsTitle,
      text: newNewsText.substring(0, 20) + "...",
      textFull: newNewsText,
      type: newNewsType.toLowerCase(),
    };
    setNews((prevNews) => [...prevNews, newNews]);
    setShowNewNewsModal(!showNewNewsModal);
  };

  return (
    <div className="modal">
      <div className="add-new-news-modal-title">
        <p>Add New News</p>
        <input
          type="text"
          value={newNewsTitle}
          onChange={(e) => {
            setNewNewsTitle(e.target.value);
          }}
        />
      </div>
      <div className="add-new-news-modal-input">
        <select
          value={newNewsType}
          onChange={(e) => {
            setNewNewsType(e.target.value);
          }}
        >
          <option value="general">General</option>
          <option value="hospitality">Hospitality</option>
          <option value="mechatronics">Mechatronics</option>
        </select>
        <textarea
          onChange={(e) => {
            setNewNewsText(e.target.value);
          }}
          cols="45"
          rows="10"
          placeholder="Write news text here..."
          value={newNewsText}
        ></textarea>
      </div>
      <div className="add-new-news-modal-btns">
        <button onClick={handleAddNewNews}>Add</button>
        <button onClick={() => setShowNewNewsModal(!showNewNewsModal)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
