import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import { NewsContext } from "../../context/NewsContext";

export default function NewsCard({ newsCard }) {
  const { title, textFull, id } = newsCard;
  const {news, setNews} = useContext(NewsContext)
  const newsPiece = newsCard;

  const [showDeleteNewsModal, setShowDeleteNewsModal] = useState(false);

  const handleDeleteNewsClick = () => {
    setShowDeleteNewsModal(true)
  };

  const handleConfirmNewsDelete = (newsToRemove) => {
    setNews(news.filter(element => element.id !== newsToRemove.id))
  }

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="news-card">
      <Link to={`/home/news/${id}`}>
        <h1 className="news-card-title">{title}</h1>
        <p className="news-card-text">{textFull.substring(0, 50) + "..."}</p>
      </Link>
      {loggedInUser.year > 5 ? (
        <div className="news-card-btns">
          <button>Edit</button>
          <button onClick={() => handleDeleteNewsClick(newsPiece)}>Delete</button>
        </div>
      ) : null}
      {showDeleteNewsModal ? (
        <div className="modal">
          <div className="delete-news-modal-title">
            <h1>Are you sure you want to delete {title}?</h1>
          </div>
          <div className="delete-news-modal-btns">
            <button onClick={()=> handleConfirmNewsDelete(newsPiece)}>Yes</button>
            <button
              onClick={() => setShowDeleteNewsModal(!showDeleteNewsModal)}
            >
              No
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
