import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  Search, 
  FileCheck, 
  Mail 
} from 'lucide-react';

function Howitworks() {
  return (
    <div className="w-full bg-white font-sans">
      

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Renting made effortless
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Skip the paperwork headaches. We've streamlined the journey from search to signature in three easy steps.
          </p>
        </div>


        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          

          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10" />


          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-blue-900/5 flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Search className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Find your match</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              Browse thousands of verified listings with smart filters for location, price, and amenities.
            </p>
          </div>


          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-blue-900/5 flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Calendar className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Book a viewing</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              Schedule in-person or virtual tours directly through our calendar integration.
            </p>
          </div>


          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-blue-900/5 flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FileCheck className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Sign & Move in</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
              Submit your application online and sign digital leases securely from anywhere.
            </p>
          </div>

        </div>
      </div>


      <div className="bg-slate-950 py-20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-6 shadow-lg shadow-blue-900/20">
            <Mail className="h-6 w-6 text-white" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay ahead of the market
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join 50,000+ renters getting the latest listings and market insights delivered straight to their inbox.
          </p>

          <form className="max-w-md mx-auto relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-slate-900 border border-slate-800 text-white pl-5 pr-32 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-600"
            />
            <button 
              type="button"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-slate-600 text-xs mt-6">
            We respect your inbox. Unsubscribe at any time. Read our{" "}
            <a href="#" className="text-slate-500 hover:text-blue-400 underline transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Howitworks;