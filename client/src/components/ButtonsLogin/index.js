import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ButtonsLogin() {
  return (
    <>
      <div className="landing_btn_container">
        <Link
          to="/login"
          className="btn btn-outline-secondary loginBtn"
          role="button"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="btn btn-outline-secondary signupBtn"
          role="button"
        >
          Google
        </Link>
      </div>
    </>
  );
}

export default ButtonsLogin;
