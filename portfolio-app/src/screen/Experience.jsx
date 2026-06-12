import React from "react";

export default function Experience() {
  const experiences = [
    {
      year: "2018 - Present",
      role: "Back-End Developer",
      company: "Tripian Inc.",
      location: "Remote (Toronto, Canada)",
      desc: "Core team member. Backend with PHP/Python, API design, React/Vue.js frontend, AWS infrastructure.",
    },
    {
      year: "2016 - Present",
      role: "Full-Stack Developer",
      company: "RadKod",
      location: "Freelance/Open Source",
      desc: "Founded developer collective. Flutter apps, web games, backend services. Active GitHub contributor.",
    },
    {
      year: "2015 - 2017",
      role: "Back-End Developer",
      company: "AvantajBizde",
      location: "Izmir, Turkey",
      desc: "C2C e-commerce platform with Laravel, ORM, and domain-driven design.",
    },
    {
      year: "2015",
      role: "Back-End Developer",
      company: "Promega",
      location: "Izmir, Turkey",
      desc: "PHP backend modules, algorithm and data structure implementation.",
    },
    {
      year: "2014 - 2015",
      role: "Back-End Developer",
      company: "TurkWebAjans",
      location: "Izmir, Turkey",
      desc: "Client websites using classic ASP and Adobe Flash. Junior developer role.",
    },
  ];

  const skills = [
    "PHP",
    "Python",
    "Node.js",
    "Laravel",
    "Django",
    "React",
    "Vue.js",
    "Next.js",
    "Flutter",
    "React Native",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Git",
  ];

  return (
    <div style={{ height: "100vh" }}
      className="container p-5 overflow-y-scroll"
      style={{ background: "#F5F1E8", minHeight: "100vh" }}
    >
      <div className="mb-5">
        <h1

        >
          Experience
        </h1>

        <p className="fs-4 text-secondary">
          8+ years building scalable web applications
        </p>
      </div>

      <div className="mb-5">
        <h3 className="mb-4">Primary Stack</h3>

        <div className="d-flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-pill border bg-white"

            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="card border-0 shadow-sm mb-4"
            style={{
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-3">
                  <h6 className="text-muted">{exp.year}</h6>
                </div>

                <div className="col-md-9">
                  <h4>{exp.role}</h4>

                  <h6 className="text-secondary">
                    {exp.company} • {exp.location}
                  </h6>

                  <p className="mt-3 text-muted">{exp.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}