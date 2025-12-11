import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import { CURRENT_YEAR } from '../constants/common';
import logoJYNetwork from '../assets/logo_jynetwork_white.png';

const TopBar: React.FC = () => {
    const location = useLocation();

    // 현재 URL 경로에서 어워드 슬러그 추출 (/awards/slug)
    const currentSlug = location.pathname.split('/awards/')[1];

    const handleScrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="w-full py-8 px-12 flex justify-end items-center bg-transparent absolute top-0 left-0 z-50 lg:pl-64 pointer-events-none">

            {/* 어워드 링크 목록 (Pointer Events 활성화) */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8 pointer-events-auto">
                {Object.values(AWARDS)
                    .filter((award) => award.slug !== 'hit' && award.slug !== 'customer') // 히트브랜드랑 고객감동브랜드 숨겨두기
                    .map((award) => {
                        const isCurrentAward = award.slug === currentSlug;

                        return isCurrentAward ? (
                            // 현재 보고 있는 어워드는 버튼으로 표시 (클릭시 최상단 스크롤)
                            <button
                                key={award.slug}
                                onClick={handleScrollToTop}
                                className="text-brand-gold hover:text-brand-gold/80 text-m md:text-xl transition-colors font-medium cursor-pointer"
                            >
                                {CURRENT_YEAR} {award.title}
                            </button>
                        ) : (
                            // 다른 어워드는 링크로 이동
                            <Link
                                key={award.slug}
                                to={`/awards/${award.slug}`}
                                className="text-gray-400 hover:text-brand-gold text-m md:text-xl transition-colors"
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
                className="flex-shrink-0 ml-8 hover:opacity-80 transition-opacity pointer-events-auto"
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

