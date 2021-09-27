import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import NewsCard from "../components/Home/NewsCard";
import ReactPaginate from "react-paginate";
import { UserContext } from "../context/UserContex";
import { NewsContext } from "../context/NewsContext";

export default function HomePage() {
  const { news, setNews } = useContext(NewsContext);
  //Pagination
  const [pageNumber, setPageNumber] = useState(0);
  // Logged in user
  const { loggedInUser } = useContext(UserContext);
  //News type
  const [newstype, setNewsType] = useState("general");
  // Modal window
  const [showNewNewsModal, setShowNewNewsModal] = useState(false);
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsText, setNewNewsText] = useState("");
  const [newNewsType, setNewNewsType] = useState("General");

  const newsPerPage = 5;
  const pagesVisited = pageNumber * newsPerPage;

  const filtered = news.filter((news) => {
    return news.type === newstype;
  });

  const displayNews = filtered
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((newsCard) => {
      return <NewsCard key={uuidv4()} newsCard={newsCard} />;
    });

  const pageCount = Math.ceil(filtered.length / newsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleAddNewNews = () => {
    const newNews = {
      id: uuidv4(),
      title: newNewsTitle,
      text: newNewsText.substring(0, 20) + '...',
      textFull: newNewsText,
      type: newNewsType.toLowerCase(),
    };
    setNews((prevNews) => [...prevNews, newNews]);
    setShowNewNewsModal(!showNewNewsModal);
  };

  if (loggedInUser.length !== 0) {
    return (
      <div id="home">
        <Navbar />
        <div className="container">
          <div className="news-type-container">
            <div
              className={
                newstype === "general"
                  ? "news-general active-news"
                  : "news-general"
              }
              onClick={() => {
                setNewsType("general");
              }}
            >
              <h3>GENERAL</h3>
            </div>
            <div
              className={
                newstype === loggedInUser.study
                  ? "news-study active-news"
                  : "news-study"
              }
              onClick={() => {
                setNewsType(loggedInUser.study);
              }}
            >
              <h3>{loggedInUser.study.toUpperCase()}</h3>
            </div>
            {loggedInUser.year > 5 ? (
              <button
                onClick={() => {
                  setShowNewNewsModal(true);
                }}
              >
                Add News
              </button>
            ) : null}
          </div>
          {displayNews}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination-container"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
          />
          {showNewNewsModal ? (
            <div className="modal">
              <div className="add-new-news-modal-title">
                <p>Add New News</p>
                <input
                  type="text"
                  value={newNewsTitle}
                  onChange={(e) => {
                    setNewNewsTitle(e.target.value);
                  }}
                />
              </div>
              <div className="add-new-news-modal-input">
                <select
                  value={newNewsType}
                  onChange={(e) => {
                    setNewNewsType(e.target.value);
                  }}
                >
                  <option value="general">General</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="mechatronics">Mechatronics</option>
                </select>
                <textarea
                  value={newNewsText}
                  onChange={(e) => {
                    setNewNewsText(e.target.value);
                  }}
                  cols="45"
                  rows="10"
                  placeholder="Write news text here..."
                ></textarea>
              </div>
              <div className="add-new-news-modal-btns">
                <button onClick={handleAddNewNews}>Add</button>
                <button onClick={() => setShowNewNewsModal(!showNewNewsModal)}>
                  Cancel
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div id="home">
        <div className="container">
          <h1>You need to log in to access this page</h1>
        </div>
      </div>
    );
  }
}
