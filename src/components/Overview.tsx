import React from 'react';

const Overview: React.FC = () => {
    return (
        <section id="overview" className="relative bg-brand-bg overflow-hidden min-h-screen flex items-center pt-16 snap-start">
            {/* Background Gradient/Effect */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-black opacity-90"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold-light/5 rounded-full blur-3xl"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-8 py-32 text-center">
                <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
                    전문 마케팅 에이전시와 메이저 언론사가 협엽하여 매년 개최되는 브랜드 어워즈를 만나보세요.
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in-up delay-100">
                    KBMJ <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">
                        BRAND AWARDS 2026
                    </span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 animate-fade-in-up delay-200">
                    대한민국을 빛낸 히트브랜드의 탄생을 소개합니다.
                </p>

                <div className="grid md:grid-cols-4 gap-6 mt-16 border-t border-brand-gold/10 pt-12 animate-fade-in-up delay-300">
                    <div className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/50 transition-all group">
                        <div className="text-brand-gold font-bold text-xl mb-2 group-hover:scale-105 transition-transform">히트브랜드</div>
                        <div className="text-sm text-gray-400">3월</div>
                    </div>
                    <div className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/50 transition-all group">
                        <div className="text-brand-gold font-bold text-xl mb-2 group-hover:scale-105 transition-transform">고객감동<br />우수브랜드</div>
                        <div className="text-sm text-gray-400">6월</div>
                    </div>
                    <div className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/50 transition-all group">
                        <div className="text-brand-gold font-bold text-xl mb-2 group-hover:scale-105 transition-transform">소비자만족<br />브랜드</div>
                        <div className="text-sm text-gray-400">9월</div>
                    </div>
                    <div className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/10 hover:border-brand-gold/50 transition-all group">
                        <div className="text-brand-gold font-bold text-xl mb-2 group-hover:scale-105 transition-transform">올해의<br />우수브랜드</div>
                        <div className="text-sm text-gray-400">12월</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
