"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  IndianRupee,
  Building,
  X,
  ArrowRight,
  Filter,
  Home
} from "lucide-react";
import Image from "next/image";
import mockProperties from "../../data/mockproperties";

export default function Properties() {
  const [searchText, setSearchText] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredProperties(mockProperties);
      return;
    }

    const search = searchText.toLowerCase();
    setFilteredProperties(
      mockProperties.filter(
        ({ location, title, type, purchaseType }) =>
          location.toLowerCase().includes(search) ||
          title.toLowerCase().includes(search) ||
          type.toLowerCase().includes(search) ||
          purchaseType.toLowerCase().includes(search)
      )
    );
  }, [searchText]);

  const popularLocations = [
    "Mumbai", "Pune", "Delhi", "Bangalore", "Hyderabad", "Jodhpur", "Jaipur",
    "Udaipur", "Jaisalmer", "Chennai", "Lucknow", "Rewa", "Azamgarh", "Kolkata"
  ];

  const displayedSuggestions = popularLocations.filter((loc) =>
    loc.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="bg-slate-950 pb-24">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <header className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
              <Home className="w-3 h-3" />
              Premium Listings
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Find a place you'll love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">call home</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our curated selection of top-rated rental properties across India's most vibrant cities.
            </p>
          </header>

          <div className="mt-12 max-w-2xl mx-auto relative z-10" ref={searchContainerRef}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowSuggestions(false);
              }}
              className="relative group"
            >
              <div className="relative flex items-center bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/10 transition-all focus-within:ring-4 focus-within:ring-blue-500/20">
                <div className="pl-4 pr-3 text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search by city, neighborhood, or property type..."
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="flex-1 h-12 bg-transparent text-slate-900 placeholder-slate-400 text-lg outline-none w-full"
                />
                
                {searchText && (
                  <button
                    type="button"
                    onClick={() => setSearchText("")}
                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}

                <button
                  type="submit"
                  className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Search</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {showSuggestions && displayedSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Popular Destinations
                    </span>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {displayedSuggestions.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setSearchText(loc);
                          setShowSuggestions(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="bg-slate-100 p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                          <MapPin className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
                        </div>
                        <span className="text-slate-700 font-medium group-hover:text-blue-700">
                          {loc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-0 pb-20">
        <div className="flex items-center justify-between mb-6 px-1">
          <h2 className="text-xl font-bold text-slate-900">
            {searchText ? `Results for "${searchText}"` : "Featured Properties"}
          </h2>
          <span className="text-sm text-slate-500 font-medium">
            {filteredProperties.length} Listings found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-slate-200 border-dashed">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No matches found</h3>
              <p className="text-slate-500 max-w-xs mx-auto">
                We couldn't find any properties matching "{searchText}". Try broadening your search.
              </p>
              <button 
                onClick={() => setSearchText("")}
                className="mt-6 text-blue-600 font-medium hover:text-blue-700 underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {property.type}
                    </span>
                    {property.isNew && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        New
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 mb-1 opacity-90">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium truncate">{property.location}</span>
                    </div>
                    <h3 className="text-lg font-bold truncate leading-tight">
                      {property.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <BedDouble className="w-5 h-5 text-blue-500 mb-1" />
                      <span className="text-sm font-bold text-slate-700">{property.beds}</span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Beds</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <Bath className="w-5 h-5 text-blue-500 mb-1" />
                      <span className="text-sm font-bold text-slate-700">{property.baths}</span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Baths</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <Maximize className="w-5 h-5 text-blue-500 mb-1" />
                      <span className="text-sm font-bold text-slate-700">{property.sqft}</span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Sqft</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-slate-900">
                      <IndianRupee className="w-5 h-5" />
                      <span className="text-2xl font-bold">{property.price.toLocaleString()}</span>
                      <span className="text-sm text-slate-500 font-medium self-end mb-1">/mo</span>
                    </div>
                    <button className="text-blue-600 font-semibold text-sm hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}