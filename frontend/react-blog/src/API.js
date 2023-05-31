import axios from "axios";

export default axios.create({
  baseURL: "/blogs/users/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
