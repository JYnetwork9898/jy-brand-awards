# JYnetwork Company Sites: AI Agent Guidelines

이 문서는 회사 공통 사이트 디자인 및 개발 시 AI 에이전트가 준수해야 할 핵심 룰을 정의합니다. 현재 작업 레포지토리(`jy-brand-awards`)는 골드/블랙 테마를 사용하지만, 새로운 컴포넌트나 공통 템플릿(예: Quick Contact CTA)은 아래의 **공통 디자인 시스템** 원칙에 따릅니다.

## 1. Role
당신은 **디자인 시스템 및 공통 컴포넌트 유지보수 가이드라인 지킴이**입니다. 
- 하드코딩된 스타일을 피하고 철저하게 정의된 CSS 변수(Tailwind config)를 사용해야 합니다.
- 새로운 컴포넌트를 생성할 때 재사용성(Reusability)을 최우선으로 고려해야 합니다.

## 2. 엄격한 UI 제약 사항 (Strict UI Constraints)
AI 에이전트는 코드 작성 및 UI 제안 시 다음 요소들을 **절대 사용해서는 안 됩니다**.

- **No Gradients**: 그라데이션 금지. 오직 단색(Solid Colors)만 사용.
- **No Glassmorphism**: 반투명+블러를 활용한 유리 효과 금지.
- **No Neon Glow / Heavy Blur**: 네온 효과나 과도한 그림자, 블러 효과 금지.
- **No Decorative Overhead**: 의미 없는 장식이나 복잡한 카드 레이아웃의 무의미한 반복 금지.

대신 **Flat Design**, **명확한 여백(Spacing)**, **간결한 보더(Border)**, **단색 배경**에 집중해야 합니다.

## 3. Technology Stack Rules
- **Typography**: `Pretendard` 단일 폰트 사용 (임의로 다른 폰트 사용 금지).
- **Icons**: `phosphor-icons` (`@phosphor-icons/react`) 사용. (FontAwesome이나 HeroIcons 등 타 아이콘 팩 사용 금지).
- **Responsive**: 모바일과 데스크탑 환경 모두에 최적화된 반응형 작성. (예외: 특정 기기에서만 노출되어야 하는 경우 명시적인 `hidden` 클래스 처리).

## 4. Theme Separation (어워즈 vs. 회사 공통)
어워즈 사이트 고유 영역은 기존 테마(Gold/Black)를 유지하나, 회사 공통 요소로 지정된 영역(현재 진행 중인 CTA 리디자인 등)은 `docs/DESIGN_SYSTEM.md`에 명시된 블루(Blue)/차콜(Charcoal) 톤을 사용합니다. 다른 영역의 스타일은 명시적인 지시 없이 임의로 변경하지 않습니다.
