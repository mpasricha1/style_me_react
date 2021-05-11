import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to={"/home"}>
        <h1>Style Me Home Page</h1>
      </Link>
    </>
  );
}

export default Home;
