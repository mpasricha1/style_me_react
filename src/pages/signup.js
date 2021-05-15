import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {Input, LabelForInput, Image} from "../components/Form";
import {Buttons} from "../components/Buttons";
import GenericImage from "../images/styleMe.png";
import { Button } from "bootstrap";
import "../styles/styles.css"

function Signup() {
  return (
    <>
      <Link to={"/signup"}style={{textDecoration:"none"}}>
        <Header/>
      <Image src ={GenericImage} alt= "Style Me" className= "style_me_logo"/>
      <LabelForInput htmlFor = "first_name"/>
      <Input type="text"
          id="first_name"
          className = "whatever"
          placeholder="First Name"
          name="first_name"
          required=""/>
          {/* <Input type="text"
          id="first_name"
          placeholder="First Name"
          name="first_name"
          required=""/> */}
      {/* <Buttons onClick="">Sign Me Up</Buttons> */}
      <Buttons>Sign Me Up</Buttons>
      <Buttons to = "/home">Cancel</Buttons>
        
      </Link>
    </>
  );
}

export default Signup;
