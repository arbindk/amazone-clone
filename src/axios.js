import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-57d6f/us-central1/api", //this is for debugging
}); // THE API  (cloud function) URL

export default instance;
