import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CloudinaryButton from "../components/Cloudinary_Button";
import ImagePlaceholder from "../components/Image_placeholder";
import { Input, LabelForInput } from "../components/Form";
import { ReusableBtn } from "../components/Buttons";
import { DropdownList, Options } from "../components/DropdownLists";
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
      <CloudinaryContext cloudName="dnx8v0ryu">
        <div className="App">
          <Header />
          <div className="topButtons">
            <ReusableBtn
              to="/catalogs"
              className="seeCatalogsBtn btn btn-outline-secondary"
            >
              See Catalogs
            </ReusableBtn>
            <ReusableBtn
              to="/buildoutfit"
              className="buildoutfitBtn btn btn-outline-secondary"
            >
              Build Outfit
            </ReusableBtn>
          </div>
          <CloudinaryButton
            onClick={() => beginUpload("image")}
            className="upload_widget"
          >
            Add New Item
          </CloudinaryButton>
          <div style={{ marginTop: "15px" }}>
            <LabelForInput
              style={{
                textDecoration: "none",
                color: "#6c757d",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              Choose a category:
            </LabelForInput>
            <DropdownList>
              <Options>Tops</Options>
              <Options>Jeans</Options>
              <Options>Dress</Options>
              <Options>Pants</Options>
              <Options>Shoes</Options>
              <Options>Handbags</Options>
              <Options>Accesories</Options>
              <Options>Skirt</Options>
              <Options>Shorts</Options>
            </DropdownList>
          </div>
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
          <div className="inputItemName">
            <Input
              // onChange={handleInputChange}
              id="item_name"
              className="itemName"
              name="Item Name"
              placeholder="Item Name"
            />
            <LabelForInput htmlFor="item_name" />
          </div>
          <ReusableBtn
            id="addToCollection_Btn"
            className="addToCollectionBtn reusableBtn"
            type="submit"
          >
            Add To Collection
          </ReusableBtn>

          <Footer />
        </div>
      </CloudinaryContext>
    </>
  );
}

export default New_item;
