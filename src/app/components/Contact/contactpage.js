import React, { useState } from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-slate-900 py-40 pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Get in touch
          </h1>
          <div className="flex justify-center">
            <div className="w-16 h-0.5 bg-blue-400 rounded-full mb-4" />
          </div>
          <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      <main className="pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-light text-gray-900 mb-3">
                Message sent
              </h2>
              <p className="text-gray-500">
                We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-gray-700"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-gray-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-gray-700"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-12 py-4 bg-gray-900 text-white font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending
                    </span>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}