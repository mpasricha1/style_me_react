import React from "react";

function Cloudinary_Button() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          {/* <!-- Cloudinary button for uploading or adding a new photo --> */}
          <button id="upload_widget" class="btn" style={{borderStyle: "solid", borderColor: "black"}}>
            Add an Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cloudinary_Button;
