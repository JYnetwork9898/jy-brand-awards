import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAward } from '../context/AwardContext';

const Benefits: React.FC = () => {
    const { currentAward } = useAward();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

    const benefits = [
        {
            title: <>브랜드 신뢰를 강화하는 <br /><span style={{ color: 'var(--color-brand-gold-light)' }}>공식 엠블럼 제공</span></>,
            desc: "대상 1위 수상 기업에게 브랜드의 가치를 증명할 수 있는 공식 엠블럼(로고 에셋)을 제공합니다. 온·오프라인 마케팅과 PR 활동 전반에 활용하여 브랜드의 신뢰도와 매출을 높일 수 있습니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop"
        },
        {
            title: <>브랜드 가치와 명예를 증명하는 <br /><span style={{ color: 'var(--color-brand-gold-light)' }}>공식 인증 패키지</span></>,
            desc: "대상 1위 수상 브랜드에 공식 상패, 인증서, 수상 팝업 이미지를 제공하여 온·오프라인 브랜딩 채널에서 일관된 브랜드 아이덴티티를 구축합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop"
        },
        {
            title: <><span style={{ color: 'var(--color-brand-gold-light)' }}>중앙일보 지면보도</span>로 <br />완성되는 브랜드 공신력</>,
            desc: "대상 1위 수상 브랜드는 중앙일보 종합일간지에 기획기사로 게재되어 브랜드 평판을 상승시키고 미디어 PR 효과를 확보합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop"
        },
        {
            title: <><span style={{ color: 'var(--color-brand-gold-light)' }}>언론 보도</span>를 통한 <br />지속적 온라인 노출 효과</>,
            desc: "중앙일보 후원과 함께, 주요 포털 노출을 포함한 온라인 뉴스기사 5회 게재를 통해 브랜드 인지도와 평판을 극대화합니다.",
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
        }
    ];

    return (
        <section id="benefits" ref={targetRef} className="relative h-[600vh] bg-brand-bg snap-start">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-0 left-0 z-20 p-8 md:p-16 pointer-events-none">
                    <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 inline-block border-b border-brand-gold pb-2">
                        Benefits
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        수상 기업 혜택
                    </h3>
                </div>

                <motion.div style={{ x }} className="flex gap-0">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.bgImage}
                                    alt={typeof item.title === 'string' ? item.title : 'Benefit'}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
                            </div>

                            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-left">
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
                                <div className="mt-12 text-sm text-gray-500 uppercase tracking-widest">
                                    Benefit {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
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
