import React from "react";
import Navbar from "../Navbar/Navbar";
import bookList from "./bookList";

export default function BookDetails(props) {
  const book = bookList.find((element) => element.id === props.match.params.id);
  const { imageLink, title, author, language, pages, year } = book;

  return (
    <div id="book-details">
      <Navbar />
      <div className="book-details-container">
        <div className="book-details-img">
          <img src={imageLink} alt={title} />
        </div>
        <div className="book-details-txt">
          <div className="book-details-pair">
            <h4>Title:</h4>
            <p>{title}</p>
          </div>
          <div className="book-details-pair">
            <h4>Author:</h4>
            <p>{author}</p>
          </div>
          <div className="book-details-pair">
            <h4>Language:</h4>
            <p>{language}</p>
          </div>
          <div className="book-details-pair">
            <h4>Pages:</h4>
            <p>{pages}</p>
          </div>
          <div className="book-details-pair">
            <h4>Year:</h4>
            <p>{year}</p>
          </div>
          <div className="book-details-btn">
      <button>Make a reservation</button>
      </div>
        </div>
        
      </div>
      
      
    </div>
  );
}
