import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import DeleteNewsModal from "./DeleteNewsModal";
import EditNewsModal from "./EditNewsModal";

export default function NewsCard({ newsCard }) {
  const { loggedInUser } = useContext(UserContext);
  const { title, textFull, id } = newsCard;
  const newsPiece = newsCard;

  // Modals states
  const [showDeleteNewsModal, setShowDeleteNewsModal] = useState(false);
  const [showEditNewsModal, setShowEditNewsModal] = useState(false);

  return (
    <div className="news-card">
      <Link to={`/home/news/${id}`}>
        <h1 className="news-card-title">{title}</h1>
        <p className="news-card-text">{textFull.substring(0, 50) + "..."}</p>
      </Link>
      {loggedInUser.year > 5 && (
        <div className="news-card-btns">
          <button onClick={() => setShowEditNewsModal(true)}>Edit</button>
          <button onClick={() => setShowDeleteNewsModal(true)}>Delete</button>
        </div>
      )}
      {showDeleteNewsModal && (
        <DeleteNewsModal
          newsCard={newsCard}
          showDeleteNewsModal={showDeleteNewsModal}
          setShowDeleteNewsModal={setShowDeleteNewsModal}
          newsPiece={newsPiece}
        />
      )}

      {showEditNewsModal && (
        <EditNewsModal
          showEditNewsModal={showEditNewsModal}
          setShowEditNewsModal={setShowEditNewsModal}
        />
      )}
    </div>
  );
}
