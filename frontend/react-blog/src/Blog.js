import React from "react";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
  );
}
export default function Blog() {
  const navigate = useNavigate();

  const navigateToBlogTopics = () => {
    navigate("/explore-topics");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div style={{ marginLeft: "3%" }}>
      <div style={{ display: "flex" }}>
        <h1>Blog</h1>
        <Button onClick={navigateToBlogTopics} variant="text">
          <LocalOfferIcon /> Topics
        </Button>
      </div>
      <br />
      <h2>Sort from</h2>
      <br />
      <Calender />
      <br />
      <br />
      <div className="blog-cards-set">
        {Array.from(Array(6)).map((item) => (
          <div className="blog-card">
            <img
              className="blog-img"
              src="images/Hackathon-56.jpg"
              alt="Code2College black history month hackathon Feb, 2023"
            />
            <p className="blog-p">
              <Chip
                sx={{ backgroundColor: "#e3e3e3" }}
                label="Tag"
                onClick={handleClick}
              />{" "}
              5 min read
            </p>
            <br />
            <h1 style={{ margin: "5% 5% 0" }}>Title</h1>
            <p className="blog-p">
              Preview: A friend of mine recently joined a FAANG company as an
              engineering manager, and found themselves in the position of
              recruiting for engineering candidates. We caught up. “Well,” I
              laughed when they...
            </p>
            <div className="blog-p">
              <div style={{ whiteSpace: "pre", display: "flex", alignItems:"center", justifyContent: "center"}}>
                <Avatar
                  alt="User Profile Picture"
                  src=""
                  sx={{ width: 40, height: 40 }}
                /> User · Nov 2, 2022
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
