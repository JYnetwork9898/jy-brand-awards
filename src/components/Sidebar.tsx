import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';

const Sidebar: React.FC = () => {
    const { currentAward } = useAward();

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
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="w-full text-left px-4 py-3 text-gray-400 hover:text-brand-gold hover:bg-white/5 rounded-lg transition-all text-sm font-medium group flex items-center justify-between"
                        >
                            {item.label}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold">→</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="p-6 border-t border-white/10 space-y-4">
                <div className="mb-4">
                    <h3 className="text-brand-gold-light text-sm font-bold mb-1">{currentAward.abbreviation}</h3>
                    <p className="text-gray-400 text-s font-medium">{currentAward.title}</p>
                </div>

                <div className="space-y-2 mb-8">
                    <a
                        href="#"
                        className="relative block w-full px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-black text-xs font-bold text-center rounded transition-colors overflow-hidden group"
                    >
                        <span className="relative z-10">참가신청서 다운로드</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></span>
                    </a>
                    <a
                        href="#"
                        className="block w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-gray-400 text-xs font-bold text-center rounded transition-colors border border-white/20"
                    >
                        어워즈 소개서 다운로드
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
