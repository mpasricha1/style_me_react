import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <>
      <Link to="/home" className="logo logo_container">
        Style Me
      </Link>
    </>
  );
}

export default Header;
