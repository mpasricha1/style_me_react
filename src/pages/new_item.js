import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CloudinaryButton from "../components/Cloudinary_Button";
import ImagePlaceholder from "../components/Image_placeholder";
import { Input, LabelForInput } from "../components/Form";
import { ReusableBtn } from "../components/Buttons";
import { DropdownList, Options } from "../components/DropdownLists";
import PlaceholderGray2 from "../images/PlaceholderGray2.png";
import Footer from "../components/Footer";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../utils/CloudinaryService";
import API from "../utils/API";

function New_item() {
  const [images, setImages] = useState([]);
  const [itemName, setItemName] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [type, setType] = useState("");
  const [prediction, setPrediction] = useState(true);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dnx8v0ryu",
      tags: [tag],
      uploadPreset: "qvqp5qcx",
    };

    openUploadWidget(uploadOptions, async (error, photos) => {
      if (!error) {
        // console.log(photos);
        if (photos.event === "success") {
          setImages([...images, photos.info.public_id]);

          console.log("URL", photos.info.url);
          console.log("THUMBNAIL_URL", photos.info.thumbnail_url);
          let prediction = await API.getPrediction(photos.info.url);
          console.log(prediction.data.type);
          setUrl(photos.info.url);
          setThumbnailUrl(photos.info.thumbnail_url);
          setType(prediction.data.type);
        }
      } else {
        console.log(error);
      }
    });
  };

  // useEffect(() => {
  //   fetchPhotos("image", setImages);

  // }, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setItemName(itemName, value);
  }

  // When the item name is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleSubmit(event) {
    event.preventDefault();
    console.log(url, thumbnailUrl, type, prediction);
    API.saveItem({
      url,
      thumbnail: thumbnailUrl,
      type,
      prediction
    })

      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

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
            <button onClick={() => setPrediction(true)}>YES</button>
            <button onClick={() => setPrediction(false)}>NO</button>
            {prediction === false && (
              <>
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
              </>
            )}
          </div>

          {images.length <= 0 ? (
            <ImagePlaceholder
              className="img"
              src={PlaceholderGray2}
              style={{ maxWidth: "80%", maxHeight: "80%" }}
              alt="placeholder"
            />
          ) : (
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
          )}

          <div className="inputItemName">
            <Input
              onChange={handleInputChange}
              id="item_name"
              className="itemName"
              name="Item_name"
              placeholder="Item Name"
            />
            <LabelForInput htmlFor="item_name" />
          </div>
          <ReusableBtn
            id="addToCollection_Btn"
            className="addToCollectionBtn reusableBtn"
            type="submit"
            onClick={handleSubmit}
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
