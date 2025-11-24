import React from 'react';

const Mission: React.FC = () => {
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

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                히트브랜드 대상, 고객감동 우수브랜드 대상, 소비자만족 브랜드 대상, 올해의 우수브랜드 대상이 운영되고 있으며, 중앙일보가 후원하는 대한민국을 빛낸 히트브랜드의 탄생을 소개합니다.
                            </p>
                            <p>
                                우수한 품질과 뛰어난 서비스를 통해 높은 브랜드 가치를 인정받은 기업을 대상으로 “2026 KBMJ BRAND AWARDS”를 선정합니다. 이번 시상은 소비자들에게 그 가치를 인정받은 기업인이 선정되는 영예를 얻게 됩니다.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-gold/10 transform rotate-3 rounded-lg"></div>
                            <div className="relative bg-brand-bg border border-brand-gold/20 p-8 rounded-lg shadow-2xl">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-gold mr-4 text-xl">✦</span>
                                        <span className="text-white font-medium">히트브랜드 대상</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-gold mr-4 text-xl">✦</span>
                                        <span className="text-white font-medium">고객감동 우수브랜드 대상</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-gold mr-4 text-xl">✦</span>
                                        <span className="text-white font-medium">소비자만족 브랜드 대상</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-gold mr-4 text-xl">✦</span>
                                        <span className="text-white font-medium">올해의 우수브랜드 대상</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
