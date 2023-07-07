import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
// import userRequest from "../../pages/userRequests";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  
} from "react-icons/fa";
import { 
  SiLinktree,
  SiSpotify,
  SiGithub
} from "react-icons/si";
// import Button from "@mui/material/Button";

const headerData = {
  name: "Nathan Foss",
  designation: "Web Developer",
  imageThumb: "/images/headshot.png",
  social: {
    linktree: "https://linktr.ee/whats_nate",
    linkedin: "https://www.linkedin.com/in/nathan-foss/",
    github: "https://github.com/DosLlamas",
    twitter: "https://twitter.com/nathanfoss_dev",
    youtube: "https://www.youtube.com/@NateProgramming",
    spotify: "https://open.spotify.com/show/2gqDtYz2JoZv4gBq3xAckx?si=70f7795df8e74ae9",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  // const [currentUser, setCurrentUser] = useState(false);
  const history = useHistory();

  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  // useEffect(() => {
  //   userRequest
  //     .get("/user/")
  //     .then((response) => {
  //       setCurrentUser(true);
  //     })
  //     .catch((notLoggedIn) => {
  //       console.log("Not logged in");
  //       setCurrentUser(false);
  //     });
  // }, []);
  
  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   try {
  //     userRequest
  //       .post("/logout/", { withCredentials: true })
  //       .then(() => {
  //         // Request successful
  //         console.log("logout success");
  //         history.push("/");
  //         setCurrentUser(false);
  //       })
  //       .catch((error) => {
  //         // Request failed, handle the error
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* <Link to="/" className="logo" >
          <img  src={headerData.imageThumb} alt={headerData.name} />
        </Link> */}
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img
              className="headshot"
              src={headerData.imageThumb}
              alt={headerData.name}
            />
          </Link>
          {/* <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link> */}

          {/* <span className="site-slogan">{headerData.designation}</span> */}

          <nav style={{ marginTop: "-15%", marginBottom: "0%" }}>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Skills
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-bulb"></i>Skills
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-graduation"></i>Resume
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-graduation"></i>Resume
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Projects
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-grid"></i>Projects
                  </Link>
                )}
              </li>
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-blogs"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="icon-pencil"></i>Blog
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="icon-pencil"></i>Blog
                  </Link>
                )}
              </li> */}
            </ul>
          </nav>

          <div className="footer mt-auto" style={{ marginBottom: "30%" }}>
            <ul className="social-icons list-inline">
            {!headerData.social.linktree ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.linktree}>
                    <SiLinktree />
                  </a>
                </li>
              )}
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.linkedin}>
                    <FaLinkedin />
                  </a>
                </li>
              )}
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.github}>
                    <SiGithub />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.youtube ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.youtube}>
                    <FaYoutube />
                  </a>
                </li>
              )}
              {!headerData.social.spotify ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.spotify}>
                    <SiSpotify />
                  </a>
                </li>
              )}
            </ul>
            {/* {currentUser && <Button
              onClick={logoutHandler}
              color="secondary"
              variant="contained"
            >
              Log out
            </Button>} */}
            <span className="copyright">
              &copy; {new Date().getFullYear()} nathanfoss.dev
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
