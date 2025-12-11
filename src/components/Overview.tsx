import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';
import thbaBg from '../assets/THBA/THBA_main.png';
import csebBg from '../assets/CSEB/CSEB_main.png';
import csbaBg from '../assets/CSBA/CSBA_main.png';
import tebaBg from '../assets/TEBA/TEBA_main.png';

// 각 어워드 타입에 맞는 배경 이미지를 매핑하는 객체
const bgImages: Record<string, string> = {
    hit: thbaBg,      // 히트브랜드대상
    customer: csebBg, // 고객만족브랜드대상
    consumer: csbaBg, // 소비자만족브랜드대상
    year: tebaBg      // 올해의우수브랜드대상
};

const Overview: React.FC = () => {
    // 현재 선택된 어워드 정보를 가져오는 커스텀 훅
    const { currentAward } = useAward();
    // 현재 어워드 슬러그에 해당하는 배경 이미지 선택
    const bgImage = bgImages[currentAward.slug];

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
            {/* 배경 영역: 어워드 색상 및 이미지 적용 */}
            <div className="absolute inset-0 bg-brand-bg">
                {bgImage ? (
                    // 배경 이미지가 있을 경우 표시
                    <>
                        <img
                            src={bgImage}
                            alt={`${currentAward.title} Background`}
                            className="w-full h-full object-cover opacity-70"
                        />
                        {/* 이미지 위에 그라데이션 오버레이 적용 */}
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
                        {/* 2024 Brand Awards 뱃지 (주석 처리됨) */}
                        {/* <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                            <span className="text-sm font-medium tracking-widest uppercase text-gray-300">{CURRENT_YEAR} Brand Awards</span>
                        </div> */}

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
                            <div className="mb-8">
                                {/* 어워드 약칭 (예: KCBA) */}
                                <span className="block text-brand-gold text-8xl md:text-9xl font-black mb-6 leading-none">{currentAward.abbreviation}</span>
                            </div>
                            <div>
                                {/* 후원사 및 어워드 타이틀 */}
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

            {/* 스크롤 유도 인디케이터 */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
            </div>
        </section>
    );
};

export default Overview;
