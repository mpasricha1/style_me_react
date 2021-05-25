import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import { Select } from "../components/DropdownLists";
import API from "../utils/API";
import { ImgTag } from "../components/ulElements";


function Build_outfit() {
  const [categories, setCategories] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [outfit, setOutfit]=useState([]);
  const [outfitName, setOutfitName] = useState("");


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

  function handleDropdownOptions(event) {
    event.preventDefault();
    let selectCategory = event.target.value;
    //console.log(selectCategory)
    var categoryID = categories.filter(
      (category) => category.category_name === selectCategory
    );
    var thisCategoryId = categoryID[0].id;
    //console.log(thisCategoryId);
    setCategoryId(thisCategoryId);
    loadAllItems(thisCategoryId);
  }
  //console.log(categoryId);

  //Get all items by category
  useEffect(() => {
    loadAllItems();
  }, []);

  function loadAllItems(thisCategoryId) {
    API.getAllItems(thisCategoryId, 1)
      .then((res) => {
        // console.log(res.data[0].id);
        // console.log(res.data[0].image_link);
        // setOutfit([{id:res.data[0].id, src:res.data[0].image_link}])
        // console.log(outfit);

        setAllItems([...res.data]);
        console.log(allItems);
      })
      .catch((err) => console.log(err));
  }

  function addToOutfit(event) {
    event.preventDefault();
    let itemID = event.target.id;
    let imgLink = event.target.getAttribute("src");
    console.log(itemID);
    console.log(imgLink);
    
    let outfitArr = [...outfit];
    
    setOutfit(outfitArr.push({id:itemID, src:imgLink}));
    console.log(outfitArr);
    setOutfit(outfitArr);   
  }

  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value);
    setOutfitName(value);
    //console.log(outfitName);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(outfitName);
    // API.saveOutfit({
    //   outfitName,
    // }).

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
          onChange={handleDropdownOptions}
          className="categDropList btn btn-outline-secondary"
          name="categories"
        >
          {categories.map((category) => (
            <option
              key={category.id}
              className="option"
              data-id={category.id}
              value={category.category_name}
            >
              {category.category_name}
            </option>
          ))}
        </Select>

        <div onClick={addToOutfit}>
          {allItems.length ? (
            <ImgTag
              key={allItems[0].id}
              id={allItems[0].id}
              src={allItems[0].image_link}
              value={allItems[0].item_name}
              style={{ width: "300px", heigh: "300px" }}
            />
          ) : (
            console.log("")
          )}
        </div>
      </div>

      <div className="form-search" onClick={handleSubmit}>
        <Select className="catalogsDropList btn btn-outline-secondary">
          {catalogs.map((catalog) => (
            // {console.log(catalog.id, catalog.catalog_name)}
            <option key={catalog.id} id={catalog.id} value={catalog.catalog_name}>
              {catalog.catalog_name}
            </option>
          ))}
        </Select>

        <input
        onChange={handleInputChange}
          type="search"
          className="outfitName btn btn-outline-secondary"
          placeholder="Outfit Name"
        />

        <button className="saveBtn btn btn-outline-secondary" type="submit" onClick={handleSubmit}>
          Save
        </button>
      </div>
      <div>
        {outfit.map((outfitImg) => (
          <ImgTag src={outfitImg.src} style={{ width: "200px", heigh: "200px" }}/>
        ))}
      </div>
    </>
  );
}

export default Build_outfit;
