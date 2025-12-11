const PressMarketing: React.FC = () => {
    return (
        <section id="press-marketing" className="bg-brand-bg py-32 border-t border-brand-gold/10 snap-start">
            <div className="max-w-screen-2xl mx-auto container-padding relative z-10">
                <div className="text-left mb-16">
                    <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 inline-block border-b border-brand-gold pb-2">
                        Marketing
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        언론 보도
                    </h3>
                    <p className="text-gray-400 text-lg">
                        수상 기업에게 제공되는 전문가들의 언론 보도 마케팅의 과정을 확인해 보세요.
                    </p>
                </div>

                <div className="w-full aspect-video rounded-xl overflow-hidden border border-brand-gold/20 shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/bBE78UBTswI?si=D3Vy25E2WJ_K1zSx"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default PressMarketing;
