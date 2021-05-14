import axios from "axios";
import { fetchPhotos } from "./CloudinaryService";

export default {
  getPrediction: function (url) {
    console.log("URL", url);
    let headers = {
      "Content-Type": "application/json",
    };
    return axios.post(
      "http://3.141.18.55/api/predict",
      {url: url},
      headers
    ).then(data => data.json())
  },
};
