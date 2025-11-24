import React from 'react';
import { motion } from 'framer-motion';

const PastWinners: React.FC = () => {
    // Placeholder data for past winners
    const winners = [
        "Samsung Electronics", "Hyundai Motor", "SK Telecom", "LG Electronics",
        "POSCO", "Kia", "Hanwha", "Lotte Chemical",
        "CJ CheilJedang", "Naver", "Kakao", "Shinhan Financial"
    ];


    return (
        <section id="past-winners" className="bg-black py-32 border-t border-brand-gold/10 snap-start">
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-16 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">역대 수상 브랜드</h2>
                        <p className="text-gray-400">대한민국을 빛낸 자랑스러운 브랜드들을 소개합니다.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {winners.map((winner, index) => (
                        <motion.div
                            key={index}
                            className="bg-brand-bg border border-brand-gold/10 p-6 rounded-lg flex items-center justify-center aspect-video hover:border-brand-gold/50 transition-colors group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gray-500 font-semibold group-hover:text-white transition-colors text-center text-sm">
                                {winner}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-left">
                    <p className="text-gray-500 text-sm">
                        * 위 브랜드는 예시이며, 실제 수상 기업과는 다를 수 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PastWinners;
