import type { Course } from './types';

export const visualizationCourses: Course[] = [
  // ─────────────────────────────────────────────
  // 1. Mermaid 다이어그램
  // ─────────────────────────────────────────────
  {
    slug: 'mermaid',
    title: 'Mermaid 다이어그램',
    description: '텍스트로 다이어그램을 그리는 Mermaid 문법',
    category: 'visualization',
    color: 'bg-teal-500',
    difficulty: 'beginner',
    objectives: [
      '플로우차트와 다이어그램 기본 문법',
      '시퀀스, 클래스, ER 다이어그램',
      '간트 차트, 파이 차트, 상태도',
      '테마 커스터마이징과 스타일링',
      '실전 설계 문서와 문법 레퍼런스',
    ],
    lessons: [
      // ── Lesson 1-a: 플로우차트 ──
      {
        slug: 'flowcharts',
        title: '플로우차트',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: '플로우차트란?',
          },
          {
            type: 'text',
            text: 'Mermaid 플로우차트는 텍스트만으로 프로세스 흐름을 시각화할 수 있는 강력한 도구입니다. Markdown 문서 안에 직접 작성할 수 있어 별도의 그래픽 도구 없이도 깔끔한 다이어그램을 만들 수 있습니다. graph 키워드 뒤에 방향을 지정하면 다이어그램의 기본 레이아웃이 결정됩니다.',
          },
          {
            type: 'list',
            items: [
              'graph TD — 위에서 아래로(Top → Down)',
              'graph LR — 왼쪽에서 오른쪽으로(Left → Right)',
              'graph BT — 아래에서 위로(Bottom → Top)',
              'graph RL — 오른쪽에서 왼쪽으로(Right → Left)',
            ],
          },
          {
            type: 'heading',
            text: '노드 모양 정의하기',
          },
          {
            type: 'text',
            text: '노드는 괄호 종류에 따라 다양한 모양을 갖습니다. 각 모양은 다이어그램에서 서로 다른 역할(프로세스, 판단, 데이터 등)을 표현합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `graph TD
    A[사각형 노드]
    B(둥근 사각형)
    C{다이아몬드 - 판단}
    D((원형 노드))
    E[/평행사변형 - 입력/]

    A --> B
    B --> C
    C -->|Yes| D
    C -->|No| E`,
          },
          {
            type: 'heading',
            text: '화살표와 연결선',
          },
          {
            type: 'text',
            text: '노드 사이의 연결선도 여러 스타일을 지원합니다. 실선, 점선, 굵은 선 등을 사용하여 관계의 성격을 시각적으로 구분할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `graph LR
    A -->|실선 화살표| B
    C ---|실선 연결| D
    E -.->|점선 화살표| F
    G ==>|굵은 화살표| H

    subgraph 주문 프로세스
        I[주문 접수] --> J[결제 확인]
        J --> K[배송 준비]
    end
    subgraph 배송 프로세스
        K --> L[출고]
        L --> M[배송 완료]
    end`,
          },
          {
            type: 'tip',
            text: 'subgraph를 사용하면 관련 노드를 하나의 영역으로 묶어 복잡한 플로우차트를 구조적으로 정리할 수 있습니다. subgraph 이름 … end 형태로 작성합니다.',
          },
        ],
      },

      // ── Lesson 1-b: 시퀀스 다이어그램 ──
      {
        slug: 'sequence-diagrams',
        title: '시퀀스 다이어그램',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: '시퀀스 다이어그램의 개념',
          },
          {
            type: 'text',
            text: '시퀀스 다이어그램은 시스템의 구성 요소들이 시간 순서에 따라 어떻게 메시지를 주고받는지를 보여줍니다. API 호출 흐름, 사용자 인터랙션 시나리오, 마이크로서비스 간 통신 등을 문서화하는 데 매우 유용합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    participant U as 사용자
    participant C as 클라이언트
    participant S as 서버
    participant DB as 데이터베이스

    U->>C: 로그인 버튼 클릭
    C->>S: POST /api/login
    S->>DB: 사용자 조회
    DB-->>S: 사용자 정보 반환
    S-->>C: JWT 토큰 발급
    C-->>U: 대시보드 화면 표시`,
          },
          {
            type: 'heading',
            text: '화살표 종류',
          },
          {
            type: 'list',
            items: [
              '->> : 실선 화살표 (동기 요청)',
              '-->> : 점선 화살표 (응답)',
              '-) : 비동기 메시지 (열린 화살표)',
              'Note right of A : 메모를 추가할 수 있음',
            ],
          },
          {
            type: 'heading',
            text: '반복문과 조건분기',
          },
          {
            type: 'text',
            text: 'loop, alt/else, opt 같은 제어 블록을 사용하면 반복 동작이나 조건부 흐름을 다이어그램에 표현할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    participant Client as 클라이언트
    participant Server as 서버

    Client->>Server: 데이터 요청

    alt 인증 성공
        Server-->>Client: 200 OK + 데이터
    else 인증 실패
        Server-->>Client: 401 Unauthorized
    end

    loop 5초마다 갱신
        Client->>Server: GET /api/status
        Server-->>Client: 현재 상태
    end

    Note over Client,Server: WebSocket으로 전환 가능`,
          },
          {
            type: 'heading',
            text: 'activate / deactivate',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    participant A as 프론트엔드
    participant B as 백엔드

    A->>+B: 요청 시작
    Note right of B: 처리 중...
    B-->>-A: 응답 완료`,
          },
          {
            type: 'tip',
            text: '+와 -를 화살표에 붙이면 activate/deactivate를 간결하게 표현할 수 있습니다. A->>+B 는 B를 활성화하고, B-->>-A 는 B를 비활성화합니다.',
          },
        ],
      },

      // ── Lesson 1-c: 다양한 다이어그램 ──
      {
        slug: 'other-diagrams',
        title: '다양한 다이어그램',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '클래스 다이어그램',
          },
          {
            type: 'text',
            text: 'classDiagram은 객체지향 설계에서 클래스 간의 관계를 나타냅니다. 속성(attribute)과 메서드(method)를 정의하고, 상속/구현/연관 등 다양한 관계를 표현할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +bool isIndoor
        +purr() void
    }

    Animal <|-- Dog : 상속
    Animal <|-- Cat : 상속
    Dog "1" --> "*" Toy : 소유`,
          },
          {
            type: 'heading',
            text: 'ER 다이어그램',
          },
          {
            type: 'text',
            text: 'erDiagram은 데이터베이스의 엔티티와 관계를 설계할 때 사용합니다. 각 엔티티의 속성과 카디널리티(1:1, 1:N, M:N)를 명확하게 표현합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `erDiagram
    USER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        date created_at
        float total_price
    }
    PRODUCT {
        int id PK
        string title
        float price
    }

    USER ||--o{ ORDER : "주문한다"
    ORDER }o--|| PRODUCT : "포함한다"`,
          },
          {
            type: 'heading',
            text: '간트 차트',
          },
          {
            type: 'text',
            text: 'gantt 차트는 프로젝트 일정을 타임라인 형태로 시각화합니다. section으로 단계를 구분하고 각 task의 시작일과 기간을 지정합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `gantt
    title 프로젝트 일정
    dateFormat  YYYY-MM-DD

    section 기획
    요구사항 분석    :a1, 2024-01-01, 7d
    화면 설계        :a2, after a1, 5d

    section 개발
    프론트엔드 개발  :b1, after a2, 14d
    백엔드 개발      :b2, after a2, 14d

    section 테스트
    통합 테스트      :c1, after b1, 7d
    배포             :milestone, after c1, 0d`,
          },
          {
            type: 'heading',
            text: '파이 차트',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `pie title 기술 스택 사용 비율
    "JavaScript" : 40
    "TypeScript" : 30
    "Python" : 20
    "기타" : 10`,
          },
          {
            type: 'tip',
            text: 'Mermaid는 GitHub, GitLab, Notion 등 다양한 플랫폼에서 기본 지원됩니다. Markdown 코드 블록 언어를 mermaid로 지정하면 자동으로 렌더링됩니다.',
          },
        ],
      },

      // ── Lesson 1-d: 시퀀스 다이어그램 심화 ──
      {
        slug: 'sequence-diagrams-advanced',
        title: '시퀀스 다이어그램 심화',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '시퀀스 다이어그램 고급 문법',
          },
          {
            type: 'text',
            text: '기본 시퀀스 다이어그램에서 한 단계 더 나아가, 실무에서 자주 사용하는 고급 패턴을 학습합니다. 병렬 처리(par), 크리티컬 섹션(critical), 반복/옵션 중첩 등 복잡한 시나리오를 표현하는 방법을 알아봅니다.',
          },
          {
            type: 'heading',
            text: '병렬 처리 (par)',
          },
          {
            type: 'text',
            text: 'par 블록을 사용하면 여러 메시지가 동시에 처리되는 병렬 흐름을 표현할 수 있습니다. and 키워드로 병렬 분기를 구분합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    participant U as 사용자
    participant API as API 서버
    participant Auth as 인증 서비스
    participant DB as 데이터베이스
    participant Cache as 캐시

    U->>API: 대시보드 요청

    par 병렬 데이터 로드
        API->>DB: 사용자 정보 조회
        DB-->>API: 사용자 데이터
    and
        API->>Cache: 최근 활동 조회
        Cache-->>API: 활동 데이터
    and
        API->>Auth: 권한 확인
        Auth-->>API: 권한 정보
    end

    API-->>U: 대시보드 데이터 응답`,
          },
          {
            type: 'heading',
            text: '크리티컬 섹션과 break',
          },
          {
            type: 'text',
            text: 'critical 블록은 반드시 실행되어야 하는 중요한 처리를, break는 흐름이 중단되는 예외 상황을 표현합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    participant Client as 클라이언트
    participant Server as 서버
    participant DB as 데이터베이스

    Client->>Server: 결제 요청

    critical 결제 처리
        Server->>DB: 잔액 확인
        DB-->>Server: 잔액 정보

        break 잔액 부족 시
            Server-->>Client: 결제 실패 (잔액 부족)
        end

        Server->>DB: 금액 차감
        DB-->>Server: 차감 완료
    end

    Server-->>Client: 결제 성공`,
          },
          {
            type: 'heading',
            text: '참여자 스타일링과 별칭',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    actor User as 사용자
    participant FE as 프론트엔드
    participant BFF as BFF 서버
    participant MS1 as 주문 서비스
    participant MS2 as 결제 서비스

    Note over FE,BFF: 마이크로서비스 아키텍처

    User->>FE: 주문하기 클릭
    FE->>BFF: POST /orders
    BFF->>MS1: 주문 생성
    MS1-->>BFF: 주문 ID 반환

    BFF->>MS2: 결제 요청
    MS2-->>BFF: 결제 완료

    BFF-->>FE: 주문 완료 응답
    FE-->>User: 주문 완료 화면

    Note over MS1,MS2: 이벤트 기반 비동기 통신 가능`,
          },
          {
            type: 'heading',
            text: '자동 번호 매기기',
          },
          {
            type: 'text',
            text: 'autonumber 키워드를 추가하면 모든 메시지에 자동으로 순번이 부여되어 흐름을 추적하기 쉬워집니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    autonumber
    participant A as 클라이언트
    participant B as 서버
    participant C as DB

    A->>B: 로그인 요청
    B->>C: 사용자 검색
    C-->>B: 사용자 정보
    B-->>A: 토큰 발급
    A->>B: 데이터 요청 (토큰 포함)
    B->>C: 데이터 조회
    C-->>B: 결과 반환
    B-->>A: 200 OK`,
          },
          {
            type: 'list',
            items: [
              'par / and / end — 병렬 처리 흐름 표현',
              'critical / end — 반드시 실행되어야 하는 구간',
              'break — 흐름이 중단되는 예외 상황',
              'actor — 사람 아이콘으로 참여자 표시',
              'autonumber — 자동 순번 매기기',
              'Note over A,B — 여러 참여자에 걸친 메모',
            ],
          },
          {
            type: 'tip',
            text: 'rect 키워드로 배경 색상이 있는 영역을 만들 수 있습니다. rect rgb(200, 220, 255) ... end 형태로 작성하면 해당 구간에 배경색이 적용됩니다.',
          },
        ],
      },

      // ── Lesson 1-e: 상태도와 ER 다이어그램 ──
      {
        slug: 'state-er-diagrams',
        title: '상태도와 ER 다이어그램',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '상태 다이어그램(State Diagram)',
          },
          {
            type: 'text',
            text: '상태 다이어그램은 객체가 가질 수 있는 상태(state)와 상태 간 전이(transition)를 표현합니다. 주문 상태, 결제 프로세스, UI 컴포넌트의 상태 관리 등을 설계할 때 매우 유용합니다. Mermaid에서는 stateDiagram-v2 키워드로 작성합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `stateDiagram-v2
    [*] --> 대기중
    대기중 --> 처리중 : 주문 접수
    처리중 --> 배송중 : 결제 완료
    배송중 --> 완료 : 배송 도착
    처리중 --> 취소됨 : 결제 실패
    배송중 --> 반품요청 : 반품 신청
    반품요청 --> 환불완료 : 환불 처리
    완료 --> [*]
    취소됨 --> [*]
    환불완료 --> [*]`,
          },
          {
            type: 'heading',
            text: '복합 상태(Composite State)',
          },
          {
            type: 'text',
            text: '상태 안에 하위 상태를 정의하면 복잡한 상태 머신을 계층적으로 표현할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `stateDiagram-v2
    [*] --> 로그인

    state 로그인 {
        [*] --> 아이디입력
        아이디입력 --> 비밀번호입력 : 아이디 확인
        비밀번호입력 --> 인증처리 : 제출
        인증처리 --> 성공 : 인증 통과
        인증처리 --> 실패 : 인증 거부
        실패 --> 아이디입력 : 재시도
    }

    로그인 --> 대시보드 : 로그인 성공

    state 대시보드 {
        [*] --> 메인화면
        메인화면 --> 설정
        메인화면 --> 프로필
        설정 --> 메인화면
        프로필 --> 메인화면
    }

    대시보드 --> [*] : 로그아웃`,
          },
          {
            type: 'heading',
            text: '포크(Fork)와 조인(Join)',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `stateDiagram-v2
    state fork_state <<fork>>
    state join_state <<join>>

    [*] --> fork_state
    fork_state --> 데이터검증
    fork_state --> 권한확인
    fork_state --> 로그기록

    데이터검증 --> join_state
    권한확인 --> join_state
    로그기록 --> join_state

    join_state --> 처리완료
    처리완료 --> [*]`,
          },
          {
            type: 'heading',
            text: 'ER 다이어그램 심화',
          },
          {
            type: 'text',
            text: 'ER(Entity-Relationship) 다이어그램은 데이터베이스 설계의 핵심입니다. 엔티티(테이블), 속성(컬럼), 관계(외래키)를 시각적으로 표현하여 데이터 모델을 명확히 합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `erDiagram
    CUSTOMER {
        int id PK
        string name
        string email UK
        date created_at
    }
    ORDER {
        int id PK
        int customer_id FK
        date order_date
        string status
        float total_amount
    }
    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        float unit_price
    }
    PRODUCT {
        int id PK
        string name
        string category
        float price
        int stock
    }
    REVIEW {
        int id PK
        int customer_id FK
        int product_id FK
        int rating
        string comment
    }

    CUSTOMER ||--o{ ORDER : "주문한다"
    ORDER ||--|{ ORDER_ITEM : "포함한다"
    PRODUCT ||--o{ ORDER_ITEM : "주문된다"
    CUSTOMER ||--o{ REVIEW : "작성한다"
    PRODUCT ||--o{ REVIEW : "평가된다"`,
          },
          {
            type: 'heading',
            text: 'ER 다이어그램 관계 표기법',
          },
          {
            type: 'list',
            items: [
              '||--|| : 1 대 1 (정확히 하나)',
              '||--o| : 1 대 0 또는 1',
              '||--|{ : 1 대 1 이상 (필수 다수)',
              '||--o{ : 1 대 0 이상 (선택 다수)',
              'PK : Primary Key (기본 키)',
              'FK : Foreign Key (외래 키)',
              'UK : Unique Key (유니크 키)',
            ],
          },
          {
            type: 'tip',
            text: '상태 다이어그램과 ER 다이어그램은 시스템 설계 문서에서 가장 많이 사용됩니다. 상태도는 비즈니스 로직의 흐름을, ER 다이어그램은 데이터 구조를 명확히 전달합니다.',
          },
        ],
      },

      // ── Lesson 1-f: 간트 차트와 파이 차트 ──
      {
        slug: 'gantt-pie',
        title: '간트 차트와 파이 차트',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '간트 차트 심화',
          },
          {
            type: 'text',
            text: '간트 차트는 프로젝트 관리에서 일정과 작업 진행 상황을 시각화하는 표준 도구입니다. Mermaid의 gantt 다이어그램은 날짜 형식, 작업 상태, 마일스톤, 의존성 등 풍부한 기능을 제공합니다.',
          },
          {
            type: 'heading',
            text: '작업 상태 표현',
          },
          {
            type: 'text',
            text: '각 작업에 상태 키워드를 추가하여 진행 상황을 시각적으로 구분할 수 있습니다. done(완료), active(진행중), crit(중요) 등의 태그를 사용합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `gantt
    title 웹 애플리케이션 개발 프로젝트
    dateFormat YYYY-MM-DD
    axisFormat %m/%d

    section 기획 단계
    요구사항 정의          :done, req, 2024-01-01, 7d
    UI/UX 설계            :done, design, after req, 10d
    기술 스택 결정         :done, tech, 2024-01-05, 5d

    section 개발 단계
    프론트엔드 개발        :active, fe, after design, 21d
    백엔드 API 개발        :active, be, after design, 21d
    데이터베이스 설계      :done, db, after tech, 7d

    section 테스트 및 배포
    단위 테스트            :test1, after fe, 7d
    통합 테스트            :crit, test2, after test1, 5d
    성능 최적화            :perf, after test2, 5d
    프로덕션 배포          :milestone, deploy, after perf, 0d`,
          },
          {
            type: 'heading',
            text: '간트 차트 설정 옵션',
          },
          {
            type: 'list',
            items: [
              'dateFormat YYYY-MM-DD — 날짜 입력 형식 지정',
              'axisFormat %m/%d — 축에 표시되는 날짜 형식',
              'done — 완료된 작업 (회색 표시)',
              'active — 현재 진행 중인 작업 (강조 표시)',
              'crit — 중요한 작업 (빨간색 표시)',
              'milestone — 마일스톤 (다이아몬드 표시, 기간 0d)',
              'after taskId — 특정 작업 완료 후 시작 (의존성)',
            ],
          },
          {
            type: 'heading',
            text: '파이 차트 활용',
          },
          {
            type: 'text',
            text: '파이 차트는 전체 대비 각 항목의 비율을 직관적으로 보여줍니다. Mermaid의 pie 다이어그램은 간단한 문법으로 즉시 비율 차트를 생성합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `pie showData
    title 프로젝트 시간 분배
    "개발" : 45
    "테스트" : 20
    "코드 리뷰" : 15
    "문서 작성" : 10
    "미팅" : 10`,
          },
          {
            type: 'heading',
            text: '파이 차트 실전 예제',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `pie title 프론트엔드 번들 크기 분석
    "React Core" : 35
    "UI 라이브러리" : 25
    "상태 관리" : 15
    "유틸리티" : 12
    "폰트/이미지" : 8
    "기타" : 5`,
          },
          {
            type: 'heading',
            text: '마인드맵',
          },
          {
            type: 'text',
            text: 'Mermaid는 마인드맵(mindmap)도 지원합니다. 계층 구조의 아이디어를 시각적으로 정리할 때 유용합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `mindmap
  root((웹 개발))
    프론트엔드
      React
      Vue
      Angular
    백엔드
      Node.js
      Python
      Java
    데이터베이스
      PostgreSQL
      MongoDB
      Redis
    DevOps
      Docker
      Kubernetes
      CI/CD`,
          },
          {
            type: 'tip',
            text: 'showData 키워드를 pie 뒤에 추가하면 각 항목의 실제 수치도 차트에 함께 표시됩니다. 발표 자료 등에서 정확한 수치를 전달할 때 유용합니다.',
          },
        ],
      },

      // ── Lesson 1-g: 실전: 시스템 설계 문서 ──
      {
        slug: 'practical-project',
        title: '실전: 시스템 설계 문서',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '실전 프로젝트: 쇼핑몰 시스템 설계 문서',
          },
          {
            type: 'text',
            text: '지금까지 배운 모든 Mermaid 다이어그램을 활용하여 실제 프로젝트의 설계 문서를 작성해 봅니다. 쇼핑몰 시스템을 예시로 전체 아키텍처, API 흐름, 데이터 모델, 프로젝트 일정을 문서화합니다.',
          },
          {
            type: 'heading',
            text: '1단계: 시스템 아키텍처 (플로우차트)',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `graph TB
    subgraph 클라이언트
        Web[웹 브라우저]
        Mobile[모바일 앱]
    end

    subgraph API_Gateway[API Gateway]
        LB[로드 밸런서]
        Auth[인증 미들웨어]
    end

    subgraph 서비스
        UserSvc[사용자 서비스]
        ProductSvc[상품 서비스]
        OrderSvc[주문 서비스]
        PaymentSvc[결제 서비스]
        NotiSvc[알림 서비스]
    end

    subgraph 데이터
        PostgreDB[(PostgreSQL)]
        Redis[(Redis Cache)]
        S3[(파일 스토리지)]
        MQ[메시지 큐]
    end

    Web --> LB
    Mobile --> LB
    LB --> Auth
    Auth --> UserSvc
    Auth --> ProductSvc
    Auth --> OrderSvc
    OrderSvc --> PaymentSvc
    PaymentSvc --> MQ
    MQ --> NotiSvc

    UserSvc --> PostgreDB
    ProductSvc --> PostgreDB
    ProductSvc --> Redis
    OrderSvc --> PostgreDB
    ProductSvc --> S3`,
          },
          {
            type: 'heading',
            text: '2단계: 주문 흐름 (시퀀스 다이어그램)',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `sequenceDiagram
    autonumber
    actor User as 고객
    participant FE as 프론트엔드
    participant GW as API Gateway
    participant Order as 주문 서비스
    participant Product as 상품 서비스
    participant Payment as 결제 서비스
    participant Noti as 알림 서비스

    User->>FE: 주문하기 클릭
    FE->>GW: POST /api/orders

    GW->>Product: 재고 확인
    Product-->>GW: 재고 있음

    GW->>Order: 주문 생성

    alt 결제 성공
        Order->>Payment: 결제 요청
        Payment-->>Order: 결제 완료
        Order->>Noti: 주문 확인 알림
        Noti-->>User: 이메일/SMS 발송
        Order-->>GW: 주문 성공
        GW-->>FE: 200 OK
        FE-->>User: 주문 완료 화면
    else 결제 실패
        Order->>Payment: 결제 요청
        Payment-->>Order: 결제 실패
        Order-->>GW: 결제 오류
        GW-->>FE: 400 Error
        FE-->>User: 결제 실패 안내
    end`,
          },
          {
            type: 'heading',
            text: '3단계: 주문 상태 관리 (상태도)',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `stateDiagram-v2
    [*] --> 장바구니
    장바구니 --> 주문접수 : 주문하기
    주문접수 --> 결제대기 : 주문 확인
    결제대기 --> 결제완료 : 결제 성공
    결제대기 --> 주문취소 : 결제 실패/시간 초과
    결제완료 --> 상품준비 : 판매자 확인
    상품준비 --> 배송중 : 출고
    배송중 --> 배송완료 : 수령 확인
    배송완료 --> 구매확정 : 자동 확정 (7일)
    배송완료 --> 반품요청 : 반품 신청
    반품요청 --> 반품진행 : 반품 승인
    반품진행 --> 환불완료 : 환불 처리
    구매확정 --> [*]
    주문취소 --> [*]
    환불완료 --> [*]`,
          },
          {
            type: 'heading',
            text: '4단계: 데이터 모델 (ER 다이어그램)',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `erDiagram
    CUSTOMER {
        int id PK
        string name
        string email UK
        string phone
        date joined_at
    }
    PRODUCT {
        int id PK
        string name
        string description
        float price
        int stock
        int category_id FK
    }
    CATEGORY {
        int id PK
        string name
        int parent_id FK
    }
    ORDER {
        int id PK
        int customer_id FK
        string status
        float total
        date created_at
    }
    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        float price
    }
    PAYMENT {
        int id PK
        int order_id FK
        string method
        string status
        float amount
        date paid_at
    }

    CUSTOMER ||--o{ ORDER : "주문"
    ORDER ||--|{ ORDER_ITEM : "포함"
    PRODUCT ||--o{ ORDER_ITEM : "주문됨"
    CATEGORY ||--o{ PRODUCT : "분류"
    ORDER ||--|| PAYMENT : "결제"`,
          },
          {
            type: 'heading',
            text: '5단계: 프로젝트 일정 (간트 차트)',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `gantt
    title 쇼핑몰 개발 프로젝트
    dateFormat YYYY-MM-DD
    axisFormat %m/%d

    section 설계
    요구사항 분석      :done, a1, 2024-01-01, 5d
    시스템 설계        :done, a2, after a1, 5d
    DB 설계           :done, a3, after a1, 4d

    section 백엔드
    사용자 서비스      :active, b1, after a2, 10d
    상품 서비스        :active, b2, after a3, 10d
    주문/결제 서비스   :b3, after b1, 12d

    section 프론트엔드
    상품 목록/상세     :c1, after a2, 14d
    장바구니/결제      :c2, after c1, 10d

    section QA
    통합 테스트        :crit, d1, after b3, 7d
    출시              :milestone, after d1, 0d`,
          },
          {
            type: 'tip',
            text: '실무에서는 이러한 다이어그램들을 Markdown 문서나 Wiki에 함께 작성하여 팀원들과 공유합니다. 코드와 함께 버전 관리가 되므로 설계 변경 이력도 추적할 수 있습니다.',
          },
        ],
      },

      // ── Lesson 1-h: Mermaid 레퍼런스 ──
      {
        slug: 'reference',
        title: 'Mermaid 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: '다이어그램 타입 총정리',
          },
          {
            type: 'text',
            text: 'Mermaid가 지원하는 모든 다이어그램 타입과 시작 키워드를 정리합니다. 각 다이어그램은 고유한 문법을 가지며, 첫 줄의 키워드로 종류를 결정합니다.',
          },
          {
            type: 'list',
            items: [
              'graph / flowchart — 플로우차트 (방향: TD, LR, BT, RL)',
              'sequenceDiagram — 시퀀스 다이어그램',
              'classDiagram — 클래스 다이어그램',
              'stateDiagram-v2 — 상태 다이어그램',
              'erDiagram — ER 다이어그램',
              'gantt — 간트 차트',
              'pie — 파이 차트',
              'mindmap — 마인드맵',
              'gitgraph — Git 브랜치 다이어그램',
              'journey — 사용자 여정 맵',
              'timeline — 타임라인',
              'C4Context — C4 아키텍처 다이어그램',
            ],
          },
          {
            type: 'heading',
            text: '플로우차트 노드 모양 레퍼런스',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `graph LR
    A[사각형] --> B(둥근 사각형)
    B --> C{다이아몬드}
    C --> D((원형))
    D --> E[/평행사변형/]
    E --> F[\\역 평행사변형\\]
    F --> G>깃발 모양]
    G --> H{{육각형}}
    H --> I[[서브루틴]]
    I --> J[(데이터베이스)]`,
          },
          {
            type: 'heading',
            text: '연결선 스타일 레퍼런스',
          },
          {
            type: 'list',
            items: [
              'A --> B : 실선 화살표',
              'A --- B : 실선 (화살표 없음)',
              'A -.-> B : 점선 화살표',
              'A -.- B : 점선 (화살표 없음)',
              'A ==> B : 굵은 실선 화살표',
              'A === B : 굵은 실선 (화살표 없음)',
              'A -->|텍스트| B : 라벨이 있는 화살표',
              'A -- 텍스트 --> B : 라벨이 있는 화살표 (대체 문법)',
            ],
          },
          {
            type: 'heading',
            text: '테마와 설정',
          },
          {
            type: 'text',
            text: 'Mermaid는 다양한 내장 테마를 제공하며, 디렉티브(directive)를 통해 세밀한 커스터마이징이 가능합니다.',
          },
          {
            type: 'code',
            language: 'mermaid',
            code: `%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#4f46e5',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#3730a3',
    'lineColor': '#6366f1',
    'secondaryColor': '#e0e7ff',
    'tertiaryColor': '#f5f3ff',
    'fontSize': '16px'
  }
}}%%
graph TD
    A[시작] --> B[처리]
    B --> C{판단}
    C -->|Yes| D[완료]
    C -->|No| E[재시도]
    E --> B`,
          },
          {
            type: 'heading',
            text: '내장 테마 목록',
          },
          {
            type: 'list',
            items: [
              'default — 기본 테마 (밝은 파란색 계열)',
              'dark — 다크 모드 테마',
              'forest — 녹색 계열 자연 테마',
              'neutral — 회색 계열 중립 테마',
              'base — 커스텀 테마의 기반 (themeVariables와 함께 사용)',
            ],
          },
          {
            type: 'heading',
            text: '시퀀스 다이어그램 화살표 레퍼런스',
          },
          {
            type: 'list',
            items: [
              '->> : 실선 화살표 (동기 호출)',
              '-->> : 점선 화살표 (응답/반환)',
              '-) : 비동기 메시지 (열린 화살표)',
              '--) : 점선 비동기 메시지',
              '-x : 실선 X 화살표 (실패)',
              '--x : 점선 X 화살표',
            ],
          },
          {
            type: 'heading',
            text: 'ER 다이어그램 관계 기호 레퍼런스',
          },
          {
            type: 'code',
            language: 'text',
            code: `||--||  정확히 1 대 정확히 1
||--o|  정확히 1 대 0 또는 1
||--|{  정확히 1 대 1 이상
||--o{  정확히 1 대 0 이상

왼쪽 기호:
  || : 정확히 하나 (필수)
  o| : 0 또는 하나 (선택)

오른쪽 기호:
  || : 정확히 하나 (필수)
  o| : 0 또는 하나 (선택)
  |{ : 하나 이상 (필수 다수)
  o{ : 0 이상 (선택 다수)`,
          },
          {
            type: 'tip',
            text: 'Mermaid 공식 문서(mermaid.js.org)와 라이브 에디터(mermaid.live)를 활용하면 실시간으로 다이어그램을 미리보기하고 디버깅할 수 있습니다.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Chart.js 차트
  // ─────────────────────────────────────────────
  {
    slug: 'chart',
    title: 'Chart.js 차트',
    description: '간단하게 만드는 인터랙티브 데이터 차트',
    category: 'visualization',
    color: 'bg-lime-500',
    difficulty: 'beginner',
    objectives: [
      '막대, 선, 원형 등 기본 차트',
      '레이더, 극좌표, 복합 차트',
      '애니메이션, 툴팁, 인터랙션',
      '플러그인과 커스터마이징',
      '실전 대시보드와 설정 레퍼런스',
    ],
    lessons: [
      // ── Lesson 2-a: 막대/선 차트 ──
      {
        slug: 'bar-line',
        title: '막대/선 차트',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Chart.js 시작하기',
          },
          {
            type: 'text',
            text: 'Chart.js는 HTML Canvas 위에 아름다운 차트를 그려주는 오픈소스 라이브러리입니다. 간단한 설정 객체(config) 하나로 반응형 인터랙티브 차트를 만들 수 있습니다. CDN이나 npm을 통해 프로젝트에 추가할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- CDN으로 Chart.js 추가 -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- 차트를 그릴 캔버스 -->
<canvas id="myChart" width="400" height="200"></canvas>`,
          },
          {
            type: 'heading',
            text: '막대 차트(Bar Chart) 만들기',
          },
          {
            type: 'text',
            text: 'new Chart()에 캔버스의 2D 컨텍스트와 설정 객체를 전달합니다. type으로 차트 종류를 지정하고, data 객체에 labels(X축 라벨)와 datasets(데이터 묶음)를 정의합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const ctx = document.getElementById('myChart').getContext('2d');

const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [{
      label: '월별 매출 (만원)',
      data: [120, 190, 150, 250, 220, 300],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  },
});`,
          },
          {
            type: 'heading',
            text: '선 차트(Line Chart) 만들기',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['월', '화', '수', '목', '금'],
    datasets: [{
      label: '일일 방문자 수',
      data: [850, 1200, 1050, 1400, 980],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      fill: true,          // 영역 채우기
      tension: 0.3,        // 곡선 정도 (0 = 직선)
      pointRadius: 5,      // 데이터 포인트 크기
      pointHoverRadius: 8, // 호버 시 크기
    }],
  },
});`,
          },
          {
            type: 'tip',
            text: 'fill: true와 tension 값을 조합하면 부드러운 영역 차트(Area Chart)를 만들 수 있습니다. tension 값은 0(직선)에서 1 사이로 조절합니다.',
          },
        ],
      },

      // ── Lesson 2-b: 원형 차트 ──
      {
        slug: 'pie-doughnut',
        title: '원형 차트',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Pie 차트와 Doughnut 차트',
          },
          {
            type: 'text',
            text: '원형 차트는 전체 대비 각 항목의 비율을 직관적으로 보여주는 차트입니다. Chart.js에서 Pie와 Doughnut의 차이는 가운데 구멍의 유무뿐이며, 동일한 데이터 구조를 사용합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const pieChart = new Chart(ctx, {
  type: 'pie',   // 'doughnut'으로 바꾸면 도넛 차트
  data: {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'Go'],
    datasets: [{
      label: '프로그래밍 언어 선호도',
      data: [35, 25, 20, 12, 8],
      backgroundColor: [
        '#f7df1e',  // JavaScript - 노란색
        '#3776ab',  // Python - 파란색
        '#ed8b00',  // Java - 주황색
        '#00599c',  // C++ - 진파란색
        '#00add8',  // Go - 하늘색
      ],
      hoverOffset: 10,  // 호버 시 조각 돌출 거리
    }],
  },
});`,
          },
          {
            type: 'heading',
            text: 'Doughnut 차트와 cutout 옵션',
          },
          {
            type: 'text',
            text: 'Doughnut 차트는 Pie 차트의 가운데에 구멍이 뚫린 형태입니다. cutout 옵션으로 구멍의 크기를 퍼센트 단위로 조절할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const doughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['완료', '진행 중', '대기'],
    datasets: [{
      data: [60, 25, 15],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(156, 163, 175, 0.8)',
      ],
      borderWidth: 2,
      borderColor: '#ffffff',
    }],
  },
  options: {
    cutout: '60%',  // 가운데 구멍 크기 (기본 50%)
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
});`,
          },
          {
            type: 'list',
            items: [
              'cutout: "50%" — 기본 도넛 차트',
              'cutout: "75%" — 얇은 링 형태의 도넛',
              'cutout: "0%" — Pie 차트와 동일한 효과',
              'hoverOffset — 호버 시 조각이 바깥으로 돌출되는 거리(px)',
            ],
          },
          {
            type: 'tip',
            text: '색상 배열의 길이가 데이터 개수보다 적으면 Chart.js가 자동으로 색상을 반복 사용합니다. 가독성을 위해 항목마다 고유 색상을 지정하는 것이 좋습니다.',
          },
        ],
      },

      // ── Lesson 2-c: 차트 커스터마이징 ──
      {
        slug: 'chart-options',
        title: '차트 커스터마이징',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'options 객체 구조',
          },
          {
            type: 'text',
            text: 'Chart.js의 options 객체를 통해 차트의 거의 모든 시각 요소를 커스터마이징할 수 있습니다. 반응형 설정, 플러그인(범례, 제목, 툴팁), 축(scales) 설정 등을 자유롭게 조합합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const chart = new Chart(ctx, {
  type: 'bar',
  data: { /* ... */ },
  options: {
    responsive: true,        // 화면 크기에 맞게 자동 조절
    maintainAspectRatio: false, // 종횡비 고정 해제

    plugins: {
      legend: {
        display: true,
        position: 'top',      // 'top' | 'bottom' | 'left' | 'right'
        labels: {
          font: { size: 14 },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: '월별 매출 현황',
        font: { size: 18, weight: 'bold' },
        padding: { bottom: 20 },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        callbacks: {
          label: (context) =>
            context.dataset.label + ": " + context.parsed.y.toLocaleString() + "만원",
        },
      },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '축(Scales) 커스터마이징',
          },
          {
            type: 'text',
            text: 'scales 옵션으로 X축과 Y축의 범위, 눈금 간격, 레이블 서식 등을 세밀하게 제어할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `options: {
  scales: {
    x: {
      title: {
        display: true,
        text: '월',
        font: { size: 14 },
      },
      grid: {
        display: false,   // X축 그리드 라인 숨기기
      },
    },
    y: {
      beginAtZero: true,  // Y축 0부터 시작
      max: 500,
      title: {
        display: true,
        text: '매출 (만원)',
      },
      ticks: {
        stepSize: 50,     // 눈금 간격
        callback: (value) => value.toLocaleString() + '만원',
      },
    },
  },
}`,
          },
          {
            type: 'heading',
            text: '애니메이션과 이벤트',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `options: {
  animation: {
    duration: 1500,        // 애니메이션 시간 (ms)
    easing: 'easeOutBounce', // 이징 함수
  },

  onClick: (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const label = chart.data.labels[index];
      const value = chart.data.datasets[0].data[index];
      console.log("클릭: " + label + " = " + value);
    }
  },

  onHover: (event, elements) => {
    event.native.target.style.cursor =
      elements.length > 0 ? 'pointer' : 'default';
  },
}`,
          },
          {
            type: 'list',
            items: [
              'responsive: true — 컨테이너 크기에 따라 자동 리사이즈',
              'plugins.legend — 범례의 위치, 스타일, 클릭 동작 설정',
              'plugins.tooltip.callbacks — 툴팁 내용을 원하는 형식으로 커스터마이징',
              'scales.y.ticks.callback — Y축 눈금 텍스트 포맷 지정',
              'animation.easing — linear, easeInOut, easeOutBounce 등 다양한 이징 지원',
            ],
          },
          {
            type: 'tip',
            text: 'chart.update() 메서드를 호출하면 데이터나 옵션을 변경한 뒤 차트를 다시 그릴 수 있습니다. chart.data.datasets[0].data = newData; chart.update(); 패턴을 자주 사용합니다.',
          },
        ],
      },

      // ── Lesson 2-d: 고급 차트 ──
      {
        slug: 'advanced-charts',
        title: '고급 차트 (레이더, 극좌표, 버블)',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '레이더 차트 (Radar Chart)',
          },
          {
            type: 'text',
            text: '레이더 차트(Spider Chart)는 여러 항목의 수치를 동시에 비교할 때 유용합니다. 팀원 역량 평가, 제품 스펙 비교, 성능 지표 대시보드 등에서 자주 사용됩니다. 각 축(axis)이 하나의 평가 항목을 나타내며, 데이터가 다각형 형태로 표시됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'DevOps'],
    datasets: [
      {
        label: '개발자 A',
        data: [90, 80, 85, 70, 65, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      },
      {
        label: '개발자 B',
        data: [70, 90, 60, 85, 80, 75],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 },
        pointLabels: { font: { size: 13 } },
      },
    },
    plugins: {
      legend: { position: 'top' },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '극좌표 차트 (Polar Area Chart)',
          },
          {
            type: 'text',
            text: '극좌표 차트는 파이 차트와 비슷하지만, 각 섹터의 각도는 동일하고 반지름으로 값의 크기를 표현합니다. 값의 상대적 크기를 면적으로 비교하기에 효과적입니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const polarChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['마케팅', '개발', '디자인', 'QA', '운영'],
    datasets: [{
      data: [300, 500, 200, 150, 250],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '만원';
          },
        },
      },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '버블 차트 (Bubble Chart)',
          },
          {
            type: 'text',
            text: '버블 차트는 산점도(Scatter)의 확장으로, x, y 좌표에 더해 세 번째 차원(r: 반지름)으로 크기를 표현합니다. 세 가지 변수를 동시에 시각화할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const bubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: '제품 A',
        data: [{ x: 20, y: 30, r: 15 }],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: '제품 B',
        data: [{ x: 40, y: 10, r: 25 }],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: '제품 C',
        data: [{ x: 15, y: 50, r: 10 }],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: '제품 D',
        data: [{ x: 60, y: 25, r: 20 }],
        backgroundColor: 'rgba(255, 205, 86, 0.6)',
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: { display: true, text: '가격 (만원)' },
      },
      y: {
        title: { display: true, text: '만족도 (점)' },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            var point = context.raw;
            return context.dataset.label +
              ': 가격 ' + point.x + '만원, 만족도 ' + point.y +
              '점, 판매량 ' + point.r;
          },
        },
      },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '복합 차트 (Mixed Chart)',
          },
          {
            type: 'text',
            text: '하나의 캔버스에 여러 타입의 차트를 조합할 수 있습니다. datasets 배열의 각 항목에 type을 개별 지정하면 됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const mixedChart = new Chart(ctx, {
  type: 'bar',  // 기본 타입
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        type: 'bar',
        label: '매출 (만원)',
        data: [120, 190, 150, 250, 220, 300],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        order: 2,  // 막대가 뒤에 그려짐
      },
      {
        type: 'line',
        label: '목표 달성률 (%)',
        data: [80, 95, 75, 110, 100, 120],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: true,
        yAxisID: 'y1',  // 오른쪽 Y축 사용
        order: 1,  // 선이 앞에 그려짐
      },
    ],
  },
  options: {
    scales: {
      y: {
        position: 'left',
        title: { display: true, text: '매출 (만원)' },
      },
      y1: {
        position: 'right',
        title: { display: true, text: '달성률 (%)' },
        grid: { drawOnChartArea: false },
      },
    },
  },
});`,
          },
          {
            type: 'tip',
            text: '복합 차트에서 order 속성으로 그리기 순서를 제어할 수 있습니다. order 값이 작을수록 앞(위)에 그려집니다. 선 차트를 막대 차트 위에 표시하려면 선의 order를 더 작게 설정하세요.',
          },
        ],
      },

      // ── Lesson 2-e: 애니메이션과 인터랙션 ──
      {
        slug: 'animation-interaction',
        title: '애니메이션과 인터랙션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '애니메이션 설정',
          },
          {
            type: 'text',
            text: 'Chart.js는 차트가 처음 렌더링될 때와 데이터가 업데이트될 때 자동으로 애니메이션을 적용합니다. animation 옵션으로 지속 시간, 이징 함수, 콜백 등을 세밀하게 제어할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const chart = new Chart(ctx, {
  type: 'bar',
  data: { /* ... */ },
  options: {
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',

      // 애니메이션 완료 시 콜백
      onComplete: function(animation) {
        console.log('애니메이션 완료!');
      },

      // 각 프레임마다 호출
      onProgress: function(animation) {
        var progress = animation.currentStep / animation.numSteps;
        console.log('진행률: ' + Math.round(progress * 100) + '%');
      },
    },

    // 데이터셋별 애니메이션 설정
    transitions: {
      active: {
        animation: { duration: 300 },
      },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '이징 함수 종류',
          },
          {
            type: 'list',
            items: [
              'linear — 일정한 속도',
              'easeInQuad — 느리게 시작',
              'easeOutQuad — 느리게 끝남',
              'easeInOutQuad — 느리게 시작하고 느리게 끝남',
              'easeOutBounce — 바운스 효과',
              'easeOutElastic — 탄성 효과',
              'easeOutQuart — 부드럽게 감속 (추천)',
              'easeInOutCubic — 자연스러운 시작과 끝',
            ],
          },
          {
            type: 'heading',
            text: '개별 속성 애니메이션',
          },
          {
            type: 'text',
            text: '특정 속성에 대해서만 별도의 애니메이션을 적용할 수 있습니다. 예를 들어 x축은 빠르게, y축은 느리게 애니메이션하거나, 색상 변화에 별도 타이밍을 줄 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `options: {
  animations: {
    // Y축 값 애니메이션
    y: {
      duration: 1500,
      easing: 'easeOutBounce',
      from: function(ctx) {
        // 초기 로드 시 아래에서 시작
        if (ctx.type === 'data' && ctx.mode === 'default') {
          return ctx.chart.scales.y.getPixelForValue(0);
        }
      },
    },
    // 색상 애니메이션
    backgroundColor: {
      duration: 500,
      type: 'color',
      from: 'rgba(0, 0, 0, 0)',
    },
  },
}`,
          },
          {
            type: 'heading',
            text: '툴팁 커스터마이징',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `options: {
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index',           // 같은 X축 인덱스의 모든 데이터 표시
      intersect: false,        // 마우스가 정확히 포인트 위가 아니어도 표시
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      titleFont: { size: 15, weight: 'bold' },
      bodyFont: { size: 13 },
      padding: 12,
      cornerRadius: 8,
      displayColors: true,     // 색상 박스 표시

      // 제목 커스터마이징
      callbacks: {
        title: function(tooltipItems) {
          return tooltipItems[0].label + ' 실적';
        },
        // 본문 커스터마이징
        label: function(context) {
          var label = context.dataset.label || '';
          var value = context.parsed.y;
          return label + ': ' + value.toLocaleString() + '원';
        },
        // 푸터 추가
        footer: function(tooltipItems) {
          var total = 0;
          tooltipItems.forEach(function(item) {
            total += item.parsed.y;
          });
          return '합계: ' + total.toLocaleString() + '원';
        },
      },
    },
  },
}`,
          },
          {
            type: 'heading',
            text: '클릭 이벤트와 데이터 인터랙션',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 차트 요소 클릭 이벤트
const chart = new Chart(ctx, {
  type: 'bar',
  data: { /* ... */ },
  options: {
    onClick: function(event, elements, chart) {
      if (elements.length > 0) {
        var element = elements[0];
        var datasetIndex = element.datasetIndex;
        var index = element.index;
        var label = chart.data.labels[index];
        var value = chart.data.datasets[datasetIndex].data[index];

        console.log('클릭한 항목: ' + label + ', 값: ' + value);

        // 클릭한 막대 강조 표시
        var dataset = chart.data.datasets[datasetIndex];
        var colors = dataset.backgroundColor.map(function(color, i) {
          return i === index ? 'rgba(255, 99, 132, 0.8)' : 'rgba(54, 162, 235, 0.3)';
        });
        dataset.backgroundColor = colors;
        chart.update();
      }
    },

    onHover: function(event, elements) {
      var target = event.native ? event.native.target : event.target;
      target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '실시간 데이터 업데이트',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 실시간 데이터 추가
function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach(function(dataset, i) {
    dataset.data.push(data[i]);
  });

  // 최대 10개 데이터만 유지
  if (chart.data.labels.length > 10) {
    chart.data.labels.shift();
    chart.data.datasets.forEach(function(dataset) {
      dataset.data.shift();
    });
  }

  chart.update('none');  // 애니메이션 없이 업데이트
}

// 2초마다 데이터 추가
setInterval(function() {
  var now = new Date();
  var label = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
  var value = Math.floor(Math.random() * 100);
  addData(chart, label, [value]);
}, 2000);`,
          },
          {
            type: 'tip',
            text: 'chart.update("none")을 호출하면 애니메이션 없이 즉시 차트를 갱신합니다. 실시간 데이터 스트리밍처럼 빈번한 업데이트에는 "none" 모드를 사용하여 성능을 최적화하세요.',
          },
        ],
      },

      // ── Lesson 2-f: 플러그인과 커스터마이징 ──
      {
        slug: 'plugins-customization',
        title: '플러그인과 커스터마이징',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '커스텀 플러그인 만들기',
          },
          {
            type: 'text',
            text: 'Chart.js의 플러그인 시스템을 활용하면 차트의 렌더링 파이프라인에 커스텀 로직을 삽입할 수 있습니다. beforeDraw, afterDraw 같은 라이프사이클 훅을 사용하여 차트 위에 추가 요소를 그리거나 동작을 커스터마이징합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 도넛 차트 가운데에 텍스트를 표시하는 플러그인
const centerTextPlugin = {
  id: 'centerText',

  beforeDraw: function(chart) {
    if (chart.config.type !== 'doughnut') return;

    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    ctx.save();
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#333';

    // 데이터 합계 계산
    var total = chart.data.datasets[0].data.reduce(function(a, b) {
      return a + b;
    }, 0);

    ctx.fillText(total.toLocaleString(), width / 2, height / 2 - 10);

    ctx.font = '14px Arial';
    ctx.fillStyle = '#888';
    ctx.fillText('총 합계', width / 2, height / 2 + 15);

    ctx.restore();
  },
};

// 전역 등록
Chart.register(centerTextPlugin);

// 또는 개별 차트에만 적용
new Chart(ctx, {
  type: 'doughnut',
  data: { /* ... */ },
  plugins: [centerTextPlugin],
});`,
          },
          {
            type: 'heading',
            text: '배경 그라데이션 플러그인',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 차트 영역에 배경 그라데이션 적용
const backgroundGradientPlugin = {
  id: 'backgroundGradient',

  beforeDraw: function(chart) {
    var ctx = chart.ctx;
    var chartArea = chart.chartArea;

    var gradient = ctx.createLinearGradient(
      0, chartArea.top,
      0, chartArea.bottom
    );
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.05)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.15)');

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.right - chartArea.left,
      chartArea.bottom - chartArea.top
    );
    ctx.restore();
  },
};`,
          },
          {
            type: 'heading',
            text: '주요 플러그인 라이프사이클 훅',
          },
          {
            type: 'list',
            items: [
              'beforeInit / afterInit — 차트 초기화 전후',
              'beforeUpdate / afterUpdate — 데이터 업데이트 전후',
              'beforeDraw / afterDraw — 전체 차트 그리기 전후',
              'beforeDatasetsDraw / afterDatasetsDraw — 데이터셋 그리기 전후',
              'beforeEvent / afterEvent — 사용자 이벤트 처리 전후',
              'resize — 차트 크기 변경 시',
              'destroy — 차트 제거 시',
            ],
          },
          {
            type: 'heading',
            text: '데이터셋 스타일 고급 커스터마이징',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 그라데이션 채우기 영역
var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(54, 162, 235, 0.5)');
gradient.addColorStop(1, 'rgba(54, 162, 235, 0.0)');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [{
      label: '매출 추이',
      data: [120, 190, 150, 250, 220, 300],
      fill: true,
      backgroundColor: gradient,
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      tension: 0.4,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      pointHoverBorderWidth: 3,
    }],
  },
});`,
          },
          {
            type: 'heading',
            text: '전역 기본값 설정',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 전역 폰트 설정
Chart.defaults.font.family = "'Noto Sans KR', sans-serif";
Chart.defaults.font.size = 13;
Chart.defaults.color = '#555';

// 전역 플러그인 설정
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.tooltip.cornerRadius = 8;

// 전역 애니메이션 설정
Chart.defaults.animation.duration = 1000;
Chart.defaults.animation.easing = 'easeOutQuart';

// 전역 스케일 설정
Chart.defaults.scales.linear.beginAtZero = true;
Chart.defaults.scales.linear.grid.color = 'rgba(0, 0, 0, 0.05)';`,
          },
          {
            type: 'tip',
            text: 'Chart.defaults를 활용하면 프로젝트 전체에서 일관된 차트 스타일을 유지할 수 있습니다. 앱의 진입점에서 한 번 설정하면 모든 차트에 자동으로 적용됩니다.',
          },
        ],
      },

      // ── Lesson 2-g: 실전: 대시보드 만들기 ──
      {
        slug: 'practical-project',
        title: '실전: 대시보드 만들기',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '실전 프로젝트: 매출 분석 대시보드',
          },
          {
            type: 'text',
            text: '지금까지 배운 Chart.js 기능을 조합하여 실제 매출 분석 대시보드를 만들어 봅니다. 여러 차트를 하나의 페이지에 배치하고, 필터링과 실시간 업데이트 기능을 구현합니다.',
          },
          {
            type: 'heading',
            text: '1단계: HTML 레이아웃 구성',
          },
          {
            type: 'code',
            language: 'html',
            code: `<div class="dashboard">
  <h1>매출 분석 대시보드</h1>

  <!-- 필터 영역 -->
  <div class="filters">
    <select id="yearFilter">
      <option value="2024">2024년</option>
      <option value="2023">2023년</option>
    </select>
    <select id="regionFilter">
      <option value="all">전체 지역</option>
      <option value="seoul">서울</option>
      <option value="busan">부산</option>
    </select>
  </div>

  <!-- 차트 그리드 -->
  <div class="chart-grid">
    <div class="chart-card">
      <canvas id="revenueChart"></canvas>
    </div>
    <div class="chart-card">
      <canvas id="categoryChart"></canvas>
    </div>
    <div class="chart-card">
      <canvas id="trendChart"></canvas>
    </div>
    <div class="chart-card">
      <canvas id="performanceChart"></canvas>
    </div>
  </div>
</div>`,
          },
          {
            type: 'heading',
            text: '2단계: 데이터 모델 정의',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 샘플 데이터
var salesData = {
  months: ['1월', '2월', '3월', '4월', '5월', '6월',
           '7월', '8월', '9월', '10월', '11월', '12월'],
  revenue: [120, 190, 150, 250, 220, 300, 280, 310, 260, 340, 290, 380],
  costs:   [80, 120, 100, 160, 140, 180, 170, 190, 160, 210, 180, 230],
  categories: {
    labels: ['전자제품', '의류', '식품', '도서', '기타'],
    values: [35, 25, 20, 12, 8],
  },
  performance: {
    labels: ['매출 성장률', '고객 만족도', '재구매율', '배송 속도', '품질 평가'],
    current: [85, 90, 75, 80, 88],
    target:  [90, 85, 80, 90, 85],
  },
};`,
          },
          {
            type: 'heading',
            text: '3단계: 매출/비용 복합 차트',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 매출 vs 비용 복합 차트
var revenueCtx = document.getElementById('revenueChart').getContext('2d');

var revenueGradient = revenueCtx.createLinearGradient(0, 0, 0, 300);
revenueGradient.addColorStop(0, 'rgba(54, 162, 235, 0.4)');
revenueGradient.addColorStop(1, 'rgba(54, 162, 235, 0.0)');

var revenueChart = new Chart(revenueCtx, {
  type: 'bar',
  data: {
    labels: salesData.months,
    datasets: [
      {
        type: 'bar',
        label: '매출',
        data: salesData.revenue,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 4,
        order: 2,
      },
      {
        type: 'bar',
        label: '비용',
        data: salesData.costs,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderRadius: 4,
        order: 3,
      },
      {
        type: 'line',
        label: '순이익',
        data: salesData.revenue.map(function(r, i) {
          return r - salesData.costs[i];
        }),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: revenueGradient,
        fill: true,
        tension: 0.3,
        order: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '월별 매출/비용/순이익',
        font: { size: 16 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(v) { return v + '만원'; },
        },
      },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '4단계: 카테고리 도넛 차트',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 카테고리별 매출 비중
var categoryCtx = document.getElementById('categoryChart').getContext('2d');

var categoryChart = new Chart(categoryCtx, {
  type: 'doughnut',
  data: {
    labels: salesData.categories.labels,
    datasets: [{
      data: salesData.categories.values,
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ],
      hoverOffset: 10,
    }],
  },
  options: {
    responsive: true,
    cutout: '55%',
    plugins: {
      title: {
        display: true,
        text: '카테고리별 매출 비중',
        font: { size: 16 },
      },
      legend: { position: 'bottom' },
    },
  },
});`,
          },
          {
            type: 'heading',
            text: '5단계: 필터 연동',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 필터 변경 시 차트 업데이트
document.getElementById('yearFilter').addEventListener('change', function(e) {
  var year = e.target.value;

  // API에서 데이터 가져오기 (여기서는 시뮬레이션)
  var newData = fetchDataByYear(year);

  // 차트 데이터 업데이트
  revenueChart.data.datasets[0].data = newData.revenue;
  revenueChart.data.datasets[1].data = newData.costs;
  revenueChart.data.datasets[2].data = newData.revenue.map(function(r, i) {
    return r - newData.costs[i];
  });
  revenueChart.update();

  categoryChart.data.datasets[0].data = newData.categories;
  categoryChart.update();
});

function fetchDataByYear(year) {
  // 실제로는 API 호출
  return {
    revenue: salesData.revenue.map(function(v) {
      return Math.round(v * (year === '2023' ? 0.85 : 1));
    }),
    costs: salesData.costs.map(function(v) {
      return Math.round(v * (year === '2023' ? 0.9 : 1));
    }),
    categories: salesData.categories.values,
  };
}`,
          },
          {
            type: 'tip',
            text: '대시보드를 구성할 때는 반응형 레이아웃(CSS Grid나 Flexbox)과 함께 Chart.js의 responsive: true, maintainAspectRatio: false 옵션을 활용하세요. 다양한 화면 크기에서 차트가 올바르게 표시됩니다.',
          },
        ],
      },

      // ── Lesson 2-h: Chart.js 레퍼런스 ──
      {
        slug: 'reference',
        title: 'Chart.js 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: '차트 타입 총정리',
          },
          {
            type: 'list',
            items: [
              'bar — 막대 차트 (수직/수평)',
              'line — 선 차트 (영역 채우기 가능)',
              'pie — 파이 차트',
              'doughnut — 도넛 차트',
              'radar — 레이더 차트',
              'polarArea — 극좌표 영역 차트',
              'bubble — 버블 차트 (x, y, r)',
              'scatter — 산점도 차트 (x, y)',
            ],
          },
          {
            type: 'heading',
            text: '설정 객체 구조 레퍼런스',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// Chart.js 설정 객체 전체 구조
var config = {
  type: 'bar',              // 차트 타입

  data: {
    labels: [],             // X축 라벨 배열
    datasets: [{
      label: '',            // 데이터셋 이름
      data: [],             // 데이터 배열
      type: '',             // 복합 차트용 개별 타입
      backgroundColor: '',  // 채우기 색상
      borderColor: '',      // 테두리 색상
      borderWidth: 1,       // 테두리 두께
      fill: false,          // 영역 채우기 여부 (line)
      tension: 0,           // 곡선 정도 (line, 0~1)
      pointRadius: 3,       // 포인트 크기 (line)
      borderRadius: 0,      // 막대 모서리 둥글기 (bar)
      order: 0,             // 그리기 순서 (복합 차트)
      yAxisID: 'y',         // 사용할 Y축 ID
      hidden: false,        // 초기 숨김 여부
    }],
  },

  options: {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'x',         // 'y'로 설정하면 수평 막대

    plugins: {
      title: {
        display: false,
        text: '',
        font: {},
        padding: {},
      },
      legend: {
        display: true,
        position: 'top',
        labels: { font: {}, color: '' },
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: true,
        callbacks: {},
      },
    },

    scales: {
      x: {
        title: {},
        grid: {},
        ticks: {},
      },
      y: {
        beginAtZero: false,
        min: undefined,
        max: undefined,
        title: {},
        grid: {},
        ticks: { stepSize: undefined, callback: null },
      },
    },

    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
      onComplete: null,
      onProgress: null,
    },

    onClick: null,
    onHover: null,
  },

  plugins: [],              // 인라인 플러그인 배열
};`,
          },
          {
            type: 'heading',
            text: '주요 API 메서드',
          },
          {
            type: 'list',
            items: [
              'chart.update(mode) — 차트 다시 그리기 ("none": 애니메이션 없음)',
              'chart.destroy() — 차트 인스턴스 완전 제거',
              'chart.reset() — 애니메이션 이전 상태로 초기화',
              'chart.resize(width, height) — 차트 크기 변경',
              'chart.toBase64Image() — 차트를 PNG base64 이미지로 변환',
              'chart.getElementsAtEventForMode(e, mode, options) — 이벤트 위치의 요소 찾기',
              'chart.setDatasetVisibility(index, visible) — 데이터셋 표시/숨김',
              'chart.isDatasetVisible(index) — 데이터셋 표시 여부 확인',
            ],
          },
          {
            type: 'heading',
            text: '데이터셋 속성 레퍼런스 (Line)',
          },
          {
            type: 'list',
            items: [
              'borderColor — 선 색상',
              'backgroundColor — 채우기 색상 (fill: true 시)',
              'borderWidth — 선 두께 (기본: 3)',
              'borderDash — 점선 패턴 [대시, 간격]',
              'fill — 채우기 대상 (true, false, "origin", "+1", "-1")',
              'tension — 곡선 정도 (0: 직선, 0.4: 부드러운 곡선)',
              'stepped — 계단식 선 (true, "before", "after", "middle")',
              'pointRadius — 포인트 크기 (0이면 숨김)',
              'pointStyle — 포인트 모양 (circle, rect, triangle, star 등)',
              'pointHoverRadius — 호버 시 포인트 크기',
              'spanGaps — 누락 데이터(null) 건너뛰기',
            ],
          },
          {
            type: 'heading',
            text: '색상 유틸리티',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 미리 정의된 차트 색상 팔레트
var CHART_COLORS = {
  red:    'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green:  'rgb(75, 192, 192)',
  blue:   'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey:   'rgb(201, 203, 207)',
};

// 투명도 있는 배경색 만들기
function withAlpha(color, alpha) {
  return color.replace('rgb', 'rgba').replace(')', ', ' + alpha + ')');
}

// 사용 예시
var bgColor = withAlpha(CHART_COLORS.blue, 0.5);
// 결과: 'rgba(54, 162, 235, 0.5)'`,
          },
          {
            type: 'heading',
            text: '자주 쓰는 패턴 모음',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 1. 이미지로 다운로드
function downloadChart(chart, filename) {
  var link = document.createElement('a');
  link.download = filename + '.png';
  link.href = chart.toBase64Image();
  link.click();
}

// 2. 차트 제거 후 재생성 (타입 변경 시)
if (window.myChart) {
  window.myChart.destroy();
}
window.myChart = new Chart(ctx, newConfig);

// 3. 반응형 크기 설정
new Chart(ctx, {
  type: 'bar',
  data: { /* ... */ },
  options: {
    responsive: true,
    maintainAspectRatio: false,  // 컨테이너 크기에 맞춤
  },
});
// CSS: .chart-card { height: 400px; }`,
          },
          {
            type: 'tip',
            text: 'Chart.js 공식 문서(chartjs.org/docs)에서 각 차트 타입별 전체 옵션을 확인할 수 있습니다. 특히 Samples 섹션에서 다양한 실전 예제를 바로 확인하고 수정해볼 수 있습니다.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. D3.js 데이터 시각화
  // ─────────────────────────────────────────────
  {
    slug: 'd3',
    title: 'D3.js 데이터 시각화',
    description: '코드로 만드는 강력한 데이터 시각화',
    category: 'visualization',
    color: 'bg-orange-600',
    difficulty: 'intermediate',
    objectives: [
      'SVG와 데이터 바인딩 기초',
      '스케일, 축, 기본 차트 제작',
      '트랜지션과 인터랙티브 시각화',
      '트리, 포스, 지도 레이아웃',
      '실전 프로젝트와 API 레퍼런스',
    ],
    lessons: [
      // ── Lesson 3-a: D3 기본: 선택과 데이터 ──
      {
        slug: 'd3-basics',
        title: 'D3 기본: 선택과 데이터',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'D3.js란?',
          },
          {
            type: 'text',
            text: 'D3(Data-Driven Documents)는 데이터를 기반으로 DOM을 조작하여 시각화를 구현하는 JavaScript 라이브러리입니다. Chart.js 같은 차트 라이브러리와 달리 저수준 API를 제공하므로 자유도가 매우 높지만, 그만큼 학습 곡선도 있습니다. D3의 핵심은 선택(Selection)과 데이터 바인딩(Data Binding)입니다.',
          },
          {
            type: 'heading',
            text: 'select와 selectAll',
          },
          {
            type: 'text',
            text: 'd3.select()는 CSS 선택자로 첫 번째 일치 요소를 선택하고, d3.selectAll()은 모든 일치 요소를 선택합니다. 선택 후 체이닝으로 속성, 스타일, 텍스트 등을 설정합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 단일 요소 선택 및 스타일 변경
d3.select('h1')
  .style('color', 'steelblue')
  .style('font-size', '24px')
  .text('D3.js에 오신 것을 환영합니다!');

// 모든 <p> 요소 선택 및 일괄 변경
d3.selectAll('p')
  .style('color', '#555')
  .attr('class', 'description');`,
          },
          {
            type: 'heading',
            text: '데이터 바인딩: data → enter → append',
          },
          {
            type: 'text',
            text: 'D3의 가장 강력한 패턴은 데이터를 DOM 요소에 바인딩하는 것입니다. .data()로 데이터를 연결하고, .enter()로 아직 DOM에 없는 데이터를 위한 "자리"를 만든 뒤, .append()로 실제 요소를 추가합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const data = [30, 80, 45, 60, 20, 90, 55];

// SVG 컨테이너 생성
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', 400)
  .attr('height', 200);

// 데이터 바인딩 → 막대 생성
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
    .attr('x', (d, i) => i * 55)
    .attr('y', (d) => 200 - d * 2)
    .attr('width', 50)
    .attr('height', (d) => d * 2)
    .attr('fill', 'steelblue')
    .style('opacity', 0.8);

// 각 막대 위에 텍스트 추가
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
    .attr('x', (d, i) => i * 55 + 25)
    .attr('y', (d) => 200 - d * 2 - 5)
    .attr('text-anchor', 'middle')
    .text((d) => d);`,
          },
          {
            type: 'list',
            items: [
              '.data(array) — 배열의 각 요소를 선택된 DOM 요소에 매핑',
              '.enter() — 데이터가 있지만 DOM 요소가 부족한 부분의 가상 선택 반환',
              '.append(tag) — 가상 선택 각각에 실제 DOM 요소 생성',
              '.attr(name, value) — 속성 설정 (값에 함수를 전달하면 d=데이터, i=인덱스)',
              '.style(name, value) — CSS 스타일 설정',
              '.text(value) — 텍스트 콘텐츠 설정',
            ],
          },
          {
            type: 'tip',
            text: 'D3 v7부터는 .data().join("rect") 패턴을 사용하면 enter/update/exit를 한 번에 처리할 수 있어 더 간결합니다.',
          },
        ],
      },

      // ── Lesson 3-b: 스케일과 축 ──
      {
        slug: 'scales-axes',
        title: '스케일과 축',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '스케일(Scale)이란?',
          },
          {
            type: 'text',
            text: '실제 데이터 값(domain)을 화면의 픽셀 좌표(range)로 변환하는 함수가 스케일입니다. 예를 들어 매출 0~1000만원을 그래프 높이 0~300px에 매핑합니다. D3은 연속형, 서열형, 범주형 등 다양한 스케일을 제공합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 연속형 스케일: 숫자 → 픽셀
const yScale = d3.scaleLinear()
  .domain([0, 1000])   // 데이터 범위: 0~1000
  .range([300, 0]);    // 픽셀 범위: 300~0 (SVG는 위가 0)

console.log(yScale(500));  // 150  (중간값)
console.log(yScale(0));    // 300  (바닥)

// 서열형 스케일: 카테고리 → 균등 분할 위치
const xScale = d3.scaleBand()
  .domain(['1월', '2월', '3월', '4월', '5월'])
  .range([0, 400])
  .padding(0.2);       // 막대 사이 여백 비율

console.log(xScale('3월'));      // 해당 막대의 x 좌표
console.log(xScale.bandwidth()); // 각 막대의 너비

// 범주형 색상 스케일
const colorScale = d3.scaleOrdinal()
  .domain(['A', 'B', 'C'])
  .range(['#e41a1c', '#377eb8', '#4daf4a']);`,
          },
          {
            type: 'heading',
            text: '축(Axis) 생성하기',
          },
          {
            type: 'text',
            text: 'D3의 축 생성기(axis generator)는 스케일을 받아 눈금선과 라벨을 자동으로 그려줍니다. axisBottom은 아래쪽 축, axisLeft는 왼쪽 축을 만듭니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const width = 500, height = 350;
const margin = { top: 20, right: 20, bottom: 40, left: 50 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// 마진 적용을 위한 그룹 요소
const g = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// 스케일 정의
const x = d3.scaleBand()
  .domain(data.map(d => d.month))
  .range([0, innerWidth])
  .padding(0.2);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([innerHeight, 0])
  .nice();  // 깔끔한 눈금 범위로 자동 조정

// X축 그리기
g.append('g')
  .attr('transform', 'translate(0,' + innerHeight + ')')
  .call(d3.axisBottom(x));

// Y축 그리기
g.append('g')
  .call(d3.axisLeft(y).ticks(6));`,
          },
          {
            type: 'list',
            items: [
              'd3.scaleLinear() — 연속형 숫자 매핑 (가장 자주 사용)',
              'd3.scaleBand() — 범주형 데이터를 균등한 띠(band)로 매핑',
              'd3.scaleOrdinal() — 범주형 데이터를 이산적인 값(색상 등)에 매핑',
              '.nice() — domain을 깔끔한 반올림 값으로 확장',
              'd3.axisBottom(scale) / d3.axisLeft(scale) — 축 생성기',
              'g.call(axis) — 그룹 요소에 축을 렌더링',
            ],
          },
          {
            type: 'tip',
            text: 'margin convention(마진 규약)은 D3 시각화의 표준 패턴입니다. SVG 안에 g 요소를 만들고 translate로 여백을 확보하면 축과 데이터 영역이 겹치지 않습니다.',
          },
        ],
      },

      // ── Lesson 3-c: 도형과 트랜지션 ──
      {
        slug: 'shapes-transitions',
        title: '도형과 트랜지션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'SVG 기본 도형',
          },
          {
            type: 'text',
            text: 'D3는 SVG 요소를 직접 조작하므로 SVG의 기본 도형을 이해하는 것이 중요합니다. rect(사각형), circle(원), line(직선), path(경로) 등을 데이터 바인딩과 함께 사용합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const svg = d3.select('#chart')
  .append('svg')
  .attr('width', 500)
  .attr('height', 300);

// 사각형 (rect)
svg.append('rect')
  .attr('x', 10).attr('y', 10)
  .attr('width', 100).attr('height', 60)
  .attr('fill', '#3b82f6')
  .attr('rx', 8);  // 둥근 모서리

// 원 (circle)
svg.append('circle')
  .attr('cx', 200).attr('cy', 40)
  .attr('r', 30)
  .attr('fill', '#ef4444');

// 직선 (line)
svg.append('line')
  .attr('x1', 280).attr('y1', 10)
  .attr('x2', 400).attr('y2', 70)
  .attr('stroke', '#10b981')
  .attr('stroke-width', 3);`,
          },
          {
            type: 'heading',
            text: '선 생성기(Line Generator)로 꺾은선 그래프 만들기',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const data = [
  { date: '01/01', value: 30 },
  { date: '01/02', value: 50 },
  { date: '01/03', value: 45 },
  { date: '01/04', value: 70 },
  { date: '01/05', value: 60 },
];

const x = d3.scalePoint()
  .domain(data.map(d => d.date))
  .range([50, 450]);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([250, 20]);

// d3.line()으로 path의 d 속성 문자열 생성
const lineGenerator = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.value))
  .curve(d3.curveMonotoneX);  // 부드러운 곡선

svg.append('path')
  .datum(data)
  .attr('d', lineGenerator)
  .attr('fill', 'none')
  .attr('stroke', '#6366f1')
  .attr('stroke-width', 2.5);`,
          },
          {
            type: 'heading',
            text: '트랜지션(Transition)',
          },
          {
            type: 'text',
            text: 'D3의 트랜지션은 속성 값의 변화를 부드러운 애니메이션으로 보간합니다. .transition()을 체인에 추가하면 이후의 .attr()이나 .style() 변경이 점진적으로 적용됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 막대가 아래에서 올라오는 애니메이션
svg.selectAll('rect')
  .data(data)
  .join('rect')
    .attr('x', (d, i) => xScale(d.label))
    .attr('width', xScale.bandwidth())
    .attr('y', innerHeight)       // 시작: 바닥
    .attr('height', 0)             // 시작: 높이 0
    .attr('fill', '#6366f1')
  .transition()
    .duration(800)                 // 800ms 동안
    .delay((d, i) => i * 100)     // 각 막대 100ms씩 지연
    .ease(d3.easeBackOut)          // 이징 함수
    .attr('y', d => yScale(d.value))          // 끝: 데이터 위치
    .attr('height', d => innerHeight - yScale(d.value)); // 끝: 데이터 높이`,
          },
          {
            type: 'heading',
            text: '외부 데이터 로드',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// CSV 파일 로드 (자동으로 파싱)
const csvData = await d3.csv('/data/sales.csv', (d) => ({
  month: d.month,
  revenue: +d.revenue,  // 문자열 → 숫자 변환
}));

// JSON 파일 로드
const jsonData = await d3.json('/data/countries.json');

// 로드한 데이터로 시각화
console.log(csvData);  // [{month: "1월", revenue: 150}, ...]`,
          },
          {
            type: 'list',
            items: [
              '.transition() — 이후 속성 변경을 애니메이션으로 처리',
              '.duration(ms) — 애니메이션 지속 시간',
              '.delay(ms | fn) — 시작 전 지연 시간 (함수로 각 요소별 지연 가능)',
              '.ease(fn) — d3.easeLinear, d3.easeBounce, d3.easeBackOut 등',
              'd3.csv(url, row) — CSV 로드 및 행 변환 함수 적용',
              'd3.json(url) — JSON 데이터 비동기 로드',
            ],
          },
          {
            type: 'tip',
            text: 'D3의 .join() 메서드(v5.8+)는 enter/update/exit 패턴을 간결하게 처리합니다. .data(newData).join("rect")만으로 추가/갱신/제거가 자동 처리됩니다.',
          },
        ],
      },

      // ── Lesson 3-d: 트랜지션과 애니메이션 ──
      {
        slug: 'transitions-animations',
        title: '트랜지션과 애니메이션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'D3 트랜지션 심화',
          },
          {
            type: 'text',
            text: 'D3의 트랜지션 시스템은 데이터 변화를 시각적으로 부드럽게 전달하는 핵심 도구입니다. 단순히 속성을 변경하는 것이 아니라, 시간에 따라 점진적으로 보간(interpolation)하여 자연스러운 애니메이션을 만듭니다.',
          },
          {
            type: 'heading',
            text: '기본 트랜지션 패턴',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 기본 트랜지션: 색상과 크기 변화
d3.select('#myCircle')
  .transition()
  .duration(1000)          // 1초 동안
  .ease(d3.easeElasticOut) // 탄성 이징
  .attr('r', 50)           // 반지름 50으로
  .attr('fill', '#e74c3c') // 빨간색으로
  .attr('cx', 300);        // 오른쪽으로 이동

// 트랜지션 체이닝: 순차 애니메이션
d3.select('#myRect')
  .transition()
  .duration(500)
  .attr('width', 200)
  .attr('fill', '#3498db')
  .transition()             // 첫 번째 트랜지션 후 실행
  .duration(500)
  .attr('height', 100)
  .attr('fill', '#2ecc71')
  .transition()
  .duration(300)
  .attr('opacity', 0.7);`,
          },
          {
            type: 'heading',
            text: '이징 함수 (Easing Functions)',
          },
          {
            type: 'text',
            text: '이징 함수는 애니메이션의 가속/감속 패턴을 결정합니다. D3는 다양한 내장 이징 함수를 제공하며, 커스텀 이징도 만들 수 있습니다.',
          },
          {
            type: 'list',
            items: [
              'd3.easeLinear — 일정한 속도 (기본)',
              'd3.easeCubicInOut — 부드러운 시작과 끝 (가장 자연스러움)',
              'd3.easeBounceOut — 바운스 효과 (바닥에 튕기는 느낌)',
              'd3.easeElasticOut — 탄성 효과 (스프링처럼)',
              'd3.easeBackOut — 살짝 넘어갔다 돌아오는 효과',
              'd3.easeCircleInOut — 원형 가감속',
              'd3.easeQuadIn — 점점 빨라지는 효과',
              'd3.easeExpOut — 급격히 감속하는 효과',
            ],
          },
          {
            type: 'heading',
            text: '데이터 업데이트 애니메이션',
          },
          {
            type: 'text',
            text: 'D3의 가장 강력한 패턴 중 하나는 데이터가 변경될 때 enter/update/exit를 트랜지션과 결합하는 것입니다. 새 데이터는 등장 애니메이션으로, 기존 데이터는 위치/크기 전환으로, 삭제된 데이터는 사라지는 애니메이션으로 처리합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `function updateChart(newData) {
  var bars = svg.selectAll('rect')
    .data(newData, function(d) { return d.id; });  // key 함수로 데이터 매칭

  // EXIT: 삭제되는 요소 — 페이드아웃 후 제거
  bars.exit()
    .transition()
    .duration(300)
    .attr('opacity', 0)
    .attr('width', 0)
    .remove();

  // ENTER: 새로 추가되는 요소 — 아래에서 올라옴
  var enter = bars.enter()
    .append('rect')
    .attr('x', function(d) { return xScale(d.label); })
    .attr('y', innerHeight)
    .attr('width', xScale.bandwidth())
    .attr('height', 0)
    .attr('fill', '#6366f1')
    .attr('opacity', 0);

  // ENTER + UPDATE: 모든 요소에 트랜지션 적용
  enter.merge(bars)
    .transition()
    .duration(800)
    .delay(function(d, i) { return i * 50; })
    .ease(d3.easeCubicOut)
    .attr('x', function(d) { return xScale(d.label); })
    .attr('y', function(d) { return yScale(d.value); })
    .attr('width', xScale.bandwidth())
    .attr('height', function(d) { return innerHeight - yScale(d.value); })
    .attr('opacity', 1);
}`,
          },
          {
            type: 'heading',
            text: '인터랙티브 애니메이션',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 마우스 호버 시 강조 효과
svg.selectAll('rect')
  .on('mouseover', function(event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('fill', '#f59e0b')
      .attr('transform', 'scale(1.05)');

    // 툴팁 표시
    tooltip
      .style('opacity', 1)
      .html(d.label + ': ' + d.value)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 20) + 'px');
  })
  .on('mouseout', function() {
    d3.select(this)
      .transition()
      .duration(300)
      .attr('fill', '#6366f1')
      .attr('transform', 'scale(1)');

    tooltip.style('opacity', 0);
  });

// 클릭 시 줌 인/아웃
svg.selectAll('circle')
  .on('click', function(event, d) {
    var isZoomed = d3.select(this).classed('zoomed');

    d3.select(this)
      .classed('zoomed', !isZoomed)
      .transition()
      .duration(500)
      .ease(d3.easeBackOut)
      .attr('r', isZoomed ? 5 : 15)
      .attr('stroke-width', isZoomed ? 1 : 3);
  });`,
          },
          {
            type: 'heading',
            text: '커스텀 보간(Interpolation)',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 숫자 보간
d3.select('#counter')
  .transition()
  .duration(2000)
  .tween('text', function() {
    var self = this;
    var i = d3.interpolateNumber(0, 1000);
    return function(t) {
      self.textContent = Math.round(i(t)).toLocaleString();
    };
  });

// 색상 보간
var colorInterp = d3.interpolateRgb('#3498db', '#e74c3c');
console.log(colorInterp(0));   // rgb(52, 152, 219) — 시작
console.log(colorInterp(0.5)); // rgb(154, 126, 127) — 중간
console.log(colorInterp(1));   // rgb(231, 76, 60) — 끝`,
          },
          {
            type: 'tip',
            text: 'd3.interpolate()는 두 값 사이의 보간 함수를 자동으로 선택합니다. 숫자, 색상, 문자열, 배열, 객체 등 다양한 타입을 자동 감지하여 적절한 보간을 수행합니다.',
          },
        ],
      },

      // ── Lesson 3-e: 레이아웃 ──
      {
        slug: 'layouts',
        title: '레이아웃 (트리, 포스, 파이)',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'D3 레이아웃이란?',
          },
          {
            type: 'text',
            text: 'D3 레이아웃은 원본 데이터를 특정 시각화 형태에 맞는 좌표와 크기로 변환하는 알고리즘입니다. 데이터를 넣으면 시각화에 필요한 x, y 좌표, 크기, 각도 등을 자동으로 계산해 줍니다.',
          },
          {
            type: 'heading',
            text: '트리 레이아웃 (Tree Layout)',
          },
          {
            type: 'text',
            text: '트리 레이아웃은 계층 구조 데이터를 트리 형태로 시각화합니다. 조직도, 파일 시스템, 카테고리 분류 등에 적합합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 계층 구조 데이터
var treeData = {
  name: 'CEO',
  children: [
    {
      name: 'CTO',
      children: [
        { name: '프론트엔드팀' },
        { name: '백엔드팀' },
        { name: 'DevOps팀' },
      ],
    },
    {
      name: 'CFO',
      children: [
        { name: '재무팀' },
        { name: '회계팀' },
      ],
    },
    {
      name: 'CMO',
      children: [
        { name: '마케팅팀' },
        { name: '영업팀' },
      ],
    },
  ],
};

var width = 600, height = 400;
var svg = d3.select('#tree')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var g = svg.append('g')
  .attr('transform', 'translate(50, 30)');

// 계층 구조 생성
var root = d3.hierarchy(treeData);

// 트리 레이아웃 적용
var treeLayout = d3.tree()
  .size([width - 100, height - 80]);

treeLayout(root);

// 연결선 그리기
g.selectAll('.link')
  .data(root.links())
  .join('path')
  .attr('class', 'link')
  .attr('d', d3.linkVertical()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; }))
  .attr('fill', 'none')
  .attr('stroke', '#999')
  .attr('stroke-width', 1.5);

// 노드 그리기
var nodes = g.selectAll('.node')
  .data(root.descendants())
  .join('g')
  .attr('class', 'node')
  .attr('transform', function(d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  });

nodes.append('circle')
  .attr('r', 6)
  .attr('fill', function(d) {
    return d.children ? '#4f46e5' : '#10b981';
  });

nodes.append('text')
  .attr('dy', -12)
  .attr('text-anchor', 'middle')
  .attr('font-size', '12px')
  .text(function(d) { return d.data.name; });`,
          },
          {
            type: 'heading',
            text: '포스 레이아웃 (Force Layout)',
          },
          {
            type: 'text',
            text: '포스 레이아웃은 물리 시뮬레이션을 사용하여 노드를 배치합니다. 노드 사이의 인력과 척력으로 자연스러운 네트워크 그래프를 만듭니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `var nodes = [
  { id: 'React', group: 1 },
  { id: 'Vue', group: 1 },
  { id: 'Angular', group: 1 },
  { id: 'Node.js', group: 2 },
  { id: 'Express', group: 2 },
  { id: 'Next.js', group: 3 },
  { id: 'Nuxt', group: 3 },
  { id: 'TypeScript', group: 4 },
];

var links = [
  { source: 'React', target: 'Next.js' },
  { source: 'Vue', target: 'Nuxt' },
  { source: 'Node.js', target: 'Express' },
  { source: 'React', target: 'TypeScript' },
  { source: 'Vue', target: 'TypeScript' },
  { source: 'Angular', target: 'TypeScript' },
  { source: 'Next.js', target: 'Node.js' },
];

var width = 500, height = 400;
var svg = d3.select('#force')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// 포스 시뮬레이션 생성
var simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(function(d) { return d.id; }).distance(80))
  .force('charge', d3.forceManyBody().strength(-200))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(30));

// 연결선
var link = svg.selectAll('.link')
  .data(links)
  .join('line')
  .attr('stroke', '#999')
  .attr('stroke-opacity', 0.6)
  .attr('stroke-width', 2);

// 노드
var node = svg.selectAll('.node')
  .data(nodes)
  .join('g');

node.append('circle')
  .attr('r', 15)
  .attr('fill', function(d) { return colorScale(d.group); })
  .attr('stroke', '#fff')
  .attr('stroke-width', 2);

node.append('text')
  .text(function(d) { return d.id; })
  .attr('text-anchor', 'middle')
  .attr('dy', 30)
  .attr('font-size', '11px');

// 시뮬레이션 갱신
simulation.on('tick', function() {
  link
    .attr('x1', function(d) { return d.source.x; })
    .attr('y1', function(d) { return d.source.y; })
    .attr('x2', function(d) { return d.target.x; })
    .attr('y2', function(d) { return d.target.y; });

  node.attr('transform', function(d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  });
});`,
          },
          {
            type: 'heading',
            text: '파이 레이아웃 (Pie Layout)',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `var data = [
  { label: 'JavaScript', value: 40 },
  { label: 'TypeScript', value: 30 },
  { label: 'Python', value: 20 },
  { label: 'Go', value: 10 },
];

var width = 400, height = 400;
var radius = Math.min(width, height) / 2;

var svg = d3.select('#pie')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

var color = d3.scaleOrdinal()
  .domain(data.map(function(d) { return d.label; }))
  .range(d3.schemeSet2);

// 파이 레이아웃
var pie = d3.pie()
  .value(function(d) { return d.value; })
  .sort(null);

// 호(arc) 생성기
var arc = d3.arc()
  .innerRadius(0)          // 0이면 파이, > 0이면 도넛
  .outerRadius(radius - 20);

var labelArc = d3.arc()
  .innerRadius(radius - 60)
  .outerRadius(radius - 60);

// 파이 조각 그리기
svg.selectAll('.slice')
  .data(pie(data))
  .join('path')
  .attr('d', arc)
  .attr('fill', function(d) { return color(d.data.label); })
  .attr('stroke', '#fff')
  .attr('stroke-width', 2);

// 라벨 추가
svg.selectAll('.label')
  .data(pie(data))
  .join('text')
  .attr('transform', function(d) {
    return 'translate(' + labelArc.centroid(d) + ')';
  })
  .attr('text-anchor', 'middle')
  .attr('font-size', '13px')
  .text(function(d) { return d.data.label; });`,
          },
          {
            type: 'list',
            items: [
              'd3.hierarchy() — 원시 데이터를 계층 구조 객체로 변환',
              'd3.tree() — 트리 레이아웃 (정돈된 수직/수평 트리)',
              'd3.cluster() — 클러스터 레이아웃 (리프 노드가 같은 깊이)',
              'd3.treemap() — 트리맵 (면적 비례 사각형)',
              'd3.pack() — 원형 패킹 레이아웃',
              'd3.forceSimulation() — 물리 기반 포스 레이아웃',
              'd3.pie() — 파이/도넛 레이아웃',
              'd3.arc() — 호(arc) 경로 생성기',
            ],
          },
          {
            type: 'tip',
            text: '포스 레이아웃에 d3.drag()를 추가하면 사용자가 노드를 드래그하여 재배치할 수 있습니다. node.call(d3.drag().on("start", ...).on("drag", ...).on("end", ...)) 패턴으로 구현합니다.',
          },
        ],
      },

      // ── Lesson 3-f: 지리 데이터와 지도 ──
      {
        slug: 'geo-maps',
        title: '지리 데이터와 지도',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'D3로 지도 시각화하기',
          },
          {
            type: 'text',
            text: 'D3는 지리 데이터(GeoJSON, TopoJSON)를 기반으로 인터랙티브 지도를 만드는 강력한 기능을 제공합니다. 투영법(projection)을 사용하여 구체 위의 좌표를 2D 평면에 매핑하고, 다양한 시각적 효과를 적용할 수 있습니다.',
          },
          {
            type: 'heading',
            text: 'GeoJSON 데이터 구조',
          },
          {
            type: 'text',
            text: 'GeoJSON은 지리 공간 데이터를 표현하는 표준 JSON 형식입니다. 각 feature는 geometry(점, 선, 다각형)와 properties(속성 데이터)로 구성됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// GeoJSON 구조 예시
var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "서울특별시",
        "population": 9700000,
        "code": "11"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[126.7, 37.4], [127.2, 37.4], /* ... */]]
      }
    },
    // ... 다른 지역들
  ]
};`,
          },
          {
            type: 'heading',
            text: '투영법 (Projection)',
          },
          {
            type: 'text',
            text: '투영법은 지구(3D)의 좌표를 화면(2D)의 좌표로 변환하는 방법입니다. D3는 수십 가지 투영법을 제공하며, 목적에 따라 적절한 것을 선택합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `var width = 600, height = 500;

// 메르카토르 투영법 (일반적인 웹 지도)
var projection = d3.geoMercator()
  .center([127.5, 36.0])        // 대한민국 중심 좌표
  .scale(5000)                   // 확대 비율
  .translate([width / 2, height / 2]);  // 화면 중앙에 배치

// 경로 생성기: 투영된 좌표를 SVG path로 변환
var pathGenerator = d3.geoPath()
  .projection(projection);

var svg = d3.select('#map')
  .append('svg')
  .attr('width', width)
  .attr('height', height);`,
          },
          {
            type: 'heading',
            text: '지도 그리기',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// GeoJSON 데이터 로드 및 지도 그리기
d3.json('/data/korea.geojson').then(function(geoData) {

  // 색상 스케일 (인구 기준)
  var colorScale = d3.scaleQuantize()
    .domain([0, 10000000])
    .range(d3.schemeBlues[7]);

  // 지역 경로 그리기
  svg.selectAll('.region')
    .data(geoData.features)
    .join('path')
    .attr('class', 'region')
    .attr('d', pathGenerator)
    .attr('fill', function(d) {
      return colorScale(d.properties.population);
    })
    .attr('stroke', '#fff')
    .attr('stroke-width', 0.5)
    .on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('stroke-width', 2)
        .attr('stroke', '#333');

      tooltip.style('opacity', 1)
        .html(
          d.properties.name + '<br>' +
          '인구: ' + d.properties.population.toLocaleString() + '명'
        )
        .style('left', (event.pageX + 15) + 'px')
        .style('top', (event.pageY - 10) + 'px');
    })
    .on('mouseout', function() {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('stroke-width', 0.5)
        .attr('stroke', '#fff');

      tooltip.style('opacity', 0);
    });

  // 범례 추가
  var legend = svg.append('g')
    .attr('transform', 'translate(20, 350)');

  var legendScale = d3.scaleLinear()
    .domain([0, 10000000])
    .range([0, 200]);

  var legendAxis = d3.axisBottom(legendScale)
    .ticks(5)
    .tickFormat(function(d) { return d / 10000 + '만'; });

  legend.append('g')
    .attr('transform', 'translate(0, 20)')
    .call(legendAxis);
});`,
          },
          {
            type: 'heading',
            text: '주요 투영법 종류',
          },
          {
            type: 'list',
            items: [
              'd3.geoMercator() — 메르카토르 (웹 지도 표준, 고위도 왜곡)',
              'd3.geoAlbers() — 알베르스 정적 원추 (미국 지도에 적합)',
              'd3.geoEquirectangular() — 정거원통 (단순, 교육용)',
              'd3.geoOrthographic() — 정사 투영 (지구본 느낌)',
              'd3.geoNaturalEarth1() — 자연스러운 세계 지도',
              'd3.geoConicEqualArea() — 정적 원추 (면적 보존)',
            ],
          },
          {
            type: 'heading',
            text: '줌과 패닝',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 줌/패닝 기능 추가
var zoom = d3.zoom()
  .scaleExtent([1, 8])     // 줌 범위: 1배 ~ 8배
  .on('zoom', function(event) {
    svg.selectAll('path')
      .attr('transform', event.transform);
  });

svg.call(zoom);

// 특정 지역으로 줌 인
function zoomToRegion(feature) {
  var bounds = pathGenerator.bounds(feature);
  var dx = bounds[1][0] - bounds[0][0];
  var dy = bounds[1][1] - bounds[0][1];
  var x = (bounds[0][0] + bounds[1][0]) / 2;
  var y = (bounds[0][1] + bounds[1][1]) / 2;
  var scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height)));
  var translate = [width / 2 - scale * x, height / 2 - scale * y];

  svg.transition()
    .duration(750)
    .call(zoom.transform, d3.zoomIdentity
      .translate(translate[0], translate[1])
      .scale(scale));
}`,
          },
          {
            type: 'heading',
            text: '포인트 데이터 표시',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 도시 위치에 원형 마커 표시
var cities = [
  { name: '서울', lat: 37.5665, lon: 126.9780, value: 9700 },
  { name: '부산', lat: 35.1796, lon: 129.0756, value: 3400 },
  { name: '인천', lat: 37.4563, lon: 126.7052, value: 2900 },
  { name: '대구', lat: 35.8714, lon: 128.6014, value: 2400 },
  { name: '대전', lat: 36.3504, lon: 127.3845, value: 1500 },
];

var sizeScale = d3.scaleSqrt()
  .domain([0, 10000])
  .range([3, 20]);

svg.selectAll('.city')
  .data(cities)
  .join('circle')
  .attr('class', 'city')
  .attr('cx', function(d) { return projection([d.lon, d.lat])[0]; })
  .attr('cy', function(d) { return projection([d.lon, d.lat])[1]; })
  .attr('r', function(d) { return sizeScale(d.value); })
  .attr('fill', 'rgba(231, 76, 60, 0.6)')
  .attr('stroke', '#c0392b')
  .attr('stroke-width', 1);`,
          },
          {
            type: 'tip',
            text: 'TopoJSON은 GeoJSON을 압축한 형식으로, 파일 크기가 훨씬 작습니다. topojson.feature()로 GeoJSON으로 변환하여 사용합니다. npm install topojson-client로 설치할 수 있습니다.',
          },
        ],
      },

      // ── Lesson 3-g: 실전: 인터랙티브 데이터 시각화 ──
      {
        slug: 'practical-project',
        title: '실전: 인터랙티브 데이터 시각화',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '실전 프로젝트: 인터랙티브 데이터 대시보드',
          },
          {
            type: 'text',
            text: '지금까지 배운 D3.js 기능을 종합하여 인터랙티브 데이터 시각화 대시보드를 구축합니다. 막대 차트, 선 차트, 파이 차트를 결합하고 필터링, 트랜지션, 툴팁 등을 구현합니다.',
          },
          {
            type: 'heading',
            text: '1단계: 프로젝트 구조 설정',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 대시보드 설정
var config = {
  width: 900,
  height: 500,
  margin: { top: 40, right: 30, bottom: 50, left: 60 },
};

config.innerWidth = config.width - config.margin.left - config.margin.right;
config.innerHeight = config.height - config.margin.top - config.margin.bottom;

// 데이터
var dataset = [
  { month: '1월', sales: 150, target: 120, category: 'A' },
  { month: '2월', sales: 230, target: 200, category: 'B' },
  { month: '3월', sales: 180, target: 150, category: 'A' },
  { month: '4월', sales: 310, target: 280, category: 'C' },
  { month: '5월', sales: 270, target: 250, category: 'B' },
  { month: '6월', sales: 350, target: 300, category: 'A' },
  { month: '7월', sales: 290, target: 270, category: 'C' },
  { month: '8월', sales: 400, target: 350, category: 'B' },
  { month: '9월', sales: 330, target: 310, category: 'A' },
  { month: '10월', sales: 450, target: 400, category: 'C' },
  { month: '11월', sales: 380, target: 350, category: 'B' },
  { month: '12월', sales: 500, target: 450, category: 'A' },
];`,
          },
          {
            type: 'heading',
            text: '2단계: 메인 막대 차트 생성',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// SVG 컨테이너
var svg = d3.select('#dashboard')
  .append('svg')
  .attr('width', config.width)
  .attr('height', config.height);

var chartGroup = svg.append('g')
  .attr('transform',
    'translate(' + config.margin.left + ',' + config.margin.top + ')');

// 스케일
var xScale = d3.scaleBand()
  .domain(dataset.map(function(d) { return d.month; }))
  .range([0, config.innerWidth])
  .padding(0.3);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(d) { return d.sales; }) * 1.1])
  .range([config.innerHeight, 0])
  .nice();

var categoryColor = d3.scaleOrdinal()
  .domain(['A', 'B', 'C'])
  .range(['#6366f1', '#10b981', '#f59e0b']);

// 축
chartGroup.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0,' + config.innerHeight + ')')
  .call(d3.axisBottom(xScale));

chartGroup.append('g')
  .attr('class', 'y-axis')
  .call(d3.axisLeft(yScale).ticks(8)
    .tickFormat(function(d) { return d + '만원'; }));

// 제목
svg.append('text')
  .attr('x', config.width / 2)
  .attr('y', 25)
  .attr('text-anchor', 'middle')
  .attr('font-size', '18px')
  .attr('font-weight', 'bold')
  .text('월별 매출 분석 대시보드');`,
          },
          {
            type: 'heading',
            text: '3단계: 인터랙티브 막대 그리기',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 툴팁 요소
var tooltip = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('position', 'absolute')
  .style('padding', '10px 14px')
  .style('background', 'rgba(0, 0, 0, 0.85)')
  .style('color', '#fff')
  .style('border-radius', '6px')
  .style('font-size', '13px')
  .style('pointer-events', 'none')
  .style('opacity', 0);

// 목표선 그리기
var targetLine = d3.line()
  .x(function(d) { return xScale(d.month) + xScale.bandwidth() / 2; })
  .y(function(d) { return yScale(d.target); })
  .curve(d3.curveMonotoneX);

chartGroup.append('path')
  .datum(dataset)
  .attr('d', targetLine)
  .attr('fill', 'none')
  .attr('stroke', '#ef4444')
  .attr('stroke-width', 2)
  .attr('stroke-dasharray', '6,4');

// 막대 그리기 (애니메이션 포함)
chartGroup.selectAll('.bar')
  .data(dataset)
  .join('rect')
  .attr('class', 'bar')
  .attr('x', function(d) { return xScale(d.month); })
  .attr('width', xScale.bandwidth())
  .attr('y', config.innerHeight)
  .attr('height', 0)
  .attr('fill', function(d) { return categoryColor(d.category); })
  .attr('rx', 3)
  .on('mouseover', function(event, d) {
    d3.select(this)
      .transition().duration(150)
      .attr('opacity', 0.8);

    var diff = d.sales - d.target;
    var status = diff >= 0 ? '달성' : '미달';

    tooltip.transition().duration(200).style('opacity', 1);
    tooltip.html(
      '<strong>' + d.month + '</strong><br>' +
      '매출: ' + d.sales + '만원<br>' +
      '목표: ' + d.target + '만원<br>' +
      '차이: ' + (diff >= 0 ? '+' : '') + diff + '만원 (' + status + ')'
    )
    .style('left', (event.pageX + 15) + 'px')
    .style('top', (event.pageY - 20) + 'px');
  })
  .on('mouseout', function() {
    d3.select(this)
      .transition().duration(150)
      .attr('opacity', 1);
    tooltip.transition().duration(300).style('opacity', 0);
  })
  // 등장 애니메이션
  .transition()
  .duration(800)
  .delay(function(d, i) { return i * 60; })
  .ease(d3.easeCubicOut)
  .attr('y', function(d) { return yScale(d.sales); })
  .attr('height', function(d) {
    return config.innerHeight - yScale(d.sales);
  });`,
          },
          {
            type: 'heading',
            text: '4단계: 카테고리 필터 구현',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 필터 버튼 생성
var categories = ['전체', 'A', 'B', 'C'];

var filterGroup = d3.select('#filters');

filterGroup.selectAll('.filter-btn')
  .data(categories)
  .join('button')
  .attr('class', 'filter-btn')
  .style('padding', '6px 16px')
  .style('margin', '0 4px')
  .style('border', '1px solid #ddd')
  .style('border-radius', '4px')
  .style('cursor', 'pointer')
  .style('background', function(d) {
    return d === '전체' ? '#6366f1' : '#fff';
  })
  .style('color', function(d) {
    return d === '전체' ? '#fff' : '#333';
  })
  .text(function(d) {
    return d === '전체' ? '전체 보기' : '카테고리 ' + d;
  })
  .on('click', function(event, category) {
    // 버튼 스타일 업데이트
    filterGroup.selectAll('.filter-btn')
      .style('background', '#fff')
      .style('color', '#333');
    d3.select(this)
      .style('background', '#6366f1')
      .style('color', '#fff');

    // 필터링된 데이터
    var filtered = category === '전체'
      ? dataset
      : dataset.filter(function(d) { return d.category === category; });

    // 차트 업데이트 (트랜지션)
    updateBars(filtered);
  });

function updateBars(data) {
  // 스케일 업데이트
  xScale.domain(data.map(function(d) { return d.month; }));
  yScale.domain([0, d3.max(data, function(d) { return d.sales; }) * 1.1]).nice();

  // 축 애니메이션
  chartGroup.select('.x-axis')
    .transition().duration(500)
    .call(d3.axisBottom(xScale));

  chartGroup.select('.y-axis')
    .transition().duration(500)
    .call(d3.axisLeft(yScale).ticks(8)
      .tickFormat(function(d) { return d + '만원'; }));

  // 막대 업데이트
  var bars = chartGroup.selectAll('.bar').data(data, function(d) { return d.month; });

  bars.exit()
    .transition().duration(300)
    .attr('y', config.innerHeight)
    .attr('height', 0)
    .attr('opacity', 0)
    .remove();

  bars.enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function(d) { return xScale(d.month); })
    .attr('width', xScale.bandwidth())
    .attr('y', config.innerHeight)
    .attr('height', 0)
    .attr('fill', function(d) { return categoryColor(d.category); })
    .attr('rx', 3)
    .merge(bars)
    .transition().duration(600)
    .attr('x', function(d) { return xScale(d.month); })
    .attr('width', xScale.bandwidth())
    .attr('y', function(d) { return yScale(d.sales); })
    .attr('height', function(d) {
      return config.innerHeight - yScale(d.sales);
    })
    .attr('opacity', 1);
}`,
          },
          {
            type: 'tip',
            text: '실전 프로젝트에서는 데이터 로딩(d3.csv/json), 반응형 디자인(ResizeObserver), 접근성(aria 속성) 등을 추가로 고려해야 합니다. 재사용 가능한 차트 컴포넌트로 만들면 유지보수가 편리합니다.',
          },
        ],
      },

      // ── Lesson 3-h: D3.js 레퍼런스 ──
      {
        slug: 'reference',
        title: 'D3.js 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'D3.js 모듈 구조',
          },
          {
            type: 'text',
            text: 'D3 v7은 30개 이상의 독립 모듈로 구성되어 있습니다. 필요한 모듈만 개별적으로 설치하여 번들 크기를 줄일 수 있습니다. 아래는 가장 자주 사용되는 핵심 모듈들입니다.',
          },
          {
            type: 'list',
            items: [
              'd3-selection — DOM 선택 및 조작 (select, selectAll, append, attr, style)',
              'd3-scale — 스케일 함수 (scaleLinear, scaleBand, scaleOrdinal 등)',
              'd3-axis — 축 생성기 (axisBottom, axisLeft, axisRight, axisTop)',
              'd3-shape — 도형 생성기 (line, area, arc, pie, stack)',
              'd3-transition — 트랜지션 (transition, duration, ease, delay)',
              'd3-array — 배열 유틸리티 (max, min, extent, sum, mean, group)',
              'd3-fetch — 데이터 로드 (csv, json, text, xml)',
              'd3-force — 포스 레이아웃 (forceSimulation, forceLink, forceManyBody)',
              'd3-hierarchy — 계층 구조 (hierarchy, tree, treemap, pack)',
              'd3-geo — 지리 (geoPath, geoMercator, geoAlbers)',
              'd3-zoom — 줌 및 패닝 (zoom, zoomIdentity)',
              'd3-drag — 드래그 인터랙션 (drag)',
              'd3-color — 색상 조작 (rgb, hsl, interpolateRgb)',
              'd3-interpolate — 보간 (interpolateNumber, interpolateString)',
              'd3-time-format — 날짜 형식 (timeFormat, timeParse)',
            ],
          },
          {
            type: 'heading',
            text: '선택(Selection) API 레퍼런스',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 선택
d3.select('selector')        // 첫 번째 요소 선택
d3.selectAll('selector')     // 모든 요소 선택
selection.select('selector') // 자식 중 첫 번째
selection.selectAll('sel')   // 자식 중 모두
selection.filter(fn)         // 조건에 맞는 요소만
selection.merge(other)       // 두 선택 합치기

// 조작
selection.attr('name', value)     // 속성 설정/읽기
selection.style('name', value)    // CSS 스타일 설정/읽기
selection.classed('name', bool)   // CSS 클래스 추가/제거
selection.property('name', value) // DOM 프로퍼티 설정
selection.text(value)             // 텍스트 콘텐츠
selection.html(value)             // HTML 콘텐츠

// 데이터 바인딩
selection.data(array, keyFn)  // 데이터 바인딩
selection.enter()             // 새 데이터용 가상 선택
selection.exit()              // 제거 대상 선택
selection.join(enter, update, exit) // 한 번에 처리 (v5.8+)
selection.datum(value)        // 단일 데이터 바인딩

// 요소 추가/제거
selection.append('tag')       // 자식 요소 추가
selection.insert('tag', 'before') // 특정 위치에 삽입
selection.remove()            // 요소 제거
selection.clone(deep)         // 요소 복제

// 이벤트
selection.on('event', handler) // 이벤트 리스너
selection.dispatch('event')    // 이벤트 발생

// 기타
selection.each(fn)            // 각 요소에 함수 실행
selection.call(fn)            // 선택 자체를 함수에 전달
selection.empty()             // 선택이 비어있는지
selection.size()              // 선택된 요소 수
selection.node()              // 첫 번째 DOM 노드 반환
selection.nodes()             // 모든 DOM 노드 배열`,
          },
          {
            type: 'heading',
            text: '스케일 API 레퍼런스',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 연속형 스케일
d3.scaleLinear()      // 선형 매핑
d3.scalePow()         // 거듭제곱 매핑
d3.scaleSqrt()        // 제곱근 매핑 (면적 비례 시)
d3.scaleLog()         // 로그 매핑
d3.scaleTime()        // 시간 데이터용

// 범주형 스케일
d3.scaleBand()        // 막대 차트용 (균등 띠)
d3.scalePoint()       // 점 차트용 (균등 점)
d3.scaleOrdinal()     // 이산 매핑 (색상 등)

// 공통 메서드
scale.domain([min, max])   // 입력 범위
scale.range([min, max])    // 출력 범위
scale.nice()               // 깔끔한 경계값으로 조정
scale.clamp(true)          // 범위 밖 값 제한
scale.invert(value)        // 역변환 (출력 → 입력)
scale.ticks(count)         // 눈금값 배열 생성

// 색상 스케일
d3.scaleSequential(d3.interpolateViridis)
d3.scaleQuantize()    // 연속 → 이산
d3.scaleThreshold()   // 임계값 기반`,
          },
          {
            type: 'heading',
            text: '도형 생성기 레퍼런스',
          },
          {
            type: 'list',
            items: [
              'd3.line() — 꺾은선 경로 생성 (.x(), .y(), .curve())',
              'd3.area() — 영역 경로 생성 (.x(), .y0(), .y1())',
              'd3.arc() — 호(파이/도넛 조각) 생성 (.innerRadius(), .outerRadius())',
              'd3.pie() — 파이 레이아웃 데이터 변환 (.value(), .sort())',
              'd3.stack() — 스택 레이아웃 (.keys(), .order(), .offset())',
              'd3.symbol() — 심볼(마커) 생성 (.type(), .size())',
              'd3.linkVertical() / d3.linkHorizontal() — 트리 연결선',
            ],
          },
          {
            type: 'heading',
            text: '트랜지션 API 레퍼런스',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 트랜지션 생성
selection.transition()          // 트랜지션 시작
selection.transition('name')    // 이름 있는 트랜지션

// 설정
.duration(ms)       // 지속 시간
.delay(ms | fn)     // 지연 시간
.ease(easeFn)       // 이징 함수

// 이징 함수 모음
d3.easeLinear        d3.easeCubicInOut
d3.easeQuadIn        d3.easeQuadOut
d3.easeBounceOut     d3.easeElasticOut
d3.easeBackOut       d3.easeCircleInOut
d3.easeExpIn         d3.easeSinInOut

// 콜백
.on('start', fn)    // 시작 시
.on('end', fn)      // 종료 시
.on('interrupt', fn) // 중단 시

// 속성 변화
.attr('name', value)     // 속성 보간
.style('name', value)    // 스타일 보간
.attrTween('name', fn)   // 커스텀 속성 보간
.styleTween('name', fn)  // 커스텀 스타일 보간
.tween('name', fn)       // 범용 커스텀 보간

// 체이닝
.transition()       // 다음 트랜지션 연결 (순차 실행)
.selection()        // 원래 선택으로 돌아가기`,
          },
          {
            type: 'heading',
            text: '유용한 배열 유틸리티',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 통계
d3.min(array, accessor)     // 최솟값
d3.max(array, accessor)     // 최댓값
d3.extent(array, accessor)  // [최솟값, 최댓값]
d3.sum(array, accessor)     // 합계
d3.mean(array, accessor)    // 평균
d3.median(array, accessor)  // 중앙값
d3.deviation(array)         // 표준편차

// 검색/변환
d3.group(array, keyFn)      // Map으로 그룹화
d3.rollup(array, reduceFn, keyFn)  // 그룹 + 집계
d3.sort(array, comparator)  // 정렬
d3.ascending(a, b)          // 오름차순 비교 함수
d3.descending(a, b)         // 내림차순 비교 함수

// 생성
d3.range(start, stop, step) // 숫자 배열 생성
d3.ticks(start, stop, count) // 균등 눈금 배열
d3.pairs(array)             // 인접 쌍 배열`,
          },
          {
            type: 'heading',
            text: '자주 사용하는 패턴 정리',
          },
          {
            type: 'list',
            items: [
              'Margin Convention — SVG 안에 g 요소 + translate로 여백 확보',
              'data().join() — enter/update/exit를 간결하게 처리 (D3 v5.8+)',
              'Reusable Chart Pattern — 함수로 감싸 재사용 가능한 차트 생성',
              'Responsive — ResizeObserver로 컨테이너 크기 감지 후 차트 리사이즈',
              'Accessor Pattern — function(d) { return d.value; } 형태로 데이터 접근',
              'Transition Chaining — .transition().transition()으로 순차 애니메이션',
              'Zoom + Pan — d3.zoom()으로 확대/축소/이동 구현',
            ],
          },
          {
            type: 'tip',
            text: 'D3.js 공식 문서(d3js.org)와 Observable(observablehq.com)에서 수천 개의 예제를 확인할 수 있습니다. Mike Bostock의 Observable 노트북에서 D3의 모든 기능을 인터랙티브하게 학습할 수 있습니다.',
          },
        ],
      },
    ],
  },
];
