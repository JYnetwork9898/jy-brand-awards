import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-brand-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-brand-gold tracking-wider">
                            KBMJ <span className="text-white">AWARDS</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#about" className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            <a href="#winners" className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Winners</a>
                            <a href="#process" className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Process</a>
                            <a href="#faq" className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <a href="#apply" className="bg-brand-gold hover:bg-brand-gold-light text-brand-black px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-brand-gold/20">
                            Apply Now
                        </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-brand-navy border-b border-brand-gold/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" className="text-gray-300 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#winners" className="text-gray-300 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium">Winners</a>
                        <a href="#process" className="text-gray-300 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium">Process</a>
                        <a href="#faq" className="text-gray-300 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
                        <a href="#apply" className="block w-full text-center bg-brand-gold text-brand-black px-6 py-3 rounded-md font-bold mt-4">
                            Apply Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
