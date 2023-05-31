// Assets
import Pika from "./assets/pika.gif";
// Packages
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NightlightIcon from "@mui/icons-material/Nightlight";
import InputAdornment from "@mui/material/InputAdornment";
// import LightModeIcon from "@mui/icons-material/LightMode";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function Login({ setCurrentUser }) {
  const [transitionedIn, setTransitionedIn] = useState(false);

  useEffect(() => {
    setTransitionedIn(true);
  }, []);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigateToSignupPage = (e) => {
    navigate("/signup");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [errors, setErrors] = useState(null);

  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate("/about");
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const [djangoResp, setDjangoResp] = useState("");
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

  if (errors) {
    return (
      <>
        <h1>An error occured with logging in:</h1>
        <p>{errors.message}</p>
      </>
    );
  }
  return (
    <div className="primary-container">
      <div
        className={`transition-in ${transitionedIn ? "transitioned-in" : ""}`}
      >
        <div className="welcome-card">
          <div className="light-dark-mode">
            <NightlightIcon
              sx={{
                display: "flex",
                fontSize: "74px",
                color: "#1f1f1f",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#e7d93c",
                },
              }}
            />
          </div>
          <h1 style={{ fontSize: "88px" }}>Welcome</h1>
          <p style={{ fontSize: "22px" }}>
            nathanfoss.dev <b style={{ color: "#085786" }}>web</b>
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
          <form onSubmit={loginHandler}>
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
              <Box
                fullwidth
                sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
              >
                <EmailIcon sx={{ fontSize: "50px" }} />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                />
              </Box>
              <Box
                fullwidth
                sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
              >
                <LockIcon sx={{ fontSize: "50px" }} />

                <Box
                  fullwidth
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    width: "100%",
                  }}
                >
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      sx={{ borderRadius: "24px" }}
                      // htmlFor="outlined-adornment-password"
                      required
                      value={password}
                      name="password"
                      onChange={changeHandler}
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <div className="contact-card-wrapper" style={{ cursor: "pointer" }}>
              <div className="contact-card" type="submit">
                <LoginIcon /> Sign in
              </div>
              <div className="contact-card" onClick={navigateToSignupPage}>
                Need an account? <span>Sign up</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
