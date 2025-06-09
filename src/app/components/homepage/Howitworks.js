import React from 'react'
import {   
    Calendar,     
    ArrowRight,
    Search,
    FileCheck,
    
} from 'lucide-react';

function Howitworks() {
  return (
    <div className=' mx-auto px-4 sm:py-6 lg:px-8 bg-gray-50 w-full'>
       <div className="text-center mb-20 opacity-100 transform-none">
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase">
                Simple Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                How Renting Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Renting a home is simple and fast with our three-step process.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 relative">
        
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Search className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Find Rental Homes</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Use our advanced search filters to find rental properties that suit your needs, including location, rent, and amenities.</p>
            
        </div>

        {/* Arrow between Step 1 and 2 */}
        <div className="hidden md:block absolute left-[31.3333%] top-[9%] translate-x-[5.4px]">
            <ArrowRight className="h-8 w-8 text-gray-600"/>
        </div>

        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Calendar className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Viewing</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Once you find a rental property you like, schedule a viewing and get in touch with the landlord.</p>
        </div>

        <div className="hidden md:block absolute right-[31.3333%] top-[9%] translate-x-[-5.4px]">
            <ArrowRight className="h-8 w-8 text-gray-600"/>
        </div>

        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FileCheck className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sign Your Lease</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">After the viewing, complete your application and sign the rental agreement to secure your new home.</p>
        </div>
        </div>
    </div>
  );
}

export default Howitworks;