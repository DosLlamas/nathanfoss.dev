// Packages
import React from "react";
import Button from "@mui/material/Button";
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
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoginIcon from "@mui/icons-material/Login";
// Components
import userRequest from "./userRequests";

export default function Settings({ setCurrentUser }) {
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    try {
      userRequest
        .post("/logout/", { withCredentials: true })
        .then(() => {
          // Request successful
          setCurrentUser(false);
          navigate("/");
        })
        .catch((error) => {
          // Request failed, handle the error
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ marginLeft: "10%" }}>
      <h1>Settings</h1>
      <br />
      <h2>Update your profile</h2>
      {/* <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center ">
            <PersonIcon sx={{ color: "#c4c7c5", fontSize: "50px" }} />
            <EmailIcon
              sx={{ color: "#c4c7c5", fontSize: "50px", marginTop: "290%" }}
            />
            <LockIcon
              sx={{ color: "#c4c7c5", fontSize: "50px", marginTop: "80%" }}
            />
          </div>
          <div className="w-full">
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
                label="Email"
                variant="outlined"
                name="email"
                value={email}
                onChange={changeHandler}
                required
                error={errors?.email}
                helperText={errors.email ? errors.email : "*required"}
              />
              <FormControl fullWidth variant="outlined" error={errors.password}>
                <InputLabel required>
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
                <InputLabel required >
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
          <button className="contact-card" onClick={navigateToLoginPage}>
            Back
          </button>
          <button className="contact-card" type="submit">
            <LoginIcon /> Sign up
          </button>
        </div>
      </form> */}
      <br />
      <Button onClick={logoutHandler} color="secondary" variant="contained">
        Log out
      </Button>
    </div>
  );
}
