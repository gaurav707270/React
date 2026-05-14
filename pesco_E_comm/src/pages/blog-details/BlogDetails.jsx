import React, { useState, useEffect } from 'react'

export default function BlogDetails() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(saved);
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !comment) {
      alert("All fields required");
      return;
    }

    const newComment = { name, email, comment };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    setName("");
    setEmail("");
    setComment("");
  };


  const handleNewsletter = () => {
    alert("Subscribed Successfully 🎉");
  };

  return (
    <div>

      {/* TOP */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Top Fashion Trends in 2026</h1>
          <p className="text-muted">February 25, 2026 | By Admin</p>
        </div>
      </section>

      {/* Blog Details */}
      <div className="container my-5">
        <div className="row">

          {/* Main Content */}
          <div className="col-lg-8">

            <img
              src="https://source.unsplash.com/1000x500/?fashion"
              className="img-fluid rounded mb-4"
              alt="blog"
            />

            <p>Fashion in 2026 is all about bold colors...</p>

            <blockquote className="blockquote bg-light p-3 border-start border-4 border-dark">
              <p className="mb-0">
                "Fashion is the armor to survive the reality of everyday life."
              </p>
              <footer className="blockquote-footer">Bill Cunningham</footer>
            </blockquote>

            {/* TAGS */}
            <div className="mt-4">
              <strong>Tags:</strong>
              <span className="badge bg-dark">Fashion</span>
              <span className="badge bg-secondary">Trends</span>
              <span className="badge bg-success">Lifestyle</span>
            </div>

            {/* COMMENTS FORM */}
            <div className="mt-5">
              <h4>Leave a Comment</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-dark">
                  Post Comment
                </button>
              </form>

              {/*  SHOW COMMENTS */}
              <div className="mt-4">
                <h5>All Comments</h5>

                {comments.length === 0 ? (
                  <p>No comments yet</p>
                ) : (
                  comments.map((c, i) => (
                    <div key={i} className="border p-2 mb-2">
                      <strong>{c.name}</strong>
                      <p className="m-0">{c.comment}</p>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-header bg-dark text-white">Categories</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Fashion</li>
                <li className="list-group-item">Shopping</li>
                <li className="list-group-item">Lifestyle</li>
                <li className="list-group-item">Technology</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Newsletter */}
      <section className="container-fluid">
        <div className="container p-3 rounded-5 border shadow d-flex flex-wrap">

          <div className="col p-2">
            <h3>Our Newsletter</h3>
            <h1 className="p-3">
              Get weekly update. Sign up and get up to{" "}
              <span className="text-danger">20% off</span>
            </h1>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control p-3 mt-2"
                placeholder="Write Your Email Address"
              />

              <button
                className="btn btn-outline-secondary mt-2"
                onClick={handleNewsletter}
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}