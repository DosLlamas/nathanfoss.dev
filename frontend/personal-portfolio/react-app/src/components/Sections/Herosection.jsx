import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const herosectionData = {
  name: "Nathan Foss",
  aboutMe:
    "I build website and mobile app features and fix issues at the non-profit Coding For Hermit Crabs where we aim to teach homeless to program. Outside of work, I teach pre-computer science undergraduate students to program at Code2College in Austin, TX. Also, find my software engineering related content on Youtube and Spotify",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url('https://lh3.googleusercontent.com/HlbnJmSX9lPKAzw3PIgcWlotRXK1gKby51ni9mjugFHiOuDQSCNKXP6hQWW053Z_SpyIoD-J-XPCCGB03IrdCmC7NkzLQgJgNUXv10BIW99PWRZjtRI=w2400-rj')",
      }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>See my projects
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=nathanfoss.dev@gmail.com" target="_blank" className="btn btn-border-light btn-lg">
          <i className="icon-envelope"></i>Contact me
        </a>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
