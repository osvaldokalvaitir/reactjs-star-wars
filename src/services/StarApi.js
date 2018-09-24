import axios from "axios";

const StarApi = axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json"
  }
});

export default StarApi;
