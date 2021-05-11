import React from "react";
import { Link } from "react-router-dom";

function New_item() {
  return (
    <>
      <Link to={"/newitem"}>
        <h1>Add New Item Page</h1>
      </Link>
    </>
  );
}

export default New_item;
