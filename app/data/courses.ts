export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'list'; items: string[] }
  | { type: 'tip'; text: string };

export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  content: ContentBlock[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  category: string;
  color: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  objectives: string[];
  lessons: Lesson[];
};

export const CATEGORIES = [
  { id: 'web', label: '웹 기초' },
  { id: 'framework', label: '프레임워크' },
  { id: 'programming', label: '프로그래밍' },
  { id: 'data', label: '데이터' },
] as const;

export const DIFFICULTY_LABELS: Record<Course['difficulty'], string> = {
  beginner: '입문',
  intermediate: '중급',
  advanced: '고급',
};

export const courses: Course[] = [
  // ── 웹 기초 ──
  {
    slug: 'html-css',
    title: 'HTML & CSS 기초',
    description: '웹 페이지의 구조와 스타일을 배우는 첫 걸음',
    category: 'web',
    color: 'bg-orange-500',
    difficulty: 'beginner',
    objectives: [
      'HTML 문서의 기본 구조를 이해한다',
      'CSS로 요소를 스타일링한다',
      'Flexbox로 레이아웃을 구성한다',
    ],
    lessons: [
      {
        slug: 'html-basics',
        title: 'HTML 기본 구조',
        duration: '15분',
        content: [
          { type: 'text', text: 'HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 모든 웹 페이지는 HTML 문서로 시작합니다.' },
          { type: 'heading', text: '기본 문서 구조' },
          { type: 'code', language: 'html', code: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>내 첫 웹페이지</title>
</head>
<body>
  <h1>안녕하세요!</h1>
  <p>첫 번째 웹 페이지입니다.</p>
</body>
</html>` },
          { type: 'text', text: '`<!DOCTYPE html>`은 이 문서가 HTML5임을 선언합니다. `<head>`에는 메타 정보를, `<body>`에는 실제 콘텐츠를 작성합니다.' },
          { type: 'heading', text: '주요 태그' },
          { type: 'list', items: [
            '`<h1>` ~ `<h6>`: 제목 (h1이 가장 큼)',
            '`<p>`: 문단',
            '`<a href="url">`: 링크',
            '`<img src="url" alt="설명">`: 이미지',
            '`<ul>`, `<ol>`, `<li>`: 목록',
            '`<div>`: 영역 구분 (블록)',
            '`<span>`: 인라인 영역 구분',
          ]},
          { type: 'tip', text: 'Playground의 HTML/JS 환경에서 직접 코드를 작성하고 결과를 확인해보세요!' },
        ],
      },
      {
        slug: 'css-styling',
        title: 'CSS 기초 스타일링',
        duration: '20분',
        content: [
          { type: 'text', text: 'CSS(Cascading Style Sheets)는 HTML 요소의 시각적 표현을 정의합니다. 색상, 크기, 간격, 글꼴 등을 제어할 수 있습니다.' },
          { type: 'heading', text: '선택자와 속성' },
          { type: 'code', language: 'css', code: `/* 태그 선택자 */
h1 {
  color: #1e293b;
  font-size: 2rem;
}

/* 클래스 선택자 */
.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* ID 선택자 */
#header {
  background: #3b82f6;
  color: white;
}` },
          { type: 'heading', text: '자주 쓰는 속성' },
          { type: 'list', items: [
            '`color`: 글자 색상',
            '`background`: 배경색/이미지',
            '`font-size`: 글자 크기',
            '`margin`: 바깥 여백',
            '`padding`: 안쪽 여백',
            '`border`: 테두리',
            '`border-radius`: 모서리 둥글기',
          ]},
          { type: 'heading', text: 'Box Model' },
          { type: 'text', text: '모든 HTML 요소는 Box Model을 따릅니다: content → padding → border → margin 순서로 감싸집니다. `box-sizing: border-box`를 설정하면 padding과 border가 width에 포함되어 계산이 직관적입니다.' },
        ],
      },
      {
        slug: 'layout-flexbox',
        title: '레이아웃과 Flexbox',
        duration: '20분',
        content: [
          { type: 'text', text: 'Flexbox는 1차원 레이아웃을 쉽게 만들 수 있는 CSS 레이아웃 모듈입니다. 수평/수직 정렬, 간격 배분, 반응형 처리에 탁월합니다.' },
          { type: 'heading', text: 'Flex 컨테이너' },
          { type: 'code', language: 'css', code: `.container {
  display: flex;
  justify-content: center;  /* 가로 정렬 */
  align-items: center;      /* 세로 정렬 */
  gap: 16px;                /* 아이템 간격 */
}

/* 세로 배치 */
.column {
  display: flex;
  flex-direction: column;
}

/* 줄바꿈 허용 (반응형) */
.wrap {
  display: flex;
  flex-wrap: wrap;
}` },
          { type: 'heading', text: 'Flex 아이템' },
          { type: 'code', language: 'css', code: `.item {
  flex: 1;          /* 남은 공간을 균등 분배 */
}

.sidebar {
  flex: 0 0 250px;  /* 고정 너비 250px */
}

.main {
  flex: 1;          /* 나머지 공간 차지 */
}` },
          { type: 'tip', text: 'justify-content는 주축(기본: 가로), align-items는 교차축(기본: 세로) 방향입니다. flex-direction: column이면 축이 바뀝니다.' },
        ],
      },
    ],
  },
  {
    slug: 'javascript',
    title: 'JavaScript 기초',
    description: '웹의 프로그래밍 언어, JavaScript 핵심 문법',
    category: 'web',
    color: 'bg-yellow-400',
    difficulty: 'beginner',
    objectives: [
      '변수, 타입, 연산자를 이해한다',
      '함수를 정의하고 호출한다',
      '배열과 객체를 다룬다',
    ],
    lessons: [
      {
        slug: 'variables-types',
        title: '변수와 데이터 타입',
        duration: '15분',
        content: [
          { type: 'text', text: 'JavaScript는 웹 브라우저에서 실행되는 프로그래밍 언어입니다. 변수를 사용하여 데이터를 저장하고 조작합니다.' },
          { type: 'heading', text: '변수 선언' },
          { type: 'code', language: 'javascript', code: `// const: 재할당 불가 (권장)
const name = "JackerLab";
const PI = 3.14159;

// let: 재할당 가능
let count = 0;
count = count + 1;

// var는 사용하지 마세요 (호이스팅 문제)` },
          { type: 'heading', text: '데이터 타입' },
          { type: 'code', language: 'javascript', code: `// 문자열 (String)
const greeting = "안녕하세요";
const template = \`이름: \${name}\`;  // 템플릿 리터럴

// 숫자 (Number)
const age = 25;
const price = 9.99;

// 불리언 (Boolean)
const isActive = true;

// null & undefined
const empty = null;       // 의도적 빈 값
let notSet;               // undefined (미할당)

// 배열 (Array)
const colors = ["red", "green", "blue"];

// 객체 (Object)
const user = { name: "Kim", age: 25 };` },
          { type: 'tip', text: 'typeof 연산자로 타입을 확인할 수 있습니다: typeof 42 → "number"' },
        ],
      },
      {
        slug: 'functions',
        title: '함수와 조건문',
        duration: '20분',
        content: [
          { type: 'text', text: '함수는 재사용 가능한 코드 블록입니다. 입력(매개변수)을 받아 처리하고 결과(반환값)를 돌려줍니다.' },
          { type: 'heading', text: '함수 정의' },
          { type: 'code', language: 'javascript', code: `// 화살표 함수 (권장)
const add = (a, b) => a + b;

const greet = (name) => {
  return \`안녕하세요, \${name}님!\`;
};

// 함수 선언식
function multiply(a, b) {
  return a * b;
}

console.log(add(3, 5));        // 8
console.log(greet("Kim"));     // "안녕하세요, Kim님!"` },
          { type: 'heading', text: '조건문' },
          { type: 'code', language: 'javascript', code: `const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// 삼항 연산자 (간단한 조건)
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// 논리 연산자
const isAdult = age >= 18;
const canDrive = isAdult && hasLicense;  // AND
const canEnter = isVIP || hasTicket;     // OR` },
        ],
      },
      {
        slug: 'arrays-loops',
        title: '배열과 반복문',
        duration: '20분',
        content: [
          { type: 'text', text: '배열은 여러 값을 순서대로 저장하는 자료구조입니다. 반복문과 배열 메서드를 활용하여 데이터를 효율적으로 처리합니다.' },
          { type: 'heading', text: '배열 메서드' },
          { type: 'code', language: 'javascript', code: `const numbers = [1, 2, 3, 4, 5];

// map: 변환
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter: 조건에 맞는 것만
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce: 하나의 값으로 축약
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find: 첫 번째 일치 항목
const found = numbers.find(n => n > 3);
// 4` },
          { type: 'heading', text: '반복문' },
          { type: 'code', language: 'javascript', code: `const fruits = ["사과", "바나나", "체리"];

// for...of (배열 순회)
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// 객체 순회
const scores = { math: 90, english: 85, science: 92 };
for (const [subject, score] of Object.entries(scores)) {
  console.log(\`\${subject}: \${score}점\`);
}` },
          { type: 'tip', text: 'map, filter, reduce는 원본 배열을 변경하지 않고 새 배열을 반환합니다. 이를 불변성(immutability)이라 합니다.' },
        ],
      },
    ],
  },

  // ── 프레임워크 ──
  {
    slug: 'react',
    title: 'React 시작하기',
    description: '컴포넌트 기반 UI 라이브러리 React 입문',
    category: 'framework',
    color: 'bg-cyan-500',
    difficulty: 'beginner',
    objectives: [
      'JSX 문법을 이해한다',
      '컴포넌트와 Props를 활용한다',
      'State로 상태를 관리한다',
    ],
    lessons: [
      {
        slug: 'jsx-basics',
        title: 'React와 JSX',
        duration: '15분',
        content: [
          { type: 'text', text: 'React는 Facebook(Meta)이 만든 UI 라이브러리입니다. 컴포넌트라는 재사용 가능한 블록으로 UI를 구성합니다. JSX는 JavaScript 안에서 HTML과 유사한 문법을 쓸 수 있게 해주는 문법 확장입니다.' },
          { type: 'heading', text: 'JSX 기본' },
          { type: 'code', language: 'jsx', code: `function App() {
  const name = "JackerLab";
  const isLoggedIn = true;

  return (
    <div>
      <h1>안녕하세요, {name}!</h1>
      {isLoggedIn ? (
        <p>환영합니다.</p>
      ) : (
        <p>로그인해주세요.</p>
      )}
      <ul>
        {["React", "Vue", "Angular"].map(fw => (
          <li key={fw}>{fw}</li>
        ))}
      </ul>
    </div>
  );
}` },
          { type: 'list', items: [
            '`{}`로 JavaScript 표현식을 삽입',
            '`className`을 사용 (class 대신)',
            '태그는 반드시 닫아야 함 (`<br />`)',
            '최상위 요소는 하나여야 함 (`<>...</>` 사용 가능)',
          ]},
        ],
      },
      {
        slug: 'components-props',
        title: '컴포넌트와 Props',
        duration: '20분',
        content: [
          { type: 'text', text: '컴포넌트는 UI의 독립적인 조각입니다. Props(속성)를 통해 부모에서 자식으로 데이터를 전달합니다.' },
          { type: 'heading', text: '컴포넌트 정의와 Props' },
          { type: 'code', language: 'jsx', code: `// Button 컴포넌트
function Button({ label, onClick, variant = "primary" }) {
  const styles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  return (
    <button
      className={\`px-4 py-2 rounded \${styles[variant]}\`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// 사용
function App() {
  return (
    <div>
      <Button label="확인" onClick={() => alert("클릭!")} />
      <Button label="취소" variant="secondary" onClick={() => {}} />
    </div>
  );
}` },
          { type: 'heading', text: 'children Props' },
          { type: 'code', language: 'jsx', code: `function Card({ title, children }) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}

// 사용
<Card title="공지사항">
  <p>오늘 서비스 점검이 있습니다.</p>
</Card>` },
        ],
      },
      {
        slug: 'state-events',
        title: 'State와 이벤트',
        duration: '20분',
        content: [
          { type: 'text', text: 'State는 컴포넌트 내부에서 관리하는 변경 가능한 데이터입니다. State가 변경되면 컴포넌트가 다시 렌더링됩니다.' },
          { type: 'heading', text: 'useState Hook' },
          { type: 'code', language: 'jsx', code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>리셋</button>
    </div>
  );
}` },
          { type: 'heading', text: '폼 입력 처리' },
          { type: 'code', language: 'jsx', code: `function SearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 검색 로직
    setResults(["결과1", "결과2"]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어 입력"
      />
      <button type="submit">검색</button>
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </form>
  );
}` },
          { type: 'tip', text: 'State를 직접 수정하지 마세요. 항상 setter 함수(setCount 등)를 사용하세요. 배열/객체도 새로 만들어 전달해야 합니다.' },
        ],
      },
    ],
  },

  // ── 프로그래밍 ──
  {
    slug: 'python',
    title: 'Python 기초',
    description: '간결하고 강력한 프로그래밍 언어 Python 입문',
    category: 'programming',
    color: 'bg-blue-600',
    difficulty: 'beginner',
    objectives: [
      'Python 기본 문법을 익힌다',
      '리스트와 딕셔너리를 활용한다',
      '함수를 정의하고 사용한다',
    ],
    lessons: [
      {
        slug: 'python-basics',
        title: 'Python 기초 문법',
        duration: '15분',
        content: [
          { type: 'text', text: 'Python은 읽기 쉬운 문법으로 유명한 프로그래밍 언어입니다. 들여쓰기로 코드 블록을 구분하며, 다양한 분야에서 활용됩니다.' },
          { type: 'heading', text: '변수와 출력' },
          { type: 'code', language: 'python', code: `# 변수 (타입 선언 불필요)
name = "Python"
version = 3.12
is_fun = True

# 출력
print(f"Hello, {name} {version}!")
print(f"재미있나요? {is_fun}")

# 타입 확인
print(type(name))     # <class 'str'>
print(type(version))  # <class 'float'>` },
          { type: 'heading', text: '조건문' },
          { type: 'code', language: 'python', code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

print(f"점수: {score}, 등급: {grade}")` },
          { type: 'tip', text: 'Python은 중괄호 대신 들여쓰기(4칸 스페이스)로 블록을 구분합니다. 들여쓰기가 틀리면 에러가 발생합니다.' },
        ],
      },
      {
        slug: 'lists-dicts',
        title: '리스트와 딕셔너리',
        duration: '20분',
        content: [
          { type: 'text', text: '리스트(list)는 순서가 있는 컬렉션, 딕셔너리(dict)는 키-값 쌍의 컬렉션입니다.' },
          { type: 'heading', text: '리스트' },
          { type: 'code', language: 'python', code: `fruits = ["사과", "바나나", "체리"]

# 접근
print(fruits[0])    # "사과"
print(fruits[-1])   # "체리" (마지막)

# 추가/삭제
fruits.append("딸기")
fruits.remove("바나나")

# 리스트 컴프리헨션
numbers = [1, 2, 3, 4, 5]
squared = [n ** 2 for n in numbers]
# [1, 4, 9, 16, 25]

evens = [n for n in numbers if n % 2 == 0]
# [2, 4]` },
          { type: 'heading', text: '딕셔너리' },
          { type: 'code', language: 'python', code: `user = {
    "name": "Kim",
    "age": 25,
    "skills": ["Python", "JavaScript"]
}

print(user["name"])         # "Kim"
print(user.get("email", "없음"))  # "없음" (기본값)

# 순회
for key, value in user.items():
    print(f"{key}: {value}")

# 딕셔너리 컴프리헨션
scores = {"math": 90, "english": 85}
passed = {k: v for k, v in scores.items() if v >= 88}
# {"math": 90}` },
        ],
      },
      {
        slug: 'python-functions',
        title: '함수와 모듈',
        duration: '15분',
        content: [
          { type: 'text', text: '함수를 정의하여 코드를 재사용하고, 모듈을 임포트하여 기능을 확장합니다.' },
          { type: 'heading', text: '함수 정의' },
          { type: 'code', language: 'python', code: `def greet(name, greeting="안녕하세요"):
    """인사 메시지를 반환합니다."""
    return f"{greeting}, {name}님!"

print(greet("Kim"))
print(greet("Lee", "반갑습니다"))

# 여러 값 반환
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5])
print(f"최소: {lo}, 최대: {hi}")` },
          { type: 'heading', text: '유용한 내장 함수' },
          { type: 'code', language: 'python', code: `numbers = [3, 1, 4, 1, 5, 9, 2, 6]

print(len(numbers))        # 8
print(sorted(numbers))     # [1, 1, 2, 3, 4, 5, 6, 9]
print(sum(numbers))        # 31
print(max(numbers))        # 9

# enumerate
for i, n in enumerate(numbers):
    print(f"인덱스 {i}: {n}")

# zip
names = ["Kim", "Lee", "Park"]
ages = [25, 30, 28]
for name, age in zip(names, ages):
    print(f"{name}: {age}세")` },
        ],
      },
    ],
  },
  {
    slug: 'typescript',
    title: 'TypeScript 입문',
    description: '타입이 있는 JavaScript로 안전한 코드 작성',
    category: 'programming',
    color: 'bg-blue-500',
    difficulty: 'intermediate',
    objectives: [
      'TypeScript의 기본 타입을 이해한다',
      '인터페이스로 객체 구조를 정의한다',
      '제네릭을 활용한다',
    ],
    lessons: [
      {
        slug: 'ts-basics',
        title: 'TypeScript 소개',
        duration: '15분',
        content: [
          { type: 'text', text: 'TypeScript는 JavaScript에 정적 타입 시스템을 추가한 언어입니다. 코드를 실행하기 전에 오류를 발견할 수 있어 대규모 프로젝트에서 특히 유용합니다.' },
          { type: 'heading', text: '기본 타입' },
          { type: 'code', language: 'typescript', code: `// 기본 타입
const name: string = "TypeScript";
const version: number = 5.0;
const isTyped: boolean = true;

// 배열
const numbers: number[] = [1, 2, 3];
const names: string[] = ["Kim", "Lee"];

// 함수
const add = (a: number, b: number): number => {
  return a + b;
};

// 유니온 타입
let id: string | number = "abc";
id = 123;  // OK` },
          { type: 'heading', text: '타입 추론' },
          { type: 'code', language: 'typescript', code: `// TypeScript가 타입을 자동 추론
const message = "hello";  // string으로 추론
const count = 42;         // number로 추론

// 명시적 타입이 필요한 경우
const items: string[] = [];  // 빈 배열은 추론 불가` },
          { type: 'tip', text: '모든 곳에 타입을 쓸 필요는 없습니다. TypeScript의 타입 추론이 충분한 경우 생략해도 됩니다.' },
        ],
      },
      {
        slug: 'interfaces',
        title: '인터페이스와 타입',
        duration: '20분',
        content: [
          { type: 'text', text: '인터페이스(interface)와 타입 별칭(type)을 사용하여 객체의 구조를 정의합니다.' },
          { type: 'heading', text: 'Interface' },
          { type: 'code', language: 'typescript', code: `interface User {
  id: number;
  name: string;
  email: string;
  age?: number;            // 선택적 속성
  readonly createdAt: Date; // 읽기 전용
}

const user: User = {
  id: 1,
  name: "Kim",
  email: "kim@example.com",
  createdAt: new Date(),
};

// 함수에 활용
function printUser(user: User): void {
  console.log(\`\${user.name} (\${user.email})\`);
}` },
          { type: 'heading', text: 'Type Alias' },
          { type: 'code', language: 'typescript', code: `// 유니온 타입 별칭
type Status = "pending" | "active" | "inactive";
type ID = string | number;

// 교차 타입
type Admin = User & {
  role: "admin";
  permissions: string[];
};

// 유틸리티 타입
type PartialUser = Partial<User>;     // 모든 속성 선택적
type UserName = Pick<User, "name">;   // name만 추출
type WithoutEmail = Omit<User, "email">; // email 제외` },
        ],
      },
      {
        slug: 'generics',
        title: '제네릭',
        duration: '20분',
        content: [
          { type: 'text', text: '제네릭은 타입을 매개변수화하여 재사용 가능한 컴포넌트를 만드는 방법입니다.' },
          { type: 'heading', text: '제네릭 함수' },
          { type: 'code', language: 'typescript', code: `// T는 타입 매개변수
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]);       // number
const str = first(["a", "b"]);      // string

// 여러 타입 매개변수
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const p = pair("hello", 42); // [string, number]` },
          { type: 'heading', text: '제네릭 인터페이스' },
          { type: 'code', language: 'typescript', code: `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User { id: number; name: string; }
interface Product { id: number; price: number; }

// 같은 구조, 다른 데이터 타입
type UserResponse = ApiResponse<User>;
type ProductResponse = ApiResponse<Product>;
type ListResponse = ApiResponse<User[]>;` },
          { type: 'tip', text: '제네릭의 관례적 이름: T(Type), K(Key), V(Value), E(Element). 의미 있는 이름을 쓰면 더 읽기 좋습니다 (예: TData, TResult).' },
        ],
      },
    ],
  },
  {
    slug: 'sql',
    title: 'SQL 기초',
    description: '데이터베이스 조회의 기본, SQL 쿼리 작성',
    category: 'data',
    color: 'bg-amber-500',
    difficulty: 'beginner',
    objectives: [
      'SELECT로 데이터를 조회한다',
      'WHERE로 조건 검색한다',
      'JOIN으로 테이블을 연결한다',
    ],
    lessons: [
      {
        slug: 'select-basics',
        title: 'SELECT 기본',
        duration: '15분',
        content: [
          { type: 'text', text: 'SQL(Structured Query Language)은 데이터베이스에서 데이터를 조회, 삽입, 수정, 삭제하는 언어입니다. SELECT는 가장 기본적인 조회 명령입니다.' },
          { type: 'heading', text: '기본 SELECT' },
          { type: 'code', language: 'sql', code: `-- 모든 컬럼 조회
SELECT * FROM users;

-- 특정 컬럼만 조회
SELECT name, email FROM users;

-- 별칭 사용
SELECT name AS 이름, email AS 이메일 FROM users;

-- 중복 제거
SELECT DISTINCT city FROM users;

-- 정렬
SELECT * FROM users ORDER BY age DESC;

-- 제한
SELECT * FROM users LIMIT 10;` },
          { type: 'heading', text: 'WHERE 조건' },
          { type: 'code', language: 'sql', code: `-- 비교 연산
SELECT * FROM users WHERE age >= 20;

-- 문자열 검색
SELECT * FROM users WHERE name LIKE '%Kim%';

-- 범위
SELECT * FROM users WHERE age BETWEEN 20 AND 30;

-- 목록
SELECT * FROM users WHERE city IN ('서울', '부산', '대구');

-- 복합 조건
SELECT * FROM users
WHERE age >= 20 AND city = '서울'
ORDER BY name;` },
        ],
      },
      {
        slug: 'aggregation',
        title: '집계와 그룹화',
        duration: '15분',
        content: [
          { type: 'text', text: '집계 함수(Aggregate Functions)를 사용하면 데이터를 요약할 수 있습니다. GROUP BY와 함께 사용하여 그룹별 통계를 구합니다.' },
          { type: 'heading', text: '집계 함수' },
          { type: 'code', language: 'sql', code: `-- 기본 집계
SELECT
  COUNT(*) AS 전체수,
  AVG(age) AS 평균나이,
  MIN(age) AS 최소나이,
  MAX(age) AS 최대나이,
  SUM(salary) AS 총급여
FROM employees;` },
          { type: 'heading', text: 'GROUP BY' },
          { type: 'code', language: 'sql', code: `-- 부서별 통계
SELECT
  department,
  COUNT(*) AS 인원수,
  AVG(salary) AS 평균급여
FROM employees
GROUP BY department
HAVING COUNT(*) >= 5    -- 5명 이상인 부서만
ORDER BY 평균급여 DESC;` },
          { type: 'tip', text: 'WHERE는 그룹화 전에, HAVING은 그룹화 후에 필터링합니다.' },
        ],
      },
      {
        slug: 'joins',
        title: 'JOIN',
        duration: '20분',
        content: [
          { type: 'text', text: 'JOIN은 여러 테이블의 데이터를 연결하여 조회하는 방법입니다. 관계형 데이터베이스의 핵심 기능입니다.' },
          { type: 'heading', text: 'INNER JOIN' },
          { type: 'code', language: 'sql', code: `-- 주문과 사용자 정보를 연결
SELECT
  orders.id,
  users.name,
  orders.product,
  orders.amount
FROM orders
INNER JOIN users ON orders.user_id = users.id;` },
          { type: 'heading', text: 'LEFT JOIN' },
          { type: 'code', language: 'sql', code: `-- 모든 사용자 + 주문 정보 (주문 없어도 포함)
SELECT
  u.name,
  COUNT(o.id) AS 주문수,
  COALESCE(SUM(o.amount), 0) AS 총주문액
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY 총주문액 DESC;` },
          { type: 'list', items: [
            'INNER JOIN: 양쪽 모두 일치하는 행만',
            'LEFT JOIN: 왼쪽 테이블의 모든 행 + 일치하는 오른쪽',
            'RIGHT JOIN: 오른쪽 테이블의 모든 행 + 일치하는 왼쪽',
            'CROSS JOIN: 모든 조합 (카티전 곱)',
          ]},
        ],
      },
    ],
  },
];

// 유틸리티 함수
export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return null;
  const lessonIndex = course.lessons.findIndex(l => l.slug === lessonSlug);
  if (lessonIndex === -1) return null;
  return {
    lesson: course.lessons[lessonIndex],
    course,
    prevLesson: course.lessons[lessonIndex - 1] || null,
    nextLesson: course.lessons[lessonIndex + 1] || null,
    lessonNumber: lessonIndex + 1,
    totalLessons: course.lessons.length,
  };
}

export function getCoursesByCategory() {
  return CATEGORIES.map(cat => ({
    ...cat,
    courses: courses.filter(c => c.category === cat.id),
  }));
}
