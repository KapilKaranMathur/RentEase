"use client";

import React from "react";
import Link from "next/link";
import Footer from "../homepage/Footer";
import Navbar from "../homepage/Navbar";
import { Clock, User, ArrowRight, BookOpen, Tag } from "lucide-react";

function Blogpage() {
  const blogPosts = [
    {
      id: 1,
      title: "Must-Know Tips Before Renting Your First Apartment",
      description:
        "From budgeting to paperwork – everything a first-time renter in India should be ready for to ensure a smooth transition.",
      image: "/images/img11.jpg",
      category: "Beginner's Guide",
      author: "Nikita Sharma",
      readTime: "5 min read",
      date: "Oct 12, 2023"
    },
    {
      id: 2,
      title: "How to Spot a Great Rental Deal in Major Cities",
      description:
        "Learn how to evaluate rental listings and avoid overpriced or misleading deals in competitive markets.",
      image: "/images/img6.jpg",
      category: "Rental Insights",
      author: "Amit Verma",
      readTime: "6 min read",
      date: "Oct 15, 2023"
    },
    {
      id: 3,
      title: "Tenant Rights in India: What You Should Know",
      description:
        "Understand your legal rights and obligations as a renter to avoid disputes and ensure fair treatment.",
      image: "/images/img9.jpg",
      category: "Legal Advice",
      author: "Ananya Desai",
      readTime: "7 min read",
      date: "Oct 20, 2023"
    },
    {
      id: 4,
      title: "Rental Agreements Explained in Simple Terms",
      description:
        "Breakdown of key clauses in rental agreements that every tenant should be aware of before signing.",
      image: "/images/img10.jpg",
      category: "Legal Basics",
      author: "Raghav Menon",
      readTime: "4 min read",
      date: "Oct 22, 2023"
    },
    {
      id: 5,
      title: "Top Affordable Areas to Rent in Mumbai, Delhi & Bangalore",
      description:
        "Explore budget-friendly localities with good amenities in top Indian cities for young professionals.",
      image: "/images/img7.jpg",
      category: "City Guide",
      author: "Priya Kapoor",
      readTime: "8 min read",
      date: "Oct 25, 2023"
    },
    {
      id: 6,
      title: "Furnished vs Unfurnished: What’s Best for You?",
      description:
        "Compare costs, convenience, and flexibility to choose the right rental type for your lifestyle.",
      image: "/images/img14.jpg",
      category: "Lifestyle",
      author: "Siddharth Jain",
      readTime: "5 min read",
      date: "Oct 28, 2023"
    },
    {
      id: 7,
      title: "How to Negotiate Rent Without Losing the Deal",
      description:
        "Pro tips to help you get a better deal without scaring off the landlord or losing the apartment.",
      image: "/images/img8.jpg",
      category: "Money Matters",
      author: "Neha Malhotra",
      readTime: "6 min read",
      date: "Nov 01, 2023"
    },
  ];

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      <section className="relative bg-slate-950 py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <BookOpen className="w-3 h-3" />
            RentEase Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Insights for the Modern Renter
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert advice, market trends, and lifestyle tips to help you make smarter rental decisions.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-20 relative z-20 pb-24">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-16 group hover:shadow-2xl transition-all duration-300">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Featured
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {featuredPost.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{featuredPost.author}</p>
                    <p className="text-xs text-slate-500">{featuredPost.date}</p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Latest Articles</h3>
          <div className="hidden sm:flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full">All</button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full transition-colors">Guides</button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full transition-colors">Legal</button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full transition-colors">Lifestyle</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-blue-500" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-slate-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{post.author}</span>
                  </div>
                  <Link 
                    href="#" 
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link"
                  >
                    Read
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm hover:shadow">
            Load More Articles
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blogpage;