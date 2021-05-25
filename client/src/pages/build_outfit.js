import React from "react";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import { Input, LabelForInput} from "../components/Form";
import { Select, Options } from "../components/Dropdownlists";

function handleDropdownOptions(event) {
  let selectCategory = event.target.value;
  console.log(selectCategory);
  setType(selectCategory);
}

function Build_outfit() {
  return (
    <>
      <Header />

      <div class="row">
        <h2 class="buildHe
        ader">Build Outfit</h2>
        <h2 class="buildQoute">"Find your best look"</h2>
        <div class="col-sm-12"> 
          <ReusableBtn
              to = "/catalog"
              class = "btn btn-outline-secondary buildBtn"
          >
            See Catalogs
          </ReusableBtn>

          <ReusableBtn
              to = "/addnew"
              class = "btn btn-outline-secondary buildBtn"
          >
            Add New Item
          </ReusableBtn>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12"> 
            <Input
              type = "search"
              placeholder = "Search Outfits..."
              class = "form-control ds-input"
              id = "search-input"
            >
            </Input>
        </div>
      </div>

      <div class="row">
        <div class="dropdown">
          <LabelForInput>
            <Select
              className="dropdownList"
              style={{ marginBottom: "30px" }}
              onChange={handleDropdownOptions}
            >
            <Options>Tops</Options>
            <Options>Jeans</Options>
            <Options>Dress</Options>
            <Options>Pants</Options>
            <Options>Shoes</Options>
            <Options>Handbags</Options>
            <Options>Accesories</Options>
            <Options>Skirt</Options>
            <Options>Shorts</Options>
            </Select>
          </LabelForInput>
        </div>
      </div>

      <div class="row" style="border-style:solid; background-color: rgb(226, 226, 226);">
        <div class="dropdown">
          <LabelForInput>
            <Select
              className="dropdownList"
              style={{ marginBottom: "30px" }}
              onChange={handleDropdownOptions}
            >
            {/* <Options>Find catalog options</Options> */}

            </Select>
          </LabelForInput>
        </div>

        <div class="col-sm-12"> 
          <Input
            type = "search"
            placeholder = "Outfit Name"
            class = "form-control ds-input"
            id = "outfit-input"
          >
          </Input>
        </div>

        <div id="addOutfit" class="container col-md-2">
          <ReusableBtn
            id = "addOutfit"
            class = "btn btn-outline-secondary"
          >
            Save Outfit
          </ReusableBtn>
        </div>

      </div>
    </>
  );
}

export default Build_outfit;
