import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import userRequest from "./userRequests";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage

// Material UI
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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

const imageData = {
  pika: "/pika.gif",
};

const Login = ({ setCurrentUser }) => {
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const logoutHandler = (e) => {
    e.preventDefault();
    try {
      userRequest
        .post("/logout/", { withCredentials: true })
        .then(() => {
          // Request successful
          console.log("logout success");
          history.push("/");
          setCurrentUser(false);
        })
        .catch((error) => {
          // Request failed, handle the error
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [errors, setErrors] = useState([]);

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
          setCurrentUser(user);
          console.log("Login success");
          history.push("/");
        })
        .catch((error) => {
          // Request failed, handle the error
          console.log("login no work:", error);
          setErrors({});
          if (error.response.data[0]) {
            setErrors({
              email: error.response.data[0],
              password: error.response.data[0],
            });
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
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <h1 style={{ fontSize: "88px" }}>Login</h1>
        <p style={{ fontSize: "22px" }}>
          nathanfoss.dev <b style={{ color: "#085786" }}>web</b>
        </p>
        {/* <img src={imageData.pika} alt="Pikachu running" width="60%" height="auto" /> */}
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
          <button className="contact-card" type="submit">
            <LoginIcon /> Log in
          </button>
        </form>
        <Button onClick={logoutHandler} color="secondary" variant="contained">
          Log out
        </Button>
      </section>
    </Layout>
  );
};
export default Login;
