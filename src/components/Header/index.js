import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <header className="logo logo_container">Style Me</header>
      </Link>
    </>
  );
}

export default Header;
