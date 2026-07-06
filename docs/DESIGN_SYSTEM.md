# JYnetwork Common Design System

본 문서는 JYnetwork의 회사 웹사이트 및 공통 컴포넌트를 위한 디자인 시스템 가이드라인입니다.

## 1. Design Principles
- **Flat & Clean**: 그라데이션, 유리 효과, 네온 글로우, 과한 그림자를 배제한 플랫 디자인.
- **Purposeful**: 의미 없는 장식 요소를 제거하고 콘텐츠와 기능에 집중.
- **Reusable**: 하드코딩된 스타일을 피하고 모든 스타일 요소는 변수화된 토큰(Token)을 사용.

## 2. Typography
모든 회사 공통 영역의 폰트는 **Pretendard**를 사용합니다.

- **Font Family**: `Pretendard`, `sans-serif`
- **Weights**: 
  - Light (300)
  - Regular (400)
  - Medium (500)
  - SemiBold (600)
  - Bold (700)

## 3. Color Palette
어워즈 사이트의 골드/블랙 테마와 구분되는 회사 공통 브랜드 컬러입니다. Tailwind `@theme`에 변수로 등록하여 사용합니다.

### Primary Colors
- **Medium Blue**: `#2890DB` (주요 버튼, 강조 텍스트, 액티브 상태)
- **Cyan Blue**: `#33C1E3` (보조 버튼, 호버 상태 포인트, 배경 포인트)

### Neutral Colors
- **Charcoal**: `#1A1A1A` (기본 텍스트, 다크 테마 배경 포인트)
- **White**: `#FFFFFF` (카드 배경, 기본 텍스트 반전)
- **Gray Scale**:
  - `Gray 50/100`: 보더리스(Borderless) 입력창 및 회색 박스 배경용.
  - `Gray 300`: 매우 옅은 구분선(Border)용.
  - `Gray 500`: 보조 텍스트, 라벨(Label)용.

## 4. Iconography
- **Library**: `Phosphor Icons` (`@phosphor-icons/react` 패키지 사용)
- **Style**: 라인(Line) 위주의 깔끔한 아이콘 사용 원칙.
- **Color**: 배경색 대비에 맞추어 Charcoal 또는 Medium Blue 사용.

## 5. UI Components (Forms & Buttons)
- **Inputs (Form)**:
  - 명확한 경계선(border)보다는 옅은 회색 배경(`bg-gray-100`)을 활용하여 면으로 구분하는 보더리스 스타일 지향.
  - 모서리는 부드러운 라운딩(`rounded-lg` 이상) 적용.
  - 플레이스홀더 대신 상단에 명확한 텍스트 라벨(Label) 배치 권장.
- **Buttons**:
  - 입체감, 그라데이션 금지.
  - 단색 배경(`bg-brand-blue`), 흰색 텍스트, 깔끔한 라운딩 처리.
- **Cards/Modals**:
  - 과도한 Drop Shadow 금지, 미세한 Shadow로 레이어만 구분.
  - 단색 화이트 배경을 사용하고 복잡한 장식을 제거.
