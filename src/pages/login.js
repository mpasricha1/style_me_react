import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Link to={"/login"}>
        <h1>Login Page</h1>
      </Link>
    </>
  );
}

export default Login;
