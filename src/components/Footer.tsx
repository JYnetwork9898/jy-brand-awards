import React from 'react';
import { useAward } from '../context/AwardContext';
import { CURRENT_YEAR } from '../constants/common';

const Footer: React.FC = () => {
    const { currentAward } = useAward();

    return (
        <footer className="bg-brand-black border-t border-brand-gray pt-32 pb-8 snap-start">
            <div className="max-w-screen-2xl mx-auto container-padding">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold text-brand-gold tracking-wider mb-4 block">
                            {currentAward.title}
                        </a>
                        <p className="text-gray-400 max-w-lg leading-relaxed">
                            (주)제이와이네트워크 | 대표 김재훈 | 사업자등록번호 172-87-00908
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>TEL 02.6959.5552</li>
                            <li>Fax 02.866.7761</li>
                            <li>MOBLIE 010.5036.5683</li>
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
                    copyright ⓒ {CURRENT_YEAR}.JYnetworks, All rights reserved | 사이트명 : {CURRENT_YEAR} {currentAward.title}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
