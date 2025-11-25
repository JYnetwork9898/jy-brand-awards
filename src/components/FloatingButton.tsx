import React from 'react';
import { motion } from 'framer-motion';

const FloatingButton: React.FC = () => {
    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <a
                href="#process"
                className="flex items-center justify-center w-20 h-20 bg-brand-gold rounded-full shadow-lg shadow-brand-gold/40 text-black font-bold text-xs hover:scale-110 transition-transform duration-300 relative group"
            >
                <span className="absolute inset-0 rounded-full bg-brand-gold animate-ping opacity-75"></span>
                <span className="relative z-10 text-center leading-tight">
                    참가<br />신청
                </span>
            </a>
        </motion.div>
    );
};

export default FloatingButton;
