import React from "react";
import "./style.css";

export function Image(props) {
  return (
    <div className="imgcontainer">
      <img className="style_me_logo" alt="generic images" {...props} />
    </div>
  );
}

export function Input(props) {
  return <input className="form-control" {...props} />;
}

export function LabelForInput(props) {
  return <label {...props} />;
}
