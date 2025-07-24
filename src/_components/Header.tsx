/* eslint-disable @next/next/no-img-element */

export default function Header() {
    return (
        <header className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-3 md:py-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
            {/* Logo Section */}
            <div className="flex items-center">
                <img
                    src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
                    alt="Supreme Group Logo"
                    className="h-8 sm:h-10 w-auto object-contain transition-transform hover:scale-105"
                />
            </div>

            {/* Right Side Buttons - Mobile Menu Toggle for small screens */}
            <div className="md:hidden">
                <button className="p-2 text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Right Side Buttons - Desktop View */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
                <button
                    type="button"
                    className="bg-[#5CD6FF] hover:bg-[#00A8E0] text-white font-medium border-1 border-[#00BFFF] text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                >
                    Contact Us
                </button>
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                        src="/bxl-linkedin.svg.svg"
                        alt="LinkedIn"
                        className="h-5 sm:h-6 w-auto"
                    />
                </a>
                <div className="flex items-center gap-1 font-bold text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors">
                    <img
                        src="/translate 1.svg"
                        alt="Language Selector"
                        className="h-5 sm:h-6 w-auto"
                    />
                    <span>ENG</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </header>
    );
}