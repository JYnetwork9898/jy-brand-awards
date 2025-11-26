import React, { useState, useEffect } from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';

const Sidebar: React.FC = () => {
    const { currentAward } = useAward();
    const [activeSection, setActiveSection] = useState<string>('overview');

    const menuItems = [
        { id: 'overview', label: '시상식 개요' },
        { id: 'mission', label: '시상식 취지' },
        { id: 'benefits', label: '수상 혜택' },
        { id: 'effects', label: '수상 효과' },
        { id: 'past-winners', label: '역대 수상 브랜드' },
        { id: 'video', label: '역대 시상식' },
        { id: 'press', label: '언론 보도' },
        { id: 'process', label: '참가 프로세스' },
        { id: 'faq', label: '자주 묻는 질문' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0
            }
        );

        menuItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 bg-brand-black border-r border-white/10 z-40 pt-[80px]">
            <div className="flex-1 overflow-y-auto py-8 px-6">
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left px-4 py-3 ${isActive
                                    ? 'text-white '
                                    : 'text-gray-400 hover:text-brand-gold'
                                    } rounded-lg transition-all text-sm font-medium`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </div>

            <div className="p-6 border-t border-white/10 space-y-4">


                {/* 상담 안내 */}
                <div className="mb-8">
                    <h4 className="text-white/70 text-s font-medium mb-3">상담 안내</h4>
                    <div className="space-y-2 text-s">
                        <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-light">02 6959 5552</span>
                        </div>
                        <a href="mailto:beatace@naver.com" className="flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors group">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-light">beatace@naver.com</span>
                        </a>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-brand-gold-light text-sm font-bold mb-1">{currentAward.abbreviation}</h3>
                    <p className="text-white/70 text-s font-medium">{currentAward.title}</p>
                </div>

                <div className="space-y-2 mb-8">
                    <a
                        href="#"
                        className="relative block w-full px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-black text-s font-bold text-center rounded transition-colors overflow-hidden group"
                    >
                        <span className="relative z-10">참가신청서 다운로드</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></span>
                    </a>
                    <a
                        href="#"
                        className="block w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-gray-400 text-s font-bold text-center rounded transition-colors border border-white/20"
                    >
                        소개서 다운로드
                    </a>
                </div>

                <div className="text-xs text-gray-500 font-medium pt-4 border-t border-white/10">
                    &copy; {CURRENT_YEAR} KBMJ.
                </div>
                <div className="text-[10px] text-gray-600">
                    All rights reserved.
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
