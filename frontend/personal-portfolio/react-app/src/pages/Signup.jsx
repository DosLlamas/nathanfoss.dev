import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoginIcon from "@mui/icons-material/Login";
import userRequest from "./userRequests";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage

const Signup = ({ setCurrentUser }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const { first_name, last_name, username, email, password, confirm_password } =
    formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      first_name,
      last_name,
      username,
      email,
      password,
      confirm_password,
    };

    try {
      await userRequest
        .post("/signup/", newUser)
        .then(async function (res) {
          await userRequest.post("/login/", {
            email: newUser.email,
            password: newUser.password,
          });
          // Request succeeded, perform any necessary actions
          setCurrentUser(newUser);
        })
        .catch((error) => {
          // Request failed, handle the error
          setErrors({});
          if (error.response.data.email) {
            setErrors({ email: error.response.data.email });
          } else if (error.response.data.password) {
            setErrors({ password: error.response.data.password });
          } else if (error.response.data.non_field_errors?.[0]) {
            setErrors({
              non_field_errors: error.response.data.non_field_errors[0],
            });
          } else {
            console.log(error.response.data);
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
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <h1 style={{ fontSize: "88px" }}>Signup</h1>
        <p style={{ fontSize: "22px" }}>
          nathanfoss.dev <b style={{ color: "#085786" }}>web</b>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center ">
              <PersonIcon sx={{ color: "#c4c7c5", fontSize: "50px" }} />
              <EmailIcon
                sx={{ color: "#c4c7c5", fontSize: "50px", marginTop: "480%" }}
              />
              <LockIcon
                sx={{ color: "#c4c7c5", fontSize: "50px", marginTop: "80%" }}
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
                  helperText="*required"
                />
                <TextField
                  fullWidth
                  label="Last name"
                  variant="outlined"
                  name="last_name"
                  value={last_name}
                  onChange={changeHandler}
                  required
                  helperText="*required"
                />
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  name="username"
                  value={username}
                  onChange={changeHandler}
                  required
                  helperText="*required"
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  required
                  error={errors?.email}
                  helperText={errors.email ? errors.email : "*required"}
                />
                <FormControl
                  fullWidth
                  variant="outlined"
                  error={errors.password}
                >
                  <InputLabel
                    required /*htmlFor="outlined-adornment-password"*/
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
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
                    name="password"
                    value={password}
                    onChange={changeHandler}
                  />
                  <FormHelperText>
                    {errors.password
                      ? errors.password
                      : "*required, at least 8 characters"}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  error={errors.non_field_errors}
                >
                  <InputLabel
                    required /*htmlFor="outlined-adornment-password"*/
                  >
                    Confirm password
                  </InputLabel>
                  <OutlinedInput
                    // id="outlined-adornment-password"
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
                    label="Confirm password"
                    name="confirm_password"
                    value={confirm_password}
                    onChange={changeHandler}
                  />
                  <FormHelperText>
                    {errors.non_field_errors
                      ? errors.non_field_errors
                      : "*required"}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="contact-card-wrapper" style={{ cursor: "pointer" }}>
            <button className="contact-card" type="submit">
              <LoginIcon /> Sign up
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};
export default Signup;
