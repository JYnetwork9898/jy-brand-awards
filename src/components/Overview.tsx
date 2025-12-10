import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';
import thbaBg from '../assets/THBA_main.png';
import csebBg from '../assets/CSEB_main.png';
import csbaBg from '../assets/CSBA_main.png';
import tebaBg from '../assets/TEBA_main.png';

const bgImages: Record<string, string> = {
    hit: thbaBg,
    customer: csebBg,
    consumer: csbaBg,
    year: tebaBg
};

const Overview: React.FC = () => {
    const { currentAward } = useAward();
    const bgImage = bgImages[currentAward.slug];

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
            {/* Dynamic Background with Award Color */}
            <div className="absolute inset-0 bg-brand-bg">
                {bgImage ? (
                    <>
                        <img
                            src={bgImage}
                            alt={`${currentAward.title} Background`}
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

            <div className="relative z-10 max-w-screen-2xl mx-auto container-padding w-full">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-8">
                        {/* <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                            <span className="text-sm font-medium tracking-widest uppercase text-gray-300">{CURRENT_YEAR} Brand Awards</span>
                        </div> */}

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
                            <div className="mb-8">
                                <span className="block text-brand-gold text-8xl md:text-9xl font-black mb-6 leading-none">{currentAward.abbreviation}</span>
                            </div>
                            <div>
                                <span className="block text-6xl md:text-7xl mb-2">
                                    <span className="text-brand-gold-light">{currentAward.sponsor}</span>가 후원하는
                                </span>
                                <span className="block text-brand-gold-light text-6xl md:text-7xl">{CURRENT_YEAR} {currentAward.title.replace(`${CURRENT_YEAR} `, '')}</span>
                            </div>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                            {currentAward.description}
                        </p>
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
