import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import { CURRENT_YEAR } from '../constants/common';
import logoJYNetwork from '../assets/logo_jynetwork_white.png';

const TopBar: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // 현재 URL 경로에서 어워드 슬러그 추출 (/awards/slug)
    const currentSlug = location.pathname.split('/awards/')[1];

    // 현재 선택된 어워드 찾기
    const currentAward = Object.values(AWARDS).find(a => a.slug === currentSlug);

    const handleScrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            handleCloseMenu();
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleCloseMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 300); // Wait for animation to finish
    };

    return (
        <header
            className={`w-full py-8 px-6 md:px-12 flex justify-between md:justify-end items-center absolute top-0 left-0 z-50 lg:pl-64 pointer-events-none transition-all duration-300 ${(isMenuOpen || isClosing) ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
                }`}
        >

            {/* Mobile Navigation (Hamburger + Title) */}
            <div className="md:hidden relative pointer-events-auto flex flex-col items-start">
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleMenu}
                        className="text-brand-gold p-1"
                        aria-label="Toggle award menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-brand-gold hover:text-brand-gold/80 text-xl font-medium transition-colors"
                    >
                        {CURRENT_YEAR} {currentAward?.title}
                    </button>
                </div>

                {/* Mobile Dropdown Menu (Full Width) */}
                {(isMenuOpen || isClosing) && (
                    <div
                        className={`absolute top-full left-0 -ml-6 w-screen mt-8 py-4 bg-black/70 backdrop-blur-md border-t border-b border-white/10 shadow-xl z-50 flex flex-col items-start px-6 ${isClosing ? 'animate-slide-up' : 'animate-slide-down'
                            }`}
                    >
                        {Object.values(AWARDS)
                            //.filter((award) => award.slug !== 'hit' && award.slug !== 'customer' && award.slug !== currentSlug)
                            .map((award) => (
                                <Link
                                    key={award.slug}
                                    to={`/awards/${award.slug}`}
                                    onClick={handleCloseMenu}
                                    className="block w-full text-left py-3 text-gray-400 hover:text-brand-gold active:text-brand-gold transition-colors text-xl font-medium border-b border-white/5 last:border-0"
                                >
                                    {CURRENT_YEAR} {award.title}
                                </Link>
                            ))}
                    </div>
                )}
            </div>

            {/* Desktop Navigation (Existing) */}
            <nav className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8 pointer-events-auto">
                {Object.values(AWARDS)
                    .filter((award) => award.slug !== 'hit' && award.slug !== 'customer')
                    .map((award) => {
                        const isCurrentAward = award.slug === currentSlug;

                        return isCurrentAward ? (
                            <button
                                key={award.slug}
                                onClick={handleScrollToTop}
                                className="text-brand-gold hover:text-brand-gold/80 text-m md:text-2xl transition-colors font-medium cursor-pointer"
                            >
                                {CURRENT_YEAR} {award.title}
                            </button>
                        ) : (
                            <Link
                                key={award.slug}
                                to={`/awards/${award.slug}`}
                                className="text-gray-400 hover:text-brand-gold text-m md:text-2xl transition-colors"
                            >
                                {CURRENT_YEAR} {award.title}
                            </Link>
                        );
                    })}
            </nav>

            {/* JY네트워크 로고 */}
            <a
                href="https://www.jynetwork.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 md:ml-8 hover:opacity-80 transition-opacity pointer-events-auto"
            >
                <img
                    src={logoJYNetwork}
                    alt="JY네트워크"
                    className="h-8 md:h-10 w-auto"
                />
            </a>
        </header>
    );
};

export default TopBar;
