"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, Navigation, ArrowRight } from "lucide-react";
import Navbar from "../homepage/Navbar"; 

export default function HeaderAndHero({ user }) {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  const popularLocations = [
    "Mumbai, Maharashtra",
    "Pune, Maharashtra",
    "Delhi, NCR",
    "Bangalore, Karnataka",
    "Hyderabad, Telangana",
    "Jodhpur, Rajasthan",
    "Jaipur, Rajasthan",
    "Udaipur, Rajasthan",
    "Jaisalmer, Rajasthan",
    "Chennai, Tamil Nadu",
    "Lucknow, Uttar Pradesh",
    "Kolkata, West Bengal",
  ];

  const displayedSuggestions = popularLocations.filter((loc) =>
    loc.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <section className="relative w-full h-[950px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-slate-900/60" />
      </div>

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-5 px-4 text-center">
        
        <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-lg">
            Discover a place <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              you'll love to live
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            From modern apartments in the city to quiet suburban homes, find your perfect rental with RentEase.
          </p>
        </div>


        <div 
          ref={wrapperRef}
          className="w-full max-w-2xl mt-10 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="group relative flex items-center bg-white/95 backdrop-blur-md rounded-full p-2 shadow-2xl shadow-black/20 border border-white/20 transition-all focus-within:ring-4 focus-within:ring-blue-500/30 focus-within:bg-white"
          >

            <div className="pl-6 pr-4 hidden md:block">
              <MapPin className="text-slate-400 h-6 w-6" />
            </div>


            <div className="flex-1 border-r border-slate-200 md:border-none">
              <label htmlFor="search-loc" className="sr-only">Search Location</label>
              <input
                id="search-loc"
                type="text"
                placeholder="Search by city, neighborhood, or address..."
                value={searchText}
                autoComplete="off"
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full h-14 bg-transparent text-slate-800 placeholder:text-slate-400 text-lg font-medium outline-none px-4 md:px-0"
              />
            </div>


            <button
              type="submit"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white h-12 w-12 md:w-auto md:px-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
            >
              <Search className="h-5 w-5 md:hidden" />
              <span className="hidden md:flex items-center gap-2 font-semibold">
                Search <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </form>


          {showSuggestions && (displayedSuggestions.length > 0 || searchText.length === 0) && (
            <div className="absolute top-full left-4 right-4 md:left-6 md:right-6 mt-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
              

              <div className="px-5 py-3 bg-slate-50/50 border-b border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Navigation className="h-3 w-3" />
                Popular Destinations
              </div>


              <div className="max-h-[280px] overflow-y-auto py-2 custom-scrollbar">
                {displayedSuggestions.map((loc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSuggestionClick(loc)}
                    className="w-full text-left px-5 py-3.5 hover:bg-blue-50/80 transition-colors flex items-center gap-4 group"
                  >
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <MapPin className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium group-hover:text-blue-700">{loc}</p>
                      <p className="text-xs text-slate-400">City in India</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>


        <div className="mt-12 flex items-center gap-8 md:gap-16 text-white/80 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">50k+</p>
            <p className="text-xs md:text-sm uppercase tracking-wider opacity-70">Active Rentals</p>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">120+</p>
            <p className="text-xs md:text-sm uppercase tracking-wider opacity-70">Cities Covered</p>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">2k+</p>
            <p className="text-xs md:text-sm uppercase tracking-wider opacity-70">New Daily</p>
          </div>
        </div>

      </div>
    </section>
  );
}