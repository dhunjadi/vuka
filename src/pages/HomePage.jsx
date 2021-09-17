import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar'
import newsList from "../newsList";
import { v4 as uuidv4 } from 'uuid';
import NewsCard from "../components/News/NewsCard";
import ReactPaginate from "react-paginate";


export default function HomePage() {

  const [news] = useState(newsList)
  const [pageNumber, setPageNumber] = useState(0)

  const newsPerPage = 5
  const pagesVisited = pageNumber * newsPerPage

  const displayNews = news.slice(pagesVisited, pagesVisited + newsPerPage).map(newsCard =>{
    return <NewsCard key={uuidv4()} newsCard={newsCard} /> 
  })

  const pageCount = Math.ceil(news.length / newsPerPage)
  const handlePageChange = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div id='home'>
      <Navbar />
      <div className="container">
        {displayNews}
        <ReactPaginate 
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>

    </div>
  );
}
