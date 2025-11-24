import React from 'react';

const TopBar: React.FC = () => {
    const awards = [
        { title: '2026 히트브랜드 대상', color: 'bg-award-hit' },
        { title: '2026 고객감동 우수브랜드 대상', color: 'bg-award-customer' },
        { title: '2026 소비자만족 브랜드 대상', color: 'bg-award-consumer' },
        { title: '2026 올해의 우수브랜드 대상', color: 'bg-award-best' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {awards.map((award, index) => (
                <div key={index} className={`${award.color} py-3 px-2 text-center flex items-center justify-center`}>
                    <span className="text-white text-xs md:text-sm font-medium tracking-wider uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                        {award.title}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TopBar;
