import type { Course } from './types';

export const otherCourses: Course[] = [
  {
    slug: 'latex',
    title: 'LaTeX 수식 작성',
    description: '수학 수식과 문서를 아름답게 조판',
    category: 'other',
    color: 'bg-slate-500',
    difficulty: 'beginner',
    objectives: [
      '문서 구조와 기본 명령어',
      '텍스트 서식과 환경',
      '수식과 수학 표현',
      '표, 그림, 참고문헌 관리',
      '실전 논문 작성과 명령어 레퍼런스',
    ],
    lessons: [
      {
        slug: 'latex-basics',
        title: 'LaTeX 기본 문법',
        duration: '15분',
        content: [
          { type: 'text', text: 'LaTeX(레이텍)는 학술 문서와 수학 수식을 아름답게 조판하기 위한 문서 작성 시스템입니다. 논문, 보고서, 프레젠테이션 등 다양한 문서를 전문적으로 작성할 수 있으며, 특히 수식 표현에서 압도적인 품질을 자랑합니다.' },
          { type: 'heading', text: '문서 기본 구조' },
          { type: 'code', language: 'latex', code: `\\documentclass{article}

% 한글 지원 패키지
\\usepackage{kotex}

\\title{첫 번째 LaTeX 문서}
\\author{홍길동}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{소개}
LaTeX로 작성한 첫 번째 문서입니다.

\\section{본문}
이곳에 내용을 작성합니다.

\\subsection{소제목}
하위 섹션도 만들 수 있습니다.

\\end{document}` },
          { type: 'heading', text: '텍스트 서식' },
          { type: 'code', language: 'latex', code: `% 굵은 글씨
\\textbf{굵은 텍스트}

% 기울임꼴
\\textit{이탤릭 텍스트}

% 밑줄
\\underline{밑줄 텍스트}

% 굵은 기울임꼴 (중첩 가능)
\\textbf{\\textit{굵은 이탤릭}}

% 글꼴 크기
{\\small 작은 글씨}
{\\large 큰 글씨}
{\\Large 더 큰 글씨}` },
          { type: 'heading', text: '목록 만들기' },
          { type: 'code', language: 'latex', code: `% 순서 없는 목록
\\begin{itemize}
  \\item 첫 번째 항목
  \\item 두 번째 항목
  \\item 세 번째 항목
\\end{itemize}

% 순서 있는 목록
\\begin{enumerate}
  \\item 첫 번째 단계
  \\item 두 번째 단계
  \\item 세 번째 단계
\\end{enumerate}` },
          { type: 'heading', text: '특수 문자 이스케이프' },
          { type: 'list', items: [
            '`\\%` : 퍼센트 기호 (%)',
            '`\\$` : 달러 기호 ($)',
            '`\\&` : 앰퍼샌드 (&)',
            '`\\#` : 해시 기호 (#)',
            '`\\_` : 밑줄 (_)',
            '`\\{` `\\}` : 중괄호 ({})',
            '`\\textbackslash` : 역슬래시 (\\)',
          ]},
          { type: 'tip', text: 'LaTeX에서 `%`, `$`, `&`, `#`, `_`, `{`, `}` 등은 특별한 의미를 가지므로, 일반 텍스트로 사용하려면 앞에 `\\`를 붙여야 합니다. 빈 줄은 새 문단을 시작합니다.' },
        ],
      },
      {
        slug: 'math-formulas',
        title: '수학 수식',
        duration: '20분',
        content: [
          { type: 'text', text: 'LaTeX의 가장 강력한 기능은 수학 수식 조판입니다. 인라인 수식은 `$...$`로, 독립 수식은 `$$...$$` 또는 `\\[...\\]`로 작성합니다. 복잡한 수식도 구조적으로 표현할 수 있습니다.' },
          { type: 'heading', text: '인라인과 디스플레이 수식' },
          { type: 'code', language: 'latex', code: `% 인라인 수식: 텍스트 안에 포함
피타고라스 정리는 $a^2 + b^2 = c^2$ 입니다.

% 디스플레이 수식: 별도 줄에 중앙 정렬
아인슈타인의 질량-에너지 등가 공식:
$$E = mc^2$$

% 또는 \\[ \\] 사용 (권장)
오일러 공식:
\\[e^{i\\pi} + 1 = 0\\]` },
          { type: 'heading', text: '분수, 제곱근, 위/아래 첨자' },
          { type: 'code', language: 'latex', code: `% 분수
$$\\frac{분자}{분모} = \\frac{x + 1}{x - 1}$$

% 중첩 분수
$$\\frac{1}{1 + \\frac{1}{x}}$$

% 제곱근
$$\\sqrt{2}, \\quad \\sqrt{x^2 + y^2}, \\quad \\sqrt[3]{8}$$

% 위 첨자 (지수)
$$x^2, \\quad x^{n+1}, \\quad e^{-x^2}$$

% 아래 첨자
$$x_1, \\quad a_{ij}, \\quad x_{n+1}$$` },
          { type: 'heading', text: '합, 적분, 극한' },
          { type: 'code', language: 'latex', code: `% 합 (시그마)
$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$

% 곱 (파이)
$$\\prod_{k=1}^{n} k = n!$$

% 적분
$$\\int_{0}^{\\infty} e^{-x} \\, dx = 1$$

% 이중 적분
$$\\iint_{D} f(x, y) \\, dx \\, dy$$

% 극한
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

% 극한 (아래 위)
$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$` },
          { type: 'heading', text: '행렬' },
          { type: 'code', language: 'latex', code: `% 소괄호 행렬
$$\\begin{pmatrix}
  1 & 2 \\\\
  3 & 4
\\end{pmatrix}$$

% 대괄호 행렬
$$\\begin{bmatrix}
  a & b \\\\
  c & d
\\end{bmatrix}$$

% 행렬식
$$\\det \\begin{vmatrix}
  a & b \\\\
  c & d
\\end{vmatrix} = ad - bc$$` },
          { type: 'heading', text: '수식 정렬 (align)' },
          { type: 'code', language: 'latex', code: `% 여러 줄 수식 정렬 (amsmath 패키지 필요)
\\usepackage{amsmath}

\\begin{align}
  (x + y)^2 &= (x + y)(x + y) \\\\
             &= x^2 + xy + yx + y^2 \\\\
             &= x^2 + 2xy + y^2
\\end{align}

% 번호 없는 정렬
\\begin{align*}
  f(x) &= x^2 + 2x + 1 \\\\
  f'(x) &= 2x + 2 \\\\
  f''(x) &= 2
\\end{align*}` },
          { type: 'tip', text: '수식에서 `&`는 정렬 기준점, `\\\\`는 줄바꿈을 의미합니다. `\\quad`와 `\\,`로 수식 내 간격을 조절할 수 있습니다. 중괄호가 두 글자 이상을 묶을 때 필수입니다: `x^10`은 `x`의 1승과 0이 되지만, `x^{10}`은 `x`의 10승이 됩니다.' },
        ],
      },
      {
        slug: 'tables-symbols',
        title: '표와 특수 기호',
        duration: '15분',
        content: [
          { type: 'text', text: 'LaTeX에서는 `tabular` 환경으로 표를 만들고, 다양한 특수 기호 명령어로 수학 기호, 그리스 문자, 화살표 등을 표현할 수 있습니다.' },
          { type: 'heading', text: '표 만들기' },
          { type: 'code', language: 'latex', code: `% 기본 표
\\begin{tabular}{|c|c|c|}
  \\hline
  이름 & 나이 & 도시 \\\\
  \\hline
  홍길동 & 25 & 서울 \\\\
  김철수 & 30 & 부산 \\\\
  이영희 & 28 & 대구 \\\\
  \\hline
\\end{tabular}

% 정렬 옵션: l(왼쪽), c(가운데), r(오른쪽)
\\begin{tabular}{|l|r|c|}
  \\hline
  과목 & 점수 & 등급 \\\\
  \\hline
  수학 & 95 & A \\\\
  영어 & 87 & B \\\\
  과학 & 92 & A \\\\
  \\hline
\\end{tabular}` },
          { type: 'text', text: '표에서 `&`는 열 구분자, `\\\\`는 행 구분자입니다. `\\hline`은 수평선을 그리고, `{|c|c|c|}`에서 `|`는 세로선을 나타냅니다.' },
          { type: 'heading', text: '그리스 문자' },
          { type: 'code', language: 'latex', code: `% 소문자 그리스 문자
$\\alpha, \\beta, \\gamma, \\delta, \\epsilon$
$\\zeta, \\eta, \\theta, \\iota, \\kappa$
$\\lambda, \\mu, \\nu, \\xi, \\pi$
$\\rho, \\sigma, \\tau, \\phi, \\chi, \\psi, \\omega$

% 대문자 그리스 문자
$\\Gamma, \\Delta, \\Theta, \\Lambda$
$\\Xi, \\Pi, \\Sigma, \\Phi, \\Psi, \\Omega$

% 활용 예시
$$F = G \\frac{m_1 m_2}{r^2} \\quad (\\text{만유인력 법칙})$$
$$\\sigma = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2}$$` },
          { type: 'heading', text: '화살표' },
          { type: 'list', items: [
            '`$\\rightarrow$` : 오른쪽 화살표 (->)',
            '`$\\leftarrow$` : 왼쪽 화살표 (<-)',
            '`$\\leftrightarrow$` : 양방향 화살표 (<->)',
            '`$\\Rightarrow$` : 이중 오른쪽 화살표 (=>)',
            '`$\\Leftarrow$` : 이중 왼쪽 화살표 (<=)',
            '`$\\Leftrightarrow$` : 이중 양방향 화살표 (<=>)',
            '`$\\mapsto$` : 대응 화살표 (|->)',
          ]},
          { type: 'heading', text: '관계 연산자와 기타 기호' },
          { type: 'code', language: 'latex', code: `% 관계 연산자
$\\leq$    % 작거나 같다 (<=)
$\\geq$    % 크거나 같다 (>=)
$\\neq$    % 같지 않다 (!=)
$\\approx$ % 근사값 (≈)
$\\equiv$  % 항등 (≡)
$\\in$     % 원소 (∈)
$\\notin$  % 원소가 아닌 (∉)
$\\subset$ % 부분집합 (⊂)

% 논리 연산자
$\\forall$  % 모든 (∀)
$\\exists$  % 존재 (∃)
$\\land$    % 논리곱 (∧)
$\\lor$     % 논리합 (∨)
$\\neg$     % 부정 (¬)

% 종합 예시: 극한의 엡실론-델타 정의
$$\\forall \\epsilon > 0, \\; \\exists \\delta > 0 :
  |x - a| < \\delta \\Rightarrow |f(x) - L| < \\epsilon$$` },
          { type: 'tip', text: '수학 기호는 반드시 수식 모드(`$...$` 또는 `$$...$$`) 안에서 사용해야 합니다. 일반 텍스트 모드에서 `\\alpha` 등을 쓰면 에러가 발생합니다. 수식 안에서 일반 텍스트를 넣으려면 `\\text{}`를 사용하세요.' },
        ],
      },
      {
        slug: 'advanced-math',
        title: '수식과 수학 표현',
        duration: '20분',
        content: [
          { type: 'text', text: 'LaTeX는 복잡한 수학 표현을 체계적으로 작성할 수 있는 강력한 도구입니다. 이 레슨에서는 정리 환경, 조건부 수식, 고급 수학 표현 등 학술 논문에서 자주 사용하는 수식 기법을 다룹니다.' },
          { type: 'heading', text: '정리, 정의, 증명 환경' },
          { type: 'code', language: 'latex', code: `\\usepackage{amsthm}

% 정리 환경 정의
\\newtheorem{theorem}{정리}[section]
\\newtheorem{lemma}[theorem]{보조정리}
\\newtheorem{corollary}{따름정리}[theorem]
\\newtheorem{definition}{정의}[section]

\\begin{document}

\\begin{definition}
실수 $x$에 대해, $|x|$는 다음과 같이 정의한다:
$$|x| = \\begin{cases}
  x  & \\text{if } x \\geq 0 \\\\
  -x & \\text{if } x < 0
\\end{cases}$$
\\end{definition}

\\begin{theorem}[삼각 부등식]
임의의 실수 $a$, $b$에 대해 다음이 성립한다:
$$|a + b| \\leq |a| + |b|$$
\\end{theorem}

\\begin{proof}
$a + b$의 부호에 따라 경우를 나누어 증명한다.
$a + b \\geq 0$이면, $|a + b| = a + b \\leq |a| + |b|$.
$a + b < 0$이면, $|a + b| = -(a + b) = (-a) + (-b) \\leq |a| + |b|$.
따라서 모든 경우에 $|a + b| \\leq |a| + |b|$이 성립한다.
\\end{proof}` },
          { type: 'heading', text: '조건부 수식 (cases)' },
          { type: 'code', language: 'latex', code: `% cases 환경: 조건별 정의
$$f(x) = \\begin{cases}
  0       & \\text{if } x < 0 \\\\
  x       & \\text{if } 0 \\leq x < 1 \\\\
  x^2     & \\text{if } x \\geq 1
\\end{cases}$$

% 피보나치 수열
$$F_n = \\begin{cases}
  0                & \\text{if } n = 0 \\\\
  1                & \\text{if } n = 1 \\\\
  F_{n-1} + F_{n-2} & \\text{if } n \\geq 2
\\end{cases}$$` },
          { type: 'heading', text: '고급 수학 표현' },
          { type: 'code', language: 'latex', code: `\\usepackage{amsmath}
\\usepackage{amssymb}

% 집합 표기
$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}$$

% 벡터와 행렬 표기
$$\\vec{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{pmatrix}, \\quad
\\mathbf{A} = \\begin{bmatrix}
  a_{11} & a_{12} & \\cdots & a_{1n} \\\\
  a_{21} & a_{22} & \\cdots & a_{2n} \\\\
  \\vdots & \\vdots & \\ddots & \\vdots \\\\
  a_{m1} & a_{m2} & \\cdots & a_{mn}
\\end{bmatrix}$$

% 편미분
$$\\frac{\\partial f}{\\partial x}, \\quad
\\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad
\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right)$$

% 여러 줄 수식
\\begin{multline}
  p(x) = x^8 + x^7 + x^6 + x^5 \\\\
  + x^4 + x^3 + x^2 + x + 1
\\end{multline}` },
          { type: 'heading', text: '수식 번호와 참조' },
          { type: 'code', language: 'latex', code: `% 수식에 라벨 지정
\\begin{equation}
\\label{eq:euler}
  e^{i\\pi} + 1 = 0
\\end{equation}

% 수식 참조
오일러 공식~\\eqref{eq:euler}은 가장 아름다운 수식으로 알려져 있다.

% 여러 수식에 각각 번호
\\begin{align}
  \\label{eq:sum} \\sum_{k=1}^{n} k &= \\frac{n(n+1)}{2} \\\\
  \\label{eq:sum2} \\sum_{k=1}^{n} k^2 &= \\frac{n(n+1)(2n+1)}{6}
\\end{align}

식~\\eqref{eq:sum}과 식~\\eqref{eq:sum2}를 비교하면...` },
          { type: 'tip', text: 'amsmath, amssymb, amsthm 패키지는 수학 논문 작성의 필수 패키지입니다. 정리 환경에서 번호를 section과 연동하면 "정리 2.1"처럼 자동 번호가 매겨집니다. 수식 번호는 \\label과 \\eqref로 관리하면 수식 순서가 바뀌어도 자동 갱신됩니다.' },
        ],
      },
      {
        slug: 'tables-figures',
        title: '표와 그림',
        duration: '20분',
        content: [
          { type: 'text', text: '학술 문서에서 표와 그림은 데이터를 효과적으로 전달하는 핵심 요소입니다. LaTeX에서는 플로팅 환경(table, figure)을 사용하여 자동 번호 매기기, 캡션, 상호참조를 지원합니다.' },
          { type: 'heading', text: '플로팅 표 (table 환경)' },
          { type: 'code', language: 'latex', code: `% 표를 플로팅 환경으로 감싸기
\\begin{table}[htbp]
  \\centering
  \\caption{실험 결과 요약}
  \\label{tab:results}
  \\begin{tabular}{|l|c|c|c|}
    \\hline
    모델 & 정확도 & 정밀도 & 재현율 \\\\
    \\hline
    모델 A & 0.92 & 0.89 & 0.94 \\\\
    모델 B & 0.95 & 0.93 & 0.96 \\\\
    모델 C & 0.88 & 0.91 & 0.85 \\\\
    \\hline
  \\end{tabular}
\\end{table}

% 위치 옵션: h(현재 위치), t(페이지 상단),
% b(페이지 하단), p(별도 페이지)` },
          { type: 'heading', text: 'booktabs로 전문적인 표 만들기' },
          { type: 'code', language: 'latex', code: `\\usepackage{booktabs}

\\begin{table}[htbp]
  \\centering
  \\caption{알고리즘 성능 비교}
  \\label{tab:comparison}
  \\begin{tabular}{lrrr}
    \\toprule
    알고리즘 & 시간 (ms) & 메모리 (MB) & 정확도 (\\%) \\\\
    \\midrule
    QuickSort  & 12.3 & 2.1  & -- \\\\
    MergeSort  & 15.7 & 4.2  & -- \\\\
    HeapSort   & 14.1 & 1.8  & -- \\\\
    \\midrule
    CNN        & 245  & 128  & 95.2 \\\\
    RNN        & 312  & 96   & 93.8 \\\\
    \\bottomrule
  \\end{tabular}
\\end{table}` },
          { type: 'heading', text: '그림 삽입' },
          { type: 'code', language: 'latex', code: `\\usepackage{graphicx}

% 단일 그림
\\begin{figure}[htbp]
  \\centering
  \\includegraphics[width=0.8\\textwidth]{images/architecture.png}
  \\caption{시스템 아키텍처 다이어그램}
  \\label{fig:architecture}
\\end{figure}

% 크기 옵션
\\includegraphics[width=5cm]{image.png}         % 고정 너비
\\includegraphics[height=3cm]{image.png}        % 고정 높이
\\includegraphics[scale=0.5]{image.png}         % 50% 축소
\\includegraphics[width=\\linewidth]{image.png}  % 줄 너비에 맞춤
\\includegraphics[angle=90]{image.png}          % 90도 회전` },
          { type: 'heading', text: '여러 그림 나란히 배치' },
          { type: 'code', language: 'latex', code: `\\usepackage{subcaption}

\\begin{figure}[htbp]
  \\centering
  \\begin{subfigure}[b]{0.45\\textwidth}
    \\centering
    \\includegraphics[width=\\textwidth]{images/before.png}
    \\caption{처리 전}
    \\label{fig:before}
  \\end{subfigure}
  \\hfill
  \\begin{subfigure}[b]{0.45\\textwidth}
    \\centering
    \\includegraphics[width=\\textwidth]{images/after.png}
    \\caption{처리 후}
    \\label{fig:after}
  \\end{subfigure}
  \\caption{이미지 처리 결과 비교}
  \\label{fig:comparison}
\\end{figure}

% 참조: 그림~\\ref{fig:comparison}에서 보듯이...
% 세부 그림: 그림~\\ref{fig:before}(a)와 \\ref{fig:after}(b)는...` },
          { type: 'heading', text: '표와 그림 참조' },
          { type: 'code', language: 'latex', code: `% 본문에서 참조하기
표~\\ref{tab:results}에 실험 결과를 정리하였다.
그림~\\ref{fig:architecture}은 전체 시스템 구조를 보여준다.

% 목록 자동 생성
\\listoftables    % 표 목록
\\listoffigures   % 그림 목록

% 표/그림이 원하는 위치에 배치되지 않을 때
\\usepackage{float}
\\begin{figure}[H]  % H: 반드시 현재 위치에 배치
  \\centering
  \\includegraphics[width=0.6\\textwidth]{image.png}
  \\caption{정확히 이 위치에 배치됨}
\\end{figure}` },
          { type: 'tip', text: 'booktabs 패키지를 사용하면 세로선 없이 깔끔한 학술용 표를 만들 수 있습니다. \\toprule, \\midrule, \\bottomrule 세 가지 선만 사용하는 것이 관례입니다. 그림은 PDF, PNG, JPG 형식을 지원하며, 벡터 형식인 PDF가 가장 선명합니다.' },
        ],
      },
      {
        slug: 'bibliography-references',
        title: '참고문헌과 상호참조',
        duration: '20분',
        content: [
          { type: 'text', text: '학술 논문에서 참고문헌 관리는 필수적입니다. LaTeX는 BibTeX/BibLaTeX를 통해 참고문헌을 체계적으로 관리하고, 본문에서 쉽게 인용할 수 있는 강력한 시스템을 제공합니다.' },
          { type: 'heading', text: 'BibTeX 참고문헌 파일' },
          { type: 'code', language: 'latex', code: `% references.bib 파일 내용

@article{kim2024deep,
  author  = {Kim, Minsu and Lee, Jiyoung},
  title   = {Deep Learning for Natural Language Processing},
  journal = {Journal of AI Research},
  year    = {2024},
  volume  = {15},
  number  = {3},
  pages   = {201--225},
}

@book{bishop2006pattern,
  author    = {Bishop, Christopher M.},
  title     = {Pattern Recognition and Machine Learning},
  publisher = {Springer},
  year      = {2006},
  isbn      = {978-0387310732},
}

@inproceedings{vaswani2017attention,
  author    = {Vaswani, Ashish and Shazeer, Noam and others},
  title     = {Attention Is All You Need},
  booktitle = {Advances in Neural Information Processing Systems},
  year      = {2017},
  pages     = {5998--6008},
}

@misc{tensorflow2023,
  author = {Google Brain Team},
  title  = {TensorFlow: An Open Source Machine Learning Framework},
  year   = {2023},
  url    = {https://www.tensorflow.org},
}` },
          { type: 'heading', text: '본문에서 인용하기' },
          { type: 'code', language: 'latex', code: `\\documentclass{article}
\\usepackage{kotex}

\\begin{document}

% 기본 인용
딥러닝은 자연어 처리 분야에서 혁신을 가져왔다~\\cite{kim2024deep}.

% 여러 논문 동시 인용
최근 연구들~\\cite{kim2024deep, vaswani2017attention}에 따르면...

% 저자 이름 포함 인용 (natbib 패키지 사용 시)
\\usepackage{natbib}
\\citet{bishop2006pattern}은 패턴 인식의 기초를 다루었다.
이 방법은 이전 연구~\\citep{vaswani2017attention}를 기반으로 한다.

% 참고문헌 목록 출력
\\bibliographystyle{plain}  % 스타일: plain, unsrt, alpha, abbrv
\\bibliography{references}  % .bib 파일 이름 (확장자 생략)

\\end{document}` },
          { type: 'heading', text: 'BibLaTeX (최신 방식)' },
          { type: 'code', language: 'latex', code: `\\documentclass{article}
\\usepackage[backend=biber, style=numeric]{biblatex}
\\addbibresource{references.bib}

\\begin{document}

% 인용
이 결과는 선행 연구~\\cite{kim2024deep}와 일치한다.
\\textcite{bishop2006pattern}의 프레임워크를 적용하였다.

% 읽었지만 인용하지 않은 문헌 포함
\\nocite{tensorflow2023}

% 참고문헌 목록 출력
\\printbibliography[title={참고문헌}]

\\end{document}

% 컴파일 순서:
% 1. pdflatex main.tex
% 2. biber main
% 3. pdflatex main.tex
% 4. pdflatex main.tex` },
          { type: 'heading', text: '상호참조 (Cross-referencing)' },
          { type: 'code', language: 'latex', code: `\\usepackage{hyperref}  % 클릭 가능한 링크 생성

% 라벨 지정
\\section{서론}
\\label{sec:intro}

\\section{실험}
\\label{sec:experiment}

% 참조하기
제~\\ref{sec:intro}장에서 언급한 바와 같이...
자세한 내용은 \\ref{sec:experiment}절을 참고하라.

% 페이지 참조
이 내용은 \\pageref{sec:experiment} 페이지에 있다.

% hyperref 옵션 설정
\\usepackage[
  colorlinks=true,
  linkcolor=blue,
  citecolor=green,
  urlcolor=red
]{hyperref}

% URL 삽입
\\url{https://www.latex-project.org}
\\href{https://www.latex-project.org}{LaTeX 공식 사이트}` },
          { type: 'tip', text: 'BibLaTeX + Biber 조합이 현재 권장되는 방식입니다. BibTeX보다 유니코드 지원이 좋고, 다양한 인용 스타일을 제공합니다. 참고문헌이 올바르게 표시되려면 컴파일을 여러 번 실행해야 합니다: pdflatex -> biber -> pdflatex -> pdflatex.' },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 학술 논문 작성',
        duration: '25분',
        content: [
          { type: 'text', text: '지금까지 배운 내용을 종합하여 완전한 학술 논문 템플릿을 작성합니다. 제목, 초록, 본문, 수식, 표, 그림, 참고문헌이 모두 포함된 실전용 논문 구조입니다.' },
          { type: 'heading', text: '논문 기본 구조' },
          { type: 'code', language: 'latex', code: `\\documentclass[12pt, a4paper]{article}

% === 패키지 ===
\\usepackage{kotex}           % 한글 지원
\\usepackage{amsmath, amssymb, amsthm}  % 수식
\\usepackage{graphicx}        % 그림
\\usepackage{booktabs}        % 전문적인 표
\\usepackage{subcaption}      % 하위 그림
\\usepackage[backend=biber, style=numeric]{biblatex}
\\usepackage[colorlinks=true]{hyperref}
\\usepackage{geometry}
\\geometry{margin=2.5cm}

\\addbibresource{references.bib}

% === 정리 환경 ===
\\newtheorem{theorem}{정리}[section]
\\newtheorem{definition}{정의}[section]

% === 문서 정보 ===
\\title{딥러닝 기반 이미지 분류 기법의 성능 비교 분석}
\\author{
  홍길동\\thanks{교신저자: hong@university.ac.kr} \\\\
  \\small 한국대학교 컴퓨터공학과
}
\\date{2024년 3월}

\\begin{document}
\\maketitle` },
          { type: 'heading', text: '초록과 키워드' },
          { type: 'code', language: 'latex', code: `\\begin{abstract}
본 연구에서는 CNN, ResNet, EfficientNet 등 주요 딥러닝 모델의
이미지 분류 성능을 CIFAR-10 데이터셋에서 비교 분석하였다.
실험 결과, EfficientNet-B3 모델이 95.2\\%의 최고 정확도를 달성하였으며,
모델 크기 대비 성능 효율성에서도 우수한 결과를 보였다.
본 논문은 실무에서의 모델 선택 기준을 제시한다.
\\end{abstract}

\\noindent\\textbf{키워드:} 딥러닝, 이미지 분류, CNN, 전이 학습, 성능 비교

\\tableofcontents   % 목차 자동 생성
\\newpage` },
          { type: 'heading', text: '본문 섹션 작성' },
          { type: 'code', language: 'latex', code: `\\section{서론}
\\label{sec:intro}

이미지 분류는 컴퓨터 비전의 핵심 과제로, 최근 딥러닝의 발전으로
인해 인간 수준의 정확도를 달성하고 있다~\\cite{kim2024deep}.
특히 합성곱 신경망(CNN)은 이미지의 공간적 특징을 효과적으로
학습할 수 있어 가장 널리 사용되는 아키텍처이다.

본 연구의 주요 기여는 다음과 같다:
\\begin{enumerate}
  \\item 주요 CNN 아키텍처의 체계적인 비교 분석
  \\item 모델 크기와 정확도 간의 트레이드오프 분석
  \\item 실무 적용을 위한 모델 선택 가이드라인 제시
\\end{enumerate}

\\section{관련 연구}
\\label{sec:related}

\\textcite{bishop2006pattern}은 패턴 인식의 이론적 기초를 다루었으며,
\\textcite{vaswani2017attention}은 어텐션 메커니즘을 제안하여
시퀀스 모델링에 혁신을 가져왔다.

\\section{제안 방법}
\\label{sec:method}

\\begin{definition}
분류 함수 $f: \\mathbb{R}^{H \\times W \\times C} \\rightarrow \\{1, \\ldots, K\\}$는
입력 이미지를 $K$개의 클래스 중 하나로 매핑한다.
\\end{definition}

본 연구에서 사용한 손실 함수는 다음과 같다:
\\begin{equation}
\\label{eq:loss}
  \\mathcal{L} = -\\frac{1}{N} \\sum_{i=1}^{N} \\sum_{k=1}^{K}
  y_{ik} \\log(\\hat{y}_{ik})
\\end{equation}
여기서 $y_{ik}$는 실제 라벨, $\\hat{y}_{ik}$는 예측 확률이다.` },
          { type: 'heading', text: '실험 결과 섹션' },
          { type: 'code', language: 'latex', code: `\\section{실험}
\\label{sec:experiment}

\\subsection{실험 환경}
실험은 NVIDIA RTX 3090 GPU에서 수행하였으며,
PyTorch 2.0 프레임워크를 사용하였다.

\\subsection{결과}
표~\\ref{tab:main_results}에 주요 실험 결과를 정리하였다.

\\begin{table}[htbp]
  \\centering
  \\caption{모델별 분류 성능 비교}
  \\label{tab:main_results}
  \\begin{tabular}{lrrr}
    \\toprule
    모델 & 파라미터 수 & 정확도 (\\%) & 추론 시간 (ms) \\\\
    \\midrule
    VGG-16          & 138M & 92.1 & 4.2 \\\\
    ResNet-50       & 25M  & 93.8 & 3.1 \\\\
    EfficientNet-B3 & 12M  & 95.2 & 2.8 \\\\
    \\bottomrule
  \\end{tabular}
\\end{table}

식~\\eqref{eq:loss}으로 학습한 결과,
그림~\\ref{fig:architecture}의 EfficientNet 구조가
가장 우수한 성능을 보였다.

\\section{결론}
\\label{sec:conclusion}
본 연구에서는 주요 CNN 모델의 이미지 분류 성능을
체계적으로 비교 분석하였다.
향후 연구에서는 ViT 등 트랜스포머 기반 모델과의
비교를 추가할 예정이다.

% === 참고문헌 ===
\\printbibliography[title={참고문헌}]

\\end{document}` },
          { type: 'tip', text: '논문 작성 시 \\label과 \\ref를 일관되게 사용하면 섹션, 수식, 표, 그림 번호가 자동으로 관리됩니다. sec:, eq:, tab:, fig: 같은 접두사를 붙이면 라벨 종류를 쉽게 구분할 수 있습니다. Overleaf를 사용하면 LaTeX 설치 없이 브라우저에서 바로 논문을 작성할 수 있습니다.' },
        ],
      },
      {
        slug: 'reference',
        title: 'LaTeX 레퍼런스',
        duration: '15분',
        content: [
          { type: 'text', text: 'LaTeX에서 자주 사용하는 명령어, 환경, 패키지를 정리한 레퍼런스입니다. 문서 작성 시 빠르게 참고할 수 있도록 카테고리별로 분류하였습니다.' },
          { type: 'heading', text: '문서 클래스와 옵션' },
          { type: 'code', language: 'latex', code: `% 주요 문서 클래스
\\documentclass{article}    % 일반 문서
\\documentclass{report}     % 보고서 (chapter 사용 가능)
\\documentclass{book}       % 책
\\documentclass{beamer}     % 프레젠테이션
\\documentclass{letter}     % 편지

% 문서 옵션
\\documentclass[12pt]{article}      % 글꼴 크기: 10pt, 11pt, 12pt
\\documentclass[a4paper]{article}   % 용지: a4paper, letterpaper
\\documentclass[twocolumn]{article} % 2단 편집
\\documentclass[landscape]{article} % 가로 방향` },
          { type: 'heading', text: '필수 패키지 모음' },
          { type: 'list', items: [
            '`\\usepackage{kotex}` : 한글 지원 (ko.TeX)',
            '`\\usepackage{amsmath}` : 고급 수식 환경 (align, cases 등)',
            '`\\usepackage{amssymb}` : 수학 기호 (blackboard bold 등)',
            '`\\usepackage{amsthm}` : 정리, 증명 환경',
            '`\\usepackage{graphicx}` : 그림 삽입',
            '`\\usepackage{booktabs}` : 전문적인 표',
            '`\\usepackage{hyperref}` : 하이퍼링크, PDF 북마크',
            '`\\usepackage{geometry}` : 여백 설정',
            '`\\usepackage{fancyhdr}` : 머리글/바닥글 커스터마이징',
            '`\\usepackage{listings}` : 소스 코드 삽입',
            '`\\usepackage{xcolor}` : 색상',
            '`\\usepackage{tikz}` : 그래프/다이어그램 직접 그리기',
          ]},
          { type: 'heading', text: '섹션 명령어' },
          { type: 'code', language: 'latex', code: `% 계층 구조 (article 클래스)
\\part{부}              % 최상위 (거의 안 씀)
\\section{절}           % 1
\\subsection{소절}      % 1.1
\\subsubsection{소소절} % 1.1.1
\\paragraph{문단}       % 번호 없음, 굵은 제목
\\subparagraph{소문단}  % 번호 없음

% report/book 클래스에서 추가
\\chapter{장}           % 최상위 단위

% 번호 없는 섹션
\\section*{번호 없는 절}

% 목차에 추가 (번호 없는 섹션의 경우)
\\addcontentsline{toc}{section}{부록}` },
          { type: 'heading', text: '수식 환경 요약' },
          { type: 'code', language: 'latex', code: `% 인라인 수식
$E = mc^2$

% 디스플레이 수식 (번호 없음)
\\[ E = mc^2 \\]

% 디스플레이 수식 (번호 있음)
\\begin{equation}
  E = mc^2
\\end{equation}

% 여러 줄 정렬 (번호 있음)
\\begin{align}
  a &= b + c \\\\
  d &= e + f
\\end{align}

% 여러 줄 정렬 (번호 없음)
\\begin{align*}
  a &= b + c \\\\
  d &= e + f
\\end{align*}

% 조건부 정의
\\begin{cases}
  x & \\text{if } x > 0 \\\\
  0 & \\text{otherwise}
\\end{cases}

% 긴 수식 줄바꿈
\\begin{multline}
  a + b + c + d \\\\
  + e + f + g
\\end{multline}` },
          { type: 'heading', text: '자주 쓰는 수학 기호' },
          { type: 'code', language: 'latex', code: `% 그리스 문자
\\alpha \\beta \\gamma \\delta \\epsilon \\theta \\lambda \\mu \\pi \\sigma \\omega
\\Gamma \\Delta \\Theta \\Lambda \\Pi \\Sigma \\Omega

% 연산자
\\sum  \\prod  \\int  \\iint  \\oint
\\frac{a}{b}  \\sqrt{x}  \\sqrt[n]{x}

% 관계
\\leq  \\geq  \\neq  \\approx  \\equiv  \\sim
\\in  \\notin  \\subset  \\subseteq  \\cup  \\cap

% 화살표
\\rightarrow  \\leftarrow  \\Rightarrow  \\Leftarrow  \\mapsto

% 장식
\\hat{x}  \\bar{x}  \\tilde{x}  \\vec{v}  \\dot{x}  \\ddot{x}
\\overline{AB}  \\underline{text}  \\overbrace{a+b}^{n}

% 괄호 자동 크기
\\left( \\frac{a}{b} \\right)
\\left[ \\frac{a}{b} \\right]
\\left\\{ \\frac{a}{b} \\right\\}

% 공백 조절
\\,  \\;  \\quad  \\qquad  \\!` },
          { type: 'heading', text: '컴파일과 문제 해결' },
          { type: 'list', items: [
            '`pdflatex main.tex` : 기본 컴파일 (PDF 출력)',
            '`xelatex main.tex` : 유니코드/한글 지원 컴파일',
            '`biber main` : BibLaTeX 참고문헌 처리',
            '`bibtex main` : BibTeX 참고문헌 처리',
            '참고문헌이 안 나올 때: pdflatex -> biber -> pdflatex -> pdflatex 순서로 실행',
            '상호참조가 `??`로 표시될 때: pdflatex를 2번 이상 실행',
            '`Overfull \\hbox` 경고: 텍스트가 여백을 초과. \\linebreak 또는 단어 수정으로 해결',
            '패키지 충돌 시: hyperref는 항상 마지막에 로드 (일부 예외 제외)',
          ]},
          { type: 'tip', text: 'Overleaf(overleaf.com)를 사용하면 LaTeX 설치 없이 브라우저에서 바로 문서를 작성할 수 있습니다. 실시간 미리보기와 협업 기능도 지원합니다. CTAN(ctan.org)에서 수천 개의 패키지 문서를 확인할 수 있습니다.' },
        ],
      },
    ],
  },
];
