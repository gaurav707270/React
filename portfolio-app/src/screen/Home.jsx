import React from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.jpeg";

export default function Home() {
  return (
    <div className="d-flex">
      <Navbar />

      <div
        className="container-fluid vh-100 d-flex align-items-center"
        style={{
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Left Side */}
            <div className="col-lg-6">

              <p
                className="fw-semibold mb-3"
                style={{
                  color: "#6B5B4D",
                  letterSpacing: "2px",
                }}
              >
                FRONTEND DEVELOPER
              </p>

              <h1
                className="display-2 fw-bold"
                style={{
                  color: "#2D2D2D",
                }}
              >
                Kharate <br />
                Gaurav
              </h1>

              <p
                className="mt-4 fs-5"
                style={{

                }}
              >
                I create modern, responsive and user-friendly web applications
                using React.js. Passionate about clean code, beautiful UI and
                great user experiences.
              </p>

              <div className="mt-5 d-flex gap-3">
                <button
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#2D2D2D",
                    color: "#fff",
                    borderRadius: "30px",
                  }}
                >
                  View Projects
                </button>

                <button
                  className="btn px-4 py-2"
                  style={{
                    border: "2px solid #2D2D2D",
                    color: "#2D2D2D",
                    borderRadius: "30px",
                  }}
                >
                  Contact Me
                </button>
              </div>

              <div className="d-flex gap-4 mt-5">
                <a
                  href="https://github.com/gaurav707270"
                  className="text-decoration-none fw-semibold"
                  style={{ color: "#2D2D2D" }}
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/kharategaurav7072/"
                  className="text-decoration-none fw-semibold"
                  style={{ color: "#2D2D2D" }}
                >
                  LinkedIn
                </a>

                <a
                  href="https://x.com"
                  className="text-decoration-none fw-semibold"
                  style={{ color: "#2D2D2D" }}
                >
                  X
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 d-flex justify-content-center">

              <img
                src={profile}
                style={{

                  width: "400px",
                  height: "400px",
                  backgroundColor: "#D8CFC1",
                  borderRadius: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.1)",
                }}
              >
              </img>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}