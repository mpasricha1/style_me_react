import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Link to={"/signup"}>
        <h1>Signup Page</h1>
      </Link>
    </>
  );
}

export default Signup;
