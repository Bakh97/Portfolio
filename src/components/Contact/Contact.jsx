import  { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="What's your email?"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Your Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
