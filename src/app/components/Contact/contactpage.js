import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just simulate submission
    console.log("Form data:", formData);
    setSubmitted(true);
  }

  return (
    <main className="max-w-xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">
          Thanks for reaching out! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="Your full name"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              placeholder="your.email@example.com"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-semibold">Message</span>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded border border-gray-300 p-2"
              rows="5"
              placeholder="Write your message here..."
            />
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}