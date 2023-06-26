import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster != "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie}
        />
      </div>
      <div>
        <span>{movie.type}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
