import React from "react";
import "../styles.css";

//sends a parameter movie
export default function MovieCard({ movie }) {
  var title = movie.title;
  var poster_path = "https://image.tmdb.org/t/p/w500";
  var releaseDate = movie.release_date.split("-")[0];
  var movieVote = Math.round(movie.vote_average);
  poster_path += movie.poster_path;

  return (
    // sets a key for every div based on the movie id from the movies array
    //searches images and then concatenates  the image index desired
    //same with title,genre and rating
    //then css makes some magic
    <div key={movie.id} className="movie-card">
      <img src={poster_path} alt={title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-genre">{releaseDate}</p>

        {movieVote > 7 ? (
          <div className="movie-card-rating">
            <p className="rating-good">{movieVote}</p>
          </div>
        ) : (
          <div className="movie-card-rating">
            <p className="rating-ok">{movieVote}</p>
          </div>
        )}
      </div>
    </div>
  );
}
