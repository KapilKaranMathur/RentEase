'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '../homepage/Footer';
import Navbar from '../homepage/Navbar';
import { Clock, User } from 'lucide-react';

function Blogpage() {
    const blogPosts = [
    {
        id: 1,
        title: "Must-Know Tips Before Renting Your First Apartment",
        description: "From budgeting to paperwork – everything a first-time renter in India should be ready for.",
        image: "/images/img11.jpg",
        category: "Beginner's Guide",
        author: "Nikita Sharma",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "How to Spot a Great Rental Deal in Major Cities",
        description: "Learn how to evaluate rental listings and avoid overpriced or misleading deals.",
        image: "/images/img6.jpg",
        category: "Rental Insights",
        author: "Amit Verma",
        readTime: "6 min read"
    },
    {
        id: 3,
        title: "Tenant Rights in India: What You Should Know",
        description: "Understand your legal rights and obligations as a renter to avoid disputes.",
        image: "/images/img9.jpg",
        category: "Legal Advice",
        author: "Ananya Desai",
        readTime: "7 min read"
    },
    {
        id: 4,
        title: "Rental Agreements Explained in Simple Terms",
        description: "Breakdown of key clauses in rental agreements that every tenant should be aware of.",
        image: "/images/img10.jpg",
        category: "Legal Basics",
        author: "Raghav Menon",
        readTime: "4 min read"
    },
    {
        id: 5,
        title: "Top Affordable Areas to Rent in Mumbai, Delhi & Bangalore",
        description: "Explore budget-friendly localities with good amenities in top Indian cities.",
        image: "/images/img7.jpg",
        category: "City Guide",
        author: "Priya Kapoor",
        readTime: "8 min read"
    },
    {
        id: 6,
        title: "Furnished vs Unfurnished: What’s Best for You?",
        description: "Compare costs, convenience, and flexibility to choose the right rental type.",
        image: "/images/img14.jpg",
        category: "Lifestyle",
        author: "Siddharth Jain",
        readTime: "5 min read"
    },
    {
        id: 7,
        title: "How to Negotiate Rent Without Losing the Deal",
        description: "Pro tips to help you get a better deal without scaring off the landlord.",
        image: "/images/img8.jpg",
        category: "Money Matters",
        author: "Neha Malhotra",
        readTime: "6 min read"
    }
];


    return (
        <div className="bg-white">
            <Navbar />

            <section className="bg-slate-900 py-40">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-4xl font-bold mb-4">
                        Renting Made Simple – Explore Our Insights

                    </h1>
                    <p className="text-lg text-slate-300">
                        Expert advice, tips & stories to make smart rental decisions
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img 
                                    src="/images/img13.jpg" 
                                    alt="Featured post" 
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                                    Featured
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Must-Know Tips Before Renting Your First Apartment
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    From budgeting basics to lease agreements, here's your essential guide to confidently step into your first rental.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>Sarah Johnson</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>5 min read</span>
                                    </div>
                                </div>
                                <Link 
                                    href="#" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors w-fit"
                                >
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.slice(1).map((post) => (
                            <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-48 object-cover"
                                />
                                
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-gray-500">•</span>
                                        <span className="text-xs text-gray-500">{post.readTime}</span>
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                                        {post.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {post.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                                <User className="w-3 h-3 text-gray-600" />
                                            </div>
                                            <span className="text-sm text-gray-600">{post.author}</span>
                                        </div>
                                        
                                        <Link 
                                            href="#" 
                                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blogpage;