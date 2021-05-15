import React from "react";
import "./style.css";

export function Image(props) {
  return (
    <div className="imgcontainer">
         <img className="style_me_logo" {...props} />
    </div>
  );
}

export function Input(props) {
  return (
    <div className="form-floating mb-3 input_field">
      <input className="form-control" {...props} />
    </div>
  );
}

export function LabelForInput(props) {
  return <label {...props} />;
}
