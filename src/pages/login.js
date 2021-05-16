import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
//import SignUpimg from "../components/signUpimg";
//import Buttons from "../components/Buttons";
// import LoginForm from "../components/LoginForm"
// import Label from "../components/Form"
import {Input, LabelForInput, Image} from "../components/Form";
import {Buttons} from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
// import { Button } from "bootstrap";
import Footer from "../components/Footer";
import "../styles/styles.css"

function Login() {
  return (
    <>

      <Link to={"/login"} >
      </Link>
      <Header/>
        <Image src ={GenericImage} alt= "Style Me" className= "style_me_logo"/>
        <LabelForInput htmlFor = "email"/>
        <Input type="text"
          id="email"
          className = "inputBox"
          placeholder="Email"
          name="email"
          required=""/>
        <LabelForInput htmlFor = "Password"/>
        <Input type="password"
          id="password"
          className = "inputBox"
          placeholder="Password"
          name="password"
          required=""/>
          
      {/* <Buttons onClick="******">Login</Buttons> */}
      <Buttons>Login</Buttons>
      {/* <Buttons on click= "*****">Google</Buttons> */}
      <Buttons>Google</Buttons>
      {/* <Buttons to = "/home">Cancel</Buttons> */}
  
      
      <Footer />
    </>
  );
}

export default Login;
