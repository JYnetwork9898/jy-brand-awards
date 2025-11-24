import React from 'react';
import { useAward } from '../context/AwardContext';

const Video: React.FC = () => {
    const { currentAward } = useAward();

    return (
        <section id="video" className="py-32 bg-brand-bg border-t border-brand-gold/10 snap-start">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        역대 {currentAward.title}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        대한민국을 빛낸 브랜드들의 영광스러운 순간을 확인하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[2025, 2024, 2023].map((year) => (
                        <div key={year} className="group cursor-pointer">
                            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-brand-gold/20 group-hover:border-brand-gold transition-all mb-4">
                                <div className="absolute inset-0 bg-brand-bg-secondary/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                    <div className="w-16 h-16 bg-brand-gold/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-gold/20">
                                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 rounded text-xs text-white font-medium">
                                    {year} Highlights
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                                {year} {currentAward.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {year}년도 시상식 현장 스케치
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Video;
