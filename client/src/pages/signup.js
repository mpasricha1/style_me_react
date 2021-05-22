import React, { useContext, useRef } from "react";
import Header from "../components/Header";
import { Image } from "../components/Form";
import { Buttons } from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
import Footer from "../components/Footer";
import "../styles/styles.css";
import UserContext from "../utils/UserContext";
import API from "../utils/API";

function Signup() {
  // **************** TEST ****************
  const { id, setId, name, setName, loggedIn, setLoggedIn } =
    useContext(UserContext);
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = (event) => {
    // if the user hits enter or hits the button, this function will fire
    event.preventDefault();
    console.log({
      name: firstNameInput.current.value + " " + lastNameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    });
    
    API.signup({
      first_name: firstNameInput.current.value,
      last_name: lastNameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then((data) => {
        console.log(data);
        setId(id);
        setName(name);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  // **************** - * -  ****************
  return (
    <>
      <Header />
      <Image src={GenericImage} alt="Style Me" className="style_me_logo" />

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 input_field">
          <input
            ref={firstNameInput}
            type="text"
            id="first_name"
            className="inputBox firstInputBox"
            placeholder="First Name"
            name="first_name"
            required=""
          />

          <input
            ref={lastNameInput}
            type="text"
            id="last_name"
            className="inputBox"
            placeholder="Last Name"
            name="last_name"
            required=""
          />

          <input
            ref={emailInput}
            type="email"
            id="email"
            className="inputBox"
            placeholder="Email"
            name="email"
            required=""
          />

          <input
            ref={passwordInput}
            type="password"
            id="password"
            className="inputBox"
            placeholder="Password"
            name="password"
            required=""
          />
        </div>
        <div className="landing_btn_container">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-outline-secondary signmeUpBtn"
          >
            Sign Me Up
          </button>
        </div>

        <Buttons to="/home">Cancel</Buttons>
      </form>
      <Footer />
    </>
  );
}

export default Signup;
