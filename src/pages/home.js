import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Buttons from "../components/Buttons";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Link to={"/home"} style={{ textDecoration: 'none' }}>
        <Header />

        <Banner />
        <Buttons />
        <BootstrapCarousel />
        <Footer />
      </Link>
    </>
  );
}

export default Home;
