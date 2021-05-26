import React from "react";
import Header from "../components/Header";
import { Input, LabelForInput, Image } from "../components/Form";
import { Buttons } from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
//import { Button } from "bootstrap";
import Footer from "../components/Footer";
import "../styles/styles.css";

function Signup() {
  return (
    <>
      <Header />
      <Image src={GenericImage} alt="Style Me" className="style_me_logo" />
      <LabelForInput htmlFor="first_name" />
      <Input
        type="text"
        id="first_name"
        className="inputBox"
        placeholder="First Name"
        name="first_name"
        required=""
      />
      <LabelForInput htmlFor="last_name" />
      <Input
        type="text"
        id="last_name"
        className="inputBox"
        placeholder="Last Name"
        name="last_name"
        required=""
      />
      <LabelForInput htmlFor="email" />
      <Input
        type="text"
        id="email"
        className="inputBox"
        placeholder="Email"
        name="email"
        required=""
      />
      <LabelForInput htmlFor="password" />
      <Input
        type="password"
        id="password"
        className="inputBox"
        placeholder="Password"
        name="password"
        required=""
      />
      {/* <Buttons onClick="">Sign Me Up</Buttons> */}
      <Buttons>Sign Me Up</Buttons>
      <Buttons to="/home">Cancel</Buttons>

      <Footer />
    </>
  );
}

export default Signup;
