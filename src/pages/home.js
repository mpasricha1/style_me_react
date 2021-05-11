import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Link to={"/home"}>
        <h1>Style Me Home Page</h1>
        <Header />
        <Banner />
        <Footer />
      </Link>
    </>
  );
}

export default Home;
