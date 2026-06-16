import React from "react";
import Navbar from "../components/Navbar";

export default function Projects() {
    const projects = [
        {
            title: "Pesco E-Commerce",
            description:
                "A responsive e-commerce platform featuring product listings, shopping cart functionality, and modern UI.",
            tech: "React • Bootstrap • JavaScript",
        },
        {
            title: "Text Utils",
            description:
                "Text manipulation application with word count, reading time estimation, and text transformation features.",
            tech: "React • CSS • LocalStorage",
        },
        {
            title: "Todo App",
            description:
                "Task management application with add, edit, delete, and priority management functionality.",
            tech: "React • Bootstrap • LocalStorage",
        },
    ];

    return (
        <div className="d-flex">
            <Navbar />

            <div
                className="container-fluid min-vh-100 p-5"
            >
                <h1
                    className="fw-bold mb-5"
                    style={{ color: "#2D2D2D" }}
                >
                    My Projects
                </h1>

                <div className="row">
                    {projects.map((project, index) => (
                        <div style={{ width: "420px" }} className="col-4 col-lg-4 mb-4 bg-dark m-2 rounded text-white" key={index}>
                            <div
                                className="h-100 p-4 "

                            >
                                <h3
                                    className="fw-bold mb-3"
                                >
                                    {project.title}
                                </h3>

                                <p

                                >
                                    {project.description}
                                </p>

                                <span
                                    className="badge p-2"

                                >
                                    {project.tech}
                                </span>

                                <div className="mt-4">
                                    <button
                                        className="btn btn-primary"

                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}