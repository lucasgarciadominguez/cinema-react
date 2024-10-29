import React, { useState, useEffect } from "react";

import "../styles.css";
import { ReactComponent as Sun } from "../icons/Sun.svg";
import { ReactComponent as Moon } from "../icons/Moon.svg";
/* A field to search for movies */

export default function Finder({ movies, setFilteredMovies }) {
  const [search, setSearch] = useState(""); // State to store the search information
  const [rating, setRating] = useState(""); // State the store the value selected

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  const searcher = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    // Filter movies by search value
    const filteredResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );

    // Apply rating filter if a rating is selected
    const finalResults = applyRatingFilter(filteredResults, rating);

    // Updates the filtered movies state
    setFilteredMovies(finalResults);
  };
  // Function to handle rating change
  const filterRatings = (e) => {
    const selectedRating = e.target.value;
    setRating(selectedRating);

    // Apply the rating filter on the movies
    const filteredResults = applyRatingFilter(movies, selectedRating);

    // If there's a search term, filter results again by search value
    const finalResults = filteredResults.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    // Updates the filtered movies state
    setFilteredMovies(finalResults);
  };
  const applyRatingFilter = (movies, rating) => {
    if (rating === "1") {
      return movies.filter(
        (movie) =>
          Math.round(movie.vote_average) >= 1 &&
          Math.round(movie.vote_average) <= 5
      );
    } else if (rating === "2") {
      return movies.filter(
        (movie) =>
          Math.round(movie.vote_average) > 5 &&
          Math.round(movie.vote_average) <= 7
      );
    } else if (rating === "3") {
      return movies.filter(
        (movie) =>
          Math.round(movie.vote_average) > 7 &&
          Math.round(movie.vote_average) <= 10
      );
    } else {
      // If no rating filter is selected, return all movies
      return movies;
    }
  };
  return (
    <div>
      <nav>
        <a href="index.html">Home</a>
        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
          />
          <label className="dark_mode_label" for="darkmode-toggle">
            <Sun />
            <Moon />
          </label>
        </div>
      </nav>

      <div className="search-input">
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Find films..."
        />
      </div>

      <div className="filter-bar">
        <div className="filter-slot">
          <select
            className="filter-dropdown"
            value={rating}
            onChange={filterRatings}
          >
            <option value="">All ratings</option>
            <option value="1">1-5</option>
            <option value="2">5-7</option>
            <option value="3">8-10</option>
          </select>
        </div>
      </div>
    </div>
  );
}
