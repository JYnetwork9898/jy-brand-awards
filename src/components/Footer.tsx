import React from 'react';
import { useAward } from '../context/AwardContext';

const Footer: React.FC = () => {
    const { currentAward } = useAward();

    return (
        <footer className="bg-brand-black border-t border-brand-gray pt-32 pb-8 snap-start">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold text-brand-gold tracking-wider mb-4 block">
                            {currentAward.title}
                        </a>
                        <p className="text-gray-400 max-w-sm">
                            대한민국 최고의 브랜드를 선정하는 권위 있는 시상식입니다. 성공적인 비즈니스의 기준을 제시합니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Email: awards@kbmj.com</li>
                            <li>Phone: 02-1234-5678</li>
                            <li>Address: 서울특별시 마포구</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-brand-gold">개인정보처리방침</a></li>
                            <li><a href="#" className="hover:text-brand-gold">이용약관</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-brand-gray pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} KBMJ Brand Awards. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
