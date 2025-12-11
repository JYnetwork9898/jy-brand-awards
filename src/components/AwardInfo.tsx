import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR, PREV_YEAR } from '../constants/common';

const AwardInfo: React.FC = () => {
    const { currentAward } = useAward();

    // Dynamic dates based on award slug
    // 어워드 슬러그(slug)에 따라 일정 텍스트를 반환하는 헬퍼 함수
    const getSchedule = (slug: string) => {
        switch (slug) {
            case 'hit': return `${PREV_YEAR}. 10. 01 ~ ${PREV_YEAR}. 11. 30`; // 히트브랜드대상
            case 'customer': return `${CURRENT_YEAR}. 01. 01 ~ ${CURRENT_YEAR}. 02. 28`; // 고객만족브랜드대상
            case 'consumer': return `${CURRENT_YEAR}. 04. 01 ~ ${CURRENT_YEAR}. 05. 31`; // 소비자만족브랜드대상
            case 'year': return `${CURRENT_YEAR}. 07. 01 ~ ${CURRENT_YEAR}. 08. 31`; // 올해의우수브랜드대상
            default: return `${PREV_YEAR}. 10. 01 ~ ${PREV_YEAR}. 11. 30`;
        }
    };

    // 화면에 표시할 정보 항목 리스트 (라벨, 값)
    const infoItems = [
        { label: '어워즈명', value: `${CURRENT_YEAR} ${currentAward.title}` },
        { label: '주최 / 후원', value: `JYnetwork / ${currentAward.sponsor} · 기업경영저널` },
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
            <div className="max-w-screen-2xl mx-auto container-padding">
                <div className="grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-brand-gold"></span>
                            Information
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                            시상식 안내
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            성공적인 브랜드의 가치를 증명하는<br />
                            최고의 비즈니스 파트너가 되겠습니다.
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        {/* 정보 그리드 레이아웃 */}
                        <div className="grid gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
                            {infoItems.map((item, index) => (
                                <div key={index} className="grid md:grid-cols-12 bg-brand-bg p-6 md:p-8 gap-4 hover:bg-white/5 transition-colors">
                                    <div className="md:col-span-4 text-brand-gold font-semibold text-base uppercase tracking-wider">
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
