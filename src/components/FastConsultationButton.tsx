import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronRight } from 'react-icons/fa';

const FastConsultationButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        company_emp: '',
        company_phone: '',
        company_mail: '',
        privacy_agree: true,
        marketing_agree: true
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
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

        const formName = 'awards-quick-form';

        // Construct URLParams
        const params = new URLSearchParams();
        params.append('form-name', formName);
        params.append('company_name', formData.company_name);
        params.append('company_emp', formData.company_emp);
        params.append('company_phone', formData.company_phone);
        params.append('company_mail', formData.company_mail);
        params.append('privacy_agree', formData.privacy_agree ? '동의' : '미동의');
        params.append('marketing_agree', formData.marketing_agree ? '동의' : '미동의');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        })
            .then(() => {
                alert('상담 신청이 정상적으로 접수되었습니다. 담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.');
                setIsOpen(false);
                setFormData({
                    company_name: '',
                    company_emp: '',
                    company_phone: '',
                    company_mail: '',
                    privacy_agree: true,
                    marketing_agree: true
                });
            })
            .catch((error) => alert('일시적인 오류로 상담 신청이 완료되지 않았습니다. 잠시 후 다시 시도해 주시거나, 전화 상담을 이용해 주세요. ☎ 02-6959-5552 error code: ' + error));
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-24 h-24 bg-brand-gold rounded-full shadow-lg text-black font-bold text-xl hover:scale-110 transition-transform duration-300 group ${isOpen ? 'hidden' : 'flex'}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
            >
                <div className="flex flex-col items-center leading-tight">
                    <span>빠른<br />상담</span>
                </div>
                <span className="absolute inset-0 rounded-full bg-brand-gold animate-ping opacity-75 -z-10 pointer-events-none"></span>
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-end sm:pr-8 sm:pb-8 pointer-events-none">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 pointer-events-auto"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden pointer-events-auto mx-0 sm:mx-0 mb-0 sm:mb-20"
                        >
                            {/* Header */}
                            <div className="bg-brand-black p-5 flex justify-between items-center text-gray-600">
                                <h3 className="font-bold text-2xl">Quick Contact</h3>
                                <button onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Form */}
                            <div className="p-6">
                                <p className="text-base text-gray-600 mb-6">
                                    문의 사항을 남겨주시면 담당자가 빠르게 연락드리겠습니다.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-4" name="awards-quick-form" data-netlify="true">
                                    <input type="hidden" name="form-name" value="awards-quick-form" />

                                    <div>
                                        <input
                                            type="text"
                                            name="company_name"
                                            placeholder="기업명"
                                            required
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-gold text-black text-base"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="company_emp"
                                            placeholder="담당자명"
                                            required
                                            value={formData.company_emp}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-gold text-black text-base"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="company_phone"
                                            placeholder="연락처"
                                            required
                                            value={formData.company_phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-gold text-black text-base"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="company_mail"
                                            placeholder="이메일"
                                            required
                                            value={formData.company_mail}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-gold text-black text-base"
                                        />
                                    </div>

                                    {/* Agreements */}
                                    <div className="pt-2 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <label className="flex items-center space-x-2 text-base text-gray-700 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="privacy_agree"
                                                    checked={formData.privacy_agree}
                                                    onChange={handleChange}
                                                    className="accent-brand-gold w-4 h-4"
                                                    required
                                                />
                                                <span>[필수] 정보이용동의</span>
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setShowPrivacy(true)}
                                                className="text-sm text-gray-500 underline hover:text-brand-gold"
                                            >
                                                보기
                                            </button>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <label className="flex items-center space-x-2 text-base text-gray-700 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="marketing_agree"
                                                    checked={formData.marketing_agree}
                                                    onChange={handleChange}
                                                    className="accent-brand-gold w-4 h-4"
                                                />
                                                <span>[선택] 마케팅 동의</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-brand-gold text-white font-bold py-4 px-5 rounded-lg hover:bg-brand-gold-light transition-colors mt-3 text-lg"
                                    >
                                        빠른 상담 신청
                                    </button>
                                </form>
                            </div>

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
                                            <h3 className="font-bold text-xl text-gray-700">개인정보 처리방침</h3>
                                            <button onClick={() => setShowPrivacy(false)} className="text-gray-700 hover:text-brand-gold p-2">
                                                <FaChevronRight className="text-xl" />
                                            </button>
                                        </div>
                                        <div className="flex-1 p-6 overflow-y-auto text-sm text-gray-700 leading-relaxed">
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
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FastConsultationButton;
