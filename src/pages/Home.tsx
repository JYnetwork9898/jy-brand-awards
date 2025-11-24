import React from 'react';
import { Link } from 'react-router-dom';
import { AWARDS } from '../constants/awards';
import TopBar from '../components/TopBar';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-bg text-white font-sans relative overflow-hidden">
            <TopBar />

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            2025<br />
                            대한민국을<br />
                            대표하는<br />
                            브랜드의 증명
                        </h2>
                    </div>
                    <div className="text-right md:text-left space-y-8">
                        <div className="text-xl md:text-2xl font-medium text-gray-300">
                            <p>중앙일보</p>
                            <p>동아일보</p>
                            <p>후원</p>
                        </div>
                        <div>
                            <Link
                                to="/awards/hit" // Default or specific link
                                className="inline-block border border-white px-8 py-4 text-lg hover:bg-white hover:text-black transition-colors"
                            >
                                참가 신청
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-12 left-8 md:left-24 text-sm text-gray-500 space-y-1">
                    <p className="font-bold text-gray-400 mb-2">제이와이 네트워크</p>
                    <p>copyright © 2025 JYnetworks. All rights reserved</p>
                    <p>TEL 02.6959.5552 | Fax 02.866.7761</p>
                </div>

                <div className="absolute bottom-12 right-8 md:right-24">
                    <span className="text-4xl md:text-6xl font-light tracking-tighter">since 2015</span>
                </div>
            </section>

            {/* Awards List Section */}
            <section className="min-h-screen bg-brand-bg-secondary flex items-center px-8 md:px-24 py-24">
                <div className="w-full grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            전문 마케팅 에이전시와 메이저 언론사가 협업하여<br />
                            매년 개최되는 브랜드 어워즈를 만나보세요.
                        </p>

                        <div className="mt-24">
                            <span className="text-6xl md:text-8xl font-bold block mb-4">3월</span>
                            <p className="text-xl text-gray-300">
                                중앙일보가 후원하는<br />
                                대한민국을 빛낸 히트브랜드의 탄생
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6 text-right">
                        {Object.values(AWARDS).map((award) => (
                            <Link
                                key={award.slug}
                                to={`/awards/${award.slug}`}
                                className="text-3xl md:text-5xl font-bold text-gray-700 hover:text-white transition-colors"
                            >
                                {award.title.replace('2026 ', '')}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
