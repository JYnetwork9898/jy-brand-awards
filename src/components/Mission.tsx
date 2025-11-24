import React from 'react';
import { useAward } from '../context/AwardContext';

const Mission: React.FC = () => {
    const { currentAward } = useAward();

    return (
        <section id="mission" className="py-32 bg-brand-bg relative overflow-hidden snap-start">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid md:grid-cols-12 gap-16 items-start">
                    <div className="md:col-span-4">
                        <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-brand-gold"></span>
                            Mission
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            대한민국을 빛낸<br />
                            <span className="text-gray-500">최고의 브랜드</span>
                        </h3>
                        <div className="w-20 h-1 bg-brand-gold"></div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
                            <p className="text-2xl text-white font-medium leading-relaxed">
                                {currentAward.title}은 중앙일보가 후원하는<br />
                                대한민국 대표 브랜드 어워드입니다.
                            </p>
                            <div className="grid gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-xl">Award Purpose</h4>
                                    <p>
                                        {currentAward.description}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-xl">Selection Criteria</h4>
                                    <p>
                                        우수한 품질과 뛰어난 서비스를 통해 높은 브랜드 가치를 인정받은 기업을 대상으로 "{currentAward.title}"를 선정합니다.
                                        이번 시상은 소비자들에게 그 가치를 인정받은 기업인이 선정되는 영예를 얻게 됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
