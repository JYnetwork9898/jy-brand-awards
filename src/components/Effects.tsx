import React from 'react';
import { motion } from 'framer-motion';

const Effects: React.FC = () => {
    const effects = [
        {
            title: '신뢰도 상승',
            description: '중앙일보 후원 공식 인증으로 기업 신뢰가 높아지고, 고객과 거래처에 ‘믿을 수 있는 브랜드’로 각인됩니다.',
            icon: '🤝'
        },
        {
            title: '영업 경쟁력 강화',
            description: '수상 이력을 제안서·홈페이지 등에 활용할 수 있어 B2B 제안이나 입찰에서 신뢰도가 향상됩니다.',
            icon: '💼'
        },
        {
            title: '홍보 효과 극대화',
            description: '기사, 블로그, 인터뷰 등 다양한 채널에서 브랜드가 확산되며 검색 노출이 지속됩니다.',
            icon: '📢'
        },
        {
            title: '인지도 확장',
            description: '언론 및 온라인 동시 노출로 추가 광고 없이도 홍보 효과가 오래 지속됩니다.',
            icon: '🌍'
        },
        {
            title: '고객 신뢰 확보',
            description: '‘중앙일보 후원 브랜드 대상 수상’ 문구 자체가 구매를 이끄는 신뢰 포인트가 됩니다.',
            icon: '🛡️'
        },
        {
            title: '기업 이미지 및 대표 위상 강화',
            description: '수상은 기업의 격을 높이고 대표의 리더십과 기업 성장 가능성을 보여줍니다.',
            icon: '👑'
        }
    ];

    return (
        <section id="effects" className="bg-brand-bg-secondary py-32 relative overflow-hidden snap-start">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-secondary via-transparent to-brand-bg-secondary"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">수상 효과</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        KBMJ BRAND AWARDS 수상은 단순한 명예를 넘어<br className="hidden md:block" />
                        기업의 실질적인 성장과 가치를 증명합니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {effects.map((effect, index) => (
                        <motion.div
                            key={index}
                            className="bg-brand-bg p-8 rounded-xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all group hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl mb-6 bg-brand-bg-secondary w-16 h-16 flex items-center justify-center rounded-full border border-brand-gold/20 group-hover:scale-110 transition-transform text-brand-gold">
                                {effect.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {effect.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {effect.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Effects;
