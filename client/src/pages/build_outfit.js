import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReusableBtn } from "../components/Buttons";
import { Select } from "../components/DropdownLists";
import API from "../utils/API";
import { ImgTag } from "../components/ulElements";
import { fireEvent } from "@testing-library/dom";

function Build_outfit() {
  const [categories, setCategories] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [outfit, setOutfit] = useState([]);
  const [outfitName, setOutfitName] = useState("");
  const [outfitId, setOutfitId] = useState("");
  const [catalogId, setCatalogId] = useState("");
  // const [arrayOfItems, setArrayOfItems] = useState([]);

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

  // ON CLICK, SELECT CATEGORY ID and PASS IT TO THE loadAllItems function
  function handleDropdownOptions(event) {
    event.preventDefault();
    let selectCategory = event.target.value;
    //console.log(selectCategory)
    var categoryID = categories.filter(
      (category) => category.category_name === selectCategory
    );
    //console.log(categoryID[0].id);
    let categoryId = categoryID[0].id;
    setCategoryId(categoryId);
    //console.log(categoryId);
    loadAllItems(categoryId);
  }
  // console.log(categoryId);

  // WE'LL RENDER THE ITEMS SAVED TO THAT CATEGORY ID
  function loadAllItems(categoryId) {
    API.getAllItems(categoryId, 1)
      .then((res) => {
        //let allItemsData = res.data;
        // console.log("Item id:", allItemsData[0].id);
        // console.log("Item url:", allItemsData[0].image_link);
        setAllItems([...res.data]);
        //console.log(allItems);
      })
      .catch((err) => console.log(err));
  } // console.log(allItems);

  function addToOutfit(event) {
    event.preventDefault();
    let itemID = event.target.id;
    let imgLink = event.target.getAttribute("src");
    // console.log(itemID);
    // console.log(imgLink);

    let outfitArr = [...outfit];

    setOutfit(outfitArr.push({ id: itemID, src: imgLink }));
    //console.log(outfitArr);
    setOutfit(outfitArr);
  }
  // WILL CONTAIN THE DATA NEED TO PUT AND RENDER ITEMS TOGETHER TO FORM AN OUTFIT
  //console.log(outfit);

  function handleInputChange(event) {
    const { value } = event.target;
    //console.log(value);
    setOutfitName(value);
    //console.log(outfitName);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(outfitName);
    let response = await API.saveOutfit({
      outfitName: outfitName,
    });
    
    setOutfitId(response.data.id);
    console.log(outfitId);

    console.log(outfit);

    for (const item of outfit) {
      console.log(outfit);
      await API.addItems({
        outfitId: response.data.id,
        currentId: item.id,
      });
    }

    await API.saveCatalogItem({
      catalogId: catalogId,
      outfitId: response.data.id,
    });
 
  }

  function handleCatalogChange(event) {
    event.preventDefault();
    let selectCatalog = event.target.value;
    //console.log(selectCategory)
    var catalogID = catalogs.filter(
      (catalog) => catalog.catalog_name === selectCatalog
    );
    var thisCatalogId = catalogID[0].id;
    console.log(thisCatalogId);
    setCatalogId(thisCatalogId);
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
      <div className="row">
        <div className="col-md-4">
          <div className="categoriesDropList">
            <input
              type="search"
              className="inputSearch"
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
                <p>No Items Available</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="form-search">
            <Select
              onChange={handleCatalogChange}
              className="catalogsDropList btn btn-outline-secondary"
            >
              {catalogs.map((catalog) => (
                // {console.log(catalog.id, catalog.catalog_name)}
                <option
                  key={catalog.id}
                  id={catalog.id}
                  value={catalog.catalog_name}
                >
                  {catalog.catalog_name}
                </option>
              ))}
            </Select>

            <input
              onChange={handleInputChange}
              type="search"
              className="outfitName"
              placeholder="Outfit Name"
            />

            <button
              className="saveBtn btn btn-outline-secondary"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
          <div className="row">
            <div>
              {outfit.map((outfitImg) => (
                <ImgTag
                  id={outfitImg.id}
                  key={outfitImg.id}
                  src={outfitImg.src}
                  style={{ width: "200px", heigh: "200px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Build_outfit;
