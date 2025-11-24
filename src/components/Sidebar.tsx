import React from 'react';
import { CURRENT_YEAR } from '../constants/common';

const Sidebar: React.FC = () => {
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

            <div className="p-6 border-t border-white/10">
                <div className="text-xs text-gray-500 font-medium">
                    &copy; {CURRENT_YEAR} KBMJ.
                </div>
                <div className="text-[10px] text-gray-600 mt-1">
                    All rights reserved.
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
