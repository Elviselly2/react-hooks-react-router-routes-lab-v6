import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
      </main>
    </>
  );
}

export default ErrorPage;