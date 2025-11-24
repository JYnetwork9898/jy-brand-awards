import React from 'react';

const Sidebar: React.FC = () => {
    const menuItems = [
        { label: '시상식 개요', id: 'overview' },
        { label: '시상식 취지', id: 'mission' },
        { label: '수상 혜택', id: 'benefits' },
        { label: '수상 효과', id: 'effects' },
        { label: '역대 수상 브랜드', id: 'past-winners' },
        { label: '역대 시상식', id: 'video' },
        { label: '언론 보도', id: 'press' },
        { label: '참가 프로세스', id: 'process' },
        { label: '자주 묻는 질문', id: 'faq' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="hidden lg:block w-64 fixed left-0 top-[48px] bottom-0 bg-brand-bg border-r border-brand-gold/20 overflow-y-auto z-40">
            <div className="p-8">
                <div className="mb-12">
                    <h1 className="text-2xl font-bold text-brand-gold tracking-widest">
                        KBMJ <br />
                        <span className="text-white text-lg">AWARDS</span>
                    </h1>
                </div>
                <nav className="space-y-6">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left text-gray-400 hover:text-brand-gold hover:translate-x-2 transition-all duration-300 text-sm font-medium uppercase tracking-wider"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="absolute bottom-8 left-8 text-xs text-gray-600">
                &copy; 2026 KBMJ.
            </div>
        </aside>
    );
};

export default Sidebar;
