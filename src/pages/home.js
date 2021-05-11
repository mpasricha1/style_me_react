import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Link to={"/home"} style={{ textDecoration: 'none' }}>
        <Header />

        <Banner />
        <Buttons />
        <Footer />
      </Link>
    </>
  );
}

export default Home;
