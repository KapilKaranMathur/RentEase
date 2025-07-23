"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Target, Eye, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Singh",
    city: "Mumbai",
    feedback:
      "RentEase helped me find my perfect flat in just 2 days. The listings were clear, and the verification gave me peace of mind!",
  },
  {
    name: "Meera Joshi",
    city: "Bengaluru",
    feedback:
      "The whole process felt super smooth. I loved how RentEase focused only on rentals—it felt built just for me.",
  },
  {
    name: "Rohit Sharma",
    city: "Delhi",
    feedback:
      "I was skeptical at first, but the transparency and speed blew me away. I’ve already recommended RentEase to 3 colleagues.",
  },
];

const TestPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            src="/images/about.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center text-white px-4 max-w-5xl mx-auto z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Your Next Rental,
            <br className="hidden sm:block" />
            Made Simple & Reliable
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-white/90">
            We make finding your perfect rental home easy, trustworthy, and stress-free.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-black">
            About RentEase
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At RentEase, we know that finding the perfect rental home isn’t just about
            listings — it’s about finding a place to build your life. Our platform
            simplifies rental searches across India’s top cities, offering you verified,
            up-to-date listings tailored to your needs. Whether you’re a student, a
            working professional, or a family, RentEase empowers you with easy-to-use
            tools, detailed property information, and reliable support to make your
            rental journey smooth and stress-free. Our mission is to connect renters
            and property owners with transparency and trust, helping you find a
            comfortable home that fits your lifestyle and budget. With RentEase, your
            next rental home is just a few clicks away.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 text-black">Our Core Focus</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-black">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Simplifying the rental journey with clear info, honest service, and tools
                to help you find your ideal home with ease.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-black">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the go-to platform where everyone finds not just a rental, but a
                place to truly belong.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Testimonial Carousel */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">Why RentEase Works</h2>
          <div className="bg-white rounded-xl shadow-xl p-10 relative transition-all duration-500">
            <Quote className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <p className="text-lg text-gray-700 italic max-w-3xl mx-auto mb-4 transition-opacity duration-500">
              "{testimonials[index].feedback}"
            </p>
            <h4 className="font-bold text-blue-900">
              — {testimonials[index].name}, {testimonials[index].city}
            </h4>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default TestPage;