import axios from "axios";

export default axios.create({
  baseURL: "/blogs/users/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// Email already exists
// HTTP 400 Bad Request
// Allow: GET, POST, HEAD, OPTIONS
// Content-Type: application/json
// Vary: Accept

// {
//     "email": [
//         "user with this email already exists."
//     ]
// }

// Email invalid
// HTTP 400 Bad Request
// Allow: GET, POST, HEAD, OPTIONS
// Content-Type: application/json
// Vary: Accept

// {
//     "email": [
//         "Enter a valid email address."
//     ]
// }