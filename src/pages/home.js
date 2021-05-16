import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Buttons } from "../components/Buttons";
import HomeImages from "../components/HomeImages";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <Header />
        <Banner />
        <Buttons
          to="/login"
          className="btn btn-outline-secondary loginBtn"
        >
          Login
        </Buttons>
        <Buttons
          to="/signup"
          className="btn btn-outline-secondary signupBtn"
        >
          Sign me up!
        </Buttons>
        <HomeImages />
        <Footer />
      </Link>
    </>
  );
}

export default Home;
