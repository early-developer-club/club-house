# Early Developer Club - Club House

Early Developer Club의 공식 웹사이트입니다. 초보 개발자들을 위한 커뮤니티 플랫폼으로, 멘토링, 프로젝트 협업, 그리고 지식 공유를 통해 함께 성장하는 공간입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Font**: Geist Sans & Geist Mono

## 🎨 주요 기능

- ✨ **애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- 🎨 **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- 🌙 **다크 모드**: 시스템 설정에 따른 자동 다크/라이트 모드
- 📱 **모바일 최적화**: 모바일 우선 반응형 디자인
- ⚡ **성능 최적화**: Next.js의 자동 최적화 기능 활용

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18.0.0 이상
- npm, yarn, pnpm, 또는 bun

### 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── ui/               # UI 컴포넌트
├── config/               # 설정 파일
│   ├── navigation.ts     # 네비게이션 설정
│   └── site.ts          # 사이트 설정
├── lib/                  # 유틸리티 함수
│   └── utils.ts         # 공통 유틸리티
└── types/               # TypeScript 타입 정의
    └── index.ts
```

## 🎯 개발 가이드

### 컴포넌트 작성 규칙

- 모든 컴포넌트는 TypeScript로 작성
- `"use client"` 지시어는 클라이언트 컴포넌트에만 사용
- Framer Motion 애니메이션은 적절한 지연시간과 함께 적용
- Tailwind CSS 클래스는 `cn()` 유틸리티로 조건부 스타일링

### 스타일링 가이드

- CSS 변수를 활용한 테마 시스템
- 다크 모드 지원을 위한 CSS 변수 사용
- 반응형 디자인은 모바일 우선 접근법
- 애니메이션은 성능을 고려한 최적화

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 연결
3. 자동 배포 설정 완료

### 기타 배포 옵션

- Netlify
- AWS Amplify
- Railway
- Docker

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- **Website**: [Early Developer Club](https://early-developer-club.vercel.app)
- **Twitter**: [@earlydevclub](https://twitter.com/earlydevclub)
- **GitHub**: [early-developer-club](https://github.com/early-developer-club)
