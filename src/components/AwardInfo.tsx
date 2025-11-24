import React from 'react';
import { useAward } from '../context/AwardContext';

const AwardInfo: React.FC = () => {
    const { currentAward } = useAward();

    const infoItems = [
        { label: '행사명', value: currentAward.title },
        { label: '주최 및 후원', value: 'JYnetwork / 중앙일보' },
        {
            label: '일정', value: (
                <div className="space-y-1">
                    <p><span className="text-gray-500 mr-2">신청접수:</span> 2025. 10. 01 ~ 2025. 11. 30</p>
                    <p><span className="text-gray-500 mr-2">심사기간:</span> 개별심사</p>
                    <p><span className="text-gray-500 mr-2">결과발표:</span> 개별심사 종료 후 개별통보</p>
                </div>
            )
        },
        {
            label: '장소', value: (
                <div>
                    <p>스탠포드호텔 2F 그랜드볼룸</p>
                    <p className="text-sm text-gray-500">서울특별시 마포구 월드컵북로 58길 15</p>
                </div>
            )
        },
        { label: '발표 및 지면게재', value: '2025. 12. 24' },
        { label: '인증서 전달', value: '지면 게재 후 5일 이내 전달' },
        { label: '참여 대상', value: '일반기업체, 공기업, 지방자치단체' },
    ];

    return (
        <section className="py-24 bg-brand-bg-secondary snap-start">
            <div className="max-w-4xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-4">
                    행사 개요
                </h2>
                <div className="grid gap-y-8">
                    {infoItems.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-4 gap-4 border-b border-gray-800 pb-8 last:border-0">
                            <div className="text-brand-gold font-bold text-lg md:col-span-1">
                                {item.label}
                            </div>
                            <div className="text-gray-300 md:col-span-3">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardInfo;
