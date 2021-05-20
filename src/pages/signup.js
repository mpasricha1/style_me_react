import React from "react";
import Header from "../components/Header";
import { Input, Image } from "../components/Form";
import { Buttons } from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
import Footer from "../components/Footer";
import "../styles/styles.css";

function Signup() {
  return (
    <>
      <Header />
      <Image src={GenericImage} alt="Style Me" className="style_me_logo" />

      <form>
        <div className="form-floating mb-3 input_field">
          <Input
            type="text"
            id="first_name"
            className="inputBox firstInputBox"
            placeholder="First Name"
            name="first_name"
            required=""
          />

          <Input
            type="text"
            id="last_name"
            className="inputBox"
            placeholder="Last Name"
            name="last_name"
            required=""
          />

          <Input
            type="text"
            id="email"
            className="inputBox"
            placeholder="Email"
            name="email"
            required=""
          />

          <Input
            type="password"
            id="password"
            className="inputBox"
            placeholder="Password"
            name="password"
            required=""
          />
        </div>

        <Buttons>Sign Me Up</Buttons>
        <Buttons to="/home">Cancel</Buttons>
      </form>
      <Footer />
    </>
  );
}

export default Signup;
