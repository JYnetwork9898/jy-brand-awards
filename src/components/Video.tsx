import React, { useEffect, useRef } from 'react';
import { useAward } from '../context/AwardContext';

const Video: React.FC = () => {
    const { currentAward } = useAward();
    const sliderRef = useRef<HTMLDivElement>(null);

    // 어워드별 역대 시상식 영상 데이터 설정
    // CSBA: 소비자만족브랜드대상 / TEBA: 올해의우수브랜드대상 (기본값: CSBA)
    const videosByAward: Record<string, Array<{ videoId: string; url: string; title: string; year: number }>> = {
        'THBA': [
            { videoId: 'RXdcyXo1EMY', url: 'https://www.youtube.com/watch?v=RXdcyXo1EMY', title: '2026 히트브랜드대상 시상식 스케치 영상', year: 2026 },
            { videoId: 'DE3NPoGEq6o', url: 'https://youtu.be/DE3NPoGEq6o', title: '2025 히트브랜드대상 시상식 스케치 영상', year: 2025 },
            { videoId: '5PlScWKKeRg', url: 'https://youtu.be/5PlScWKKeRg', title: '2024 히트브랜드 스케치', year: 2024 },
            { videoId: '_rs8Aja2uXE', url: 'https://youtu.be/_rs8Aja2uXE', title: '2023 히트브랜드대상 시상식 현장', year: 2023 },
            { videoId: 'OjdIrgnMxwo', url: 'https://youtu.be/OjdIrgnMxwo', title: '2022 히트브랜드 및 코로나를 이겨낸 대한민국 강소기업 시상식', year: 2022 },
            { videoId: 'SMc2i7hsgmk', url: 'https://youtu.be/SMc2i7hsgmk', title: '2021 히트브랜드 시상식', year: 2021 },
            { videoId: '-eeQ5e3gfeY', url: 'https://youtu.be/-eeQ5e3gfeY', title: '2020 히트브랜드 대상 시상식', year: 2020 },
            { videoId: '-DzVcm70JVQ', url: 'https://youtu.be/-DzVcm70JVQ', title: '2019 히트브랜드대상 시상식 현장', year: 2019 },
            { videoId: '3a3V1qkm90k', url: 'https://youtu.be/3a3V1qkm90k', title: '2018 히트브랜드대상 시상식 개최', year: 2018 }
        ], 'CSEB': [
            { videoId: '8AaRmWH5cAI', url: 'https://www.youtube.com/watch?v=8AaRmWH5cAI', title: '2026 고객감동우수브랜드 시상식 스케치', year: 2026 },
            { videoId: 'Pa7nen0crnk', url: 'https://youtu.be/Pa7nen0crnk', title: '2025 고객감동우수브랜드 대상 시상식 스케치 영상', year: 2025 },
            { videoId: 'pdqEoNp928E', url: 'https://youtu.be/pdqEoNp928E', title: '2024 고객감동우수브랜드 시상식 스케치영상', year: 2024 },
            { videoId: 'Tz_MGKEqvGI', url: 'https://youtu.be/Tz_MGKEqvGI', title: '2023 고객감동우수브랜드 시상식 스케치', year: 2023 },
            { videoId: '47xZEklBgRY', url: 'https://youtu.be/47xZEklBgRY', title: '2022 고객감동우수브랜드 시상식', year: 2022 },
            { videoId: 'voR0FNkO_lg', url: 'https://youtu.be/voR0FNkO_lg', title: '2021 고객감동우수브랜드 시상식', year: 2021 },
            { videoId: 'dUF49q5OQW4', url: 'https://youtu.be/dUF49q5OQW4', title: '2020 중앙일보 우수브랜드 시상식', year: 2020 },
            { videoId: 'SEcBn-d1yTo', url: 'https://youtu.be/SEcBn-d1yTo', title: '2019 고객감동 우수브랜드 대상 시상식 개최', year: 2019 },
            { videoId: 'w22zTrsFVjI', url: 'https://youtu.be/w22zTrsFVjI', title: '2018 고객감동 우수브랜드 대상 시상식 개최', year: 2018 }
        ], 'CSBA': [
            { videoId: 'RscmBbyMOWw', url: 'https://youtu.be/RscmBbyMOWw', title: '2025 소비자 만족 브랜드 대상 1위 시상식', year: 2025 },
            { videoId: 'ERuHF5xznrE', url: 'https://youtu.be/ERuHF5xznrE', title: '2024 소비자만족브랜드대상 시상식', year: 2024 },
            { videoId: 'Ot-9nNCmojI', url: 'https://youtu.be/Ot-9nNCmojI', title: '2023 소비자만족브랜드대상 시상식 스케치영상', year: 2023 },
            { videoId: '_hx3Xn_tF-I', url: 'https://youtu.be/_hx3Xn_tF-I', title: '2022 소비자만족브랜드대상 시상식 스케치영상', year: 2022 },
            { videoId: 'amkDkrifyi4', url: 'https://youtu.be/amkDkrifyi4', title: '2021 소비자만족브랜드대상 시상식 스케치영상', year: 2021 },
            { videoId: 'yohniHDzSl0', url: 'https://youtu.be/yohniHDzSl0', title: '2020 중앙일보 우수브랜드 시상식', year: 2020 },
            { videoId: 'PmQ8-__wYfU', url: 'https://youtu.be/PmQ8-__wYfU', title: '2019 소비자만족브랜드대상 시상식 현장', year: 2019 },
            { videoId: '6DNRRYzqIBE', url: 'https://youtu.be/6DNRRYzqIBE', title: '2018 소비자만족브랜드대상 시상식 현장', year: 2018 }
        ],
        'TEBA': [
            { videoId: 'gFTyxCWErUo', url: 'https://youtu.be/gFTyxCWErUo', title: '2025 올해의 우수 브랜드 시상식 스케치', year: 2025 },
            { videoId: 'BTIGpfUC3qg', url: 'https://youtu.be/BTIGpfUC3qg', title: '2024 올해의 우수 브랜드 시상식 스케치', year: 2024 },
            { videoId: '3grgULaajTk', url: 'https://youtu.be/3grgULaajTk', title: '2023 올해의 우수 브랜드 시상식 스케치', year: 2023 },
            { videoId: 'FySvVfAs0sA', url: 'https://youtu.be/FySvVfAs0sA', title: '2022 올해의우수브랜드 시상식 스케치', year: 2022 },
            { videoId: 'fYAuiWe2u8Y', url: 'https://youtu.be/fYAuiWe2u8Y', title: '2021 올해의우수브랜드 시상식', year: 2021 },
            { videoId: '3v4z1l2KEvk', url: 'https://youtu.be/3v4z1l2KEvk', title: '2020 중앙일보 우수브랜드 시상식', year: 2020 },
            { videoId: 'A76jVAt_aTY', url: 'https://youtu.be/A76jVAt_aTY', title: '2019 올해의 우수브랜드 대상 1위 시상식 개최', year: 2019 },
            { videoId: 'sL-wSu0c_TE', url: 'https://youtu.be/sL-wSu0c_TE', title: '2018 올해의 우수브랜드 대상 시상식 현장', year: 2018 }
        ]
    };

    // 현재 어워드에 맞는 영상 리스트를 가져오거나, 없으면 기본값 사용
    const videos = videosByAward[currentAward.slug] || videosByAward['CSBA'];

    useEffect(() => {
        sliderRef.current?.scrollTo({ left: 0, behavior: 'auto' });
    }, [currentAward.slug]);

    const scrollSlider = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return;

        const scrollAmount = sliderRef.current.clientWidth * 0.85;
        sliderRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section id="video" className="py-32 bg-brand-bg border-t border-brand-gold/10 snap-start">
            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            역대 {currentAward.title}
                        </h2>
                        <p className="text-gray-400 text-lg">
                            대한민국을 빛낸 브랜드들의 영광스러운 순간을 확인하세요.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 self-start lg:self-auto">
                        <button
                            type="button"
                            onClick={() => scrollSlider('left')}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-black text-brand-gold transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-black"
                            aria-label="이전 영상 보기"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M14.5 6.5L9 12l5.5 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollSlider('right')}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-black text-brand-gold transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-black"
                            aria-label="다음 영상 보기"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M9.5 6.5L15 12l-5.5 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pr-4"
                >
                    {videos.map((video) => (
                        <a
                            key={video.videoId}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block min-w-[18rem] shrink-0 snap-start sm:min-w-[22rem] lg:min-w-[26rem]"
                        >
                            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-brand-gold/20 group-hover:border-brand-gold transition-all mb-4">
                                {/* YouTube 썸네일 이미지 (고화질) */}
                                <img
                                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                    <div className="w-16 h-16 bg-brand-gold/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-brand-gold/20">
                                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 rounded text-xs text-white font-medium">
                                    {video.year}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {video.year}년도 시상식 현장
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Video;
