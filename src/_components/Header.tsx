// /* eslint-disable @next/next/no-img-element */

// export default function Header() {
//     return (
//         <header className="bg-white px-8 md:px-20 py-4 shadow-sm flex justify-between items-center">
//             {/* Logo Section */}
//             <div>
//                 <img
//                     src="/Layer 1.png"
//                     alt="Supreme Group Logo"
//                     className="h-10 w-auto object-contain"
//                 />
//             </div>

//             {/* Right Side Buttons */}
//             <div className="flex items-center gap-4">
//                 <button
//                     type="button"
//                     className="bg-[#5CD6FF] hover:bg-[#00A8E0] text-white font-medium border-1 border-[#00BFFF] text-sm px-6 py-2 rounded-full transition duration-200 shadow-md hover:shadow-lg "
//                 >
//                     Contact Us
//                 </button>
//                 <img
//                     src="/bxl-linkedin.svg.svg"
//                     alt="LinkedIn and Language Icon"
//                     className="h-6 w-auto"
//                 />
//                 <div className="flex items-center gap-1 font-bold">
//                     <img
//                         src="/translate 1.svg"
//                         alt="LinkedIn and Language Icon"
//                         className="h-6 w-auto"
//                     />
//                     ENG
//                 </div>
//             </div>
//         </header>
//     );
// }


/* eslint-disable @next/next/no-img-element */

export default function Header() {
    return (
        <header className="bg-white px-4 sm:px-8 md:px-20 py-4 shadow-sm border-b border-gray-100">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <img
                        src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
                        alt="Supreme Group Logo"
                        className="h-10 sm:h-10 w-auto object-contain"
                    />
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Contact Button */}
                    <button
                        type="button"
                        className="bg-gradient-to-r from-[#5CD6FF] to-[#00BFFF] hover:from-[#00A8E0] hover:to-[#0099CC] text-white font-semibold text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-opacity-50"
                        aria-label="Contact us"
                    >
                        Contact Us
                    </button>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {/* LinkedIn Icon */}
                        <button
                            type="button"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="Visit our LinkedIn page"
                        >
                            <img
                                src="/bxl-linkedin.svg.svg"
                                alt="LinkedIn"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                            />
                        </button>

                        {/* Language Selector */}
                        <button
                            type="button"
                            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="Change language"
                        >
                            <img
                                src="/translate 1.svg"
                                alt="Language"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                            />
                            <span className="text-gray-700 font-semibold text-sm sm:text-base">
                                ENG
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}