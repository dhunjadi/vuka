import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import { NewsContext } from "../../context/NewsContext";

export default function NewsCard({ newsCard }) {
  const { loggedInUser } = useContext(UserContext);
  const { title, textFull, id } = newsCard;
  const { news, setNews } = useContext(NewsContext);
  const newsPiece = newsCard;
 
  // Modals states
  // Show / hide modals
  const [showDeleteNewsModal, setShowDeleteNewsModal] = useState(false);
  const [showEditNewsModal, setShowEditNewsModal] = useState(false);
  // Edit news states
  const [editNewsTitle, setEditNewsTitle] = useState(newsPiece.title)
  const [editNewsText, setEditNewsText] = useState(newsPiece.textFull)
  const [editNewsType, setEditNewsType] = useState(newsPiece.type)

  const handleConfirmNewsDelete = (newsToRemove) => {
    setNews(news.filter((element) => element.id !== newsToRemove.id));
  };

  const handleConfirmChanges = (updatedNews) => {
    if(updatedNews.id === newsPiece.id){
      console.log(updatedNews.title)
    }

  }

/*   const handleAddNewNews = () => {
    const newNews = {
      id: uuidv4(),
      title: newNewsTitle,
      text: newNewsText.substring(0, 20) + '...',
      textFull: newNewsText,
      type: newNewsType.toLowerCase(),
    };
    setNews((prevNews) => [...prevNews, newNews]);
    setShowNewNewsModal(!showNewNewsModal);
  }; */

  return (
    <div className="news-card">
      <Link to={`/home/news/${id}`}>
        <h1 className="news-card-title">{title}</h1>
        <p className="news-card-text">{textFull.substring(0, 50) + "..."}</p>
      </Link>
      {loggedInUser.year > 5 ? (
        <div className="news-card-btns">
          <button onClick={() => setShowEditNewsModal(true)}>Edit</button>
          <button onClick={() => setShowDeleteNewsModal(true)}>Delete</button>
        </div>
      ) : null}
      {showDeleteNewsModal ? (
        <div className="modal">
          <div className="delete-news-modal-title">
            <h1>Are you sure you want to delete {title}?</h1>
          </div>
          <div className="delete-news-modal-btns">
            <button onClick={() => handleConfirmNewsDelete(newsPiece)}>
              Yes
            </button>
            <button
              onClick={() => setShowDeleteNewsModal(!showDeleteNewsModal)}
            >
              No
            </button>
          </div>
        </div>
      ) : null}
      {showEditNewsModal ? (
        <div className="modal">
          <div className="edit-news-modal-title">
            <p>Edit News</p>
            <input type="text" value={editNewsTitle} onChange={(e)=> setEditNewsTitle(e.target.value)}/>
          </div>
          <div className="edit-news-modal-input">
            <select
            value={editNewsType}
            onChange={(e) => {
              setEditNewsType(e.target.value.toLowerCase());
            }}>
              <option value="general">General</option>
              <option value="hospitality">Hospitality</option>
              <option value="mechatronics">Mechatronics</option>
            </select>
            <textarea cols="45" rows="10" value={editNewsText} onChange={(e)=> setEditNewsText(e.target.value) }></textarea>
          </div>
          <div className="edit-news-modal-btns">
            <button onClick={()=> handleConfirmChanges(newsPiece)}>Confirm Changes</button>
            <button onClick={() => setShowEditNewsModal(!showEditNewsModal)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
