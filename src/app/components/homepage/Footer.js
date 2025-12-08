"use client";
import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Home,
  ArrowRight
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">RentEase</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner in finding the perfect rental home. We make home-hunting simple, efficient, and tailored to your lifestyle.
            </p>
            
            <div className="relative mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-900 border border-slate-800 text-white text-sm rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Discover</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  Browse Rentals
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  Real Estate Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=89-6+BGKT,+Jodhpur,+Rajasthan,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors leading-relaxed"
                >
                  89-6 BGKT, Jodhpur,<br/> Rajasthan, India
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:mail@renteasenow.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  mail@renteasenow.com
                </a>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-8">
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;