import React from "react";
import { Link } from "react-router-dom";
import CloudinaryButton from "../components/Cloudinary_Button";

function New_item() {
  return (
    <>
      <Link to={"/newitem"}>
        <h1>Add New Item Page</h1>
        <CloudinaryButton />
      </Link>
    </>
  );
}

export default New_item;
