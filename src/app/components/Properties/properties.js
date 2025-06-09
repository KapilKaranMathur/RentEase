"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import Image from "next/image";
import mockProperties from "../../data/mockproperties";

export default function Properties() {
  const [searchText, setSearchText] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  const popularLocations = ["Mumbai", "Pune", "Delhi", "Bangalore", "Hyderabad"];

  const displayedSuggestions = popularLocations.filter((loc) =>
    loc.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="bg-slate-900">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-8">
          <header className="text-center mb-12 max-w-4xl mx-auto text-white">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Find Your Perfect <span className="text-blue-400">Rental Home</span>
              </h1>
              <div className="flex justify-center">
                <div className="w-16 h-0.5 bg-blue-400 rounded-full" />
              </div>
              <p className="text-gray-300 max-w-xl mx-auto">
                Discover premium rental properties across India's top cities.
              </p>
            </div>
          </header>

          <section className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowSuggestions(false);
                }}
                className="relative"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by location, property type, or status..."
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    className="w-full h-12 rounded-xl border border-gray-300 bg-white shadow-sm py-3 pl-12 pr-28 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all duration-200"
                    aria-label="Search properties"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

                  {searchText && (
                    <button
                      type="button"
                      onClick={() => setSearchText("")}
                      className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors duration-200"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 flex items-center gap-2 transition-colors duration-200"
                    aria-label="Submit search"
                  >
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>

                {showSuggestions && displayedSuggestions.length > 0 && (
                  <div className="absolute z-50 w-full bg-white rounded-xl shadow-lg border border-gray-200 mt-2 max-h-48 overflow-hidden">
                    <div className="p-3 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Popular Locations
                      </h3>
                    </div>
                    <div className="py-1">
                      {displayedSuggestions.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setSearchText(loc);
                            setShowSuggestions(false);
                          }}
                          className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-700 font-medium cursor-pointer flex items-center gap-3 transition-colors duration-200"
                          type="button"
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
          </section>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Properties Found
                </h3>
                <p className="text-gray-600">
                  No properties found for &quot;{searchText}&quot;. Try adjusting your search.
                </p>
              </div>
            </div>
          ) : (
            filteredProperties.map((property) => (
              <article
                key={property.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col border border-gray-100"
                tabIndex={0}
                aria-label={`Property: ${property.title} in ${property.location}`}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.alt || property.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                  />

                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {property.type}
                    </span>
                    <span className="bg-white text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {property.status}
                    </span>
                    {property.isNew && (
                      <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        New
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {property.description ||
                        "Beautiful rental property designed for comfortable living."}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="font-medium text-sm">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 py-3 border-t border-b border-gray-100">
                    <div className="flex flex-col items-center text-center">
                      <BedDouble className="w-4 h-4 text-blue-600 mb-1" />
                      <span className="text-sm font-medium text-gray-700">{property.beds}</span>
                      <span className="text-xs text-gray-500">Beds</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Bath className="w-4 h-4 text-blue-600 mb-1" />
                      <span className="text-sm font-medium text-gray-700">{property.baths}</span>
                      <span className="text-xs text-gray-500">Baths</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Maximize className="w-4 h-4 text-blue-600 mb-1" />
                      <span className="text-sm font-medium text-gray-700">{property.sqft}</span>
                      <span className="text-xs text-gray-500">sqft</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-5 h-5 text-gray-900" />
                      <span className="text-xl font-bold text-gray-900">
                        {property.price.toLocaleString()}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-medium text-sm transition-colors duration-200 ${
                        property.purchaseType === "For Rent"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Building className="w-4 h-4" />
                      {property.purchaseType}
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}