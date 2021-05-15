import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Image, Input, LabelForInput } from "../components/Form";
import GenericImage from "../images/styleMe.png";
import { Buttons } from "../components/Buttons";
// import ButtonsLogin from "../components/ButtonsLogin";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Link to={"/login"} style={{ textDecoration: "none" }}>
        <Header />
        <Image src={GenericImage} alt="Style Me" />

        <LabelForInput htmlFor="first_name" />

        <Input
          type="text"
          id="first_name"
          placeholder="First Name"
          name="first_name"
          required=""
        />

        <Buttons>Login</Buttons>
        <Buttons>Google</Buttons>

        <Footer />
      </Link>
    </>
  );
}

export default Login;
