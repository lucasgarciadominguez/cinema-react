import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
import Finder from "./Finder";

function MoviesGridTMDB() {
  const [movies, setMovies] = useState([]); // Original state with all the movies
  const [filteredMovies, setFilteredMovies] = useState([]); // State to store movies filtered by search
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  // Function to load movie IDs from a local file or API
  const chargeIds = async () => {
    try {
      const response = await fetch("movies.json"); // Load the IDs from a file or API
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error loading the IDs:", err.message);
      setError("Could not load the IDs.");
      setLoading(false);
    }
  };

  // Function to fetch movie information using the IDs
  const fetchMovieInfo = async (ids) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`, // Access to the entorn variable
      },
    };

    try {
      const moviesData = await Promise.all(
        ids.map(async (id) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}`,
            options
          );
          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }
          return await response.json();
        })
      );
      setMovies(moviesData); // Store movies in state
      setFilteredMovies(moviesData); // Also initialize filtered movies state
    } catch (err) {
      console.error("Error fetching movie information:", err.message);
      setError("Could not load the movies.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      //defines the function that loads movies only for this context {}
      const movieIds = await chargeIds(); // Load movie IDs on page load
      if (movieIds.length > 0) {
        await fetchMovieInfo(movieIds); // Fetch movies once IDs are loaded
      }
    };
    loadMovies(); // Call the function to load everything
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Finder movies={movies} setFilteredMovies={setFilteredMovies} />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default MoviesGridTMDB;
