import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import { CURRENT_YEAR } from '../constants/common';
import logoJYNetwork from '../assets/logo_jynetwork_white.png';

const FAMILY_SITES = [
    { name: 'JY Network', url: 'https://www.jynetwork.co.kr/' },
    { name: 'JY Marketing', url: 'https://jynetwork.net/marketing/' },
    { name: 'JY News', url: 'https://jynetwork.net/pr/' },
    { name: 'JY Media', url: 'https://jy-media.co.kr/default/' },
    { name: 'JY Design', url: 'https://jy-design.co.kr/' },
];

// const AWARD_MONTHS: Record<string, string> = {
//     'THBA': '3월',
//     'CSEB': '6월',
//     'CSBA': '9월',
//     'TEBA': '12월'
// };
const TopBar: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isFamilyMenuOpen, setIsFamilyMenuOpen] = useState(false);
    const familyMenuRef = useRef<HTMLDivElement>(null);

    // Close family menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (familyMenuRef.current && !familyMenuRef.current.contains(event.target as Node)) {
                setIsFamilyMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 현재 URL 경로에서 어워드 슬러그 추출 (/awards/slug)
    const currentSlug = location.pathname.split('/awards/')[1];

    // 현재 선택된 어워드 찾기 (Comparison with normalized Uppercase)
    const currentAward = Object.values(AWARDS).find(a => a.slug === currentSlug?.toUpperCase());

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
                            .map((award) => (
                                <Link
                                    key={award.slug}
                                    to={`/awards/${award.slug}`}
                                    onClick={handleCloseMenu}
                                    className="block w-full text-left py-3 text-gray-400 hover:text-brand-gold active:text-brand-gold transition-colors text-xl font-medium border-b border-white/5 last:border-0"
                                >
                                    {CURRENT_YEAR} {award.title}
                                    {/* <span className="ml-2 inline-block px-1.5 py-0.5 text-xs bg-current rounded-sm leading-none align-middle">
                                        <span className="text-black">{AWARD_MONTHS[award.slug]}</span>
                                    </span> */}
                                </Link>
                            ))}
                    </div>
                )}
            </div>

            {/* Desktop Navigation (Existing) */}
            <nav className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8 pointer-events-auto">
                {Object.values(AWARDS)
                    .map((award) => {
                        const isCurrentAward = award.slug === currentSlug?.toUpperCase();

                        return isCurrentAward ? (
                            <button
                                key={award.slug}
                                onClick={handleScrollToTop}
                                className="text-brand-gold hover:text-brand-gold/80 text-m md:text-xl transition-colors font-medium cursor-pointer"
                            >
                                {CURRENT_YEAR} {award.title}
                                {/* <span className="ml-2 inline-block px-1.5 py-0.5 text-[1rem] bg-current rounded-sm leading-none align-middle">
                                    <span className="text-black">{AWARD_MONTHS[award.slug]}</span>
                                </span> */}
                            </button>
                        ) : (
                            <Link
                                key={award.slug}
                                to={`/awards/${award.slug}`}
                                className="text-gray-400 hover:text-brand-gold text-m md:text-xl transition-colors"
                            >
                                {CURRENT_YEAR} {award.title}
                                {/* <span className="ml-2 inline-block px-1.5 py-0.5 text-[1rem] bg-current rounded-sm leading-none align-middle">
                                    <span className="text-black">{AWARD_MONTHS[award.slug]}</span>
                                </span> */}
                            </Link>
                        );
                    })}
            </nav>

            {/* JY네트워크 로고 (Family Site Dropdown) */}
            <div
                className="md:ml-8 pointer-events-auto relative"
                ref={familyMenuRef}
                onMouseEnter={() => setIsFamilyMenuOpen(true)}
                onMouseLeave={() => setIsFamilyMenuOpen(false)}
            >
                <button
                    onClick={() => setIsFamilyMenuOpen(!isFamilyMenuOpen)}
                    className="flex-shrink-0 hover:opacity-80 transition-opacity flex items-center focus:outline-none"
                    aria-label="Family Sites Menu"
                >
                    <img
                        src={logoJYNetwork}
                        alt="JY네트워크"
                        className="h-8 md:h-10 w-auto"
                    />
                </button>

                {/* Dropdown Menu - SEO optimized (Always in DOM, hidden visually) */}
                <div
                    className={`absolute right-0 pt-3 w-48 z-50 transition-all duration-200 origin-top-right ${isFamilyMenuOpen
                        ? 'opacity-100 visible scale-100 translate-y-0'
                        : 'opacity-0 invisible scale-95 -translate-y-2'
                        }`}
                >
                    <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden py-2">
                        {FAMILY_SITES.map((site) => (
                            <a
                                key={site.name}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-5 py-3 text-md text-gray-300 hover:text-brand-gold hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 font-medium"
                                onClick={() => setIsFamilyMenuOpen(false)}
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
