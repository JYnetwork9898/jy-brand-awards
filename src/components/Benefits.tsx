import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAward } from '../context/AwardContext';
import thbaAmblem from '../assets/THBA_amblem.png';
import thbaCertification from '../assets/THBA_certification.png';
import thbaNewspaper from '../assets/THBA_newspaper.png';

const Benefits: React.FC = () => {
    const { currentAward } = useAward();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-600vw"]);

    const benefits = [
        {
            title: <>브랜드 신뢰를 강화하는 <br /><span style={{ color: 'var(--color-brand-gold-light)' }}>공식 엠블럼 제공</span></>,
            desc: "대상 1위 수상 기업에게 브랜드의 가치를 증명할 수 있는 공식 엠블럼(로고 에셋)을 제공합니다. 온·오프라인 마케팅과 PR 활동 전반에 활용하여 브랜드의 신뢰도와 매출을 높일 수 있습니다.",
            icon: "✦",
            bgImage: thbaAmblem
        },
        {
            title: <>브랜드 가치와 명예를 증명하는 <br /><span style={{ color: 'var(--color-brand-gold-light)' }}>공식 인증 패키지</span></>,
            desc: "대상 1위 수상 브랜드에 공식 상패, 인증서, 수상 팝업 이미지를 제공하여 온·오프라인 브랜딩 채널에서 일관된 브랜드 아이덴티티를 구축합니다.",
            icon: "✦",
            bgImage: thbaCertification
        },
        {
            title: <><span style={{ color: 'var(--color-brand-gold-light)' }}>{currentAward.sponsor} 지면보도</span>로 <br />완성되는 브랜드 공신력</>,
            desc: `대상 1위 수상 브랜드는 ${currentAward.sponsor} 종합일간지에 기획기사로 게재되어 브랜드 평판을 상승시키고 미디어 PR 효과를 확보합니다.`,
            icon: "✦",
            bgImage: thbaNewspaper
        },
        {
            title: <><span style={{ color: 'var(--color-brand-gold-light)' }}>언론 보도</span>를 통한 <br />지속적 온라인 노출 효과</>,
            desc: `${currentAward.sponsor} 후원과 함께, 주요 포털 노출을 포함한 온라인 뉴스기사 5회 게재를 통해 브랜드 인지도와 평판을 극대화합니다.`,
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop"
        },
        {
            title: <>브랜드 스토리를 시각화하는 <br /><span style={{ color: 'var(--color-brand-gold-light)' }}>PR 인터뷰</span> 콘텐츠 제작</>,
            desc: `수상 기업을 대상으로 브랜드 철학과 가치를 담은 인터뷰 영상을 제작하여 신뢰 중심의 브랜드 콘텐츠로 활용합니다.`,
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
        },
        {
            title: <>검색과 콘텐츠로 확산되는 <br /><span style={{ color: 'var(--color-brand-gold-light)' }}>블로그 바이럴 마케팅</span></>,
            desc: "소비자와의 접점을 확장하는 블로그 마케팅 10회 서비스로, 검색 노출과 바이럴 효과를 높입니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
        },
        {
            title: <><span style={{ color: 'var(--color-brand-gold-light)' }}>프리미엄 시상식 개최</span>로 <br />브랜드 가치의 공식적 자리매김</>,
            desc: "대상 1위 수상 브랜드는 정식 시상식에 초청되어 기업 대표 및 관계자가 직접 무대에서 수상합니다. 오프라인 행사 참여를 통해 브랜드의 위상을 높이고, 현장 스피치·포토월·인터뷰 등 다양한 순간들이 브랜드 스토리의 신뢰도와 화제성을 한층 강화합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2940&auto=format&fit=crop"
        }
    ];

    return (
        <section id="benefits" ref={targetRef} className="relative h-[700vh] bg-brand-bg snap-start">
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute top-0 left-0 right-0 z-30 py-8 pointer-events-none">
                    <div className="max-w-screen-2xl mx-auto container-padding">
                        <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 inline-block border-b border-brand-gold pb-2">
                            Benefits
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            수상 기업 혜택
                        </h3>
                    </div>
                </div>

                {/* Sliding Backgrounds */}
                <motion.div style={{ x }} className="flex gap-0 h-full">
                    {benefits.map((item, index) => (
                        <div
                            key={`bg-${index}`}
                            className="relative h-screen w-screen flex-shrink-0 overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.bgImage}
                                    alt={typeof item.title === 'string' ? item.title : 'Benefit'}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-xs"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Fixed Content Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {benefits.map((item, index) => {
                        const step = 1 / (benefits.length - 1);
                        const peak = index * step;

                        const opacity = useTransform(
                            scrollYProgress,
                            [peak - step, peak, peak + step],
                            [0, 1, 0]
                        );

                        const handleClick = (targetIndex: number) => {
                            if (targetRef.current) {
                                const sectionTop = targetRef.current.offsetTop;
                                const sectionHeight = targetRef.current.offsetHeight;
                                const targetScroll = sectionTop + (sectionHeight / benefits.length) * targetIndex;

                                window.scrollTo({
                                    top: targetScroll,
                                    behavior: 'smooth'
                                });
                            }
                        };

                        return (
                            <motion.div
                                key={`content-${index}`}
                                style={{ opacity }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="max-w-screen-2xl mx-auto container-padding w-full text-left">
                                    <div className="text-brand-gold text-4xl md:text-6xl mb-8 inline-block">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight max-w-4xl">
                                        {item.title}
                                    </h4>
                                    <div className="w-24 h-1 bg-brand-gold mb-12"></div>
                                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-3xl">
                                        {item.desc}
                                    </p>

                                    <div className="flex gap-2 mt-12 pointer-events-auto">
                                        {benefits.map((_, i) => {
                                            const isDotActive = i === index;
                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() => handleClick(i)}
                                                    className="relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
                                                    style={{
                                                        border: '2px solid rgba(255, 255, 255, 0.3)',
                                                        borderColor: isDotActive ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.1)'
                                                    }}
                                                >
                                                    <div
                                                        className="absolute inset-0 bg-brand-gold rounded-full transition-opacity duration-300"
                                                        style={{ opacity: isDotActive ? 1 : 0 }}
                                                    />
                                                    <span
                                                        className="relative z-10 transition-colors duration-300"
                                                        style={{ color: isDotActive ? 'rgba(220,220,220,1)' : 'rgba(255,255,255,0.6)' }}
                                                    >
                                                        {i + 1}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Internal snap points */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {benefits.map((_, index) => (
                    <div key={index} className="h-screen w-full snap-start"></div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
