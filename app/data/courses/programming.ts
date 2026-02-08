import type { Course } from './types';

export const programmingCourses: Course[] = [
  // ─── 1. JavaScript 기초 ───
  {
    slug: 'javascript',
    title: 'JavaScript 기초',
    description: '웹의 프로그래밍 언어, JavaScript 핵심 문법',
    category: 'programming',
    color: 'bg-yellow-400',
    difficulty: 'beginner',
    objectives: [
      '변수, 타입, 함수, 배열, 객체 핵심 문법',
      'DOM 조작과 이벤트 처리',
      '비동기 프로그래밍: Promise와 async/await',
      'ES6+ 최신 문법과 모듈 시스템',
      '실전 프로젝트와 주요 메서드 레퍼런스',
    ],
    lessons: [
      {
        slug: 'variables-types',
        title: '변수와 데이터 타입',
        duration: '15분',
        content: [
          { type: 'heading', text: '변수 선언: const, let, var' },
          {
            type: 'text',
            text: 'JavaScript에서 변수를 선언하는 키워드는 세 가지입니다. `const`는 재할당이 불가능한 상수, `let`은 재할당이 가능한 변수, `var`는 함수 스코프를 가지는 레거시 키워드입니다. 최신 코드에서는 `const`를 기본으로 사용하고, 재할당이 필요할 때만 `let`을 사용합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const name = "Alice";   // 재할당 불가
let age = 25;            // 재할당 가능
var legacy = "old";      // 함수 스코프 (사용 지양)

// const는 재할당 시 에러 발생
// name = "Bob";  // TypeError: Assignment to constant variable

age = 26;  // OK – let은 재할당 가능`,
          },
          { type: 'heading', text: '7가지 데이터 타입' },
          {
            type: 'list',
            items: [
              '`string` — 문자열: "hello", \'world\', `template`',
              '`number` — 숫자: 42, 3.14, NaN, Infinity',
              '`boolean` — 논리값: true, false',
              '`null` — 의도적으로 비어 있음을 나타내는 값',
              '`undefined` — 값이 할당되지 않은 상태',
              '`array` — 순서가 있는 목록: [1, 2, 3]',
              '`object` — 키-값 쌍의 집합: { key: "value" }',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const str = "Hello";          // string
const num = 42;               // number
const bool = true;            // boolean
const empty = null;           // null
let notAssigned;              // undefined
const arr = [1, 2, 3];       // array (object의 일종)
const obj = { x: 10, y: 20 };// object

console.log(typeof str);     // "string"
console.log(typeof num);     // "number"
console.log(typeof arr);     // "object"`,
          },
          { type: 'heading', text: '템플릿 리터럴' },
          {
            type: 'text',
            text: '백틱(`` ` ``)으로 감싸면 `${expression}` 구문을 이용해 문자열 안에 변수나 표현식을 삽입할 수 있습니다. 줄바꿈도 그대로 유지됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const user = "김철수";
const score = 95;

// 기존 문자열 결합
console.log(user + "님의 점수: " + score + "점");

// 템플릿 리터럴
console.log(user + "님의 점수: " + score + "점");

// 여러 줄 문자열 (백틱 사용)
const html = "<div>" +
  "<p>" + user + "</p>" +
  "</div>";`,
          },
          {
            type: 'tip',
            text: '`typeof null`은 "object"를 반환합니다. 이것은 JavaScript의 유명한 버그이며, 실제로 null은 원시 타입입니다.',
          },
        ],
      },
      {
        slug: 'functions',
        title: '함수와 조건문',
        duration: '20분',
        content: [
          { type: 'heading', text: '함수 선언과 화살표 함수' },
          {
            type: 'text',
            text: 'JavaScript에서 함수를 정의하는 방법은 크게 세 가지입니다. `function` 키워드를 사용한 선언식, 변수에 할당하는 표현식, 그리고 간결한 화살표 함수(`=>`)가 있습니다. 화살표 함수는 자체 `this`를 가지지 않는다는 차이가 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 함수 선언식
function greet(name) {
  return "안녕하세요, " + name + "님!";
}

// 함수 표현식
const add = function (a, b) {
  return a + b;
};

// 화살표 함수
const multiply = (a, b) => a * b;

// 매개변수가 하나면 괄호 생략 가능
const double = n => n * 2;

console.log(greet("영희"));   // "안녕하세요, 영희님!"
console.log(multiply(3, 4));  // 12
console.log(double(5));       // 10`,
          },
          { type: 'heading', text: '조건문: if / else' },
          {
            type: 'text',
            text: '`if` 문은 조건에 따라 코드 실행을 분기합니다. `else if`로 추가 조건을, `else`로 나머지 경우를 처리합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrade(85)); // "B"`,
          },
          { type: 'heading', text: '삼항 연산자' },
          {
            type: 'text',
            text: '삼항 연산자(`조건 ? 참 : 거짓`)는 간단한 조건 분기를 한 줄로 작성할 때 유용합니다. 복잡한 로직에는 `if/else`를 사용하는 것이 가독성에 좋습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const age = 20;
const status = age >= 18 ? "성인" : "미성년자";
console.log(status); // "성인"

// 함수 반환에도 활용
const abs = (n) => n >= 0 ? n : -n;
console.log(abs(-7)); // 7`,
          },
          {
            type: 'tip',
            text: '화살표 함수에서 본문이 표현식 하나면 `{}`와 `return`을 생략할 수 있습니다. 예: `const sq = x => x * x;`',
          },
        ],
      },
      {
        slug: 'arrays-loops',
        title: '배열과 반복문',
        duration: '20분',
        content: [
          { type: 'heading', text: '배열 기초와 반복' },
          {
            type: 'text',
            text: '배열은 순서가 있는 데이터 목록입니다. `for...of`는 배열의 각 요소를 순회하며, `forEach`는 배열 메서드로 각 요소에 콜백을 실행합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const fruits = ["사과", "바나나", "포도"];

// for...of — 값을 직접 순회
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach — 인덱스도 함께 사용
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
// 0: 사과
// 1: 바나나
// 2: 포도`,
          },
          { type: 'heading', text: 'map, filter, reduce' },
          {
            type: 'text',
            text: '배열의 고차 함수는 데이터를 변환하거나 추출할 때 핵심적으로 사용됩니다. `map`은 각 요소를 변환해 새 배열을 만들고, `filter`는 조건에 맞는 요소만 추출하며, `reduce`는 배열을 하나의 값으로 축약합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const numbers = [1, 2, 3, 4, 5];

// map: 각 요소를 변환
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: 조건에 맞는 요소만
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce: 하나의 값으로 축약
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15`,
          },
          {
            type: 'list',
            items: [
              '`map(fn)` — 원본과 같은 길이의 새 배열 반환',
              '`filter(fn)` — 조건이 true인 요소만 모은 새 배열 반환',
              '`reduce(fn, init)` — 누적값을 계산하여 단일 값 반환',
              '`find(fn)` — 조건에 맞는 첫 번째 요소 반환',
              '`some(fn)` / `every(fn)` — 하나라도 / 모두 조건 충족 여부',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 실전 예제: 학생 성적 처리
const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
  { name: "정수아", score: 95 },
];

// 90점 이상 학생 이름 목록
const topStudents = students
  .filter(s => s.score >= 90)
  .map(s => s.name);

console.log(topStudents); // ["이영희", "정수아"]

// 평균 점수
const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log(avg); // 87.5`,
          },
          {
            type: 'tip',
            text: '`map`, `filter`, `reduce`는 원본 배열을 변경하지 않고 새 배열 또는 값을 반환합니다. 이를 "불변성(immutability)"이라 하며, 버그를 줄이는 데 크게 도움이 됩니다.',
          },
        ],
      },
      {
        slug: 'objects-destructuring',
        title: '객체와 구조 분해',
        duration: '20분',
        content: [
          { type: 'heading', text: '객체 리터럴과 메서드' },
          {
            type: 'text',
            text: '객체는 관련된 데이터와 기능을 하나로 묶는 핵심 자료구조입니다. 키-값 쌍으로 구성되며, 값으로 함수를 가지면 메서드라 부릅니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const user = {
  name: "김철수",
  age: 25,
  hobbies: ["독서", "코딩"],

  // 메서드 축약 문법
  greet() {
    return "안녕하세요, " + this.name + "입니다!";
  },

  // 계산된 속성
  get birthYear() {
    return new Date().getFullYear() - this.age;
  },
};

console.log(user.name);        // "김철수"
console.log(user.greet());     // "안녕하세요, 김철수입니다!"
console.log(user.birthYear);   // 2001 (동적 계산)`,
          },
          { type: 'heading', text: '구조 분해 할당 (Destructuring)' },
          {
            type: 'text',
            text: '구조 분해 할당을 사용하면 객체나 배열에서 값을 꺼내 변수에 바로 할당할 수 있습니다. 코드가 훨씬 간결해집니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 객체 구조 분해
const { name, age, hobbies } = user;
console.log(name); // "김철수"

// 이름 변경 (별칭)
const { name: userName, age: userAge } = user;
console.log(userName); // "김철수"

// 기본값 지정
const { email = "없음" } = user;
console.log(email); // "없음"

// 배열 구조 분해
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(rest);   // [30, 40, 50]

// 함수 매개변수에서 구조 분해
function printUser({ name, age }) {
  console.log(name + " (" + age + "세)");
}
printUser(user); // "김철수 (25세)"`,
          },
          { type: 'heading', text: '스프레드와 나머지 연산자' },
          {
            type: 'text',
            text: '스프레드 연산자(`...`)는 배열이나 객체를 펼치고, 나머지 연산자는 남은 요소를 모읍니다. 불변성을 유지하면서 데이터를 다룰 때 필수적입니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 객체 스프레드 — 복사 + 수정
const updated = { ...user, age: 26, email: "kim@example.com" };
console.log(updated.age);   // 26
console.log(user.age);      // 25 (원본 유지)

// 배열 스프레드 — 합치기
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b]; // [1, 2, 3, 4, 5, 6]

// 나머지 매개변수
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`,
          },
          {
            type: 'tip',
            text: '스프레드 연산자는 "얕은 복사(shallow copy)"를 수행합니다. 중첩된 객체는 참조가 복사되므로, 깊은 복사가 필요하면 `structuredClone()`을 사용하세요.',
          },
        ],
      },
      {
        slug: 'dom-events',
        title: 'DOM 조작과 이벤트',
        duration: '20분',
        content: [
          { type: 'heading', text: 'DOM 요소 선택' },
          {
            type: 'text',
            text: 'DOM(Document Object Model)은 HTML 문서를 JavaScript로 다룰 수 있게 하는 인터페이스입니다. `querySelector`와 `querySelectorAll`로 CSS 선택자를 사용해 요소를 찾습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 단일 요소 선택
const title = document.querySelector("h1");
const btn = document.querySelector("#submit-btn");
const first = document.querySelector(".card");

// 여러 요소 선택 (NodeList 반환)
const cards = document.querySelectorAll(".card");
cards.forEach(card => console.log(card.textContent));

// getElementById (클래식 방법)
const header = document.getElementById("header");`,
          },
          { type: 'heading', text: '요소 생성, 수정, 삭제' },
          {
            type: 'text',
            text: 'JavaScript로 HTML 요소를 동적으로 만들고 변경할 수 있습니다. `createElement`로 생성하고, `appendChild`나 `append`로 DOM에 추가합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 요소 생성 & 추가
const li = document.createElement("li");
li.textContent = "새 항목";
li.classList.add("item", "active");
document.querySelector("ul").appendChild(li);

// 속성 변경
const img = document.querySelector("img");
img.src = "/new-image.png";
img.alt = "새 이미지";
img.setAttribute("data-id", "42");

// 스타일 변경
const box = document.querySelector(".box");
box.style.backgroundColor = "#3b82f6";
box.style.padding = "16px";

// 요소 삭제
const old = document.querySelector(".outdated");
old.remove();`,
          },
          { type: 'heading', text: '이벤트 리스너' },
          {
            type: 'text',
            text: '`addEventListener`로 사용자 상호작용(클릭, 입력, 스크롤 등)에 반응합니다. 이벤트 객체(`e`)에는 대상 요소, 위치 등 유용한 정보가 담겨 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 클릭 이벤트
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", (e) => {
  console.log("클릭됨!", e.target);
  e.target.textContent = "클릭됨!";
});

// 입력 이벤트
const input = document.querySelector("#search");
input.addEventListener("input", (e) => {
  console.log("입력값:", e.target.value);
});

// 키보드 이벤트
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("ESC 키 눌림");
  }
});

// 이벤트 제거
function handleClick() { console.log("click"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);`,
          },
          { type: 'heading', text: '이벤트 위임' },
          {
            type: 'text',
            text: '이벤트 위임(Event Delegation)은 부모 요소에 리스너를 하나만 등록하여 자식 요소의 이벤트를 처리하는 패턴입니다. 동적으로 추가되는 요소에도 작동하며 성능이 좋습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 이벤트 위임 — ul에 리스너 하나로 모든 li 처리
const list = document.querySelector("#todo-list");
list.addEventListener("click", (e) => {
  // 클릭된 요소가 삭제 버튼인지 확인
  if (e.target.matches(".delete-btn")) {
    const li = e.target.closest("li");
    li.remove();
  }

  // 체크박스 토글
  if (e.target.matches("input[type=checkbox]")) {
    const li = e.target.closest("li");
    li.classList.toggle("completed");
  }
});`,
          },
          {
            type: 'tip',
            text: '`innerHTML`로 HTML을 삽입하면 XSS 공격에 취약할 수 있습니다. 사용자 입력을 표시할 때는 `textContent`를 사용하세요.',
          },
        ],
      },
      {
        slug: 'async-programming',
        title: '비동기 프로그래밍',
        duration: '20분',
        content: [
          { type: 'heading', text: '동기 vs 비동기' },
          {
            type: 'text',
            text: 'JavaScript는 싱글 스레드이지만, 비동기 처리를 통해 네트워크 요청이나 타이머 같은 시간이 걸리는 작업을 블로킹 없이 수행합니다. 콜백, Promise, async/await 세 가지 방식으로 비동기를 다룹니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 동기 — 순서대로 실행
console.log("1");
console.log("2");
console.log("3");
// 출력: 1, 2, 3

// 비동기 — setTimeout은 나중에 실행
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// 출력: 1, 3, (1초 후) 2`,
          },
          { type: 'heading', text: 'Promise' },
          {
            type: 'text',
            text: 'Promise는 "미래에 완료될 작업"을 나타내는 객체입니다. `resolve`(성공)와 `reject`(실패) 두 가지 결과를 가지며, `.then()`과 `.catch()`로 후속 처리를 합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// Promise 생성
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("완료!"), ms);
  });
}

delay(1000)
  .then(result => console.log(result))  // "완료!"
  .catch(err => console.error(err));

// Promise 체이닝
fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("에러:", err))
  .finally(() => console.log("요청 완료"));`,
          },
          { type: 'heading', text: 'async / await' },
          {
            type: 'text',
            text: '`async/await`는 Promise를 더 읽기 쉽게 작성하는 문법입니다. `async` 함수 안에서 `await`를 사용하면 Promise가 해결될 때까지 기다린 후 다음 줄을 실행합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// async/await 기본
async function fetchUser(id) {
  try {
    const res = await fetch("https://api.example.com/users/" + id);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const user = await res.json();
    console.log(user.name);
    return user;
  } catch (err) {
    console.error("사용자 조회 실패:", err.message);
  }
}

// 병렬 실행 — Promise.all
async function fetchMultiple() {
  const [users, posts] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json()),
  ]);
  console.log(users.length, posts.length);
}`,
          },
          {
            type: 'list',
            items: [
              '`Promise.all([...])` — 모두 성공해야 완료, 하나라도 실패하면 즉시 reject',
              '`Promise.allSettled([...])` — 성공/실패 관계없이 모두 완료 후 결과 반환',
              '`Promise.race([...])` — 가장 먼저 완료(성공 또는 실패)된 결과 반환',
              '`Promise.any([...])` — 가장 먼저 성공한 결과 반환',
            ],
          },
          {
            type: 'tip',
            text: '`await`는 반드시 `async` 함수 안에서만 사용할 수 있습니다. 최상위 레벨에서는 모듈(`type="module"`) 스크립트에서만 top-level await가 가능합니다.',
          },
        ],
      },
      {
        slug: 'es6-modern',
        title: 'ES6+ 주요 문법',
        duration: '20분',
        content: [
          { type: 'heading', text: '클래스' },
          {
            type: 'text',
            text: 'ES6 클래스는 프로토타입 기반 상속을 깔끔한 문법으로 제공합니다. `constructor`에서 초기화하고, 메서드를 정의하며, `extends`로 상속합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return this.name + ": " + this.sound;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "멍멍");
  }

  fetch(item) {
    return this.name + "이(가) " + item + "을 가져왔습니다!";
  }
}

const dog = new Dog("바둑이");
console.log(dog.speak());       // "바둑이: 멍멍"
console.log(dog.fetch("공"));   // "바둑이이(가) 공을 가져왔습니다!"`,
          },
          { type: 'heading', text: '모듈 시스템 (import / export)' },
          {
            type: 'text',
            text: 'ES 모듈을 사용하면 코드를 파일 단위로 나누어 관리할 수 있습니다. `export`로 내보내고 `import`로 가져옵니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// math.js — 이름 붙여 내보내기 (named export)
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// utils.js — 기본 내보내기 (default export)
export default function formatDate(date) {
  return date.toLocaleDateString("ko-KR");
}

// app.js — 가져오기
import formatDate from "./utils.js";          // default
import { PI, add } from "./math.js";          // named
import * as math from "./math.js";            // 전체

console.log(add(2, 3));                       // 5
console.log(math.PI);                         // 3.14159`,
          },
          { type: 'heading', text: 'Optional Chaining & Nullish Coalescing' },
          {
            type: 'text',
            text: '`?.`(옵셔널 체이닝)은 중간 값이 `null`/`undefined`이면 에러 없이 `undefined`를 반환합니다. `??`(널 병합)은 `null`/`undefined`일 때만 기본값을 사용합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const user = {
  name: "김철수",
  address: { city: "서울" },
};

// Optional Chaining
console.log(user.address?.city);     // "서울"
console.log(user.address?.zipcode);  // undefined (에러 안 남)
console.log(user.phone?.number);     // undefined

// Nullish Coalescing
const port = null ?? 3000;           // 3000
const host = "" ?? "localhost";      // "" (빈 문자열은 null이 아님)
const count = 0 ?? 10;              // 0 (0은 null이 아님)

// || 와의 차이 — ||는 falsy 값 모두 건너뜀
const a = 0 || 10;   // 10 (0은 falsy)
const b = 0 ?? 10;   // 0  (0은 null/undefined가 아님)`,
          },
          { type: 'heading', text: 'Map과 Set' },
          {
            type: 'text',
            text: '`Map`은 키-값 쌍의 컬렉션으로 어떤 타입이든 키로 사용 가능합니다. `Set`은 중복 없는 값의 컬렉션입니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// Map
const scores = new Map();
scores.set("김철수", 95);
scores.set("이영희", 88);
console.log(scores.get("김철수")); // 95
console.log(scores.size);          // 2

for (const [name, score] of scores) {
  console.log(name + ": " + score);
}

// Set — 중복 제거
const nums = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]

// Set 연산
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
const union = new Set([...setA, ...setB]);      // {1,2,3,4}
const inter = [...setA].filter(x => setB.has(x)); // [2,3]`,
          },
          {
            type: 'tip',
            text: '`Map`은 객체와 달리 삽입 순서가 보장되고, `size` 속성으로 바로 크기를 알 수 있으며, 어떤 타입이든(함수, 객체 등) 키로 사용할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: Todo 앱 만들기',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요' },
          {
            type: 'text',
            text: '지금까지 배운 JavaScript 핵심 개념을 활용해 Todo 앱을 만듭니다. DOM 조작, 이벤트 처리, 배열 메서드, localStorage를 모두 사용합니다.',
          },
          {
            type: 'list',
            items: [
              '할 일 추가, 완료 토글, 삭제 기능',
              '필터링 (전체 / 진행중 / 완료)',
              'localStorage로 데이터 영속화',
              '이벤트 위임으로 효율적인 이벤트 처리',
            ],
          },
          { type: 'heading', text: 'HTML 구조' },
          {
            type: 'code',
            language: 'html',
            code: `<div id="app">
  <h1>Todo App</h1>
  <form id="todo-form">
    <input id="todo-input" type="text"
           placeholder="할 일을 입력하세요" required />
    <button type="submit">추가</button>
  </form>
  <div id="filters">
    <button class="filter active" data-filter="all">전체</button>
    <button class="filter" data-filter="active">진행중</button>
    <button class="filter" data-filter="completed">완료</button>
  </div>
  <ul id="todo-list"></ul>
  <p id="count"></p>
</div>`,
          },
          { type: 'heading', text: '데이터 관리' },
          {
            type: 'code',
            language: 'javascript',
            code: `// 상태 관리
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// 저장
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 할 일 추가
function addTodo(text) {
  todos.push({
    id: Date.now(),
    text,
    completed: false,
  });
  save();
  render();
}

// 토글
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.completed = !todo.completed;
  save();
  render();
}

// 삭제
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save();
  render();
}`,
          },
          { type: 'heading', text: '렌더링과 이벤트' },
          {
            type: 'code',
            language: 'javascript',
            code: `function getFiltered() {
  if (currentFilter === "active") {
    return todos.filter(t => !t.completed);
  }
  if (currentFilter === "completed") {
    return todos.filter(t => t.completed);
  }
  return todos;
}

function render() {
  const list = document.querySelector("#todo-list");
  const filtered = getFiltered();

  list.innerHTML = filtered.map(todo =>
    '<li data-id="' + todo.id + '"' +
    ' class="' + (todo.completed ? "completed" : "") + '">' +
    '<input type="checkbox"' +
    (todo.completed ? " checked" : "") + ' />' +
    '<span>' + todo.text + '</span>' +
    '<button class="delete-btn">삭제</button>' +
    '</li>'
  ).join("");

  const remaining = todos.filter(t => !t.completed).length;
  document.querySelector("#count").textContent =
    "남은 할 일: " + remaining + "개";
}

// 폼 제출
document.querySelector("#todo-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#todo-input");
    if (input.value.trim()) {
      addTodo(input.value.trim());
      input.value = "";
    }
  });

// 이벤트 위임 — 리스트
document.querySelector("#todo-list")
  .addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.matches(".delete-btn")) {
      deleteTodo(id);
    } else if (e.target.matches("input[type=checkbox]")) {
      toggleTodo(id);
    }
  });

// 필터 버튼
document.querySelector("#filters")
  .addEventListener("click", (e) => {
    if (!e.target.matches(".filter")) return;
    currentFilter = e.target.dataset.filter;
    document.querySelectorAll(".filter")
      .forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    render();
  });

// 초기 렌더링
render();`,
          },
          {
            type: 'tip',
            text: '실제 프로젝트에서는 `innerHTML`을 사용자 입력과 함께 사용하면 XSS 취약점이 생깁니다. 이 예제는 학습용이며, 실무에서는 `createElement` + `textContent` 조합이나 프레임워크(React, Vue)를 사용하세요.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'JavaScript 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '문자열 메서드' },
          {
            type: 'code',
            language: 'javascript',
            code: `const s = "Hello, World!";

s.length;                  // 13
s.toUpperCase();           // "HELLO, WORLD!"
s.toLowerCase();           // "hello, world!"
s.includes("World");       // true
s.startsWith("Hello");     // true
s.endsWith("!");           // true
s.indexOf("World");        // 7  (-1 if not found)
s.slice(0, 5);             // "Hello"
s.slice(-6);               // "orld!"
s.split(", ");             // ["Hello", "World!"]
s.replace("World", "JS");  // "Hello, JS!"
s.trim();                  // 양쪽 공백 제거
s.padStart(20, "-");       // "-------Hello, World!"
s.repeat(2);               // "Hello, World!Hello, World!"`,
          },
          { type: 'heading', text: '배열 메서드' },
          {
            type: 'code',
            language: 'javascript',
            code: `const a = [3, 1, 4, 1, 5];

// 변환 (새 배열 반환)
a.map(n => n * 2);          // [6, 2, 8, 2, 10]
a.filter(n => n > 2);       // [3, 4, 5]
a.slice(1, 3);              // [1, 4]
a.concat([9, 2]);           // [3, 1, 4, 1, 5, 9, 2]
a.flat();                   // 중첩 배열 평탄화
[...new Set(a)];            // [3, 1, 4, 5] (중복 제거)

// 검색
a.find(n => n > 3);         // 4
a.findIndex(n => n > 3);    // 2
a.includes(4);              // true
a.indexOf(1);               // 1
a.some(n => n > 4);         // true
a.every(n => n > 0);        // true

// 축약
a.reduce((s, n) => s + n, 0); // 14
a.join("-");                // "3-1-4-1-5"

// 수정 (원본 변경)
a.push(6);                  // 끝에 추가
a.pop();                    // 끝에서 제거
a.unshift(0);               // 앞에 추가
a.shift();                  // 앞에서 제거
a.splice(1, 2);             // index 1부터 2개 제거
a.sort((x, y) => x - y);   // 오름차순 정렬
a.reverse();                // 뒤집기`,
          },
          { type: 'heading', text: '객체 메서드' },
          {
            type: 'code',
            language: 'javascript',
            code: `const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);           // ["a", "b", "c"]
Object.values(obj);         // [1, 2, 3]
Object.entries(obj);        // [["a",1], ["b",2], ["c",3]]
Object.assign({}, obj);     // 얕은 복사
Object.freeze(obj);         // 수정 불가로 만듦
"a" in obj;                 // true
obj.hasOwnProperty("a");    // true

// entries 활용 — 객체를 배열처럼 순회
Object.entries(obj).forEach(([key, val]) => {
  console.log(key + ": " + val);
});

// fromEntries — 배열을 객체로
const pairs = [["x", 10], ["y", 20]];
Object.fromEntries(pairs);  // { x: 10, y: 20 }`,
          },
          { type: 'heading', text: '숫자 & Math' },
          {
            type: 'code',
            language: 'javascript',
            code: `// 숫자 변환
Number("42");              // 42
parseInt("42px");          // 42
parseFloat("3.14em");      // 3.14
(3.14159).toFixed(2);      // "3.14"

// Math 객체
Math.round(4.5);           // 5
Math.floor(4.9);           // 4
Math.ceil(4.1);            // 5
Math.max(1, 5, 3);         // 5
Math.min(1, 5, 3);         // 1
Math.abs(-7);              // 7
Math.random();             // 0 이상 1 미만 랜덤
Math.PI;                   // 3.141592653589793
Math.pow(2, 10);           // 1024
Math.sqrt(16);             // 4`,
          },
          { type: 'heading', text: 'Date & JSON' },
          {
            type: 'code',
            language: 'javascript',
            code: `// Date
const now = new Date();
now.getFullYear();         // 2025
now.getMonth();            // 0-11 (0 = 1월)
now.getDate();             // 1-31
now.getDay();              // 0-6 (0 = 일요일)
now.toLocaleDateString("ko-KR"); // "2025. 1. 15."
now.toISOString();         // "2025-01-15T..."
Date.now();                // 현재 타임스탬프 (ms)

// JSON
const data = { name: "Kim", scores: [90, 85] };
const json = JSON.stringify(data);       // 문자열로
const parsed = JSON.parse(json);         // 객체로
JSON.stringify(data, null, 2);           // 들여쓰기`,
          },
          { type: 'heading', text: 'DOM API 요약' },
          {
            type: 'list',
            items: [
              '`document.querySelector(css)` — 첫 번째 매칭 요소',
              '`document.querySelectorAll(css)` — 모든 매칭 요소 (NodeList)',
              '`element.textContent` — 텍스트 읽기/쓰기',
              '`element.innerHTML` — HTML 읽기/쓰기 (XSS 주의)',
              '`element.classList.add/remove/toggle/contains` — 클래스 조작',
              '`element.style.속성` — 인라인 스타일 변경',
              '`element.setAttribute(name, value)` — 속성 설정',
              '`element.dataset.키` — data-* 속성 접근',
              '`element.addEventListener(type, fn)` — 이벤트 등록',
              '`element.remove()` — 요소 삭제',
              '`document.createElement(tag)` — 요소 생성',
              '`parent.appendChild(child)` — 자식 추가',
            ],
          },
          {
            type: 'tip',
            text: 'MDN Web Docs(developer.mozilla.org)는 JavaScript의 공식 레퍼런스입니다. 메서드의 정확한 사용법이나 브라우저 호환성을 확인할 때 참고하세요.',
          },
        ],
      },
    ],
  },

  // ─── 2. TypeScript 입문 ───
  {
    slug: 'typescript',
    title: 'TypeScript 입문',
    description: '타입이 있는 JavaScript로 안전한 코드 작성',
    category: 'programming',
    color: 'bg-blue-500',
    difficulty: 'intermediate',
    objectives: [
      '기본 타입, Union, 리터럴 타입',
      '인터페이스, 타입 별칭, 제네릭',
      '타입 가드와 고급 타입 시스템',
      '클래스, 모듈, tsconfig 설정',
      '실전 프로젝트와 유틸리티 타입 레퍼런스',
    ],
    lessons: [
      {
        slug: 'ts-basics',
        title: 'TypeScript 소개',
        duration: '15분',
        content: [
          { type: 'heading', text: 'TypeScript란?' },
          {
            type: 'text',
            text: 'TypeScript는 JavaScript에 정적 타입 시스템을 추가한 언어입니다. 코드를 실행하기 전에 타입 오류를 발견할 수 있어 대규모 프로젝트에서 특히 유용합니다. `.ts` 파일을 작성하면 컴파일러가 `.js`로 변환합니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 기본 타입 어노테이션
let username: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// 배열 타입
let scores: number[] = [90, 85, 92];
let names: Array<string> = ["Kim", "Lee"];

// 튜플 — 고정 길이·타입 배열
let pair: [string, number] = ["age", 25];`,
          },
          { type: 'heading', text: '타입 추론과 Union 타입' },
          {
            type: 'text',
            text: 'TypeScript는 값을 보고 타입을 자동으로 추론합니다. 명시적으로 선언하지 않아도 되는 경우가 많습니다. `|` 연산자를 사용하면 여러 타입 중 하나를 허용하는 Union 타입을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 타입 추론 — 자동으로 string 타입
const message = "Hello";

// Union 타입 — string 또는 number
let id: string | number;
id = "abc";  // OK
id = 123;    // OK
// id = true; // Error: boolean은 허용되지 않음

// 리터럴 타입
type Direction = "up" | "down" | "left" | "right";
let dir: Direction = "up";  // OK
// dir = "diagonal"; // Error`,
          },
          {
            type: 'tip',
            text: 'TypeScript의 타입은 컴파일 시에만 존재합니다. 런타임 JavaScript에는 타입 정보가 제거되므로, 성능에 전혀 영향을 주지 않습니다.',
          },
        ],
      },
      {
        slug: 'interfaces',
        title: '인터페이스와 타입',
        duration: '20분',
        content: [
          { type: 'heading', text: 'interface와 type의 차이' },
          {
            type: 'text',
            text: '`interface`는 객체의 구조를 정의하는 데 사용되며, `type`은 Union, Intersection 등 더 넓은 범위의 타입 별칭을 만들 수 있습니다. 객체 모양을 정의할 때는 `interface`, 복합 타입에는 `type`을 사용하는 것이 일반적입니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// interface — 객체 구조 정의
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // 선택적 속성 (optional)
}

const user: User = {
  id: 1,
  name: "김철수",
  email: "kim@example.com",
};

// type 별칭 — 다양한 타입 조합
type ID = string | number;
type Status = "active" | "inactive" | "banned";`,
          },
          { type: 'heading', text: '인터페이스 확장과 교차 타입' },
          {
            type: 'code',
            language: 'typescript',
            code: `// interface 확장 (extends)
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "멍멍이",
  age: 3,
  breed: "골든리트리버",
};

// type 교차 타입 (Intersection)
type WithTimestamp = {
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  title: string;
  body: string;
} & WithTimestamp;`,
          },
          {
            type: 'list',
            items: [
              '`interface` — `extends`로 확장, 선언 병합(declaration merging) 가능',
              '`type` — Union(`|`), Intersection(`&`) 등 조합이 자유로움',
              '`?` — 선택적 속성 표시, 없어도 에러가 나지 않음',
              '`readonly` — 읽기 전용 속성, 재할당 시 컴파일 에러',
            ],
          },
          {
            type: 'tip',
            text: '팀에서 일관된 규칙이 없다면, 객체 형태는 `interface`, 그 외에는 `type`을 사용하는 것을 추천합니다.',
          },
        ],
      },
      {
        slug: 'generics',
        title: '제네릭',
        duration: '20분',
        content: [
          { type: 'heading', text: '제네릭이란?' },
          {
            type: 'text',
            text: '제네릭(Generics)은 타입을 매개변수화하여 재사용 가능한 컴포넌트를 만드는 기법입니다. 함수나 클래스가 다양한 타입에 대해 동작하면서도 타입 안전성을 유지할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 제네릭 함수
function identity<T>(value: T): T {
  return value;
}

const str = identity<string>("hello"); // string
const num = identity(42);              // number (타입 추론)

// 제네릭 배열 유틸리티
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = getFirst([10, 20, 30]); // number | undefined
const name = getFirst(["a", "b"]);    // string | undefined`,
          },
          { type: 'heading', text: '제네릭 인터페이스와 제약 조건' },
          {
            type: 'code',
            language: 'typescript',
            code: `// 제네릭 인터페이스
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<User>;
type PostListResponse = ApiResponse<Post[]>;

// 제약 조건 (extends)
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");    // OK — string은 length 있음
getLength([1, 2, 3]);  // OK — 배열도 length 있음
// getLength(42);      // Error — number에는 length 없음`,
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 실전 예제: 유틸리티 타입 활용
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Partial — 모든 속성을 선택적으로
function updateTodo(id: number, updates: Partial<Todo>) {
  // ...
}
updateTodo(1, { completed: true });

// Pick — 특정 속성만 선택
type TodoPreview = Pick<Todo, "id" | "title">;

// Omit — 특정 속성 제외
type TodoWithoutId = Omit<Todo, "id">;`,
          },
          {
            type: 'tip',
            text: 'TypeScript의 내장 유틸리티 타입(`Partial`, `Required`, `Pick`, `Omit`, `Record` 등)은 모두 제네릭으로 구현되어 있습니다. 이를 잘 활용하면 코드 중복을 크게 줄일 수 있습니다.',
          },
        ],
      },
      {
        slug: 'functions-typeguards',
        title: '함수와 타입 가드',
        duration: '20분',
        content: [
          { type: 'heading', text: '함수 타입 선언' },
          {
            type: 'text',
            text: 'TypeScript에서 함수의 매개변수와 반환 타입을 명시하면 호출 시 잘못된 인자를 컴파일 단계에서 잡을 수 있습니다. 선택적 매개변수, 기본값, 나머지 매개변수에도 타입을 지정할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 기본 함수 타입
function add(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 타입
const multiply = (a: number, b: number): number => a * b;

// 선택적 매개변수와 기본값
function greet(name: string, greeting: string = "안녕"): string {
  return greeting + ", " + name + "!";
}

// 나머지 매개변수
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// 함수 타입 별칭
type Formatter = (value: number) => string;
const toWon: Formatter = (v) => v.toLocaleString() + "원";

// void와 never
function log(msg: string): void { console.log(msg); }
function throwError(msg: string): never { throw new Error(msg); }`,
          },
          { type: 'heading', text: '함수 오버로드' },
          {
            type: 'code',
            language: 'typescript',
            code: `// 오버로드 시그니처
function format(value: string): string;
function format(value: number): string;
function format(value: Date): string;
function format(value: string | number | Date): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return value.toFixed(2);
  return value.toISOString();
}

format("hello");          // OK → string
format(3.14);             // OK → "3.14"
format(new Date());       // OK → ISO 문자열`,
          },
          { type: 'heading', text: '타입 가드 (Type Guards)' },
          {
            type: 'text',
            text: '타입 가드는 조건문 내에서 타입을 좁혀 (narrowing) 특정 타입의 속성에 안전하게 접근하게 합니다. `typeof`, `instanceof`, `in` 연산자, 그리고 사용자 정의 타입 가드를 사용합니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// typeof 가드
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // string으로 좁혀짐
  }
  return value.toFixed(2); // number로 좁혀짐
}

// in 연산자 가드
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Fish로 좁혀짐
  } else {
    animal.fly();  // Bird로 좁혀짐
  }
}

// 사용자 정의 타입 가드 (is 키워드)
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function handle(input: unknown) {
  if (isString(input)) {
    console.log(input.toUpperCase()); // string 확정
  }
}`,
          },
          { type: 'heading', text: 'Discriminated Union' },
          {
            type: 'code',
            language: 'typescript',
            code: `// 판별 유니온 — type 필드로 구분
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

// exhaustiveness check — 모든 케이스를 처리했는지 확인
function assertNever(x: never): never {
  throw new Error("Unexpected: " + x);
}`,
          },
          {
            type: 'tip',
            text: 'Discriminated Union + switch문은 TypeScript에서 가장 강력한 패턴 중 하나입니다. 새로운 타입을 추가하면 switch에서 처리하지 않은 케이스를 컴파일러가 알려줍니다.',
          },
        ],
      },
      {
        slug: 'advanced-types',
        title: '고급 타입',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Mapped Types' },
          {
            type: 'text',
            text: 'Mapped Type은 기존 타입의 각 속성을 변환하여 새로운 타입을 만듭니다. TypeScript의 내장 유틸리티 타입 대부분이 이 방식으로 구현되어 있습니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// Mapped Type 기본 구조
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Partial<T> = {
  [K in keyof T]?: T[K];
};

// 커스텀 Mapped Type
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface User {
  name: string;
  age: number;
  email: string;
}

type NullableUser = Nullable<User>;
// { name: string | null; age: number | null; email: string | null }

// as를 사용한 키 리매핑
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};
// Getters<User> = { getName: () => string; getAge: () => number; ... }`,
          },
          { type: 'heading', text: 'Conditional Types' },
          {
            type: 'text',
            text: '조건부 타입은 `T extends U ? X : Y` 형태로, 타입 수준에서 조건 분기를 수행합니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `// 조건부 타입
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">;  // true
type B = IsString<42>;       // false

// infer — 타입 추출
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FnReturn = ReturnType<() => string>; // string

// 배열 요소 타입 추출
type ElementOf<T> = T extends (infer E)[] ? E : never;
type Item = ElementOf<string[]>; // string

// 실전: Promise에서 값 타입 추출
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;
type Result = Awaited<Promise<Promise<string>>>; // string`,
          },
          { type: 'heading', text: 'Template Literal Types' },
          {
            type: 'code',
            language: 'typescript',
            code: `// 템플릿 리터럴 타입
type Color = "red" | "blue" | "green";
type Size = "sm" | "md" | "lg";

// 조합 생성
type ClassName = \`\${Size}-\${Color}\`;
// "sm-red" | "sm-blue" | "sm-green" | "md-red" | ...

// 이벤트 핸들러 타입
type EventName = "click" | "focus" | "blur";
type Handler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onFocus" | "onBlur"

// 내장 문자열 변환 타입
type Upper = Uppercase<"hello">;     // "HELLO"
type Lower = Lowercase<"HELLO">;     // "hello"
type Cap = Capitalize<"hello">;      // "Hello"
type Uncap = Uncapitalize<"Hello">;  // "hello"`,
          },
          {
            type: 'tip',
            text: '고급 타입은 라이브러리 제작자나 복잡한 타입 시스템을 다룰 때 필요합니다. 일반 애플리케이션 코드에서는 유틸리티 타입(`Partial`, `Pick`, `Omit`, `Record`)만으로도 대부분 충분합니다.',
          },
        ],
      },
      {
        slug: 'classes-modules',
        title: '클래스와 모듈',
        duration: '20분',
        content: [
          { type: 'heading', text: 'TypeScript 클래스' },
          {
            type: 'text',
            text: 'TypeScript는 JavaScript 클래스에 접근 제어자(`public`, `private`, `protected`), 추상 클래스, 인터페이스 구현 등을 추가합니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `class User {
  // 접근 제어자
  public name: string;
  private password: string;
  protected role: string;
  readonly id: number;

  // 생성자 단축 문법
  constructor(
    public email: string,
    name: string,
    password: string,
  ) {
    this.id = Date.now();
    this.name = name;
    this.password = password;
    this.role = "user";
  }

  // 메서드
  changePassword(newPw: string): void {
    this.password = newPw;
  }

  // getter
  get displayName(): string {
    return this.name + " (" + this.email + ")";
  }
}

// 추상 클래스 — 직접 인스턴스 생성 불가
abstract class Shape {
  abstract area(): number;

  describe(): string {
    return "넓이: " + this.area();
  }
}

class Circle extends Shape {
  constructor(public radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
}`,
          },
          { type: 'heading', text: '인터페이스 구현 (implements)' },
          {
            type: 'code',
            language: 'typescript',
            code: `// 인터페이스를 구현하는 클래스
interface Serializable {
  toJSON(): string;
}

interface Printable {
  print(): void;
}

class Document implements Serializable, Printable {
  constructor(
    public title: string,
    public content: string,
  ) {}

  toJSON(): string {
    return JSON.stringify({ title: this.title, content: this.content });
  }

  print(): void {
    console.log("=== " + this.title + " ===");
    console.log(this.content);
  }
}`,
          },
          { type: 'heading', text: 'tsconfig.json 핵심 옵션' },
          {
            type: 'code',
            language: 'json',
            code: `{
  "compilerOptions": {
    // 타입 체크 강도
    "strict": true,              // 모든 strict 옵션 활성화
    "noImplicitAny": true,       // 암시적 any 금지
    "strictNullChecks": true,    // null/undefined 엄격 체크

    // 모듈 & 빌드
    "target": "ES2022",          // 출력 JS 버전
    "module": "ESNext",          // 모듈 시스템
    "moduleResolution": "bundler", // 번들러 방식 모듈 해석
    "esModuleInterop": true,     // CommonJS 호환
    "resolveJsonModule": true,   // JSON import 허용

    // 경로 & 출력
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]         // 경로 별칭
    },
    "outDir": "./dist",

    // 기타
    "declaration": true,         // .d.ts 생성
    "sourceMap": true,           // 소스맵 생성
    "skipLibCheck": true         // node_modules 타입 체크 건너뛰기
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
          },
          {
            type: 'tip',
            text: '`strict: true`는 TypeScript의 모든 strict 옵션을 한번에 켭니다. 새 프로젝트에서는 항상 strict 모드를 사용하는 것을 권장합니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 타입 안전한 API 클라이언트',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요' },
          {
            type: 'text',
            text: 'TypeScript의 타입 시스템을 활용해 타입 안전한 API 클라이언트를 만듭니다. 제네릭, Discriminated Union, 유틸리티 타입을 실전에서 사용합니다.',
          },
          {
            type: 'list',
            items: [
              '제네릭 기반의 타입 안전한 fetch 래퍼',
              'API 엔드포인트별 요청/응답 타입 정의',
              '에러 처리를 위한 Result 타입 패턴',
              'Discriminated Union으로 상태 관리',
            ],
          },
          { type: 'heading', text: 'Result 타입 패턴' },
          {
            type: 'code',
            language: 'typescript',
            code: `// Result 타입 — 성공/실패를 타입으로 표현
type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

function success<T>(data: T): Result<T> {
  return { ok: true, data };
}

function failure<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

// 사용
function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return failure("0으로 나눌 수 없습니다");
  return success(a / b);
}

const result = divide(10, 3);
if (result.ok) {
  console.log(result.data);   // number 타입 확정
} else {
  console.error(result.error); // string 타입 확정
}`,
          },
          { type: 'heading', text: 'API 타입 정의' },
          {
            type: 'code',
            language: 'typescript',
            code: `// API 타입 시스템
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// 엔드포인트별 타입 매핑
interface ApiEndpoints {
  "/users": {
    GET: { response: User[] };
    POST: { body: Omit<User, "id">; response: User };
  };
  "/users/:id": {
    GET: { response: User };
    PUT: { body: Partial<User>; response: User };
    DELETE: { response: void };
  };
  "/posts": {
    GET: { response: Post[] };
    POST: { body: Omit<Post, "id">; response: Post };
  };
}`,
          },
          { type: 'heading', text: '타입 안전한 Fetch 래퍼' },
          {
            type: 'code',
            language: 'typescript',
            code: `const BASE_URL = "https://api.example.com";

async function apiClient<T>(
  url: string,
  options?: RequestInit,
): Promise<Result<T>> {
  try {
    const res = await fetch(BASE_URL + url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!res.ok) {
      return failure(new Error("HTTP " + res.status));
    }

    const data: T = await res.json();
    return success(data);
  } catch (err) {
    return failure(err instanceof Error ? err : new Error(String(err)));
  }
}

// 타입이 보장되는 API 호출 함수들
async function getUsers(): Promise<Result<User[]>> {
  return apiClient<User[]>("/users");
}

async function getUser(id: number): Promise<Result<User>> {
  return apiClient<User>("/users/" + id);
}

async function createUser(
  data: Omit<User, "id">,
): Promise<Result<User>> {
  return apiClient<User>("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// 사용
async function main() {
  const result = await getUsers();
  if (result.ok) {
    result.data.forEach(user => {
      console.log(user.name); // 자동완성 지원!
    });
  }
}`,
          },
          {
            type: 'tip',
            text: 'Result 패턴을 사용하면 try-catch 없이도 에러를 타입 수준에서 처리할 수 있습니다. Rust의 Result 타입에서 영감을 받은 패턴으로, TypeScript에서도 매우 효과적입니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'TypeScript 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '유틸리티 타입 모음' },
          {
            type: 'code',
            language: 'typescript',
            code: `// ─── 객체 변환 ───
Partial<T>          // 모든 속성을 선택적으로
Required<T>         // 모든 속성을 필수로
Readonly<T>         // 모든 속성을 readonly로

// ─── 속성 선택/제외 ───
Pick<T, K>          // K에 해당하는 속성만 선택
Omit<T, K>          // K에 해당하는 속성을 제외

// ─── 함수 관련 ───
ReturnType<F>       // 함수의 반환 타입 추출
Parameters<F>       // 함수의 매개변수 타입 (튜플)
ConstructorParameters<C> // 생성자 매개변수 타입

// ─── 매핑 ───
Record<K, V>        // 키 K, 값 V인 객체 타입
                    // Record<string, number> = { [k: string]: number }

// ─── Union 조작 ───
Exclude<T, U>       // T에서 U에 해당하는 타입 제거
Extract<T, U>       // T에서 U에 해당하는 타입만 추출
NonNullable<T>      // null, undefined 제거

// ─── 문자열 변환 ───
Uppercase<S>        // 대문자로
Lowercase<S>        // 소문자로
Capitalize<S>       // 첫 글자 대문자
Uncapitalize<S>     // 첫 글자 소문자

// ─── 인스턴스 ───
InstanceType<C>     // 클래스의 인스턴스 타입
ThisParameterType<F> // this 매개변수 타입`,
          },
          { type: 'heading', text: '타입 가드 패턴 정리' },
          {
            type: 'code',
            language: 'typescript',
            code: `// typeof — 원시 타입 체크
if (typeof x === "string") { /* string */ }
if (typeof x === "number") { /* number */ }

// instanceof — 클래스 인스턴스 체크
if (x instanceof Date) { /* Date */ }
if (x instanceof Error) { /* Error */ }

// in — 속성 존재 체크
if ("swim" in animal) { /* { swim: ... } */ }

// 사용자 정의 타입 가드 (is)
function isUser(v: unknown): v is User {
  return typeof v === "object" && v !== null && "id" in v;
}

// Discriminated Union — kind/type 필드로 구분
switch (action.type) {
  case "add": /* AddAction */ break;
  case "remove": /* RemoveAction */ break;
}

// as const — 리터럴 타입 보존
const config = { port: 3000, host: "localhost" } as const;
// { readonly port: 3000; readonly host: "localhost" }`,
          },
          { type: 'heading', text: '자주 쓰는 패턴' },
          {
            type: 'list',
            items: [
              '`as const` — 객체/배열을 리터럴 타입으로 고정',
              '`satisfies T` — 타입을 체크하되 추론은 유지',
              '`keyof T` — 객체의 키를 유니온 타입으로',
              '`T[K]` — 인덱스 접근 타입 (Lookup Type)',
              '`typeof x` — 값에서 타입을 추출',
              '`T extends U ? X : Y` — 조건부 타입',
              '`infer R` — 조건부 타입 내 타입 추론',
              '`[K in keyof T]` — Mapped Type (속성 순회)',
              '`!` (non-null assertion) — null이 아님을 단언 (주의해서 사용)',
              '`unknown` — any보다 안전한 최상위 타입 (타입 가드 필요)',
            ],
          },
          {
            type: 'tip',
            text: 'TypeScript 공식 Playground(typescriptlang.org/play)에서 타입을 실험해 볼 수 있습니다. 에디터 위에 마우스를 올리면 추론된 타입을 바로 확인할 수 있어 학습에 매우 유용합니다.',
          },
        ],
      },
    ],
  },

  // ─── 3. Python 기초 ───
  {
    slug: 'python',
    title: 'Python 기초',
    description: '간결하고 강력한 프로그래밍 언어 Python 입문',
    category: 'programming',
    color: 'bg-blue-600',
    difficulty: 'beginner',
    objectives: [
      '변수, 타입, 제어문, 함수 핵심 문법',
      '리스트, 딕셔너리, 세트 자료구조',
      '클래스와 객체지향 프로그래밍',
      '파일 처리, 예외 처리, 제너레이터',
      '실전 프로젝트와 내장 함수 레퍼런스',
    ],
    lessons: [
      {
        slug: 'python-basics',
        title: 'Python 기초 문법',
        duration: '15분',
        content: [
          { type: 'heading', text: 'Python 시작하기' },
          {
            type: 'text',
            text: 'Python은 들여쓰기(indentation)로 코드 블록을 구분하는 언어입니다. 세미콜론이나 중괄호 대신 콜론(`:`)과 들여쓰기를 사용하여 가독성이 뛰어납니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: `# 변수 선언 — 타입을 명시하지 않아도 됨
name = "홍길동"
age = 25
pi = 3.14
is_student = True

# 출력
print(f"이름: {name}, 나이: {age}")

# 입력
# user_input = input("이름을 입력하세요: ")`,
          },
          { type: 'heading', text: '조건문과 반복문' },
          {
            type: 'code',
            language: 'python',
            code: `# 조건문
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

print(f"학점: {grade}")  # 학점: B

# for 반복문
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4

# while 반복문
count = 0
while count < 3:
    print(f"반복 {count}")
    count += 1`,
          },
          {
            type: 'list',
            items: [
              '`print()` — 출력 함수, `f"..."`로 포맷 문자열 사용',
              '`range(n)` — 0부터 n-1까지의 정수 시퀀스 생성',
              '`if / elif / else` — 조건 분기, 콜론과 들여쓰기 필수',
              '`#` — 한 줄 주석, 여러 줄은 `"""..."""` 사용',
            ],
          },
          {
            type: 'tip',
            text: 'Python에서 들여쓰기는 공백 4칸이 표준입니다. 탭과 공백을 섞어 사용하면 `IndentationError`가 발생하니 주의하세요.',
          },
        ],
      },
      {
        slug: 'lists-dicts',
        title: '리스트와 딕셔너리',
        duration: '20분',
        content: [
          { type: 'heading', text: '리스트 (List)' },
          {
            type: 'text',
            text: '리스트는 순서가 있는 변경 가능한(mutable) 데이터 모음입니다. 대괄호 `[]`로 생성하며, 다양한 타입의 요소를 포함할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: `# 리스트 생성과 조작
fruits = ["사과", "바나나", "포도"]

fruits.append("딸기")       # 끝에 추가
fruits.insert(1, "오렌지")  # 인덱스 1에 삽입
fruits.remove("바나나")     # 값으로 삭제

print(fruits)  # ['사과', '오렌지', '포도', '딸기']

# 슬라이싱
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])   # [1, 2, 3]
print(numbers[::2])   # [0, 2, 4] — 2칸 간격
print(numbers[::-1])  # [5, 4, 3, 2, 1, 0] — 뒤집기

# 리스트 컴프리헨션
squares = [x ** 2 for x in range(6)]
print(squares)  # [0, 1, 4, 9, 16, 25]

evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]`,
          },
          { type: 'heading', text: '딕셔너리 (Dictionary)' },
          {
            type: 'text',
            text: '딕셔너리는 키-값 쌍으로 이루어진 데이터 구조입니다. 중괄호 `{}`로 생성하며, 키를 통해 빠르게 값을 조회할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: `# 딕셔너리 생성
student = {
    "name": "김철수",
    "age": 20,
    "scores": [90, 85, 92]
}

# 값 접근
print(student["name"])           # 김철수
print(student.get("email", "없음"))  # 없음 (기본값)

# 수정과 추가
student["age"] = 21
student["email"] = "kim@test.com"

# 순회
for key, value in student.items():
    print(f"{key}: {value}")

# 딕셔너리 컴프리헨션
word_lengths = {word: len(word) for word in ["hello", "world", "python"]}
print(word_lengths)  # {'hello': 5, 'world': 5, 'python': 6}`,
          },
          {
            type: 'tip',
            text: '`dict.get(key, default)`를 사용하면 키가 없을 때 `KeyError` 대신 기본값을 반환합니다. 안전하게 값을 조회할 때 유용합니다.',
          },
        ],
      },
      {
        slug: 'python-functions',
        title: '함수와 모듈',
        duration: '15분',
        content: [
          { type: 'heading', text: '함수 정의하기' },
          {
            type: 'text',
            text: 'Python에서 함수는 `def` 키워드로 정의합니다. 기본값 매개변수, 가변 인자(`*args`), 키워드 인자(`**kwargs`)를 지원합니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: `# 기본 함수
def greet(name, greeting="안녕하세요"):
    return f"{greeting}, {name}님!"

print(greet("영희"))              # 안녕하세요, 영희님!
print(greet("철수", "반갑습니다"))  # 반갑습니다, 철수님!

# 가변 인자
def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3, 4))  # 10

# 람다 함수
square = lambda x: x ** 2
print(square(5))  # 25

# 정렬에 활용
students = [("김", 85), ("이", 92), ("박", 78)]
students.sort(key=lambda s: s[1], reverse=True)
print(students)  # [('이', 92), ('김', 85), ('박', 78)]`,
          },
          { type: 'heading', text: '모듈과 import' },
          {
            type: 'text',
            text: 'Python은 풍부한 표준 라이브러리를 제공합니다. `import`로 모듈을 불러와 사용할 수 있으며, 직접 모듈을 만들 수도 있습니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: `# 표준 라이브러리 활용
import math
print(math.sqrt(16))  # 4.0
print(math.pi)        # 3.141592653589793

from datetime import datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))

import random
print(random.randint(1, 100))  # 1~100 사이 랜덤 정수

# json 모듈
import json
data = {"name": "Python", "version": 3.12}
json_str = json.dumps(data, ensure_ascii=False)
print(json_str)  # {"name": "Python", "version": 3.12}`,
          },
          {
            type: 'list',
            items: [
              '`import math` — 모듈 전체를 가져옴',
              '`from os import path` — 특정 요소만 가져옴',
              '`import numpy as np` — 별칭(alias)을 붙여 가져옴',
              '`if __name__ == "__main__":` — 직접 실행 시에만 동작하는 코드 블록',
            ],
          },
          {
            type: 'tip',
            text: 'Python 파일 하나가 곧 모듈입니다. `utils.py`를 만들면 다른 파일에서 `import utils`로 사용할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'data-structures',
        title: '리스트, 딕셔너리, 세트, 튜플 심화',
        duration: '20분',
        content: [
          { type: 'heading', text: '리스트 심화' },
          {
            type: 'text',
            text: 'Python 리스트는 다양한 내장 메서드를 제공합니다. 정렬, 역순, 복사 등 자주 쓰이는 조작법을 알아봅시다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 리스트 메서드 심화\n'
              + 'numbers = [3, 1, 4, 1, 5, 9, 2, 6]\n'
              + '\n'
              + '# 정렬\n'
              + 'numbers.sort()\n'
              + 'print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]\n'
              + '\n'
              + '# 역순 정렬\n'
              + 'numbers.sort(reverse=True)\n'
              + 'print(numbers)  # [9, 6, 5, 4, 3, 2, 1, 1]\n'
              + '\n'
              + '# 원본을 유지하며 정렬\n'
              + 'original = [3, 1, 4, 1, 5]\n'
              + 'sorted_list = sorted(original)\n'
              + 'print(original)     # [3, 1, 4, 1, 5]\n'
              + 'print(sorted_list)  # [1, 1, 3, 4, 5]\n'
              + '\n'
              + '# 리스트 언패킹\n'
              + 'first, *rest = [1, 2, 3, 4, 5]\n'
              + 'print(first)  # 1\n'
              + 'print(rest)   # [2, 3, 4, 5]\n'
              + '\n'
              + '# 중첩 리스트 (2D)\n'
              + 'matrix = [\n'
              + '    [1, 2, 3],\n'
              + '    [4, 5, 6],\n'
              + '    [7, 8, 9]\n'
              + ']\n'
              + 'print(matrix[1][2])  # 6',
          },
          { type: 'heading', text: '튜플 (Tuple)' },
          {
            type: 'text',
            text: '튜플은 리스트와 비슷하지만 변경 불가능(immutable)합니다. 소괄호 `()`로 생성하며, 딕셔너리의 키로 사용할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 튜플 생성\n'
              + 'point = (3, 4)\n'
              + 'rgb = (255, 128, 0)\n'
              + '\n'
              + '# 언패킹\n'
              + 'x, y = point\n'
              + 'print(x, y)  # 3 4\n'
              + '\n'
              + '# 함수에서 여러 값 반환\n'
              + 'def divide(a, b):\n'
              + '    return a // b, a % b\n'
              + '\n'
              + 'quotient, remainder = divide(17, 5)\n'
              + 'print(quotient, remainder)  # 3 2\n'
              + '\n'
              + '# 네임드 튜플\n'
              + 'from collections import namedtuple\n'
              + 'Point = namedtuple("Point", ["x", "y"])\n'
              + 'p = Point(3, 4)\n'
              + 'print(p.x, p.y)  # 3 4',
          },
          { type: 'heading', text: '세트 (Set)' },
          {
            type: 'text',
            text: '세트는 중복을 허용하지 않는 순서 없는 집합입니다. 합집합, 교집합, 차집합 등 수학적 집합 연산을 지원합니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 세트 생성\n'
              + 'fruits = {"사과", "바나나", "포도", "사과"}  # 중복 제거\n'
              + 'print(fruits)  # {"사과", "바나나", "포도"}\n'
              + '\n'
              + '# 세트 연산\n'
              + 'a = {1, 2, 3, 4}\n'
              + 'b = {3, 4, 5, 6}\n'
              + '\n'
              + 'print(a | b)   # 합집합: {1, 2, 3, 4, 5, 6}\n'
              + 'print(a & b)   # 교집합: {3, 4}\n'
              + 'print(a - b)   # 차집합: {1, 2}\n'
              + 'print(a ^ b)   # 대칭차: {1, 2, 5, 6}\n'
              + '\n'
              + '# 멤버십 테스트 (리스트보다 빠름)\n'
              + 'large_set = set(range(100000))\n'
              + 'print(99999 in large_set)  # True (O(1))\n'
              + '\n'
              + '# 리스트에서 중복 제거\n'
              + 'nums = [1, 2, 2, 3, 3, 3]\n'
              + 'unique = list(set(nums))\n'
              + 'print(unique)  # [1, 2, 3]',
          },
          { type: 'heading', text: '딕셔너리 심화' },
          {
            type: 'code',
            language: 'python',
            code: '# defaultdict - 기본값 자동 생성\n'
              + 'from collections import defaultdict\n'
              + '\n'
              + 'word_count = defaultdict(int)\n'
              + 'for word in ["apple", "banana", "apple", "cherry", "banana", "apple"]:\n'
              + '    word_count[word] += 1\n'
              + 'print(dict(word_count))  # {"apple": 3, "banana": 2, "cherry": 1}\n'
              + '\n'
              + '# Counter - 빈도수 세기\n'
              + 'from collections import Counter\n'
              + 'c = Counter("abracadabra")\n'
              + 'print(c.most_common(3))  # [("a", 5), ("b", 2), ("r", 2)]\n'
              + '\n'
              + '# 딕셔너리 병합 (Python 3.9+)\n'
              + 'defaults = {"color": "red", "size": 10}\n'
              + 'overrides = {"size": 20, "weight": 5}\n'
              + 'merged = defaults | overrides\n'
              + 'print(merged)  # {"color": "red", "size": 20, "weight": 5}',
          },
          {
            type: 'list',
            items: [
              '`list` -- 순서 있는 변경 가능한 시퀀스 `[]`',
              '`tuple` -- 순서 있는 변경 불가능한 시퀀스 `()`',
              '`set` -- 중복 없는 순서 없는 집합 `{}`',
              '`dict` -- 키-값 쌍의 매핑 `{k: v}`',
              '`frozenset` -- 변경 불가능한 세트 (딕셔너리 키로 사용 가능)',
            ],
          },
          {
            type: 'tip',
            text: '데이터가 변경되지 않아야 한다면 리스트 대신 튜플을 사용하세요. 실수로 값을 바꾸는 것을 방지하고, 딕셔너리 키로도 사용할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'oop',
        title: '클래스와 객체지향 프로그래밍',
        duration: '20분',
        content: [
          { type: 'heading', text: '클래스 기초' },
          {
            type: 'text',
            text: 'Python은 객체지향 프로그래밍(OOP)을 지원합니다. `class` 키워드로 클래스를 정의하고, `__init__` 메서드로 초기화합니다. `self`는 인스턴스 자신을 가리킵니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: 'class Dog:\n'
              + '    # 클래스 변수 (모든 인스턴스가 공유)\n'
              + '    species = "개"\n'
              + '\n'
              + '    def __init__(self, name, age):\n'
              + '        # 인스턴스 변수\n'
              + '        self.name = name\n'
              + '        self.age = age\n'
              + '\n'
              + '    def bark(self):\n'
              + '        return self.name + ": 멍멍!"\n'
              + '\n'
              + '    def info(self):\n'
              + '        return self.name + " (" + str(self.age) + "살)"\n'
              + '\n'
              + '# 인스턴스 생성\n'
              + 'dog1 = Dog("바둑이", 3)\n'
              + 'dog2 = Dog("초코", 5)\n'
              + '\n'
              + 'print(dog1.bark())  # 바둑이: 멍멍!\n'
              + 'print(dog2.info())  # 초코 (5살)\n'
              + 'print(Dog.species)  # 개',
          },
          { type: 'heading', text: '상속과 다형성' },
          {
            type: 'text',
            text: '상속을 통해 기존 클래스를 확장할 수 있습니다. 자식 클래스는 부모 클래스의 속성과 메서드를 물려받으며, 메서드 오버라이딩으로 동작을 변경할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: 'class Animal:\n'
              + '    def __init__(self, name):\n'
              + '        self.name = name\n'
              + '\n'
              + '    def speak(self):\n'
              + '        raise NotImplementedError("하위 클래스에서 구현하세요")\n'
              + '\n'
              + '    def __str__(self):\n'
              + '        return "Animal: " + self.name\n'
              + '\n'
              + 'class Cat(Animal):\n'
              + '    def speak(self):\n'
              + '        return self.name + ": 야옹~"\n'
              + '\n'
              + 'class Duck(Animal):\n'
              + '    def speak(self):\n'
              + '        return self.name + ": 꽥꽥!"\n'
              + '\n'
              + '# 다형성 - 같은 인터페이스, 다른 동작\n'
              + 'animals = [Cat("나비"), Duck("도널드")]\n'
              + 'for animal in animals:\n'
              + '    print(animal.speak())\n'
              + '# 나비: 야옹~\n'
              + '# 도널드: 꽥꽥!',
          },
          { type: 'heading', text: '특수 메서드 (매직 메서드)' },
          {
            type: 'code',
            language: 'python',
            code: 'class Vector:\n'
              + '    def __init__(self, x, y):\n'
              + '        self.x = x\n'
              + '        self.y = y\n'
              + '\n'
              + '    def __add__(self, other):\n'
              + '        return Vector(self.x + other.x, self.y + other.y)\n'
              + '\n'
              + '    def __repr__(self):\n'
              + '        return "Vector(" + str(self.x) + ", " + str(self.y) + ")"\n'
              + '\n'
              + '    def __eq__(self, other):\n'
              + '        return self.x == other.x and self.y == other.y\n'
              + '\n'
              + '    def __len__(self):\n'
              + '        return int((self.x ** 2 + self.y ** 2) ** 0.5)\n'
              + '\n'
              + 'v1 = Vector(1, 2)\n'
              + 'v2 = Vector(3, 4)\n'
              + 'v3 = v1 + v2\n'
              + '\n'
              + 'print(v3)        # Vector(4, 6)\n'
              + 'print(v1 == v2)  # False\n'
              + 'print(len(v2))   # 5',
          },
          {
            type: 'list',
            items: [
              '`__init__` -- 생성자, 인스턴스 초기화',
              '`__str__` -- `print()` 시 출력 문자열',
              '`__repr__` -- 개발용 문자열 표현',
              '`__add__`, `__sub__` -- 연산자 오버로딩',
              '`__eq__`, `__lt__` -- 비교 연산자 정의',
              '`super()` -- 부모 클래스 메서드 호출',
            ],
          },
          {
            type: 'tip',
            text: 'Python은 다중 상속을 지원하지만, 복잡도가 높아지므로 되도록 단일 상속과 믹스인(Mixin) 패턴을 사용하세요.',
          },
        ],
      },
      {
        slug: 'file-io-exceptions',
        title: '파일 처리와 예외 처리',
        duration: '20분',
        content: [
          { type: 'heading', text: '파일 읽기와 쓰기' },
          {
            type: 'text',
            text: 'Python에서는 `open()` 함수로 파일을 열고, `with` 문을 사용하면 파일이 자동으로 닫힙니다. 텍스트와 바이너리 모드를 지원합니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 파일 쓰기\n'
              + 'with open("example.txt", "w", encoding="utf-8") as f:\n'
              + '    f.write("첫 번째 줄\\n")\n'
              + '    f.write("두 번째 줄\\n")\n'
              + '    f.write("세 번째 줄\\n")\n'
              + '\n'
              + '# 파일 읽기 (전체)\n'
              + 'with open("example.txt", "r", encoding="utf-8") as f:\n'
              + '    content = f.read()\n'
              + '    print(content)\n'
              + '\n'
              + '# 줄 단위 읽기\n'
              + 'with open("example.txt", "r", encoding="utf-8") as f:\n'
              + '    for line in f:\n'
              + '        print(line.strip())  # 줄바꿈 제거\n'
              + '\n'
              + '# 파일에 이어쓰기\n'
              + 'with open("example.txt", "a", encoding="utf-8") as f:\n'
              + '    f.write("추가된 줄\\n")',
          },
          { type: 'heading', text: 'CSV와 JSON 파일 다루기' },
          {
            type: 'code',
            language: 'python',
            code: 'import csv\n'
              + 'import json\n'
              + '\n'
              + '# CSV 쓰기\n'
              + 'data = [\n'
              + '    ["이름", "나이", "도시"],\n'
              + '    ["김철수", 25, "서울"],\n'
              + '    ["이영희", 30, "부산"],\n'
              + ']\n'
              + 'with open("data.csv", "w", newline="", encoding="utf-8") as f:\n'
              + '    writer = csv.writer(f)\n'
              + '    writer.writerows(data)\n'
              + '\n'
              + '# CSV 읽기\n'
              + 'with open("data.csv", "r", encoding="utf-8") as f:\n'
              + '    reader = csv.DictReader(f)\n'
              + '    for row in reader:\n'
              + '        print(row["이름"], row["나이"])\n'
              + '\n'
              + '# JSON 쓰기/읽기\n'
              + 'config = {"theme": "dark", "font_size": 14, "lang": "ko"}\n'
              + 'with open("config.json", "w", encoding="utf-8") as f:\n'
              + '    json.dump(config, f, ensure_ascii=False, indent=2)\n'
              + '\n'
              + 'with open("config.json", "r", encoding="utf-8") as f:\n'
              + '    loaded = json.load(f)\n'
              + '    print(loaded["theme"])  # dark',
          },
          { type: 'heading', text: '예외 처리 (try / except)' },
          {
            type: 'text',
            text: '예외 처리를 사용하면 프로그램이 오류로 멈추지 않고 적절히 대응할 수 있습니다. `try / except / else / finally` 구조를 사용합니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 기본 예외 처리\n'
              + 'try:\n'
              + '    number = int(input("숫자를 입력하세요: "))\n'
              + '    result = 100 / number\n'
              + '    print("결과:", result)\n'
              + 'except ValueError:\n'
              + '    print("유효한 숫자가 아닙니다!")\n'
              + 'except ZeroDivisionError:\n'
              + '    print("0으로 나눌 수 없습니다!")\n'
              + 'except Exception as e:\n'
              + '    print("예상치 못한 오류:", e)\n'
              + 'else:\n'
              + '    print("오류 없이 실행됨")\n'
              + 'finally:\n'
              + '    print("항상 실행되는 블록")\n'
              + '\n'
              + '# 커스텀 예외\n'
              + 'class InvalidAgeError(Exception):\n'
              + '    def __init__(self, age):\n'
              + '        self.age = age\n'
              + '        super().__init__("유효하지 않은 나이: " + str(age))\n'
              + '\n'
              + 'def set_age(age):\n'
              + '    if age < 0 or age > 150:\n'
              + '        raise InvalidAgeError(age)\n'
              + '    return age\n'
              + '\n'
              + 'try:\n'
              + '    set_age(200)\n'
              + 'except InvalidAgeError as e:\n'
              + '    print(e)  # 유효하지 않은 나이: 200',
          },
          {
            type: 'list',
            items: [
              '`try / except` -- 예외를 잡아서 처리',
              '`else` -- 예외가 발생하지 않으면 실행',
              '`finally` -- 예외 여부와 관계없이 항상 실행',
              '`raise` -- 예외를 발생시킴',
              '`with` -- 컨텍스트 매니저, 리소스 자동 정리',
            ],
          },
          {
            type: 'tip',
            text: '`except Exception`으로 모든 예외를 잡기보다는, 처리할 수 있는 구체적인 예외만 잡으세요. 디버깅이 쉬워집니다.',
          },
        ],
      },
      {
        slug: 'comprehensions-generators',
        title: '컴프리헨션과 제너레이터',
        duration: '20분',
        content: [
          { type: 'heading', text: '리스트 컴프리헨션' },
          {
            type: 'text',
            text: '컴프리헨션은 반복 가능한 객체로부터 새로운 컬렉션을 간결하게 생성하는 Pythonic한 문법입니다. for 루프보다 읽기 쉽고 빠릅니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 리스트 컴프리헨션 기본\n'
              + 'squares = [x ** 2 for x in range(10)]\n'
              + 'print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n'
              + '\n'
              + '# 조건 필터링\n'
              + 'evens = [x for x in range(20) if x % 2 == 0]\n'
              + 'print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n'
              + '\n'
              + '# 조건 + 변환\n'
              + 'words = ["Hello", "WORLD", "Python"]\n'
              + 'lower_long = [w.lower() for w in words if len(w) > 5]\n'
              + 'print(lower_long)  # ["python"]\n'
              + '\n'
              + '# 중첩 컴프리헨션 (2D 리스트 평탄화)\n'
              + 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n'
              + 'flat = [x for row in matrix for x in row]\n'
              + 'print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]',
          },
          { type: 'heading', text: '딕셔너리 / 세트 컴프리헨션' },
          {
            type: 'code',
            language: 'python',
            code: '# 딕셔너리 컴프리헨션\n'
              + 'names = ["Alice", "Bob", "Charlie"]\n'
              + 'name_lengths = {name: len(name) for name in names}\n'
              + 'print(name_lengths)  # {"Alice": 5, "Bob": 3, "Charlie": 7}\n'
              + '\n'
              + '# 키-값 뒤집기\n'
              + 'original = {"a": 1, "b": 2, "c": 3}\n'
              + 'flipped = {v: k for k, v in original.items()}\n'
              + 'print(flipped)  # {1: "a", 2: "b", 3: "c"}\n'
              + '\n'
              + '# 세트 컴프리헨션\n'
              + 'text = "hello world"\n'
              + 'vowels = {ch for ch in text if ch in "aeiou"}\n'
              + 'print(vowels)  # {"e", "o"}',
          },
          { type: 'heading', text: '제너레이터' },
          {
            type: 'text',
            text: '제너레이터는 값을 한 번에 하나씩 생성하는 이터레이터입니다. `yield` 키워드를 사용하며, 메모리를 절약할 수 있습니다. 대용량 데이터 처리에 유용합니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 제너레이터 함수\n'
              + 'def fibonacci(n):\n'
              + '    a, b = 0, 1\n'
              + '    for _ in range(n):\n'
              + '        yield a\n'
              + '        a, b = b, a + b\n'
              + '\n'
              + '# 사용\n'
              + 'for num in fibonacci(10):\n'
              + '    print(num, end=" ")  # 0 1 1 2 3 5 8 13 21 34\n'
              + 'print()\n'
              + '\n'
              + '# 제너레이터 표현식 (메모리 효율적)\n'
              + 'sum_squares = sum(x ** 2 for x in range(1000000))\n'
              + 'print(sum_squares)\n'
              + '\n'
              + '# 리스트 vs 제너레이터 메모리 비교\n'
              + 'import sys\n'
              + 'list_size = sys.getsizeof([x for x in range(10000)])\n'
              + 'gen_size = sys.getsizeof(x for x in range(10000))\n'
              + 'print("리스트:", list_size, "bytes")   # ~87624 bytes\n'
              + 'print("제너레이터:", gen_size, "bytes")  # ~200 bytes\n'
              + '\n'
              + '# yield from - 제너레이터 위임\n'
              + 'def chain(*iterables):\n'
              + '    for it in iterables:\n'
              + '        yield from it\n'
              + '\n'
              + 'result = list(chain([1, 2], [3, 4], [5]))\n'
              + 'print(result)  # [1, 2, 3, 4, 5]',
          },
          {
            type: 'list',
            items: [
              '`[expr for x in iterable]` -- 리스트 컴프리헨션',
              '`{k: v for ...}` -- 딕셔너리 컴프리헨션',
              '`{expr for ...}` -- 세트 컴프리헨션',
              '`(expr for x in iterable)` -- 제너레이터 표현식',
              '`yield` -- 제너레이터 함수에서 값을 하나씩 반환',
            ],
          },
          {
            type: 'tip',
            text: '컴프리헨션이 3중 이상 중첩되면 가독성이 떨어집니다. 복잡한 로직은 일반 for 루프가 더 명확합니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 주소록 관리 프로그램',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요' },
          {
            type: 'text',
            text: '지금까지 배운 내용을 활용하여 주소록 관리 프로그램을 만들어 봅시다. 연락처를 추가, 검색, 삭제하고 파일에 저장하는 CLI 프로그램입니다.',
          },
          { type: 'heading', text: 'Contact 클래스 정의' },
          {
            type: 'code',
            language: 'python',
            code: 'import json\n'
              + 'import os\n'
              + '\n'
              + 'class Contact:\n'
              + '    def __init__(self, name, phone, email=""):\n'
              + '        self.name = name\n'
              + '        self.phone = phone\n'
              + '        self.email = email\n'
              + '\n'
              + '    def to_dict(self):\n'
              + '        return {\n'
              + '            "name": self.name,\n'
              + '            "phone": self.phone,\n'
              + '            "email": self.email\n'
              + '        }\n'
              + '\n'
              + '    @classmethod\n'
              + '    def from_dict(cls, data):\n'
              + '        return cls(data["name"], data["phone"], data.get("email", ""))\n'
              + '\n'
              + '    def __str__(self):\n'
              + '        info = self.name + " | " + self.phone\n'
              + '        if self.email:\n'
              + '            info += " | " + self.email\n'
              + '        return info',
          },
          { type: 'heading', text: 'AddressBook 클래스' },
          {
            type: 'code',
            language: 'python',
            code: 'class AddressBook:\n'
              + '    def __init__(self, filename="contacts.json"):\n'
              + '        self.filename = filename\n'
              + '        self.contacts = []\n'
              + '        self.load()\n'
              + '\n'
              + '    def add(self, contact):\n'
              + '        self.contacts.append(contact)\n'
              + '        self.save()\n'
              + '        print(contact.name + " 추가 완료")\n'
              + '\n'
              + '    def search(self, keyword):\n'
              + '        results = [\n'
              + '            c for c in self.contacts\n'
              + '            if keyword.lower() in c.name.lower()\n'
              + '            or keyword in c.phone\n'
              + '        ]\n'
              + '        return results\n'
              + '\n'
              + '    def delete(self, name):\n'
              + '        before = len(self.contacts)\n'
              + '        self.contacts = [\n'
              + '            c for c in self.contacts if c.name != name\n'
              + '        ]\n'
              + '        if len(self.contacts) < before:\n'
              + '            self.save()\n'
              + '            print(name + " 삭제 완료")\n'
              + '        else:\n'
              + '            print(name + "을(를) 찾을 수 없습니다")\n'
              + '\n'
              + '    def list_all(self):\n'
              + '        if not self.contacts:\n'
              + '            print("주소록이 비어 있습니다")\n'
              + '            return\n'
              + '        for i, c in enumerate(self.contacts, 1):\n'
              + '            print(str(i) + ". " + str(c))\n'
              + '\n'
              + '    def save(self):\n'
              + '        data = [c.to_dict() for c in self.contacts]\n'
              + '        with open(self.filename, "w", encoding="utf-8") as f:\n'
              + '            json.dump(data, f, ensure_ascii=False, indent=2)\n'
              + '\n'
              + '    def load(self):\n'
              + '        if os.path.exists(self.filename):\n'
              + '            with open(self.filename, "r", encoding="utf-8") as f:\n'
              + '                data = json.load(f)\n'
              + '                self.contacts = [Contact.from_dict(d) for d in data]',
          },
          { type: 'heading', text: '메인 루프' },
          {
            type: 'code',
            language: 'python',
            code: 'def main():\n'
              + '    book = AddressBook()\n'
              + '    print("=== 주소록 관리 프로그램 ===")\n'
              + '\n'
              + '    while True:\n'
              + '        print("\\n[1] 추가  [2] 검색  [3] 목록  [4] 삭제  [5] 종료")\n'
              + '        choice = input("선택: ").strip()\n'
              + '\n'
              + '        if choice == "1":\n'
              + '            name = input("이름: ").strip()\n'
              + '            phone = input("전화번호: ").strip()\n'
              + '            email = input("이메일 (선택): ").strip()\n'
              + '            book.add(Contact(name, phone, email))\n'
              + '\n'
              + '        elif choice == "2":\n'
              + '            keyword = input("검색어 (이름/전화): ").strip()\n'
              + '            results = book.search(keyword)\n'
              + '            if results:\n'
              + '                for c in results:\n'
              + '                    print("  ->", c)\n'
              + '            else:\n'
              + '                print("검색 결과가 없습니다")\n'
              + '\n'
              + '        elif choice == "3":\n'
              + '            book.list_all()\n'
              + '\n'
              + '        elif choice == "4":\n'
              + '            name = input("삭제할 이름: ").strip()\n'
              + '            book.delete(name)\n'
              + '\n'
              + '        elif choice == "5":\n'
              + '            print("프로그램을 종료합니다.")\n'
              + '            break\n'
              + '\n'
              + '        else:\n'
              + '            print("잘못된 입력입니다")\n'
              + '\n'
              + 'if __name__ == "__main__":\n'
              + '    main()',
          },
          {
            type: 'tip',
            text: '이 프로젝트는 클래스, 파일 I/O, 예외 처리, 리스트 컴프리헨션 등 지금까지 배운 핵심 개념을 모두 활용합니다. 기능을 추가해 보세요: 수정, 정렬, CSV 내보내기 등.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Python 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '내장 함수 (Built-in Functions)' },
          {
            type: 'text',
            text: 'Python은 별도의 import 없이 사용할 수 있는 다양한 내장 함수를 제공합니다. 가장 자주 사용되는 함수들을 정리했습니다.',
          },
          {
            type: 'code',
            language: 'python',
            code: '# 타입 변환\n'
              + 'int("42")        # 42\n'
              + 'float("3.14")    # 3.14\n'
              + 'str(100)         # "100"\n'
              + 'bool(0)          # False\n'
              + 'list("abc")      # ["a", "b", "c"]\n'
              + 'tuple([1, 2])    # (1, 2)\n'
              + 'set([1, 1, 2])   # {1, 2}\n'
              + 'dict(a=1, b=2)   # {"a": 1, "b": 2}\n'
              + '\n'
              + '# 수학\n'
              + 'abs(-5)          # 5\n'
              + 'round(3.7)       # 4\n'
              + 'round(3.145, 2)  # 3.14\n'
              + 'pow(2, 10)       # 1024\n'
              + 'divmod(17, 5)    # (3, 2)\n'
              + 'min(3, 1, 4)     # 1\n'
              + 'max(3, 1, 4)     # 4\n'
              + 'sum([1, 2, 3])   # 6',
          },
          { type: 'heading', text: '이터러블 관련 함수' },
          {
            type: 'code',
            language: 'python',
            code: '# 정렬과 역순\n'
              + 'sorted([3, 1, 4])              # [1, 3, 4]\n'
              + 'sorted("hello")                # ["e", "h", "l", "l", "o"]\n'
              + 'list(reversed([1, 2, 3]))      # [3, 2, 1]\n'
              + '\n'
              + '# enumerate - 인덱스와 값\n'
              + 'for i, v in enumerate(["a", "b", "c"]):\n'
              + '    print(i, v)  # 0 a, 1 b, 2 c\n'
              + '\n'
              + '# zip - 여러 이터러블 묶기\n'
              + 'names = ["Alice", "Bob"]\n'
              + 'scores = [90, 85]\n'
              + 'for name, score in zip(names, scores):\n'
              + '    print(name, score)\n'
              + '\n'
              + '# map과 filter\n'
              + 'nums = [1, 2, 3, 4, 5]\n'
              + 'doubled = list(map(lambda x: x * 2, nums))\n'
              + 'print(doubled)  # [2, 4, 6, 8, 10]\n'
              + '\n'
              + 'evens = list(filter(lambda x: x % 2 == 0, nums))\n'
              + 'print(evens)  # [2, 4]\n'
              + '\n'
              + '# any / all\n'
              + 'print(any([False, True, False]))  # True\n'
              + 'print(all([True, True, False]))   # False',
          },
          { type: 'heading', text: '문자열 메서드' },
          {
            type: 'code',
            language: 'python',
            code: 's = "  Hello, Python World!  "\n'
              + '\n'
              + '# 공백 제거\n'
              + 's.strip()         # "Hello, Python World!"\n'
              + 's.lstrip()        # "Hello, Python World!  "\n'
              + 's.rstrip()        # "  Hello, Python World!"\n'
              + '\n'
              + '# 변환\n'
              + '"hello".upper()           # "HELLO"\n'
              + '"HELLO".lower()           # "hello"\n'
              + '"hello world".title()     # "Hello World"\n'
              + '"hello world".capitalize() # "Hello world"\n'
              + '\n'
              + '# 검색\n'
              + '"Python" in s             # True\n'
              + 's.find("Python")          # 8 (인덱스)\n'
              + 's.count("l")              # 2\n'
              + 's.startswith("  He")      # True\n'
              + '\n'
              + '# 분리와 결합\n'
              + '"a,b,c".split(",")        # ["a", "b", "c"]\n'
              + '"-".join(["2024", "01", "15"])  # "2024-01-15"\n'
              + '\n'
              + '# 치환\n'
              + '"Hello World".replace("World", "Python")  # "Hello Python"',
          },
          { type: 'heading', text: '주요 표준 라이브러리' },
          {
            type: 'list',
            items: [
              '`os` / `os.path` -- 파일 시스템 경로, 디렉토리 조작',
              '`sys` -- 시스템 인자, 경로, 종료',
              '`json` -- JSON 인코딩/디코딩',
              '`csv` -- CSV 파일 읽기/쓰기',
              '`datetime` -- 날짜와 시간 처리',
              '`re` -- 정규 표현식',
              '`math` -- 수학 함수 (sqrt, pi, ceil 등)',
              '`random` -- 난수 생성',
              '`collections` -- Counter, defaultdict, namedtuple',
              '`itertools` -- 이터레이터 조합 도구',
              '`pathlib` -- 객체지향 경로 처리 (Python 3.4+)',
              '`typing` -- 타입 힌트 (List, Dict, Optional 등)',
            ],
          },
          {
            type: 'tip',
            text: 'Python 공식 문서(docs.python.org)에서 모든 내장 함수와 표준 라이브러리를 찾아볼 수 있습니다. 코딩하면서 자주 참고하세요.',
          },
        ],
      },
    ],
  },

  // ─── 4. Go 기초 ───
  {
    slug: 'go',
    title: 'Go 기초',
    description: '간결하고 빠른 시스템 프로그래밍 언어',
    category: 'programming',
    color: 'bg-sky-400',
    difficulty: 'intermediate',
    objectives: [
      '변수, 타입, 함수, 제어문',
      '구조체, 인터페이스, 메서드',
      '고루틴과 채널로 동시성 처리',
      '에러 처리, 패키지, 테스트',
      '실전 프로젝트와 표준 라이브러리 레퍼런스',
    ],
    lessons: [
      {
        slug: 'go-basics',
        title: 'Go 기본 문법',
        duration: '15분',
        content: [
          { type: 'heading', text: 'Go 프로그램 구조' },
          {
            type: 'text',
            text: 'Go 프로그램은 반드시 `package main`으로 시작하며, `func main()`이 진입점입니다. 변수 선언은 `var` 키워드 또는 짧은 선언(`:=`)을 사용합니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import "fmt"

func main() {
    // var 키워드로 선언
    var name string = "Go"
    var version int = 1

    // 짧은 선언 (:=) — 타입 자동 추론
    message := "Hello, Go!"
    pi := 3.14

    fmt.Println(message)
    fmt.Printf("%s v%d, pi=%.2f\\n", name, version, pi)
}`,
          },
          { type: 'heading', text: '기본 타입과 제어문' },
          {
            type: 'list',
            items: [
              '`int`, `int64`, `float64` — 숫자 타입',
              '`string` — 문자열 (UTF-8)',
              '`bool` — 논리값 true / false',
              '`byte` — uint8의 별칭, `rune` — int32의 별칭 (유니코드)',
            ],
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import "fmt"

func main() {
    // if문 — 괄호 없이 작성
    score := 85
    if score >= 90 {
        fmt.Println("A")
    } else if score >= 80 {
        fmt.Println("B")
    } else {
        fmt.Println("C")
    }

    // for문 — Go의 유일한 반복문
    for i := 0; i < 5; i++ {
        fmt.Print(i, " ")
    }
    // 0 1 2 3 4

    // range로 슬라이스 순회
    fruits := []string{"사과", "바나나", "포도"}
    for index, fruit := range fruits {
        fmt.Printf("%d: %s\\n", index, fruit)
    }
}`,
          },
          {
            type: 'tip',
            text: 'Go에서 사용하지 않는 변수나 import는 컴파일 에러가 됩니다. 인덱스가 필요 없으면 `_`로 무시하세요: `for _, v := range slice`.',
          },
        ],
      },
      {
        slug: 'structs-interfaces',
        title: '구조체와 인터페이스',
        duration: '20분',
        content: [
          { type: 'heading', text: '구조체 (struct)' },
          {
            type: 'text',
            text: 'Go에는 클래스가 없습니다. 대신 `struct`로 데이터 구조를 정의하고, 메서드를 연결하여 객체지향과 유사한 패턴을 구현합니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import "fmt"

// 구조체 정의
type User struct {
    Name  string
    Email string
    Age   int
}

// 메서드 — 리시버(receiver)를 통해 연결
func (u User) Greet() string {
    return fmt.Sprintf("안녕하세요, %s님!", u.Name)
}

// 포인터 리시버 — 값을 수정할 때 사용
func (u *User) SetAge(age int) {
    u.Age = age
}

func main() {
    user := User{Name: "김철수", Email: "kim@go.dev", Age: 25}
    fmt.Println(user.Greet())  // 안녕하세요, 김철수님!

    user.SetAge(26)
    fmt.Println(user.Age)  // 26
}`,
          },
          { type: 'heading', text: '인터페이스 (interface)' },
          {
            type: 'text',
            text: 'Go의 인터페이스는 암묵적으로 구현됩니다. 특정 메서드 집합을 가지기만 하면 해당 인터페이스를 구현한 것으로 인정됩니다. `implements` 같은 명시적 선언이 필요 없습니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import (
    "fmt"
    "math"
)

// 인터페이스 정의
type Shape interface {
    Area() float64
}

type Circle struct {
    Radius float64
}

type Rectangle struct {
    Width, Height float64
}

// Circle이 Shape 인터페이스를 암묵적으로 구현
func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

// Rectangle도 Shape 구현
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func printArea(s Shape) {
    fmt.Printf("넓이: %.2f\\n", s.Area())
}

func main() {
    printArea(Circle{Radius: 5})          // 넓이: 78.54
    printArea(Rectangle{Width: 3, Height: 4})  // 넓이: 12.00
}`,
          },
          {
            type: 'tip',
            text: 'Go에서 이름이 대문자로 시작하면 외부 패키지에서 접근 가능(exported)하고, 소문자면 패키지 내부에서만 접근 가능합니다.',
          },
        ],
      },
      {
        slug: 'goroutines',
        title: '고루틴과 채널',
        duration: '20분',
        content: [
          { type: 'heading', text: '고루틴 (goroutine)' },
          {
            type: 'text',
            text: '고루틴은 Go의 경량 스레드입니다. `go` 키워드를 함수 호출 앞에 붙이면 새로운 고루틴에서 동시에 실행됩니다. OS 스레드보다 훨씬 가벼워서 수만 개를 동시에 실행할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import (
    "fmt"
    "time"
)

func sayHello(name string) {
    for i := 0; i < 3; i++ {
        fmt.Printf("[%s] %d번째 인사\\n", name, i+1)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go sayHello("고루틴A")  // 고루틴으로 실행
    go sayHello("고루틴B")  // 또 다른 고루틴

    // 메인이 끝나면 고루틴도 종료됨
    time.Sleep(500 * time.Millisecond)
}`,
          },
          { type: 'heading', text: '채널 (chan)과 select' },
          {
            type: 'text',
            text: '채널(`chan`)은 고루틴 간에 안전하게 데이터를 주고받는 통로입니다. `<-` 연산자로 데이터를 보내고 받습니다. `select`는 여러 채널을 동시에 대기할 때 사용합니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import "fmt"

func sum(numbers []int, ch chan int) {
    total := 0
    for _, n := range numbers {
        total += n
    }
    ch <- total  // 채널에 결과 보내기
}

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8}
    ch := make(chan int)

    // 반씩 나눠서 동시에 합산
    go sum(numbers[:4], ch)
    go sum(numbers[4:], ch)

    x, y := <-ch, <-ch  // 채널에서 결과 받기
    fmt.Println(x, y, x+y)  // 10 26 36 (순서는 변할 수 있음)
}`,
          },
          {
            type: 'code',
            language: 'go',
            code: `package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(100 * time.Millisecond)
        ch1 <- "one"
    }()
    go func() {
        time.Sleep(200 * time.Millisecond)
        ch2 <- "two"
    }()

    // select — 먼저 도착한 채널의 값을 처리
    for i := 0; i < 2; i++ {
        select {
        case msg := <-ch1:
            fmt.Println("ch1:", msg)
        case msg := <-ch2:
            fmt.Println("ch2:", msg)
        }
    }
}`,
          },
          {
            type: 'list',
            items: [
              '`go func()` — 새 고루틴에서 함수 실행',
              '`ch := make(chan T)` — 타입 T의 채널 생성',
              '`ch <- value` — 채널에 값 보내기',
              '`value := <-ch` — 채널에서 값 받기 (블로킹)',
              '`select` — 여러 채널 중 준비된 것을 처리',
              '`sync.WaitGroup` — 여러 고루틴의 완료를 대기',
            ],
          },
          {
            type: 'tip',
            text: '채널을 닫지 않고 고루틴이 끝나면 메모리 누수가 발생할 수 있습니다. `defer close(ch)`로 채널을 닫는 습관을 들이세요.',
          },
        ],
      },
      {
        slug: 'error-handling',
        title: '에러 처리 패턴',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Go의 에러 처리 철학' },
          {
            type: 'text',
            text: 'Go는 예외(exception) 대신 에러 값을 반환하는 방식을 사용합니다. 함수가 에러를 반환하면 호출자가 명시적으로 처리해야 합니다. 이 방식은 에러 처리를 강제하여 더 안정적인 코드를 만듭니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: 'package main\n'
              + '\n'
              + 'import (\n'
              + '    "errors"\n'
              + '    "fmt"\n'
              + '    "strconv"\n'
              + ')\n'
              + '\n'
              + '// 에러를 반환하는 함수\n'
              + 'func divide(a, b float64) (float64, error) {\n'
              + '    if b == 0 {\n'
              + '        return 0, errors.New("0으로 나눌 수 없습니다")\n'
              + '    }\n'
              + '    return a / b, nil\n'
              + '}\n'
              + '\n'
              + 'func main() {\n'
              + '    // 기본 에러 처리 패턴\n'
              + '    result, err := divide(10, 3)\n'
              + '    if err != nil {\n'
              + '        fmt.Println("에러:", err)\n'
              + '        return\n'
              + '    }\n'
              + '    fmt.Printf("결과: %.2f\\n", result)\n'
              + '\n'
              + '    // 에러 발생 시\n'
              + '    _, err = divide(10, 0)\n'
              + '    if err != nil {\n'
              + '        fmt.Println("에러:", err)  // 에러: 0으로 나눌 수 없습니다\n'
              + '    }\n'
              + '\n'
              + '    // 표준 라이브러리의 에러 처리\n'
              + '    num, err := strconv.Atoi("abc")\n'
              + '    if err != nil {\n'
              + '        fmt.Println("변환 에러:", err)\n'
              + '    } else {\n'
              + '        fmt.Println("숫자:", num)\n'
              + '    }\n'
              + '}',
          },
          { type: 'heading', text: '커스텀 에러 타입' },
          {
            type: 'text',
            text: '`error` 인터페이스를 구현하면 커스텀 에러 타입을 만들 수 있습니다. 에러에 추가 정보를 담아 더 풍부한 에러 처리가 가능합니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: 'package main\n'
              + '\n'
              + 'import (\n'
              + '    "errors"\n'
              + '    "fmt"\n'
              + ')\n'
              + '\n'
              + '// 커스텀 에러 타입\n'
              + 'type ValidationError struct {\n'
              + '    Field   string\n'
              + '    Message string\n'
              + '}\n'
              + '\n'
              + 'func (e *ValidationError) Error() string {\n'
              + '    return fmt.Sprintf("필드 %s: %s", e.Field, e.Message)\n'
              + '}\n'
              + '\n'
              + 'func validateAge(age int) error {\n'
              + '    if age < 0 || age > 150 {\n'
              + '        return &ValidationError{\n'
              + '            Field:   "age",\n'
              + '            Message: "유효하지 않은 나이입니다",\n'
              + '        }\n'
              + '    }\n'
              + '    return nil\n'
              + '}\n'
              + '\n'
              + '// 에러 래핑 (Go 1.13+)\n'
              + 'func processUser(age int) error {\n'
              + '    err := validateAge(age)\n'
              + '    if err != nil {\n'
              + '        return fmt.Errorf("사용자 처리 실패: %w", err)\n'
              + '    }\n'
              + '    return nil\n'
              + '}\n'
              + '\n'
              + 'func main() {\n'
              + '    err := processUser(200)\n'
              + '    if err != nil {\n'
              + '        fmt.Println(err)  // 사용자 처리 실패: 필드 age: 유효하지 않은 나이입니다\n'
              + '\n'
              + '        // errors.As로 원본 에러 타입 확인\n'
              + '        var valErr *ValidationError\n'
              + '        if errors.As(err, &valErr) {\n'
              + '            fmt.Println("필드:", valErr.Field)\n'
              + '        }\n'
              + '    }\n'
              + '}',
          },
          { type: 'heading', text: 'defer, panic, recover' },
          {
            type: 'code',
            language: 'go',
            code: 'package main\n'
              + '\n'
              + 'import "fmt"\n'
              + '\n'
              + '// defer - 함수 종료 시 실행 (LIFO 순서)\n'
              + 'func fileExample() {\n'
              + '    fmt.Println("파일 열기")\n'
              + '    defer fmt.Println("파일 닫기")  // 함수 끝에서 실행\n'
              + '    fmt.Println("파일 작업 중...")\n'
              + '    // 출력: 파일 열기 -> 파일 작업 중... -> 파일 닫기\n'
              + '}\n'
              + '\n'
              + '// panic과 recover\n'
              + 'func safeDivide(a, b int) (result int, err error) {\n'
              + '    defer func() {\n'
              + '        if r := recover(); r != nil {\n'
              + '            err = fmt.Errorf("패닉 복구: %v", r)\n'
              + '        }\n'
              + '    }()\n'
              + '    return a / b, nil  // b=0이면 panic 발생\n'
              + '}\n'
              + '\n'
              + 'func main() {\n'
              + '    fileExample()\n'
              + '\n'
              + '    result, err := safeDivide(10, 0)\n'
              + '    if err != nil {\n'
              + '        fmt.Println(err)  // 패닉 복구: runtime error: ...\n'
              + '    } else {\n'
              + '        fmt.Println(result)\n'
              + '    }\n'
              + '}',
          },
          {
            type: 'list',
            items: [
              '`error` -- Go의 에러 인터페이스 (`Error() string`)',
              '`errors.New()` -- 단순 에러 생성',
              '`fmt.Errorf("%w", err)` -- 에러 래핑',
              '`errors.Is()` -- 에러 값 비교',
              '`errors.As()` -- 에러 타입 변환',
              '`defer` -- 함수 종료 시 실행할 코드 예약',
            ],
          },
          {
            type: 'tip',
            text: 'Go에서 `panic`은 프로그램 버그와 같은 복구 불가능한 상황에서만 사용하세요. 일반적인 에러는 항상 `error` 값으로 반환하는 것이 관례입니다.',
          },
        ],
      },
      {
        slug: 'packages-modules',
        title: '패키지와 모듈',
        duration: '20분',
        content: [
          { type: 'heading', text: '패키지 구조' },
          {
            type: 'text',
            text: 'Go 프로그램은 패키지로 구성됩니다. 하나의 디렉토리는 하나의 패키지이며, `go mod`로 모듈을 관리합니다. 대문자로 시작하는 이름만 외부에 공개(export)됩니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: '// 프로젝트 구조 예시:\n'
              + '// myapp/\n'
              + '//   go.mod\n'
              + '//   main.go\n'
              + '//   calc/\n'
              + '//     math.go\n'
              + '//     math_test.go\n'
              + '\n'
              + '// --- go.mod ---\n'
              + '// module myapp\n'
              + '// go 1.21\n'
              + '\n'
              + '// --- calc/math.go ---\n'
              + 'package calc\n'
              + '\n'
              + '// Add - 대문자로 시작하면 외부 공개 (exported)\n'
              + 'func Add(a, b int) int {\n'
              + '    return a + b\n'
              + '}\n'
              + '\n'
              + '// subtract - 소문자로 시작하면 패키지 내부만 사용\n'
              + 'func subtract(a, b int) int {\n'
              + '    return a - b\n'
              + '}\n'
              + '\n'
              + '// --- main.go ---\n'
              + '// package main\n'
              + '//\n'
              + '// import (\n'
              + '//     "fmt"\n'
              + '//     "myapp/calc"\n'
              + '// )\n'
              + '//\n'
              + '// func main() {\n'
              + '//     fmt.Println(calc.Add(3, 4))  // 7\n'
              + '// }',
          },
          { type: 'heading', text: 'go mod 명령어' },
          {
            type: 'code',
            language: 'go',
            code: '// 새 모듈 초기화\n'
              + '// $ go mod init myapp\n'
              + '\n'
              + '// 외부 패키지 추가\n'
              + '// $ go get github.com/gorilla/mux\n'
              + '\n'
              + '// 사용하지 않는 의존성 정리\n'
              + '// $ go mod tidy\n'
              + '\n'
              + '// 의존성 다운로드\n'
              + '// $ go mod download',
          },
          { type: 'heading', text: '자주 쓰는 표준 라이브러리' },
          {
            type: 'code',
            language: 'go',
            code: 'package main\n'
              + '\n'
              + 'import (\n'
              + '    "encoding/json"\n'
              + '    "fmt"\n'
              + '    "os"\n'
              + '    "strings"\n'
              + '    "time"\n'
              + ')\n'
              + '\n'
              + 'func main() {\n'
              + '    // strings 패키지\n'
              + '    s := "Hello, Go World"\n'
              + '    fmt.Println(strings.ToUpper(s))         // HELLO, GO WORLD\n'
              + '    fmt.Println(strings.Contains(s, "Go"))  // true\n'
              + '    fmt.Println(strings.Split("a,b,c", ",")) // [a b c]\n'
              + '    fmt.Println(strings.Join([]string{"a", "b"}, "-")) // a-b\n'
              + '\n'
              + '    // time 패키지\n'
              + '    now := time.Now()\n'
              + '    fmt.Println(now.Format("2006-01-02 15:04:05"))\n'
              + '\n'
              + '    // JSON 인코딩/디코딩\n'
              + '    type User struct {\n'
              + '        Name string ' + "'json:\"name\"'" + '\n'
              + '        Age  int    ' + "'json:\"age\"'" + '\n'
              + '    }\n'
              + '\n'
              + '    user := User{Name: "김철수", Age: 25}\n'
              + '    data, _ := json.Marshal(user)\n'
              + '    fmt.Println(string(data))  // {"name":"김철수","age":25}\n'
              + '\n'
              + '    // 환경 변수\n'
              + '    home := os.Getenv("HOME")\n'
              + '    fmt.Println("홈:", home)\n'
              + '}',
          },
          {
            type: 'list',
            items: [
              '`fmt` -- 포맷 출력 (Println, Printf, Sprintf)',
              '`strings` -- 문자열 조작 (Split, Join, Contains 등)',
              '`strconv` -- 문자열/숫자 변환',
              '`os` -- 파일, 환경 변수, 프로세스',
              '`io` -- 입출력 인터페이스',
              '`encoding/json` -- JSON 인코딩/디코딩',
              '`net/http` -- HTTP 클라이언트/서버',
              '`time` -- 시간, 타이머, 포맷',
            ],
          },
          {
            type: 'tip',
            text: 'Go의 시간 포맷은 독특합니다. `"2006-01-02 15:04:05"` 라는 고정 참조 시간을 사용합니다. 다른 언어의 `YYYY-MM-DD`와 다르니 주의하세요.',
          },
        ],
      },
      {
        slug: 'testing',
        title: '테스트 작성',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Go 테스트 기본' },
          {
            type: 'text',
            text: 'Go는 `testing` 패키지로 테스트를 기본 지원합니다. `_test.go` 파일에 `Test`로 시작하는 함수를 작성하면 `go test`로 실행할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'go',
            code: '// calc.go\n'
              + 'package calc\n'
              + '\n'
              + 'func Add(a, b int) int {\n'
              + '    return a + b\n'
              + '}\n'
              + '\n'
              + 'func Multiply(a, b int) int {\n'
              + '    return a * b\n'
              + '}\n'
              + '\n'
              + 'func Abs(n int) int {\n'
              + '    if n < 0 {\n'
              + '        return -n\n'
              + '    }\n'
              + '    return n\n'
              + '}',
          },
          {
            type: 'code',
            language: 'go',
            code: '// calc_test.go\n'
              + 'package calc\n'
              + '\n'
              + 'import "testing"\n'
              + '\n'
              + '// 기본 테스트\n'
              + 'func TestAdd(t *testing.T) {\n'
              + '    result := Add(2, 3)\n'
              + '    if result != 5 {\n'
              + '        t.Errorf("Add(2, 3) = %d; want 5", result)\n'
              + '    }\n'
              + '}\n'
              + '\n'
              + '// 테이블 기반 테스트 (Table-Driven Test)\n'
              + 'func TestMultiply(t *testing.T) {\n'
              + '    tests := []struct {\n'
              + '        name     string\n'
              + '        a, b     int\n'
              + '        expected int\n'
              + '    }{\n'
              + '        {"양수", 3, 4, 12},\n'
              + '        {"음수", -2, 5, -10},\n'
              + '        {"0 곱하기", 0, 100, 0},\n'
              + '    }\n'
              + '\n'
              + '    for _, tt := range tests {\n'
              + '        t.Run(tt.name, func(t *testing.T) {\n'
              + '            result := Multiply(tt.a, tt.b)\n'
              + '            if result != tt.expected {\n'
              + '                t.Errorf("Multiply(%d, %d) = %d; want %d",\n'
              + '                    tt.a, tt.b, result, tt.expected)\n'
              + '            }\n'
              + '        })\n'
              + '    }\n'
              + '}',
          },
          { type: 'heading', text: '벤치마크 테스트' },
          {
            type: 'code',
            language: 'go',
            code: '// calc_test.go (계속)\n'
              + '\n'
              + '// 벤치마크 - Benchmark로 시작\n'
              + 'func BenchmarkAbs(b *testing.B) {\n'
              + '    for i := 0; i < b.N; i++ {\n'
              + '        Abs(-42)\n'
              + '    }\n'
              + '}\n'
              + '\n'
              + '// 실행:\n'
              + '// $ go test -bench=.\n'
              + '// BenchmarkAbs-8   1000000000   0.3 ns/op',
          },
          { type: 'heading', text: '테스트 실행 명령어' },
          {
            type: 'code',
            language: 'go',
            code: '// 현재 패키지 테스트\n'
              + '// $ go test\n'
              + '\n'
              + '// 상세 출력\n'
              + '// $ go test -v\n'
              + '\n'
              + '// 특정 테스트만 실행\n'
              + '// $ go test -run TestAdd\n'
              + '\n'
              + '// 모든 패키지 테스트\n'
              + '// $ go test ./...\n'
              + '\n'
              + '// 커버리지 확인\n'
              + '// $ go test -cover\n'
              + '\n'
              + '// 벤치마크 실행\n'
              + '// $ go test -bench=.',
          },
          {
            type: 'list',
            items: [
              '`t.Error()` / `t.Errorf()` -- 테스트 실패 보고 (계속 진행)',
              '`t.Fatal()` / `t.Fatalf()` -- 테스트 실패 보고 (즉시 중단)',
              '`t.Run()` -- 서브 테스트 실행',
              '`t.Skip()` -- 테스트 건너뛰기',
              '`b.N` -- 벤치마크 반복 횟수 (자동 조절)',
            ],
          },
          {
            type: 'tip',
            text: 'Go에서 테이블 기반 테스트(Table-Driven Test)는 가장 권장되는 테스트 패턴입니다. 테스트 케이스를 구조체 슬라이스로 정의하면 추가가 쉽고 가독성이 좋습니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: CLI 도구 만들기',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요' },
          {
            type: 'text',
            text: 'Go의 강점인 빠른 컴파일과 정적 바이너리 배포를 활용하여 간단한 TODO CLI 도구를 만들어 봅시다. 할 일을 추가, 목록 조회, 완료 처리할 수 있습니다.',
          },
          { type: 'heading', text: '데이터 구조 정의' },
          {
            type: 'code',
            language: 'go',
            code: 'package main\n'
              + '\n'
              + 'import (\n'
              + '    "encoding/json"\n'
              + '    "fmt"\n'
              + '    "os"\n'
              + '    "time"\n'
              + ')\n'
              + '\n'
              + 'type Todo struct {\n'
              + '    ID        int       ' + "'json:\"id\"'" + '\n'
              + '    Title     string    ' + "'json:\"title\"'" + '\n'
              + '    Done      bool      ' + "'json:\"done\"'" + '\n'
              + '    CreatedAt time.Time ' + "'json:\"created_at\"'" + '\n'
              + '}\n'
              + '\n'
              + 'type TodoList struct {\n'
              + '    Todos    []Todo\n'
              + '    Filename string\n'
              + '}\n'
              + '\n'
              + 'func NewTodoList(filename string) *TodoList {\n'
              + '    tl := &TodoList{Filename: filename}\n'
              + '    tl.Load()\n'
              + '    return tl\n'
              + '}',
          },
          { type: 'heading', text: 'CRUD 메서드 구현' },
          {
            type: 'code',
            language: 'go',
            code: 'func (tl *TodoList) Add(title string) {\n'
              + '    id := 1\n'
              + '    if len(tl.Todos) > 0 {\n'
              + '        id = tl.Todos[len(tl.Todos)-1].ID + 1\n'
              + '    }\n'
              + '    todo := Todo{\n'
              + '        ID:        id,\n'
              + '        Title:     title,\n'
              + '        Done:      false,\n'
              + '        CreatedAt: time.Now(),\n'
              + '    }\n'
              + '    tl.Todos = append(tl.Todos, todo)\n'
              + '    tl.Save()\n'
              + '    fmt.Printf("추가됨: [%d] %s\\n", todo.ID, todo.Title)\n'
              + '}\n'
              + '\n'
              + 'func (tl *TodoList) List() {\n'
              + '    if len(tl.Todos) == 0 {\n'
              + '        fmt.Println("할 일이 없습니다.")\n'
              + '        return\n'
              + '    }\n'
              + '    for _, t := range tl.Todos {\n'
              + '        status := "[ ]"\n'
              + '        if t.Done {\n'
              + '            status = "[x]"\n'
              + '        }\n'
              + '        fmt.Printf("%s %d. %s\\n", status, t.ID, t.Title)\n'
              + '    }\n'
              + '}\n'
              + '\n'
              + 'func (tl *TodoList) Complete(id int) {\n'
              + '    for i, t := range tl.Todos {\n'
              + '        if t.ID == id {\n'
              + '            tl.Todos[i].Done = true\n'
              + '            tl.Save()\n'
              + '            fmt.Printf("완료: %s\\n", t.Title)\n'
              + '            return\n'
              + '        }\n'
              + '    }\n'
              + '    fmt.Printf("ID %d를 찾을 수 없습니다\\n", id)\n'
              + '}',
          },
          { type: 'heading', text: '파일 저장/로드와 메인 함수' },
          {
            type: 'code',
            language: 'go',
            code: 'func (tl *TodoList) Save() {\n'
              + '    data, err := json.MarshalIndent(tl.Todos, "", "  ")\n'
              + '    if err != nil {\n'
              + '        fmt.Println("저장 에러:", err)\n'
              + '        return\n'
              + '    }\n'
              + '    os.WriteFile(tl.Filename, data, 0644)\n'
              + '}\n'
              + '\n'
              + 'func (tl *TodoList) Load() {\n'
              + '    data, err := os.ReadFile(tl.Filename)\n'
              + '    if err != nil {\n'
              + '        return  // 파일이 없으면 빈 목록\n'
              + '    }\n'
              + '    json.Unmarshal(data, &tl.Todos)\n'
              + '}\n'
              + '\n'
              + 'func main() {\n'
              + '    tl := NewTodoList("todos.json")\n'
              + '\n'
              + '    if len(os.Args) < 2 {\n'
              + '        fmt.Println("사용법: todo [add|list|done] [인자]")\n'
              + '        return\n'
              + '    }\n'
              + '\n'
              + '    switch os.Args[1] {\n'
              + '    case "add":\n'
              + '        if len(os.Args) < 3 {\n'
              + '            fmt.Println("사용법: todo add <제목>")\n'
              + '            return\n'
              + '        }\n'
              + '        tl.Add(os.Args[2])\n'
              + '    case "list":\n'
              + '        tl.List()\n'
              + '    case "done":\n'
              + '        if len(os.Args) < 3 {\n'
              + '            fmt.Println("사용법: todo done <ID>")\n'
              + '            return\n'
              + '        }\n'
              + '        var id int\n'
              + '        fmt.Sscanf(os.Args[2], "%d", &id)\n'
              + '        tl.Complete(id)\n'
              + '    default:\n'
              + '        fmt.Println("알 수 없는 명령:", os.Args[1])\n'
              + '    }\n'
              + '}',
          },
          {
            type: 'tip',
            text: '`go build -o todo .`로 빌드하면 단일 실행 파일이 생성됩니다. Go는 크로스 컴파일도 쉽습니다: `GOOS=linux go build -o todo-linux .`로 Linux용 바이너리를 만들 수 있습니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Go 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '기본 타입과 제로 값' },
          {
            type: 'code',
            language: 'go',
            code: '// 기본 타입과 제로(zero) 값\n'
              + '// bool       -> false\n'
              + '// int, float -> 0\n'
              + '// string     -> ""\n'
              + '// pointer    -> nil\n'
              + '// slice, map -> nil\n'
              + '\n'
              + '// 타입 변환 (명시적 캐스팅 필요)\n'
              + 'var i int = 42\n'
              + 'var f float64 = float64(i)\n'
              + 'var s string = fmt.Sprintf("%d", i)\n'
              + '\n'
              + '// strconv 패키지\n'
              + '// strconv.Itoa(42)       -> "42"\n'
              + '// strconv.Atoi("42")     -> 42, error\n'
              + '// strconv.ParseFloat("3.14", 64) -> 3.14, error',
          },
          { type: 'heading', text: '슬라이스와 맵 조작' },
          {
            type: 'code',
            language: 'go',
            code: '// 슬라이스 (Slice)\n'
              + 'nums := []int{1, 2, 3}\n'
              + 'nums = append(nums, 4, 5)     // 추가\n'
              + 'sub := nums[1:3]              // 슬라이싱 [2, 3]\n'
              + 'length := len(nums)           // 길이\n'
              + 'capacity := cap(nums)         // 용량\n'
              + 'copied := make([]int, len(nums))\n'
              + 'copy(copied, nums)            // 복사\n'
              + '\n'
              + '// 맵 (Map)\n'
              + 'm := map[string]int{\n'
              + '    "alice": 90,\n'
              + '    "bob":   85,\n'
              + '}\n'
              + 'm["charlie"] = 92             // 추가/수정\n'
              + 'delete(m, "bob")              // 삭제\n'
              + 'val, ok := m["alice"]         // 존재 여부 확인\n'
              + 'if ok {\n'
              + '    fmt.Println(val)  // 90\n'
              + '}\n'
              + 'for key, value := range m {   // 순회\n'
              + '    fmt.Println(key, value)\n'
              + '}',
          },
          { type: 'heading', text: '주요 표준 라이브러리' },
          {
            type: 'list',
            items: [
              '`fmt` -- 포맷 입출력 (Println, Printf, Sprintf, Scanf)',
              '`strings` -- 문자열 조작 (Contains, Split, Join, Replace)',
              '`strconv` -- 문자열/숫자 변환 (Atoi, Itoa, ParseFloat)',
              '`os` -- 파일, 환경 변수, 프로세스 (ReadFile, WriteFile, Args)',
              '`io` -- 입출력 인터페이스 (Reader, Writer, Copy)',
              '`encoding/json` -- JSON 직렬화 (Marshal, Unmarshal)',
              '`net/http` -- HTTP 서버/클라이언트 (ListenAndServe, Get)',
              '`time` -- 시간, 타이머 (Now, Sleep, Format)',
              '`sync` -- 동기화 (Mutex, WaitGroup, Once)',
              '`context` -- 취소, 타임아웃 (WithCancel, WithTimeout)',
              '`log` -- 로깅 (Println, Fatal, SetFlags)',
              '`testing` -- 테스트, 벤치마크 (T, B, Run)',
            ],
          },
          { type: 'heading', text: 'Go 명령어 모음' },
          {
            type: 'code',
            language: 'go',
            code: '// 빌드와 실행\n'
              + '// $ go run main.go          # 실행\n'
              + '// $ go build -o app .       # 빌드\n'
              + '// $ go install              # $GOPATH/bin에 설치\n'
              + '\n'
              + '// 모듈 관리\n'
              + '// $ go mod init myapp       # 모듈 초기화\n'
              + '// $ go mod tidy             # 의존성 정리\n'
              + '// $ go get pkg@version      # 패키지 추가\n'
              + '\n'
              + '// 코드 품질\n'
              + '// $ go fmt ./...            # 코드 포맷팅\n'
              + '// $ go vet ./...            # 정적 분석\n'
              + '// $ go test ./...           # 테스트 실행\n'
              + '// $ go test -cover ./...    # 커버리지\n'
              + '\n'
              + '// 도구\n'
              + '// $ go doc fmt.Println      # 문서 조회\n'
              + '// $ go env                  # 환경 변수 확인',
          },
          {
            type: 'tip',
            text: 'Go 공식 사이트(go.dev)에서 표준 라이브러리 문서와 Go Playground를 활용하세요. `go doc` 명령으로 터미널에서도 문서를 바로 확인할 수 있습니다.',
          },
        ],
      },
    ],
  },

  // ─── 5. Lua 기초 ───
  {
    slug: 'lua',
    title: 'Lua 기초',
    description: '가볍고 빠른 스크립팅 언어 Lua',
    category: 'programming',
    color: 'bg-indigo-600',
    difficulty: 'beginner',
    objectives: [
      '변수, 타입, 제어문, 함수 기초',
      '테이블: 배열, 딕셔너리, 객체',
      '메타테이블과 메타메서드',
      '코루틴과 패턴 매칭',
      '실전 게임 스크립트와 표준 라이브러리 레퍼런스',
    ],
    lessons: [
      {
        slug: 'lua-basics',
        title: 'Lua 기본 문법',
        duration: '15분',
        content: [
          { type: 'heading', text: 'Lua 시작하기' },
          {
            type: 'text',
            text: 'Lua는 가볍고 빠른 스크립팅 언어로, 게임 개발(Roblox, WoW 등)과 임베디드 시스템에서 널리 사용됩니다. `local` 키워드로 지역 변수를 선언하고, `print()`로 출력합니다.',
          },
          {
            type: 'code',
            language: 'lua',
            code: `-- 변수 선언
local name = "Lua"
local version = 5.4
local is_fast = true
local nothing = nil  -- 값 없음

print("Hello, " .. name .. "!")  -- 문자열 결합은 ..
print("버전: " .. tostring(version))`,
          },
          { type: 'heading', text: '조건문과 반복문' },
          {
            type: 'text',
            text: 'Lua의 제어문은 `if ... then ... end`, `for ... do ... end` 형태입니다. 블록을 `end`로 닫는 것이 특징입니다.',
          },
          {
            type: 'code',
            language: 'lua',
            code: `-- if / elseif / else
local score = 85

if score >= 90 then
    print("A")
elseif score >= 80 then
    print("B")
else
    print("C")
end

-- 숫자 for 반복
for i = 1, 5 do
    io.write(i .. " ")  -- 1 2 3 4 5
end
print()

-- while 반복
local count = 0
while count < 3 do
    print("count: " .. count)
    count = count + 1
end`,
          },
          {
            type: 'list',
            items: [
              '`local` — 지역 변수 선언 (없으면 전역)',
              '`print()` — 줄바꿈 포함 출력',
              '`..` — 문자열 결합 연산자',
              '`nil` — 값 없음 (다른 언어의 null)',
              '`--` — 한 줄 주석, `--[[ ... ]]` — 여러 줄 주석',
            ],
          },
          {
            type: 'tip',
            text: 'Lua에서 `local` 없이 선언한 변수는 전역(global)이 됩니다. 예기치 않은 충돌을 방지하려면 항상 `local`을 붙이세요.',
          },
        ],
      },
      {
        slug: 'tables',
        title: '테이블과 배열',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Lua의 테이블' },
          {
            type: 'text',
            text: 'Lua에서 테이블(table)은 유일한 복합 데이터 구조입니다. 배열, 딕셔너리, 객체 모두 테이블로 표현합니다. 배열 인덱스는 1부터 시작합니다.',
          },
          {
            type: 'code',
            language: 'lua',
            code: `-- 배열처럼 사용
local fruits = {"사과", "바나나", "포도"}
print(fruits[1])  -- "사과" (1부터 시작!)
print(#fruits)    -- 3 (길이)

-- 요소 추가/삭제
table.insert(fruits, "딸기")        -- 끝에 추가
table.insert(fruits, 2, "오렌지")   -- 2번 위치에 삽입
table.remove(fruits, 3)             -- 3번 위치 삭제

-- ipairs: 배열 순회 (1부터 연속된 정수 키)
for i, fruit in ipairs(fruits) do
    print(i, fruit)
end`,
          },
          { type: 'heading', text: '딕셔너리와 pairs' },
          {
            type: 'code',
            language: 'lua',
            code: `-- 딕셔너리처럼 사용
local student = {
    name = "김철수",
    age = 20,
    grade = "A"
}

print(student.name)      -- "김철수"
print(student["age"])    -- 20

-- 새 키 추가
student.email = "kim@lua.org"

-- pairs: 모든 키-값 순회 (순서 보장 안 됨)
for key, value in pairs(student) do
    print(key .. ": " .. tostring(value))
end

-- 배열 + 딕셔너리 혼합
local mixed = {
    "첫번째",       -- [1] = "첫번째"
    "두번째",       -- [2] = "두번째"
    name = "혼합",  -- name = "혼합"
}`,
          },
          {
            type: 'list',
            items: [
              '`table.insert(t, v)` — 테이블 끝에 값 추가',
              '`table.remove(t, i)` — i번 위치 값 제거',
              '`#t` — 배열 부분의 길이',
              '`ipairs(t)` — 배열(정수 키) 순회',
              '`pairs(t)` — 모든 키-값 순회',
            ],
          },
          {
            type: 'tip',
            text: 'Lua 배열은 1부터 시작합니다! C/JS/Python 등 0 기반 언어에 익숙하다면 특히 주의하세요.',
          },
        ],
      },
      {
        slug: 'lua-functions',
        title: '함수와 메타테이블',
        duration: '20분',
        content: [
          { type: 'heading', text: '함수와 클로저' },
          {
            type: 'text',
            text: 'Lua에서 함수는 일급 객체입니다. 변수에 할당하거나 다른 함수의 인자로 전달할 수 있습니다. 클로저를 통해 외부 변수를 캡처할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'lua',
            code: `-- 기본 함수
local function greet(name)
    return "안녕하세요, " .. name .. "님!"
end
print(greet("영희"))

-- 여러 반환값
local function minmax(a, b)
    if a < b then
        return a, b
    else
        return b, a
    end
end
local lo, hi = minmax(5, 3)
print(lo, hi)  -- 3  5

-- 클로저 — 외부 변수 캡처
local function counter(start)
    local count = start or 0
    return function()
        count = count + 1
        return count
    end
end

local next = counter(10)
print(next())  -- 11
print(next())  -- 12
print(next())  -- 13`,
          },
          { type: 'heading', text: '메타테이블과 __index' },
          {
            type: 'text',
            text: '메타테이블(`setmetatable`)은 테이블의 동작을 커스터마이즈할 수 있게 해줍니다. `__index` 메타메서드를 사용하면 존재하지 않는 키에 접근할 때의 동작을 정의하여 상속과 유사한 패턴을 구현할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'lua',
            code: `-- 메타테이블로 기본값 설정
local defaults = { color = "red", size = 10 }
local config = { size = 20 }

setmetatable(config, { __index = defaults })

print(config.size)   -- 20 (자체 값)
print(config.color)  -- "red" (defaults에서 가져옴)

-- 클래스 패턴 구현
local Animal = {}
Animal.__index = Animal

function Animal.new(name, sound)
    local self = setmetatable({}, Animal)
    self.name = name
    self.sound = sound
    return self
end

function Animal:speak()
    print(self.name .. ": " .. self.sound)
end

local dog = Animal.new("멍멍이", "왈왈!")
local cat = Animal.new("야옹이", "미야옹~")

dog:speak()  -- 멍멍이: 왈왈!
cat:speak()  -- 야옹이: 미야옹~`,
          },
          {
            type: 'list',
            items: [
              '`setmetatable(t, mt)` — 테이블 t에 메타테이블 mt 설정',
              '`__index` — 키가 없을 때 조회할 테이블 또는 함수',
              '`__newindex` — 새 키에 값을 할당할 때 호출',
              '`__tostring` — `tostring()` 호출 시 동작 정의',
              '`__add`, `__mul` 등 — 연산자 오버로딩',
            ],
          },
          {
            type: 'tip',
            text: '`self:method()` 구문은 `self.method(self)`의 축약입니다. 콜론(`:`)을 사용하면 첫 번째 인자로 `self`가 자동 전달됩니다.',
          },
        ],
      },
    ],
  },

  // ─── 6. C/C++ 기초 ───
  {
    slug: 'cpp',
    title: 'C/C++ 기초',
    description: '시스템 프로그래밍의 기반 언어',
    category: 'programming',
    color: 'bg-purple-500',
    difficulty: 'intermediate',
    objectives: [
      'C 기본 문법과 포인터, 메모리',
      'C++ 클래스와 객체지향',
      'STL 컨테이너와 알고리즘',
      'Modern C++과 스마트 포인터',
      '실전 프로젝트와 표준 라이브러리 레퍼런스',
    ],
    lessons: [
      {
        slug: 'c-basics',
        title: 'C 기본 문법',
        duration: '15분',
        content: [
          { type: 'heading', text: 'C 프로그램 구조' },
          {
            type: 'text',
            text: 'C 프로그램은 `#include`로 헤더를 포함하고, `main` 함수에서 시작합니다. 모든 변수는 사용 전에 타입을 명시해야 하며, `printf`와 `scanf`로 입출력을 처리합니다.',
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>

int main() {
    // 기본 자료형
    int age = 25;
    float pi = 3.14f;
    double precise = 3.141592653589793;
    char grade = 'A';

    // printf — 서식 지정 출력
    printf("나이: %d\\n", age);
    printf("원주율: %.2f\\n", pi);
    printf("학점: %c\\n", grade);

    // scanf — 입력 받기
    int number;
    printf("숫자를 입력하세요: ");
    scanf("%d", &number);  // & — 변수의 주소
    printf("입력한 값: %d\\n", number);

    return 0;
}`,
          },
          { type: 'heading', text: '기본 자료형' },
          {
            type: 'list',
            items: [
              '`int` — 정수 (보통 4바이트, ±21억)',
              '`float` — 단정밀도 실수 (4바이트)',
              '`double` — 배정밀도 실수 (8바이트)',
              '`char` — 문자 하나 (1바이트, ASCII)',
              '`long` — 큰 정수, `short` — 작은 정수',
              '`unsigned` — 부호 없는 양의 정수만',
            ],
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>

int main() {
    // 조건문
    int score = 85;
    if (score >= 90) {
        printf("우수\\n");
    } else if (score >= 80) {
        printf("양호\\n");
    } else {
        printf("노력\\n");
    }

    // for 반복문
    for (int i = 0; i < 5; i++) {
        printf("%d ", i);  // 0 1 2 3 4
    }
    printf("\\n");

    // while 반복문
    int n = 1;
    while (n <= 5) {
        printf("%d ", n * n);  // 1 4 9 16 25
        n++;
    }

    return 0;
}`,
          },
          {
            type: 'tip',
            text: '`printf`의 서식 지정자: `%d`(정수), `%f`(실수), `%c`(문자), `%s`(문자열), `%p`(포인터 주소). `\\n`은 줄바꿈입니다.',
          },
        ],
      },
      {
        slug: 'pointers-arrays',
        title: '포인터와 배열',
        duration: '20분',
        content: [
          { type: 'heading', text: '포인터 기초' },
          {
            type: 'text',
            text: '포인터는 메모리 주소를 저장하는 변수입니다. `*`(역참조 연산자)로 주소의 값에 접근하고, `&`(주소 연산자)로 변수의 주소를 얻습니다. C의 핵심이자 가장 강력한 기능입니다.',
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;  // ptr은 x의 주소를 저장

    printf("x의 값: %d\\n", x);        // 42
    printf("x의 주소: %p\\n", &x);      // 0x7ffd...
    printf("ptr의 값: %p\\n", ptr);     // 같은 주소
    printf("ptr이 가리키는 값: %d\\n", *ptr);  // 42

    // 포인터를 통해 값 변경
    *ptr = 100;
    printf("x의 새 값: %d\\n", x);  // 100

    return 0;
}`,
          },
          { type: 'heading', text: '배열과 포인터 연산' },
          {
            type: 'text',
            text: 'C에서 배열 이름은 첫 번째 요소의 주소와 같습니다. 포인터 연산(pointer arithmetic)으로 배열 요소를 순회할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>

int main() {
    // 배열 선언
    int numbers[5] = {10, 20, 30, 40, 50};

    // 인덱스로 접근
    for (int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\\n", i, numbers[i]);
    }

    // 포인터 연산으로 접근
    int *p = numbers;  // 배열 이름 = 첫 요소 주소
    for (int i = 0; i < 5; i++) {
        printf("*(p + %d) = %d\\n", i, *(p + i));
    }

    // 문자열 = char 배열
    char greeting[] = "Hello";
    printf("%s\\n", greeting);
    printf("길이: %lu\\n", sizeof(greeting));  // 6 (\\0 포함)

    return 0;
}`,
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>

// 포인터로 값 교환 (swap)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 3, y = 7;
    printf("교환 전: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("교환 후: x=%d, y=%d\\n", x, y);
    // 교환 전: x=3, y=7
    // 교환 후: x=7, y=3
    return 0;
}`,
          },
          {
            type: 'tip',
            text: '초기화되지 않은 포인터나 해제된 메모리를 참조하면 정의되지 않은 동작(Undefined Behavior)이 발생합니다. 포인터는 항상 유효한 주소를 가리키도록 주의하세요.',
          },
        ],
      },
      {
        slug: 'structs-memory',
        title: '구조체와 메모리',
        duration: '20분',
        content: [
          { type: 'heading', text: '구조체 (struct)' },
          {
            type: 'text',
            text: '`struct`는 서로 다른 타입의 데이터를 하나로 묶는 사용자 정의 타입입니다. 관련된 데이터를 논리적으로 그룹화할 때 사용합니다.',
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>
#include <string.h>

// 구조체 정의
struct Student {
    char name[50];
    int age;
    float gpa;
};

void printStudent(struct Student s) {
    printf("이름: %s, 나이: %d, 학점: %.1f\\n",
           s.name, s.age, s.gpa);
}

int main() {
    // 구조체 변수 생성
    struct Student s1;
    strcpy(s1.name, "김철수");
    s1.age = 20;
    s1.gpa = 3.8f;

    // 초기화 리스트 사용
    struct Student s2 = {"이영희", 22, 4.0f};

    printStudent(s1);  // 이름: 김철수, 나이: 20, 학점: 3.8
    printStudent(s2);  // 이름: 이영희, 나이: 22, 학점: 4.0

    return 0;
}`,
          },
          { type: 'heading', text: '동적 메모리 관리' },
          {
            type: 'text',
            text: '`malloc`으로 힙(heap) 메모리를 할당하고, `free`로 해제합니다. `sizeof` 연산자는 타입의 크기(바이트)를 반환합니다. 동적 할당은 크기가 실행 중에 결정되는 데이터에 필수적입니다.',
          },
          {
            type: 'code',
            language: 'c',
            code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // 동적 배열 할당
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("메모리 할당 실패!\\n");
        return 1;
    }

    // 값 채우기
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }

    // 출력
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);  // 10 20 30 40 50
    }
    printf("\\n");

    // 반드시 해제!
    free(arr);
    arr = NULL;  // dangling pointer 방지

    // 구조체 동적 할당
    struct Student *sp = (struct Student *)malloc(sizeof(struct Student));
    if (sp != NULL) {
        strcpy(sp->name, "박민수");  // -> 연산자: 포인터로 멤버 접근
        sp->age = 21;
        sp->gpa = 3.5f;

        printf("%s (나이: %d)\\n", sp->name, sp->age);
        free(sp);
    }

    return 0;
}`,
          },
          {
            type: 'list',
            items: [
              '`malloc(size)` — size 바이트 만큼 힙 메모리 할당',
              '`free(ptr)` — 할당된 메모리 해제',
              '`sizeof(type)` — 타입의 크기(바이트) 반환',
              '`->` — 포인터로 구조체 멤버에 접근',
              '`calloc(n, size)` — 0으로 초기화된 메모리 할당',
              '`realloc(ptr, new_size)` — 메모리 크기 변경',
            ],
          },
          {
            type: 'tip',
            text: '`malloc` 후 반드시 `free`를 호출하세요. 그렇지 않으면 메모리 누수(memory leak)가 발생합니다. 해제 후에는 포인터를 `NULL`로 설정하는 것이 안전합니다.',
          },
        ],
      },
      {
        slug: 'stl-containers',
        title: 'STL 컨테이너와 알고리즘',
        duration: '20분',
        content: [
          { type: 'heading', text: 'STL(Standard Template Library) 개요' },
          {
            type: 'text',
            text: 'C++ 표준 템플릿 라이브러리(STL)는 컨테이너, 반복자, 알고리즘의 세 가지 핵심 구성요소로 이루어져 있습니다. 제네릭 프로그래밍을 기반으로 타입에 독립적인 자료구조와 알고리즘을 제공합니다.',
          },
          { type: 'heading', text: 'vector — 동적 배열' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // vector 생성과 초기화\n    vector<int> nums = {5, 2, 8, 1, 9, 3};\n\n    // 요소 추가\n    nums.push_back(7);\n    nums.push_back(4);\n\n    // 크기와 용량\n    cout << "크기: " << nums.size() << endl;\n    cout << "용량: " << nums.capacity() << endl;\n\n    // 인덱스 접근\n    cout << "첫 번째: " << nums[0] << endl;\n    cout << "안전한 접근: " << nums.at(1) << endl;\n\n    // 범위 기반 for 루프\n    for (const auto& n : nums) {\n        cout << n << " ";\n    }\n    cout << endl;\n\n    // 정렬\n    sort(nums.begin(), nums.end());\n    // 결과: 1 2 3 4 5 7 8 9\n\n    // 요소 삭제\n    nums.erase(nums.begin() + 2);  // 3번째 요소 삭제\n    nums.pop_back();                // 마지막 요소 삭제\n\n    return 0;\n}',
          },
          { type: 'heading', text: 'map과 unordered_map — 연관 컨테이너' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <map>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    // map: 정렬된 키-값 쌍 (Red-Black Tree)\n    map<string, int> scores;\n    scores["Alice"] = 95;\n    scores["Bob"] = 87;\n    scores["Charlie"] = 92;\n\n    // 삽입\n    scores.insert({"Diana", 88});\n\n    // 탐색\n    if (scores.find("Alice") != scores.end()) {\n        cout << "Alice: " << scores["Alice"] << endl;\n    }\n\n    // 순회 (키 기준 정렬됨)\n    for (const auto& [name, score] : scores) {\n        cout << name << ": " << score << endl;\n    }\n\n    // unordered_map: 해시 기반 (평균 O(1) 탐색)\n    unordered_map<string, int> fast_scores;\n    fast_scores["Alice"] = 95;\n    fast_scores["Bob"] = 87;\n\n    // 키 존재 여부 확인\n    cout << "Alice 존재: " << fast_scores.count("Alice") << endl;\n\n    return 0;\n}',
          },
          { type: 'heading', text: 'STL 알고리즘' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};\n\n    // 정렬\n    sort(v.begin(), v.end());\n\n    // 이진 탐색 (정렬된 상태에서)\n    bool found = binary_search(v.begin(), v.end(), 5);\n    cout << "5 존재: " << (found ? "Yes" : "No") << endl;\n\n    // 최솟값/최댓값\n    auto minIt = min_element(v.begin(), v.end());\n    auto maxIt = max_element(v.begin(), v.end());\n    cout << "최소: " << *minIt << ", 최대: " << *maxIt << endl;\n\n    // 합계\n    int sum = accumulate(v.begin(), v.end(), 0);\n    cout << "합계: " << sum << endl;\n\n    // 조건에 맞는 요소 개수\n    int cnt = count_if(v.begin(), v.end(),\n                       [](int x) { return x > 3; });\n    cout << "3보다 큰 요소 수: " << cnt << endl;\n\n    // 변환 (각 요소 2배)\n    vector<int> doubled(v.size());\n    transform(v.begin(), v.end(), doubled.begin(),\n              [](int x) { return x * 2; });\n\n    return 0;\n}',
          },
          {
            type: 'list',
            items: [
              '`vector` — 동적 배열, 끝에 삽입/삭제 O(1)',
              '`map` — 정렬된 키-값 쌍 (Red-Black Tree), O(log n)',
              '`unordered_map` — 해시 기반, 평균 O(1) 탐색',
              '`set` / `unordered_set` — 중복 없는 집합',
              '`deque` — 양쪽 끝 삽입/삭제 O(1)',
              '`stack`, `queue`, `priority_queue` — 어댑터 컨테이너',
            ],
          },
          {
            type: 'tip',
            text: '`vector`는 가장 많이 사용되는 STL 컨테이너입니다. 특별한 이유가 없다면 배열 대신 `vector`를 사용하세요. `reserve()`로 미리 메모리를 확보하면 재할당을 줄일 수 있습니다.',
          },
        ],
      },
      {
        slug: 'modern-cpp',
        title: 'Modern C++ (C++17/20)',
        duration: '20분',
        content: [
          { type: 'heading', text: 'auto와 타입 추론' },
          {
            type: 'text',
            text: 'Modern C++(C++11 이후)은 코드를 더 안전하고 간결하게 작성할 수 있는 다양한 기능을 도입했습니다. `auto` 키워드는 컴파일러가 타입을 자동으로 추론하게 하며, 복잡한 타입 선언을 간소화합니다.',
          },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <vector>\n#include <map>\nusing namespace std;\n\nint main() {\n    // auto 타입 추론\n    auto x = 42;           // int\n    auto pi = 3.14;        // double\n    auto name = string("C++");  // string\n\n    // 복잡한 타입에서 특히 유용\n    map<string, vector<int>> data;\n    data["scores"] = {90, 85, 92};\n\n    // auto 없이: map<string, vector<int>>::iterator it = data.begin();\n    auto it = data.begin();  // 훨씬 간결!\n\n    // 범위 기반 for + auto\n    for (const auto& [key, values] : data) {\n        cout << key << ": ";\n        for (const auto& v : values) {\n            cout << v << " ";\n        }\n        cout << endl;\n    }\n\n    return 0;\n}',
          },
          { type: 'heading', text: '람다 표현식' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // 기본 람다\n    auto greet = [](const string& name) {\n        cout << "Hello, " << name << "!" << endl;\n    };\n    greet("C++");\n\n    // 캡처 — 외부 변수 사용\n    int threshold = 5;\n    auto isAbove = [threshold](int x) {\n        return x > threshold;\n    };\n\n    vector<int> nums = {1, 8, 3, 7, 2, 9, 4};\n\n    // 알고리즘에 람다 활용\n    // 조건에 맞는 요소 개수\n    int count = count_if(nums.begin(), nums.end(), isAbove);\n    cout << threshold << "보다 큰 수: " << count << "개" << endl;\n\n    // 커스텀 정렬 (내림차순)\n    sort(nums.begin(), nums.end(),\n         [](int a, int b) { return a > b; });\n\n    // 제네릭 람다 (C++14)\n    auto multiply = [](auto a, auto b) { return a * b; };\n    cout << multiply(3, 4) << endl;     // 12\n    cout << multiply(2.5, 3.0) << endl; // 7.5\n\n    return 0;\n}',
          },
          { type: 'heading', text: 'C++17/20 주요 기능' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <optional>\n#include <string>\n#include <variant>\n#include <string_view>\nusing namespace std;\n\n// optional — 값이 있을 수도 없을 수도 있는 타입\noptional<string> findUser(int id) {\n    if (id == 1) return "Alice";\n    if (id == 2) return "Bob";\n    return nullopt;  // 값 없음\n}\n\n// string_view — 문자열의 읽기 전용 뷰 (복사 없음)\nvoid printName(string_view name) {\n    cout << "이름: " << name << endl;\n}\n\nint main() {\n    // optional 사용\n    auto user = findUser(1);\n    if (user.has_value()) {\n        cout << "찾음: " << user.value() << endl;\n    }\n\n    auto unknown = findUser(99);\n    cout << unknown.value_or("알 수 없음") << endl;\n\n    // 구조적 바인딩 (C++17)\n    auto [a, b, c] = make_tuple(1, 2.0, "three");\n    cout << a << ", " << b << ", " << c << endl;\n\n    // if 초기화 문 (C++17)\n    if (auto result = findUser(2); result) {\n        cout << "사용자: " << *result << endl;\n    }\n\n    // string_view\n    string fullName = "Kim Chulsoo";\n    printName(fullName);  // 복사 없이 참조\n\n    return 0;\n}',
          },
          {
            type: 'list',
            items: [
              '`auto` — 컴파일러 타입 추론',
              '`lambda` — 익명 함수 객체, `[캡처](매개변수) { 본문 }`',
              '`optional<T>` — 값이 없을 수 있는 타입 (C++17)',
              '`string_view` — 문자열 읽기 전용 뷰, 복사 비용 없음 (C++17)',
              '구조적 바인딩 — `auto [x, y] = pair` (C++17)',
              '`constexpr if` — 컴파일 타임 조건 분기 (C++17)',
            ],
          },
          {
            type: 'tip',
            text: 'Modern C++를 사용하면 코드가 더 안전하고 읽기 쉬워집니다. 컴파일러 옵션에서 `-std=c++17` 또는 `-std=c++20`을 설정하세요. GCC 9+, Clang 10+, MSVC 2019+에서 C++17을 지원합니다.',
          },
        ],
      },
      {
        slug: 'memory-management',
        title: '스마트 포인터와 메모리 관리',
        duration: '20분',
        content: [
          { type: 'heading', text: 'C++의 메모리 관리 문제' },
          {
            type: 'text',
            text: 'C 스타일의 `new`/`delete` 수동 메모리 관리는 메모리 누수, 이중 해제, 댕글링 포인터 등 다양한 버그의 원인이 됩니다. C++11부터 도입된 스마트 포인터는 RAII(Resource Acquisition Is Initialization) 패턴으로 이 문제를 해결합니다.',
          },
          { type: 'heading', text: 'unique_ptr — 독점 소유권' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Player {\npublic:\n    string name;\n    int hp;\n\n    Player(const string& n, int h) : name(n), hp(h) {\n        cout << name << " 생성" << endl;\n    }\n    ~Player() {\n        cout << name << " 소멸" << endl;\n    }\n    void info() {\n        cout << name << " (HP: " << hp << ")" << endl;\n    }\n};\n\nint main() {\n    // unique_ptr: 하나의 포인터만 객체를 소유\n    auto player1 = make_unique<Player>("전사", 100);\n    player1->info();  // 전사 (HP: 100)\n\n    // 소유권 이전 (move)\n    unique_ptr<Player> player2 = move(player1);\n    // player1은 이제 nullptr\n    if (!player1) {\n        cout << "player1은 비어있음" << endl;\n    }\n    player2->info();  // 전사 (HP: 100)\n\n    // 배열도 가능\n    auto scores = make_unique<int[]>(5);\n    for (int i = 0; i < 5; i++) {\n        scores[i] = (i + 1) * 10;\n    }\n\n    // 스코프 끝나면 자동 해제!\n    return 0;\n}',
          },
          { type: 'heading', text: 'shared_ptr과 weak_ptr' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Node {\npublic:\n    string value;\n    shared_ptr<Node> next;\n    weak_ptr<Node> parent;  // 순환 참조 방지\n\n    Node(const string& v) : value(v) {\n        cout << value << " 생성" << endl;\n    }\n    ~Node() {\n        cout << value << " 소멸" << endl;\n    }\n};\n\nint main() {\n    // shared_ptr: 여러 포인터가 객체를 공유\n    auto node1 = make_shared<Node>("A");\n    cout << "참조 카운트: " << node1.use_count() << endl;  // 1\n\n    {\n        auto node2 = node1;  // 공유\n        cout << "참조 카운트: " << node1.use_count() << endl;  // 2\n    }  // node2 소멸, 카운트 감소\n\n    cout << "참조 카운트: " << node1.use_count() << endl;  // 1\n\n    // weak_ptr: 소유권 없이 참조\n    weak_ptr<Node> weakRef = node1;\n    if (auto locked = weakRef.lock()) {\n        cout << "유효: " << locked->value << endl;\n    }\n\n    return 0;\n}',
          },
          { type: 'heading', text: 'RAII와 이동 의미론' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Buffer {\n    int* data;\n    size_t size;\npublic:\n    // 생성자\n    Buffer(size_t n) : size(n), data(new int[n]) {\n        cout << "할당: " << n << " ints" << endl;\n    }\n\n    // 소멸자 (RAII: 자동 정리)\n    ~Buffer() {\n        delete[] data;\n        cout << "해제" << endl;\n    }\n\n    // 이동 생성자 (복사 대신 소유권 이전)\n    Buffer(Buffer&& other) noexcept\n        : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << "이동 완료" << endl;\n    }\n\n    // 복사 금지\n    Buffer(const Buffer&) = delete;\n    Buffer& operator=(const Buffer&) = delete;\n\n    size_t getSize() const { return size; }\n};\n\nint main() {\n    Buffer buf1(100);\n    Buffer buf2 = move(buf1);  // 이동 (복사 아님)\n\n    cout << "buf2 크기: " << buf2.getSize() << endl;\n\n    // vector에서의 이동\n    vector<string> v;\n    string s = "Hello, World!";\n    v.push_back(move(s));  // 이동 (복사 비용 없음)\n    // s는 이제 빈 문자열\n\n    return 0;\n}',
          },
          {
            type: 'list',
            items: [
              '`unique_ptr` — 독점 소유, 복사 불가, 이동만 가능',
              '`shared_ptr` — 공유 소유, 참조 카운팅으로 자동 해제',
              '`weak_ptr` — 소유권 없는 참조, 순환 참조 방지',
              '`make_unique<T>()` / `make_shared<T>()` — 안전한 생성',
              '`move()` — 소유권 이전, 불필요한 복사 제거',
              'RAII — 리소스 획득 = 초기화, 소멸자에서 자동 정리',
            ],
          },
          {
            type: 'tip',
            text: 'Modern C++에서는 `new`/`delete`를 직접 사용하지 마세요. 항상 `make_unique` 또는 `make_shared`를 사용하세요. 순환 참조가 예상되면 한쪽을 `weak_ptr`로 선언합니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 간단한 게임 엔진',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요 — 텍스트 기반 RPG 엔진' },
          {
            type: 'text',
            text: '지금까지 배운 C++ 기능을 활용하여 텍스트 기반 RPG 게임 엔진을 만들어 봅니다. 상속, 다형성, STL 컨테이너, 스마트 포인터를 실전에서 어떻게 조합하는지 경험합니다.',
          },
          { type: 'heading', text: '게임 엔티티 설계' },
          {
            type: 'code',
            language: 'cpp',
            code: '#include <iostream>\n#include <string>\n#include <vector>\n#include <memory>\n#include <map>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\n// ── 기본 엔티티 클래스 ──\nclass Entity {\nprotected:\n    string name;\n    int hp;\n    int maxHp;\n    int attack;\n    int defense;\npublic:\n    Entity(const string& n, int h, int atk, int def)\n        : name(n), hp(h), maxHp(h), attack(atk), defense(def) {}\n\n    virtual ~Entity() = default;\n\n    virtual void showStatus() const {\n        cout << name << " [HP: " << hp << "/" << maxHp\n             << " ATK: " << attack << " DEF: " << defense << "]" << endl;\n    }\n\n    bool isAlive() const { return hp > 0; }\n    const string& getName() const { return name; }\n    int getAttack() const { return attack; }\n\n    void takeDamage(int dmg) {\n        int actual = max(1, dmg - defense);\n        hp = max(0, hp - actual);\n        cout << name << "이(가) " << actual << " 데미지를 받았다! "\n             << "(HP: " << hp << ")" << endl;\n    }\n\n    void heal(int amount) {\n        hp = min(maxHp, hp + amount);\n        cout << name << " HP " << amount << " 회복! "\n             << "(HP: " << hp << ")" << endl;\n    }\n};',
          },
          { type: 'heading', text: '플레이어와 몬스터 구현' },
          {
            type: 'code',
            language: 'cpp',
            code: '// ── 아이템 시스템 ──\nstruct Item {\n    string name;\n    string type;  // "weapon", "potion"\n    int value;\n};\n\n// ── 플레이어 클래스 ──\nclass Player : public Entity {\n    int level;\n    int exp;\n    vector<Item> inventory;\npublic:\n    Player(const string& n)\n        : Entity(n, 100, 15, 5), level(1), exp(0) {}\n\n    void showStatus() const override {\n        cout << "=== " << name << " (Lv." << level << ") ===" << endl;\n        Entity::showStatus();\n        cout << "경험치: " << exp << "/100" << endl;\n        cout << "인벤토리: " << inventory.size() << "개 아이템" << endl;\n    }\n\n    void gainExp(int amount) {\n        exp += amount;\n        cout << name << "이(가) 경험치 " << amount << " 획득!" << endl;\n        while (exp >= 100) {\n            exp -= 100;\n            levelUp();\n        }\n    }\n\n    void addItem(const Item& item) {\n        inventory.push_back(item);\n        cout << item.name << "을(를) 획득했다!" << endl;\n    }\n\n    void usePotion() {\n        for (auto it = inventory.begin(); it != inventory.end(); ++it) {\n            if (it->type == "potion") {\n                heal(it->value);\n                inventory.erase(it);\n                return;\n            }\n        }\n        cout << "포션이 없습니다!" << endl;\n    }\n\nprivate:\n    void levelUp() {\n        level++;\n        maxHp += 20;\n        hp = maxHp;\n        attack += 3;\n        defense += 2;\n        cout << "*** 레벨 업! Lv." << level << " ***" << endl;\n    }\n};\n\n// ── 몬스터 클래스 ──\nclass Monster : public Entity {\n    int expReward;\npublic:\n    Monster(const string& n, int h, int atk, int def, int expR)\n        : Entity(n, h, atk, def), expReward(expR) {}\n\n    int getExpReward() const { return expReward; }\n};',
          },
          { type: 'heading', text: '전투 시스템과 게임 루프' },
          {
            type: 'code',
            language: 'cpp',
            code: '// ── 전투 시스템 ──\nclass BattleSystem {\npublic:\n    static bool fight(Player& player, Monster& monster) {\n        cout << "\\n=== 전투 시작: " << monster.getName()\n             << " 등장! ===" << endl;\n\n        while (player.isAlive() && monster.isAlive()) {\n            // 플레이어 턴\n            int playerDmg = player.getAttack() + (rand() % 5);\n            monster.takeDamage(playerDmg);\n\n            if (!monster.isAlive()) {\n                cout << monster.getName() << "을(를) 처치했다!" << endl;\n                player.gainExp(monster.getExpReward());\n                return true;\n            }\n\n            // 몬스터 턴\n            int monsterDmg = monster.getAttack() + (rand() % 3);\n            player.takeDamage(monsterDmg);\n        }\n\n        cout << "패배했습니다..." << endl;\n        return false;\n    }\n};\n\n// ── 몬스터 팩토리 ──\nclass MonsterFactory {\n    static vector<tuple<string, int, int, int, int>> templates;\npublic:\n    static void init() {\n        templates = {\n            {"슬라임", 30, 5, 2, 20},\n            {"고블린", 50, 10, 4, 35},\n            {"오크", 80, 15, 8, 50},\n            {"드래곤", 150, 25, 12, 100},\n        };\n    }\n\n    static unique_ptr<Monster> create(int difficulty) {\n        int idx = min(difficulty, (int)templates.size() - 1);\n        auto& [n, h, a, d, e] = templates[idx];\n        return make_unique<Monster>(n, h, a, d, e);\n    }\n};\n\nvector<tuple<string, int, int, int, int>> MonsterFactory::templates;\n\n// ── 메인 게임 루프 ──\nint main() {\n    srand(time(nullptr));\n    MonsterFactory::init();\n\n    Player hero("용사");\n    hero.addItem({"체력 포션", "potion", 30});\n    hero.addItem({"체력 포션", "potion", 30});\n\n    cout << "\\n=== 텍스트 RPG 시작! ===" << endl;\n    hero.showStatus();\n\n    for (int stage = 0; stage < 4; stage++) {\n        auto monster = MonsterFactory::create(stage);\n        if (!BattleSystem::fight(hero, *monster)) break;\n        hero.usePotion();\n        hero.showStatus();\n    }\n\n    cout << "\\n=== 게임 종료 ===" << endl;\n    return 0;\n}',
          },
          {
            type: 'list',
            items: [
              '상속과 다형성 — Entity 기반 클래스에서 Player, Monster 파생',
              '스마트 포인터 — MonsterFactory가 unique_ptr로 몬스터 생성',
              'STL 컨테이너 — vector로 인벤토리, map으로 데이터 관리',
              '가상 함수 — showStatus()를 override하여 다형적 동작',
              '팩토리 패턴 — MonsterFactory로 객체 생성 캡슐화',
            ],
          },
          {
            type: 'tip',
            text: '이 프로젝트를 확장해 보세요: 마법 시스템, 장비 착용, 상점, 던전 탐험, 파일로 세이브/로드 기능 등을 추가하면 더 풍부한 게임이 됩니다. 각 기능을 별도 클래스로 분리하는 연습을 하세요.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'C/C++ 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: 'C 표준 라이브러리 함수' },
          {
            type: 'list',
            items: [
              '`<stdio.h>` — printf, scanf, fopen, fclose, fread, fwrite',
              '`<stdlib.h>` — malloc, free, calloc, realloc, atoi, atof, rand, srand, exit',
              '`<string.h>` — strlen, strcpy, strncpy, strcmp, strcat, memcpy, memset',
              '`<math.h>` — sin, cos, tan, sqrt, pow, abs, ceil, floor, log',
              '`<ctype.h>` — isalpha, isdigit, isspace, toupper, tolower',
              '`<time.h>` — time, clock, difftime, strftime',
              '`<assert.h>` — assert 매크로 (디버깅용)',
            ],
          },
          { type: 'heading', text: 'C++ 표준 라이브러리 헤더' },
          {
            type: 'list',
            items: [
              '`<iostream>` — cin, cout, cerr (입출력 스트림)',
              '`<string>` — string 클래스 (문자열 처리)',
              '`<vector>` — 동적 배열 컨테이너',
              '`<map>` / `<unordered_map>` — 연관 컨테이너 (키-값)',
              '`<set>` / `<unordered_set>` — 집합 컨테이너',
              '`<algorithm>` — sort, find, count, transform, accumulate 등',
              '`<memory>` — unique_ptr, shared_ptr, weak_ptr',
              '`<optional>` — optional<T> (C++17)',
              '`<functional>` — function, bind, 함수 객체',
              '`<fstream>` — 파일 입출력 (ifstream, ofstream)',
            ],
          },
          { type: 'heading', text: '포인터와 메모리 관리 요약' },
          {
            type: 'code',
            language: 'cpp',
            code: '// ── C 스타일 메모리 관리 ──\nint* arr = (int*)malloc(10 * sizeof(int));  // 할당\nfree(arr);                                   // 해제\n\n// ── C++ new/delete ──\nint* p = new int(42);       // 단일 객체\nint* a = new int[10];       // 배열\ndelete p;                   // 단일 해제\ndelete[] a;                 // 배열 해제\n\n// ── 스마트 포인터 (권장) ──\nauto up = make_unique<int>(42);      // unique_ptr\nauto sp = make_shared<int>(42);      // shared_ptr\nweak_ptr<int> wp = sp;               // weak_ptr\n// 스코프 벗어나면 자동 해제!',
          },
          { type: 'heading', text: '컴파일러 옵션과 빌드' },
          {
            type: 'code',
            language: 'c',
            code: '// 컴파일 (터미널 명령어)\n// C 컴파일\n// gcc -o program main.c -Wall -Wextra\n\n// C++ 컴파일 (C++17)\n// g++ -o program main.cpp -std=c++17 -Wall -Wextra\n\n// 디버그 빌드\n// g++ -o program main.cpp -std=c++17 -g -O0\n\n// 릴리스 빌드\n// g++ -o program main.cpp -std=c++17 -O2\n\n// 여러 파일 컴파일\n// g++ -o game main.cpp player.cpp monster.cpp -std=c++17',
          },
          { type: 'heading', text: '자주 사용되는 연산자와 키워드' },
          {
            type: 'list',
            items: [
              '`&` — 주소 연산자 / 참조, `*` — 역참조 / 포인터 선언',
              '`->` — 포인터로 멤버 접근, `::` — 스코프 결정 연산자',
              '`const` — 상수, `constexpr` — 컴파일 타임 상수',
              '`virtual` — 가상 함수, `override` — 오버라이드 명시',
              '`nullptr` — null 포인터 (C++11, NULL 대신 사용)',
              '`auto` — 타입 추론, `decltype` — 표현식의 타입 추출',
              '`static_cast`, `dynamic_cast`, `reinterpret_cast` — 타입 변환',
              '`noexcept` — 예외를 던지지 않음을 명시',
            ],
          },
          {
            type: 'tip',
            text: '공식 레퍼런스 사이트: cppreference.com은 C/C++ 표준 라이브러리의 가장 정확한 레퍼런스입니다. cplusplus.com은 예제가 풍부하여 초보자에게 적합합니다.',
          },
        ],
      },
    ],
  },

  // ─── 7. SQL 기초 ───
  {
    slug: 'sql',
    title: 'SQL 기초',
    description: '데이터베이스 조회의 기본, SQL 쿼리 작성',
    category: 'programming',
    color: 'bg-amber-500',
    difficulty: 'beginner',
    objectives: [
      'SELECT, WHERE, ORDER BY 기본 쿼리',
      'JOIN, 서브쿼리, 집계 함수',
      '데이터 조작과 테이블 관리',
      '인덱스, 트랜잭션, 최적화',
      '실전 데이터베이스 설계와 SQL 레퍼런스',
    ],
    lessons: [
      {
        slug: 'select-basics',
        title: 'SELECT 기본',
        duration: '15분',
        content: [
          { type: 'heading', text: 'SELECT로 데이터 조회하기' },
          {
            type: 'text',
            text: 'SQL(Structured Query Language)은 데이터베이스에서 데이터를 조회, 삽입, 수정, 삭제하는 언어입니다. `SELECT`는 데이터를 조회하는 가장 기본적인 명령입니다.',
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 모든 열 조회
SELECT * FROM employees;

-- 특정 열만 조회
SELECT name, department, salary
FROM employees;

-- 별칭(alias) 사용
SELECT name AS 이름,
       salary AS 급여,
       salary * 12 AS 연봉
FROM employees;

-- 중복 제거
SELECT DISTINCT department
FROM employees;`,
          },
          { type: 'heading', text: 'WHERE 조건 필터링' },
          {
            type: 'text',
            text: '`WHERE` 절을 사용하면 조건에 맞는 행만 조회할 수 있습니다. 비교 연산자, 논리 연산자, `BETWEEN`, `IN`, `LIKE` 등 다양한 조건을 사용할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 비교 연산자
SELECT * FROM employees
WHERE salary >= 50000;

-- AND / OR 조합
SELECT * FROM employees
WHERE department = '개발팀'
  AND salary >= 60000;

-- BETWEEN — 범위 조건
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 60000;

-- IN — 목록 중 하나와 일치
SELECT * FROM employees
WHERE department IN ('개발팀', '디자인팀', '기획팀');

-- LIKE — 패턴 매칭
SELECT * FROM employees
WHERE name LIKE '김%';  -- '김'으로 시작하는 이름

-- NULL 확인
SELECT * FROM employees
WHERE manager_id IS NULL;`,
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 정렬
SELECT name, salary
FROM employees
ORDER BY salary DESC;  -- 급여 높은 순

-- 결과 제한
SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;  -- 상위 5명`,
          },
          {
            type: 'tip',
            text: 'SQL 키워드는 대소문자를 구분하지 않지만, 가독성을 위해 `SELECT`, `FROM`, `WHERE` 등 키워드는 대문자로, 테이블명과 열명은 소문자로 작성하는 것이 관례입니다.',
          },
        ],
      },
      {
        slug: 'aggregation',
        title: '집계와 그룹화',
        duration: '15분',
        content: [
          { type: 'heading', text: '집계 함수' },
          {
            type: 'text',
            text: '집계 함수는 여러 행의 데이터를 하나의 결과로 요약합니다. `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`가 대표적입니다.',
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 기본 집계 함수
SELECT
    COUNT(*) AS 전체인원,
    AVG(salary) AS 평균급여,
    MIN(salary) AS 최소급여,
    MAX(salary) AS 최대급여,
    SUM(salary) AS 총급여합계
FROM employees;`,
          },
          { type: 'heading', text: 'GROUP BY와 HAVING' },
          {
            type: 'text',
            text: '`GROUP BY`는 특정 열의 값이 같은 행들을 그룹으로 묶어 집계합니다. `HAVING`은 그룹화된 결과에 조건을 적용합니다. `WHERE`가 개별 행을 필터링한다면, `HAVING`은 그룹을 필터링합니다.',
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 부서별 평균 급여
SELECT department,
       COUNT(*) AS 인원수,
       AVG(salary) AS 평균급여
FROM employees
GROUP BY department;

-- HAVING — 그룹 조건
SELECT department,
       AVG(salary) AS 평균급여
FROM employees
GROUP BY department
HAVING AVG(salary) >= 50000;  -- 평균급여 5만 이상 부서만

-- 복합 예제: 부서별 통계 (인원 3명 이상)
SELECT department,
       COUNT(*) AS 인원,
       ROUND(AVG(salary), 0) AS 평균급여,
       MAX(salary) - MIN(salary) AS 급여편차
FROM employees
WHERE hire_date >= '2020-01-01'
GROUP BY department
HAVING COUNT(*) >= 3
ORDER BY 평균급여 DESC;`,
          },
          {
            type: 'list',
            items: [
              '`COUNT(*)` — 전체 행 수, `COUNT(열)` — NULL 제외 행 수',
              '`SUM(열)` — 합계, `AVG(열)` — 평균',
              '`MIN(열)` / `MAX(열)` — 최솟값 / 최댓값',
              '`GROUP BY` — 그룹화, `HAVING` — 그룹 조건',
              '`ROUND(값, 자릿수)` — 반올림',
            ],
          },
          {
            type: 'tip',
            text: 'SQL 실행 순서: `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`. `WHERE`는 그룹화 전에, `HAVING`은 그룹화 후에 적용됩니다.',
          },
        ],
      },
      {
        slug: 'joins',
        title: 'JOIN',
        duration: '20분',
        content: [
          { type: 'heading', text: 'JOIN으로 테이블 연결하기' },
          {
            type: 'text',
            text: 'JOIN은 두 개 이상의 테이블을 관련된 열을 기준으로 연결합니다. 가장 많이 사용되는 것은 `INNER JOIN`이며, 양쪽 테이블 모두에 일치하는 데이터만 반환합니다.',
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 예제 테이블:
-- employees: id, name, department_id
-- departments: id, dept_name, location

-- INNER JOIN — 양쪽 모두 일치하는 행만
SELECT e.name, d.dept_name, d.location
FROM employees e
INNER JOIN departments d
  ON e.department_id = d.id;

-- LEFT JOIN — 왼쪽 테이블 전체 + 오른쪽 일치 행
-- 부서가 없는 직원도 포함
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d
  ON e.department_id = d.id;`,
          },
          { type: 'heading', text: 'JOIN 종류 비교' },
          {
            type: 'list',
            items: [
              '`INNER JOIN` — 양쪽 모두 일치하는 행만 반환',
              '`LEFT JOIN` — 왼쪽 전체 + 오른쪽 일치 (없으면 NULL)',
              '`RIGHT JOIN` — 오른쪽 전체 + 왼쪽 일치 (없으면 NULL)',
              '`FULL OUTER JOIN` — 양쪽 전체, 일치 없으면 NULL',
              '`CROSS JOIN` — 두 테이블의 모든 조합 (카르테시안 곱)',
            ],
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 여러 테이블 JOIN
-- employees, departments, projects 세 테이블 연결
SELECT e.name AS 직원,
       d.dept_name AS 부서,
       p.project_name AS 프로젝트
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
INNER JOIN project_members pm ON e.id = pm.employee_id
INNER JOIN projects p ON pm.project_id = p.id
WHERE p.status = '진행중'
ORDER BY d.dept_name, e.name;

-- 셀프 JOIN — 같은 테이블을 두 번 참조
-- 직원과 그 매니저 이름 조회
SELECT e.name AS 직원,
       m.name AS 매니저
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,
          },
          {
            type: 'code',
            language: 'sql',
            code: `-- 서브쿼리와 함께 사용
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary) FROM employees
)
ORDER BY e.salary DESC;

-- 서브쿼리 대신 JOIN 활용
SELECT e.name, e.salary, d.avg_salary
FROM employees e
INNER JOIN (
    SELECT department_id,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
) d ON e.department_id = d.department_id
WHERE e.salary > d.avg_salary;`,
          },
          {
            type: 'tip',
            text: '테이블에 별칭(alias)을 붙이면 쿼리가 훨씬 간결해집니다. `FROM employees e`처럼 짧은 이름을 사용하세요. JOIN 시 어느 테이블의 열인지 명확히 하기 위해 `e.name`처럼 접두어를 붙이는 것이 좋습니다.',
          },
        ],
      },
      {
        slug: 'data-manipulation',
        title: '데이터 조작 (INSERT, UPDATE, DELETE)',
        duration: '20분',
        content: [
          { type: 'heading', text: 'INSERT — 데이터 삽입' },
          {
            type: 'text',
            text: '`INSERT` 문은 테이블에 새로운 행을 추가합니다. 단일 행 삽입, 다중 행 삽입, SELECT 결과 삽입 등 다양한 방식을 지원합니다.',
          },
          {
            type: 'code',
            language: 'sql',
            code: '-- 단일 행 삽입\nINSERT INTO employees (name, department, salary, hire_date)\nVALUES (' + "'김철수', '개발팀', 55000, '2024-01-15'" + ');\n\n-- 다중 행 삽입\nINSERT INTO employees (name, department, salary, hire_date)\nVALUES\n    (' + "'이영희', '디자인팀', 48000, '2024-02-01'" + '),\n    (' + "'박민수', '기획팀', 52000, '2024-02-15'" + '),\n    (' + "'최지은', '개발팀', 60000, '2024-03-01'" + ');\n\n-- SELECT 결과를 다른 테이블에 삽입\nINSERT INTO employee_backup (name, department, salary)\nSELECT name, department, salary\nFROM employees\nWHERE department = ' + "'개발팀'" + ';',
          },
          { type: 'heading', text: 'UPDATE — 데이터 수정' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 특정 행 수정\nUPDATE employees\nSET salary = 58000\nWHERE name = ' + "'김철수'" + ';\n\n-- 여러 열 동시 수정\nUPDATE employees\nSET salary = salary * 1.1,\n    department = ' + "'시니어개발팀'" + '\nWHERE department = ' + "'개발팀'" + '\n  AND hire_date < ' + "'2023-01-01'" + ';\n\n-- 조건부 수정 (CASE 활용)\nUPDATE employees\nSET salary = CASE\n    WHEN department = ' + "'개발팀'" + ' THEN salary * 1.15\n    WHEN department = ' + "'디자인팀'" + ' THEN salary * 1.10\n    ELSE salary * 1.05\nEND;',
          },
          { type: 'heading', text: 'DELETE와 TRUNCATE' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 조건에 맞는 행 삭제\nDELETE FROM employees\nWHERE department = ' + "'퇴사'" + ';\n\n-- 서브쿼리로 삭제 대상 지정\nDELETE FROM employees\nWHERE id NOT IN (\n    SELECT employee_id FROM active_projects\n);\n\n-- TRUNCATE — 테이블 전체 데이터 삭제 (빠름, 롤백 불가)\nTRUNCATE TABLE temp_logs;',
          },
          { type: 'heading', text: 'CREATE TABLE과 ALTER TABLE' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 테이블 생성\nCREATE TABLE products (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10, 2) DEFAULT 0.00,\n    category VARCHAR(50),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 테이블 수정\nALTER TABLE products\nADD COLUMN stock INT DEFAULT 0;\n\nALTER TABLE products\nMODIFY COLUMN name VARCHAR(200) NOT NULL;\n\nALTER TABLE products\nDROP COLUMN category;\n\n-- 테이블 삭제\nDROP TABLE IF EXISTS temp_products;',
          },
          {
            type: 'list',
            items: [
              '`INSERT INTO ... VALUES` — 새로운 행 삽입',
              '`INSERT INTO ... SELECT` — SELECT 결과를 삽입',
              '`UPDATE ... SET ... WHERE` — 기존 데이터 수정 (WHERE 필수!)',
              '`DELETE FROM ... WHERE` — 조건에 맞는 행 삭제',
              '`TRUNCATE TABLE` — 전체 데이터 고속 삭제 (DDL)',
              '`CREATE TABLE` — 테이블 생성, `ALTER TABLE` — 구조 변경',
            ],
          },
          {
            type: 'tip',
            text: 'UPDATE와 DELETE 실행 전에 반드시 WHERE 조건을 확인하세요! WHERE 없이 실행하면 모든 행이 수정/삭제됩니다. 먼저 SELECT로 대상 행을 확인하는 습관을 기르세요.',
          },
        ],
      },
      {
        slug: 'indexes-optimization',
        title: '인덱스와 쿼리 최적화',
        duration: '20분',
        content: [
          { type: 'heading', text: '인덱스(Index)란?' },
          {
            type: 'text',
            text: '인덱스는 테이블의 데이터를 빠르게 검색하기 위한 자료구조입니다. 책의 색인처럼, 인덱스를 사용하면 전체 테이블을 스캔하지 않고도 원하는 데이터를 찾을 수 있습니다. 대부분의 RDBMS는 B-Tree 인덱스를 기본으로 사용합니다.',
          },
          { type: 'heading', text: '인덱스 생성과 관리' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 단일 열 인덱스\nCREATE INDEX idx_employees_name\nON employees (name);\n\n-- 복합 인덱스 (여러 열)\nCREATE INDEX idx_emp_dept_salary\nON employees (department, salary);\n\n-- 유니크 인덱스 (중복 불허)\nCREATE UNIQUE INDEX idx_employees_email\nON employees (email);\n\n-- 인덱스 확인\nSHOW INDEX FROM employees;\n\n-- 인덱스 삭제\nDROP INDEX idx_employees_name ON employees;',
          },
          { type: 'heading', text: 'EXPLAIN으로 쿼리 실행 계획 분석' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 실행 계획 확인\nEXPLAIN SELECT * FROM employees\nWHERE department = ' + "'개발팀'" + '\n  AND salary > 50000;\n\n-- 결과 해석:\n-- type: ALL (풀 테이블 스캔) -> 인덱스 필요\n-- type: ref (인덱스 사용) -> 양호\n-- type: range (인덱스 범위 스캔) -> 양호\n-- rows: 스캔할 예상 행 수 (적을수록 좋음)\n\n-- 인덱스 추가 후 다시 확인\nCREATE INDEX idx_dept_salary ON employees (department, salary);\n\nEXPLAIN SELECT * FROM employees\nWHERE department = ' + "'개발팀'" + '\n  AND salary > 50000;\n-- type이 ref 또는 range로 변경됨',
          },
          { type: 'heading', text: '쿼리 최적화 기법' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 1. SELECT * 대신 필요한 열만 조회\n-- 나쁜 예\nSELECT * FROM employees WHERE department = ' + "'개발팀'" + ';\n-- 좋은 예\nSELECT name, salary FROM employees WHERE department = ' + "'개발팀'" + ';\n\n-- 2. LIKE에서 앞쪽 와일드카드 피하기\n-- 나쁜 예 (인덱스 사용 불가)\nSELECT * FROM employees WHERE name LIKE ' + "'%철수'" + ';\n-- 좋은 예 (인덱스 사용 가능)\nSELECT * FROM employees WHERE name LIKE ' + "'김%'" + ';\n\n-- 3. 서브쿼리 대신 JOIN 사용\n-- 느린 서브쿼리\nSELECT * FROM employees\nWHERE department_id IN (\n    SELECT id FROM departments WHERE location = ' + "'서울'" + '\n);\n-- 빠른 JOIN\nSELECT e.* FROM employees e\nINNER JOIN departments d ON e.department_id = d.id\nWHERE d.location = ' + "'서울'" + ';\n\n-- 4. EXISTS vs IN (대량 데이터)\nSELECT * FROM employees e\nWHERE EXISTS (\n    SELECT 1 FROM departments d\n    WHERE d.id = e.department_id\n      AND d.location = ' + "'서울'" + '\n);',
          },
          {
            type: 'list',
            items: [
              'PRIMARY KEY는 자동으로 인덱스가 생성됨',
              'WHERE, JOIN, ORDER BY에 자주 사용되는 열에 인덱스 생성',
              '복합 인덱스는 왼쪽 열부터 순서대로 활용됨 (Leftmost Prefix)',
              '인덱스가 많으면 INSERT/UPDATE 성능이 저하됨',
              'EXPLAIN으로 실행 계획을 확인하고 최적화할 것',
            ],
          },
          {
            type: 'tip',
            text: '인덱스는 읽기(SELECT) 성능을 높이지만 쓰기(INSERT/UPDATE/DELETE) 성능을 낮춥니다. 읽기가 많은 테이블에는 인덱스를 적극 활용하고, 쓰기가 많은 테이블은 최소한의 인덱스만 유지하세요.',
          },
        ],
      },
      {
        slug: 'transactions-constraints',
        title: '트랜잭션과 제약조건',
        duration: '20분',
        content: [
          { type: 'heading', text: '트랜잭션(Transaction)이란?' },
          {
            type: 'text',
            text: '트랜잭션은 하나의 논리적 작업 단위를 구성하는 SQL 문들의 묶음입니다. 은행 이체처럼 여러 작업이 모두 성공하거나 모두 실패해야 하는 경우에 사용합니다. ACID 속성(원자성, 일관성, 고립성, 지속성)을 보장합니다.',
          },
          { type: 'heading', text: '트랜잭션 사용법' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 기본 트랜잭션\nSTART TRANSACTION;\n\n-- 계좌 A에서 10000원 출금\nUPDATE accounts\nSET balance = balance - 10000\nWHERE account_id = 1001;\n\n-- 계좌 B에 10000원 입금\nUPDATE accounts\nSET balance = balance + 10000\nWHERE account_id = 1002;\n\n-- 모두 성공하면 확정\nCOMMIT;\n\n-- 문제 발생 시 되돌리기\n-- ROLLBACK;',
          },
          {
            type: 'code',
            language: 'sql',
            code: '-- SAVEPOINT 활용\nSTART TRANSACTION;\n\nINSERT INTO orders (customer_id, total)\nVALUES (1, 50000);\n\nSAVEPOINT after_order;\n\nINSERT INTO order_items (order_id, product_id, quantity)\nVALUES (LAST_INSERT_ID(), 101, 2);\n\n-- 아이템 삽입에 문제가 있으면 주문까지만 롤백\n-- ROLLBACK TO after_order;\n\nCOMMIT;',
          },
          { type: 'heading', text: '제약조건(Constraints)' },
          {
            type: 'code',
            language: 'sql',
            code: 'CREATE TABLE orders (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    customer_id INT NOT NULL,\n    order_date DATE NOT NULL DEFAULT (CURRENT_DATE),\n    total DECIMAL(10, 2) CHECK (total >= 0),\n    status VARCHAR(20) DEFAULT ' + "'pending'" + ',\n\n    -- 외래 키 제약조건\n    FOREIGN KEY (customer_id)\n        REFERENCES customers(id)\n        ON DELETE CASCADE\n        ON UPDATE CASCADE\n);\n\nCREATE TABLE order_items (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    order_id INT NOT NULL,\n    product_id INT NOT NULL,\n    quantity INT CHECK (quantity > 0),\n    price DECIMAL(10, 2) NOT NULL,\n\n    -- 복합 유니크 제약조건\n    UNIQUE (order_id, product_id),\n\n    FOREIGN KEY (order_id) REFERENCES orders(id)\n        ON DELETE CASCADE,\n    FOREIGN KEY (product_id) REFERENCES products(id)\n        ON DELETE RESTRICT\n);',
          },
          { type: 'heading', text: '제약조건 종류 정리' },
          {
            type: 'list',
            items: [
              '`PRIMARY KEY` — 기본 키, NOT NULL + UNIQUE, 테이블당 하나',
              '`FOREIGN KEY` — 외래 키, 다른 테이블의 PRIMARY KEY 참조',
              '`NOT NULL` — NULL 값 허용하지 않음',
              '`UNIQUE` — 중복 값 허용하지 않음 (NULL은 여러 개 가능)',
              '`CHECK` — 값의 범위나 조건을 제한',
              '`DEFAULT` — 값을 지정하지 않으면 기본값 사용',
              '`ON DELETE CASCADE` — 부모 삭제 시 자식도 삭제',
              '`ON DELETE RESTRICT` — 자식이 있으면 부모 삭제 불가',
            ],
          },
          {
            type: 'tip',
            text: 'ACID 속성: Atomicity(원자성 - 전부 성공 or 전부 실패), Consistency(일관성 - 규칙 유지), Isolation(고립성 - 동시 트랜잭션 격리), Durability(지속성 - 커밋 후 영구 저장). 데이터 무결성의 핵심입니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 쇼핑몰 데이터베이스 설계',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요 — 온라인 쇼핑몰 DB' },
          {
            type: 'text',
            text: '지금까지 배운 SQL 지식을 총동원하여 온라인 쇼핑몰 데이터베이스를 설계하고 주요 쿼리를 작성합니다. 테이블 관계, 제약조건, 인덱스, 트랜잭션을 실전에서 어떻게 활용하는지 경험합니다.',
          },
          { type: 'heading', text: '테이블 설계' },
          {
            type: 'code',
            language: 'sql',
            code: '-- ── 회원 테이블 ──\nCREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    name VARCHAR(50) NOT NULL,\n    phone VARCHAR(20),\n    address TEXT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- ── 카테고리 테이블 ──\nCREATE TABLE categories (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(50) NOT NULL,\n    parent_id INT NULL,\n    FOREIGN KEY (parent_id) REFERENCES categories(id)\n);\n\n-- ── 상품 테이블 ──\nCREATE TABLE products (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(200) NOT NULL,\n    description TEXT,\n    price DECIMAL(10, 2) NOT NULL CHECK (price > 0),\n    stock INT DEFAULT 0 CHECK (stock >= 0),\n    category_id INT,\n    is_active BOOLEAN DEFAULT TRUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (category_id) REFERENCES categories(id)\n);\n\n-- ── 주문 테이블 ──\nCREATE TABLE orders (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    user_id INT NOT NULL,\n    total_amount DECIMAL(12, 2) NOT NULL,\n    status VARCHAR(20) DEFAULT ' + "'pending'" + ',\n    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n);\n\n-- ── 주문 상세 테이블 ──\nCREATE TABLE order_items (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    order_id INT NOT NULL,\n    product_id INT NOT NULL,\n    quantity INT NOT NULL CHECK (quantity > 0),\n    unit_price DECIMAL(10, 2) NOT NULL,\n    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,\n    FOREIGN KEY (product_id) REFERENCES products(id)\n);',
          },
          { type: 'heading', text: '인덱스 설정' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 자주 검색되는 열에 인덱스\nCREATE INDEX idx_products_category ON products (category_id);\nCREATE INDEX idx_products_price ON products (price);\nCREATE INDEX idx_orders_user ON orders (user_id);\nCREATE INDEX idx_orders_status ON orders (status);\nCREATE INDEX idx_order_items_order ON order_items (order_id);\nCREATE INDEX idx_users_email ON users (email);',
          },
          { type: 'heading', text: '주요 비즈니스 쿼리' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 1. 카테고리별 상품 목록 (재고 있는 것만)\nSELECT p.id, p.name, p.price, p.stock, c.name AS category\nFROM products p\nINNER JOIN categories c ON p.category_id = c.id\nWHERE p.is_active = TRUE\n  AND p.stock > 0\nORDER BY c.name, p.price;\n\n-- 2. 회원별 총 구매 금액 (상위 10명)\nSELECT u.name, u.email,\n       COUNT(o.id) AS order_count,\n       SUM(o.total_amount) AS total_spent\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.status = ' + "'completed'" + '\nGROUP BY u.id, u.name, u.email\nORDER BY total_spent DESC\nLIMIT 10;\n\n-- 3. 인기 상품 TOP 5 (판매량 기준)\nSELECT p.name,\n       SUM(oi.quantity) AS total_sold,\n       SUM(oi.quantity * oi.unit_price) AS total_revenue\nFROM products p\nINNER JOIN order_items oi ON p.id = oi.product_id\nINNER JOIN orders o ON oi.order_id = o.id\nWHERE o.status = ' + "'completed'" + '\nGROUP BY p.id, p.name\nORDER BY total_sold DESC\nLIMIT 5;\n\n-- 4. 월별 매출 통계\nSELECT\n    DATE_FORMAT(ordered_at, ' + "'%Y-%m'" + ') AS month,\n    COUNT(*) AS order_count,\n    SUM(total_amount) AS monthly_revenue\nFROM orders\nWHERE status = ' + "'completed'" + '\nGROUP BY month\nORDER BY month DESC;',
          },
          { type: 'heading', text: '주문 처리 트랜잭션' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 주문 생성 트랜잭션\nSTART TRANSACTION;\n\n-- 1. 주문 생성\nINSERT INTO orders (user_id, total_amount, status)\nVALUES (1, 0, ' + "'pending'" + ');\nSET @order_id = LAST_INSERT_ID();\n\n-- 2. 주문 아이템 추가 + 재고 확인\nINSERT INTO order_items (order_id, product_id, quantity, unit_price)\nSELECT @order_id, id, 2, price\nFROM products\nWHERE id = 101 AND stock >= 2;\n\n-- 3. 재고 감소\nUPDATE products\nSET stock = stock - 2\nWHERE id = 101 AND stock >= 2;\n\n-- 4. 주문 총액 갱신\nUPDATE orders\nSET total_amount = (\n    SELECT SUM(quantity * unit_price)\n    FROM order_items\n    WHERE order_id = @order_id\n)\nWHERE id = @order_id;\n\n-- 5. 모든 작업 성공 시 확정\nCOMMIT;',
          },
          {
            type: 'list',
            items: [
              '정규화 — 데이터 중복을 최소화하는 테이블 설계',
              '외래 키 — 테이블 간 관계를 명시적으로 정의',
              '인덱스 — 자주 조회되는 열에 설정하여 성능 향상',
              '트랜잭션 — 주문 처리처럼 여러 작업을 원자적으로 실행',
              'VIEW — 복잡한 쿼리를 가상 테이블로 저장하여 재사용',
            ],
          },
          {
            type: 'tip',
            text: '실무에서는 ERD(Entity-Relationship Diagram)로 테이블 관계를 먼저 시각화한 후 SQL을 작성합니다. MySQL Workbench, DBeaver, dbdiagram.io 같은 도구를 활용하면 설계가 수월합니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'SQL 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: 'SQL 명령어 분류' },
          {
            type: 'list',
            items: [
              'DDL (Data Definition Language) — CREATE, ALTER, DROP, TRUNCATE',
              'DML (Data Manipulation Language) — SELECT, INSERT, UPDATE, DELETE',
              'DCL (Data Control Language) — GRANT, REVOKE',
              'TCL (Transaction Control Language) — COMMIT, ROLLBACK, SAVEPOINT',
            ],
          },
          { type: 'heading', text: 'SELECT 절 실행 순서' },
          {
            type: 'code',
            language: 'sql',
            code: '-- SQL 논리적 실행 순서 (작성 순서와 다름!)\n-- 1. FROM     — 테이블 지정\n-- 2. JOIN     — 테이블 결합\n-- 3. WHERE    — 행 필터링\n-- 4. GROUP BY — 그룹화\n-- 5. HAVING   — 그룹 필터링\n-- 6. SELECT   — 열 선택\n-- 7. DISTINCT — 중복 제거\n-- 8. ORDER BY — 정렬\n-- 9. LIMIT    — 결과 개수 제한\n\n-- 예시\nSELECT department, AVG(salary) AS avg_sal  -- 6\nFROM employees                              -- 1\nWHERE hire_date >= ' + "'2023-01-01'" + '            -- 3\nGROUP BY department                         -- 4\nHAVING AVG(salary) > 50000                  -- 5\nORDER BY avg_sal DESC                       -- 8\nLIMIT 5;                                    -- 9',
          },
          { type: 'heading', text: '주요 데이터 타입' },
          {
            type: 'list',
            items: [
              '`INT` / `BIGINT` — 정수',
              '`DECIMAL(p, s)` — 정확한 소수 (금액에 사용)',
              '`VARCHAR(n)` — 가변 길이 문자열 (최대 n자)',
              '`TEXT` — 긴 문자열 (최대 65,535 바이트)',
              '`DATE` — 날짜 (YYYY-MM-DD)',
              '`TIMESTAMP` — 날짜+시간 (타임존 포함)',
              '`BOOLEAN` — 참/거짓 (MySQL에서는 TINYINT(1))',
              '`JSON` — JSON 데이터 (MySQL 5.7+, PostgreSQL)',
            ],
          },
          { type: 'heading', text: '자주 사용되는 함수' },
          {
            type: 'code',
            language: 'sql',
            code: '-- 문자열 함수\nSELECT\n    CONCAT(first_name, ' + "' '" + ', last_name) AS full_name,\n    UPPER(name) AS upper_name,\n    LOWER(name) AS lower_name,\n    LENGTH(name) AS name_length,\n    SUBSTRING(name, 1, 3) AS short_name,\n    TRIM(name) AS trimmed,\n    REPLACE(phone, ' + "'-'" + ', ' + "''" + ') AS clean_phone\nFROM employees;\n\n-- 날짜 함수\nSELECT\n    NOW() AS current_datetime,\n    CURDATE() AS current_date_only,\n    DATE_FORMAT(hire_date, ' + "'%Y년 %m월 %d일'" + ') AS formatted,\n    DATEDIFF(NOW(), hire_date) AS days_worked,\n    DATE_ADD(hire_date, INTERVAL 1 YEAR) AS anniversary\nFROM employees;\n\n-- 조건 함수\nSELECT name,\n    COALESCE(phone, ' + "'번호없음'" + ') AS phone,\n    IFNULL(manager_id, 0) AS manager,\n    CASE\n        WHEN salary >= 70000 THEN ' + "'상'" + '\n        WHEN salary >= 50000 THEN ' + "'중'" + '\n        ELSE ' + "'하'" + '\n    END AS salary_grade\nFROM employees;',
          },
          { type: 'heading', text: 'JOIN 요약' },
          {
            type: 'list',
            items: [
              '`INNER JOIN` — 양쪽 모두 일치하는 행만',
              '`LEFT JOIN` — 왼쪽 전체 + 오른쪽 일치 (없으면 NULL)',
              '`RIGHT JOIN` — 오른쪽 전체 + 왼쪽 일치 (없으면 NULL)',
              '`FULL OUTER JOIN` — 양쪽 전체 (MySQL 미지원, UNION으로 대체)',
              '`CROSS JOIN` — 카르테시안 곱 (모든 조합)',
              '`SELF JOIN` — 같은 테이블을 별칭으로 두 번 참조',
            ],
          },
          {
            type: 'tip',
            text: '각 RDBMS마다 문법 차이가 있습니다. MySQL은 LIMIT, PostgreSQL은 LIMIT/OFFSET, SQL Server는 TOP, Oracle은 ROWNUM을 사용합니다. 표준 SQL(ANSI SQL)을 먼저 익히고, 사용하는 DB의 고유 문법을 추가로 학습하세요.',
          },
        ],
      },
    ],
  },

  // ─── 8. Blockly 비주얼 코딩 ───
  {
    slug: 'blockly',
    title: 'Blockly 비주얼 코딩',
    description: '블록을 조합하여 프로그래밍 개념 학습',
    category: 'programming',
    color: 'bg-green-500',
    difficulty: 'beginner',
    objectives: [
      '블록 기반 프로그래밍 개념 이해',
      '논리, 반복, 변수, 함수 블록',
      '커스텀 블록 정의와 코드 생성',
      '툴박스와 워크스페이스 설정',
      '실전 비주얼 에디터와 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'blockly-basics',
        title: '블록 코딩 시작하기',
        duration: '10분',
        content: [
          { type: 'heading', text: 'Blockly란?' },
          {
            type: 'text',
            text: 'Blockly는 Google에서 만든 비주얼 프로그래밍 라이브러리입니다. 텍스트 대신 블록을 드래그 앤 드롭하여 프로그래밍 로직을 구성합니다. 블록의 모양과 색상이 역할을 나타내며, 서로 연결 가능한 블록만 결합할 수 있어 문법 오류가 발생하지 않습니다.',
          },
          { type: 'heading', text: '블록의 종류' },
          {
            type: 'list',
            items: [
              '값 블록 (Value) — 둥근 모양, 숫자/텍스트/변수 등 값을 나타냄',
              '문장 블록 (Statement) — 위아래 연결부가 있는 직사각형, 동작을 수행',
              '논리 블록 (Boolean) — 육각형 모양, true/false 반환',
              '출력 블록 (Output) — `print` 블록으로 결과를 화면에 출력',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// Blockly 블록이 생성하는 JavaScript 코드 예시

// [출력 블록] "Hello, World!" 출력
window.alert('Hello, World!');

// [변수 블록] + [값 블록]
var name = 'Blockly';
var age = 10;

// [출력 블록] + [텍스트 결합 블록]
window.alert('이름: ' + name);`,
          },
          { type: 'heading', text: '블록 연결 방법' },
          {
            type: 'text',
            text: '블록은 퍼즐처럼 연결합니다. 위쪽 돌출부와 아래쪽 홈이 맞는 블록끼리만 연결됩니다. 값 블록은 문장 블록의 입력 소켓에 끼워 넣습니다. 잘못된 연결은 자석처럼 튕겨나가므로, 자연스럽게 올바른 구조를 만들 수 있습니다.',
          },
          {
            type: 'tip',
            text: 'Blockly에서 만든 블록 코드를 JavaScript, Python, Dart 등 실제 프로그래밍 언어로 변환할 수 있습니다. 블록 코딩으로 논리를 익힌 뒤 텍스트 코딩으로 전환하면 학습이 수월합니다.',
          },
        ],
      },
      {
        slug: 'logic-loops',
        title: '논리와 반복 블록',
        duration: '15분',
        content: [
          { type: 'heading', text: 'if/else 블록' },
          {
            type: 'text',
            text: '논리(Logic) 블록은 조건에 따라 실행 흐름을 분기합니다. `if` 블록에 조건(육각형 블록)을 연결하고, 참일 때와 거짓일 때 실행할 블록을 각각 지정합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// [if/else 블록] 이 생성하는 코드
var temperature = 30;

if (temperature >= 30) {
  window.alert('더운 날씨입니다!');
} else if (temperature >= 20) {
  window.alert('쾌적한 날씨입니다.');
} else {
  window.alert('추운 날씨입니다.');
}`,
          },
          { type: 'heading', text: 'repeat / while 반복 블록' },
          {
            type: 'text',
            text: '반복(Loops) 블록은 동일한 동작을 여러 번 수행합니다. `repeat` 블록은 지정한 횟수만큼, `while` 블록은 조건이 참인 동안 반복합니다. 반복 블록 안에 문장 블록을 넣으면 됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// [repeat 블록] — 10번 반복
for (var count = 0; count < 10; count++) {
  window.alert('반복 ' + count);
}

// [while 블록] — 조건이 참인 동안 반복
var number = 1;
while (number <= 100) {
  number = number * 2;
}
window.alert('결과: ' + number);  // 128`,
          },
          { type: 'heading', text: '비교와 논리 연산자 블록' },
          {
            type: 'list',
            items: [
              '비교 블록: `=`, `≠`, `<`, `>`, `≤`, `≥` — 두 값을 비교하여 true/false 반환',
              '논리 AND 블록: 두 조건이 모두 참이면 true',
              '논리 OR 블록: 두 조건 중 하나라도 참이면 true',
              '논리 NOT 블록: 조건의 참/거짓을 뒤집음',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// [비교 블록] + [논리 AND 블록] 조합 예시
var age = 25;
var hasTicket = true;

// 나이가 18 이상이고, 티켓이 있으면 입장
if (age >= 18 && hasTicket) {
  window.alert('입장 가능합니다.');
} else {
  window.alert('입장 불가합니다.');
}`,
          },
          {
            type: 'tip',
            text: '`repeat` 블록은 정확한 횟수를 알 때, `while` 블록은 조건에 따라 반복 횟수가 달라질 때 사용합니다. 무한 반복을 방지하려면 반드시 조건이 거짓이 되는 시점이 있어야 합니다.',
          },
        ],
      },
      {
        slug: 'functions-lists',
        title: '함수와 리스트 블록',
        duration: '15분',
        content: [
          { type: 'heading', text: '함수 정의 블록과 호출 블록' },
          {
            type: 'text',
            text: '함수(Function) 블록은 반복되는 로직을 하나의 이름으로 묶어 재사용합니다. 함수 정의 블록에서 이름과 매개변수를 설정하고, 호출 블록으로 실행합니다. 결과를 돌려주는 반환(return) 블록도 사용할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// [함수 정의 블록] — 인사 함수
function greet(name) {
  window.alert('안녕하세요, ' + name + '님!');
}

// [함수 호출 블록]
greet('철수');
greet('영희');

// [반환값이 있는 함수 블록]
function add(a, b) {
  return a + b;
}

var result = add(3, 5);
window.alert('합계: ' + result);  // 8`,
          },
          { type: 'heading', text: '리스트 생성 블록과 조작 블록' },
          {
            type: 'text',
            text: '리스트(List) 블록은 여러 값을 순서대로 담는 목록을 만들고 조작합니다. 리스트 생성 블록에 원하는 수만큼 값 슬롯을 추가하고, 조작 블록으로 항목을 추가, 삭제, 검색할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// [리스트 생성 블록]
var fruits = ['사과', '바나나', '포도'];

// [리스트 길이 블록]
window.alert('개수: ' + fruits.length);  // 3

// [리스트에 추가 블록]
fruits.push('딸기');

// [리스트에서 가져오기 블록] — 첫 번째 항목
var first = fruits[0];
window.alert('첫 번째: ' + first);  // 사과

// [리스트 반복 블록] — 각 항목에 대해 실행
for (var i = 0; i < fruits.length; i++) {
  window.alert(fruits[i]);
}`,
          },
          {
            type: 'list',
            items: [
              '리스트 생성 블록 — 빈 리스트 또는 초기값 설정',
              '리스트 길이 블록 — 항목 개수 반환',
              '리스트 추가/삽입 블록 — 끝에 추가 또는 특정 위치에 삽입',
              '리스트 가져오기 블록 — 인덱스로 값 조회',
              '리스트 반복 블록 — 각 항목에 대해 블록 실행',
              '리스트 정렬 블록 — 오름차순/내림차순 정렬',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 함수 + 리스트 조합 예제
function sumList(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

var scores = [90, 85, 92, 78, 95];
var sum = sumList(scores);
var average = sum / scores.length;

window.alert('합계: ' + sum);      // 440
window.alert('평균: ' + average);  // 88`,
          },
          {
            type: 'tip',
            text: 'Blockly의 함수 블록을 적극 활용하세요. 같은 로직이 두 번 이상 반복된다면 함수로 묶는 것이 좋습니다. 이 습관은 텍스트 코딩으로 넘어갔을 때도 큰 도움이 됩니다.',
          },
        ],
      },
      {
        slug: 'variables-functions',
        title: '변수와 함수 블록',
        duration: '20분',
        content: [
          { type: 'heading', text: '변수 블록 심화' },
          {
            type: 'text',
            text: '변수(Variables) 블록은 데이터를 저장하고 관리하는 핵심 요소입니다. Blockly에서 변수를 생성하면 자동으로 set(설정), get(가져오기), change(변경) 블록이 만들어집니다. 변수의 스코프와 타입을 이해하면 더 효과적인 프로그램을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: '// [변수 설정 블록] — 다양한 타입의 변수\nvar playerName = "용사";\nvar playerHP = 100;\nvar isAlive = true;\nvar inventory = ["검", "방패", "포션"];\n\n// [변수 변경 블록] — 값 증감\nplayerHP = playerHP - 20;\nwindow.alert("현재 HP: " + playerHP);  // 80\n\n// [변수 가져오기 블록] + [조건 블록]\nif (playerHP <= 0) {\n  isAlive = false;\n  window.alert(playerName + " 쓰러졌다!");\n} else {\n  window.alert(playerName + " 생존 중! HP: " + playerHP);\n}',
          },
          { type: 'heading', text: '함수 블록 심화 — 매개변수와 반환값' },
          {
            type: 'code',
            language: 'javascript',
            code: '// [함수 정의 블록] — 매개변수 없는 함수\nfunction showStatus() {\n  window.alert("이름: " + playerName);\n  window.alert("HP: " + playerHP);\n  window.alert("생존: " + isAlive);\n}\n\n// [함수 정의 블록] — 매개변수가 있는 함수\nfunction attack(target, damage) {\n  window.alert(playerName + "이(가) " + target + "을 공격!");\n  return damage + Math.floor(Math.random() * 5);\n}\n\n// [함수 호출 블록]\nshowStatus();\nvar totalDamage = attack("슬라임", 15);\nwindow.alert("데미지: " + totalDamage);',
          },
          { type: 'heading', text: '변수 스코프 이해' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 전역 변수 — 어디서든 접근 가능\nvar globalScore = 0;\n\nfunction addScore(points) {\n  // 지역 변수 — 함수 안에서만 존재\n  var bonus = points * 2;\n  globalScore = globalScore + bonus;\n}\n\naddScore(10);\nwindow.alert("점수: " + globalScore);  // 20\n\naddScore(5);\nwindow.alert("점수: " + globalScore);  // 30\n\n// 반복문 내 변수\nvar total = 0;\nfor (var i = 1; i <= 10; i++) {\n  total = total + i;\n}\nwindow.alert("1~10 합계: " + total);  // 55',
          },
          {
            type: 'list',
            items: [
              '변수 설정(Set) 블록 — 변수에 값 저장',
              '변수 가져오기(Get) 블록 — 저장된 값 읽기',
              '변수 변경(Change) 블록 — 숫자 값 증감',
              '함수 정의 블록 — 재사용 가능한 코드 묶음',
              '함수 호출 블록 — 정의된 함수 실행',
              '반환(Return) 블록 — 함수에서 값 돌려주기',
            ],
          },
          {
            type: 'tip',
            text: '변수 이름은 역할을 명확히 나타내도록 지어주세요. "x" 대신 "playerHP"처럼 의미 있는 이름을 사용하면 블록 코드를 읽기 쉬워집니다. 이 습관은 텍스트 코딩에서도 매우 중요합니다.',
          },
        ],
      },
      {
        slug: 'code-generation',
        title: '코드 생성과 실행',
        duration: '20분',
        content: [
          { type: 'heading', text: 'Blockly 코드 생성 원리' },
          {
            type: 'text',
            text: 'Blockly의 핵심 기능 중 하나는 블록을 실제 프로그래밍 언어 코드로 변환하는 것입니다. 각 블록에는 코드 생성기(generator)가 연결되어 있어, 워크스페이스의 블록 구조를 JavaScript, Python, Dart 등의 코드로 변환합니다.',
          },
          { type: 'heading', text: 'JavaScript 코드 생성' },
          {
            type: 'code',
            language: 'javascript',
            code: '// Blockly 워크스페이스에서 JavaScript 코드 생성\n// javascript 생성기 import\n// import {javascriptGenerator} from "blockly/javascript";\n\n// 워크스페이스의 모든 블록을 JavaScript로 변환\n// var code = javascriptGenerator.workspaceToCode(workspace);\n\n// 예시: 아래 블록 구성이 생성하는 코드\n// [변수 설정: count = 0]\n// [반복 10번]\n//   [변수 변경: count + 1]\n//   [출력: count]\n\n// 생성된 JavaScript 코드:\nvar count = 0;\nfor (var loop_count = 0; loop_count < 10; loop_count++) {\n  count = count + 1;\n  window.alert(count);\n}',
          },
          { type: 'heading', text: 'Python 코드 생성' },
          {
            type: 'code',
            language: 'javascript',
            code: '// Python 생성기 사용 예시\n// import {pythonGenerator} from "blockly/python";\n// var pythonCode = pythonGenerator.workspaceToCode(workspace);\n\n// 같은 블록에서 생성된 Python 코드:\n// count = 0\n// for loop_count in range(10):\n//   count = count + 1\n//   print(count)',
          },
          { type: 'heading', text: '코드 실행 방법' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 방법 1: eval()로 직접 실행 (간단하지만 보안 주의)\n// var code = javascriptGenerator.workspaceToCode(workspace);\n// eval(code);\n\n// 방법 2: Function 생성자 사용 (더 안전)\n// var code = javascriptGenerator.workspaceToCode(workspace);\n// var runCode = new Function(code);\n// runCode();\n\n// 방법 3: JS-Interpreter 사용 (가장 안전, 샌드박스)\n// 무한 루프 방지, 실행 제어 가능\n// var interpreter = new Interpreter(code);\n// interpreter.run();\n\n// 실제 활용 예시\nfunction executeBlocklyCode(workspace) {\n  // 생성기에서 코드 가져오기\n  // var code = javascriptGenerator.workspaceToCode(workspace);\n  var code = "window.alert(" + String.fromCharCode(39) + "Hello from Blockly!" + String.fromCharCode(39) + ");";\n\n  try {\n    // Function으로 감싸서 실행\n    var runner = new Function(code);\n    runner();\n  } catch (error) {\n    window.alert("오류 발생: " + error.message);\n  }\n}',
          },
          { type: 'heading', text: '코드 하이라이팅과 디버깅' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 블록 실행 시 해당 블록을 하이라이트\n// workspace에서 블록 ID로 하이라이트\nfunction highlightBlock(blockId) {\n  // workspace.highlightBlock(blockId);\n  window.alert("실행 중인 블록: " + blockId);\n}\n\n// 단계별 실행 (Step-by-step)\nvar stepDelay = 500; // 0.5초 간격\n\nfunction runStep(steps, index) {\n  if (index < steps.length) {\n    highlightBlock(steps[index].blockId);\n    // 블록의 코드 실행\n    steps[index].execute();\n\n    // 다음 단계 예약\n    setTimeout(function() {\n      runStep(steps, index + 1);\n    }, stepDelay);\n  } else {\n    window.alert("실행 완료!");\n  }\n}',
          },
          {
            type: 'list',
            items: [
              'javascriptGenerator — JavaScript 코드 생성기',
              'pythonGenerator — Python 코드 생성기',
              'workspaceToCode() — 워크스페이스 전체를 코드로 변환',
              'blockToCode() — 특정 블록만 코드로 변환',
              'JS-Interpreter — 안전한 코드 실행 샌드박스',
              'highlightBlock() — 실행 중인 블록 시각적 표시',
            ],
          },
          {
            type: 'tip',
            text: '사용자가 만든 블록 코드를 실행할 때는 반드시 샌드박스를 사용하세요. eval()은 보안 위험이 있으므로 JS-Interpreter 또는 iframe 샌드박스를 권장합니다. 무한 루프 방지를 위해 실행 시간 제한도 설정하세요.',
          },
        ],
      },
      {
        slug: 'toolbox-workspace',
        title: '툴박스와 워크스페이스 커스터마이징',
        duration: '20분',
        content: [
          { type: 'heading', text: '툴박스(Toolbox) 구성' },
          {
            type: 'text',
            text: '툴박스는 사용자가 드래그할 수 있는 블록들의 목록입니다. 카테고리로 블록을 분류하고, 각 카테고리에 색상을 지정하여 직관적인 인터페이스를 만들 수 있습니다. XML 또는 JSON 형식으로 정의합니다.',
          },
          { type: 'heading', text: 'JSON 형식 툴박스 정의' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 툴박스 정의 (JSON 형식)\nvar toolbox = {\n  kind: "categoryToolbox",\n  contents: [\n    {\n      kind: "category",\n      name: "논리",\n      colour: "#5C81A6",\n      contents: [\n        { kind: "block", type: "controls_if" },\n        { kind: "block", type: "logic_compare" },\n        { kind: "block", type: "logic_operation" },\n        { kind: "block", type: "logic_negate" },\n        { kind: "block", type: "logic_boolean" }\n      ]\n    },\n    {\n      kind: "category",\n      name: "반복",\n      colour: "#5CA65C",\n      contents: [\n        { kind: "block", type: "controls_repeat_ext" },\n        { kind: "block", type: "controls_whileUntil" },\n        { kind: "block", type: "controls_for" },\n        { kind: "block", type: "controls_forEach" }\n      ]\n    },\n    {\n      kind: "category",\n      name: "수학",\n      colour: "#5C68A6",\n      contents: [\n        { kind: "block", type: "math_number" },\n        { kind: "block", type: "math_arithmetic" },\n        { kind: "block", type: "math_random_int" }\n      ]\n    },\n    {\n      kind: "category",\n      name: "변수",\n      colour: "#A65C81",\n      custom: "VARIABLE"  // 동적 변수 카테고리\n    },\n    {\n      kind: "category",\n      name: "함수",\n      colour: "#9A5CA6",\n      custom: "PROCEDURE"  // 동적 함수 카테고리\n    }\n  ]\n};',
          },
          { type: 'heading', text: '워크스페이스 초기화와 설정' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 워크스페이스 생성\n// var workspace = Blockly.inject("blocklyDiv", {\n//   toolbox: toolbox,\n//   grid: {\n//     spacing: 20,\n//     length: 3,\n//     colour: "#ccc",\n//     snap: true        // 그리드에 스냅\n//   },\n//   zoom: {\n//     controls: true,   // 줌 컨트롤 표시\n//     wheel: true,      // 마우스 휠 줌\n//     startScale: 1.0,  // 초기 줌 레벨\n//     maxScale: 3,      // 최대 줌\n//     minScale: 0.3     // 최소 줌\n//   },\n//   trashcan: true,     // 휴지통 표시\n//   move: {\n//     scrollbars: true, // 스크롤바\n//     drag: true,       // 드래그 이동\n//     wheel: true       // 휠 스크롤\n//   },\n//   renderer: "zelos"   // 렌더러 (geras, zelos, thrasos)\n// });\n\n// 워크스페이스 옵션 객체\nvar workspaceOptions = {\n  toolbox: toolbox,\n  grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },\n  zoom: { controls: true, wheel: true, startScale: 1.0 },\n  trashcan: true,\n  renderer: "zelos"\n};\n\nwindow.alert("워크스페이스 설정 완료: " + JSON.stringify(Object.keys(workspaceOptions)));',
          },
          { type: 'heading', text: '테마 커스터마이징' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 커스텀 테마 정의\n// var customTheme = Blockly.Theme.defineTheme("myTheme", {\n//   base: Blockly.Themes.Classic,\n//   blockStyles: {\n//     logic_blocks: {\n//       colourPrimary: "#4C97AF",\n//       colourSecondary: "#3B7D95",\n//       colourTertiary: "#2A5F73"\n//     },\n//     loop_blocks: {\n//       colourPrimary: "#5BA55B",\n//       colourSecondary: "#4A8E4A",\n//       colourTertiary: "#377237"\n//     },\n//     math_blocks: {\n//       colourPrimary: "#5B67A5",\n//       colourSecondary: "#4A5489",\n//       colourTertiary: "#374066"\n//     }\n//   },\n//   categoryStyles: {\n//     logic_category: { colour: "#4C97AF" },\n//     loop_category: { colour: "#5BA55B" },\n//     math_category: { colour: "#5B67A5" }\n//   },\n//   componentStyles: {\n//     workspaceBackgroundColour: "#1e1e1e",\n//     toolboxBackgroundColour: "#333",\n//     toolboxForegroundColour: "#fff",\n//     flyoutBackgroundColour: "#252526",\n//     flyoutForegroundColour: "#ccc"\n//   }\n// });\n\n// 테마 설정 예시 구조\nvar themeConfig = {\n  blockStyles: ["logic_blocks", "loop_blocks", "math_blocks"],\n  categoryStyles: ["logic_category", "loop_category", "math_category"],\n  componentStyles: ["workspace", "toolbox", "flyout"]\n};\n\nwindow.alert("테마 구성 요소: " + JSON.stringify(themeConfig));',
          },
          {
            type: 'list',
            items: [
              '`Blockly.inject()` — DOM 요소에 워크스페이스 주입',
              '`toolbox` — 카테고리/블록 목록 정의 (JSON 또는 XML)',
              '`grid` — 그리드 표시 및 스냅 설정',
              '`zoom` — 줌 컨트롤 및 범위 설정',
              '`renderer` — 블록 렌더러 선택 (geras, zelos, thrasos)',
              '`Theme.defineTheme()` — 커스텀 테마 생성',
            ],
          },
          {
            type: 'tip',
            text: '`zelos` 렌더러는 Scratch 스타일의 둥근 블록을 제공하여 초보자에게 친숙합니다. `geras`는 클래식 스타일입니다. 대상 사용자에 맞는 렌더러를 선택하세요.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 비주얼 프로그래밍 에디터',
        duration: '25분',
        content: [
          { type: 'heading', text: '프로젝트 개요 — 미니 코딩 에디터' },
          {
            type: 'text',
            text: '지금까지 배운 Blockly 지식을 활용하여 커스텀 블록이 포함된 미니 비주얼 프로그래밍 에디터를 구현합니다. HTML 페이지에 Blockly 워크스페이스를 배치하고, 코드 생성 및 실행까지 가능한 완전한 에디터를 만듭니다.',
          },
          { type: 'heading', text: 'HTML 레이아웃 구성' },
          {
            type: 'code',
            language: 'javascript',
            code: '// HTML 구조 (코드로 표현)\n// <div id="app">\n//   <div id="toolbar">\n//     <button id="runBtn">실행</button>\n//     <button id="saveBtn">저장</button>\n//     <button id="loadBtn">불러오기</button>\n//     <button id="clearBtn">초기화</button>\n//   </div>\n//   <div id="content">\n//     <div id="blocklyDiv"></div>  <!-- 블록 에디터 -->\n//     <div id="codeOutput"></div>  <!-- 코드 미리보기 -->\n//   </div>\n//   <div id="consoleOutput"></div>  <!-- 실행 결과 -->\n// </div>\n\n// 레이아웃 초기화\nvar layout = {\n  toolbar: ["실행", "저장", "불러오기", "초기화"],\n  editor: "blocklyDiv",\n  codePreview: "codeOutput",\n  console: "consoleOutput"\n};\n\nwindow.alert("에디터 레이아웃: " + JSON.stringify(layout));',
          },
          { type: 'heading', text: '커스텀 블록 정의 — 캐릭터 제어' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 커스텀 블록 정의: 캐릭터 이동\n// Blockly.Blocks["character_move"] = {\n//   init: function() {\n//     this.appendDummyInput()\n//         .appendField("캐릭터를")\n//         .appendField(new Blockly.FieldDropdown([\n//           ["위로", "UP"],\n//           ["아래로", "DOWN"],\n//           ["왼쪽으로", "LEFT"],\n//           ["오른쪽으로", "RIGHT"]\n//         ]), "DIRECTION")\n//         .appendField("이동");\n//     this.appendValueInput("STEPS")\n//         .setCheck("Number")\n//         .appendField("");\n//     this.appendDummyInput()\n//         .appendField("칸");\n//     this.setPreviousStatement(true, null);\n//     this.setNextStatement(true, null);\n//     this.setColour(160);\n//     this.setTooltip("캐릭터를 지정 방향으로 이동합니다");\n//   }\n// };\n\n// 커스텀 블록의 코드 생성기\n// javascriptGenerator.forBlock["character_move"] = function(block) {\n//   var direction = block.getFieldValue("DIRECTION");\n//   var steps = javascriptGenerator.valueToCode(\n//     block, "STEPS", javascriptGenerator.ORDER_ATOMIC\n//   ) || "1";\n//   return "moveCharacter(" + JSON.stringify(direction) + ", " + steps + ");\\n";\n// };\n\n// 캐릭터 이동 실행 함수\nvar characterX = 0;\nvar characterY = 0;\n\nfunction moveCharacter(direction, steps) {\n  if (direction === "UP") characterY -= steps;\n  if (direction === "DOWN") characterY += steps;\n  if (direction === "LEFT") characterX -= steps;\n  if (direction === "RIGHT") characterX += steps;\n  window.alert("캐릭터 위치: (" + characterX + ", " + characterY + ")");\n}',
          },
          { type: 'heading', text: '에디터 핵심 기능 구현' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 코드 생성 및 미리보기 업데이트\nfunction updateCodePreview(workspace) {\n  // var code = javascriptGenerator.workspaceToCode(workspace);\n  // document.getElementById("codeOutput").textContent = code;\n  var code = "// 블록에서 생성된 코드가 여기에 표시됩니다";\n  window.alert("코드 미리보기 업데이트: " + code);\n}\n\n// 실행 버튼\nfunction runCode(workspace) {\n  // var code = javascriptGenerator.workspaceToCode(workspace);\n  var output = [];\n\n  // console.log를 캡처하여 출력 영역에 표시\n  var originalAlert = window.alert;\n  window.alert = function(msg) {\n    output.push(String(msg));\n  };\n\n  try {\n    // new Function(code)();\n    window.alert("실행 성공!");\n  } catch (error) {\n    output.push("오류: " + error.message);\n  }\n\n  window.alert = originalAlert;\n  window.alert("실행 결과:\\n" + output.join("\\n"));\n}\n\n// 워크스페이스 저장\nfunction saveWorkspace(workspace) {\n  // var state = Blockly.serialization.workspaces.save(workspace);\n  // localStorage.setItem("blocklyWorkspace", JSON.stringify(state));\n  window.alert("워크스페이스 저장 완료!");\n}\n\n// 워크스페이스 불러오기\nfunction loadWorkspace(workspace) {\n  // var stateJson = localStorage.getItem("blocklyWorkspace");\n  // if (stateJson) {\n  //   var state = JSON.parse(stateJson);\n  //   Blockly.serialization.workspaces.load(state, workspace);\n  // }\n  window.alert("워크스페이스 불러오기!");\n}',
          },
          { type: 'heading', text: '이벤트 리스너와 실시간 업데이트' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 워크스페이스 변경 이벤트 감지\n// workspace.addChangeListener(function(event) {\n//   // 블록 변경 시 코드 자동 업데이트\n//   if (event.type === Blockly.Events.BLOCK_CHANGE ||\n//       event.type === Blockly.Events.BLOCK_MOVE ||\n//       event.type === Blockly.Events.BLOCK_DELETE) {\n//     updateCodePreview(workspace);\n//   }\n// });\n\n// 버튼 이벤트 연결\nfunction setupButtons() {\n  // document.getElementById("runBtn").onclick = function() {\n  //   runCode(workspace);\n  // };\n  // document.getElementById("saveBtn").onclick = function() {\n  //   saveWorkspace(workspace);\n  // };\n  // document.getElementById("loadBtn").onclick = function() {\n  //   loadWorkspace(workspace);\n  // };\n  // document.getElementById("clearBtn").onclick = function() {\n  //   workspace.clear();\n  //   updateCodePreview(workspace);\n  // };\n\n  window.alert("버튼 이벤트 연결 완료!");\n}\n\n// 윈도우 리사이즈 대응\n// window.addEventListener("resize", function() {\n//   Blockly.svgResize(workspace);\n// });\n\n// 초기화 실행\nsetupButtons();\nwindow.alert("에디터 초기화 완료!");',
          },
          {
            type: 'list',
            items: [
              'Blockly.inject() — 워크스페이스를 DOM 요소에 주입',
              'workspaceToCode() — 블록을 코드 문자열로 변환',
              'addChangeListener() — 블록 변경 이벤트 감지',
              'serialization.workspaces.save/load — 워크스페이스 직렬화',
              '커스텀 블록 — 도메인 특화 블록을 정의하여 교육/업무 활용',
              'localStorage — 브라우저에 작업 내용 저장',
            ],
          },
          {
            type: 'tip',
            text: '이 프로젝트를 확장해 보세요: 블록으로 그림 그리기(Canvas 활용), 게임 캐릭터 제어, 로봇 시뮬레이터, 음악 만들기 등 다양한 도메인에 Blockly를 적용할 수 있습니다. 대상 사용자에 맞는 커스텀 블록을 설계하는 것이 핵심입니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Blockly 레퍼런스',
        duration: '15분',
        content: [
          { type: 'heading', text: '기본 블록 카테고리' },
          {
            type: 'list',
            items: [
              'Logic — controls_if, logic_compare, logic_operation, logic_negate, logic_boolean',
              'Loops — controls_repeat_ext, controls_whileUntil, controls_for, controls_forEach, controls_flow_statements',
              'Math — math_number, math_arithmetic, math_single, math_random_int, math_modulo',
              'Text — text, text_join, text_length, text_print, text_prompt_ext',
              'Lists — lists_create_with, lists_length, lists_getIndex, lists_setIndex, lists_sort',
              'Variables — variables_get, variables_set (자동 생성)',
              'Functions — procedures_defnoreturn, procedures_defreturn, procedures_callnoreturn, procedures_callreturn',
            ],
          },
          { type: 'heading', text: '핵심 API' },
          {
            type: 'code',
            language: 'javascript',
            code: '// ── 워크스페이스 API ──\n// Blockly.inject(element, options) — 워크스페이스 생성\n// workspace.clear() — 모든 블록 제거\n// workspace.dispose() — 워크스페이스 완전 삭제\n// workspace.getAllBlocks() — 모든 블록 배열 반환\n// workspace.getBlockById(id) — ID로 블록 찾기\n// workspace.undo(false) — 실행 취소\n// workspace.undo(true) — 다시 실행\n// Blockly.svgResize(workspace) — 크기 재계산\n\n// ── 블록 API ──\n// block.getFieldValue(name) — 필드 값 반환\n// block.setFieldValue(value, name) — 필드 값 설정\n// block.getInputTargetBlock(name) — 입력에 연결된 블록\n// block.getNextBlock() — 다음 블록\n// block.getPreviousBlock() — 이전 블록\n// block.dispose() — 블록 삭제\n\n// API 카테고리 요약\nvar apiCategories = {\n  workspace: ["inject", "clear", "dispose", "getAllBlocks", "undo"],\n  block: ["getFieldValue", "setFieldValue", "getNextBlock", "dispose"],\n  serialization: ["save", "load"],\n  events: ["BLOCK_CREATE", "BLOCK_DELETE", "BLOCK_CHANGE", "BLOCK_MOVE"]\n};\n\nwindow.alert("API 카테고리: " + Object.keys(apiCategories).join(", "));',
          },
          { type: 'heading', text: '커스텀 블록 정의 패턴' },
          {
            type: 'code',
            language: 'javascript',
            code: '// 커스텀 블록 정의 템플릿\n// Blockly.Blocks["my_custom_block"] = {\n//   init: function() {\n//     // 입력 종류\n//     this.appendDummyInput()       // 필드만 포함하는 입력\n//       .appendField("라벨");\n//     this.appendValueInput("VALUE") // 값 입력 (둥근 소켓)\n//       .setCheck("Number");        // 타입 제한\n//     this.appendStatementInput("DO") // 문장 입력 (C자 형태)\n//       .setCheck(null);            // 모든 문장 블록 허용\n//\n//     // 연결부 설정\n//     this.setPreviousStatement(true, null); // 위쪽 연결\n//     this.setNextStatement(true, null);     // 아래쪽 연결\n//     this.setOutput(true, "Number");        // 출력 (값 블록)\n//\n//     // 외관\n//     this.setColour(230);         // 색상 (0-360 색상 값)\n//     this.setTooltip("설명");     // 툴팁\n//     this.setHelpUrl("URL");      // 도움말 링크\n//   }\n// };\n\n// 필드 종류 요약\nvar fieldTypes = {\n  FieldTextInput: "텍스트 입력 필드",\n  FieldNumber: "숫자 입력 필드 (최소/최대 설정 가능)",\n  FieldDropdown: "드롭다운 선택 필드",\n  FieldCheckbox: "체크박스 필드",\n  FieldColour: "색상 선택 필드",\n  FieldAngle: "각도 선택 필드",\n  FieldImage: "이미지 표시 필드",\n  FieldLabel: "읽기 전용 텍스트"\n};\n\nfor (var key in fieldTypes) {\n  window.alert(key + ": " + fieldTypes[key]);\n}',
          },
          { type: 'heading', text: '이벤트 타입 정리' },
          {
            type: 'list',
            items: [
              '`Blockly.Events.BLOCK_CREATE` — 블록 생성 시',
              '`Blockly.Events.BLOCK_DELETE` — 블록 삭제 시',
              '`Blockly.Events.BLOCK_CHANGE` — 블록 필드 값 변경 시',
              '`Blockly.Events.BLOCK_MOVE` — 블록 이동/연결 시',
              '`Blockly.Events.VAR_CREATE` — 변수 생성 시',
              '`Blockly.Events.VAR_DELETE` — 변수 삭제 시',
              '`Blockly.Events.UI` — UI 상호작용 (선택, 열기/닫기 등)',
              '`Blockly.Events.FINISHED_LOADING` — 직렬화 로드 완료 시',
            ],
          },
          { type: 'heading', text: '직렬화와 저장' },
          {
            type: 'code',
            language: 'javascript',
            code: '// ── JSON 직렬화 (권장) ──\n// 저장\n// var state = Blockly.serialization.workspaces.save(workspace);\n// var json = JSON.stringify(state);\n\n// 불러오기\n// var state = JSON.parse(json);\n// Blockly.serialization.workspaces.load(state, workspace);\n\n// ── XML 직렬화 (레거시) ──\n// 저장\n// var xml = Blockly.Xml.workspaceToDom(workspace);\n// var xmlText = Blockly.Xml.domToText(xml);\n\n// 불러오기\n// var xml = Blockly.Xml.textToDom(xmlText);\n// Blockly.Xml.domToWorkspace(xml, workspace);\n\n// 직렬화 비교\nvar serializationMethods = {\n  JSON: {\n    save: "Blockly.serialization.workspaces.save()",\n    load: "Blockly.serialization.workspaces.load()",\n    note: "권장, 최신 API"\n  },\n  XML: {\n    save: "Blockly.Xml.workspaceToDom()",\n    load: "Blockly.Xml.domToWorkspace()",\n    note: "레거시, 하위 호환"\n  }\n};\n\nwindow.alert("직렬화 방법: JSON (권장), XML (레거시)");',
          },
          {
            type: 'tip',
            text: '공식 문서: developers.google.com/blockly 에서 최신 API와 튜토리얼을 확인하세요. Blockly는 활발히 업데이트되므로, npm의 blockly 패키지를 최신 버전으로 유지하는 것이 좋습니다.',
          },
        ],
      },
    ],
  },
];
