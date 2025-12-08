"use client";

import React, { useState } from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-350/90 via-slate-650/80 to-slate-950" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-950/20 border border-slate-950/30 text-slate-50 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's start a conversation
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about a property? Need help with your listing? Our team is ready to assist you.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-16 relative z-20 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          <div className="bg-slate-950 p-8 lg:p-10 text-white lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-slate-950/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-slate-900/30 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-slate-100 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">+91 98765 43210</p>
                    <p className="text-slate-100 text-xs">Mon-Fri, 9am to 6pm IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">help@rentease.com</p>
                    <p className="text-slate-100 text-xs">Online support 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Headquarters</p>
                    <p className="text-slate-100 text-xs leading-relaxed">
                      89-6 BGKT, Jodhpur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-8 lg:mt-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-100">
                <MessageSquare className="w-3 h-3" />
                <span>Live Chat available on Dashboard</span>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 lg:p-10 bg-white relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-4">
                  Thank you for reaching out. One of our property experts will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-slate-950 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors shadow"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20 outline-none text-sm placeholder:text-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20 outline-none text-sm placeholder:text-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20 outline-none text-sm placeholder:text-slate-400"
                    placeholder="Inquiry about Property #123"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/20 outline-none text-sm placeholder:text-slate-400 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-3 rounded-lg shadow transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
