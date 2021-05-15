import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function Buttons (props) {
  return (
    <div className="landing_btn_container">
      <Link
        className="btn btn-outline-secondary"
        role="button"
        {...props}
      />
    </div>
  );
}


