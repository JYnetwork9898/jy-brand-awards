import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Benefits: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const benefits = [
        {
            title: '브랜드 신뢰를 강화하는 공식 엠블럼 제공',
            subtitle: '기본 엠블럼 1종 + 바리에이션 엠블럼 8종 이미지',
            description: '대상 1위 수상 기업에게 브랜드의 가치를 증명할 수 있는 공식 엠블럼(로고 에셋)을 제공합니다. 온·오프라인 마케팅과 PR 활동 전반에 활용하여 브랜드의 신뢰도와 매출을 높일 수 있습니다.',
            image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2549&auto=format&fit=crop' // Trophy/Award related
        },
        {
            title: '브랜드 가치와 명예를 증명하는 공식 인증 패키지',
            subtitle: '수상 안내 팝업 디자인 + 인증서 + 상패 이미지',
            description: '대상 1위 수상 브랜드에 공식 상패, 인증서, 수상 팝업 이미지를 제공하여 온·오프라인 브랜딩 채널에서 일관된 브랜드 아이덴티티를 구축합니다.',
            image: 'https://images.unsplash.com/photo-1607004468138-e7e23ea26947?q=80&w=2535&auto=format&fit=crop' // Certificate/Document related
        },
        {
            title: '중앙일보 지면보도로 완성되는 브랜드 공신력',
            subtitle: '중앙일보 종합일간지 기획기사 게재',
            description: '대상 1위 수상 브랜드는 중앙일보 종합일간지에 기획기사로 게재되어 브랜드 평판을 상승시키고 미디어 PR 효과를 확보합니다.',
            image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop' // Newspaper related
        },
        {
            title: '언론 보도를 통한 지속적 온라인 노출 효과',
            subtitle: '주요 포털 노출 포함 온라인 뉴스기사 5회',
            description: '중앙일보 후원과 함께, 주요 포털 노출을 포함한 온라인 뉴스기사 5회 게재를 통해 브랜드 인지도와 평판을 극대화합니다.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop' // Online news/Tablet related
        },
        {
            title: '브랜드 스토리를 시각화하는 PR 인터뷰 콘텐츠 제작',
            subtitle: '브랜드 철학과 가치를 담은 인터뷰 영상',
            description: '2026 히트브랜드 대상 1위 수상 기업을 대상으로 브랜드 철학과 가치를 담은 인터뷰 영상을 제작하여 신뢰 중심의 브랜드 콘텐츠로 활용합니다.',
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2538&auto=format&fit=crop' // Camera/Interview related
        },
        {
            title: '검색과 콘텐츠로 확산되는 블로그 바이럴 마케팅',
            subtitle: '블로그 마케팅 10회 서비스',
            description: '소비자와의 접점을 확장하는 블로그 마케팅 10회 서비스로, 검색 노출과 바이럴 효과를 높입니다.',
            image: 'https://images.unsplash.com/photo-1499750310159-52f0f83ad713?q=80&w=2669&auto=format&fit=crop' // Blogging/Typing related
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    };

    return (
        <section id="benefits" className="bg-brand-bg py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">수상 혜택</h2>
                        <p className="text-brand-gold text-lg">KBMJ BRAND AWARDS만의 특별한 혜택을 확인하세요</p>
                    </motion.div>
                </div>

                <div className="relative bg-brand-bg-secondary rounded-2xl overflow-hidden border border-brand-gold/10 min-h-[600px] md:min-h-[500px] flex items-center">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-brand-gold hover:text-black transition-all"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-brand-gold hover:text-black transition-all"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full grid md:grid-cols-2"
                        >
                            {/* Image Side */}
                            <div className="relative h-64 md:h-full">
                                <img
                                    src={benefits[currentIndex].image}
                                    alt={benefits[currentIndex].title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-secondary/50 to-transparent md:bg-gradient-to-l md:from-brand-bg-secondary md:to-transparent"></div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-16 flex flex-col justify-center">
                                <div className="text-brand-gold text-lg font-bold mb-4">
                                    BENEFIT {String(currentIndex + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                    {benefits[currentIndex].title}
                                </h3>
                                <p className="text-brand-gold/80 font-medium mb-6">
                                    {benefits[currentIndex].subtitle}
                                </p>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {benefits[currentIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {benefits.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-brand-gold w-8' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
