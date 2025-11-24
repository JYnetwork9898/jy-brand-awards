export interface Award {
    slug: string;
    title: string;
    color: string;
    description: string;
}

export const AWARDS: Record<string, Award> = {
    'hit': {
        slug: 'hit',
        title: '2026 히트브랜드 대상',
        color: '#041f3b',
        description: '소비자들의 꾸준한 사랑을 받으며 시장을 선도하는 최고의 히트 상품과 브랜드를 선정합니다.'
    },
    'customer': {
        slug: 'customer',
        title: '2026 고객감동 우수브랜드 대상',
        color: '#361608',
        description: '진정성 있는 서비스와 품질로 고객에게 깊은 감동을 선사한 우수 브랜드를 발굴합니다.'
    },
    'consumer': {
        slug: 'consumer',
        title: '2026 소비자만족 브랜드 대상',
        color: '#4c0312',
        description: '실질적인 소비자 만족도 평가를 통해 검증된 신뢰할 수 있는 브랜드를 시상합니다.'
    },
    'year': {
        slug: 'year',
        title: '2026 올해의 우수브랜드 대상',
        color: '#682800',
        description: '한 해 동안 괄목할 만한 성장을 이루고 산업 발전에 기여한 올해의 대표 브랜드를 선정합니다.'
    }
};
