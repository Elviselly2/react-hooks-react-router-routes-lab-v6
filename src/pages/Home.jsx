import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <MovieCard id={movie.id} title={movie.title} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;




