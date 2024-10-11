import React, { useState } from "react";
import "../styles.css";

/* A field to search for movies */

export default function Finder({ movies, setFilteredMovies }) {
  const [search, setSearch] = useState(""); // State to store the search information

  const searcher = (e) => {
    setSearch(e.target.value); // Event that Updates the search state

    const searchValue = e.target.value.toLowerCase();

    // The filter method returns a new array that selects the values of the original array by some predicate
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );

    // Updates the filtered movies state
    setFilteredMovies(results);
  };

  return (
    <div className="search-input">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Find films..."
      />
    </div>
  );
}
