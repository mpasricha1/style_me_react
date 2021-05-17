import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function Buttons(props) {
  return (
    <div className="landing_btn_container">
      <Link to={props} className="btn btn-outline-secondary" role="button" {...props} />
    </div>
  );
}

export function ReusableBtn(props) {
  return (
    <div className="col-sm-8 reusableButton">
      <Link to={props}className="btn btn-outline-secondary reusableBtn" role="button" {...props} />
    </div>
  );
}
