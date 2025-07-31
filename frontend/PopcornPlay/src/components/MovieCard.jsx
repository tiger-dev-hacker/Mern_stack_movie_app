import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  console.log({ original_language });
  console.log({ release_date });
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="./images/star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
        </div>

        <span className="text-white flex float-left m-0.5" > • </span>
    <p className="lang text-white flex float-left m-0.5"> {original_language} </p>
        <span className="text-white flex float-left m-0.5"> • </span>
    <p className="year text-white flex float-left m-0.5">
           {release_date ? release_date.split("-")[0] : "N/A"}
    </p>
      </div>
    </div>
  );
};

export default MovieCard;
