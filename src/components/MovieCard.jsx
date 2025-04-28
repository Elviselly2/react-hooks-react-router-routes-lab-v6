import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <div>
      <h2>{title}</h2> {/* Movie title should be the heading */}
      <Link to={`/movie/${id}`}>View Info</Link> {/* Keep link text separate */}
    </div>
  );
}

export default MovieCard;
