// src/components/pages/contact.jsx

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const emailjsUserID = import.meta.env.VITE_EMAILJS_USER_ID;
  const emailjsServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailjsServiceID, emailjsTemplateID, e.target, emailjsUserID)
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your message.");
        }
      );
  };

  return (
    <section className="p-8">
      <div className="max-w-3xl mx-auto space-y-10 mb-20">
        {/* Contact Section */}
        <h1 className="text-4xl font-extralight pb-4 text-[#6F4E37] text-center md:text-center mb-6">
          Contact Me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-9 rounded-lg shadow-lg space-y-6 mb-6" 
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-md w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md w-full"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="p-3 border border-gray-300 rounded-md w-full"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#A0937D] text-white py-3 px-4 rounded-md hover:bg-[#6C4E31] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;