import React from "react";
import {
  MessageCircle,
  ShieldCheck,
  Home,
  Dog,
  Monitor,
  Building2,
  ArrowRight,
} from "lucide-react";

const Midsection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Rental Success Stories
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from renters who found their dream homes with RentEase.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <img
            src="/images/2.png"
            alt="Renter 1"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800 mb-2">John D.</h4>
          <p className="text-gray-600 mb-4">
            "RentEase made finding my first rental so easy! The search filters
            helped me narrow down the perfect place."
          </p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <img
            src="/images/1.png"
            alt="Renter 2"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Sarah W.</h4>
          <p className="text-gray-600 mb-4">
            "I was able to find a beautiful home for my family in no time. The
            RentEase team is fantastic!"
          </p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <img
            src="/images/3.png"
            alt="Renter 3"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Michael S.
          </h4>
          <p className="text-gray-600 mb-4">
            "Thanks to RentEase, I found a rental property that fits my budget
            and needs perfectly. Highly recommended!"
          </p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★★</span>
          </div>
        </div>
      </div>

      <div className="text-center my-16">
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
          Why RentEase?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're committed to finding the perfect rental home that fits your
          lifestyle and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
        <div className="group relative rounded-xl shadow-lg p-6 flex flex-col items-center text-center bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('/images/dottedimg.png')] bg-cover bg-center transition-opacity duration-300 pointer-events-none"></div>
          <Home className="w-12 h-12 text-sky-500 mb-4 relative z-10" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
            Family-Friendly Rentals
          </h4>
          <p className="text-gray-600 mb-4 relative z-10">
            Browse homes that are perfect for families, with amenities and
            layouts that suit your needs.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors relative z-10"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="group relative rounded-xl shadow-lg p-6 flex flex-col items-center text-center bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('/images/dottedimg.png')] bg-cover bg-center transition-opacity duration-300 pointer-events-none"></div>
          <Dog className="w-12 h-12 text-rose-500 mb-4 relative z-10" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
            Pet-Friendly Spaces
          </h4>
          <p className="text-gray-600 mb-4 relative z-10">
            Find rentals where pets are welcome, including pet parks and nearby
            walking areas.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors relative z-10"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="group relative rounded-xl shadow-lg p-6 flex flex-col items-center text-center bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('/images/dottedimg.png')] bg-cover bg-center transition-opacity duration-300 pointer-events-none"></div>
          <Monitor className="w-12 h-12 text-violet-500 mb-4 relative z-10" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
            Work-from-Home Ready
          </h4>
          <p className="text-gray-600 mb-4 relative z-10">
            Explore properties with home offices, fast internet, and quiet
            environments.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors relative z-10"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="group relative rounded-xl shadow-lg p-6 flex flex-col items-center text-center bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[url('/images/dottedimg.png')] bg-cover bg-center transition-opacity duration-300 pointer-events-none"></div>
          <Building2 className="w-12 h-12 text-emerald-500 mb-4 relative z-10" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
            City Center Access
          </h4>
          <p className="text-gray-600 mb-4 relative z-10">
            Choose rentals close to downtown, near public transport and
            entertainment.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors relative z-10"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Midsection;