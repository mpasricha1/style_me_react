import React, { useContext, useRef} from "react";
import Header from "../components/Header";
import { Image } from "../components/Form";
import { Buttons } from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
import Footer from "../components/Footer";
import "../styles/styles.css";
import API from "../utils/API";

function Login() {

   // **************** TEST ****************
  //  const { id, setId, name, setName, loggedIn, setLoggedIn } =
  //  useContext(UserContext);
 const emailInput = useRef();
 const passwordInput = useRef();

 const handleSubmit = (event) => {
   // if the user hits enter or hits the button, this function will fire
   event.preventDefault();
   console.log({
     email: emailInput.current.value,
     password: passwordInput.current.value,
   });
   
   API.testUserRouter({
     email: emailInput.current.value,
     password: passwordInput.current.value,
   })
     .then((data) => {
       console.log(data);
       
     })
     .catch((err) => console.log(err));
 };
  return (
    <>
      <Header />
      <Image src={GenericImage} alt="Style Me" className="style_me_logo" />

      <form>
        <div className="form-floating mb-3 input_field">
        <input
            ref={emailInput}
            type="email"
            id="email"
            className="inputBox"
            placeholder="Email"
            name="email"
            required=""
          />

          <input
            ref={passwordInput}
            type="password"
            id="password"
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
        <Buttons>Google</Buttons>
        {/* <Buttons to = "/home">Cancel</Buttons> */}
      </form>

      <Footer />
    </>
  );
}

export default Login;
