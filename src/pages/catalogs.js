import React from "react";
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

function Catalogs() {
  // const [outfits, setOutfits] = useState([]);

  function handleOutfits(event) {

    console.log(event.target);
    // const { name, value } = event.target;
    // console.log(name, value);
    // setOutfits([]);
  }

  return (
    <>
      <Header />
      <div className="topButtons">
        <ReusableBtn
          to="/newitem"
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

      <ListContainer>"outfits will be display here"</ListContainer>
      <Footer />
    </>
  );
}

export default Catalogs;
