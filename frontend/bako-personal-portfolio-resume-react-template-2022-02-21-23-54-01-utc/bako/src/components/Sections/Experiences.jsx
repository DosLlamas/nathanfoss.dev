import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "12/2022 - Present",
    degree: "Software Engineer",
    content:
      "Software Engineer Apprentice @ Coding For Hermit Crabs, Part-Time | Web Development Instructor at Code2College, Part-Time",
  },
  {
    id: 2,
    year: "09/2022 - 01/2023",
    degree: "Software Engineering Bootcamp",
    content:
      "Learned Javascript Fundamentals, Object Oriented JavaScript, Intro to React, React: Components and Props, Ruby Fundamentals, Regex, PostgreSQL and APIs, Ruby on Rails, Data Structures and Algorithms. Connected and supported community: Started a Discord to tutor and assist my current and incoming cohorts and homework, developed a readme and documentation around useful resources and guidelines for the course to assist newcomers, set up and proctored study sessions after class to improve student morale and outcomes",
  },
  {
    id: 3,
    year: "2015 - 2021",
    degree: "Self taught, Software Engineeing Freelancing",
    content:
      "Completed Advanced Placement(AP) Computer Science courses in Java for college credit, building projects for myself and others for free using, Java, HTML and CSS",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
