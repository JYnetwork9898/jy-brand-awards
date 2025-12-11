import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const PastWinners: React.FC = () => {
    // 역대 수상 기업 리스트 데이터 (임시 데이터)
    // 추후 API 연동 또는 별도 데이터 파일로 분리 가능
    const winners = [
        "아모레퍼시픽",
        "AHC",
        "보람상조",
        "코오롱제약",
        "(주)바디프랜드",
        "스피킹맥스",
        "바이엘코리아",
        "메가스터디",
        "모나리자",
        "(주)딘토엔터즈",
        "골프존",
        "(주)KG패션",
        "(주)제일리버",
        "(주)에네스티",
        "(주)아이잉글리쉬",
        "KACNET/라이아데미설렘성",
        "신안농협협동조합",
        "톡스앤필",
        "(주)마이홀릭",
        "아라온스쿨",
        "서울게임아카데미",
        "(주)비엔테크/린클",
        "키즈아트",
        "두드림"
    ];


    return (
        <section id="past-winners" className="bg-black py-32 border-t border-brand-gold/10 snap-start">
            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                {/* 섹션 타이틀 애니메이션 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <SectionTitle subtitle="대한민국을 빛낸 자랑스러운 브랜드들을 소개합니다." className="mb-16">
                        역대 수상 브랜드
                    </SectionTitle>
                </motion.div>

                {/* 수상 기업 리스트 그리드 */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {winners.map((winner, index) => (
                        <motion.div
                            key={index}
                            className="bg-brand-bg border border-brand-gold/10 p-6 rounded-lg flex items-center justify-center aspect-video hover:border-brand-gold/50 transition-colors group"
                            // 순차적인 등장 애니메이션 효과 (stagger effect)
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
                        * 위 브랜드 외에도 더 많은 기업들이 함께하고 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PastWinners;
