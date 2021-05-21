import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { SocialBtn } from "../components/Buttons";
import {
  ListContainer,
  UnorderedList,
  ListElement,
  ImgTag,
} from "../components/ulElements";
import TemplateImage from "../images/sampleCatalog.png";
import { Input } from "../components/Form";
import Footer from "../components/Footer";

function Social() {
  return (
    <>
      <Link to={"/social"} style={{ textDecoration: "none" }}>
        <Header />
        <div className="socialtopButtons">
          <SocialBtn
            to="/newitem"
            className="socialoutfitsBtn btn btn-outline-secondary"
          >
            Build Oufits
          </SocialBtn>
          <SocialBtn
            to="/buildoutfit"
            className="shareoutfitBtn btn btn-outline-secondary"
          >
            Share Outfits
          </SocialBtn>
        </div>

        <ListContainer className="socialContainer">
          <UnorderedList className="socialUnorderList">
            <div className="socialUserInfo">
              <p className="socialUsername">Outfit Name</p>
            </div>
            <ListElement className="socialList">
              <ImgTag
                src={TemplateImage}
                className="socialImg"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
            </ListElement>
          </UnorderedList>

          <UnorderedList className="socialUnorderList">
            <div className="socialUserInfo">
              <p className="socialUsername">Outfit Name</p>
            </div>
            <ListElement className="socialList">
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />

              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
            </ListElement>
          </UnorderedList>

          <UnorderedList className="socialUnorderList">
            <div className="socialUserInfo">
              <p className="socialUsername">Outfit Name</p>
            </div>
            <ListElement className="socialList">
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />

              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
            </ListElement>
          </UnorderedList>

          <ListContainer className="socialOutfit">
          <SocialBtn
            to="/buildoutfit"
            className="postBtn btn btn-outline-secondary"
          >
            POST
          </SocialBtn>
          <div className="socialShareInfo">
              <p className="socialUsername">Stephanie Carattini</p>
              <p className="saySomething">say something about this outfit.......</p>
            </div>
            <UnorderedList className="socialSharedList">
              <ListElement className="socialshaaredLi">
              <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
               <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
               <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
               <ImgTag
                src={TemplateImage}
                className="imgElement"
                placeholder="Outfits"
              />
              </ListElement>
            </UnorderedList>

            <div className="inputItemName">
              <Input
                // onChange={handleInputChange}
                id="item_name"
                className="socialItemName"
                name="Item Name"
                placeholder="comment...."
              />
            </div>

            <Input
              // onChange={handleInputChange}
              id="item_name"
              className="socialItemName"
              name="Item Name"
              placeholder="comment...."
            />

            <Input
              // onChange={handleInputChange}
              id="item_name"
              className="socialItemName"
              name="Item Name"
              placeholder="comment...."
            />

            <Input
              // onChange={handleInputChange}
              id="item_name"
              className="socialItemName"
              name="Item Name"
              placeholder="comment...."
            />

            <Input
              // onChange={handleInputChange}
              id="item_name"
              className="socialItemName"
              name="Item Name"
              placeholder="comment...."
            />
          </ListContainer>
        </ListContainer>

        <Footer />
      </Link>
    </>
  );
}

export default Social;
