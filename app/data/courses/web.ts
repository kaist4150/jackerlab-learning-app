import type { Course } from './types';

export const webCourses: Course[] = [
  // ─────────────────────────────────────────────
  // 1. HTML & CSS 기초
  // ─────────────────────────────────────────────
  {
    slug: 'html-css',
    title: 'HTML & CSS 기초',
    description: '웹 페이지의 구조와 스타일을 배우는 첫 걸음',
    category: 'web',
    color: 'bg-orange-500',
    difficulty: 'beginner',
    objectives: [
      'HTML 문서 구조와 시맨틱 태그 이해',
      'CSS 선택자, 박스 모델, 스타일링',
      'Flexbox와 Grid 레이아웃',
      '반응형 웹 디자인과 미디어 쿼리',
      'CSS 애니메이션과 실전 페이지 제작',
    ],
    lessons: [
      // ── Lesson 1-a: HTML 기본 구조 ──
      {
        slug: 'html-basics',
        title: 'HTML 기본 구조',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'HTML이란?',
          },
          {
            type: 'text',
            text: 'HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 브라우저는 HTML 문서를 읽고 화면에 내용을 표시합니다. 모든 웹 페이지는 HTML을 기반으로 만들어지며, CSS와 JavaScript가 그 위에 스타일과 동작을 더합니다.',
          },
          {
            type: 'heading',
            text: 'HTML 문서의 기본 구조',
          },
          {
            type: 'text',
            text: '모든 HTML 문서는 `<!DOCTYPE html>` 선언으로 시작합니다. 이 선언은 브라우저에게 해당 문서가 HTML5 표준을 따른다는 것을 알려줍니다. 그 다음 `<html>` 태그 안에 `<head>`와 `<body>` 두 영역으로 나뉩니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>나의 첫 웹 페이지</title>
</head>
<body>
  <h1>안녕하세요!</h1>
  <p>HTML을 배우고 있습니다.</p>
</body>
</html>`,
          },
          {
            type: 'list',
            items: [
              '`<!DOCTYPE html>` - HTML5 문서임을 선언',
              '`<html lang="ko">` - 문서의 루트 요소, 언어 설정',
              '`<head>` - 메타 정보, 타이틀, 외부 리소스 연결',
              '`<body>` - 실제 화면에 표시되는 콘텐츠',
            ],
          },
          {
            type: 'heading',
            text: '주요 HTML 태그',
          },
          {
            type: 'text',
            text: 'HTML에는 다양한 태그가 있으며, 각 태그는 콘텐츠의 의미와 역할을 나타냅니다. 아래는 가장 자주 사용되는 태그들입니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- 제목 태그: h1(가장 큼) ~ h6(가장 작음) -->
<h1>메인 제목</h1>
<h2>부제목</h2>
<h3>소제목</h3>

<!-- 문단 -->
<p>이것은 하나의 문단입니다.</p>

<!-- 링크 -->
<a href="https://example.com">예제 사이트로 이동</a>

<!-- 이미지 -->
<img src="photo.jpg" alt="사진 설명" />

<!-- 순서 없는 목록 -->
<ul>
  <li>항목 1</li>
  <li>항목 2</li>
</ul>

<!-- 순서 있는 목록 -->
<ol>
  <li>첫 번째</li>
  <li>두 번째</li>
</ol>

<!-- 영역 구분 -->
<div>블록 레벨 컨테이너</div>
<span>인라인 컨테이너</span>`,
          },
          {
            type: 'tip',
            text: '`<div>`는 블록 레벨 요소로 줄 전체를 차지하고, `<span>`은 인라인 요소로 텍스트 흐름 안에서 일부분만 감쌉니다. 시맨틱 태그(`<header>`, `<nav>`, `<main>`, `<footer>`)를 적극 활용하면 검색 엔진 최적화(SEO)와 접근성에 유리합니다.',
          },
        ],
      },

      // ── Lesson 1-b: CSS 기초 스타일링 ──
      {
        slug: 'css-styling',
        title: 'CSS 기초 스타일링',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'CSS란?',
          },
          {
            type: 'text',
            text: 'CSS(Cascading Style Sheets)는 HTML 요소의 시각적 표현을 정의하는 스타일 언어입니다. HTML이 콘텐츠의 구조를 담당한다면, CSS는 색상, 크기, 배치 등 디자인을 담당합니다. CSS를 사용하면 동일한 HTML 구조에 전혀 다른 디자인을 적용할 수 있습니다.',
          },
          {
            type: 'heading',
            text: 'CSS 선택자',
          },
          {
            type: 'text',
            text: 'CSS 선택자는 스타일을 적용할 HTML 요소를 지정하는 패턴입니다. 태그 선택자, 클래스 선택자(`.`), ID 선택자(`#`)가 가장 기본적인 선택자입니다.',
          },
          {
            type: 'code',
            language: 'css',
            code: `/* 태그 선택자 - 모든 p 태그에 적용 */
p {
  color: #333;
  font-size: 16px;
}

/* 클래스 선택자 - class="highlight"인 요소에 적용 */
.highlight {
  background-color: #fff3cd;
  padding: 4px 8px;
  border-radius: 4px;
}

/* ID 선택자 - id="header"인 요소에 적용 (페이지당 하나) */
#header {
  background-color: #1a1a2e;
  color: white;
  padding: 20px;
}`,
          },
          {
            type: 'heading',
            text: '자주 쓰는 CSS 속성',
          },
          {
            type: 'code',
            language: 'css',
            code: `.card {
  /* 색상 */
  color: #222;                   /* 글자 색상 */
  background-color: #f5f5f5;     /* 배경 색상 */

  /* 글꼴 */
  font-size: 18px;               /* 글자 크기 */
  font-weight: bold;             /* 글자 두께 */
  line-height: 1.6;              /* 줄 간격 */

  /* 여백 */
  margin: 16px;                  /* 외부 여백 (요소 바깥) */
  padding: 24px;                 /* 내부 여백 (요소 안쪽) */

  /* 테두리 */
  border: 1px solid #ddd;        /* 두께 스타일 색상 */
  border-radius: 8px;            /* 둥근 모서리 */
}`,
          },
          {
            type: 'heading',
            text: 'Box Model 이해하기',
          },
          {
            type: 'text',
            text: 'CSS에서 모든 요소는 박스(Box)로 표현됩니다. 이 박스는 안쪽부터 **content**(내용) -> **padding**(안쪽 여백) -> **border**(테두리) -> **margin**(바깥 여백) 순서로 구성됩니다. `box-sizing: border-box`를 설정하면 `width`와 `height`에 padding과 border가 포함되어 레이아웃을 계산하기 훨씬 쉬워집니다.',
          },
          {
            type: 'code',
            language: 'css',
            code: `/* 모든 요소에 border-box 적용 (권장) */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.box-example {
  width: 300px;       /* border-box: padding, border 포함 300px */
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}`,
          },
          {
            type: 'tip',
            text: '브라우저 개발자 도구(F12)에서 요소를 선택하면 Box Model을 시각적으로 확인할 수 있습니다. margin은 주황색, border는 노란색, padding은 초록색, content는 파란색으로 표시됩니다.',
          },
        ],
      },

      // ── Lesson 1-c: 레이아웃과 Flexbox ──
      {
        slug: 'layout-flexbox',
        title: '레이아웃과 Flexbox',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Flexbox란?',
          },
          {
            type: 'text',
            text: 'Flexbox(Flexible Box Layout)는 1차원 레이아웃을 쉽게 구성할 수 있는 CSS 레이아웃 모델입니다. 요소들을 가로 또는 세로 방향으로 정렬하고, 간격을 조절하고, 크기를 유연하게 조정할 수 있습니다. 과거 `float`나 `inline-block`으로 힘들게 만들던 레이아웃을 간결하게 구현할 수 있습니다.',
          },
          {
            type: 'heading',
            text: 'Flex 컨테이너와 아이템',
          },
          {
            type: 'text',
            text: 'Flexbox를 사용하려면 부모 요소에 `display: flex`를 선언합니다. 이 부모가 **flex 컨테이너**, 그 안의 직접 자식들이 **flex 아이템**이 됩니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
          },
          {
            type: 'code',
            language: 'css',
            code: `.container {
  display: flex;             /* Flexbox 활성화 */
  justify-content: center;   /* 주축(가로) 정렬: 가운데 */
  align-items: center;       /* 교차축(세로) 정렬: 가운데 */
  gap: 16px;                 /* 아이템 사이 간격 */
  height: 300px;
  background-color: #f0f0f0;
}

.item {
  padding: 20px 32px;
  background-color: #4a90d9;
  color: white;
  border-radius: 8px;
  font-size: 18px;
}`,
          },
          {
            type: 'heading',
            text: '주요 Flexbox 속성',
          },
          {
            type: 'list',
            items: [
              '`flex-direction` - 배치 방향 설정: `row`(가로, 기본값), `column`(세로), `row-reverse`, `column-reverse`',
              '`justify-content` - 주축 정렬: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`',
              '`align-items` - 교차축 정렬: `flex-start`, `center`, `flex-end`, `stretch`(기본값), `baseline`',
              '`flex-wrap` - 줄 바꿈: `nowrap`(기본값), `wrap`(넘치면 다음 줄로)',
              '`gap` - 아이템 간 간격: `gap: 16px` 또는 `row-gap`, `column-gap` 별도 설정',
            ],
          },
          {
            type: 'code',
            language: 'css',
            code: `/* 내비게이션 바: 로고 왼쪽, 메뉴 오른쪽 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
}

/* 카드 그리드: 줄 바꿈 허용 */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card-grid .card {
  flex: 1 1 280px;  /* 최소 280px, 남는 공간 균등 분배 */
}

/* 세로 중앙 정렬 (화면 가운데 배치) */
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
          },
          {
            type: 'tip',
            text: '`justify-content: space-between`은 첫 아이템은 시작점, 마지막 아이템은 끝점에 놓고 나머지를 균등 배분합니다. 내비게이션 바처럼 양쪽 끝에 요소를 배치할 때 매우 유용합니다. Flexbox만으로 부족할 때는 2차원 레이아웃을 지원하는 CSS Grid를 함께 학습해 보세요.',
          },
        ],
      },

      // ── Lesson 1-d: 시맨틱 HTML과 폼 ──
      {
        slug: 'semantic-forms',
        title: '시맨틱 HTML과 폼',
        duration: '20분',
        content: [
          { type: 'heading', text: '시맨틱 HTML이란?' },
          {
            type: 'text',
            text: '시맨틱(Semantic) HTML은 태그 이름만으로 콘텐츠의 의미를 전달하는 작성 방식입니다. `<div>`와 `<span>` 대신 `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` 등을 사용하면 검색 엔진과 스크린 리더가 페이지 구조를 더 잘 이해할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<header>
  <nav>
    <a href="/">홈</a>
    <a href="/about">소개</a>
    <a href="/contact">연락처</a>
  </nav>
</header>

<main>
  <article>
    <h1>시맨틱 HTML의 중요성</h1>
    <p>시맨틱 태그는 접근성과 SEO를 동시에 개선합니다.</p>

    <section>
      <h2>접근성 향상</h2>
      <p>스크린 리더가 페이지 구조를 파악하여 사용자에게 안내합니다.</p>
    </section>

    <section>
      <h2>SEO 최적화</h2>
      <p>검색 엔진이 콘텐츠의 중요도와 관계를 이해합니다.</p>
    </section>
  </article>

  <aside>
    <h3>관련 글</h3>
    <ul>
      <li><a href="#">HTML5 새로운 태그</a></li>
      <li><a href="#">웹 접근성 가이드</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>`,
          },
          {
            type: 'list',
            items: [
              '`<header>` - 페이지나 섹션의 머리글 영역',
              '`<nav>` - 내비게이션 링크 모음',
              '`<main>` - 페이지의 주요 콘텐츠 (문서당 하나)',
              '`<article>` - 독립적인 콘텐츠 단위 (블로그 글, 뉴스 기사)',
              '`<section>` - 주제별로 묶인 콘텐츠 그룹',
              '`<aside>` - 주요 콘텐츠와 간접적으로 관련된 부가 정보',
              '`<footer>` - 페이지나 섹션의 바닥글 영역',
            ],
          },
          { type: 'heading', text: 'HTML 폼 만들기' },
          {
            type: 'text',
            text: '`<form>` 태그는 사용자 입력을 수집하는 데 사용됩니다. 다양한 `<input>` 타입과 `<label>`, `<select>`, `<textarea>` 등을 조합하여 로그인, 회원가입, 검색 등의 폼을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<form action="/submit" method="POST">
  <!-- 텍스트 입력 -->
  <label for="username">이름</label>
  <input type="text" id="username" name="username"
         placeholder="이름을 입력하세요" required />

  <!-- 이메일 입력 (형식 자동 검증) -->
  <label for="email">이메일</label>
  <input type="email" id="email" name="email"
         placeholder="example@mail.com" required />

  <!-- 비밀번호 -->
  <label for="password">비밀번호</label>
  <input type="password" id="password" name="password"
         minlength="8" required />

  <!-- 셀렉트 박스 -->
  <label for="role">역할</label>
  <select id="role" name="role">
    <option value="">선택하세요</option>
    <option value="student">학생</option>
    <option value="developer">개발자</option>
    <option value="designer">디자이너</option>
  </select>

  <!-- 라디오 버튼 -->
  <fieldset>
    <legend>경험 수준</legend>
    <label>
      <input type="radio" name="level" value="beginner" /> 입문
    </label>
    <label>
      <input type="radio" name="level" value="intermediate" /> 중급
    </label>
    <label>
      <input type="radio" name="level" value="advanced" /> 고급
    </label>
  </fieldset>

  <!-- 체크박스 -->
  <label>
    <input type="checkbox" name="agree" required />
    이용약관에 동의합니다
  </label>

  <!-- 텍스트 영역 -->
  <label for="bio">자기소개</label>
  <textarea id="bio" name="bio" rows="4"
            placeholder="간단한 자기소개를 작성하세요"></textarea>

  <!-- 제출 버튼 -->
  <button type="submit">가입하기</button>
</form>`,
          },
          {
            type: 'tip',
            text: '`<label>`의 `for` 속성과 `<input>`의 `id`를 일치시키면 라벨 클릭 시 해당 입력 필드에 포커스됩니다. `required`, `minlength`, `pattern` 등의 속성으로 브라우저 내장 유효성 검사를 활용하세요. JavaScript 없이도 기본적인 폼 검증이 가능합니다.',
          },
        ],
      },

      // ── Lesson 1-e: CSS Grid 레이아웃 ──
      {
        slug: 'css-grid',
        title: 'CSS Grid 레이아웃',
        duration: '20분',
        content: [
          { type: 'heading', text: 'CSS Grid란?' },
          {
            type: 'text',
            text: 'CSS Grid는 행(row)과 열(column)을 동시에 제어하는 2차원 레이아웃 시스템입니다. Flexbox가 한 방향(행 또는 열)을 다루는 데 강점이 있다면, Grid는 복잡한 레이아웃을 행과 열 모두에서 정밀하게 배치할 때 강력합니다.',
          },
          {
            type: 'code',
            language: 'css',
            code: `/* 기본 Grid 컨테이너 */
.grid-container {
  display: grid;

  /* 3열 그리드: 각 200px */
  grid-template-columns: 200px 200px 200px;

  /* fr 단위: 남은 공간을 비율로 분배 */
  grid-template-columns: 1fr 2fr 1fr;  /* 1:2:1 비율 */

  /* repeat() 함수로 반복 패턴 */
  grid-template-columns: repeat(3, 1fr);  /* 동일 3열 */

  /* 자동 채우기: 최소 200px, 남는 공간 균등 분배 */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  /* 행 높이 지정 */
  grid-template-rows: 80px auto 60px;

  /* 간격 */
  gap: 20px;           /* 행·열 모두 */
  row-gap: 20px;       /* 행 간격만 */
  column-gap: 16px;    /* 열 간격만 */
}`,
          },
          { type: 'heading', text: 'Grid 아이템 배치' },
          {
            type: 'code',
            language: 'css',
            code: `/* 아이템의 위치를 라인 번호로 지정 */
.header {
  grid-column: 1 / -1;    /* 첫 번째 ~ 마지막 열 (전체 너비) */
  grid-row: 1;
}

.sidebar {
  grid-column: 1;         /* 첫 번째 열 */
  grid-row: 2 / 4;        /* 두 번째 ~ 세 번째 행 */
}

.content {
  grid-column: 2 / -1;    /* 두 번째 열 ~ 끝 */
  grid-row: 2;
}

/* span 키워드로 차지할 칸 수 지정 */
.featured {
  grid-column: span 2;    /* 2열 차지 */
  grid-row: span 2;       /* 2행 차지 */
}`,
          },
          { type: 'heading', text: 'Grid Template Areas' },
          {
            type: 'text',
            text: '`grid-template-areas`를 사용하면 레이아웃을 시각적으로 설계할 수 있습니다. 각 아이템에 이름을 붙이고, 그리드 영역을 문자열로 표현합니다.',
          },
          {
            type: 'code',
            language: 'css',
            code: `.page-layout {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar content content"
    "footer  footer  footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
  gap: 16px;
}

/* 각 아이템에 영역 이름 지정 */
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }`,
          },
          {
            type: 'heading',
            text: '카드 갤러리 만들기',
          },
          {
            type: 'code',
            language: 'css',
            code: `/* 반응형 카드 갤러리 - Grid의 꽃 */
.card-gallery {
  display: grid;
  /* 최소 280px, 공간이 있으면 자동 확장 */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;  /* 비율 유지하며 채우기 */
}

.card-body {
  padding: 16px;
}`,
          },
          {
            type: 'tip',
            text: '`auto-fill`은 빈 트랙도 공간을 차지하고, `auto-fit`은 빈 트랙을 축소합니다. 아이템 수가 가변적인 카드 레이아웃에는 `auto-fill`을, 아이템을 중앙에 모으고 싶을 때는 `auto-fit`을 사용하세요. Flexbox와 Grid를 함께 사용하면 거의 모든 레이아웃을 구현할 수 있습니다.',
          },
        ],
      },

      // ── Lesson 1-f: 반응형 웹 디자인 ──
      {
        slug: 'responsive-design',
        title: '반응형 웹 디자인',
        duration: '20분',
        content: [
          { type: 'heading', text: '반응형 디자인이란?' },
          {
            type: 'text',
            text: '반응형 웹 디자인은 화면 크기에 따라 레이아웃과 스타일이 자동으로 조정되는 설계 방식입니다. 스마트폰, 태블릿, 데스크톱 등 다양한 기기에서 최적의 사용자 경험을 제공합니다. 핵심 도구는 미디어 쿼리(Media Query)와 유연한 단위(%, vw, rem)입니다.',
          },
          { type: 'heading', text: '뷰포트 메타 태그' },
          {
            type: 'code',
            language: 'html',
            code: `<!-- 반응형 디자인의 필수 설정 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!--
  width=device-width: 뷰포트 너비를 기기 화면 너비에 맞춤
  initial-scale=1.0:  초기 줌 레벨을 100%로 설정
  이 태그가 없으면 모바일에서 데스크톱 레이아웃이 축소되어 보입니다
-->`,
          },
          { type: 'heading', text: '미디어 쿼리' },
          {
            type: 'code',
            language: 'css',
            code: `/* 기본 스타일: 모바일 우선 (Mobile First) */
.container {
  padding: 16px;
}

.nav-menu {
  display: none;  /* 모바일에서는 숨김 */
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;  /* 1열 */
  gap: 16px;
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    max-width: 768px;
    margin: 0 auto;
  }

  .nav-menu {
    display: flex;  /* 메뉴 표시 */
  }

  .card-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2열 */
  }
}

/* 데스크톱 (1024px 이상) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 32px;
  }

  .card-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3열 */
    gap: 24px;
  }
}

/* 대형 화면 (1440px 이상) */
@media (min-width: 1440px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);  /* 4열 */
  }
}`,
          },
          { type: 'heading', text: '유연한 단위' },
          {
            type: 'code',
            language: 'css',
            code: `/* ── rem: 루트 폰트 크기 기준 ── */
html {
  font-size: 16px;  /* 1rem = 16px */
}

h1 { font-size: 2rem; }     /* 32px */
h2 { font-size: 1.5rem; }   /* 24px */
p  { font-size: 1rem; }     /* 16px */

/* ── vw/vh: 뷰포트 기준 ── */
.hero {
  height: 100vh;              /* 화면 전체 높이 */
  font-size: clamp(1.5rem, 4vw, 3rem);  /* 반응형 폰트 */
}

/* ── %: 부모 기준 ── */
.sidebar {
  width: 30%;
}

.content {
  width: 70%;
}

/* ── clamp(): 최소, 선호, 최대값 ── */
.container {
  /* 최소 320px, 선호 90%, 최대 1200px */
  width: clamp(320px, 90%, 1200px);
  margin: 0 auto;
}

/* 반응형 폰트 크기: 미디어 쿼리 없이도 가능 */
h1 {
  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);
}`,
          },
          { type: 'heading', text: '반응형 이미지' },
          {
            type: 'code',
            language: 'css',
            code: `/* 기본: 이미지가 컨테이너를 넘지 않도록 */
img {
  max-width: 100%;
  height: auto;
}

/* 비율 유지하며 영역 채우기 */
.cover-image {
  width: 100%;
  height: 300px;
  object-fit: cover;       /* 비율 유지, 잘림 허용 */
  object-position: center; /* 잘릴 때 중심 기준 */
}`,
          },
          {
            type: 'tip',
            text: 'Mobile First 접근법은 `min-width` 미디어 쿼리를 사용하여 작은 화면부터 스타일을 작성하고 점점 큰 화면으로 확장합니다. 모바일 사용자가 불필요한 CSS를 로드하지 않아 성능에 유리하고, 핵심 콘텐츠에 먼저 집중하게 되어 더 나은 설계로 이어집니다.',
          },
        ],
      },

      // ── Lesson 1-g: CSS 애니메이션과 트랜지션 ──
      {
        slug: 'css-animation',
        title: 'CSS 애니메이션과 트랜지션',
        duration: '20분',
        content: [
          { type: 'heading', text: 'CSS Transition' },
          {
            type: 'text',
            text: 'Transition은 CSS 속성의 변화를 부드럽게 전환하는 가장 간단한 애니메이션 방법입니다. 마우스 호버, 포커스 등 상태 변화 시 자연스러운 시각 효과를 줄 수 있습니다.',
          },
          {
            type: 'code',
            language: 'css',
            code: `/* ── 기본 트랜지션 ── */
.button {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* 어떤 속성을, 얼마 동안, 어떤 방식으로 전환할지 */
  transition: all 0.3s ease;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* ── 개별 속성 지정 ── */
.card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* ── 타이밍 함수 ── */
.slide { transition: transform 0.3s ease-in-out; }
.bounce { transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); }`,
          },
          { type: 'heading', text: 'CSS Animation (@keyframes)' },
          {
            type: 'text',
            text: '`@keyframes`를 사용하면 시작과 끝뿐 아니라 중간 단계도 세밀하게 제어할 수 있습니다. 자동 재생, 반복, 방향 전환 등 transition으로는 불가능한 복잡한 애니메이션을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'css',
            code: `/* ── 페이드 인 ── */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* ── 회전 로딩 스피너 ── */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* ── 펄스 효과 ── */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* ── 순차 등장 ── */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-item {
  opacity: 0;
  animation: slideUp 0.5s ease forwards;
}

/* 각 아이템에 딜레이 부여 */
.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-item:nth-child(3) { animation-delay: 0.3s; }
.stagger-item:nth-child(4) { animation-delay: 0.4s; }`,
          },
          {
            type: 'list',
            items: [
              '`animation-duration` - 한 사이클의 지속 시간',
              '`animation-timing-function` - 가속/감속 방식 (ease, linear, ease-in-out)',
              '`animation-delay` - 시작 전 대기 시간',
              '`animation-iteration-count` - 반복 횟수 (숫자 또는 infinite)',
              '`animation-direction` - 방향 (normal, reverse, alternate)',
              '`animation-fill-mode` - 종료 후 상태 (forwards: 마지막 프레임 유지)',
            ],
          },
          {
            type: 'tip',
            text: '성능을 위해 `transform`과 `opacity`만 애니메이션하세요. 이 두 속성은 GPU에서 처리되어 매우 빠릅니다. `width`, `height`, `margin` 등을 애니메이션하면 레이아웃 재계산이 발생하여 버벅일 수 있습니다. `will-change: transform`을 추가하면 브라우저가 미리 최적화합니다.',
          },
        ],
      },

      // ── Lesson 1-h: 실전 웹 페이지 만들기 ──
      {
        slug: 'practical-page',
        title: '실전 웹 페이지 만들기',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트: 포트폴리오 페이지' },
          {
            type: 'text',
            text: '지금까지 배운 HTML과 CSS를 종합하여 간단한 포트폴리오 페이지를 만들어 봅니다. 시맨틱 구조, Flexbox/Grid, 반응형 디자인, 트랜지션을 모두 활용합니다.',
          },
          { type: 'heading', text: 'HTML 구조' },
          {
            type: 'code',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>홍길동 | 포트폴리오</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- 네비게이션 -->
  <header class="header">
    <nav class="nav">
      <a href="#" class="logo">Portfolio</a>
      <ul class="nav-links">
        <li><a href="#about">소개</a></li>
        <li><a href="#skills">기술</a></li>
        <li><a href="#projects">프로젝트</a></li>
        <li><a href="#contact">연락처</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- 히어로 섹션 -->
    <section class="hero">
      <h1>안녕하세요,<br /><strong>홍길동</strong>입니다</h1>
      <p>프론트엔드 개발자 | UI/UX에 관심이 많습니다</p>
      <a href="#projects" class="btn">프로젝트 보기</a>
    </section>

    <!-- 기술 스택 -->
    <section id="skills" class="skills">
      <h2>기술 스택</h2>
      <div class="skill-grid">
        <div class="skill-card">
          <h3>HTML & CSS</h3>
          <p>시맨틱 마크업, 반응형 레이아웃</p>
        </div>
        <div class="skill-card">
          <h3>JavaScript</h3>
          <p>ES6+, DOM 조작, 비동기 처리</p>
        </div>
        <div class="skill-card">
          <h3>React</h3>
          <p>컴포넌트 설계, 상태 관리</p>
        </div>
      </div>
    </section>

    <!-- 프로젝트 -->
    <section id="projects" class="projects">
      <h2>프로젝트</h2>
      <div class="project-grid">
        <article class="project-card">
          <img src="project1.jpg" alt="프로젝트 1" />
          <div class="project-info">
            <h3>날씨 앱</h3>
            <p>OpenWeather API를 활용한 날씨 조회 앱</p>
            <div class="project-tags">
              <span>React</span>
              <span>API</span>
            </div>
          </div>
        </article>
        <article class="project-card">
          <img src="project2.jpg" alt="프로젝트 2" />
          <div class="project-info">
            <h3>할 일 관리</h3>
            <p>드래그 앤 드롭 기반 투두 리스트</p>
            <div class="project-tags">
              <span>TypeScript</span>
              <span>CSS Grid</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; 2024 홍길동. All rights reserved.</p>
  </footer>
</body>
</html>`,
          },
          { type: 'heading', text: 'CSS 스타일' },
          {
            type: 'code',
            language: 'css',
            code: `/* ── 리셋 & 기본 ── */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Pretendard', -apple-system, sans-serif;
  line-height: 1.6;
  color: #1f2937;
}

/* ── 네비게이션 ── */
.header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #6b7280;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #3b82f6;
}

/* ── 히어로 ── */
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero h1 strong {
  color: #3b82f6;
}

.btn {
  display: inline-block;
  margin-top: 24px;
  padding: 12px 32px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s, transform 0.2s;
}

.btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

/* ── 기술 스택 ── */
.skills, .projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.skills h2, .projects h2 {
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 40px;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}

.skill-card {
  padding: 32px;
  background: #f9fafb;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* ── 프로젝트 ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 20px;
}

.project-tags {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.project-tags span {
  padding: 4px 12px;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 20px;
  font-size: 0.8rem;
}

/* ── 푸터 ── */
.footer {
  text-align: center;
  padding: 32px;
  color: #9ca3af;
  border-top: 1px solid #e5e7eb;
}

/* ── 반응형 ── */
@media (max-width: 768px) {
  .nav-links { display: none; }

  .project-grid {
    grid-template-columns: 1fr;
  }
}`,
          },
          {
            type: 'tip',
            text: '이 과정에서 배운 모든 개념이 사용되었습니다: 시맨틱 태그(`header`, `main`, `section`, `article`, `footer`), Flexbox(네비게이션, 히어로), Grid(카드 레이아웃), 반응형(clamp, media query), 트랜지션(hover 효과). 실제 프로젝트에서는 이 기본 구조를 확장하며 페이지를 발전시켜 나가세요.',
          },
        ],
      },

      // ── Lesson 1-i: HTML 태그 & CSS 속성 레퍼런스 ──
      {
        slug: 'reference',
        title: 'HTML 태그 & CSS 속성 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '자주 쓰는 HTML 태그' },
          {
            type: 'code',
            language: 'html',
            code: `<!-- ── 문서 구조 ── -->
<!DOCTYPE html>         <!-- HTML5 선언 -->
<html lang="ko">       <!-- 루트 요소 -->
<head>                  <!-- 메타데이터 영역 -->
<body>                  <!-- 표시되는 콘텐츠 -->

<!-- ── 시맨틱 구조 ── -->
<header>    머리글 (로고, 네비게이션)
<nav>       내비게이션 링크 모음
<main>      주요 콘텐츠 (페이지당 1개)
<section>   주제별 콘텐츠 그룹
<article>   독립적 콘텐츠 (블로그 글 등)
<aside>     부가 정보 (사이드바)
<footer>    바닥글 (저작권, 링크)

<!-- ── 텍스트 ── -->
<h1>~<h6>   제목 (1이 가장 큼)
<p>         문단
<span>      인라인 텍스트 묶기
<strong>    중요 텍스트 (굵게)
<em>        강조 텍스트 (기울임)
<br />      줄바꿈
<hr />      수평선

<!-- ── 링크와 미디어 ── -->
<a href="url">          링크
<img src="url" alt="">  이미지
<video>                 동영상
<audio>                 오디오

<!-- ── 목록 ── -->
<ul>    순서 없는 목록
<ol>    순서 있는 목록
<li>    목록 항목

<!-- ── 테이블 ── -->
<table>     표
<thead>     표 머리글
<tbody>     표 본문
<tr>        행
<th>        머리글 셀
<td>        데이터 셀

<!-- ── 폼 ── -->
<form>          폼 컨테이너
<input>         입력 필드
<textarea>      여러 줄 입력
<select>        드롭다운
<option>        드롭다운 항목
<button>        버튼
<label>         입력 필드 라벨
<fieldset>      관련 필드 그룹
<legend>        fieldset 제목

<!-- ── 기타 ── -->
<div>       블록 레벨 컨테이너
<code>      코드
<pre>       서식 유지 텍스트`,
          },
          { type: 'heading', text: 'input 타입 모음' },
          {
            type: 'code',
            language: 'html',
            code: `<input type="text" />        일반 텍스트
<input type="password" />    비밀번호
<input type="email" />       이메일 (형식 검증)
<input type="number" />      숫자
<input type="tel" />         전화번호
<input type="url" />         URL
<input type="date" />        날짜 선택
<input type="time" />        시간 선택
<input type="color" />       색상 선택
<input type="range" />       슬라이더
<input type="file" />        파일 업로드
<input type="checkbox" />    체크박스
<input type="radio" />       라디오 버튼
<input type="hidden" />      숨겨진 값
<input type="search" />      검색
<input type="submit" />      제출 버튼`,
          },
          { type: 'heading', text: 'CSS 선택자 레퍼런스' },
          {
            type: 'code',
            language: 'css',
            code: `/* ── 기본 선택자 ── */
*                  모든 요소
div                태그 선택자
.class             클래스 선택자
#id                ID 선택자

/* ── 결합 선택자 ── */
div p              자손 (모든 하위 p)
div > p            직계 자식 p만
div + p            바로 다음 형제 p
div ~ p            이후 모든 형제 p

/* ── 속성 선택자 ── */
[href]             href 속성이 있는 요소
[type="text"]      type이 text인 요소
[class^="btn"]     class가 btn으로 시작
[class$="primary"] class가 primary로 끝남
[class*="card"]    class에 card 포함

/* ── 가상 클래스 ── */
:hover             마우스 올렸을 때
:focus             포커스 상태
:active            클릭 중
:first-child       첫 번째 자식
:last-child        마지막 자식
:nth-child(n)      n번째 자식
:nth-child(odd)    홀수 번째
:nth-child(even)   짝수 번째
:not(.class)       해당 선택자 제외

/* ── 가상 요소 ── */
::before           요소 앞에 콘텐츠 삽입
::after            요소 뒤에 콘텐츠 삽입
::placeholder      placeholder 스타일
::selection        텍스트 선택 시 스타일`,
          },
          { type: 'heading', text: '자주 쓰는 CSS 속성' },
          {
            type: 'code',
            language: 'css',
            code: `/* ── 박스 모델 ── */
width / height          너비 / 높이
max-width / min-width   최대 / 최소 너비
padding                 안쪽 여백
margin                  바깥 여백
border                  테두리
box-sizing              박스 크기 계산 방식

/* ── 배경 ── */
background-color        배경색
background-image        배경 이미지
background-size         cover | contain | 값
background-position     위치
background-repeat       반복 여부

/* ── 텍스트 ── */
color                   글자색
font-size               글자 크기
font-weight             글자 굵기 (400, 700 등)
font-family             글꼴
line-height             줄 높이
text-align              정렬 (left, center, right)
text-decoration         밑줄 등 (none, underline)
text-transform          대소문자 (uppercase 등)
letter-spacing          자간
word-spacing            단어 간격

/* ── 레이아웃 ── */
display                 block | flex | grid | inline | none
position                static | relative | absolute | fixed | sticky
top / right / bottom / left     위치 지정
z-index                 쌓임 순서
overflow                넘침 처리 (hidden, scroll, auto)
float                   요소 띄우기

/* ── Flexbox ── */
display: flex
flex-direction          row | column
justify-content         main축 정렬
align-items             cross축 정렬
flex-wrap               줄바꿈
gap                     간격
flex: 1                 남은 공간 채우기

/* ── Grid ── */
display: grid
grid-template-columns   열 정의
grid-template-rows      행 정의
grid-template-areas     영역 이름 배치
gap                     간격
grid-column             아이템 열 위치
grid-row                아이템 행 위치

/* ── 시각 효과 ── */
border-radius           둥근 모서리
box-shadow              그림자
opacity                 투명도 (0~1)
cursor                  커서 모양 (pointer 등)
transition              전환 애니메이션
animation               키프레임 애니메이션
transform               변형 (translate, scale, rotate)`,
          },
          { type: 'heading', text: 'CSS 단위 정리' },
          {
            type: 'list',
            items: [
              '`px` - 절대 단위, 고정 크기',
              '`%` - 부모 요소 기준 상대 크기',
              '`em` - 부모의 font-size 기준 (중첩 시 누적)',
              '`rem` - 루트(html)의 font-size 기준 (일관적)',
              '`vw` / `vh` - 뷰포트 너비/높이의 1%',
              '`fr` - Grid에서 남은 공간의 비율',
              '`ch` - 문자 "0"의 너비 (텍스트 폭 제한에 유용)',
            ],
          },
          {
            type: 'tip',
            text: '이 레퍼런스는 자주 참고하게 될 내용입니다. 모든 속성을 외울 필요는 없으며, 필요할 때 찾아보는 습관이 더 중요합니다. MDN Web Docs(developer.mozilla.org)는 가장 신뢰할 수 있는 HTML/CSS 레퍼런스입니다.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. React 시작하기
  // ─────────────────────────────────────────────
  {
    slug: 'react',
    title: 'React 시작하기',
    description: '컴포넌트 기반 UI 라이브러리 React 입문',
    category: 'web',
    color: 'bg-cyan-500',
    difficulty: 'beginner',
    objectives: [
      'JSX 문법과 컴포넌트 기반 UI 설계',
      'State, Props, 이벤트 핸들링',
      'useEffect와 주요 Hooks 활용',
      '컴포넌트 패턴과 Context API',
      'React Router와 실전 프로젝트',
    ],
    lessons: [
      // ── Lesson 2-a: React와 JSX ──
      {
        slug: 'jsx-basics',
        title: 'React와 JSX',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'React와 JSX 소개',
          },
          {
            type: 'text',
            text: 'React는 Meta(구 Facebook)가 만든 UI 라이브러리로, 컴포넌트 단위로 화면을 구성합니다. JSX(JavaScript XML)는 JavaScript 안에서 HTML과 유사한 문법을 작성할 수 있게 해주는 확장 문법입니다. JSX는 결국 `React.createElement()` 호출로 변환되지만, 훨씬 직관적으로 UI를 표현할 수 있습니다.',
          },
          {
            type: 'heading',
            text: 'JSX 기본 문법',
          },
          {
            type: 'text',
            text: 'JSX에서는 HTML과 비슷하지만 몇 가지 차이가 있습니다. `class` 대신 `className`을 사용하고, 모든 태그는 닫혀야 하며, JavaScript 표현식을 `{}`(중괄호)로 감싸서 삽입합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `function Greeting() {
  const name = '개발자';
  const today = new Date().toLocaleDateString('ko-KR');

  return (
    <div className="greeting">
      <h1>안녕하세요, {name}님!</h1>
      <p>오늘 날짜: {today}</p>
      <p>1 + 1 = {1 + 1}</p>
      <img src="/avatar.png" alt="프로필" />
    </div>
  );
}`,
          },
          {
            type: 'heading',
            text: '조건부 렌더링',
          },
          {
            type: 'text',
            text: 'JSX 안에서 조건에 따라 다른 UI를 보여줄 수 있습니다. 삼항 연산자(`? :`)나 논리 AND 연산자(`&&`)를 주로 사용합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `function UserStatus({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div>
      {/* 삼항 연산자: 참/거짓 두 경우 모두 렌더링 */}
      {isLoggedIn ? (
        <p>환영합니다!</p>
      ) : (
        <p>로그인해 주세요.</p>
      )}

      {/* && 연산자: 조건이 참일 때만 렌더링 */}
      {isLoggedIn && <button>로그아웃</button>}
    </div>
  );
}`,
          },
          {
            type: 'heading',
            text: '리스트 렌더링',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `function FruitList() {
  const fruits = ['사과', '바나나', '딸기', '포도'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`,
          },
          {
            type: 'tip',
            text: '리스트를 렌더링할 때 각 항목에 고유한 `key` prop을 반드시 지정해야 합니다. React는 `key`를 사용해 어떤 항목이 변경, 추가, 삭제되었는지 효율적으로 판단합니다. 배열 인덱스보다는 고유한 ID를 `key`로 사용하는 것이 좋습니다.',
          },
        ],
      },

      // ── Lesson 2-b: 컴포넌트와 Props ──
      {
        slug: 'components-props',
        title: '컴포넌트와 Props',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '컴포넌트란?',
          },
          {
            type: 'text',
            text: 'React에서 컴포넌트는 UI를 구성하는 독립적인 조각입니다. 레고 블록처럼 작은 컴포넌트를 조합하여 복잡한 화면을 만들 수 있습니다. 함수 컴포넌트는 JSX를 반환하는 JavaScript 함수이며, 이름은 반드시 대문자로 시작해야 합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `// 함수 컴포넌트 정의
function Button({ label }: { label: string }) {
  return (
    <button className="btn">{label}</button>
  );
}

// 컴포넌트 사용
function App() {
  return (
    <div>
      <Button label="저장" />
      <Button label="취소" />
    </div>
  );
}`,
          },
          {
            type: 'heading',
            text: 'Props 활용하기',
          },
          {
            type: 'text',
            text: 'Props(Properties)는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터입니다. 함수의 매개변수처럼 동작하며, 자식 컴포넌트 안에서는 읽기 전용입니다. 구조 분해 할당(destructuring)으로 깔끔하게 받을 수 있습니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `// Props 타입 정의
type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;  // 선택적 prop
};

// 기본값 설정과 구조 분해 할당
function ProfileCard({
  name,
  role,
  avatarUrl = '/default-avatar.png',
}: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// 사용 예시
function Team() {
  return (
    <div className="team">
      <ProfileCard name="김철수" role="프론트엔드 개발자" />
      <ProfileCard
        name="이영희"
        role="백엔드 개발자"
        avatarUrl="/avatars/lee.jpg"
      />
    </div>
  );
}`,
          },
          {
            type: 'heading',
            text: 'children Prop',
          },
          {
            type: 'text',
            text: '`children`은 컴포넌트의 여는 태그와 닫는 태그 사이에 넣은 내용을 전달받는 특별한 prop입니다. 레이아웃이나 래퍼 컴포넌트를 만들 때 유용합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// 사용: 태그 사이의 내용이 children으로 전달
function App() {
  return (
    <Card title="공지사항">
      <p>이번 주 금요일에 배포가 예정되어 있습니다.</p>
      <p>관련 문서를 확인해 주세요.</p>
    </Card>
  );
}`,
          },
          {
            type: 'tip',
            text: 'Props는 항상 부모에서 자식으로 한 방향(단방향)으로 흐릅니다. 자식이 부모의 데이터를 변경해야 할 때는 부모가 콜백 함수를 prop으로 전달하고, 자식이 그 함수를 호출하는 패턴을 사용합니다.',
          },
        ],
      },

      // ── Lesson 2-c: State와 이벤트 ──
      {
        slug: 'state-events',
        title: 'State와 이벤트',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'State란?',
          },
          {
            type: 'text',
            text: 'State(상태)는 컴포넌트 내부에서 관리되는 동적 데이터입니다. Props가 외부에서 전달받는 읽기 전용 데이터라면, State는 컴포넌트 스스로 변경할 수 있는 데이터입니다. State가 변경되면 React는 해당 컴포넌트를 자동으로 다시 렌더링합니다.',
          },
          {
            type: 'heading',
            text: 'useState 사용하기',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useState } from 'react';

function Counter() {
  // useState는 [현재 값, 변경 함수] 배열을 반환
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}`,
          },
          {
            type: 'heading',
            text: '이벤트 핸들링',
          },
          {
            type: 'text',
            text: 'React에서 이벤트는 camelCase로 작성합니다. HTML의 `onclick`은 React에서 `onClick`이 됩니다. 이벤트 핸들러에는 함수 자체를 전달해야 하며, 함수를 호출하면 안 됩니다(`onClick={handleClick}` O, `onClick={handleClick()}` X).',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // 폼 기본 제출 동작 방지
    console.log('로그인 시도:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이메일
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
        />
      </label>
      <label>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}`,
          },
          {
            type: 'heading',
            text: 'State 불변성',
          },
          {
            type: 'text',
            text: 'React의 state는 직접 수정하면 안 되고, 항상 새로운 값을 만들어 setter 함수에 전달해야 합니다. 배열이나 객체의 경우 스프레드 연산자(`...`)를 활용하여 새 참조를 생성합니다. 이를 **불변성(immutability)**이라고 하며, React가 변경을 감지하여 화면을 다시 렌더링하기 위해 필수적입니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    // 새 배열을 생성하여 전달 (불변성 유지)
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (index: number) => {
    // filter로 새 배열 생성
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="할 일 입력"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => removeTodo(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
          },
          {
            type: 'tip',
            text: '`todos.push(input)` 처럼 기존 배열을 직접 수정하면 React가 변경을 감지하지 못해 화면이 업데이트되지 않습니다. 항상 `setTodos([...todos, input])`처럼 새 배열을 만들어야 합니다. 객체도 마찬가지로 `setState({ ...prevState, key: newValue })` 패턴을 사용합니다.',
          },
        ],
      },
      {
        slug: 'useeffect-lifecycle',
        title: 'useEffect와 사이드 이펙트',
        duration: '20분',
        content: [
          { type: 'heading', text: 'useEffect란?' },
          {
            type: 'text',
            text: '`useEffect`는 컴포넌트가 렌더링된 후 실행되는 사이드 이펙트(데이터 fetching, DOM 조작, 구독 등)를 처리하는 Hook입니다. 의존성 배열로 실행 시점을 제어합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // 마운트 시 타이머 시작, 언마운트 시 정리
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 클린업 함수 — 컴포넌트 제거 시 실행
    return () => clearInterval(id);
  }, []); // 빈 배열 = 마운트 시 1회만 실행

  return <p>경과 시간: {seconds}초</p>;
}`,
          },
          { type: 'heading', text: '의존성 배열' },
          {
            type: 'list',
            items: [
              '`useEffect(fn)` — 매 렌더링마다 실행 (거의 사용 안 함)',
              '`useEffect(fn, [])` — 마운트 시 1회만 실행',
              '`useEffect(fn, [a, b])` — a 또는 b가 변경될 때 실행',
            ],
          },
          {
            type: 'code',
            language: 'tsx',
            code: `function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // userId가 변경될 때마다 데이터 다시 가져오기
  useEffect(() => {
    setLoading(true);
    fetch("/api/users/" + userId)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // userId 변경 시 재실행

  if (loading) return <p>로딩 중...</p>;
  if (!user) return <p>사용자를 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
          },
          { type: 'heading', text: '클린업 함수' },
          {
            type: 'text',
            text: 'useEffect에서 반환하는 함수는 클린업(정리) 함수입니다. 이벤트 리스너 해제, 타이머 정리, 구독 취소 등에 사용됩니다. 컴포넌트가 언마운트되거나 의존성이 변경되기 전에 실행됩니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // 클린업: 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <p>
      창 크기: {size.width} x {size.height}
    </p>
  );
}`,
          },
          {
            type: 'tip',
            text: 'React 18의 Strict Mode에서는 개발 환경에서 useEffect가 두 번 실행됩니다. 이는 클린업 함수가 올바르게 작동하는지 검증하기 위한 의도적 동작이며, 프로덕션에서는 한 번만 실행됩니다.',
          },
        ],
      },
      {
        slug: 'hooks-advanced',
        title: 'Hooks 활용하기',
        duration: '20분',
        content: [
          { type: 'heading', text: 'useRef' },
          {
            type: 'text',
            text: '`useRef`는 렌더링 사이에 값을 유지하되, 값이 변경되어도 리렌더링을 일으키지 않는 Hook입니다. DOM 요소에 접근하거나 이전 값을 저장할 때 사용합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  // 마운트 시 자동 포커스
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="자동 포커스" />;
}

// 렌더링 횟수 추적
function RenderCounter() {
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return <p>렌더링 횟수: {count.current}</p>;
}`,
          },
          { type: 'heading', text: 'useMemo와 useCallback' },
          {
            type: 'text',
            text: '`useMemo`는 비용이 큰 계산 결과를 메모이제이션하고, `useCallback`은 함수 참조를 메모이제이션합니다. 불필요한 재계산이나 자식 컴포넌트의 불필요한 리렌더링을 방지합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useState, useMemo, useCallback } from 'react';

function ExpensiveList({ items, query }: {
  items: string[];
  query: string;
}) {
  // 비용이 큰 필터링을 메모이제이션
  const filtered = useMemo(() => {
    console.log("필터링 실행");
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]); // items나 query 변경 시만 재계산

  // 콜백 함수 메모이제이션
  const handleClick = useCallback((item: string) => {
    console.log("선택:", item);
  }, []); // 의존성 없음 — 함수가 변경되지 않음

  return (
    <ul>
      {filtered.map(item => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}`,
          },
          { type: 'heading', text: '커스텀 Hook' },
          {
            type: 'text',
            text: '커스텀 Hook은 `use`로 시작하는 함수로, 여러 컴포넌트에서 재사용할 로직을 추출합니다. 내부에서 다른 Hook을 자유롭게 사용할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `// 커스텀 Hook: localStorage와 동기화
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// 사용
function Settings() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [lang, setLang] = useLocalStorage("lang", "ko");

  return (
    <div>
      <button onClick={() => setTheme(
        theme === "light" ? "dark" : "light"
      )}>
        테마: {theme}
      </button>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}`,
          },
          {
            type: 'tip',
            text: '`useMemo`와 `useCallback`은 성능 최적화 도구입니다. 모든 곳에 사용하면 오히려 코드 복잡도만 올라가므로, 실제 성능 문제가 있을 때만 적용하세요.',
          },
        ],
      },
      {
        slug: 'patterns-context',
        title: '컴포넌트 패턴과 Context',
        duration: '20분',
        content: [
          { type: 'heading', text: '컴포넌트 합성 패턴' },
          {
            type: 'text',
            text: 'React에서는 상속보다 합성(Composition)을 선호합니다. children prop, 렌더 프롭, 컴파운드 컴포넌트 패턴 등으로 유연한 UI를 설계합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `// 레이아웃 컴포넌트 — children 활용
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="h-16 border-b">헤더</header>
      <main className="p-8">{children}</main>
      <footer className="h-16 border-t">푸터</footer>
    </div>
  );
}

// 슬롯 패턴 — 여러 영역을 prop으로 전달
function Dialog({
  title,
  content,
  footer,
}: {
  title: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="dialog">
      <div className="dialog-title">{title}</div>
      <div className="dialog-content">{content}</div>
      <div className="dialog-footer">{footer}</div>
    </div>
  );
}

// 사용
<Dialog
  title={<h2>확인</h2>}
  content={<p>정말 삭제하시겠습니까?</p>}
  footer={
    <>
      <button>취소</button>
      <button>삭제</button>
    </>
  }
/>`,
          },
          { type: 'heading', text: 'Context API' },
          {
            type: 'text',
            text: 'Context는 prop drilling(깊은 컴포넌트까지 props를 전달하는 문제) 없이 데이터를 공유하는 방법입니다. 테마, 인증 정보, 언어 설정 등 전역 상태에 적합합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { createContext, useContext, useState } from 'react';

// 1. Context 생성
type Theme = 'light' | 'dark';
const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: 'light', toggle: () => {} });

// 2. Provider 컴포넌트
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 커스텀 Hook으로 편리하게 사용
function useTheme() {
  return useContext(ThemeContext);
}

// 4. 소비 컴포넌트 — 어디서든 사용 가능
function ThemeButton() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      현재 테마: {theme === 'light' ? '라이트' : '다크'}
    </button>
  );
}

// 5. App에서 Provider로 감싸기
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>앱</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}`,
          },
          { type: 'heading', text: 'useReducer' },
          {
            type: 'text',
            text: '`useReducer`는 복잡한 상태 로직을 관리할 때 `useState`보다 적합합니다. Redux와 유사한 패턴으로, action을 dispatch하면 reducer 함수가 새 상태를 반환합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useReducer } from 'react';

type State = { count: number };
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set'; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset':     return { count: 0 };
    case 'set':       return { count: action.payload };
    default:          return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>카운트: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>초기화</button>
      <button onClick={() => dispatch({ type: 'set', payload: 100 })}>
        100으로 설정
      </button>
    </div>
  );
}`,
          },
          {
            type: 'tip',
            text: 'Context + useReducer 조합은 소규모 앱에서 Redux를 대체할 수 있습니다. 하지만 Context 값이 변경되면 해당 Context를 구독하는 모든 컴포넌트가 리렌더링되므로, 대규모 앱에서는 상태 관리 라이브러리(Zustand, Jotai 등)를 고려하세요.',
          },
        ],
      },
      {
        slug: 'routing',
        title: 'React Router',
        duration: '20분',
        content: [
          { type: 'heading', text: 'React Router 기본' },
          {
            type: 'text',
            text: 'React Router는 SPA(Single Page Application)에서 URL에 따라 다른 컴포넌트를 보여주는 라우팅 라이브러리입니다. 페이지 전환 없이 URL이 변경되는 클라이언트 사이드 라우팅을 구현합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import {
  BrowserRouter, Routes, Route, Link, NavLink
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* NavLink: 현재 경로와 일치하면 active 클래스 */}
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "font-bold" : ""
        }>홈</NavLink>
        <NavLink to="/about">소개</NavLink>
        <NavLink to="/users">사용자</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
          },
          { type: 'heading', text: '동적 라우팅과 Params' },
          {
            type: 'text',
            text: '`:id`처럼 경로에 변수를 포함시키면 동적 라우팅이 됩니다. `useParams`로 URL 파라미터를 읽고, `useNavigate`로 프로그래밍 방식의 이동을 합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get("tab") || "profile";

  return (
    <div>
      <h2>사용자 #{id}</h2>
      <p>현재 탭: {tab}</p>

      <button onClick={() => navigate("/users")}>
        목록으로 돌아가기
      </button>
      <button onClick={() => navigate(-1)}>
        뒤로가기
      </button>
    </div>
  );
}

// 중첩 라우트
function Dashboard() {
  return (
    <div>
      <h1>대시보드</h1>
      <nav>
        <Link to="stats">통계</Link>
        <Link to="settings">설정</Link>
      </nav>
      {/* 중첩된 Route가 여기에 렌더링됨 */}
      <Outlet />
    </div>
  );
}

// App에서
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>`,
          },
          { type: 'heading', text: '보호된 라우트' },
          {
            type: 'text',
            text: '인증이 필요한 페이지는 보호된 라우트(Protected Route) 패턴으로 구현합니다. 로그인하지 않은 사용자를 로그인 페이지로 리다이렉트합니다.',
          },
          {
            type: 'code',
            language: 'tsx',
            code: `import { Navigate, Outlet } from 'react-router-dom';

// 인증 상태를 확인하는 래퍼 컴포넌트
function ProtectedRoute() {
  const { user } = useAuth(); // 커스텀 인증 Hook

  if (!user) {
    // 로그인 페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

// 사용
<Routes>
  <Route path="/login" element={<Login />} />

  {/* 보호된 영역 */}
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
</Routes>`,
          },
          {
            type: 'tip',
            text: 'Next.js를 사용하면 파일 시스템 기반 라우팅이 자동으로 제공됩니다. `app/about/page.tsx` 파일을 만들면 `/about` 경로가 자동 생성되므로, React Router 설정이 필요 없습니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 메모 앱 만들기',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 구조' },
          {
            type: 'text',
            text: '지금까지 배운 React의 핵심 개념(컴포넌트, State, Props, Hooks, Context)을 활용해 메모 앱을 만듭니다.',
          },
          {
            type: 'list',
            items: [
              '메모 추가, 수정, 삭제 기능',
              '검색 필터링',
              'Context로 상태 관리',
              'localStorage 영속화',
              '컴포넌트 분리와 타입 안전성',
            ],
          },
          { type: 'heading', text: '타입과 Context 정의' },
          {
            type: 'code',
            language: 'tsx',
            code: `// types.ts
type Memo = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

// MemoContext.tsx
import { createContext, useContext, useReducer, useEffect } from 'react';

type Action =
  | { type: 'ADD'; payload: { title: string; content: string } }
  | { type: 'UPDATE'; payload: { id: string; title: string; content: string } }
  | { type: 'DELETE'; payload: string }
  | { type: 'LOAD'; payload: Memo[] };

function memoReducer(state: Memo[], action: Action): Memo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: crypto.randomUUID(),
        ...action.payload,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }];
    case 'UPDATE':
      return state.map(m =>
        m.id === action.payload.id
          ? { ...m, ...action.payload, updatedAt: Date.now() }
          : m
      );
    case 'DELETE':
      return state.filter(m => m.id !== action.payload);
    case 'LOAD':
      return action.payload;
    default:
      return state;
  }
}`,
          },
          { type: 'heading', text: 'Provider 구현' },
          {
            type: 'code',
            language: 'tsx',
            code: `const MemoContext = createContext<{
  memos: Memo[];
  dispatch: React.Dispatch<Action>;
}>({ memos: [], dispatch: () => {} });

export function MemoProvider({ children }: { children: React.ReactNode }) {
  const [memos, dispatch] = useReducer(memoReducer, []);

  // 초기 로드
  useEffect(() => {
    const saved = localStorage.getItem('memos');
    if (saved) {
      dispatch({ type: 'LOAD', payload: JSON.parse(saved) });
    }
  }, []);

  // 변경 시 저장
  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  return (
    <MemoContext.Provider value={{ memos, dispatch }}>
      {children}
    </MemoContext.Provider>
  );
}

export const useMemos = () => useContext(MemoContext);`,
          },
          { type: 'heading', text: '메모 목록 컴포넌트' },
          {
            type: 'code',
            language: 'tsx',
            code: `function MemoList() {
  const { memos, dispatch } = useMemos();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() =>
    memos
      .filter(m =>
        m.title.includes(query) || m.content.includes(query)
      )
      .sort((a, b) => b.updatedAt - a.updatedAt),
    [memos, query]
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="메모 검색..."
      />
      <p>{filtered.length}개의 메모</p>

      {filtered.map(memo => (
        <div key={memo.id} className="memo-card">
          <h3>{memo.title}</h3>
          <p>{memo.content.slice(0, 100)}</p>
          <small>
            {new Date(memo.updatedAt).toLocaleString('ko-KR')}
          </small>
          <button onClick={() =>
            dispatch({ type: 'DELETE', payload: memo.id })
          }>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}`,
          },
          { type: 'heading', text: '메모 작성 폼' },
          {
            type: 'code',
            language: 'tsx',
            code: `function MemoForm({ editMemo }: { editMemo?: Memo }) {
  const { dispatch } = useMemos();
  const [title, setTitle] = useState(editMemo?.title || '');
  const [content, setContent] = useState(editMemo?.content || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editMemo) {
      dispatch({
        type: 'UPDATE',
        payload: { id: editMemo.id, title, content },
      });
    } else {
      dispatch({
        type: 'ADD',
        payload: { title, content },
      });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="제목"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
        rows={5}
      />
      <button type="submit">
        {editMemo ? '수정' : '추가'}
      </button>
    </form>
  );
}

// App.tsx
function App() {
  return (
    <MemoProvider>
      <div className="app">
        <h1>메모 앱</h1>
        <MemoForm />
        <MemoList />
      </div>
    </MemoProvider>
  );
}`,
          },
          {
            type: 'tip',
            text: '이 프로젝트에서 사용한 패턴(Context + useReducer + 커스텀 Hook)은 중소 규모 React 앱에서 가장 많이 사용되는 상태 관리 패턴입니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'React 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: 'Hooks 요약' },
          {
            type: 'code',
            language: 'tsx',
            code: `// ─── 상태 관리 ───
const [state, setState] = useState(initialValue);
const [state, dispatch] = useReducer(reducer, initialState);

// ─── 사이드 이펙트 ───
useEffect(() => {
  // 실행할 로직
  return () => { /* 클린업 */ };
}, [dependencies]);

// ─── 참조 ───
const ref = useRef(initialValue);    // DOM 접근 or 값 유지
ref.current;                         // 현재 값

// ─── 성능 최적화 ───
const memoized = useMemo(() => compute(a, b), [a, b]);
const fn = useCallback((x) => doSomething(x, y), [y]);

// ─── Context ───
const ctx = createContext(defaultValue);
const value = useContext(ctx);

// ─── 기타 ───
const id = useId();                  // 고유 ID 생성
useLayoutEffect(() => {}, []);       // DOM 페인트 전 실행`,
          },
          { type: 'heading', text: 'JSX 규칙' },
          {
            type: 'list',
            items: [
              '반환할 JSX는 하나의 루트 요소로 감싸야 함 — `<div>` 또는 `<>`(Fragment)',
              '`class` → `className`, `for` → `htmlFor`',
              '모든 태그는 닫혀야 함 — `<img />`, `<br />`, `<input />`',
              'JavaScript 표현식은 `{중괄호}`로 감싸기',
              '인라인 스타일은 객체로: `style={{ color: "red" }}`',
              '이벤트는 camelCase: `onClick`, `onChange`, `onSubmit`',
              '조건부 렌더링: `{조건 && <요소>}` 또는 `{조건 ? A : B}`',
              '리스트 렌더링: `array.map(item => <El key={id} />)`',
            ],
          },
          { type: 'heading', text: '컴포넌트 패턴' },
          {
            type: 'code',
            language: 'tsx',
            code: `// ─── 기본 컴포넌트 ───
function Component({ prop1, prop2 }: Props) {
  return <div>{prop1}</div>;
}

// ─── 제어 컴포넌트 (Controlled) ───
function Input({ value, onChange }: {
  value: string;
  onChange: (v: string) => void;
}) {
  return <input value={value}
    onChange={e => onChange(e.target.value)} />;
}

// ─── 조건부 렌더링 패턴 ───
// 로딩 상태
if (loading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;
return <Content data={data} />;

// ─── 리스트 + 빈 상태 ───
{items.length === 0 ? (
  <EmptyState message="항목이 없습니다" />
) : (
  items.map(item => <Item key={item.id} {...item} />)
)}`,
          },
          { type: 'heading', text: '자주 사용하는 이벤트 타입' },
          {
            type: 'list',
            items: [
              '`React.MouseEvent` — onClick, onDoubleClick',
              '`React.ChangeEvent<HTMLInputElement>` — onChange (input)',
              '`React.ChangeEvent<HTMLSelectElement>` — onChange (select)',
              '`React.FormEvent` — onSubmit',
              '`React.KeyboardEvent` — onKeyDown, onKeyUp',
              '`React.FocusEvent` — onFocus, onBlur',
              '`React.DragEvent` — onDrag, onDrop',
            ],
          },
          { type: 'heading', text: 'Next.js App Router 핵심' },
          {
            type: 'code',
            language: 'tsx',
            code: `// app/page.tsx         →  / (홈)
// app/about/page.tsx   →  /about
// app/blog/[id]/page.tsx → /blog/:id (동적)

// 서버 컴포넌트 (기본) — async 가능, 직접 DB 접근 가능
export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}

// 클라이언트 컴포넌트 — 상호작용, Hook 사용
'use client';
import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// 레이아웃 — 하위 페이지에 공통 적용
// app/layout.tsx
export default function Layout({ children }) {
  return (
    <html>
      <body>
        <nav>네비게이션</nav>
        {children}
      </body>
    </html>
  );
}`,
          },
          {
            type: 'tip',
            text: 'React 공식 문서(react.dev)는 최신 React 패턴과 모범 사례를 상세히 설명합니다. 특히 "Learn" 섹션은 단계별로 잘 구성되어 있어 추가 학습에 추천합니다.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Vue.js 시작하기
  // ─────────────────────────────────────────────
  {
    slug: 'vue',
    title: 'Vue.js 시작하기',
    description: '직관적인 프로그레시브 프레임워크 Vue 입문',
    category: 'web',
    color: 'bg-emerald-500',
    difficulty: 'beginner',
    objectives: [
      'Vue 템플릿 문법과 반응성 시스템',
      '컴포넌트, Props, Emit, Slots',
      '폼 처리와 Composables 패턴',
      'Vue Router와 Pinia 상태 관리',
      '실전 프로젝트와 디렉티브 레퍼런스',
    ],
    lessons: [
      // ── Lesson 3-a: Vue 기본과 템플릿 ──
      {
        slug: 'vue-basics',
        title: 'Vue 기본과 템플릿',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Vue.js란?',
          },
          {
            type: 'text',
            text: 'Vue.js는 사용자 인터페이스를 만들기 위한 프로그레시브 JavaScript 프레임워크입니다. "프로그레시브"란 필요한 만큼 점진적으로 도입할 수 있다는 의미입니다. 간단한 페이지에는 CDN으로 가볍게, 대규모 애플리케이션에는 빌드 도구와 함께 본격적으로 사용할 수 있습니다.',
          },
          {
            type: 'heading',
            text: 'Vue 앱 생성하기',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `import { createApp, ref } from 'vue';

// Vue 앱 인스턴스 생성
const app = createApp({
  setup() {
    const message = ref('안녕하세요, Vue!');
    const count = ref(0);

    return { message, count };
  },
});

// #app 요소에 마운트
app.mount('#app');`,
          },
          {
            type: 'heading',
            text: '템플릿 문법',
          },
          {
            type: 'text',
            text: 'Vue는 HTML 기반 템플릿 문법을 사용합니다. 이중 중괄호 `{{ }}`(Mustache 문법)로 데이터를 바인딩하고, 디렉티브(`v-` 접두사)로 DOM에 반응적 동작을 부여합니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<template>
  <div>
    <!-- 텍스트 보간 -->
    <h1>{{ message }}</h1>
    <p>카운트: {{ count }}</p>

    <!-- v-bind: 속성 바인딩 (축약 :) -->
    <img :src="imageUrl" :alt="imageDesc" />
    <a :href="linkUrl" :class="{ active: isActive }">링크</a>

    <!-- v-on: 이벤트 바인딩 (축약 @) -->
    <button @click="count++">+1</button>
    <button @click="handleReset">초기화</button>

    <!-- v-if: 조건부 렌더링 -->
    <p v-if="count > 10">10을 넘었습니다!</p>
    <p v-else-if="count > 5">5를 넘었습니다.</p>
    <p v-else>아직 5 이하입니다.</p>

    <!-- v-for: 리스트 렌더링 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>`,
          },
          {
            type: 'list',
            items: [
              '`{{ }}` - 텍스트 보간, JavaScript 표현식 사용 가능',
              '`v-bind` (`:`) - HTML 속성에 데이터 바인딩',
              '`v-on` (`@`) - DOM 이벤트 리스너 등록',
              '`v-if` / `v-else-if` / `v-else` - 조건부 렌더링',
              '`v-for` - 배열이나 객체를 순회하며 렌더링',
            ],
          },
          {
            type: 'tip',
            text: '`v-if`는 조건이 거짓일 때 DOM에서 요소를 완전히 제거합니다. 자주 토글되는 요소에는 CSS의 `display`만 전환하는 `v-show`가 더 효율적입니다. `v-for`와 `v-if`를 같은 요소에 함께 쓰는 것은 피해야 합니다. 필요하다면 `<template>` 래퍼를 사용하세요.',
          },
        ],
      },

      // ── Lesson 3-b: 반응성과 computed ──
      {
        slug: 'reactivity',
        title: '반응성과 computed',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Vue의 반응성 시스템',
          },
          {
            type: 'text',
            text: 'Vue의 핵심은 반응성(Reactivity) 시스템입니다. 데이터가 변경되면 이를 사용하는 모든 곳(템플릿, computed, watcher 등)이 자동으로 업데이트됩니다. Composition API에서는 `ref()`와 `reactive()`를 사용하여 반응형 데이터를 선언합니다.',
          },
          {
            type: 'heading',
            text: 'ref()와 reactive()',
          },
          {
            type: 'text',
            text: '`ref()`는 원시 값(문자열, 숫자 등)을 반응형으로 만들며, `.value`로 접근합니다. `reactive()`는 객체 자체를 반응형으로 만들어 `.value` 없이 직접 속성에 접근합니다. 템플릿에서는 `ref`도 자동 언래핑되어 `.value` 없이 사용할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import { ref, reactive } from 'vue';

// ref: 원시 값 감싸기 (.value로 접근)
const count = ref(0);
const name = ref('Vue 학습자');

// reactive: 객체 자체를 반응형으로
const user = reactive({
  email: 'user@example.com',
  age: 25,
  settings: {
    theme: 'dark',
    language: 'ko',
  },
});

function increment() {
  count.value++;        // ref는 .value 필요
}

function updateEmail(newEmail: string) {
  user.email = newEmail; // reactive는 직접 접근
}
</script>

<template>
  <div>
    <!-- 템플릿에서는 ref도 .value 불필요 -->
    <p>{{ name }}님의 카운트: {{ count }}</p>
    <p>이메일: {{ user.email }}</p>
    <button @click="increment">증가</button>
  </div>
</template>`,
          },
          {
            type: 'heading',
            text: 'computed()',
          },
          {
            type: 'text',
            text: '`computed()`는 다른 반응형 데이터로부터 파생되는 값을 선언합니다. 의존하는 데이터가 변경될 때만 다시 계산되며, 결과가 캐싱됩니다. 동일한 로직을 메서드로 작성할 수도 있지만, `computed`는 의존성이 바뀌지 않으면 이전 결과를 재사용하므로 더 효율적입니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import { ref, computed } from 'vue';

const items = ref([
  { name: '사과', price: 3000, quantity: 2 },
  { name: '바나나', price: 1500, quantity: 5 },
  { name: '딸기', price: 5000, quantity: 1 },
]);

// computed: 의존 데이터가 바뀔 때만 재계산
const totalPrice = computed(() => {
  return items.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const formattedTotal = computed(() => {
  return totalPrice.value.toLocaleString('ko-KR') + '원';
});

const expensiveItems = computed(() => {
  return items.value.filter((item) => item.price >= 3000);
});
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      {{ item.name }}: {{ item.price }}원 x {{ item.quantity }}개
    </li>
  </ul>
  <p>합계: {{ formattedTotal }}</p>
  <p>3000원 이상 품목: {{ expensiveItems.length }}개</p>
</template>`,
          },
          {
            type: 'heading',
            text: 'watch()와 watchEffect()',
          },
          {
            type: 'text',
            text: '`watch()`는 특정 반응형 데이터의 변경을 감시하여 부수 효과(side effect)를 실행합니다. API 호출이나 로컬 스토리지 저장 같은 작업에 적합합니다. `watchEffect()`는 콜백 내부에서 사용하는 모든 반응형 데이터를 자동으로 추적합니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

const searchQuery = ref('');
const selectedCategory = ref('all');

// watch: 특정 대상을 명시적으로 감시
watch(searchQuery, (newValue, oldValue) => {
  console.log("검색어 변경: " + oldValue + " → " + newValue);
  // 예: 디바운싱 후 API 호출
});

// 여러 소스를 동시에 감시
watch([searchQuery, selectedCategory], ([newQuery, newCat]) => {
  console.log("필터 변경: " + newQuery + ", " + newCat);
});

// watchEffect: 내부에서 사용하는 반응형 데이터를 자동 추적
watchEffect(() => {
  // searchQuery와 selectedCategory가 자동으로 추적됨
  console.log("현재 필터: " + searchQuery.value + ", " + selectedCategory.value);
});
</script>`,
          },
          {
            type: 'tip',
            text: '단순히 데이터를 변환하여 표시하는 경우에는 `computed`를 사용하세요. API 호출, 타이머 설정, DOM 직접 조작 등 부수 효과가 필요한 경우에만 `watch` 또는 `watchEffect`를 사용합니다. 불필요한 watcher는 성능 저하의 원인이 될 수 있습니다.',
          },
        ],
      },

      // ── Lesson 3-c: 컴포넌트와 Props ──
      {
        slug: 'vue-components',
        title: '컴포넌트와 Props',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Vue 컴포넌트 정의하기',
          },
          {
            type: 'text',
            text: 'Vue에서 컴포넌트는 재사용 가능한 UI 조각입니다. 싱글 파일 컴포넌트(SFC, `.vue` 파일)에서는 `<template>`, `<script>`, `<style>` 세 블록으로 구성됩니다. `<script setup>` 문법을 사용하면 `defineComponent` 없이도 간결하게 컴포넌트를 작성할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- AlertBox.vue -->
<script setup lang="ts">
// defineProps로 props 선언
const props = defineProps<{
  title: string;
  type?: 'info' | 'warning' | 'error';
}>();

// 기본값이 필요하면 withDefaults 사용
const { type } = withDefaults(defineProps<{
  title: string;
  type?: 'info' | 'warning' | 'error';
}>(), {
  type: 'info',
});
</script>

<template>
  <div :class="['alert', 'alert-' + type]">
    <strong>{{ title }}</strong>
    <slot />  <!-- 부모가 전달한 내용이 여기에 렌더링 -->
  </div>
</template>

<style scoped>
.alert {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
}
.alert-info { background-color: #e0f2fe; color: #0c4a6e; }
.alert-warning { background-color: #fef3c7; color: #92400e; }
.alert-error { background-color: #fee2e2; color: #991b1b; }
</style>`,
          },
          {
            type: 'heading',
            text: 'emit으로 자식 -> 부모 통신',
          },
          {
            type: 'text',
            text: 'Props가 부모에서 자식으로 데이터를 전달하는 것이라면, `emit`은 자식이 부모에게 이벤트를 발생시켜 통신하는 방법입니다. `defineEmits`로 발생시킬 이벤트를 선언하고, 부모에서 `@이벤트명`으로 수신합니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- SearchInput.vue (자식 컴포넌트) -->
<script setup lang="ts">
const emit = defineEmits<{
  search: [query: string];
  clear: [];
}>();

const query = ref('');

function handleSearch() {
  emit('search', query.value);
}

function handleClear() {
  query.value = '';
  emit('clear');
}
</script>

<template>
  <div class="search-input">
    <input
      v-model="query"
      placeholder="검색어 입력"
      @keyup.enter="handleSearch"
    />
    <button @click="handleSearch">검색</button>
    <button @click="handleClear">초기화</button>
  </div>
</template>`,
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- App.vue (부모 컴포넌트) -->
<script setup lang="ts">
import SearchInput from './SearchInput.vue';
import { ref } from 'vue';

const results = ref<string[]>([]);

function onSearch(query: string) {
  console.log('검색어:', query);
  // API 호출 등 검색 로직 실행
}

function onClear() {
  results.value = [];
}
</script>

<template>
  <div>
    <SearchInput @search="onSearch" @clear="onClear" />
    <ul>
      <li v-for="item in results" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>`,
          },
          {
            type: 'heading',
            text: 'Slots과 Provide/Inject',
          },
          {
            type: 'text',
            text: '`slot`은 부모가 자식 컴포넌트 내부에 콘텐츠를 삽입할 수 있게 합니다. `provide`/`inject`는 깊이 중첩된 컴포넌트 간에 props를 일일이 전달하지 않고도 데이터를 공유하는 방법입니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- 부모: provide로 데이터 제공 -->
<script setup lang="ts">
import { provide, ref } from 'vue';

const theme = ref<'light' | 'dark'>('light');

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}

// 'theme' 키로 데이터 제공 (자손 컴포넌트 어디서든 접근 가능)
provide('theme', { theme, toggleTheme });
</script>

<!-- 자손 컴포넌트: inject로 데이터 주입 -->
<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';

const { theme, toggleTheme } = inject<{
  theme: Ref<'light' | 'dark'>;
  toggleTheme: () => void;
}>('theme')!;
</script>

<template>
  <div :class="theme">
    <p>현재 테마: {{ theme }}</p>
    <button @click="toggleTheme">테마 전환</button>
  </div>
</template>`,
          },
          {
            type: 'tip',
            text: '`provide`/`inject`는 전역 상태 관리의 간단한 대안입니다. 하지만 대규모 애플리케이션에서는 데이터 흐름을 추적하기 어려워질 수 있으므로, 복잡한 상태 관리가 필요하다면 Pinia와 같은 전용 상태 관리 라이브러리를 사용하는 것이 좋습니다.',
          },
        ],
      },
      {
        slug: 'forms-vmodel',
        title: '폼 처리와 v-model',
        duration: '20분',
        content: [
          { type: 'heading', text: 'v-model 양방향 바인딩' },
          {
            type: 'text',
            text: '`v-model`은 폼 입력과 데이터를 양방향으로 연결하는 디렉티브입니다. 입력값이 변경되면 데이터가 자동 업데이트되고, 데이터가 변경되면 입력 필드도 함께 갱신됩니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const age = ref(20);
const agree = ref(false);
const gender = ref('');
const hobbies = ref<string[]>([]);
const bio = ref('');
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <!-- 텍스트 입력 -->
    <input v-model="name" placeholder="이름" />
    <input v-model="email" type="email" placeholder="이메일" />

    <!-- 숫자 (자동 변환) -->
    <input v-model.number="age" type="number" />

    <!-- 체크박스: 단일 (boolean) -->
    <label>
      <input v-model="agree" type="checkbox" /> 약관 동의
    </label>

    <!-- 체크박스: 다중 (배열) -->
    <label><input v-model="hobbies" type="checkbox" value="독서" /> 독서</label>
    <label><input v-model="hobbies" type="checkbox" value="코딩" /> 코딩</label>
    <label><input v-model="hobbies" type="checkbox" value="운동" /> 운동</label>

    <!-- 라디오 버튼 -->
    <label><input v-model="gender" type="radio" value="male" /> 남성</label>
    <label><input v-model="gender" type="radio" value="female" /> 여성</label>

    <!-- textarea -->
    <textarea v-model="bio" placeholder="자기소개"></textarea>

    <button type="submit" :disabled="!agree">가입</button>
  </form>
</template>`,
          },
          { type: 'heading', text: 'v-model 수식어' },
          {
            type: 'list',
            items: [
              '`v-model.lazy` — input 대신 change 이벤트 시 동기화 (포커스를 벗어날 때)',
              '`v-model.number` — 입력값을 자동으로 숫자로 변환',
              '`v-model.trim` — 앞뒤 공백 자동 제거',
            ],
          },
          { type: 'heading', text: '컴포넌트에서 v-model' },
          {
            type: 'text',
            text: '커스텀 컴포넌트에서도 `v-model`을 지원할 수 있습니다. `defineModel()` (Vue 3.4+)을 사용하면 간단하게 구현됩니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- RatingInput.vue -->
<script setup lang="ts">
// defineModel: v-model 바인딩을 간단하게 구현
const rating = defineModel<number>({ default: 0 });
</script>

<template>
  <div class="rating">
    <button
      v-for="n in 5"
      :key="n"
      @click="rating = n"
      :class="{ active: n <= rating }"
    >
      {{ n <= rating ? '★' : '☆' }}
    </button>
    <span>{{ rating }}점</span>
  </div>
</template>

<!-- 부모에서 사용 -->
<script setup lang="ts">
import RatingInput from './RatingInput.vue';
import { ref } from 'vue';

const score = ref(3);
</script>

<template>
  <RatingInput v-model="score" />
  <p>선택한 점수: {{ score }}</p>
</template>`,
          },
          {
            type: 'tip',
            text: 'Vue 3.4 이전에는 커스텀 v-model을 구현하려면 `modelValue` prop과 `update:modelValue` emit을 수동으로 정의해야 했습니다. `defineModel()`은 이 보일러플레이트를 제거해줍니다.',
          },
        ],
      },
      {
        slug: 'lifecycle-composables',
        title: '라이프사이클과 Composables',
        duration: '20분',
        content: [
          { type: 'heading', text: '컴포넌트 라이프사이클' },
          {
            type: 'text',
            text: 'Vue 컴포넌트는 생성 → 마운트 → 업데이트 → 언마운트 순서의 라이프사이클을 거칩니다. Composition API에서는 `onMounted`, `onUpdated`, `onUnmounted` 등의 훅으로 각 단계에 로직을 삽입합니다.',
          },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import {
  ref, onMounted, onUpdated, onUnmounted, onBeforeUnmount
} from 'vue';

const data = ref(null);
const timer = ref<number | null>(null);

// 마운트 후 — DOM에 접근 가능, API 호출 등
onMounted(() => {
  console.log('컴포넌트가 DOM에 마운트됨');
  fetchData();

  timer.value = window.setInterval(() => {
    console.log('폴링 중...');
  }, 5000);
});

// 업데이트 후
onUpdated(() => {
  console.log('반응형 데이터 변경으로 DOM 업데이트됨');
});

// 언마운트 전 — 정리 작업
onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
  console.log('타이머 정리 완료');
});

async function fetchData() {
  const res = await fetch('/api/data');
  data.value = await res.json();
}
</script>`,
          },
          { type: 'heading', text: 'Composables (커스텀 합성 함수)' },
          {
            type: 'text',
            text: 'Composable은 Composition API를 활용해 재사용 가능한 상태 로직을 추출하는 함수입니다. React의 커스텀 Hook과 유사한 패턴으로, `use` 접두사를 붙여 이름짓는 것이 관례입니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// composables/useFetch.ts
import { ref, watchEffect } from 'vue';

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(true);

  async function execute() {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP " + res.status);
      data.value = await res.json();
    } catch (e: any) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }

  execute();

  return { data, error, loading, refetch: execute };
}`,
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- 컴포넌트에서 composable 사용 -->
<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';

type User = { id: number; name: string; email: string };
const { data: users, loading, error } = useFetch<User[]>('/api/users');
</script>

<template>
  <div v-if="loading">로딩 중...</div>
  <div v-else-if="error">에러: {{ error }}</div>
  <ul v-else>
    <li v-for="user in users" :key="user.id">
      {{ user.name }} ({{ user.email }})
    </li>
  </ul>
</template>`,
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// composables/useLocalStorage.ts
import { ref, watch } from 'vue';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const stored = localStorage.getItem(key);
  const data = ref<T>(stored ? JSON.parse(stored) : defaultValue);

  watch(data, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal));
  }, { deep: true });

  return data;
}

// 사용
const settings = useLocalStorage('settings', {
  theme: 'light',
  fontSize: 14,
});`,
          },
          {
            type: 'tip',
            text: 'Composable 안에서 `onMounted`, `watch` 등 라이프사이클 훅과 반응형 API를 자유롭게 사용할 수 있습니다. 각 컴포넌트에서 호출될 때마다 독립적인 상태가 생성되므로 상태 충돌 걱정이 없습니다.',
          },
        ],
      },
      {
        slug: 'vue-router',
        title: 'Vue Router',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Vue Router 설정' },
          {
            type: 'text',
            text: 'Vue Router는 Vue.js 공식 라우팅 라이브러리입니다. URL에 따라 다른 컴포넌트를 보여주는 SPA 라우팅을 구현합니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/users/:id',
      name: 'user-detail',
      component: () => import('@/views/UserDetail.vue'),
      props: true, // params를 props로 전달
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;`,
          },
          { type: 'heading', text: '네비게이션과 파라미터' },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();     // 현재 라우트 정보
const router = useRouter();   // 프로그래밍 방식 이동

// URL 파라미터 읽기: /users/42 → id = "42"
const userId = route.params.id;

// 쿼리 파라미터: /search?q=vue → q = "vue"
const query = route.query.q;

// 프로그래밍 방식 이동
function goToUser(id: number) {
  router.push({ name: 'user-detail', params: { id } });
}

function goBack() {
  router.back();
}
</script>

<template>
  <nav>
    <!-- 선언적 네비게이션 -->
    <RouterLink to="/">홈</RouterLink>
    <RouterLink :to="{ name: 'about' }">소개</RouterLink>

    <!-- active 클래스 자동 추가됨 -->
    <RouterLink
      to="/users"
      active-class="font-bold text-blue-600"
    >
      사용자
    </RouterLink>
  </nav>

  <!-- 매칭된 컴포넌트가 여기에 렌더링 -->
  <RouterView />
</template>`,
          },
          { type: 'heading', text: '네비게이션 가드' },
          {
            type: 'text',
            text: '네비게이션 가드는 라우트 이동 전에 실행되는 훅으로, 인증 확인이나 페이지 접근 제어에 사용됩니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 전역 가드 — 모든 라우트 이동 전 실행
router.beforeEach((to, from) => {
  const isAuthenticated = checkAuth();

  if (to.meta.requiresAuth && !isAuthenticated) {
    // 로그인 페이지로 리다이렉트
    return { name: 'login', query: { redirect: to.fullPath } };
  }
});

// 라우트별 가드
{
  path: '/admin',
  component: AdminPanel,
  meta: { requiresAuth: true, role: 'admin' },
  beforeEnter: (to) => {
    const user = getUser();
    if (user?.role !== 'admin') {
      return { name: 'forbidden' };
    }
  },
}`,
          },
          {
            type: 'tip',
            text: '`() => import("./View.vue")` 형태의 동적 import를 사용하면 각 라우트의 컴포넌트가 별도 청크로 분리되어, 초기 로딩 시간을 크게 줄일 수 있습니다 (코드 스플리팅).',
          },
        ],
      },
      {
        slug: 'pinia',
        title: 'Pinia 상태 관리',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Pinia란?' },
          {
            type: 'text',
            text: 'Pinia는 Vue.js 공식 상태 관리 라이브러리입니다. Vuex의 후속으로, TypeScript 지원이 우수하고 Composition API와 자연스럽게 통합됩니다. Store를 정의하면 어떤 컴포넌트에서든 접근할 수 있는 전역 상태를 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// stores/counter.ts — Setup Store 방식 (Composition API 스타일)
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0);

  // getters (computed)
  const doubleCount = computed(() => count.value * 2);
  const isPositive = computed(() => count.value > 0);

  // actions (함수)
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function reset() {
    count.value = 0;
  }

  async function incrementAsync() {
    await new Promise(r => setTimeout(r, 1000));
    count.value++;
  }

  return {
    count, doubleCount, isPositive,
    increment, decrement, reset, incrementAsync,
  };
});`,
          },
          { type: 'heading', text: '컴포넌트에서 Store 사용' },
          {
            type: 'code',
            language: 'vue',
            code: `<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();

// 반응성을 유지하며 구조 분해 — storeToRefs 사용
const { count, doubleCount } = storeToRefs(store);

// actions는 직접 구조 분해 가능
const { increment, decrement, reset } = store;
</script>

<template>
  <div>
    <p>카운트: {{ count }}</p>
    <p>2배: {{ doubleCount }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">초기화</button>
  </div>
</template>`,
          },
          { type: 'heading', text: '실전 예제: Todo Store' },
          {
            type: 'code',
            language: 'typescript',
            code: `// stores/todo.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);
  let nextId = 1;

  const remaining = computed(
    () => todos.value.filter(t => !t.done).length
  );
  const completed = computed(
    () => todos.value.filter(t => t.done)
  );

  function addTodo(text: string) {
    todos.value.push({ id: nextId++, text, done: false });
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter(t => t.id !== id);
  }

  function clearCompleted() {
    todos.value = todos.value.filter(t => !t.done);
  }

  return {
    todos, remaining, completed,
    addTodo, toggleTodo, removeTodo, clearCompleted,
  };
});`,
          },
          {
            type: 'tip',
            text: '`storeToRefs()`를 사용하지 않고 `const { count } = store` 처럼 직접 구조 분해하면 반응성이 사라집니다. state와 getters는 반드시 `storeToRefs()`로, actions는 직접 구조 분해하세요.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 북마크 앱 만들기',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요' },
          {
            type: 'text',
            text: 'Vue의 핵심 개념(Composition API, Pinia, Vue Router, Composables)을 모두 활용하여 북마크 관리 앱을 만듭니다.',
          },
          {
            type: 'list',
            items: [
              '북마크 추가, 수정, 삭제',
              '카테고리별 분류와 검색',
              'Pinia로 상태 관리',
              'localStorage 영속화',
              'Vue Router로 페이지 구성',
            ],
          },
          { type: 'heading', text: 'Store 정의' },
          {
            type: 'code',
            language: 'typescript',
            code: `// stores/bookmark.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

type Bookmark = {
  id: string;
  title: string;
  url: string;
  category: string;
  createdAt: number;
};

export const useBookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>(
    JSON.parse(localStorage.getItem('bookmarks') || '[]')
  );
  const searchQuery = ref('');
  const selectedCategory = ref('all');

  // Getters
  const categories = computed(() => {
    const cats = new Set(bookmarks.value.map(b => b.category));
    return ['all', ...Array.from(cats)];
  });

  const filtered = computed(() => {
    return bookmarks.value
      .filter(b => {
        const matchCategory = selectedCategory.value === 'all'
          || b.category === selectedCategory.value;
        const matchQuery = b.title.toLowerCase()
          .includes(searchQuery.value.toLowerCase())
          || b.url.includes(searchQuery.value);
        return matchCategory && matchQuery;
      })
      .sort((a, b) => b.createdAt - a.createdAt);
  });

  // Actions
  function addBookmark(title: string, url: string, category: string) {
    bookmarks.value.push({
      id: crypto.randomUUID(),
      title,
      url,
      category,
      createdAt: Date.now(),
    });
    save();
  }

  function removeBookmark(id: string) {
    bookmarks.value = bookmarks.value.filter(b => b.id !== id);
    save();
  }

  function save() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks.value));
  }

  return {
    bookmarks, searchQuery, selectedCategory,
    categories, filtered,
    addBookmark, removeBookmark,
  };
});`,
          },
          { type: 'heading', text: '메인 뷰 컴포넌트' },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- views/BookmarkList.vue -->
<script setup lang="ts">
import { useBookmarkStore } from '@/stores/bookmark';
import { storeToRefs } from 'pinia';
import BookmarkCard from '@/components/BookmarkCard.vue';
import AddBookmarkForm from '@/components/AddBookmarkForm.vue';

const store = useBookmarkStore();
const {
  filtered, searchQuery, selectedCategory, categories
} = storeToRefs(store);
const { removeBookmark } = store;
</script>

<template>
  <div class="bookmark-app">
    <h1>북마크 관리</h1>

    <AddBookmarkForm />

    <div class="filters">
      <input
        v-model="searchQuery"
        placeholder="검색..."
        class="search-input"
      />
      <select v-model="selectedCategory">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat === 'all' ? '전체' : cat }}
        </option>
      </select>
    </div>

    <p>{{ filtered.length }}개의 북마크</p>

    <div class="bookmark-grid">
      <BookmarkCard
        v-for="bookmark in filtered"
        :key="bookmark.id"
        :bookmark="bookmark"
        @delete="removeBookmark(bookmark.id)"
      />
    </div>
  </div>
</template>`,
          },
          { type: 'heading', text: '하위 컴포넌트' },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- components/BookmarkCard.vue -->
<script setup lang="ts">
defineProps<{
  bookmark: {
    id: string;
    title: string;
    url: string;
    category: string;
    createdAt: number;
  };
}>();

const emit = defineEmits<{
  delete: [];
}>();

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString('ko-KR');
}
</script>

<template>
  <div class="bookmark-card">
    <div class="card-header">
      <span class="category-badge">{{ bookmark.category }}</span>
      <button @click="emit('delete')" class="delete-btn">삭제</button>
    </div>
    <h3>
      <a :href="bookmark.url" target="_blank">{{ bookmark.title }}</a>
    </h3>
    <p class="url">{{ bookmark.url }}</p>
    <small>{{ formatDate(bookmark.createdAt) }}</small>
  </div>
</template>`,
          },
          {
            type: 'code',
            language: 'vue',
            code: `<!-- components/AddBookmarkForm.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { useBookmarkStore } from '@/stores/bookmark';

const store = useBookmarkStore();

const title = ref('');
const url = ref('');
const category = ref('일반');
const showForm = ref(false);

function handleSubmit() {
  if (!title.value.trim() || !url.value.trim()) return;
  store.addBookmark(title.value, url.value, category.value);
  title.value = '';
  url.value = '';
  showForm.value = false;
}
</script>

<template>
  <button @click="showForm = !showForm">
    {{ showForm ? '취소' : '+ 북마크 추가' }}
  </button>

  <form v-if="showForm" @submit.prevent="handleSubmit">
    <input v-model="title" placeholder="제목" required />
    <input v-model="url" placeholder="URL" type="url" required />
    <input v-model="category" placeholder="카테고리" />
    <button type="submit">저장</button>
  </form>
</template>`,
          },
          {
            type: 'tip',
            text: '이 프로젝트에서는 Pinia Store가 비즈니스 로직(필터링, 정렬, 저장)을 담당하고, 컴포넌트는 순수하게 UI만 관리합니다. 이런 분리는 테스트와 유지보수를 크게 개선합니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Vue.js 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '디렉티브 요약' },
          {
            type: 'list',
            items: [
              '`v-bind` (`:`) — 속성 바인딩: `:src="url"`, `:class="{ active: isOn }"`',
              '`v-on` (`@`) — 이벤트 리스너: `@click="fn"`, `@keyup.enter="fn"`',
              '`v-model` — 양방향 바인딩: `v-model="text"`, 수식어: `.lazy`, `.number`, `.trim`',
              '`v-if` / `v-else-if` / `v-else` — 조건부 렌더링 (DOM 추가/제거)',
              '`v-show` — 조건부 표시 (display CSS 토글, DOM 유지)',
              '`v-for` — 리스트 렌더링: `v-for="item in list" :key="item.id"`',
              '`v-slot` (`#`) — 슬롯 콘텐츠: `<template #header>`',
              '`v-pre` — 컴파일 건너뛰기 ({{ }} 그대로 표시)',
              '`v-once` — 한 번만 렌더링 (정적 콘텐츠 최적화)',
              '`v-memo` — 메모이제이션 (조건부 리렌더링 방지)',
            ],
          },
          { type: 'heading', text: 'Composition API 핵심' },
          {
            type: 'code',
            language: 'typescript',
            code: `// ─── 반응형 데이터 ───
const count = ref(0);                // 원시 값 (.value 필요)
const state = reactive({ x: 0 });   // 객체 (직접 접근)
const doubled = computed(() => count.value * 2); // 파생 값

// ─── 감시 ───
watch(source, (newVal, oldVal) => {});        // 명시적 감시
watchEffect(() => { /* 자동 추적 */ });       // 자동 감시

// ─── 라이프사이클 ───
onMounted(() => {});      // DOM 마운트 후
onUpdated(() => {});      // DOM 업데이트 후
onUnmounted(() => {});    // 컴포넌트 제거 시
onBeforeMount(() => {});  // 마운트 전
onBeforeUpdate(() => {}); // 업데이트 전
onBeforeUnmount(() => {}); // 제거 전

// ─── 의존성 주입 ───
provide('key', value);    // 조상에서 제공
const val = inject('key'); // 자손에서 주입

// ─── 템플릿 참조 ───
const el = ref<HTMLElement>();  // template ref
const comp = ref<InstanceType<typeof MyComp>>(); // 컴포넌트 ref`,
          },
          { type: 'heading', text: '컴포넌트 매크로' },
          {
            type: 'code',
            language: 'typescript',
            code: `// <script setup> 전용 매크로 (import 불필요)

// Props 정의
const props = defineProps<{
  title: string;
  count?: number;
}>();

// Props + 기본값
const props = withDefaults(defineProps<{
  title: string;
  count?: number;
}>(), {
  count: 0,
});

// Emit 정의
const emit = defineEmits<{
  change: [value: string];
  submit: [];
}>();

// v-model 바인딩 (Vue 3.4+)
const model = defineModel<string>();

// 컴포넌트 외부 노출
defineExpose({
  publicMethod,
  publicData,
});

// 슬롯 타입
const slots = defineSlots<{
  default: (props: { item: Item }) => any;
  header: () => any;
}>();`,
          },
          { type: 'heading', text: '이벤트 수식어' },
          {
            type: 'list',
            items: [
              '`@click.stop` — event.stopPropagation()',
              '`@click.prevent` — event.preventDefault()',
              '`@click.once` — 한 번만 실행',
              '`@click.self` — 이벤트 대상이 해당 요소일 때만',
              '`@keyup.enter` — Enter 키',
              '`@keyup.escape` — Escape 키',
              '`@keyup.tab` / `.space` / `.delete` / `.up` / `.down` — 특수 키',
              '`@click.ctrl` / `.shift` / `.alt` / `.meta` — 수식어 키 조합',
            ],
          },
          {
            type: 'tip',
            text: 'Vue 공식 문서(vuejs.org)는 한국어 번역이 잘 되어 있습니다. Composition API와 Options API 두 가지 스타일의 예제를 모두 제공하므로 참고하기 좋습니다.',
          },
        ],
      },
    ],
  },
];
