import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import bookList from "./bookList";
import { UserContext } from "../../context/UserContex";

export default function BookDetails(props) {
  const book = bookList.find((element) => element.id === props.match.params.id);
  const { imageLink, title, author, language, pages, year } = book;
  const { loggedInUser } = useContext(UserContext);
  const [copies, setCopies] = useState(book.copiesAvailiable);
  const [showModal, setShowModal] = useState(false)

  const handleReservation = () => {
    const duplicate = loggedInUser.books.find((x) => x.id === book.id);
    if (!duplicate && copies > 0) {
      setCopies((prevCopies) => prevCopies - 1);
      loggedInUser.books.push(book);
      console.log(loggedInUser.books);
    } else {
      setShowModal(!showModal)
    }
  };

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
          <div className="book-details-pair">
            <h4>Copies Availiable:</h4>
            <p>{copies}</p>
          </div>
          <div className="book-details-btn">
            <button onClick={handleReservation}>Make a reservation</button>
          </div>
        </div>
        {showModal ? (
          <div className="modal">
            <h1>You can reserve one copy of a book at a time!</h1>
            <button onClick={() => setShowModal(!showModal)}>OK</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
