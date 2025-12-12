import React, { useEffect, useRef, useState } from 'react';

interface StatItemProps {
    label: string;
    value: number;
    suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    // Intersection Observer를 사용하여 화면에 보일 때 카운팅 애니메이션 시작
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    // 애니메이션 시작 시점과 지속 시간 설정
                    let startTimestamp: number | null = null;
                    const duration = 2000; // 2초

                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        // Ease out quart 함수로 부드러운 감속 효과 적용
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                        setCount(Math.floor(easeOutQuart * value));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(value); // 애니메이션 종료 시 정확한 최종값 설정
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.2 } // 20% 이상 보일 때 작동
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={elementRef} className="text-center group p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 font-sans tracking-tight">
                {count.toLocaleString()}<span className="text-brand-gold text-3xl md:text-4xl align-top ml-1">{suffix}</span>
            </div>
            <div className="text-gray-300 text-base md:text-lg font-semibold">{label}</div>
        </div>
    );
};

const Statistics: React.FC = () => {
    // 표시할 통계 데이터 목록
    const stats = [
        { label: '역대 참가 기업 수', value: 1034, suffix: '+' },
        { label: '참여 인원', value: 2524, suffix: '+' },
        { label: '올해 참여 기업', value: 109, suffix: '+' },
        { label: '언론 보도 횟수', value: 2455, suffix: '+' },
    ];

    return (
        <section className="pt-12 pb-32 bg-brand-bg relative border-b border-white/5">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] pointer-events-none opacity-30"></div>

            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">
                        Achievement
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        숫자로 증명하는 권위
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
