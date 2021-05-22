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
   

  useEffect(() => {
    loadCatalogs();
  }, []);

  function loadCatalogs() {
    API.getCatalogs(1)
      .then((res) => {
        console.log(res.data);
                // setCatalogs([...res.data]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadOutfits();
  }, []);

  function loadOutfits() {
    API.getOutfits()
      .then((res) => {
        console.log(res);
                setOutfits([...res.data]);
      })
      .catch((err) => console.log(err));
  }

  function handleOutfits(event) {
    console.log(event.target);
    document.querySelector(".displayOutfits").style.display = "block";
  }

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

      <ListContainer style={{ display: "flex" }}>
        <UnorderedList className="ulElement" onClick={handleOutfits}>
          Spring
          <ListElement className="liElement">
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
          </ListElement>
        </UnorderedList>

        <UnorderedList className="ulElement" onClick={handleOutfits}>
          Summer
          <ListElement>
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
          </ListElement>
        </UnorderedList>

        <UnorderedList className="ulElement" onClick={handleOutfits}>
          Fall
          <ListElement>
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
          </ListElement>
        </UnorderedList>

        <UnorderedList className="ulElement" onClick={handleOutfits}>
          Winter
          <ListElement>
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
          </ListElement>
        </UnorderedList>
      </ListContainer>

      <ListContainer className="displayOutfits">
        {outfits.length ? (
          console.log("should render outfits")
          // outfits.map((outfit) => (
          //   <ListElement>
          //     <ImgTag
          //       src={outfit}
          //       key={outfit.id}
          //       className="diplayOutfits"
          //       alt=""
          //     />
          //   </ListElement>
          // ))
        ) : (
          <h3>No outfits available</h3>
        )}
      </ListContainer>

      <Footer />
    </>
  );
}

export default Catalogs;
