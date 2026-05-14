import React, { useState } from 'react'

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [newsletter, setNewsletter] = useState("");

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(form);

    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message Sent Successfully ✅");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleNewsletter = () => {
    if (!newsletter) {
      alert("Enter email");
      return;
    }

    alert("Subscribed Successfully 🎉");
    setNewsletter("");
  };

  return (
    <div>

      {/* ================= CONTACT FORM ================= */}
      <section className="container mt-5 mb-5">
        <div className="row">

          <div className="col-lg-7">
            <div className="shadow p-4 rounded bg-white">

              <h3 className="mb-4">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    rows={5}
                    placeholder="Your Message"
                  />
                </div>

                <button type="submit" className="btn btn-dark px-4">
                  <i className="ri-send-plane-line" /> Send Message
                </button>

              </form>

            </div>
          </div>

          {/* Map */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="rounded overflow-hidden shadow">
              <iframe
                src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height={420}
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="container-fluid">
        <div className="container p-4 rounded-5 border shadow d-flex flex-wrap bg-light">

          <div className="col p-3">
            <h3>Our Newsletter</h3>
            <h4>
              Get weekly updates and <span className="text-danger">20% off</span>
            </h4>

            <div className="input-group mt-3">
              <input
                type="text"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                className="form-control"
                placeholder="Enter Your Email"
              />

              <button
                className="btn btn-dark"
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