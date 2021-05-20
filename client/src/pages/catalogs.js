import React from "react";
import { Link } from "react-router-dom";

function Catalogs() {
  return (
    <>
      <Link to={"/catalogs"}>
        <h1>Catalogs Page</h1>
      </Link>
    </>
  );
}

export default Catalogs;
