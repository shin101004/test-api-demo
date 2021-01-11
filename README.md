# API TEST PAGE

### 🗂Tabel of Contents

[1.Directory](#-directory)<br/>
[2.How to use](#-how-to-use)

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

1. 정적 데이터 수정<br/>
- modules/contexts/Contexts.tsx 수정


![스크린샷 2021-01-11 오후 12 15 23](https://user-images.githubusercontent.com/61345090/104144596-278d2d80-5407-11eb-9ac1-b2b0723c1ec1.png)<br/>
- components/PageList.tsx 수정


![스크린샷 2021-01-11 오후 12 15 40](https://user-images.githubusercontent.com/61345090/104144598-28be5a80-5407-11eb-8d15-fee36e0a861c.png)<br/>
- pages/Route.tsx 수정


![스크린샷 2021-01-11 오후 12 15 52](https://user-images.githubusercontent.com/61345090/104144599-29ef8780-5407-11eb-96f2-5c85799a55dd.png)
<br/>

위 3가지 파일은 정적데이터로 이루어져 있기 때문에 알맞게 수정하신 후 사용하시면 되겠습니다.

* 지속해서 업데이트 예정

