import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';
import SectionTitle from './SectionTitle';

const Process: React.FC = () => {
    const { currentAward } = useAward();

    // 참가 프로세스 단계별 안내 데이터
    const steps = [
        { number: '01', title: '신청서 제출', description: '신청서를 작성 후 FAX 또는 이메일로 제출합니다.' },
        { number: '02', title: '서류 심사', description: '전문 심사위원단이 엄격한 기준에 따라 심사합니다.' },
        { number: '03', title: '최종 선정', description: '최종 수상 기업을 선정하고 개별 통보합니다.' },
        { number: '04', title: '시상식', description: '영예로운 시상식에 참석하여 상패를 수여받습니다.' },
        { number: '05', title: '사후 홍보 지원', description: '언론 보도 및 다양한 마케팅 지원을 받습니다.' },
    ];

    // 접수 및 문의처 정보
    const contactInfo = [
        {
            label: '전화',
            value: '02 6959 5552',
            icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
        },
        {
            label: 'E-mail',
            value: 'beatace@naver.com',
            icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
            label: 'FAX',
            value: '02-866-7761',
            icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
        },
    ];

    return (
        <section id="process" className="bg-brand-bg py-32 relative overflow-hidden border-t border-brand-gold/10 snap-start">
            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                <SectionTitle subtitle="투명하고 공정한 심사 절차로 진행됩니다." className="mb-16">
                    참가 프로세스
                </SectionTitle>

                <div className="relative">
                    {/* Connecting Line (Desktop) - 단계별 요소들을 이어주는 선 (데스크탑 전용) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/20 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold transition-colors text-left group">
                                <div className="w-12 h-12 bg-brand-gold text-black font-bold text-xl rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-s font-light text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mt-16 text-left">
                    <div className="flex flex-col md:flex-row justify-start gap-6 mb-12">
                        {/* 참가 신청서 다운로드 버튼 */}
                        <a
                            href={`/files/application-form/${CURRENT_YEAR}_${currentAward.abbreviation}_참가신청서.docx`}
                            download
                            className="inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-gold/20"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            참가 신청서 다운로드
                        </a>
                        {/* 어워즈 소개서 다운로드 버튼 */}
                        <a
                            href={`/files/awards-introduction/${CURRENT_YEAR}_${currentAward.abbreviation}_제안서.pdf`}
                            download
                            className="inline-flex items-center justify-center border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            어워즈 소개서 다운로드
                        </a>
                    </div>

                    <div className="bg-brand-bg-secondary p-8 rounded-xl border border-brand-gold/10 inline-block max-w-3xl w-full">
                        <h4 className="text-brand-gold font-bold mb-6 text-xl">접수 및 문의처</h4>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-brand-gold">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                                        <div className="text-white font-medium">{contact.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Process;

