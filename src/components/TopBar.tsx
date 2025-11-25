import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import { CURRENT_YEAR } from '../constants/common';

const TopBar: React.FC = () => {
    const location = useLocation();

    // Extract current award slug from URL path
    const currentSlug = location.pathname.split('/awards/')[1];

    const handleScrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center bg-transparent absolute top-0 left-0 z-50">
            <div className="mb-4 md:mb-0">
                <Link to="/" className="text-white font-bold text-xl leading-tight">
                    KBMJ<br />
                    <span className="text-sm font-normal">Brand Awards</span>
                </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
                {Object.values(AWARDS).map((award) => {
                    const isCurrentAward = award.slug === currentSlug;

                    return isCurrentAward ? (
                        <button
                            key={award.slug}
                            onClick={handleScrollToTop}
                            className="text-brand-gold hover:text-brand-gold/80 text-xs md:text-sm transition-colors font-medium cursor-pointer"
                        >
                            {CURRENT_YEAR} {award.title}
                        </button>
                    ) : (
                        <Link
                            key={award.slug}
                            to={`/awards/${award.slug}`}
                            className="text-gray-400 hover:text-brand-gold text-xs md:text-sm transition-colors"
                        >
                            {CURRENT_YEAR} {award.title}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};

export default TopBar;
