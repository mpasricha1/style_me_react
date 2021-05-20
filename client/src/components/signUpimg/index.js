import React from "react";
import "./style.css";
import SignupImage from "../../images/styleMe.png";


function SignUpimg() {
  return (
    <>
  <div className="imgcontainer">
    <img src={SignupImage} alt="Style Me" className="style_me_logo" />
</div>
    </>
  );
}

export default SignUpimg;