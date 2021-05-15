import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Signup() {
  return (
    <>
      <Link to={"/signup"}style={{textDecoration:"none"}}>
        <Header/>
        
      </Link>
    </>
  );
}

export default Signup;
