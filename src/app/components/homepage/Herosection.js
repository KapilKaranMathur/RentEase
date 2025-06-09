'use client'; 

import React, { useState } from 'react'; 
import Link from 'next/link'; 
import Navbar from './Navbar'; 

function SearchBar() { 
  return ( 
    <div className="flex w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden"> 
      <input type="text" placeholder="Enter location to rent..." className="flex-1 px-5 py-3 outline-none text-sm text-gray-700" /> 
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold"> 
        Search Rentals 
      </button> 
    </div> 
  ); 
} 

export default function HeaderAndHero() { 
  const [isLoginOpen, setIsLoginOpen] = useState(false); 

  return ( 
    <section className="relative w-full"> 
      <video className="absolute inset-0 w-full object-cover z-[-1]" autoPlay loop muted > 
        <source src="/videos/v2.mp4" type="video/mp4" /> 
        Your browser does not support the video tag. 
      </video> 
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div> 
      <Navbar /> 
      <div className="relative h-[825px] w-full flex items-center justify-center text-center z-10"> 
        <div className="relative z-10 flex flex-col items-center text-white"> 
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-transparent mb-4"> 
            Your Next Home Awaits 
          </h1> 
          <p className="text-lg mb-8 max-w-xl"> 
            Find the best rental properties in the most desirable neighborhoods 
          </p> 
          <SearchBar /> 
        </div> 
      </div> 
    </section> 
  ); 
}