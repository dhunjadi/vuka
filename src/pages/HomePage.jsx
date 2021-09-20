import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import newsList from "../newsList";
import { v4 as uuidv4 } from "uuid";
import NewsCard from "../components/News/NewsCard";
import ReactPaginate from "react-paginate";
import { UserContext } from "../context/UserContex";

export default function HomePage() {
  const [news] = useState(newsList);
  const [pageNumber, setPageNumber] = useState(0);
  const { loggedInUser } = useContext(UserContext);
  const [newstype, setNewsType] = useState("general");

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
      </div>
    </div>
  );
}
