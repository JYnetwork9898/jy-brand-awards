import React from 'react';
import { Link } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import { CURRENT_YEAR } from '../constants/common';

const TopBar: React.FC = () => {
    return (
        <header className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center bg-transparent absolute top-0 left-0 z-50">
            <div className="mb-4 md:mb-0">
                <Link to="/" className="text-white font-bold text-xl leading-tight">
                    KBMJ<br />
                    <span className="text-sm font-normal">Brand Awards</span>
                </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
                {Object.values(AWARDS).map((award) => (
                    <Link
                        key={award.slug}
                        to={`/awards/${award.slug}`}
                        className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors"
                    >
                        {CURRENT_YEAR} {award.title}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default TopBar;
