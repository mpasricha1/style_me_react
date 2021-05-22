import React, { Fragment, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const { id, setId, name, setName, loggedIn, setLoggedIn } =
    useContext(UserContext);
  const history = useHistory();
  const emailInput = useRef();
  const passwordInput = useRef();

  let extraProps = {};
  if (props.className) {
    extraProps.className = props.className;
  }
  let emailId = props.className
    ? props.className + "-login-email"
    : "login-email";
  let emailHelpId = props.className
    ? props.className + "-login-email-help"
    : "login-email-help";
  let passwordId = props.className
    ? props.className + "-login-password"
    : "login-password";

  const handleSubmit = (event) => {
    // if the user hits enter or hits the button, this function will fire
    event.preventDefault();
    console.log("submit happened");
    console.log({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    });

    // API.testUserRouter()
    // .then(data => {
    //     console.log(data.data);
    //     console.log(data.id);
    //     console.log(data.full_name);
    //     console.log(history);
    //     console.log(loggedIn);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    API.login({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then((data) => {
        console.log(data);

        setId(data.id);
        setName(data.full_name);
        setLoggedIn(true);
        history.push("/");

        console.log(history);
        console.log(loggedIn);
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
                  Login
                </button>
              </div>

              <Link
                to="/auth/google"
                className="btn btn-outline-secondary signmeUpBtn"
                role="button"
              >
                Google
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

export default LoginForm;
