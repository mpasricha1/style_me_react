import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
//image component
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";



function Login() {
  return (
    <>
      <Link to={"/login"}>
      <Header />

      {/* image component */}

      <h1>Login Page</h1>
      <Buttons />
      <Footer />
      </Link>
    </>
  );
}

export default Login;
