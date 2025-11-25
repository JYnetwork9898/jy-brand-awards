import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';
import hitBrandBg from '../assets/hitbrand_bg.png';

const Overview: React.FC = () => {
    const { currentAward } = useAward();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
            {/* Dynamic Background with Award Color */}
            <div className="absolute inset-0 bg-brand-bg">
                {currentAward.slug === 'hit' ? (
                    <>
                        <img
                            src={hitBrandBg}
                            alt="Background"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-brand-bg/50 to-brand-bg"></div>
                    </>
                ) : (
                    <>
                        <div
                            className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"
                            style={{ background: `radial-gradient(circle, ${currentAward.color}, transparent 70%)` }}
                        ></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
                    </>
                )}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-8">
                        {/* <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                            <span className="text-sm font-medium tracking-widest uppercase text-gray-300">{CURRENT_YEAR} Brand Awards</span>
                        </div> */}

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                                <span className="block">{CURRENT_YEAR}</span>
                                <span className="block">{currentAward.title.replace(`${CURRENT_YEAR} `, '')}</span>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed border-l-2 border-brand-gold pl-8 mb-12">
                            {currentAward.description}
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-lg">
                                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Sponsored by</span>
                                <span className="text-lg font-medium text-white">중앙일보 · 동아일보</span>
                            </div>
                            <div className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-lg">
                                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Organized by</span>
                                <span className="text-lg font-medium text-white">JYnetwork</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
            </div>
        </section>
    );
};

export default Overview;
