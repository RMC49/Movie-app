import React from 'react';
const MovieCard = ({ movie: { id, poster_path, title, release_date } }) => {

  const image_path = 'https://image.tmdb.org/t/p/w500' + poster_path
 
  return (
    <div className="movie" key={id}>
      <div>
        <p>{release_date}</p>
      </div>

      <div>
        <img src={poster_path !== "N/A" ? image_path: "https://via.placeholder.com/400"} alt={title} />
      </div>

      <div>
        <span>Movie</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;