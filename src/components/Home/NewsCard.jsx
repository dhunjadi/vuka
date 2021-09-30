import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import { NewsContext } from "../../context/NewsContext";

export default function NewsCard({ newsCard }) {
  const { loggedInUser } = useContext(UserContext);
  const { handleNewsDelete, handleNewsSelect} = useContext(NewsContext)
  const { title, text, id } = newsCard;




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
    </div>
  );
}
