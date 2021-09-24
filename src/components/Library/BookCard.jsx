import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ bookCard }) {
  const { imageLink, title, author, id } = bookCard;

  return (
    <div className="book-card">
      <Link to={`/library/book/${id}`}>
        <img src={imageLink} alt={title + ".jpg"} />
        <div className="book-title-container">
          <h3>{title}</h3>
        </div>
        <div className="book-author-container">
          <h3>{author}</h3>
        </div>
      </Link>
    </div>
  );
}
