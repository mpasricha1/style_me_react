import React from "react";
import Header from "../components/Header";
import { Input, Image } from "../components/Form";
import { Buttons } from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
import Footer from "../components/Footer";
import "../styles/styles.css";

function Login() {
  return (
    <>
      <Header />
      <Image src={GenericImage} alt="Style Me" className="style_me_logo" />

      <form>
        <div className="form-floating mb-3 input_field">
          <Input
            type="text"
            id="email"
            className="inputBox firstInputBox"
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

        {/* <Buttons onClick="******">Login</Buttons> */}
        <Buttons>Login</Buttons>
        {/* <Buttons on click= "*****">Google</Buttons> */}
        <Buttons>Google</Buttons>
        {/* <Buttons to = "/home">Cancel</Buttons> */}
      </form>

      <Footer />
    </>
  );
}

export default Login;
