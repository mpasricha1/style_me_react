import React, { Fragment, useContext, useRef } from "react";
//import "./style.scss";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

function SignUpForm(props) {
  const { id, setId, name, setName, loggedIn, setLoggedIn } =
    useContext(UserContext);
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  let extraProps = {};
  if (props.className) {
    extraProps.className = props.className;
  }
  let emailId = props.className
    ? props.className + "-signup-email"
    : "signup-email";
  let emailHelpId = props.className
    ? props.className + "-signup-email-help"
    : "signup-email-help";
  let passwordId = props.className
    ? props.className + "-signup-password"
    : "signup-password";
  const handleSubmit = (event) => {
    // if the user hits enter or hits the button, this function will fire
    event.preventDefault();
    console.log("submit happened");
    console.log({
      name: firstNameInput.current.value + " " + lastNameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    });

    
    API.signup({
      first_name: firstNameInput.current.value,
      last_name: lastNameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then((data) => {
        console.log(data);
        setId();
        setName();
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      {(() => {
        if (!loggedIn) {
          return (
            <form {...extraProps} onSubmit={handleSubmit}>
              <div className="form-floating mb-3 input_field">
                <input
                  ref={firstNameInput}
                  type="text"
                  id="first_name"
                  className="inputBox firstInputBox"
                  placeholder="First Name"
                  name="first_name"
                  required=""
                />

                <input
                  ref={lastNameInput}
                  type="text"
                  id="last_name"
                  className="inputBox"
                  placeholder="Last Name"
                  name="last_name"
                  required=""
                />

                <input
                  ref={emailInput}
                  type="email"
                  id={emailId}
                  aria-describedby={emailHelpId}
                  className="inputBox"
                  placeholder="Email"
                  name="email"
                  required=""
                />
                <small
                  id={emailHelpId}
                  className="email-help-text form-text text-muted"
                >
                  We'll never share your email with anyone else.
                </small>

                <input
                  ref={passwordInput}
                  type="password"
                  id={passwordId}
                  className="inputBox"
                  placeholder="Password"
                  name="password"
                  required=""
                />
              </div>
              <div className="landing_btn_container">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-outline-secondary signmeUpBtn"
                >
                  Sign Me Up
                </button>
              </div>

              <Link
                to="/home"
                className="btn btn-outline-secondary signmeUpBtn"
                role="button"
              >
                Cancel
              </Link>
            </form>
          );
        } else {
          return <h3>""</h3>;
        }
      })()}
    </Fragment>
  );
}

export default SignUpForm;
