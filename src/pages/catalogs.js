import React from "react";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import {
  ListContainer,
  UnorderedList,
  ListElement,
  ImgTag,
} from "../components/ulElements";
import TemplateImage1 from "../images/Spring.jpg";
import TemplateImage2 from "../images/Summer.jpg";
import TemplateImage3 from "../images/Fall.jpg";
import TemplateImage4 from "../images/Winter.jpg";

import Footer from "../components/Footer";

function Catalogs() {
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
      {/* <Image src={TemplateImage1} alt="Spring"/> */}
      <ListContainer style={{ display: "flex" }}>
        <UnorderedList className="ulElement">
          Spring
          <ListElement className="liElement">
            <ImgTag src={TemplateImage1} className="imgElement" />
            {/* <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" /> */}
          </ListElement>
        </UnorderedList>

        <UnorderedList className="ulElement">
          Summer
          <ListElement>
            <ImgTag src={TemplateImage2} className="imgElement" />
            {/* <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" /> */}
          </ListElement>
        </UnorderedList>

        <UnorderedList className="ulElement">
          Fall
          <ListElement>
            <ImgTag src={TemplateImage3} className="imgElement" />
            {/* <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" /> */}
          </ListElement>
        </UnorderedList>

        <UnorderedList className="ulElement">
          Winter
          <ListElement>
            <ImgTag src={TemplateImage4} className="imgElement" />
            {/* <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" />
            <ImgTag src={TemplateImage} className="imgElement" /> */}
          </ListElement>
        </UnorderedList>
      </ListContainer>

      <ListContainer>"outfits will be display here"</ListContainer>
      <Footer />
    </>
  );
}

export default Catalogs;
