import React from "react";
import Navbar from "../components/Navbar";

export default function Experience() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React.js",
    "Git",
    "GitHub",
    "Node.js",
  ];

  const experiences = [
    {
      year: "2026",
      role: "React Developer",
      company: "Personal Projects",
      desc: "Built multiple React applications including Todo App, Text Utils, Portfolio Website and E-Commerce UI.",
    },
    {
      year: "2025",
      role: "Frontend Development Learning",
      company: "Self Learning",
      desc: "Learned HTML, CSS, JavaScript, Bootstrap and React.js through practical projects.",
    },
  ];

  return (
    <div className="d-flex">
      <Navbar />

      <div
        className="container-fluid min-vh-100 p-5"
      >
        <div className="mb-5">
          <h1
            className="display-3 fw-bold"
            style={{ color: "#2d2d2d" }}
          >
            Experience
          </h1>

          <p
            className="fs-4"
          >
            Learning, Building & Growing as a Frontend Developer
          </p>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 mb-3">
            <div className="experience-card text-center p-4">
              <h2>5+</h2>
              <p>Projects Completed</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="experience-card text-center p-4">
              <h2>8+</h2>
              <p>Technologies Learned</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="experience-card text-center p-4">
              <h2>1+</h2>
              <p>Year Learning</p>
            </div>
          </div>
        </div>

        <div>
          <p>
            <h3> 2025</h3>

            <h2>
              Frontend Development Intern
              Maxima Gaming Studio
            </h2>

            <h5 className="mt-3">
              <p>• Developed responsive web interfaces using React.js</p>
              <p> • Worked with HTML, CSS and JavaScript</p>
              <p> • Improved UI/UX and application performance</p>
              <p> • Collaborated on real-world development projects</p>
            </h5>
          </p>
        </div>



      </div>
    </div>

  );
}