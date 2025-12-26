import React, { createContext, useContext, type ReactNode } from 'react';
import { AWARDS, type Award } from '../constants/awards';

interface AwardContextType {
    currentAward: Award;
}

const AwardContext = createContext<AwardContextType | undefined>(undefined);

export const AwardProvider: React.FC<{ slug?: string; children: ReactNode }> = ({ slug, children }) => {
    // Slug case insensitive normalization
    const normalizedSlug = slug ? slug.toUpperCase() : '';
    // Look up with normalized slug, ignore invalid keys
    const currentAward = AWARDS[normalizedSlug] ? AWARDS[normalizedSlug] : AWARDS['THBA'];

    return (
        <AwardContext.Provider value={{ currentAward }}>
            {children}
        </AwardContext.Provider>
    );
};

// 하위 컴포넌트에서 어워드 정보를 쉽게 사용할 수 있도록 돕는 커스텀 훅
export const useAward = () => {
    const context = useContext(AwardContext);
    if (!context) {
        throw new Error('useAward must be used within an AwardProvider');
    }
    return context;
};
