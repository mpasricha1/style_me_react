import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import {
  ListContainer,
  UnorderedList,
  ListElement,
  ImgTag,
} from "../components/ulElements";
import TemplateImage from "../images/sampleCatalog.png";
import Footer from "../components/Footer";
import API from "../utils/API";

function Catalogs() {
  const [outfits, setOutfits] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [catalogId, setCatalogId] = useState("");

  useEffect(() => {
    loadCatalogs();
  }, []);

  function loadCatalogs() {
    API.getCatalogs(1)
      .then((res) => {
        // console.log([...res.data]);
        setCatalogs([...res.data]);
      })
      .catch((err) => console.log(err));
  }

  //console.log(catalogs);

  useEffect(() => {
    loadOutfits();
  }, []);

  function loadOutfits() {
    API.getOutfits()
      .then((res) => {
        console.log(res);
        // setOutfits([...res.data]);
      })
      .catch((err) => console.log(err));
  }

  function handleOutfits(event) {
    event.preventDefault();
    // console.log(event.target);
    var element = event.target;
    if (
      element.matches(".ulElement") === true ||
      element.matches(".liElement") === true ||
      element.matches(".imgElement") === true ||
      element.matches(".headingEl") === true
    ) {
      setCatalogId(element.dataset.id);
    }
  }

  console.log(catalogId);

  return (
    <>
      <Header />
      <div className="topButtons">
        <ReusableBtn
          to="/item"
          className="newItemBtn btn btn-outline-secondary"
        >
          Add New Item
        </ReusableBtn>
        <ReusableBtn
          to="/buildoutfit"
          className="buildoutfitBtn btn btn-outline-secondary"
        >
          Build Outfit
        </ReusableBtn>
      </div>

      <ListContainer style={{ display: "flex" }} onClick={handleOutfits}>
        {catalogs.map((catalog) => (
          <UnorderedList
            key={catalog.id}
            className="ulElement"
            value={catalog.catalog_name}
          >
            <h3 data-id={catalog.id} className="headingEl">
              {catalog.catalog_name}
            </h3>
            <ListElement data-id={catalog.id} className="liElement">
              <ImgTag
                data-id={catalog.id}
                src={TemplateImage}
                className="imgElement"
              />
              <ImgTag
                data-id={catalog.id}
                src={TemplateImage}
                className="imgElement"
              />
              <ImgTag
                data-id={catalog.id}
                src={TemplateImage}
                className="imgElement"
              />
              <ImgTag
                data-id={catalog.id}
                src={TemplateImage}
                className="imgElement"
              />
            </ListElement>
          </UnorderedList>
        ))}
      </ListContainer>

      <ListContainer className="displayOutfits">
        {outfits.length ? (
          console.log("should render outfits")
        ) : (
          <h3>No outfits available</h3>
        )}
      </ListContainer>

      <Footer />
    </>
  );
}

export default Catalogs;
