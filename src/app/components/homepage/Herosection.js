"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MapPin } from "lucide-react";
import Navbar from "../homepage/Navbar"; 

export default function HeaderAndHero({ user }) {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularLocations = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Jodhpur",
    "Jaipur",
    "Udaipur",
    "Jaisalmer",
    "Chennai",
    "Lucknow",
    "Rewa",
    "Azamgarh",
    "Kolkata",
  ];

  const displayedSuggestions = popularLocations.filter((loc) =>
    loc.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSuggestionClick = (loc) => {
    setSearchText(loc);
    setShowSuggestions(false);

    if (!user) {
      document.getElementById("open-login")?.click();
    } else {
      console.log(`Location selected: ${loc}`);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);

    if (!user) {
      document.getElementById("open-login")?.click();
    } else {
      console.log(`Location searched: ${searchText}`);
    }
  };

  return (
    <section className="relative w-full">
      <video
        className="absolute inset-0 w-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="/videos/v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
      <Navbar />
      <div className="relative h-[825px] w-full flex items-center justify-center text-center z-10">
        <div className="relative z-10 flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-transparent mb-4">
            Your Next Home, Unlocked
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Explore handpicked rentals in cities that match your vibe
          </p>

          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-xl relative"
          >
            <div className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaSearch className="text-gray-400 text-lg mr-3" />
              <input
                type="text"
                placeholder="Search for a location..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="flex-1 text-base text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
              >
                Search
              </button>
            </div>

            {showSuggestions && displayedSuggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-48 overflow-auto">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Popular Locations
                  </h3>
                </div>
                <div className="py-1">
                  {displayedSuggestions.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onMouseDown={() => handleSuggestionClick(loc)}
                      className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-700 font-medium cursor-pointer flex items-center gap-3 transition-colors duration-200"
                    >
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{loc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
