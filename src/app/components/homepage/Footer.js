"use client";
import React, { useState } from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-white">RentEase</div>
            <p className="text-gray-600">
              Your trusted partner in finding the perfect rental home. We make
              home-hunting simple, efficient, and tailored to your unique rental
              needs.
            </p>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-gray-600">
              <a
                href="https://www.google.com/maps/search/?api=1&query=89-6+BGKT,+Jodhpur,+Rajasthan,+India"
                target="_blank" className="hover:underline"
              >
                89-6 BGKT, Jodhpur, Rajasthan, India
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              <a href="tel:+91 98765 43210" className="hover:underline">
                +91 98765 43210
              </a>
            </p>
            <p className="text-gray-500 mt-2">
              <a href="mailto:mail@renteasenow.com" className="hover:underline">
                mail@renteasenow.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;