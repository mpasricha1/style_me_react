import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SignUpimg from "../components/signUpimg";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";



function Login() {
  return (
    <>
      <Link to={"/login"}>
      <Header />
      <SignUpimg/>
      <Buttons />
      <Footer />
      </Link>
    </>
  );
}

export default Login;
