import axios from "axios";
// import { fetchPhotos } from "./CloudinaryService";

export default {
  getPrediction: function (url) {
    console.log("URL", url);

    return axios
      .post("http://3.141.18.55/api/predict", { url: url })
      .then((data) => data)
      .catch((err) => console.log(err));
  },
// Saves new item data
  saveItem: function (data) {
    console.log(data);
    return axios.post("/api/item", data);
  },
 
  // Testing for login and signup
  login: function(userData){
    return axios.post('/api/user/login', userData);
  },

  signup: function(userData){
    return axios.post('/api/user/signup', userData);
  },

  // Gets all categories
  getCategories: function() {
    return axios.get("/api/category");
  },

  // Gets all outfits
  getOutfits: function() {
    return axios.get("/api/outfit");
  },

  // Gets all catalogs
  getCatalogs: function(userData) {
    console.log("USERDATA", userData)
    return axios.get("/api/catalogs/" + userData);
  },

   // Gets all items
   getAllItems: function(userData, userId) {
    console.log("USERDATA", userData, userId)
    return axios.get("/api/item/" + userData + "/" + userId);
  },

  // Send outfit data
  saveOutfit: function(userData) {
    console.log("SAVE OUTFIT", userData)
    return axios.post("/api/outfits", userData)
  },

  // Send catalog data
  saveCatalogItem: function(userData) {
    console.log("SAVe catalog item", userData)
    return axios.post("/api/catalogs/item", userData)
  },

   // Send catalog data
   addItems: function(userData) {
    console.log("ADD ITEMS", userData)
    return axios.post("/api/outfits/item", userData)
  },



};
