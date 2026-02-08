import type { Course } from './types';

export const aiCourses: Course[] = [
  {
    slug: 'tensorflow',
    title: 'TensorFlow.js 머신러닝',
    description: '브라우저에서 머신러닝 모델 학습과 추론',
    category: 'ai',
    color: 'bg-amber-600',
    difficulty: 'intermediate',
    objectives: [
      '텐서와 연산 기초',
      '레이어와 모델 구성',
      '모델 학습과 평가',
      '사전학습 모델과 이미지 분류',
      '실전 손글씨 인식과 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'tensors',
        title: '텐서와 연산',
        duration: '15분',
        content: [
          { type: 'text', text: 'TensorFlow.js는 브라우저와 Node.js에서 머신러닝 모델을 학습하고 실행할 수 있는 JavaScript 라이브러리입니다. 핵심 데이터 구조인 텐서(Tensor)는 다차원 배열을 나타내며, GPU 가속을 활용한 수학 연산을 제공합니다.' },
          { type: 'heading', text: '텐서 생성' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';

// 1차원 텐서 (벡터)
const vector = tf.tensor([1, 2, 3, 4]);
vector.print();  // Tensor [1, 2, 3, 4]

// 2차원 텐서 (행렬)
const matrix = tf.tensor([[1, 2], [3, 4]]);
matrix.print();
// Tensor [[1, 2],
//         [3, 4]]

// 스칼라 (단일 값)
const scalar = tf.scalar(3.14);

// 특수 텐서
const zeros = tf.zeros([2, 3]);   // 2x3 영행렬
const ones = tf.ones([3, 3]);     // 3x3 단위값 행렬

// shape와 dtype 확인
console.log(matrix.shape);  // [2, 2]
console.log(matrix.dtype);  // 'float32'` },
          { type: 'heading', text: '텐서 연산' },
          { type: 'code', language: 'javascript', code: `const a = tf.tensor([1, 2, 3]);
const b = tf.tensor([4, 5, 6]);

// 요소별 연산
const sum = a.add(b);        // [5, 7, 9]
const product = a.mul(b);    // [4, 10, 18]

// 행렬 곱
const m1 = tf.tensor2d([[1, 2], [3, 4]]);
const m2 = tf.tensor2d([[5, 6], [7, 8]]);
const matMul = m1.matMul(m2);
matMul.print();
// [[19, 22],
//  [43, 50]]

// 텐서 값을 JavaScript 배열로 변환
const data = await sum.data();
console.log(data);  // Float32Array [5, 7, 9]` },
          { type: 'heading', text: '메모리 관리' },
          { type: 'code', language: 'javascript', code: `// 텐서는 GPU 메모리를 사용하므로 수동 해제가 필요합니다
const tensor = tf.tensor([1, 2, 3]);
// 사용 후 메모리 해제
tensor.dispose();

// tf.tidy()로 자동 메모리 관리 (권장)
const result = tf.tidy(() => {
  const x = tf.tensor([1, 2, 3]);
  const y = tf.tensor([4, 5, 6]);
  // tidy 블록 안에서 생성된 중간 텐서는 자동 해제
  // 반환된 텐서만 유지됨
  return x.add(y);
});

result.print();  // [5, 7, 9]
// result는 나중에 직접 dispose() 해야 합니다` },
          { type: 'tip', text: '`tf.tidy()` 안에서는 중간 계산에 사용된 텐서가 자동으로 해제됩니다. 메모리 누수를 방지하려면 항상 `tf.tidy()`를 사용하세요. 단, `tf.tidy()` 내부에서는 비동기 코드를 사용할 수 없습니다.' },
        ],
      },
      {
        slug: 'building-model',
        title: '모델 구축',
        duration: '20분',
        content: [
          { type: 'text', text: 'TensorFlow.js에서 모델은 입력 데이터를 받아 예측을 출력하는 레이어(층)의 조합입니다. `tf.sequential()`을 사용하면 레이어를 순서대로 쌓아 간단하게 모델을 구축할 수 있습니다.' },
          { type: 'heading', text: 'Sequential 모델 생성' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';

// Sequential 모델: 레이어를 순서대로 쌓는 방식
const model = tf.sequential();

// 첫 번째 레이어에는 반드시 inputShape을 지정
model.add(tf.layers.dense({
  units: 16,            // 뉴런 수
  activation: 'relu',   // 활성화 함수
  inputShape: [4],      // 입력 데이터의 shape (4개 특성)
}));

// 중간 레이어
model.add(tf.layers.dense({
  units: 8,
  activation: 'relu',
}));

// 출력 레이어
model.add(tf.layers.dense({
  units: 3,              // 3개 클래스 분류
  activation: 'softmax', // 확률 분포 출력
}));` },
          { type: 'heading', text: '활성화 함수' },
          { type: 'list', items: [
            '`relu` (Rectified Linear Unit): 음수는 0, 양수는 그대로 출력. 은닉층에서 가장 널리 사용됩니다',
            '`sigmoid`: 출력을 0~1 사이로 압축. 이진 분류의 출력층에 적합합니다',
            '`softmax`: 출력값들의 합이 1이 되는 확률 분포로 변환. 다중 클래스 분류의 출력층에 사용합니다',
            '`tanh`: 출력을 -1~1 사이로 압축. RNN 등에서 사용됩니다',
            '`linear`: 변환 없이 그대로 출력. 회귀 문제의 출력층에 사용합니다',
          ]},
          { type: 'heading', text: '모델 구조 확인' },
          { type: 'code', language: 'javascript', code: `// 모델 구조 요약 출력
model.summary();
// _________________________________________________________________
// Layer (type)                Output shape              Param #
// =================================================================
// dense_Dense1 (Dense)        [null, 16]                80
// dense_Dense2 (Dense)        [null, 8]                 136
// dense_Dense3 (Dense)        [null, 3]                 27
// =================================================================
// Total params: 243
// Trainable params: 243
// Non-trainable params: 0

// 파라미터 수 = (입력 수 × units) + units(바이어스)
// 첫 번째 레이어: (4 × 16) + 16 = 80` },
          { type: 'heading', text: '회귀 모델 예시' },
          { type: 'code', language: 'javascript', code: `// 숫자 하나를 예측하는 회귀 모델
const regressionModel = tf.sequential();

regressionModel.add(tf.layers.dense({
  units: 32,
  activation: 'relu',
  inputShape: [1],  // 입력: 숫자 1개
}));

regressionModel.add(tf.layers.dense({
  units: 1,              // 출력: 숫자 1개
  activation: 'linear',  // 회귀이므로 linear
}));` },
          { type: 'tip', text: '`inputShape`는 첫 번째 레이어에만 지정하면 됩니다. 이후 레이어는 이전 레이어의 출력 shape을 자동으로 추론합니다. `units`는 해당 레이어의 뉴런(노드) 수로, 모델의 학습 용량을 결정합니다.' },
        ],
      },
      {
        slug: 'training',
        title: '학습과 예측',
        duration: '20분',
        content: [
          { type: 'text', text: '모델을 구축한 후에는 `compile`로 학습 설정을 하고, `fit`으로 데이터를 학습시킵니다. 학습이 완료되면 `predict`로 새로운 데이터에 대한 예측을 수행할 수 있습니다.' },
          { type: 'heading', text: '모델 컴파일' },
          { type: 'code', language: 'javascript', code: `// 모델 학습 전에 반드시 컴파일
model.compile({
  optimizer: 'adam',              // 최적화 알고리즘
  loss: 'categoricalCrossentropy', // 손실 함수 (다중 분류)
  metrics: ['accuracy'],          // 평가 지표
});

// 회귀 모델 컴파일
regressionModel.compile({
  optimizer: tf.train.adam(0.01),  // 학습률 직접 지정
  loss: 'meanSquaredError',        // 평균 제곱 오차 (회귀)
});` },
          { type: 'heading', text: '모델 학습 (fit)' },
          { type: 'code', language: 'javascript', code: `// 학습 데이터 준비
const xs = tf.tensor2d([
  [0, 0], [0, 1], [1, 0], [1, 1]
]);
const ys = tf.tensor2d([
  [1, 0], [0, 1], [0, 1], [1, 0]
]);

// 모델 학습
const history = await model.fit(xs, ys, {
  epochs: 100,          // 전체 데이터 반복 횟수
  batchSize: 2,         // 한 번에 처리할 샘플 수
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      // 매 에포크 종료 시 호출
      console.log(
        "에포크 " + (epoch + 1) + ": loss = " + logs.loss.toFixed(4) +
        ", accuracy = " + logs.acc.toFixed(4)
      );
    },
  },
});

// 학습 이력 확인
console.log('최종 손실:', history.history.loss.slice(-1)[0]);` },
          { type: 'heading', text: '예측 수행' },
          { type: 'code', language: 'javascript', code: `// 새로운 데이터로 예측
const input = tf.tensor2d([[0, 1]]);
const prediction = model.predict(input);

prediction.print();
// 예: Tensor [[0.12, 0.88]]  → 두 번째 클래스일 확률 88%

// 예측 결과를 JavaScript로 가져오기
const probabilities = await prediction.data();
console.log('확률:', Array.from(probabilities));

// 가장 높은 확률의 클래스 찾기
const classIndex = prediction.argMax(-1).dataSync()[0];
console.log('예측 클래스:', classIndex);` },
          { type: 'heading', text: '데이터 제너레이터 활용' },
          { type: 'code', language: 'javascript', code: `// 대용량 데이터는 제너레이터로 처리
function* dataGenerator() {
  for (let i = 0; i < 1000; i++) {
    const x = Math.random();
    const y = 2 * x + 1 + (Math.random() - 0.5) * 0.1;
    yield { xs: [x], ys: [y] };
  }
}

const dataset = tf.data.generator(dataGenerator)
  .batch(32)
  .shuffle(100);

// 데이터셋으로 학습
await model.fitDataset(dataset, {
  epochs: 50,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      if ((epoch + 1) % 10 === 0) {
        console.log("에포크 " + (epoch + 1) + ": loss = " + logs.loss.toFixed(4));
      }
    },
  },
});` },
          { type: 'tip', text: '`epochs`는 전체 데이터를 몇 번 반복할지, `batchSize`는 한 번의 업데이트에 몇 개의 샘플을 사용할지를 결정합니다. 너무 큰 `epochs`는 과적합(overfitting)을, 너무 작은 값은 과소적합(underfitting)을 유발할 수 있습니다.' },
        ],
      },
      {
        slug: 'training-models',
        title: '모델 학습하기',
        duration: '20분',
        content: [
          { type: 'text', text: '모델 학습은 데이터를 준비하고, 학습 과정을 모니터링하며, 최적의 성능을 달성하기 위해 하이퍼파라미터를 조정하는 과정입니다. 이 레슨에서는 데이터 전처리부터 학습 시각화, 모델 저장까지 다룹니다.' },
          { type: 'heading', text: '데이터 전처리와 정규화' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';

// 데이터 정규화: 값을 0~1 범위로 변환
function normalizeData(data) {
  const min = data.min();
  const max = data.max();
  return data.sub(min).div(max.sub(min));
}

// 학습/검증 데이터 분리
function splitData(xs, ys, ratio) {
  const numExamples = xs.shape[0];
  const splitIdx = Math.floor(numExamples * ratio);

  const trainXs = xs.slice([0], [splitIdx]);
  const trainYs = ys.slice([0], [splitIdx]);
  const valXs = xs.slice([splitIdx]);
  const valYs = ys.slice([splitIdx]);

  return { trainXs, trainYs, valXs, valYs };
}

// 사용 예시
const rawData = tf.tensor2d([
  [150, 60], [170, 75], [160, 65], [180, 85]
]);
const normalized = normalizeData(rawData);
normalized.print();` },
          { type: 'heading', text: '학습 콜백과 모니터링' },
          { type: 'code', language: 'javascript', code: `const model = tf.sequential({
  layers: [
    tf.layers.dense({ units: 16, activation: 'relu', inputShape: [2] }),
    tf.layers.dense({ units: 1, activation: 'sigmoid' }),
  ]
});

model.compile({
  optimizer: tf.train.adam(0.001),
  loss: 'binaryCrossentropy',
  metrics: ['accuracy'],
});

// 학습 콜백 설정
const history = await model.fit(trainXs, trainYs, {
  epochs: 50,
  validationData: [valXs, valYs],
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log(
        "에포크 " + (epoch + 1) +
        " - loss: " + logs.loss.toFixed(4) +
        " - val_loss: " + logs.val_loss.toFixed(4) +
        " - accuracy: " + logs.acc.toFixed(4)
      );
    },
    onTrainEnd: () => {
      console.log("학습 완료!");
    },
  },
});

// 학습 이력 확인
console.log("최종 loss:", history.history.loss.slice(-1)[0]);
console.log("최종 val_loss:", history.history.val_loss.slice(-1)[0]);` },
          { type: 'heading', text: 'EarlyStopping 콜백' },
          { type: 'code', language: 'javascript', code: `// 과적합 방지를 위한 조기 종료
const earlyStop = tf.callbacks.earlyStopping({
  monitor: 'val_loss',
  patience: 5,  // 5 에포크 동안 개선 없으면 중단
});

await model.fit(trainXs, trainYs, {
  epochs: 200,
  validationData: [valXs, valYs],
  callbacks: [earlyStop],
});` },
          { type: 'heading', text: '모델 저장과 불러오기' },
          { type: 'code', language: 'javascript', code: `// 브라우저 로컬 스토리지에 저장
await model.save('localstorage://my-model');

// 불러오기
const loadedModel = await tf.loadLayersModel('localstorage://my-model');

// IndexedDB에 저장
await model.save('indexeddb://my-model');

// 파일 다운로드로 저장
await model.save('downloads://my-model');
// model.json과 weights.bin 파일이 다운로드됩니다

// HTTP 서버에 업로드
await model.save('http://localhost:3000/upload-model');` },
          { type: 'tip', text: '학습 시 반드시 validationData를 설정하여 과적합 여부를 모니터링하세요. 학습 loss는 줄어드는데 검증 loss가 증가한다면 과적합이 발생하고 있는 것입니다. EarlyStopping으로 적절한 시점에 학습을 중단할 수 있습니다.' },
        ],
      },
      {
        slug: 'pretrained-models',
        title: '사전학습 모델 활용',
        duration: '20분',
        content: [
          { type: 'text', text: 'TensorFlow.js는 이미 학습된 강력한 모델들을 바로 사용할 수 있도록 제공합니다. 사전학습 모델을 활용하면 대규모 데이터셋 없이도 높은 성능의 AI 기능을 웹 앱에 추가할 수 있습니다.' },
          { type: 'heading', text: '사전학습 모델 패키지' },
          { type: 'list', items: [
            '`@tensorflow-models/mobilenet` : 이미지 분류 (1000개 카테고리)',
            '`@tensorflow-models/coco-ssd` : 객체 탐지 (80개 카테고리)',
            '`@tensorflow-models/posenet` / `@tensorflow-models/pose-detection` : 신체 자세 추정',
            '`@tensorflow-models/blazeface` / `@tensorflow-models/face-landmarks-detection` : 얼굴 인식',
            '`@tensorflow-models/toxicity` : 텍스트 독성 분류',
            '`@tensorflow-models/universal-sentence-encoder` : 텍스트 임베딩',
          ]},
          { type: 'heading', text: 'MobileNet 이미지 분류' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

// 모델 로드 (최초 1회, 캐시됨)
const model = await mobilenet.load({
  version: 2,
  alpha: 1.0,  // 모델 크기 (0.25, 0.50, 0.75, 1.0)
});

// HTML 이미지 요소로 분류
const img = document.getElementById('myImage');
const predictions = await model.classify(img);

// 결과 출력
predictions.forEach(p => {
  console.log(p.className + ": " + (p.probability * 100).toFixed(1) + "%");
});
// 예: "golden retriever: 92.3%"
//     "Labrador retriever: 4.1%"
//     "tennis ball: 1.2%"` },
          { type: 'heading', text: 'COCO-SSD 객체 탐지' },
          { type: 'code', language: 'javascript', code: `import * as cocoSsd from '@tensorflow-models/coco-ssd';

const model = await cocoSsd.load();

// 이미지에서 객체 탐지
const img = document.getElementById('myImage');
const predictions = await model.detect(img);

predictions.forEach(pred => {
  console.log(
    pred.class + " (" + (pred.score * 100).toFixed(1) + "%) - " +
    "위치: [" + pred.bbox.join(', ') + "]"
  );
  // bbox: [x, y, width, height]
});

// 캔버스에 바운딩 박스 그리기
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.drawImage(img, 0, 0);

predictions.forEach(pred => {
  ctx.strokeStyle = '#00ff00';
  ctx.lineWidth = 2;
  ctx.strokeRect(...pred.bbox);
  ctx.fillStyle = '#00ff00';
  ctx.font = '16px Arial';
  ctx.fillText(
    pred.class + " " + (pred.score * 100).toFixed(0) + "%",
    pred.bbox[0], pred.bbox[1] - 5
  );
});` },
          { type: 'heading', text: '전이 학습 (Transfer Learning)' },
          { type: 'code', language: 'javascript', code: `import * as mobilenet from '@tensorflow-models/mobilenet';

// MobileNet 특성 추출기 로드
const mobilenetModel = await mobilenet.load();

// 중간 레이어 출력을 특성으로 사용
const activation = mobilenetModel.infer(img, true);
// shape: [1, 1024] - 1024차원 특성 벡터

// 커스텀 분류기 구축
const customModel = tf.sequential();
customModel.add(tf.layers.dense({
  units: 64,
  activation: 'relu',
  inputShape: [1024],
}));
customModel.add(tf.layers.dense({
  units: 3,  // 커스텀 클래스 수
  activation: 'softmax',
}));

customModel.compile({
  optimizer: tf.train.adam(0.0001),
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});

// 소량의 데이터로 커스텀 분류기 학습
await customModel.fit(features, labels, {
  epochs: 20,
  batchSize: 16,
});` },
          { type: 'tip', text: '사전학습 모델은 최초 로드 시 네트워크에서 가중치를 다운로드하므로 시간이 걸립니다. 로딩 상태를 사용자에게 표시하세요. 전이 학습을 사용하면 소량의 데이터만으로도 특정 도메인에 맞는 높은 성능의 모델을 만들 수 있습니다.' },
        ],
      },
      {
        slug: 'image-classification',
        title: '이미지 분류',
        duration: '20분',
        content: [
          { type: 'text', text: '이미지 분류는 머신러닝에서 가장 대표적인 작업 중 하나입니다. CNN(Convolutional Neural Network)을 사용하면 이미지의 특징을 자동으로 학습하여 높은 정확도의 분류를 수행할 수 있습니다.' },
          { type: 'heading', text: 'CNN 모델 구축' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';

// CNN 모델: 이미지 패턴 인식에 특화
const model = tf.sequential();

// 합성곱 레이어 1
model.add(tf.layers.conv2d({
  inputShape: [28, 28, 1],  // 28x28 그레이스케일 이미지
  filters: 32,              // 32개의 필터
  kernelSize: 3,            // 3x3 필터 크기
  activation: 'relu',
}));
model.add(tf.layers.maxPooling2d({ poolSize: 2 }));

// 합성곱 레이어 2
model.add(tf.layers.conv2d({
  filters: 64,
  kernelSize: 3,
  activation: 'relu',
}));
model.add(tf.layers.maxPooling2d({ poolSize: 2 }));

// Flatten: 2D -> 1D
model.add(tf.layers.flatten());

// 완전 연결 레이어
model.add(tf.layers.dropout({ rate: 0.25 }));
model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
model.add(tf.layers.dropout({ rate: 0.5 }));
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

model.summary();` },
          { type: 'heading', text: '이미지 데이터 전처리' },
          { type: 'code', language: 'javascript', code: `// 캔버스에서 이미지 데이터 가져오기
function getImageTensor(canvas) {
  return tf.tidy(() => {
    // 캔버스를 텐서로 변환
    const imageTensor = tf.browser.fromPixels(canvas, 1);
    // 그레이스케일, 1채널

    // 28x28로 리사이즈
    const resized = tf.image.resizeBilinear(imageTensor, [28, 28]);

    // 0~1 범위로 정규화
    const normalized = resized.div(255.0);

    // 배치 차원 추가: [28, 28, 1] -> [1, 28, 28, 1]
    return normalized.expandDims(0);
  });
}

// 파일 입력에서 이미지 로드
async function loadImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}` },
          { type: 'heading', text: '모델 학습과 평가' },
          { type: 'code', language: 'javascript', code: `model.compile({
  optimizer: 'adam',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});

// 학습 실행
const history = await model.fit(trainImages, trainLabels, {
  epochs: 10,
  batchSize: 64,
  validationSplit: 0.2,  // 20%를 검증 데이터로 사용
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log(
        "에포크 " + (epoch + 1) +
        " - accuracy: " + logs.acc.toFixed(4) +
        " - val_accuracy: " + logs.val_acc.toFixed(4)
      );
    },
  },
});

// 테스트 데이터로 평가
const evalResult = model.evaluate(testImages, testLabels);
console.log("테스트 정확도:", evalResult[1].dataSync()[0].toFixed(4));` },
          { type: 'heading', text: '실시간 분류 예측' },
          { type: 'code', language: 'javascript', code: `// 단일 이미지 분류
async function classifyImage(model, canvas) {
  const tensor = getImageTensor(canvas);
  const predictions = model.predict(tensor);

  // 확률 배열 가져오기
  const probabilities = await predictions.data();
  tensor.dispose();
  predictions.dispose();

  // 클래스별 확률 정리
  const classNames = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const results = classNames.map((name, i) => ({
    className: name,
    probability: probabilities[i],
  }));

  // 확률 높은 순으로 정렬
  results.sort((a, b) => b.probability - a.probability);

  return results;
}

// 사용 예시
const results = await classifyImage(model, canvas);
console.log("예측:", results[0].className);
console.log("확률:", (results[0].probability * 100).toFixed(1) + "%");` },
          { type: 'tip', text: 'CNN에서 Conv2D 레이어는 이미지의 지역적 패턴(엣지, 텍스처 등)을 학습하고, MaxPooling은 공간 크기를 줄여 계산 효율을 높입니다. Dropout은 학습 시 무작위로 뉴런을 비활성화하여 과적합을 방지합니다.' },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 손글씨 인식 앱',
        duration: '25분',
        content: [
          { type: 'text', text: '지금까지 배운 내용을 종합하여 브라우저에서 동작하는 손글씨 숫자 인식 앱을 만들어 봅니다. 캔버스에 숫자를 그리면 학습된 모델이 실시간으로 인식하는 완전한 웹 애플리케이션입니다.' },
          { type: 'heading', text: 'HTML 캔버스 설정' },
          { type: 'code', language: 'javascript', code: `// 캔버스 요소 설정
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 280;
canvas.height = 280;

// 배경을 검은색으로 설정 (MNIST 형식)
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 그리기 설정
ctx.strokeStyle = 'white';
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  predictDigit();
});` },
          { type: 'heading', text: 'MNIST 모델 학습' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';

async function createAndTrainModel() {
  const model = tf.sequential();

  model.add(tf.layers.conv2d({
    inputShape: [28, 28, 1],
    filters: 32,
    kernelSize: 3,
    activation: 'relu',
  }));
  model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
  model.add(tf.layers.conv2d({
    filters: 64,
    kernelSize: 3,
    activation: 'relu',
  }));
  model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
  model.add(tf.layers.flatten());
  model.add(tf.layers.dropout({ rate: 0.25 }));
  model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

  model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  // MNIST 데이터로 학습
  // (실제로는 MNIST 데이터를 로드하는 유틸리티 사용)
  await model.fit(trainImages, trainLabels, {
    epochs: 10,
    batchSize: 128,
    validationSplit: 0.1,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        const status = document.getElementById('status');
        status.textContent =
          "학습 중... 에포크 " + (epoch + 1) + "/10" +
          " (정확도: " + (logs.val_acc * 100).toFixed(1) + "%)";
      },
    },
  });

  return model;
}` },
          { type: 'heading', text: '실시간 예측 함수' },
          { type: 'code', language: 'javascript', code: `let model;

async function init() {
  const status = document.getElementById('status');
  status.textContent = '모델 로딩 중...';

  // 저장된 모델 불러오기 또는 새로 학습
  try {
    model = await tf.loadLayersModel('localstorage://mnist-model');
    status.textContent = '모델 로드 완료!';
  } catch (e) {
    model = await createAndTrainModel();
    await model.save('localstorage://mnist-model');
    status.textContent = '모델 학습 및 저장 완료!';
  }
}

async function predictDigit() {
  if (!model) return;

  const tensor = tf.tidy(() => {
    // 캔버스를 28x28 텐서로 변환
    const imageData = tf.browser.fromPixels(canvas, 1);
    const resized = tf.image.resizeBilinear(imageData, [28, 28]);
    const normalized = resized.div(255.0);
    return normalized.expandDims(0);
  });

  const prediction = model.predict(tensor);
  const probabilities = await prediction.data();

  // 결과 표시
  const resultDiv = document.getElementById('result');
  const maxProb = Math.max(...probabilities);
  const digit = probabilities.indexOf(maxProb);

  resultDiv.innerHTML =
    '<h2>예측: ' + digit + '</h2>' +
    '<p>확률: ' + (maxProb * 100).toFixed(1) + '%</p>';

  // 모든 숫자의 확률 바 차트 표시
  const chartDiv = document.getElementById('chart');
  chartDiv.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const pct = (probabilities[i] * 100).toFixed(1);
    const bar = document.createElement('div');
    bar.className = 'prob-bar';
    bar.innerHTML =
      '<span>' + i + '</span>' +
      '<div class="bar" style="width:' + pct + '%"></div>' +
      '<span>' + pct + '%</span>';
    chartDiv.appendChild(bar);
  }

  tensor.dispose();
  prediction.dispose();
}

function clearCanvas() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  document.getElementById('result').innerHTML = '';
  document.getElementById('chart').innerHTML = '';
}

// 초기화
init();` },
          { type: 'tip', text: 'MNIST 모델은 28x28 크기의 흰 글씨/검은 배경 이미지를 기대합니다. 캔버스 크기를 280x280으로 설정한 후 28x28로 리사이즈하면 더 부드러운 입력이 됩니다. 모델을 localStorage에 저장하면 다음 방문 시 재학습 없이 바로 사용할 수 있습니다.' },
        ],
      },
      {
        slug: 'reference',
        title: 'TensorFlow.js 레퍼런스',
        duration: '15분',
        content: [
          { type: 'text', text: 'TensorFlow.js의 주요 API와 자주 사용하는 패턴을 정리한 레퍼런스입니다. 개발 시 빠르게 참고할 수 있도록 카테고리별로 분류하였습니다.' },
          { type: 'heading', text: '텐서 생성 API' },
          { type: 'code', language: 'javascript', code: `import * as tf from '@tensorflow/tfjs';

// 기본 텐서 생성
tf.tensor([1, 2, 3])              // 1D 텐서
tf.tensor([[1, 2], [3, 4]])       // 2D 텐서
tf.tensor2d([[1, 2], [3, 4]])     // 명시적 2D
tf.scalar(42)                      // 스칼라

// 특수 텐서
tf.zeros([2, 3])                   // 영텐서
tf.ones([3, 3])                    // 1로 채운 텐서
tf.fill([2, 2], 7)                 // 특정 값으로 채우기
tf.linspace(0, 1, 10)             // 균등 분할
tf.range(0, 10, 2)                // [0, 2, 4, 6, 8]
tf.randomNormal([3, 3])           // 정규분포 난수
tf.randomUniform([2, 2])          // 균등분포 난수

// 원-핫 인코딩
tf.oneHot(tf.tensor1d([0, 1, 2], 'int32'), 3)
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]]` },
          { type: 'heading', text: '텐서 연산 API' },
          { type: 'code', language: 'javascript', code: `const a = tf.tensor([1, 2, 3]);
const b = tf.tensor([4, 5, 6]);

// 산술 연산
a.add(b)           // 덧셈 [5, 7, 9]
a.sub(b)           // 뺄셈 [-3, -3, -3]
a.mul(b)           // 곱셈 [4, 10, 18]
a.div(b)           // 나눗셈
a.pow(tf.scalar(2)) // 거듭제곱

// 행렬 연산
m1.matMul(m2)      // 행렬 곱
m1.transpose()     // 전치
tf.dot(a, b)       // 내적

// 축소 연산
a.sum()            // 합계
a.mean()           // 평균
a.max()            // 최대값
a.min()            // 최소값
a.argMax()         // 최대값 인덱스

// 형태 변환
a.reshape([1, 3])  // 형태 변경
a.expandDims(0)    // 차원 추가
a.squeeze()        // 크기 1인 차원 제거
a.slice([1], [2])  // 슬라이싱` },
          { type: 'heading', text: '레이어 종류' },
          { type: 'list', items: [
            '`tf.layers.dense({units, activation})` : 완전 연결 레이어. 가장 기본적인 레이어',
            '`tf.layers.conv2d({filters, kernelSize})` : 2D 합성곱. 이미지 처리에 사용',
            '`tf.layers.maxPooling2d({poolSize})` : 최대 풀링. 공간 크기 축소',
            '`tf.layers.flatten()` : 다차원 텐서를 1D로 변환',
            '`tf.layers.dropout({rate})` : 과적합 방지. 학습 시 뉴런 비활성화',
            '`tf.layers.batchNormalization()` : 배치 정규화. 학습 안정화',
            '`tf.layers.lstm({units})` : LSTM. 시계열/텍스트 처리',
            '`tf.layers.gru({units})` : GRU. LSTM의 경량 버전',
            '`tf.layers.embedding({inputDim, outputDim})` : 임베딩. 단어를 벡터로 변환',
          ]},
          { type: 'heading', text: '옵티마이저와 손실 함수' },
          { type: 'code', language: 'javascript', code: `// 옵티마이저
tf.train.sgd(learningRate)         // 확률적 경사 하강법
tf.train.adam(learningRate)        // Adam (가장 많이 사용)
tf.train.rmsprop(learningRate)     // RMSProp
tf.train.adagrad(learningRate)     // Adagrad

// 손실 함수 (문자열로 지정)
'meanSquaredError'           // 회귀
'binaryCrossentropy'         // 이진 분류
'categoricalCrossentropy'    // 다중 분류 (원-핫 라벨)
'sparseCategoricalCrossentropy'  // 다중 분류 (정수 라벨)

// 활성화 함수
'relu'       // max(0, x) - 은닉층 기본
'sigmoid'    // 이진 분류 출력층
'softmax'    // 다중 분류 출력층
'tanh'       // -1 ~ 1 범위
'linear'     // 회귀 출력층 (또는 생략)` },
          { type: 'heading', text: '유용한 유틸리티' },
          { type: 'code', language: 'javascript', code: `// 메모리 관리
tf.tidy(() => { /* 중간 텐서 자동 해제 */ });
tensor.dispose();               // 수동 해제
tf.disposeVariables();          // 모든 변수 해제
console.log(tf.memory());      // 메모리 사용량 확인

// 데이터 변환
await tensor.data()            // Float32Array로
await tensor.array()           // 중첩 배열로
tensor.dataSync()              // 동기 변환 (주의: 블로킹)

// 이미지 처리
tf.browser.fromPixels(canvas)  // 캔버스/이미지를 텐서로
tf.browser.toPixels(tensor, canvas)  // 텐서를 캔버스로
tf.image.resizeBilinear(img, [h, w]) // 리사이즈

// 백엔드 설정
await tf.setBackend('webgl');   // GPU 가속 (기본)
await tf.setBackend('cpu');     // CPU 폴백
await tf.setBackend('wasm');    // WebAssembly
console.log(tf.getBackend());  // 현재 백엔드 확인` },
          { type: 'tip', text: 'WebGL 백엔드가 기본이지만, 일부 구형 브라우저에서는 CPU 폴백이 발생할 수 있습니다. WASM 백엔드는 WebGL을 지원하지 않는 환경에서 좋은 대안입니다. 항상 tf.memory()로 메모리 누수를 모니터링하세요.' },
        ],
      },
    ],
  },
];
