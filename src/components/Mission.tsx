import React from 'react';
import { useAward } from '../context/AwardContext';

const Mission: React.FC = () => {
    // 현재 어워드 컨텍스트 가져오기 (타이틀, 후원사 등)
    const { currentAward } = useAward();

    return (
        <section id="mission" className="py-32 bg-brand-bg relative overflow-hidden snap-start">
            {/* 배경 장식 요소: 우측 상단 흐릿한 원형 그라데이션 */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                <div className="grid md:grid-cols-12 gap-16 items-start">
                    <div className="md:col-span-4">
                        {/* 섹션 소제목: Mission */}
                        <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-brand-gold"></span>
                            Mission
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                            대한민국을 빛낸<br />
                            <span className="text-gray-500">최고의 브랜드</span>
                        </h3>
                        <div className="w-20 h-1 bg-brand-gold"></div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
                            <p className="text-2xl text-white font-medium leading-relaxed">
                                {currentAward.title}은 {currentAward.sponsor}가 후원하는<br />
                                대한민국 대표 브랜드 어워드입니다.
                            </p>
                            <div className="grid gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-xl">시상 취지</h4>
                                    <p>
                                        {currentAward.description}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-4 text-xl">시상 기준</h4>
                                    <p>
                                        {/* 시상 기준 설명 */}
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
