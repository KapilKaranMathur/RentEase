"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Target, Eye, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Singh",
    city: "Mumbai",
    role: "Software Engineer",
    feedback:
      "RentEase helped me find my perfect flat in just 2 days. The listings were clear, and the verification gave me peace of mind!",
  },
  {
    name: "Meera Joshi",
    city: "Bengaluru",
    role: "Product Designer",
    feedback:
      "The whole process felt super smooth. I loved how RentEase focused only on rentals—it felt built just for me.",
  },
  {
    name: "Rohit Sharma",
    city: "Delhi",
    role: "Marketing Head",
    feedback:
      "I was skeptical at first, but the transparency and speed blew me away. I’ve already recommended RentEase to 3 colleagues.",
  },
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about.jpg"
            alt="Modern Interior"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            Redefining the way <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              India rents homes
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            We're building a future where finding a home is as easy as ordering a cab. Transparent, reliable, and stress-free.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                More than just a <br />
                listing platform.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At RentEase, we know that finding the perfect rental home isn’t just about
                listings — it’s about finding a place to build your life. Our platform
                simplifies rental searches across India’s top cities, offering verified,
                up-to-date listings tailored to your needs.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">50k+</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Happy Renters</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">12+</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Cities Covered</p>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
                 alt="Team working" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">
              We are driven by a singular purpose: to make renting a home a delightful experience for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Target className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To eliminate friction in the rental market with verified info, transparent pricing, and seamless communication tools.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <Eye className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To become the most trusted housing ecosystem in India, where renters feel secure and landlords confident.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                <ShieldCheck className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trust & Safety</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Every listing is verified and every interaction is secured to prevent fraud and scams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
            <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] rounded-full bg-blue-600 blur-[120px]"></div>
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of RentEase</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 text-center relative transition-all duration-500">
              <Quote className="w-10 h-10 text-blue-400 mx-auto mb-6 opacity-80" />
              
              <div className="h-36 md:h-28 flex items-center justify-center">
                <p className="text-lg md:text-xl font-light leading-relaxed text-slate-200 italic">
                  "{testimonials[index].feedback}"
                </p>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mb-2 shadow-md ring-4 ring-white/10">
                  {testimonials[index].name.charAt(0)}
                </div>
                <h4 className="text-base font-bold text-white">{testimonials[index].name}</h4>
                <p className="text-xs text-blue-300">{testimonials[index].role}, {testimonials[index].city}</p>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
