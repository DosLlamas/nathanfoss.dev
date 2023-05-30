// Assets
import Pika from "./assets/pika.gif";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import EmailIcon from '@mui/icons-material/Email';
// import AccountCircle from "@mui/icons-material/AccountCircle";

// Packeges
// import React, { useState, useEffect } from "react";
export default function Login() {
  // const [djangoResp, setDjangoResp] = useState("");
  // const [errors, setErrors] = useState(null);

  // useEffect(() => {
  //   fetch("/blogs")
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json().then((data) => {
  //           setDjangoResp(data[0]?.message);
  //         });
  //       } else {
  //         res.json().then((errorData) => setErrors(errorData.errors));
  //       }
  //     })
  //     .catch((error) => {
  //       setErrors("An error occurred while fetching the data.");
  //       console.error(error);
  //     });
  // }, [djangoResp]);

  // if (errors) return <h1>{errors}</h1>;
  return (
    <div className="primary-container">
      <div className="welcome-card">
        <div className="light-dark-mode">
          <NightlightIcon
            sx={{
              display: "flex",
              fontSize: "74px",
              color: "#1f1f1f",
              cursor: "pointer",
              transition: 'color 0.3s', // Add transition for smooth color change
            '&:hover': {
              color: '#e7d93c', // Change the color to your desired hover color
            },
            }}
          />
        </div>
        <h1 style={{ fontSize: "88px" }}>Welcome</h1>
        <p style={{ fontSize: "22px" }}>
          nathanfoss.dev <b style={{ color: "#085786" }}>blog</b>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "-10%",
            marginTop: "-10%",
          }}
        >
          <img src={Pika} alt="Pikachu running" width="70%" height="auto" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="guest-btn">
            <div className="guest-btn-content">
              <PersonIcon /> Continue as a guest
            </div>
          </div>
        </div>
        <div className="or-container">
          <div className="or-left-line"></div>
          <p className="or">OR</p>
          <div className="or-right-line"></div>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, color: "#c4c7c5" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField fullWidth label="Password" type="password" />
        </Box>
        <div className="contact-card-wrapper" style={{ cursor: "pointer" }}>
          <div className="contact-card">
            <LoginIcon /> Sign in
          </div>
          <div className="contact-card">
            Need an account? <span>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
