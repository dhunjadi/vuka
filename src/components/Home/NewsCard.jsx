import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import EditNewsModal from "./EditNewsModal";
import { NewsContext } from "../../context/NewsContext";

export default function NewsCard({ newsCard }) {
  const { loggedInUser } = useContext(UserContext);
  const {news, setNews, handleNewsDelete} = useContext(NewsContext)
  const { title, text, id } = newsCard;

  // Modals states
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
        <p className="news-card-text">{text.substring(0, 50) + "..."}</p>
      </Link>
      {loggedInUser.year > 5 && (
        <div className="news-card-btns">
          <button onClick={() => handleNewsSelect(id)}>Edit</button>
          <button onClick={()=> handleNewsDelete(id)}>Delete</button>
        </div>
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
