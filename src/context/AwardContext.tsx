import React, { createContext, useContext, type ReactNode } from 'react';
import { AWARDS, type Award } from '../constants/awards';

interface AwardContextType {
    currentAward: Award;
}

const AwardContext = createContext<AwardContextType | undefined>(undefined);

export const AwardProvider: React.FC<{ slug?: string; children: ReactNode }> = ({ slug, children }) => {
    // Default to 'hit' if slug is not found or invalid (fallback)
    const currentAward = slug && AWARDS[slug] ? AWARDS[slug] : AWARDS['hit'];

    return (
        <AwardContext.Provider value={{ currentAward }}>
            {children}
        </AwardContext.Provider>
    );
};

export const useAward = () => {
    const context = useContext(AwardContext);
    if (!context) {
        throw new Error('useAward must be used within an AwardProvider');
    }
    return context;
};
