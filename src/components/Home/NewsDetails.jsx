import React from "react";
import Navbar from "../Navbar/Navbar";
import newsList from "./newsList";

export default function NewsDetails(props) {
  const news = newsList.find((element) => element.id === props.match.params.id);
  const { title, textFull } = news;

  return (
    <div id="news-details">
      <Navbar />
      <div className="container">
        <div className="news-details-container">
          <div className="news-details-title">
            <h1>{title}</h1>
          </div>
          <div className="news-details-text">
            <p>{textFull}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
