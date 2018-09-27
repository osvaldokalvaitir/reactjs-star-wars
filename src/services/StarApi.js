import axios from "axios";

const StarApi = axios.create({
  baseURL: "https://swapi.co/api/",
  headers: {
    "content-type": "application/json"
  }
});

export default StarApi;
