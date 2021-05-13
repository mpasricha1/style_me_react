import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SignUpimg from "../components/signUpimg";

function Signup() {
  return (
    <>
      <Link to={"/signup"}style={{textDecoration:"none"}}>
        <Header/>
        <SignUpimg/>
      </Link>
    </>
  );
}

export default Signup;
