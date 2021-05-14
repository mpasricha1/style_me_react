import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SignUpimg from "../components/signUpimg";
import ButtonsLogin from "../components/ButtonsLogin";
import Footer from "../components/Footer";



function Login() {
  return (
    <>

      <Link to={"/login"} >
      </Link>

   
      <Header />
      <SignUpimg/>
      <ButtonsLogin />
      <Footer />
    </>
  );
}

export default Login;
