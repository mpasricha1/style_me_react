import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CloudinaryButton from "../components/Cloudinary_Button";
import ImagePlaceholder from "../components/Image_placeholder";
import Footer from "../components/Footer";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../utils/CloudinaryService";
import API from "../utils/API";

function New_item() {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dnx8v0ryu",
      tags: [tag],
      uploadPreset: "qvqp5qcx",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        // console.log(photos);
        if (photos.event === "success") {
          setImages([...images, photos.info.public_id]);
          console.log("URL", photos.info.url);
          console.log("THUMBNAIL_URL", photos.info.thumbnail_url);
          let prediction = API.getPrediction(photos.info.url);
          console.log(prediction);
        }
      } else {
        console.log(error);
      }
    });
  };

  // useEffect(() => {
  //   fetchPhotos("image", setImages);

  // }, []);

  return (
    <>
      <Link to={"/newitem"} style={{ textDecoration: "none" }}>
        <CloudinaryContext cloudName="dnx8v0ryu">
          <div className="App">
            <Header />
            <CloudinaryButton onClick={() => beginUpload("image")}>
              Add New Item
            </CloudinaryButton>
            <ImagePlaceholder />
            <section>
              {images.map((i) => (
                <Image
                  key={i}
                  publicId={i}
                  fetch-format="auto"
                  quality="auto"
                  style={{ height: "200px", width: "200px" }}
                />
              ))}
            </section>
            <Footer />
          </div>
        </CloudinaryContext>
      </Link>
    </>
  );
}

export default New_item;
