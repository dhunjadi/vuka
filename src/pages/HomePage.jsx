import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import NewsCard from "../components/Home/NewsCard";
import ReactPaginate from "react-paginate";
import { UserContext } from "../context/UserContex";
import { NewsContext } from "../context/NewsContext";
import AddNewsModal from "../components/Home/AddNewsModal";

export default function HomePage() {
  const { news } = useContext(NewsContext);
  //Pagination
  const [pageNumber, setPageNumber] = useState(0);
  // Logged in user
  const { loggedInUser } = useContext(UserContext);
  //News type
  const [newstype, setNewsType] = useState("general");
  // Modal window
  const [showNewNewsModal, setShowNewNewsModal] = useState(false);

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
          {showNewNewsModal && (
            <AddNewsModal
              showNewNewsModal={showNewNewsModal}
              setShowNewNewsModal={setShowNewNewsModal}
            />
          )}
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
