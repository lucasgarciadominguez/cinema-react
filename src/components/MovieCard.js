import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  //sends a parameter movie
  return (
    // sets a key for every div based on the movie id from the movies array
    //searches images and then concatenates  the image index desired
    //same with title,genre and rating
    //then css makes some magic
    <div key={movie.id} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.release_date.split("-")[0]}</p>
        <p className="movie-card-rating">{Math.round(movie.vote_average)}/10</p>
      </div>
    </div>
  );
}
