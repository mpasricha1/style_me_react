import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import { Select } from "../components/DropdownLists";
import API from "../utils/API";
function Build_outfit() {
  const [categories, setCategories] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [allItems, setAllItems] = useState([]);

  // GET CATEGORIES
  useEffect(() => {
    loadCategories();
  }, []);
  function loadCategories() {
    API.getCategories()
      .then((res) => {
        // console.log(res.data);
        setCategories([...res.data]);
      })
      .catch((err) => console.log(err));
  }
  //console.log(categories);

  // GET CATALOGS
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

  // Get all items by category
  // useEffect(() => {
  //   loadAllItems();
  // }, []);

  // function loadAllItems() {
  //   API.getAllItems( )
  //     .then((res) => {
  //        console.log(res.data);
  //       setAllItems([...res.data]);
  //     })
  //     .catch((err) => console.log(err));
  // }


  function handleDropdownOptions(event) {
    event.preventDefault();
   var element = event.target;
  console.log(element);
  }

  return (
    <>
      <Header />
      <div className="buildOutfit">
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

      <div className="categoriesDropList">
        <input
          type="search"
          className="inputSearch btn btn-outline-secondary"
          placeholder="Search Outfits..."
        />
  
        <Select
          onClick={handleDropdownOptions}
          className="categDropList btn btn-outline-secondary"
          name="categories"
        >
          {categories.map((category) => (
            <option key={category.id} className="option" data-id={category.id} value={category.category_name}>
              {category.category_name}
            </option>
          ))}
        </Select>
      </div>

      <div className="form-search">
        <Select className="catalogsDropList btn btn-outline-secondary">
          {catalogs.map((catalog) => (
            // {console.log(catalog.id, catalog.catalog_name)}
            <option key={catalog.id} value={catalog.catalog_name}>
              {catalog.catalog_name}
            </option>
          ))}
        </Select>

        <input
          type="search"
          className="outfitName btn btn-outline-secondary"
          placeholder="Outfit Name"
        />

        <button className="saveBtn btn btn-outline-secondary" type="submit">
          Save
        </button>
      </div>
    </>
  );
}

export default Build_outfit;
