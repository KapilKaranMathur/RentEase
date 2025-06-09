import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-bold text-white">
                            RentEase
                        </div>
                        <p className="text-gray-600">
                            Your trusted partner in finding the perfect rental home. We make home-hunting
                            simple, efficient, and tailored to your unique rental needs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-blue-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties" className="text-gray-600 hover:text-blue-500">
                                    Rentals
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-blue-500">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-blue-500">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Customer Support</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <p className="text-gray-600">
                            123 Main St, Springfield, USA
                        </p>
                        <p className="text-gray-600 mt-2">
                            +1 (234) 567-890
                        </p>
                        <p className="text-gray-600 mt-2">
                            mail@renteasenow.com
                        </p>
                    </div>
                </div>

                <div className="mt-12 lg:mt-16">
                    <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                    <p className="text-gray-600 mb-4">
                        Subscribe to our newsletter for the latest rental listings and real estate insights.
                    </p>
                    <div className="flex gap-2 mb-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="text-sm px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-500 text-sm">
                        By subscribing, you agree to our{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-gray-500">
                    <p>© 2025 RentEase. All Rights Reserved.</p>
                    <Link href="/rentals" className="text-blue-500 hover:text-blue-700 mt-4 md:mt-0 flex items-center gap-2">
                        Browse Our Rentals
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
