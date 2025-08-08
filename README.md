# My Landing Page

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

모던하고 인터랙티브한 랜딩 페이지 프로젝트

## 🚀 기술 스택

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.11
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Custom React animations
- **Theme**: next-themes (다크/라이트 모드)
- **Icons**: Lucide React
- **Carousel**: Embla Carousel

## ✨ 주요 기능

### 🎯 풀페이지 스크롤
- 부드러운 섹션 간 전환
- 마우스 휠, 터치, 키보드 네비게이션 지원
- 순환 스크롤 (마지막 → 첫 번째 섹션)
- 모바일 터치 제스처 최적화

### 🌓 다크/라이트 테마
- next-themes를 활용한 테마 전환
- 시스템 테마 자동 감지
- 부드러운 테마 전환 애니메이션

### 📱 반응형 디자인
- 모든 디바이스에서 최적화된 UI
- 모바일 퍼스트 접근 방식
- 터치 친화적 인터페이스

### 🎨 섹션별 구성
- **Hero**: 메인 소개 섹션
- **About**: 두 개의 정보 섹션
- **Portfolio**: 작품 갤러리
- **Partners**: 파트너십 섹션
- **Contact**: 연락처 페이지

## 🛠️ 개발 환경 설정

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 프로덕션 실행
```bash
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About 페이지
│   ├── contact/           # Contact 페이지
│   ├── portfolio/         # Portfolio 페이지
│   └── page.tsx          # 메인 홈페이지
├── components/
│   ├── Common/           # 공통 컴포넌트
│   ├── FullPageScroll/   # 풀페이지 스크롤 시스템
│   ├── Header/           # 헤더 및 네비게이션
│   ├── Sections/         # 페이지 섹션들
│   └── ui/              # UI 컴포넌트 라이브러리
├── contexts/            # React Context
├── lib/                # 유틸리티 함수
└── types/              # TypeScript 타입 정의
```

## 🎮 사용법

### 네비게이션
- **마우스 휠**: 위/아래 스크롤로 섹션 이동
- **터치**: 스와이프로 섹션 이동
- **키보드**: 방향키, Page Up/Down, Home/End
- **네비게이션 점**: 우측 사이드바에서 직접 섹션 선택

### 반응형 브레이크포인트
- **모바일**: < 640px
- **태블릿**: 640px - 1024px
- **데스크톱**: > 1024px

## 🚀 배포

이 프로젝트는 Vercel, Netlify 등의 플랫폼에 쉽게 배포할 수 있습니다.

### Vercel 배포
```bash
vercel --prod
```

## 📝 라이센스

MIT License