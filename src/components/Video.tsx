import React from 'react';
import { useAward } from '../context/AwardContext';

const Video: React.FC = () => {
    const { currentAward } = useAward();

    // 어워드별 역대 시상식 영상 데이터 설정
    // consumer: 소비자만족브랜드대상 / year: 올해의우수브랜드대상 (기본값: consumer)
    const videosByAward: Record<string, Array<{ videoId: string; url: string; title: string; year: number }>> = {
        'consumer': [
            { videoId: 'RscmBbyMOWw', url: 'https://youtu.be/RscmBbyMOWw', title: '2025 소비자 만족 브랜드 대상 1위 시상식', year: 2025 },
            { videoId: 'ERuHF5xznrE', url: 'https://youtu.be/ERuHF5xznrE', title: '2024 소비자만족브랜드대상 시상식', year: 2024 },
            { videoId: 'Ot-9nNCmojI', url: 'https://youtu.be/Ot-9nNCmojI', title: '2023 소비자만족브랜드대상 시상식 스케치영상', year: 2023 }
        ],
        'year': [
            { videoId: 'BTIGpfUC3qg', url: 'https://youtu.be/BTIGpfUC3qg', title: '2024 올해의 우수 브랜드 시상식 스케치', year: 2024 },
            { videoId: '3grgULaajTk', url: 'https://youtu.be/3grgULaajTk', title: '2023 올해의 우수 브랜드 시상식 스케치', year: 2023 },
            { videoId: 'FySvVfAs0sA', url: 'https://youtu.be/FySvVfAs0sA', title: '2022 올해의우수브랜드 시상식 스케치', year: 2022 }
        ]
    };

    // 현재 어워드에 맞는 영상 리스트를 가져오거나, 없으면 기본값 사용
    const videos = videosByAward[currentAward.slug] || videosByAward['consumer'];

    return (
        <section id="video" className="py-32 bg-brand-bg border-t border-brand-gold/10 snap-start">
            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        역대 {currentAward.title}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        대한민국을 빛낸 브랜드들의 영광스러운 순간을 확인하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <a
                            key={video.videoId}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer block"
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
