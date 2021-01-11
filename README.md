# API TEST PAGE

### 🗂Tabel of Contents

[1.Directory](#Directory)<br/>
[2.How to use](#How-to-use)

## 📔 Directory

```javascript
API TEST PAGE
│   .eslintcache
│  ..gitingnore
│  tsconfig.json
│  yarn.lock
│  package.json
│
├─public
│  │  index.html
│  │  manifest.json
│  │  robots.txt
│  ├─favicons
│  └─images
│
└─src
    │  App.tsx
    │  index.tsx
    │  api.ts
    │  react-app-env.d.ts
    │
    ├─ Pages
    │  └─ Routes.tsx
    │
    ├─components
    │  └─ Button.tsx
    │  └─ GlobalStyle.tsx
    │  └─ Header.tsx
    │  └─ MovieNav.tsx
    │  └─ PageList.tsx
    │  └─ ResultArea.tsx
    │  └─ Sidebar.tsx
    │  └─ Title.tsx
    │  └─ TvNav.tsx
    │  └─ Url.tsx
    │
    ├─containers
    │  └─movie
    │       └─ nowplay
    │          └─ NowPlayContainer.tsx
    │       └─ popular
    │          └─ PopularContainer.tsx
    │       └─ upcoming
    │          └─ Upcoming.tsx
    │       └─ Index.tsx
    │       └─ MovieContainer.tsx
    │
    ├─ modules
    │   └─contexts
    │     └─ Contexts.tsx
    │
    ├─ presenter
    │  └─ FormPresenter.tsx
    │
    ├─ types
       └─ formtypes.ts

```

## 📔 How-to-use

1. 정적 데이터 수정

   ■ Contexts.tsx 안의 정적 데이터들을 수정

![스크린샷 2021-01-11 오전 10.32.18](/Users/jerry/Library/Application Support/typora-user-images/스크린샷 2021-01-11 오전 10.32.18.png)

​	■ components/PageList.tsx안의 리스트 데이터 수정

![스크린샷 2021-01-11 오전 10.35.09](/Users/jerry/Library/Application Support/typora-user-images/스크린샷 2021-01-11 오전 10.35.09.png)

​	■ pages/Route.tsx 안의 라우팅 수정

![스크린샷 2021-01-11 오전 10.40.04](/Users/jerry/Library/Application Support/typora-user-images/스크린샷 2021-01-11 오전 10.40.04.png)

이후 각 container에서 presenter 호출시에 전달하는 props들을 수정해주시면 사용할 수 있습니다.

* 지속해서 업데이트 예정

