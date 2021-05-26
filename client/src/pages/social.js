import React from "react";
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
      <Header />
      <div className="socialtopButtons">
        <SocialBtn
          to="/newitem"
          className="socialoutfitsBtn btn btn-outline-secondary"
        >
          Build Outfits
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
          <SocialBtn
            to="/buildoutfit"
            className="postBtn btn btn-outline-secondary"
          >
            POST
          </SocialBtn>

          <div className="socialUserInfo">
            <p className="socialUsername">Stephanie Carattini</p>
          </div>
          <div className="dropDownSocial">
            <button
              className="public btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Public
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item">Public</a>
              <a className="dropdown-item">Friends</a>
              <a className="dropdown-item">Only me</a>
            </div>
          </div>

          <ListElement className="socialList">
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
          </ListElement>
        </UnorderedList>
        <UnorderedList className="socialUnorderList">
          <SocialBtn
            to="/buildoutfit"
            className="postBtn btn btn-outline-secondary"
          >
            POST
          </SocialBtn>

          <div className="socialUserInfo">
            <p className="socialUsername">Stephanie Carattini</p>
          </div>
          <div className="dropDownSocial">
            <button
              className="public btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Public
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item">Public</a>
              <a className="dropdown-item">Friends</a>
              <a className="dropdown-item">Only me</a>
            </div>
          </div>

          <ListElement className="socialList">
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
          </ListElement>
        </UnorderedList>

        <ListContainer className="socialOutfit">
          <div className="socialShareInfo">
            <p className="socialUsername">Stephanie Carattini</p>
            <p className="saySomething">
              shared a new Outfit
            </p>
          </div>
         
          <UnorderedList className="socialSharedList">
           
          <ListElement className="socialList">
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
              placeholder="Outfits"
            />
            <ImgTag
              src={TemplateImage}
              className="socialImg"
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
        </ListContainer>
      </ListContainer>

      <Footer />
    </>
  );
}

export default Social;
