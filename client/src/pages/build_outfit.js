import React from "react";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import { Select } from "../components/DropdownLists";

function Build_outfit() {
  return (
    <>
      <Header />
      <div container className="buildOutfit">
        <h2>Build Outfit</h2>
        <h3>"Find your best look"</h3>
      </div>

      <div className="buildtopButtons">
        <ReusableBtn
          to="/item"
          className="seeCatalogsBtn btn btn-outline-secondary"
        >
          ADD NEW ITEM
        </ReusableBtn>
        <ReusableBtn
          to="/catalogs"
          className="buildoutfitBtn btn btn-outline-secondary"
        >
          SEE CATALOGS
        </ReusableBtn>
      </div>


      <div container className="categoriesDropList">

        <input
          type="search"
          className="inputSearch btn btn-outline-secondary"
          placeholder="Search Outfits..."
        />


        <Select className="categDropList btn btn-outline-secondary">
          Categories
       </Select>
      </div>






      <div container className="form-search">
        <Select className="catalogsDropList btn btn-outline-secondary">
          CATALOGS
          </Select>

        <input
          type="search"
          className="outfitName btn btn-outline-secondary"
          placeholder="Outfit Name"
        />

        <button class="saveBtn btn btn-outline-secondary" type="submit">
          Save
          </button>
      </div>


    </>
  );
}

export default Build_outfit;
