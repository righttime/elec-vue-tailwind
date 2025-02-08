# Electron + Vue + Vite + Tailwind Template

이 프로젝트는 Electron, Vue 3, Vite, 그리고 Tailwind CSS를 결합한 데스크톱 애플리케이션 개발을 위한 템플릿입니다.

## 기술 스택

- ⚡️ [Electron](https://www.electronjs.org/) - 크로스 플랫폼 데스크톱 애플리케이션
- 🖖 [Vue 3](https://vuejs.org/) - 프로그레시브 JavaScript 프레임워크
- 🛠️ [Vite](https://vitejs.dev/) - 차세대 프론트엔드 빌드 도구
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- 📝 ESLint + Prettier - 코드 품질 및 포맷팅

## 프로젝트 구조
```
├── src/
│ ├── main/ # Electron 메인 프로세스
│ │ └── main.ts
│ ├── preload/ # Electron 프리로드 스크립트
│ │ └── preload.ts
│ └── renderer/ # Vue 애플리케이션 (렌더러 프로세스)
│ ├── assets/ # 정적 자산 (이미지, 폰트 등)
│ ├── components/ # Vue 컴포넌트
│ ├── router/ # Vue Router 설정
│ ├── utils/ # 유틸리티 함수
│ ├── views/ # 페이지 컴포넌트
│ ├── App.vue # 루트 컴포넌트
│ └── main.ts # Vue 애플리케이션 엔트리 포인트
```


## 시작하기

### 필수 조건

- Node.js 16.x 이상
- npm 또는 yarn

### 설치
- 의존성 설치
`npm install`
- 또는
`yarn install`

### 개발 모드 실행
`npm run dev`
또는
`yarn dev`

### 프로덕션용 빌드
`npm run build`
또는
`yarn build`


## 기능

- 🚀 빠른 HMR을 지원하는 Vite 개발 환경
- 🎨 Tailwind CSS를 통한 빠른 스타일링
- 📝 ESLint와 Prettier를 통한 코드 품질 관리
- 🔒 TypeScript 지원
- 📱 Vue Router를 이용한 라우팅
- ⚡️ 메인 프로세스와 렌더러 프로세스 간 IPC 통신

## 개발 가이드

### IPC 통신

메인 프로세스와 렌더러 프로세스 간의 통신은 `preload.ts`를 통해 이루어집니다. 보안을 위해 컨텍스트 격리(Context Isolation)가 활성화되어 있습니다.

### 스타일링

- Tailwind CSS 클래스를 사용하여 컴포넌트 스타일링
- `src/renderer/styles/index.css`에서 전역 스타일 정의 가능

### 새 컴포넌트 추가

1. `src/renderer/components` 디렉토리에 새 컴포넌트 파일 생성
2. Vue 3 Composition API를 사용하여 컴포넌트 작성
3. 필요한 곳에서 컴포넌트 import 및 사용

## 라이선스

MIT License

## 기여하기

1. 이 저장소를 Fork 합니다
2. 새로운 Feature 브랜치를 생성합니다
3. 변경사항을 커밋합니다
4. 브랜치를 Push 합니다
5. Pull Request를 생성합니다