import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContex";
import { NewsContext } from "../../context/NewsContext";

export default function NewsCard({ newsCard }) {
  const { title, text, id, type, status } = newsCard;
  const { loggedInUser } = useContext(UserContext);
  const { handleNewsDelete, handleNewsSelect} = useContext(NewsContext)
 

  return (
    <div className="news-card">
      <Link to={`/home/news/${id}`}>
        <h1 className="news-card-title">{title}</h1>
        {loggedInUser.year > 5 && 
        <>
          <span>Type: {type.charAt(0).toUpperCase() + type.slice(1)}</span> <br />
          <span>{status === "published" ? 'Published' : 'Unpublished'}</span>
          </>
        }
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
