import React, { useContext } from "react";
import Header from "../components/Header";
import GenericImage from "../images/styleMe.png";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

function SignUp(props) {
  const { loggedIn } = useContext(UserContext);
  return (
    <>
      <Header />
      <img src={GenericImage} alt="Style Me" className="style_me_logo" />
      
      <div className="container">
        {loggedIn && <Redirect to="/" />}
        <SignUpForm className="full-page-signup" />
      </div>
      <Footer/>
    </>
  );
}
export default SignUp;
