import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import { CURRENT_YEAR, PREV_YEAR } from '../constants/common';
import TopBar from '../components/TopBar';

// Award month mapping
const AWARD_MONTHS: Record<string, string> = {
    'hit': '3월',
    'customer': '6월',
    'consumer': '9월',
    'year': '12월'
};

const Home: React.FC = () => {
    const [hoveredAward, setHoveredAward] = useState<string>('hit');

    const currentAward = AWARDS[hoveredAward];
    const currentMonth = AWARD_MONTHS[hoveredAward];

    return (
        <div className="min-h-screen bg-brand-bg text-white font-sans relative overflow-x-hidden selection:bg-brand-gold selection:text-black">
            <TopBar />

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative z-10 pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/50 to-brand-bg"></div>
                </div>

                <div className="grid md:grid-cols-12 gap-12 items-center h-full relative z-10">
                    <div className="md:col-span-7 relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
                        <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-12 tracking-tight">
                            <span className="block text-brand-gold">{CURRENT_YEAR}</span>
                            <span className="block">KBMJ</span>
                            <span className="block">BRAND</span>
                            <span className="block">AWARDS</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-12 border-l-2 border-brand-gold pl-6">
                            대한민국을 대표하는 최고의 브랜드를 선정합니다.<br />
                            소비자와 기업이 함께 만들어가는 가치있는 시상식
                        </p>
                        <div className="flex items-center gap-8">
                            <div className="text-sm font-medium text-gray-500">
                                <span className="block text-brand-gold mb-1">Sponsored by</span>
                                중앙일보 · 동아일보
                            </div>
                            <div className="h-10 w-px bg-gray-800"></div>
                            <div className="text-sm font-medium text-gray-500">
                                <span className="block text-brand-gold mb-1">Organized by</span>
                                JYnetwork
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col justify-end h-full pb-24 md:pb-32">
                        <div className="text-right space-y-8">
                            <Link
                                to="/awards/hit"
                                className="group inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-brand-gold/30 hover:bg-brand-gold/10 transition-all duration-300"
                            >
                                <span className="text-lg font-medium tracking-widest uppercase">현재 접수 중인 어워즈 바로가기</span>
                                <span className="text-brand-gold group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-12 left-8 md:left-24 text-xs text-gray-600 tracking-widest uppercase">
                    © {CURRENT_YEAR} JYnetworks. All rights reserved
                </div>
            </section>

            {/* Awards List Section */}
            <section className="min-h-screen bg-brand-bg-secondary flex items-center px-8 md:px-24 py-24 relative overflow-hidden">
                {/* Background Ambient Effect based on current award color */}
                <div
                    className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 opacity-10 blur-[100px] transition-colors duration-700 ease-in-out pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 50%, ${currentAward.color}, transparent 70%)` }}
                ></div>

                <div className="w-full grid md:grid-cols-12 gap-16 relative z-10">
                    {/* Left Side: Dynamic Content */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                        <div className="space-y-8">
                            <div className="relative min-h-[300px]">
                                <div className="transition-all duration-500 ease-out transform">
                                    <div className="text-8xl md:text-9xl font-bold text-white/10 mb-4 leading-none select-none">
                                        {currentMonth}
                                    </div>
                                    <div className="text-7xl md:text-8xl font-black text-brand-gold mb-2 tracking-tight leading-none">
                                        {currentAward.abbreviation}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
                                        {currentAward.title.replace(`${CURRENT_YEAR} `, '')}
                                    </h3>
                                    <p className="text-lg text-gray-400 leading-relaxed border-t border-gray-800 pt-8">
                                        {currentAward.description}
                                    </p>
                                    <div className="mt-8">
                                        <Link
                                            to={`/awards/${currentAward.slug}`}
                                            className="text-brand-gold hover:text-white transition-colors inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                                        >
                                            View Details <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Navigation List */}
                    <div className="md:col-span-7 flex flex-col justify-center space-y-2">
                        {Object.values(AWARDS).map((award) => (
                            <Link
                                key={award.slug}
                                to={`/awards/${award.slug}`}
                                onMouseEnter={() => setHoveredAward(award.slug)}
                                className={`group relative flex items-center justify-between p-8 border-b border-gray-800 hover:border-brand-gold/50 transition-all duration-300 ${hoveredAward === award.slug ? 'bg-white/5 border-brand-gold/50 pl-12' : 'hover:pl-10'}`}
                            >
                                <span className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${hoveredAward === award.slug ? 'text-white' : 'text-gray-600 group-hover:text-gray-300'}`}>
                                    {award.title.replace('2026 ', '')}
                                </span>
                                <span className={`text-3xl md:text-4xl font-bold tracking-widest uppercase transition-colors duration-300 ${hoveredAward === award.slug ? 'text-brand-gold' : 'text-gray-700 group-hover:text-gray-500'}`}>
                                    {AWARD_MONTHS[award.slug]}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
