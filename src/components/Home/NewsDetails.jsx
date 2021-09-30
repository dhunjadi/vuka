import React from "react";
import { useContext } from "react/cjs/react.development";
import { NewsContext } from "../../context/NewsContext";
import Navbar from "../Navbar/Navbar";


export default function NewsDetails(props) {
  const {news} = useContext(NewsContext)
  const newsPiece = news.find((element) => element.id === props.match.params.id);
  const { title, text } = newsPiece;

  return (
    <div id="news-details">
      <Navbar />
      <div className="container">
        <div className="news-details-container">
          <div className="news-details-title">
            <h1>{title}</h1>
          </div>
          <div className="news-details-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
