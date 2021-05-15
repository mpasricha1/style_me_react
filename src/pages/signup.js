import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
<<<<<<< HEAD
import SignUp from "../components/SignUpForm";
import SignUpimg from "../components/signUpimg";
=======
>>>>>>> origin/main

function Signup() {
  return (
    <>
      <Link to={"/signup"}style={{textDecoration:"none"}}>
        <Header/>
        
      </Link>
      <SignUp/>
    </>
  );
}

export default Signup;
