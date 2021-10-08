import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import NewsCard from "../components/Home/NewsCard";
import ReactPaginate from "react-paginate";
import { UserContext } from "../context/UserContex";
import { NewsContext } from "../context/NewsContext";

export default function HomePage() {
  // Imports from NewsContext
  const { news, handleNewsAdd } = useContext(NewsContext);
  // Logged in user
  const { loggedInUser } = useContext(UserContext);
  //Pagination
  const [pageNumber, setPageNumber] = useState(0);
  //News type displayed
  const [newstype, setNewsType] = useState("general");

  const newsPerPage = 5;
  const pagesVisited = pageNumber * newsPerPage;

  // Filtering news for students based on their study program and whether the news is published or not
  const filteredStudents = news.filter((news) => {
    return news.type === newstype && news.status === "published";
  });

  // Displaying published news for students
  const displayNewsStudents = filteredStudents
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((newsCard) => {
      return <NewsCard key={uuidv4()} newsCard={newsCard} />;
    });

  // Displaying all news so professors and admin can add, remove or edit, publish and unpublish news for students
  const displayNewsProfAndAdmin = news
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((newsCard) => {
      return <NewsCard key={uuidv4()} newsCard={newsCard} />;
    });

  // Page count for displaying news for students
  const pageCountStudents = Math.ceil(filteredStudents.length / newsPerPage);

  // Page count for displaying news for professors and admin
  const pageCountProfAndAdmin = Math.ceil(news.length / newsPerPage);

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
              <h3>{loggedInUser.year < 6 ? 'GENERAL' : 'STUDENT NEWS'}</h3>
            </div>
            {loggedInUser.year < 6 &&
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
            }
            
            {loggedInUser.year > 5 && (
              <button onClick={handleNewsAdd}>Add News</button>
            )}
          </div>
          {loggedInUser.year < 6
            ? displayNewsStudents
            : displayNewsProfAndAdmin}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={
              loggedInUser.year < 6 ? pageCountStudents : pageCountProfAndAdmin
            }
            onPageChange={handlePageChange}
            containerClassName={"pagination-container"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
          />
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
