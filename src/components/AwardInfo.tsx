import React from 'react';
import { useAward } from '../context/AwardContext';

const AwardInfo: React.FC = () => {
    const { currentAward } = useAward();

    // Dynamic dates based on award slug
    const getSchedule = (slug: string) => {
        switch (slug) {
            case 'hit': return '2025. 10. 01 ~ 2025. 11. 30';
            case 'customer': return '2026. 01. 01 ~ 2026. 02. 28';
            case 'consumer': return '2026. 04. 01 ~ 2026. 05. 31';
            case 'year': return '2026. 07. 01 ~ 2026. 08. 31';
            default: return '2025. 10. 01 ~ 2025. 11. 30';
        }
    };

    const infoItems = [
        { label: '행사명', value: currentAward.title },
        { label: '주최 / 후원', value: 'JYnetwork / 중앙일보' },
        {
            label: '일정', value: (
                <div className="space-y-2">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-500">신청접수</span>
                        <span className="text-white">{getSchedule(currentAward.slug)}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-500">심사기간</span>
                        <span className="text-white">접수 마감 후 개별 심사</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">결과발표</span>
                        <span className="text-white">심사 종료 후 개별 통보</span>
                    </div>
                </div>
            )
        },
        {
            label: '장소', value: (
                <div>
                    <p className="text-white font-medium">스탠포드호텔 서울 2F 그랜드볼룸</p>
                    <p className="text-sm text-gray-500 mt-1">서울특별시 마포구 월드컵북로 58길 15</p>
                </div>
            )
        },
        { label: '발표 및 게재', value: '별도 공지' },
        { label: '인증서 전달', value: '지면 게재 후 5일 이내' },
        { label: '참여 대상', value: '일반기업체, 공기업, 지방자치단체' },
    ];

    return (
        <section className="py-32 bg-brand-bg-secondary snap-start">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-brand-gold"></span>
                            Information
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            행사 개요
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            성공적인 브랜드의 가치를 증명하는<br />
                            최고의 비즈니스 파트너가 되겠습니다.
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <div className="grid gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
                            {infoItems.map((item, index) => (
                                <div key={index} className="grid md:grid-cols-12 bg-brand-bg p-6 md:p-8 gap-4 hover:bg-white/5 transition-colors">
                                    <div className="md:col-span-4 text-brand-gold font-bold text-sm uppercase tracking-wider">
                                        {item.label}
                                    </div>
                                    <div className="md:col-span-8 text-gray-300">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardInfo;
