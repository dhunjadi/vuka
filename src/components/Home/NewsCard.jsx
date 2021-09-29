import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import DeleteNewsModal from "./DeleteNewsModal";
import EditNewsModal from "./EditNewsModal";
import { NewsContext } from "../../context/NewsContext";

export default function NewsCard({ newsCard }) {
  const { loggedInUser } = useContext(UserContext);
  const {news, setNews} = useContext(NewsContext)
  const { title, textFull, id } = newsCard;
  const newsPiece = newsCard;

  // Modals states
  const [showDeleteNewsModal, setShowDeleteNewsModal] = useState(false);
  const [showEditNewsModal, setShowEditNewsModal] = useState(false);

  //Selected News ID
  const [selectedNewsId, setSelectedNewsId] = useState()
  const selectedNews = news.find(element => element.id === selectedNewsId)

  const handleNewsSelect = (id) => {
    setSelectedNewsId(id)
    setShowEditNewsModal(true)
  }

  const handleNewsChange = (id, njuz) => {
    const newNews = [...news]
    const index = newNews.findIndex(x => x.id === id)
    newNews[index] = njuz
    setNews(newNews)
  }


  return (
    <div className="news-card">
      <Link to={`/home/news/${id}`}>
        <h1 className="news-card-title">{title}</h1>
        <p className="news-card-text">{textFull.substring(0, 50) + "..."}</p>
      </Link>
      {loggedInUser.year > 5 && (
        <div className="news-card-btns">
          <button onClick={() => handleNewsSelect(id)}>Edit</button>
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

      {selectedNewsId && (
        <EditNewsModal
          showEditNewsModal={showEditNewsModal}
          setShowEditNewsModal={setShowEditNewsModal}
          info={selectedNews}
          handleNewsChange={handleNewsChange}
          selectedNewsId={selectedNewsId}
          setSelectedNewsId={setSelectedNewsId}
        />
      )}
    </div>
  );
}
