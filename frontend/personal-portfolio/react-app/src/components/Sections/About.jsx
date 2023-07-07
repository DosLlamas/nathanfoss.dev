import React from "react";
import { 
  SiLinktree,
} from "react-icons/si";

const aboutData = {
  cvpath: "media/Nathan-Foss-SoftwareDev.pdf",
  image: "images/Hackathon-56.jpg",
  name: "Nathan Foss",
  location: "Austin, TX",
  email: "nathanfoss.dev@gmail.com",
};

const contactData = {
  phone: ["(512) 586-9669"],
  email: ["nathanfoss.dev@gmail.com"],
  location: "Austin, TX",
  linktree: "https://linktr.ee/whats_nate",
};

function About() {
  return (
    <div>
      <img src={aboutData.image} alt={aboutData.name} />
      <div style={{ padding: "2%", marginRight: "-25%" }}>
        <div className="col-md-9">
          <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
          <p className="mb-0">
            I have always had an interest in making a social impact with
            technology, and this has led me into my career. I started out
            teaching highschoolers to build websites for clients and create
            their own personal portfolios and have ended up leading software
            engineer apprentices at Coding For Hermit Crabs, developing
            applications and curriculum for homeless youth to program. With my
            experience working in all phases of the software development life
            cycle, I’m now pursuing <b>full time or contract</b> roles in
            front-end and mobile software development, and am{" "}
            <b>open to relocation</b>.
          </p>
          <div className="row my-4">
            <div className="col-md-6">
              <div className="contact-info">
                <i className="icon-link"></i>
                <div className="details">
                  <h5>Linktree</h5>
                  <span>
                    <a href="https://linktr.ee/whats_nate" target="_blank">
                      https://linktr.ee/whats_nate
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="contact-info">
                <i className="icon-location-pin"></i>
                <div className="details">
                  <h5>Location</h5>
                  <span>{contactData.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              <div className="contact-info mb-5">
                <i className="icon-envelope"></i>
                <div className="details">
                  <h5>Email address</h5>
                  {contactData.email.map((singleEmail, index) => (
                    <span key={index}><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=nathanfoss.dev@gmail.com" target="_blank">
                    {singleEmail}
                  </a></span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="contact-info mb-5">
                <i className="icon-phone"></i>
                <div className="details">
                  <h5>Phone</h5>
                  {contactData.phone.map((singlePhone, index) => (
                    <span key={index}>{singlePhone}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <a
            href={aboutData.cvpath}
            target="_blank"
            className="btn btn-default mr-3"
          >
            <i className="icon-cloud-download"></i>See Résumé
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
