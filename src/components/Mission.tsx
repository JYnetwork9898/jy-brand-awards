import React from 'react';
import { useAward } from '../context/AwardContext';

const Mission: React.FC = () => {
    const { currentAward } = useAward();

    return (
        <section id="mission" className="py-32 bg-brand-bg relative overflow-hidden snap-start">
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-16">
                    <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">
                        어워드 소개
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        대한민국을 빛낸 <br />
                        <span className="text-brand-gold-light">최고의 브랜드를 선정합니다</span>
                    </h3>
                    <div className="w-24 h-1 bg-brand-gold mb-12"></div>

                    <div className="max-w-3xl">
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                {currentAward.title}은 중앙일보가 후원하는 대한민국 대표 브랜드 어워드입니다.
                            </p>
                            <p>
                                {currentAward.description}
                            </p>
                            <p>
                                우수한 품질과 뛰어난 서비스를 통해 높은 브랜드 가치를 인정받은 기업을 대상으로 "{currentAward.title}"를 선정합니다. 이번 시상은 소비자들에게 그 가치를 인정받은 기업인이 선정되는 영예를 얻게 됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
