import React from "react";
import {
  Home,
  Dog,
  Monitor,
  Building2,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

const Midsection = () => {
  return (
    <section className="bg-slate-50 py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="mb-32">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs mb-3 block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Loved by renters nationwide
            </h2>
            <p className="text-lg text-slate-500">
              Don't just take our word for it. Here's what our community has to say about finding their home with RentEase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "RentEase made finding my first rental so easy! The search filters
                helped me narrow down the perfect place in a weekend."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/2.png"
                  alt="John D."
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">John D.</h4>
                  <p className="text-xs text-slate-500">Tenant in Pune</p>
                </div>
              </div>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "I was able to find a beautiful home for my family in no time. The verified listings gave us peace of mind before visiting."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/1.png"
                  alt="Sarah W."
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Sarah W.</h4>
                  <p className="text-xs text-slate-500">Tenant in Delhi</p>
                </div>
              </div>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "The lease signing process was digital and super smooth. Highly recommend for anyone moving to a new city."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/3.png"
                  alt="Michael S."
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Michael S.</h4>
                  <p className="text-xs text-slate-500">Tenant in Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why <span className="text-blue-600">RentEase</span>?
            </h2>
            <p className="text-lg text-slate-500">
              We're committed to finding the perfect rental home that fits your
              lifestyle, budget, and specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


            <div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-300">
                <Home className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Family-Friendly</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Browse homes perfect for families, with nearby schools, parks, and safe neighborhoods.
              </p>
              <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>


            <div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-rose-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors duration-300">
                <Dog className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">Pet-Friendly</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Don't leave your furry friends behind. Filter specifically for pet-welcoming landlords.
              </p>
              <div className="flex items-center text-rose-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>


            <div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-violet-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-300">
                <Monitor className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">Remote Ready</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Properties verified for high-speed internet and dedicated home office spaces.
              </p>
              <div className="flex items-center text-violet-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>


            <div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Building2 className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">City Living</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Live in the heartbeat of the city. Close to transit, entertainment, and work hubs.
              </p>
              <div className="flex items-center text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Midsection;