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

  saveItem: function (data) {
    console.log(data);
    return axios.post("/api/newitem", data);
  },
};
