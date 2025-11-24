import React from 'react';
import { useAward } from '../context/AwardContext';

const Press: React.FC = () => {
    const { currentAward } = useAward();

    const articles = [
        {
            source: '중앙일보',
            title: `2025 ${currentAward.title} 성료... 45개 기업 수상`,
            date: '2025.12.20',
            excerpt: `국내 최고의 브랜드 축제인 ${currentAward.title}가 지난 18일 성황리에 막을 내렸다. 이번 시상식에서는...`,
            link: '#'
        },
        {
            source: '동아일보',
            title: `소비자가 뽑은 올해의 브랜드, ${currentAward.title}에서 발표`,
            date: '2025.09.15',
            excerpt: `소비자 만족도 조사를 기반으로 선정된 올해의 우수 브랜드들이 ${currentAward.title}를 통해 공개되었다.`,
            link: '#'
        },
        {
            source: '기업경영저널',
            title: `${currentAward.title} 수상 기업, 전년 대비 매출 150% 성장`,
            date: '2025.06.10',
            excerpt: '브랜드 어워즈 수상 효과가 실질적인 매출 증대로 이어지고 있다는 분석이 나왔다.',
            link: '#'
        },
        {
            source: '중앙일보',
            title: `2026 ${currentAward.title}, 참가 기업 모집 시작`,
            date: '2026.01.02',
            excerpt: '내년도 히트브랜드를 발굴하기 위한 여정이 시작된다. KBMJ는 2일부터 참가 접수를 시작한다고 밝혔다.',
            link: '#'
        }
    ];

    return (
        <section id="press" className="bg-brand-bg-secondary py-32 border-t border-brand-gold/10 snap-start">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        KBMJ IN THE NEWS
                    </h2>
                    <p className="text-gray-400 text-lg">
                        언론이 주목하는 {currentAward.title}의 소식을 전해드립니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.link}
                            className="block bg-brand-bg p-8 rounded-xl border border-brand-gold/10 hover:border-brand-gold/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-brand-gold font-bold text-sm tracking-wider uppercase border border-brand-gold/30 px-3 py-1 rounded-full">
                                    {article.source}
                                </span>
                                <span className="text-gray-500 text-sm">{article.date}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors leading-snug">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 line-clamp-2">
                                {article.excerpt}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Press;
