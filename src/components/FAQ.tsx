import React, { useState } from 'react';
import { CURRENT_YEAR } from '../constants/common';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-brand-gray">
            <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className={`text-brand-gold transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-gray-400">{answer}</p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: '참가 자격 조건은 무엇인가요?',
            answer: '국내에서 활동 중인 모든 기업 및 브랜드가 참가할 수 있습니다. 기술, 금융, 소비재 등 다양한 산업 분야를 포괄합니다.',
        },
        {
            question: '심사 기준은 어떻게 되나요?',
            answer: '브랜드 전략, 창의성, 시장 영향력, 고객 만족도 등을 종합적으로 평가합니다. 업계 전문가로 구성된 심사위원단이 공정하게 심사합니다.',
        },
        {
            question: '참가 비용이 있나요?',
            answer: '네, 소정의 심사 및 진행 비용이 발생합니다. 자세한 비용은 신청 안내 자료를 참고해 주시기 바랍니다.',
        },
        {
            question: '결과 발표는 언제인가요?',
            answer: `심사 종료 후 개별적으로 통보되며, ${CURRENT_YEAR}년 5월 중 최종 결과가 발표될 예정입니다.`,
        },
    ];

    return (
        <section id="faq" className="bg-brand-black py-32 snap-start">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">자주 묻는 질문</h2>
                    <p className="text-gray-400">어워드 관련 궁금한 점을 확인하세요.</p>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
