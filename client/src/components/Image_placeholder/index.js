import React from "react";
import "./style.css";
import PlaceholderGray2 from "../../images/PlaceholderGray2.png";

function Image_placeholder(props) {
  return (
    <>
      <div className="row" style={{display: "inline"}}>
        <div className="col-sm-12" style={{textAlign: "center"}}>
          {/* <!-- Image should be displayed in img tag --> */}
          <img {...props}
            className="img"
            src={PlaceholderGray2}
            style={{maxWidth: "80%", maxHeight: "80%"}}
            alt="placeholder"
            
          />
        </div>
      </div>
    </>
  );
}

export default Image_placeholder;
