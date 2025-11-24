import React from 'react';
import { useAward } from '../context/AwardContext';

const Benefits: React.FC = () => {
    const { currentAward } = useAward();

    const benefits = [
        {
            title: "공식 엠블럼 제공",
            desc: "온/오프라인 마케팅에 활용 가능한 공식 엠블럼 파일을 제공합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop"
        },
        {
            title: "인증서 및 상패 수여",
            desc: "브랜드의 가치를 증명하는 고급 상패와 공식 인증서를 수여합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop"
        },
        {
            title: "언론 보도 지원",
            desc: "중앙일보 등 주요 언론사를 통해 수상 소식을 기사화하여 보도합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop"
        },
        {
            title: "온라인 홍보",
            desc: "포털 사이트 뉴스 송출 및 블로그, SNS 등 다양한 온라인 채널에 홍보합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop"
        },
        {
            title: "브랜드 인터뷰",
            desc: "수상 기업 대표자 인터뷰를 진행하여 브랜드의 철학과 비전을 알립니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
        },
        {
            title: "마케팅 지원",
            desc: "수상 기업을 위한 맞춤형 마케팅 컨설팅과 다양한 지원 혜택을 제공합니다.",
            icon: "✦",
            bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-brand-bg relative">
            <div className="py-32 px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 inline-block border-b border-brand-gold pb-2">
                    Benefits
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    수상 기업 혜택
                </h3>
            </div>

            {benefits.map((item, index) => (
                <div key={index} className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start sticky top-0">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={item.bgImage}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/50"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto px-8 w-full text-center">
                        <div className="text-brand-gold text-4xl md:text-6xl mb-8 animate-bounce">
                            {item.icon}
                        </div>
                        <h4 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                            {item.title}
                        </h4>
                        <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
                        <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                            {item.desc}
                        </p>
                        <div className="mt-12 text-sm text-gray-500 uppercase tracking-widest">
                            Benefit {String(index + 1).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Benefits;
