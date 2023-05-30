import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import NightlightIcon from "@mui/icons-material/Nightlight";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoginIcon from "@mui/icons-material/Login";

const Signup = () => {
  const [transitionedIn, setTransitionedIn] = useState(false);

  useEffect(() => {
    setTransitionedIn(true);
  }, []);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

//   const [errors, setErrors] = useState([]);
  const { first_name, last_name, email, password } = formData;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       first_name,
//       last_name,
//       email,
//       password,
//     };
//     fetch("/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newUser),
//     }).then((res) => {
//       if (res.ok) {
//         res.json().then((user) => {
//           navigate(`/`);
//           /*
//             Stretch goal: log in for the user automatically on sign up instead
//             of navigating to login page
//           */
//         });
//       } else {
//         res.json().then((json) => setErrors(Object.entries(json.errors)));
//       }
//     });
//   };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigateToLoginPage = (e) => {
    navigate("/");
  };

//   if (errors) return <h1>{errors}</h1>;
  return (
    <div className="primary-container">
      <div
        className={`transition-in2 ${transitionedIn ? "transitioned-in2" : ""}`}
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
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center ">
              <PersonIcon sx={{ color: "#c4c7c5", fontSize: "50px" }} />
              <EmailIcon
                sx={{ color: "#c4c7c5", fontSize: "50px", marginTop: "200%" }}
              />
              <LockIcon
                sx={{ color: "#c4c7c5", fontSize: "50px", marginTop: "40%" }}
              />
            </div>
            <div className="w-full">
              {/* Input fields column */}
              <div className="flex flex-col space-y-4 items-center">
                <TextField
                  fullWidth
                  label="First name"
                  variant="outlined"
                  name="first_name"
                  value={first_name}
                  onChange={changeHandler}
                  required
                />
                <TextField
                  fullWidth
                  label="Last name"
                  variant="outlined"
                  name="last_name"
                  value={last_name}
                  onChange={changeHandler}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  required
                />
                <FormControl fullWidth variant="outlined">
                  <InputLabel required htmlFor="outlined-adornment-password">
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
                          onMouseDown={handleMouseDownPassword}
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
                    name="password"
                    value={password}
                    onChange={changeHandler}
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="contact-card-wrapper" style={{ cursor: "pointer" }}>
            <div className="contact-card" onClick={navigateToLoginPage}>
              Back
            </div>
            <div className="contact-card">
              <LoginIcon /> Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
