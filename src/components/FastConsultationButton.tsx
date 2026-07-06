import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretRight, Headset, Phone, ChatCircle, EnvelopeSimple } from '@phosphor-icons/react';

const ctaFieldClassName = '!w-full !px-[var(--space-3_5)] !py-[var(--space-2_5)] !bg-gray-50 !border !border-gray-100 !rounded-md focus:!ring-2 focus:!ring-brand-blue/30 focus:!bg-white !text-brand-charcoal !text-[14px] !outline-none !transition-all !m-0 !box-border !h-[var(--size-cta-field-height)] placeholder:!text-gray-400';

const ctaSelectClassName = '!static !block !w-full !px-[var(--space-3_5)] !py-[var(--space-2_5)] !bg-gray-50 !border !border-gray-100 !rounded-md focus:!ring-2 focus:!ring-brand-blue/30 focus:!bg-white !text-brand-charcoal !text-[13px] !outline-none !transition-all !appearance-none !cursor-pointer !m-0 !box-border !h-[var(--size-cta-field-height)]';

const ctaSelectStyle: React.CSSProperties = {
    position: 'static',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right var(--space-3) top 50%',
    backgroundSize: 'var(--size-cta-select-icon) auto',
};

const FastConsultationButton: React.FC = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        company_emp: '',
        company_phone: '',
        company_mail: '',
        field: '선택안함',
        field_2: '선택안함',
        privacy_agree: true,
        marketing_agree: true
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
        
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
        const params = new URLSearchParams();
        params.append('form-name', formName);
        params.append('company_name', formData.company_name);
        params.append('company_emp', formData.company_emp);
        params.append('company_phone', formData.company_phone);
        params.append('company_mail', formData.company_mail);
        params.append('field', formData.field);
        params.append('field_2', formData.field_2);
        params.append('privacy_agree', formData.privacy_agree ? '동의' : '미동의');
        params.append('marketing_agree', formData.marketing_agree ? '동의' : '미동의');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`폼 전송 실패 (${response.status})`);
                }

                alert('상담 신청이 정상적으로 접수되었습니다. 담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.');
                setFormData({
                    company_name: '',
                    company_emp: '',
                    company_phone: '',
                    company_mail: '',
                    field: '선택안함',
                    field_2: '선택안함',
                    privacy_agree: true,
                    marketing_agree: true
                });
            })
            .catch((error) => alert('일시적인 오류로 상담 신청이 완료되지 않았습니다. 잠시 후 다시 시도해 주시거나, 전화 상담을 이용해 주세요. ☎ 02-6959-5552 error code: ' + error));
    };

    return (
        <div className="!font-pretendard !hidden md:!block">
            {/* Fixed Side Panel Form */}
            <div className="!fixed !right-[var(--space-6)] !bottom-[var(--space-6)] !z-[100] !w-[var(--size-cta-panel-width)] !max-h-[calc(100vh-var(--space-12))] !bg-white !rounded-xl !shadow-xl shadow-brand-charcoal/10 !border !border-gray-100 !overflow-hidden !flex !flex-col !pointer-events-auto">
                {/* Header */}
                <div className="!bg-brand-blue !px-[var(--space-3_5)] !py-[var(--space-3_5)] !flex !items-center !gap-[var(--space-1_5)] !shrink-0">
                    <Headset size={22} weight="fill" className="!text-white !shrink-0" />
                    <div className="!font-bold !text-[15px] !leading-tight !text-white !m-0 !p-0">빠른 상담 신청</div>
                </div>

                {/* Form */}
                <div className="!px-[var(--space-3_5)] !pt-[var(--space-4)] !pb-[var(--space-6)] !overflow-y-auto">
                    <form onSubmit={handleSubmit} className="!space-y-[var(--space-3_5)] !m-0" name="awards-quick-form" data-netlify="true">
                        <input type="hidden" name="form-name" value="awards-quick-form" />

                        <div className="!mb-[var(--space-3_5)]">
                            <input
                                type="text"
                                name="company_name"
                                required
                                value={formData.company_name}
                                onChange={handleChange}
                                placeholder="기업명"
                                className={ctaFieldClassName}
                            />
                        </div>
                        <div className="!mb-[var(--space-3_5)]">
                            <input
                                type="text"
                                name="company_emp"
                                required
                                value={formData.company_emp}
                                onChange={handleChange}
                                placeholder="담당자명"
                                className={ctaFieldClassName}
                            />
                        </div>
                        <div className="!mb-[var(--space-3_5)]">
                            <input
                                type="tel"
                                name="company_phone"
                                required
                                value={formData.company_phone}
                                onChange={handleChange}
                                placeholder="연락처"
                                className={ctaFieldClassName}
                            />
                        </div>
                        <div className="!mb-[var(--space-3_5)]">
                            <input
                                type="email"
                                name="company_mail"
                                required
                                value={formData.company_mail}
                                onChange={handleChange}
                                placeholder="이메일"
                                className={ctaFieldClassName}
                            />
                        </div>

                        {/* Dropdowns */}
                        <div className="!flex !flex-col !gap-[var(--space-2)] !mb-[var(--space-3_5)]">
                            <div className="!w-full">
                                <select
                                    name="field"
                                    value={formData.field}
                                    onChange={handleChange}
                                    className={ctaSelectClassName}
                                    style={ctaSelectStyle}
                                >
                                    <option value="선택안함">-문의매체-</option>
                                    <option value="검색광고">검색광고</option>
                                    <option value="배너광고">배너광고</option>
                                    <option value="바이럴광고">바이럴광고</option>
                                    <option value="SNS광고">SNS광고</option>
                                    <option value="모바일광고">모바일광고</option>
                                    <option value="언론보도">언론보도</option>
                                    <option value="어워드">어워드</option>
                                    <option value="영상제작">영상제작</option>
                                    <option value="디자인제작">디자인제작</option>
                                    <option value="홈페이지제작">홈페이지제작</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>
                            <div className="!w-full">
                                <select
                                    name="field_2"
                                    value={formData.field_2}
                                    onChange={handleChange}
                                    className={ctaSelectClassName}
                                    style={ctaSelectStyle}
                                >
                                    <option value="선택안함">-월 예산-</option>
                                    <option value="50만~100만">50만~100만</option>
                                    <option value="100만~500만">100만~500만</option>
                                    <option value="500만~1000만">500만~1000만</option>
                                    <option value="1000만~5000만">1000만~5000만</option>
                                    <option value="5000만 이상">5000만 이상</option>
                                    <option value="미정">미정</option>
                                </select>
                            </div>
                        </div>

                        {/* Agreements */}
                        <div className="!pt-[var(--space-1)] !pb-[var(--space-1)] !mb-[var(--space-3_5)]">
                            <div className="!flex !items-start !justify-between !gap-[var(--space-2)] !mb-[var(--space-2)]">
                                <label className="!flex !items-start !gap-[var(--space-2)] !cursor-pointer !select-none !m-0 !font-normal !flex-1">
                                    <input
                                        type="checkbox"
                                        name="privacy_agree"
                                        checked={formData.privacy_agree}
                                        onChange={handleChange}
                                        className="!w-[var(--size-cta-checkbox)] !h-[var(--size-cta-checkbox)] !rounded !border-gray-300 !text-brand-blue focus:!ring-brand-blue !accent-brand-blue !m-0"
                                        required
                                    />
                                    <span className="!text-[13px] !text-gray-700 !font-medium !m-0">[필수] 정보이용동의</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPrivacy(true)}
                                    className="!text-[11px] !leading-tight !text-gray-500 hover:!text-brand-blue !transition-colors !underline !underline-offset-2 !bg-transparent !border-none !p-0 !m-0 !shrink-0"
                                >
                                    약관보기
                                </button>
                            </div>
                            <div className="!flex !items-center">
                                <label className="!flex !items-center !gap-[var(--space-2)] !cursor-pointer !select-none !m-0 !font-normal">
                                    <input
                                        type="checkbox"
                                        name="marketing_agree"
                                        checked={formData.marketing_agree}
                                        onChange={handleChange}
                                        className="!w-[var(--size-cta-checkbox)] !h-[var(--size-cta-checkbox)] !rounded !border-gray-300 !text-brand-blue focus:!ring-brand-blue !accent-brand-blue !m-0"
                                    />
                                    <span className="!text-[13px] !text-gray-700 !font-medium !m-0">[선택] 마케팅 동의</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="!w-full !bg-brand-blue !text-white !font-medium !py-[var(--space-3)] !px-[var(--space-4)] !rounded-md hover:!bg-brand-cyan !transition-colors !mt-[var(--space-2)] !text-[15px] !border-none !outline-none !cursor-pointer !m-0"
                        >
                            상담 신청하기
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="!mt-[var(--space-4)] !pt-0 !flex !flex-col !gap-[var(--space-3)]">
                        <div className="!flex !items-center !gap-[var(--space-2_5)] !text-gray-600">
                            <a
                                href="tel:0269526443"
                                aria-label="전화 걸기"
                                className="!flex !items-center !text-gray-600 hover:!text-brand-blue !transition-colors !no-underline !shrink-0"
                            >
                                <Phone size={16} weight="fill" className="!text-gray-400" />
                            </a>
                            <span className="!text-[13px] !font-medium !tracking-wide !m-0 !cursor-text !select-text">02-6952-6443</span>
                        </div>
                        <a href="https://pf.kakao.com/_xlqakC" target="_blank" rel="noreferrer" className="!flex !items-center !gap-[var(--space-2_5)] !text-gray-600 hover:!text-brand-blue !transition-colors !no-underline">
                            <ChatCircle size={16} weight="fill" className="!text-gray-400" />
                            <span className="!text-[13px] !font-medium !tracking-wide !m-0">카카오톡 상담</span>
                        </a>
                        <div className="!flex !items-start !gap-[var(--space-2_5)] !text-gray-600">
                            <a
                                href="mailto:dellycoo@jynetwork.co.kr"
                                aria-label="이메일 보내기"
                                className="!flex !items-start !text-gray-600 hover:!text-brand-blue !transition-colors !no-underline !shrink-0"
                            >
                                <EnvelopeSimple size={16} weight="fill" className="!text-gray-400 !mt-[var(--space-0_5)]" />
                            </a>
                            <span className="!text-[13px] !font-medium !tracking-wide !leading-tight !m-0 !cursor-text !select-text">dellycoo<br/>@jynetwork.co.kr</span>
                        </div>
                    </div>
                </div>

                {/* Privacy Policy Overlay */}
                <AnimatePresence>
                    {showPrivacy && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.25 }}
                            className="!absolute !inset-0 !bg-white !z-20 !flex !flex-col"
                        >
                            <div className="!bg-white !px-5 !py-4 !flex !justify-between !items-center !border-b !border-gray-100 !shrink-0">
                                <div className="!font-bold !text-[16px] !text-brand-charcoal !m-0 !p-0">개인정보 처리방침</div>
                                <button onClick={() => setShowPrivacy(false)} className="!text-gray-400 hover:!text-brand-charcoal !transition-colors !bg-transparent !border-none !p-0 !m-0 !cursor-pointer">
                                    <CaretRight size={20} weight="bold" />
                                </button>
                            </div>
                            <div className="!flex-1 !p-5 !overflow-y-auto !text-[12px] !text-gray-600 !leading-relaxed !bg-gray-50/50">
                                <div className="!font-semibold !mb-2 !text-[13px] !text-brand-charcoal">개인정보 이용약관</div>
                                <div className="!space-y-3">
                                    <p className="!m-0">
                                        ‘주식회사 제이와이네트워크’는 (이하 ‘회사’) 회사가 운영하는 서비스 상품에 대하여 이용하는 이용자님들의 개인정보를 중요시하며, 아래와 같은 개인정보취급방침을 가지고 있습니다.
                                    </p>
                                    <p className="!m-0">
                                        이 개인정보 취금방침은 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, 개인정보 보호법’ 및 ‘전자 등에서의 소비자 보호에 관한 법률’ 등 개인정보와 관련된 법령 상의 개인정보보호규정과 방송통신위원회 및 안정행정부 등 관계부처가 제정한 가이드라인을 준수하고 있습니다. 본 개인정보취급방침은 당사의 서비스에 적용되며 다음과 같은 내용을 담고 있습니다.
                                    </p>
                                    <p className="!m-0">
                                        회사는 이용자의 개인정보를 수집/이용/제공하는 경우 반드시 사전에 이용자에게 해당 내용을 알리고 동의 절차를 거치며, 이용자가 동의하지 않을 경우에는 이용자의 개인정보를 수집/이용/제공하지 않습니다.<br />
                                        단, 동의를 거부하는 경우 서비스의 전부 또는 일부 이용이 제한될 수 있습니다.
                                    </p>
                                    
                                    <div className="!pt-1">
                                        <strong className="!block !mb-1 !text-brand-charcoal !font-bold">수집하는 개인 정보 항목 및 수집방법</strong>
                                        <p className="!pl-1 !text-gray-500 !m-0">- 이름, 회사명, 이메일, 연락처, URL 등</p>
                                    </div>

                                    <div className="!pt-1">
                                        <strong className="!block !mb-1 !text-brand-charcoal !font-bold">개인정보의 수집/이용 목적</strong>
                                        <p className="!pl-1 !text-gray-500 !m-0">- 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>
                                        <p className="!pl-1 !text-gray-500 !m-0">- 회원관리 및 마케팅, 광고에 활용 : 전화, 이메일을 통한 상품 및 기타 상품 상담 및 권유</p>
                                    </div>

                                    <div className="!pt-1">
                                        <strong className="!block !mb-1 !text-brand-charcoal !font-bold">개인정보 보유/이용기간</strong>
                                        <p className="!pl-1 !text-gray-500 !m-0">- 동의일로부터 3년간</p>
                                    </div>

                                    <div className="!pt-1">
                                        <strong className="!block !mb-1 !text-brand-charcoal !font-bold">수집한 개인정보의 위탁 또는 제공</strong>
                                        <p className="!pl-1 !text-gray-500 !m-0">- 회사는 고객의 동의없이 정보를 외부 업체에 위탁하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                                        <p className="!pl-2 !text-gray-500 !mt-1 !mb-0">1. 이용자들이 사전에 동의한 경우</p>
                                        <p className="!pl-2 !text-gray-500 !m-0">2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                                    </div>

                                    <div className="!pt-1">
                                        <strong className="!block !mb-1 !text-brand-charcoal !font-bold">개인정보 수집에 변경, 철회방법</strong>
                                        <p className="!pl-1 !text-gray-500 !m-0">- 주식회사 제이와이네트워크 beatace@naver.com로 이메일 문의하여 주십시오.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FastConsultationButton;
