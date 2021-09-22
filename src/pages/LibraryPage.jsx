import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import BookCard from "../components/Library/BookCard";
import bookList from "../components/Library/bookList";

export default function LibraryPage() {
  const [searchText, setSearchText] = useState("");
  const [results] = useState(bookList);

  const displayBooks = results
    .filter((bookCard) => {
      if (searchText === "") {
        return bookCard;
      } else if (
        bookCard.title.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return bookCard;
      }
    })
    .map((bookCard) => {
      return <BookCard key={bookCard.id} bookCard={bookCard} />;
    });

  return (
    <div id="library">
      <Navbar />
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Titles..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="book-container">{displayBooks}</div>
      </div>
    </div>
  );
}
