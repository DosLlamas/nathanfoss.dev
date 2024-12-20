import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});