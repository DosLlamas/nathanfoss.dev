import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Programming Languages",
    content: "JavaScript | Python | Ruby | Java | HTML | CSS | XML",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Libraries/Frameworks",
    content: "React JS | React Native | Django | Flask | Tailwind Material UI | Bootstrap",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Unit Testing/ Test Driven Development",
    content: "Selenium | JEST | Mocha",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "UX/UI Applications",
    content: "Figma | Excalidraw",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Cloud Applications",
    content: "Amazon Web Services(AWS) | Firebase | Microsoft Excel",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Database management",
    content: "PostgreSQL | SQLite | ER Diagram Planning",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
