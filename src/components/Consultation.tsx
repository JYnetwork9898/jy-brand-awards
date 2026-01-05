import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const Consultation: React.FC = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        company_emp: '',
        company_phone: '',
        company_mail: '',
        content: '',
        privacy_agree: true,
        marketing_agree: true
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.privacy_agree) {
            alert('개인정보 수집 및 이용에 동의해야 합니다.');
            return;
        }

        const formName = 'awards-main-form';

        // Construct URLParams
        const params = new URLSearchParams();
        params.append('form-name', formName);
        params.append('company_name', formData.company_name);
        params.append('company_emp', formData.company_emp);
        params.append('company_phone', formData.company_phone);
        params.append('company_mail', formData.company_mail);
        params.append('content', formData.content);
        params.append('privacy_agree', formData.privacy_agree ? '동의' : '미동의');
        params.append('marketing_agree', formData.marketing_agree ? '동의' : '미동의');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        })
            .then(() => {
                alert('상담 신청이 정상적으로 접수되었습니다. 담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.');
                setFormData({
                    company_name: '',
                    company_emp: '',
                    company_phone: '',
                    company_mail: '',
                    content: '',
                    privacy_agree: true,
                    marketing_agree: true
                });
            })
            .catch((error) => alert('일시적인 오류로 상담 신청이 완료되지 않았습니다. 잠시 후 다시 시도해 주시거나, 전화 상담을 이용해 주세요. ☎ 02-6959-5552 error code: ' + error));
    };

    return (
        <section id="consultation" className="bg-brand-bg pt-40 pb-40 px-4 md:px-8 snap-start border-t border-brand-gold/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contact Us</h2>
                    <p className="text-gray-400">
                        궁금하신 점이 있으시다면 언제든 문의해 주세요.<br className="hidden md:block" />
                        담당자가 확인 후 빠르고 친절하게 안내해 드리겠습니다.
                    </p>
                </div>

                <div className="bg-brand-bg-secondary rounded-2xl p-6 md:p-10 shadow-lg border border-brand-gold/20 relative overflow-hidden">
                    <form onSubmit={handleSubmit} className="space-y-6" name="awards-main-form" data-netlify="true">
                        <input type="hidden" name="form-name" value="awards-main-form" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 font-bold mb-2 text-sm">기업명 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="company_name"
                                    required
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-brand-gold text-white text-base bg-brand-bg placeholder-gray-500"
                                    placeholder="기업명 혹은 단체명"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 font-bold mb-2 text-sm">담당자명 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="company_emp"
                                    required
                                    value={formData.company_emp}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-brand-gold text-white text-base bg-brand-bg placeholder-gray-500"
                                    placeholder="담당자 성함"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 font-bold mb-2 text-sm">연락처 <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="company_phone"
                                    required
                                    value={formData.company_phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-brand-gold text-white text-base bg-brand-bg placeholder-gray-500"
                                    placeholder="010-0000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 font-bold mb-2 text-sm">이메일 <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="company_mail"
                                    required
                                    value={formData.company_mail}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-brand-gold text-white text-base bg-brand-bg placeholder-gray-500"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 font-bold mb-2 text-sm">문의내용</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-brand-gold text-white text-base bg-brand-bg h-32 resize-none placeholder-gray-500"
                                placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                            />
                        </div>

                        {/* Agreements */}
                        <div className="pt-4 border-t border-brand-gold/20">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div className="flex items-center justify-between sm:justify-start gap-4">
                                    <label className="flex items-center space-x-2 text-base text-gray-300 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="privacy_agree"
                                            checked={formData.privacy_agree}
                                            onChange={handleChange}
                                            className="accent-brand-gold w-5 h-5"
                                            required
                                        />
                                        <span>[필수] 정보이용동의</span>
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setShowPrivacy(true)}
                                        className="text-sm text-gray-400 underline hover:text-brand-gold"
                                    >
                                        약관보기
                                    </button>
                                </div>

                                <label className="flex items-center space-x-2 text-base text-gray-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="marketing_agree"
                                        checked={formData.marketing_agree}
                                        onChange={handleChange}
                                        className="accent-brand-gold w-5 h-5"
                                    />
                                    <span>[선택] 마케팅 동의</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-gold text-black font-bold py-4 px-6 rounded-xl hover:bg-brand-gold-light transition-all duration-300 text-lg shadow-md"
                        >
                            상담 신청하기
                        </button>
                    </form>

                    {/* Privacy Policy Overlay */}
                    <AnimatePresence>
                        {showPrivacy && (
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="absolute inset-0 bg-white z-20 flex flex-col"
                            >
                                <div className="bg-brand-black p-4 flex justify-between items-center text-white shrink-0">
                                    <h3 className="font-bold text-xl">개인정보 처리방침</h3>
                                    <button onClick={() => setShowPrivacy(false)} className="text-white hover:text-brand-gold p-2">
                                        <FaChevronRight className="text-xl" />
                                    </button>
                                </div>
                                <div className="flex-1 p-6 overflow-y-auto text-sm text-gray-700 leading-relaxed text-left">
                                    <h4 className="font-bold mb-4 text-base text-black">개인정보 이용약관</h4>

                                    <div className="space-y-4 text-xs sm:text-sm">
                                        <p>
                                            ‘주식회사 제이와이네트워크’는 (이하 ‘회사’) 회사가 운영하는 서비스 상품에 대하여 이용하는 이용자님들의 개인정보를 중요시하며, 아래와 같은 개인정보취급방침을 가지고 있습니다.
                                        </p>
                                        <p>
                                            이 개인정보 취금방침은 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, 개인정보 보호법’ 및 ‘전자 등에서의 소비자 보호에 관한 법률’ 등 개인정보와 관련된 법령 상의 개인정보보호규정과 방송통신위원회 및 안정행정부 등 관계부처가 제정한 가이드라인을 준수하고 있습니다. 본 개인정보취급방침은 당사의 서비스에 적용되며 다음과 같은 내용을 담고 있습니다.
                                        </p>
                                        <p>
                                            회사는 이용자의 개인정보를 수집/이용/제공하는 경우 반드시 사전에 이용자에게 해당 내용을 알리고 동의 절차를 거치며, 이용자가 동의하지 않을 경우에는 이용자의 개인정보를 수집/이용/제공하지 않습니다.<br />
                                            단, 동의를 거부하는 경우 서비스의 전부 또는 일부 이용이 제한될 수 있습니다.
                                        </p>
                                        <p>
                                            회사는 개인정보 취급방침을 통해 이용자가 제공하는 개인정보가 어떠한 용도의 방식으로 이용되고 있으며, 적극적으로 보호하기 위해 항상 노력하고 있음을 알려드리고자 합니다.
                                        </p>

                                        <div className="pt-2">
                                            <strong className="block mb-1 text-black">수집하는 개인 정보 항목 및 수집방법</strong>
                                            <p>– 이름, 회사명, 이메일, 연락처, URL 등</p>
                                        </div>

                                        <div className="pt-2">
                                            <strong className="block mb-1 text-black">개인정보의 수집/이용 목적</strong>
                                            <p>– 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>
                                            <p>– 회원관리 및 마케팅, 광고에 활용 : 전화, 이메일을 통한 상품 및 기타 상품 상담 및 권유</p>
                                        </div>

                                        <div className="pt-2">
                                            <strong className="block mb-1 text-black">개인정보 보유/이용기간</strong>
                                            <p>– 동의일로부터 3년간</p>
                                        </div>

                                        <div className="pt-2">
                                            <strong className="block mb-1 text-black">수집한 개인정보의 위탁 또는 제공</strong>
                                            <p>– 회사는 고객의 동의없이 정보를 외부 업체에 위탁하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                                            <p className="pl-2">1. 이용자들이 사전에 동의한경우</p>
                                            <p className="pl-2">2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                                        </div>

                                        <div className="pt-2">
                                            <strong className="block mb-1 text-black">개인정보 수집에 변경, 철회방법</strong>
                                            <p>– 주식회사 제이와이네트워크 beatace@naver.com로 이메일 문의하여 주십시오.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Consultation;
