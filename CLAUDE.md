# HARULines Web — Claude Code 지침

## 프로젝트 개요
harulines.com = HARULines 앱의 공식 웹사이트
용도: 마케팅 랜딩 페이지 + 법적 페이지 (PP, ToS) + SEO 블로그
백엔드 없음. 순수 정적 사이트 (Next.js SSG + Vercel)

## 절대 규칙
- /Users/byeongwookyou/HARULines/harulines/ (Flutter 앱) 수정 금지
- 웹사이트 코드만 /Users/byeongwookyou/HARULines/harulines-web/ 에서 작업

## 기술 스택
- Next.js 15 (App Router, SSG)
- TypeScript 5.x (strict mode)
- Tailwind CSS 4.x
- MDX 3.x (블로그, Phase 2)

## 디자인 시스템
브랜드명: HARULines
Primary: #FF8C42
Gold: #FFB347
Background: #FAF8F5
Surface: #FFFFFF
Text: #2A2520
Text Secondary: #8A7E72
헤딩 폰트: Lora (serif)
본문 폰트: Nunito (sans-serif)

## 코딩 컨벤션
- 컴포넌트: PascalCase (Header.tsx, Footer.tsx)
- 페이지: app/route/page.tsx (App Router)
- 모든 페이지에 메타태그 필수 (title, description, og:image)
- 모바일 반응형 필수
- 한국어 주석 OK

## 연락처
harulines.app@gmail.com
