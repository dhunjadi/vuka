import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import BookCard from "../components/Library/BookCard";

export default function LibraryPage() {
  const apiKey = "AIzaSyAXI3E9DPOQNaxMGoStQp2JVaYY5NFQhnI";
  const [serchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          serchText +
          "&key=" +
          apiKey
      )
      .then((res) => {
        setResults(res.data.items);
        console.log(results)
      });
  };

  const displayBooks = results.map((bookCard) => {
    return <BookCard key={bookCard.id} bookCard={bookCard}/>
  });

  return (
    <div id="library">
      <Navbar />
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            value={serchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          
        </div>
        <div className="book-container">{displayBooks}</div>
      </div>
    </div>
  );
}
