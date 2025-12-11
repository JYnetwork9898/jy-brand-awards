import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode; // 제목 텍스트
    subtitle?: string;        // 부제목 텍스트 (선택)
    className?: string;       // 추가 스타일 클래스
    as?: 'h1' | 'h2' | 'h3' | 'h4'; // 렌더링할 HTML 태그 (기본값: h2)
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    subtitle,
    className = '',
    as: Component = 'h2'
}) => {
    const baseTitleClasses = 'text-3xl md:text-5xl font-bold text-white';
    // 부제목이 있으면 제목에 하단 여백 추가
    const titleClasses = subtitle
        ? `${baseTitleClasses} mb-6`
        : baseTitleClasses;

    return (
        <div className={`text-left ${className}`}>
            <Component className={titleClasses}>
                {children}
            </Component>
            {subtitle && (
                <p className="text-gray-400 text-lg">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionTitle;
