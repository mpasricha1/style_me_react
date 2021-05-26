import React from "react";
import "./style.css";

function Cloudinary_Button(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <button {...props} className="upload_widget">
            {props.children}
            </button>
        </div>
      </div>
    </div>
  );
}

export default Cloudinary_Button;
