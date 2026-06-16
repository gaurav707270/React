import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="d-flex w-100">
      <Navbar />

      <div className="d-flex justify-content-center  w-100">
        <div
          className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        >
          <div
            className="text-center p-5 bg-dark text-white"
            style={{
              borderRadius: "30px",
              maxWidth: "700px",
            }}
          >
            <h1
              className="fw-bold mb-4"
            >
              Get In Touch
            </h1>

            <p
              className="fs-5 mb-5"
            >
              I'm currently available for freelance projects,
              internships, and collaboration opportunities.
              Feel free to contact me if you'd like to work together.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">

              <a
                href="mailto:yourmail@gmail.com"
                className="btn btn-outline-primary px-4 py-3"
              >
                <i className="ri-mail-line me-2"></i>
                Email Me
              </a>

              <a
                href="https://github.com/gaurav707270"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-danger px-4 py-3"
              >
                <i className="ri-github-fill me-2"></i>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kharategaurav7072/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info px-4 py-3"
              >
                <i className="ri-linkedin-box-fill me-2"></i>
                LinkedIn
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}