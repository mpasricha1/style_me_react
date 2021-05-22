import React, { useContext } from "react";
import Header from "../components/Header";
import GenericImage from "../images/styleMe.png";
import Footer from "../components/Footer";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import LoginForm from "../components/LoginForm";

function Login(props) {
  const { loggedIn } = useContext(UserContext);
  
  return (
    <>
      <Header />
      <img src={GenericImage} alt="Style Me" className="style_me_logo" />

      <div className="container">
        {loggedIn && <Redirect to="/" />}
        <LoginForm className="full-page-login" />
      </div>
      <Footer />
    </>
  );
}
export default Login;
