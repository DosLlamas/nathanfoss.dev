// Assets
import Pika from "../assets/pika.gif";
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
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
// Components
import userRequest from "./userRequests";

export default function Login({ setCurrentUser, setGuestUser }) {
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
  const [errors, setErrors] = useState({});

  const handleGuestLogin = () => {
    setGuestUser(true);
    navigate("/about");
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      await userRequest
        .post("/login/", user)
        .then(() => {
          // Request succeeded, perform any necessary actions
          setGuestUser(false);
          setCurrentUser(user);
          navigate("/about");
        })
        .catch((error) => {
          // Request failed, handle the error
          setErrors({});
          if (error.response.data[0]) {
            setErrors({ email: error.response.data[0], password: error.response.data[0]});
          } else {
            console.log(error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            <div className="guest-btn" onClick={handleGuestLogin}>
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
                <EmailIcon sx={{ fontSize: "50px", marginBottom: "3%" }} />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  error={errors?.email}
                  helperText={errors.email ? errors.email : " "}
                />
              </Box>
              <Box
                fullwidth
                sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
              >
                <LockIcon sx={{ fontSize: "50px", marginBottom: "3%" }} />

                <Box
                  fullwidth
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    width: "100%",
                  }}
                >
                  <FormControl
                    error={errors.password}
                    fullWidth
                    variant="outlined"
                  >
                    <InputLabel
                      sx={{ borderRadius: "24px" }}
                      // htmlFor="outlined-adornment-password"
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
                      value={password}
                      name="password"
                      label="Password"
                      onChange={changeHandler}
                    />
                    <FormHelperText>
                      {errors.password ? errors.password : " "}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <div className="contact-card-wrapper" style={{ cursor: "pointer" }}>
              <button className="contact-card" type="submit">
                <LoginIcon /> Log in
              </button>
              <button className="contact-card" onClick={navigateToSignupPage}>
                Need an account? <span>Sign up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
