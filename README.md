# Early Developer Club - Club House

## 📖 프로젝트 소개

Early Developer Club의 공식 웹사이트입니다. 세 개의 하위 조직(Developer, Artist, Designer)을 소개하는 인터랙티브한 웹사이트로, 각 페이지마다 고유한 테마와 커스텀 커서 효과를 제공합니다.

## ⏱️ 바이브코딩 정보

- **시작 시간**: 2025년 10월 11일
- **소요 시간**: 약 4-5시간
- **개발 방식**: 실시간 페어 프로그래밍 (바이브코딩)
- **개발 환경**: Cursor IDE

## 🛠️ 기술 스택

### Frontend
- **Next.js 15** (App Router)
- **TypeScript** - 타입 안전성
- **Tailwind CSS v4** - 유틸리티 퍼스트 스타일링
- **Framer Motion** - 애니메이션 및 인터랙션

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **Git** - 버전 관리

## 🎯 프로젝트 계획

### 전체 구조
```
Early Developer Club
├── Early Developer Club (Developer 페이지)
├── Early Artist Club (Artist 페이지)
└── Early Designer Club (Designer 페이지)
```

### 페이지별 테마
- **Developer**: 픽셀 게임 감성 (다크 배경, 라임 텍스트, 모노스페이스 폰트)
- **Artist**: 문학적 감성 (밝은 회색 배경, 세리프 폰트, AI 창작 시 전시)
- **Designer**: 팝아트 감성 (주황 배경, 노랑 텍스트, 대담한 디자인)

## ✅ 완료된 작업

### 1. 프로젝트 초기 설정
- [x] Next.js 15 + TypeScript + Tailwind CSS 프로젝트 생성
- [x] Framer Motion 설치 및 설정
- [x] 기본 폴더 구조 및 컴포넌트 생성

### 2. 네비게이션 시스템
- [x] 동적 네비게이션 헤더 구현
- [x] "Early"와 "Club" 텍스트의 부드러운 Y축 이동 애니메이션
- [x] 각 버튼별 고유 폰트 스타일 적용
  - Developer: 모노스페이스 폰트
  - Artist: 세리프 이탤릭 폰트
  - Designer: 볼드 폰트
- [x] 선택된 버튼의 테마 색상 적용
- [x] 네온 그림자 효과 (Developer 페이지)

### 3. 전역 테마 시스템
- [x] Layout 컴포넌트에서 페이지별 테마 관리
- [x] CSS 변수 기반 테마 색상 시스템
- [x] Header/Footer 테마 색상 통일
- [x] 페이지별 배경색 전역 적용

### 4. Developer 페이지
- [x] 픽셀 게임 감성 디자인
- [x] 다크 배경 (#0b1020) + 라임 텍스트
- [x] 레트로 카드 레이아웃
- [x] 네온 그림자 효과

### 5. Artist 페이지
- [x] 잡지 스타일 레이아웃
- [x] 다중 열 그리드 시스템 (1/2/3열 반응형)
- [x] AI 창작 시 9편 추가
- [x] 세리프 폰트 적용
- [x] 흰 배경 제거, 자연스러운 읽기 경험

### 6. Designer 페이지
- [x] "Coming Soon" 메시지
- [x] 주황 배경 + 노랑 텍스트
- [x] 화면 중앙 정렬
- [x] 스크롤 없는 완벽한 레이아웃

### 7. 커스텀 커서 시스템
- [x] 전역 커서 숨김 처리
- [x] Developer 페이지: 색상 반전 효과 (mix-blend-difference)
- [x] Artist 페이지: 돋보기 효과
  - SVG displacement filter 적용
  - 렌즈 왜곡 효과
  - 크기 200x200px
  - 가장자리 왜곡 강화
- [x] Designer 페이지: 쨍한 파란색 커서
  - 제공받은 SVG 경로 사용
  - 5배 크기 확대 (160x160px)
  - Spring 애니메이션 효과
  - 정확한 클릭 영역

### 8. 반응형 디자인
- [x] 모바일/태블릿/데스크톱 대응
- [x] 네비게이션 반응형 레이아웃
- [x] Artist 페이지 다중 열 반응형

### 9. 배포 및 운영
- [x] Vercel 배포 완료
- [x] Production URL 생성
- [x] GitHub Repository Public 전환
- [x] 자동 배포 설정 준비

### 10. URL 구조 개선
- [x] Developer 페이지를 홈(/)으로 변경
- [x] /developer 경로 제거
- [x] 홈 접근성 문제 해결
- [x] 네비게이션 일관성 확보

## 🚧 진행 예정 작업

### 1. 콘텐츠 확장
- [ ] Developer 페이지: 실제 프로젝트 포트폴리오 추가
- [ ] Artist 페이지: 더 많은 AI 창작 작품 추가
- [ ] Designer 페이지: 실제 디자인 작업물 전시

### 2. 인터랙션 개선
- [ ] 페이지 전환 애니메이션
- [ ] 스크롤 기반 애니메이션
- [ ] 호버 효과 강화

### 3. 성능 최적화
- [ ] 이미지 최적화
- [ ] 코드 스플리팅
- [ ] SEO 최적화

### 4. 추가 기능
- [ ] 다크/라이트 모드 토글
- [ ] 언어 설정 (한국어/영어)
- [ ] 소셜 미디어 연동
- [ ] 연락처 폼

### 5. 배포 및 운영
- [x] Vercel 배포 설정
- [ ] 도메인 연결
- [ ] 분석 도구 연동 (Google Analytics)

## 🎨 디자인 시스템

### 색상 팔레트
- **Developer**: `#0b1020` (배경), `#84cc16` (라임)
- **Artist**: `#f8fafc` (배경), `#1e293b` (텍스트)
- **Designer**: `#f97316` (주황), `#fde047` (노랑)

### 폰트 시스템
- **Developer**: Geist Mono (모노스페이스)
- **Artist**: ui-serif (세리프)
- **Designer**: Geist Sans (산세리프)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── developer/page.tsx
│   ├── artist/page.tsx
│   ├── designer/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── button.tsx
│       └── custom-cursor.tsx
└── lib/
    └── utils.ts
```

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 🌐 배포 정보

### Production URL
- **Live Site**: https://club-house-ehnwmdazn-da-ins-projects.vercel.app
- **Vercel Dashboard**: https://vercel.com/da-ins-projects/club-house

### 배포 플랫폼
- **Vercel**: Next.js 최적화된 배포
- **자동 배포**: GitHub 연동 준비 완료
- **CDN**: 전 세계 빠른 로딩

### GitHub Repository
- **Repository**: https://github.com/early-developer-club/club-house
- **Status**: Public
- **Branch**: main

## 📝 개발 노트

### 주요 기술적 도전과제
1. **SVG Displacement Filter**: Artist 페이지 돋보기 효과 구현
2. **동적 테마 시스템**: CSS 변수를 활용한 페이지별 테마 관리
3. **커스텀 커서**: 각 페이지별 고유한 커서 효과
4. **반응형 레이아웃**: 복잡한 네비게이션의 반응형 처리

### 학습한 기술
- Framer Motion의 고급 애니메이션 기법
- SVG 필터와 displacement map 활용
- CSS 변수를 활용한 테마 시스템
- Next.js 15 App Router의 최신 기능

---

**Early Developer Club** - 디지털 시대의 창작자들을 위한 공간