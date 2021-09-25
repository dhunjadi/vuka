import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ newsCard }) {
  const { title, text, id } = newsCard;
  return (
    <div className="news-card">
      <Link to={`/home/news/${id}`}>
        <h1 className="news-card-title">{title}</h1>
        <p className="news-card-text">{text}</p>
      </Link>
    </div>
  );
}
