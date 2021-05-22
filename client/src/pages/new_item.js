import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CloudinaryButton from "../components/Cloudinary_Button";
import ImagePlaceholder from "../components/Image_placeholder";
import { Input, LabelForInput } from "../components/Form";
import { ReusableBtn } from "../components/Buttons";
import { Select, Options } from "../components/DropdownLists";
import PlaceholderGray2 from "../images/PlaceholderGray2.png";
import Footer from "../components/Footer";
import { CloudinaryContext, Image } from "cloudinary-react";
import { openUploadWidget } from "../utils/CloudinaryService";
import API from "../utils/API";

function New_item() {
  const [images, setImages] = useState([]);
  const [itemName, setItemName] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [type, setType] = useState("");
  let [prediction, setPrediction] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {
    API.getCategories()
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }

  console.log(categories)

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
          //console.log("URL", photos.info.url);
          //console.log("THUMBNAIL_URL", photos.info.thumbnail_url);
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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    // console.log(value);
    setItemName(value);
  }

  // If setPrediction is true, then keep the returned setType
  // if setPrediction is false, then grab the value of an option
  //  inside the dropdownlist and return that value as
  //  the new setType.
  function categoryType(event) {
    event.preventDefault();
    if (event.target.innerHTML === "YES") {
      prediction = true;
      console.log(prediction);
      document.querySelector(".questionToTheUser").style.display = "";
      document.querySelector(".predictionBtn").style.borderStyle = "solid";
      setPrediction(prediction);
    } else if (event.target.innerHTML === "NO") {
      prediction = false;
      console.log(prediction);
      setPrediction(prediction);
      document.querySelector(".questionToTheUser").style.display = "none";
      document.querySelector(".predictionBtn").style.borderStyle = "none";
    }
  }

  // handles the category options the user chooses from the dropdown list
  function handleDropdownOptions(event) {
    let selectCategory = event.target.value;
    console.log(selectCategory);
    setType(selectCategory);
  }

  // When the item name is submitted, use the API.saveItem method to save the item data
  function handleSubmit(event) {
    event.preventDefault();
    console.log(url, thumbnailUrl, type, prediction, itemName);
    API.saveItem({
      url,
      thumbnail: thumbnailUrl,
      type,
      prediction,
      itemName,
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
          <div style={{ marginTop: "15px", marginBottom: "20px" }}>
            {images.length <= 0 ? (
              <ImagePlaceholder
                className="img"
                src={PlaceholderGray2}
                style={{ maxWidth: "60%", maxHeight: "60%" }}
                alt="placeholder"
              />
            ) : (
              <>
                <div className="predictionBtn">
                  <p className="questionToTheUser">
                    Category: **{type}
                    **
                    <br />
                    Would you like to keep this category?
                  </p>

                  <button
                    className="btn truePredictionBtn"
                    onClick={categoryType}
                  >
                    YES
                  </button>

                  <button
                    className="btn falsePredictionBtn"
                    onClick={categoryType}
                  >
                    NO
                  </button>
                </div>

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
                    <Select
                      className="dropdownList"
                      style={{ marginBottom: "30px" }}
                      onChange={handleDropdownOptions}
                    >
                      {/* ======= should render all categories ====== */}
                      {categories.map((category) => (
                        <Options key={category.id} value={category}>{category}</Options>
                      ))}

                      {/* ====================================== */}

                      {/* <Options>Tops</Options>
                      <Options>Jeans</Options>
                      <Options>Dress</Options>
                      <Options>Pants</Options>
                      <Options>Shoes</Options>
                      <Options>Handbags</Options>
                      <Options>Accesories</Options>
                      <Options>Skirt</Options>
                      <Options>Shorts</Options> */}
                    </Select>
                  </>
                )}

                <section>
                  {images.map((i) => (
                    <Image
                      key={i}
                      publicId={i}
                      fetch-format="auto"
                      quality="auto"
                      style={{ height: "60%", width: "60%" }}
                    />
                  ))}
                </section>
              </>
            )}
          </div>

          <div className="inputItemName">
            <Input
              onChange={handleInputChange}
              id="item_name"
              className="itemName"
              name="Item_name"
              placeholder="Item Name"
            />
            {/* <LabelForInput htmlFor="item_name" /> */}
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
