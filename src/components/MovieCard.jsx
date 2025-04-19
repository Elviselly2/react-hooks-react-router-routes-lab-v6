import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}


export default MovieCard;