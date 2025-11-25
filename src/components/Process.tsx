import React from 'react';

const Process: React.FC = () => {
    const steps = [
        { number: '01', title: '신청서 제출', description: '온라인 신청서를 작성하여 제출합니다.' },
        { number: '02', title: '서류 심사', description: '전문 심사위원단이 엄격한 기준에 따라 심사합니다.' },
        { number: '03', title: '최종 선정', description: '최종 수상 기업을 선정하고 개별 통보합니다.' },
        { number: '04', title: '시상식', description: '영예로운 시상식에 참석하여 상패를 수여받습니다.' },
        { number: '05', title: '사후 홍보 지원', description: '언론 보도 및 다양한 마케팅 지원을 받습니다.' },
    ];

    return (
        <section id="process" className="bg-brand-bg py-32 relative overflow-hidden border-t border-brand-gold/10 snap-start">
            <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">참가 프로세스</h2>
                    <p className="text-gray-400">투명하고 공정한 심사 절차</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/20 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-5 gap-8 relative z-10">
                        <div className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold transition-colors text-left group">
                            <div className="w-12 h-12 bg-brand-gold text-black font-bold text-xl rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                01
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">신청서 제출</h3>
                            <p className="text-xs text-gray-400">신청서를 작성 후 FAX 또는 이메일로 제출합니다.</p>
                        </div>
                        {steps.slice(1).map((step, index) => (
                            <div key={index} className="bg-brand-bg-secondary p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold transition-colors text-left group">
                                <div className="w-12 h-12 bg-brand-gold text-black font-bold text-xl rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-xs text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-left">
                    <div className="flex flex-col md:flex-row justify-start gap-6 mb-12">
                        <a href="#" className="inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-gold/20">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            참가 신청서 다운로드
                        </a>
                        <a href="#" className="inline-flex items-center justify-center border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            어워즈 소개서 다운로드
                        </a>
                    </div>

                    <div className="bg-brand-bg-secondary p-8 rounded-xl border border-brand-gold/10 inline-block max-w-2xl w-full">
                        <h4 className="text-brand-gold font-bold mb-6 text-xl">접수 및 문의처</h4>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-brand-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">E-mail</div>
                                    <div className="text-white font-medium">awards@kbmj.co.kr</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-brand-gold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">FAX</div>
                                    <div className="text-white font-medium">02-1234-5678</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
