import type { Course } from './types';

export const creativeCourses: Course[] = [
  // ─── 1. Three.js 3D 그래픽 ───────────────────────────────────────────
  {
    slug: 'threejs',
    title: 'Three.js 3D 그래픽',
    description: '웹에서 3D 그래픽과 WebGL 구현',
    category: 'creative',
    color: 'bg-fuchsia-500',
    difficulty: 'intermediate',
    objectives: [
      '씬, 카메라, 렌더러 기본 구조',
      '지오메트리, 머티리얼, 조명',
      '텍스처, 애니메이션, 컨트롤',
      '물리 엔진과 사용자 인터랙션',
      '실전 3D 갤러리와 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'scene-setup',
        title: '씬 구성하기',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Three.js 씬의 3대 요소',
          },
          {
            type: 'text',
            text: 'Three.js에서 3D 장면을 렌더링하려면 반드시 세 가지가 필요합니다: Scene(장면), Camera(카메라), Renderer(렌더러). Scene은 3D 객체가 배치되는 공간이고, Camera는 그 공간을 바라보는 시점이며, Renderer는 카메라가 보는 장면을 2D 화면에 그려줍니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `import * as THREE from 'three';

// 1. 씬(Scene) 생성 — 3D 객체를 담는 컨테이너
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// 2. 카메라(Camera) 생성 — 장면을 바라보는 시점
// PerspectiveCamera(fov, aspect, near, far)
//   fov: 시야각(도), aspect: 종횡비, near/far: 렌더링 범위
const camera = new THREE.PerspectiveCamera(
  75,                                    // 시야각 75도
  window.innerWidth / window.innerHeight, // 화면 비율
  0.1,                                    // 가까운 클리핑 면
  1000                                    // 먼 클리핑 면
);

// 3. 렌더러(Renderer) 생성 — 장면을 화면에 그림
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);`,
          },
          {
            type: 'list',
            items: [
              'Scene — 모든 3D 객체, 조명, 카메라가 존재하는 가상 공간',
              'PerspectiveCamera — 원근감이 있는 카메라 (사람 눈과 유사)',
              'WebGLRenderer — WebGL API를 사용하여 GPU에서 렌더링 수행',
              'fov(Field of View) — 값이 클수록 넓은 영역이 보임 (보통 50~75)',
              'near/far — 이 범위 밖의 객체는 렌더링되지 않음',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// 카메라 위치 설정 — 기본값은 (0,0,0)이므로 뒤로 이동
camera.position.set(0, 2, 5); // x, y, z
camera.lookAt(0, 0, 0);       // 원점을 바라봄

// 간단한 큐브를 추가하여 테스트
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 렌더링 실행
renderer.render(scene, camera);`,
          },
          {
            type: 'tip',
            text: '브라우저 창 크기가 변경될 때 camera.aspect와 renderer.setSize를 업데이트해야 3D 장면이 찌그러지지 않습니다. window.addEventListener("resize", ...) 에서 camera.updateProjectionMatrix()를 호출하세요.',
          },
        ],
      },
      {
        slug: 'geometry-material',
        title: '도형과 재질',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Geometry — 3D 도형의 뼈대',
          },
          {
            type: 'text',
            text: 'Geometry는 3D 객체의 형태(꼭짓점과 면)를 정의합니다. Three.js는 박스, 구, 원기둥, 평면 등 다양한 내장 지오메트리를 제공합니다. Material은 그 도형의 표면 특성(색상, 반사, 투명도 등)을 결정합니다. Mesh는 Geometry + Material을 결합한 최종 3D 객체입니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 기본 Geometry 종류 ──
const box = new THREE.BoxGeometry(1, 1, 1);          // 가로, 세로, 깊이
const sphere = new THREE.SphereGeometry(0.7, 32, 32); // 반지름, 가로분할, 세로분할
const cylinder = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32); // 상단R, 하단R, 높이, 분할
const plane = new THREE.PlaneGeometry(5, 5);           // 가로, 세로
const torus = new THREE.TorusGeometry(0.5, 0.2, 16, 48); // 반지름, 튜브R, 분할, 분할`,
          },
          {
            type: 'heading',
            text: 'Material — 표면의 질감과 색상',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// MeshBasicMaterial — 조명 영향 없음, 단색으로 표시
const basicMat = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: false,   // true면 와이어프레임으로 표시
});

// MeshStandardMaterial — PBR(물리 기반 렌더링), 조명 필요
const standardMat = new THREE.MeshStandardMaterial({
  color: 0x2196f3,
  metalness: 0.7,     // 0(비금속) ~ 1(금속)
  roughness: 0.3,     // 0(매끈) ~ 1(거침)
});

// MeshPhongMaterial — 반짝이는 하이라이트 표현
const phongMat = new THREE.MeshPhongMaterial({
  color: 0x9c27b0,
  shininess: 100,     // 하이라이트 강도
  specular: 0xffffff, // 하이라이트 색상
});`,
          },
          {
            type: 'list',
            items: [
              'MeshBasicMaterial — 조명과 무관하게 단색 표시, 프로토타입에 적합',
              'MeshStandardMaterial — PBR 기반으로 사실적 질감 표현 (권장)',
              'MeshPhongMaterial — 플라스틱, 도자기 같은 광택 표현에 적합',
              'metalness — 금속 느낌 정도 (0: 플라스틱, 1: 금속)',
              'roughness — 표면 거칠기 (0: 거울처럼 매끈, 1: 완전 무광)',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// Mesh 생성 — Geometry + Material 결합
const cubeMesh = new THREE.Mesh(box, standardMat);
cubeMesh.position.set(-2, 0.5, 0);
scene.add(cubeMesh);

const sphereMesh = new THREE.Mesh(sphere, phongMat);
sphereMesh.position.set(0, 0.7, 0);
scene.add(sphereMesh);

const cylinderMesh = new THREE.Mesh(cylinder, basicMat);
cylinderMesh.position.set(2, 0.75, 0);
scene.add(cylinderMesh);

// 바닥 평면
const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
const floor = new THREE.Mesh(plane, floorMat);
floor.rotation.x = -Math.PI / 2; // 수평으로 눕히기
scene.add(floor);`,
          },
          {
            type: 'tip',
            text: 'MeshStandardMaterial이나 MeshPhongMaterial을 사용하면 씬에 조명(Light)이 없을 때 검은색으로 보입니다. 반드시 조명을 추가하거나, 테스트 시에는 MeshBasicMaterial을 사용하세요.',
          },
        ],
      },
      {
        slug: 'lights-animation',
        title: '조명과 애니메이션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Light — 장면에 빛 더하기',
          },
          {
            type: 'text',
            text: '현실 세계처럼 3D 장면에서도 빛이 있어야 사물을 볼 수 있습니다. Three.js는 여러 종류의 조명을 제공합니다. AmbientLight는 전체를 균일하게 밝히고, DirectionalLight는 태양처럼 평행광을, PointLight는 전구처럼 한 점에서 퍼지는 빛을, SpotLight는 스포트라이트처럼 원뿔 형태의 빛을 만듭니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// AmbientLight — 방향 없이 장면 전체를 균일하게 비춤
const ambient = new THREE.AmbientLight(0xffffff, 0.3); // 색상, 강도
scene.add(ambient);

// DirectionalLight — 태양광처럼 평행한 빛
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 7);
dirLight.castShadow = true; // 그림자 활성화
scene.add(dirLight);

// PointLight — 전구처럼 한 점에서 모든 방향으로 퍼지는 빛
const pointLight = new THREE.PointLight(0xff6600, 1, 20); // 색, 강도, 범위
pointLight.position.set(-3, 3, 2);
scene.add(pointLight);

// SpotLight — 원뿔 형태의 집중 조명
const spotLight = new THREE.SpotLight(0x00ff00, 1);
spotLight.position.set(0, 5, 0);
spotLight.angle = Math.PI / 6; // 원뿔 각도
spotLight.penumbra = 0.3;       // 경계 부드러움
scene.add(spotLight);`,
          },
          {
            type: 'heading',
            text: 'Animation — 움직이는 3D 세계',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// requestAnimationFrame을 이용한 애니메이션 루프
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();   // 프레임 간 경과 시간(초)
  const elapsed = clock.getElapsedTime(); // 시작 이후 총 시간

  // 회전 애니메이션
  cubeMesh.rotation.x += 0.5 * delta;
  cubeMesh.rotation.y += 0.8 * delta;

  // 위아래 부유 애니메이션
  sphereMesh.position.y = 1 + Math.sin(elapsed * 2) * 0.5;

  // 크기 변화 애니메이션
  const scale = 1 + Math.sin(elapsed * 3) * 0.2;
  cylinderMesh.scale.set(scale, scale, scale);

  renderer.render(scene, camera);
}

animate(); // 루프 시작`,
          },
          {
            type: 'list',
            items: [
              'AmbientLight — 기본 밝기 확보용, 단독 사용 시 입체감 없음',
              'DirectionalLight — 그림자 표현이 가능하며 야외 씬에 적합',
              'PointLight — 실내 조명, 불꽃 등 점광원 표현',
              'SpotLight — 무대 조명, 손전등 등 집중 조명 표현',
              'clock.getDelta() — 프레임 독립적 애니메이션을 위해 경과 시간 사용',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// OrbitControls — 마우스로 카메라를 회전/줌/이동
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // 부드러운 감속
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2; // 바닥 아래로 못 가게

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // 매 프레임 업데이트 필수
  renderer.render(scene, camera);
}`,
          },
          {
            type: 'tip',
            text: 'delta 시간을 사용하면 60fps든 30fps든 동일한 속도로 애니메이션이 재생됩니다. rotation.y += 1 * delta처럼 항상 delta를 곱하세요. OrbitControls의 enableDamping을 사용하면 반드시 animate 루프 안에서 controls.update()를 호출해야 합니다.',
          },
        ],
      },
      {
        slug: 'textures-materials',
        title: '텍스처와 머티리얼',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '텍스처 로딩과 적용',
          },
          {
            type: 'text',
            text: '텍스처(Texture)는 3D 객체의 표면에 이미지를 입혀 사실적인 외관을 만듭니다. Three.js의 TextureLoader를 사용하여 이미지를 로드하고, 머티리얼의 map 속성에 할당합니다. 다양한 맵(normalMap, roughnessMap, displacementMap 등)을 조합하면 PBR(물리 기반 렌더링)으로 매우 사실적인 질감을 표현할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as THREE from 'three';\n\n// TextureLoader로 이미지 텍스처 로딩\nconst loader = new THREE.TextureLoader();\n\n// 단일 텍스처 로드\nconst colorMap = loader.load('/textures/brick_color.jpg');\n\n// 텍스처를 머티리얼에 적용\nconst material = new THREE.MeshStandardMaterial({\n  map: colorMap,           // 색상 텍스처 (기본)\n  metalness: 0.1,\n  roughness: 0.8,\n});\n\nconst cube = new THREE.Mesh(\n  new THREE.BoxGeometry(2, 2, 2),\n  material\n);\nscene.add(cube);",
          },
          {
            type: 'heading',
            text: 'PBR 머티리얼과 다중 텍스처 맵',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "const loader = new THREE.TextureLoader();\n\n// 여러 텍스처 맵을 조합한 PBR 머티리얼\nconst pbrMaterial = new THREE.MeshStandardMaterial({\n  map: loader.load('/textures/stone_color.jpg'),          // 색상 맵\n  normalMap: loader.load('/textures/stone_normal.jpg'),    // 법선 맵 (입체감)\n  roughnessMap: loader.load('/textures/stone_rough.jpg'),  // 거칠기 맵\n  aoMap: loader.load('/textures/stone_ao.jpg'),            // 앰비언트 오클루전\n  displacementMap: loader.load('/textures/stone_disp.jpg'),// 변위 맵\n  displacementScale: 0.1,\n});\n\nconst sphere = new THREE.Mesh(\n  new THREE.SphereGeometry(1, 64, 64),\n  pbrMaterial\n);\nscene.add(sphere);\n\n// 텍스처 반복 설정\nconst texture = loader.load('/textures/tile.jpg');\ntexture.wrapS = THREE.RepeatWrapping;\ntexture.wrapT = THREE.RepeatWrapping;\ntexture.repeat.set(4, 4);",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 환경 맵(Environment Map)으로 반사 효과\nconst cubeTextureLoader = new THREE.CubeTextureLoader();\nconst envMap = cubeTextureLoader.load([\n  '/textures/env/px.jpg', '/textures/env/nx.jpg',\n  '/textures/env/py.jpg', '/textures/env/ny.jpg',\n  '/textures/env/pz.jpg', '/textures/env/nz.jpg',\n]);\n\nscene.environment = envMap;\n\nconst chromeMatl = new THREE.MeshStandardMaterial({\n  color: 0xffffff,\n  metalness: 1.0,\n  roughness: 0.05,\n  envMap: envMap,\n  envMapIntensity: 1.0,\n});\n\nconst chromeSphere = new THREE.Mesh(\n  new THREE.SphereGeometry(1, 32, 32),\n  chromeMatl\n);\nscene.add(chromeSphere);",
          },
          {
            type: 'list',
            items: [
              'map — 기본 색상 텍스처, 객체의 외관 색을 결정',
              'normalMap — 표면의 미세한 요철을 시뮬레이션 (입체감)',
              'roughnessMap — 픽셀별 거칠기를 제어',
              'displacementMap — 실제로 정점을 이동시켜 높낮이 표현',
              'envMap — 환경 반사 맵, 금속이나 유리 재질에 사용',
            ],
          },
          {
            type: 'tip',
            text: '텍스처 파일은 2의 거듭제곱 크기(512x512, 1024x1024 등)가 GPU에서 가장 효율적입니다. 큰 텍스처는 메모리를 많이 차지하므로, 필요에 따라 적절한 해상도를 선택하세요.',
          },
        ],
      },
      {
        slug: 'animation-controls',
        title: '애니메이션과 카메라 컨트롤',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '키프레임 애니메이션과 트윈',
          },
          {
            type: 'text',
            text: 'Three.js는 glTF 모델에 포함된 키프레임 애니메이션을 AnimationMixer로 재생할 수 있습니다. 또한 코드 기반으로 부드러운 전환(tween) 애니메이션을 구현하거나, 다양한 카메라 컨트롤로 사용자 시점을 제어할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as THREE from 'three';\nimport { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';\n\nconst gltfLoader = new GLTFLoader();\nlet animMixer;\n\ngltfLoader.load('/models/character.glb', (gltf) => {\n  const model = gltf.scene;\n  scene.add(model);\n\n  // AnimationMixer 생성\n  animMixer = new THREE.AnimationMixer(model);\n\n  // 모든 애니메이션 클립 확인\n  console.log('Animations:', gltf.animations.map(a => a.name));\n\n  // 첫 번째 애니메이션 재생\n  const action = animMixer.clipAction(gltf.animations[0]);\n  action.play();\n});\n\n// 애니메이션 루프에서 mixer 업데이트\nconst clock = new THREE.Clock();\nfunction animate() {\n  requestAnimationFrame(animate);\n  const delta = clock.getDelta();\n  if (animMixer) animMixer.update(delta);\n  renderer.render(scene, camera);\n}\nanimate();",
          },
          {
            type: 'heading',
            text: '코드 기반 트윈 애니메이션',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// Lerp(선형 보간) 애니메이션\nfunction lerp(start, end, t) {\n  return start + (end - start) * t;\n}\n\nconst targetPos = new THREE.Vector3(3, 1, 0);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n\n  // 매 프레임 5%씩 목표에 접근\n  cube.position.x = lerp(cube.position.x, targetPos.x, 0.05);\n  cube.position.y = lerp(cube.position.y, targetPos.y, 0.05);\n  cube.position.z = lerp(cube.position.z, targetPos.z, 0.05);\n\n  renderer.render(scene, camera);\n}\n\n// 클릭 시 목표 위치 변경\nwindow.addEventListener('click', () => {\n  targetPos.set(\n    (Math.random() - 0.5) * 6,\n    Math.random() * 3,\n    (Math.random() - 0.5) * 6\n  );\n});",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import { OrbitControls } from 'three/addons/controls/OrbitControls.js';\nimport { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';\n\n// OrbitControls — 마우스로 회전/줌/패닝\nconst orbitControls = new OrbitControls(camera, renderer.domElement);\norbitControls.enableDamping = true;\norbitControls.dampingFactor = 0.05;\norbitControls.minDistance = 2;\norbitControls.maxDistance = 20;\norbitControls.autoRotate = true;\norbitControls.autoRotateSpeed = 2.0;\n\n// PointerLockControls — FPS 게임 스타일 카메라\nconst fpControls = new PointerLockControls(camera, document.body);\ndocument.addEventListener('click', () => fpControls.lock());\n\nconst velocity = new THREE.Vector3();\ndocument.addEventListener('keydown', (e) => {\n  if (e.code === 'KeyW') velocity.z = -0.1;\n  if (e.code === 'KeyS') velocity.z = 0.1;\n  if (e.code === 'KeyA') velocity.x = -0.1;\n  if (e.code === 'KeyD') velocity.x = 0.1;\n});\ndocument.addEventListener('keyup', () => velocity.set(0, 0, 0));",
          },
          {
            type: 'list',
            items: [
              'AnimationMixer — glTF 모델의 키프레임 애니메이션을 관리/재생',
              'clipAction() — AnimationClip을 Action으로 변환하여 제어',
              'lerp — 선형 보간으로 부드러운 이동/전환 구현',
              'OrbitControls — 궤도 카메라 (3D 뷰어에 적합)',
              'PointerLockControls — FPS 스타일 카메라 (게임에 적합)',
            ],
          },
          {
            type: 'tip',
            text: 'AnimationMixer.update(delta)는 반드시 매 프레임 호출해야 합니다. delta 대신 고정 값을 사용하면 프레임 속도에 따라 애니메이션 속도가 달라집니다.',
          },
        ],
      },
      {
        slug: 'physics-interaction',
        title: '물리와 인터랙션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '3D 물리 엔진 연동',
          },
          {
            type: 'text',
            text: 'Three.js 자체에는 물리 엔진이 없지만, Cannon.js나 Rapier 같은 물리 라이브러리를 연동하여 중력, 충돌, 반발 등 현실적인 물리 시뮬레이션을 구현할 수 있습니다. 물리 월드에서 계산된 위치와 회전 값을 Three.js 메시에 매 프레임 동기화합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as THREE from 'three';\nimport * as CANNON from 'cannon-es';\n\n// 물리 월드 생성\nconst world = new CANNON.World();\nworld.gravity.set(0, -9.82, 0);\n\n// 바닥 (물리)\nconst groundBody = new CANNON.Body({\n  mass: 0,\n  shape: new CANNON.Plane(),\n});\ngroundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);\nworld.addBody(groundBody);\n\n// 바닥 (Three.js)\nconst groundMesh = new THREE.Mesh(\n  new THREE.PlaneGeometry(20, 20),\n  new THREE.MeshStandardMaterial({ color: 0x333333 })\n);\ngroundMesh.rotation.x = -Math.PI / 2;\nscene.add(groundMesh);\n\n// 공 (물리)\nconst sphereBody = new CANNON.Body({\n  mass: 1,\n  shape: new CANNON.Sphere(0.5),\n  position: new CANNON.Vec3(0, 5, 0),\n  restitution: 0.7,\n});\nworld.addBody(sphereBody);\n\n// 공 (Three.js)\nconst sphereMesh = new THREE.Mesh(\n  new THREE.SphereGeometry(0.5, 32, 32),\n  new THREE.MeshStandardMaterial({ color: 0xff4444 })\n);\nscene.add(sphereMesh);",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 물리 시뮬레이션 루프\nconst clock = new THREE.Clock();\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  const delta = clock.getDelta();\n\n  // 물리 월드 업데이트\n  world.step(1 / 60, delta, 3);\n\n  // 물리 -> Three.js 동기화\n  sphereMesh.position.copy(sphereBody.position);\n  sphereMesh.quaternion.copy(sphereBody.quaternion);\n\n  renderer.render(scene, camera);\n}\nanimate();",
          },
          {
            type: 'heading',
            text: '레이캐스팅으로 마우스 인터랙션',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "const raycaster = new THREE.Raycaster();\nconst mouse = new THREE.Vector2();\n\nwindow.addEventListener('click', (event) => {\n  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;\n  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n\n  raycaster.setFromCamera(mouse, camera);\n  const intersects = raycaster.intersectObjects(scene.children, true);\n\n  if (intersects.length > 0) {\n    const clicked = intersects[0].object;\n    console.log('Clicked:', clicked.name);\n\n    // 색상 변경\n    if (clicked.material) {\n      clicked.material.color.setHex(Math.random() * 0xffffff);\n    }\n\n    // 물리 힘 적용\n    const body = clicked.userData.physicsBody;\n    if (body) {\n      body.applyImpulse(\n        new CANNON.Vec3(0, 5, 0),\n        body.position\n      );\n    }\n  }\n});",
          },
          {
            type: 'list',
            items: [
              'CANNON.World — 물리 계산을 수행하는 가상 세계',
              'CANNON.Body — 질량, 모양, 위치를 가진 물리 객체',
              'mass: 0 — 정적 객체 (바닥, 벽)',
              'Raycaster — 광선과 3D 객체의 교차점 계산',
              'applyImpulse — 물리 바디에 순간적인 힘을 가함',
            ],
          },
          {
            type: 'tip',
            text: '물리 시뮬레이션의 step() 메서드는 고정 타임스텝(1/60)을 사용하는 것이 안정적입니다. 가변 타임스텝을 사용하면 프레임 드랍 시 물체가 벽을 통과하는 터널링 현상이 발생할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 3D 갤러리',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '3D 갤러리 프로젝트',
          },
          {
            type: 'text',
            text: '지금까지 배운 Three.js의 핵심 개념들을 조합하여 인터랙티브 3D 갤러리를 만듭니다. 씬 구성, 텍스처 로딩, 카메라 컨트롤, 레이캐스팅을 모두 활용하여 가상 갤러리 공간에 이미지 프레임을 배치하고 클릭 인터랙션을 구현합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as THREE from 'three';\nimport { OrbitControls } from 'three/addons/controls/OrbitControls.js';\n\n// 기본 씬 설정\nconst scene = new THREE.Scene();\nscene.background = new THREE.Color(0x1a1a2e);\nscene.fog = new THREE.Fog(0x1a1a2e, 10, 30);\n\nconst camera = new THREE.PerspectiveCamera(\n  60, window.innerWidth / window.innerHeight, 0.1, 100\n);\ncamera.position.set(0, 2, 8);\n\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.shadowMap.enabled = true;\ndocument.body.appendChild(renderer.domElement);\n\n// 조명\nconst ambient = new THREE.AmbientLight(0xffffff, 0.3);\nscene.add(ambient);\nconst spotLight = new THREE.SpotLight(0xffffff, 1);\nspotLight.position.set(0, 8, 0);\nspotLight.castShadow = true;\nscene.add(spotLight);",
          },
          {
            type: 'heading',
            text: '갤러리 공간과 이미지 프레임',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 바닥\nconst floor = new THREE.Mesh(\n  new THREE.PlaneGeometry(20, 20),\n  new THREE.MeshStandardMaterial({ color: 0x222233, roughness: 0.8 })\n);\nfloor.rotation.x = -Math.PI / 2;\nfloor.receiveShadow = true;\nscene.add(floor);\n\n// 벽 생성\nfunction createWall(w, h, pos, rot) {\n  const wall = new THREE.Mesh(\n    new THREE.PlaneGeometry(w, h),\n    new THREE.MeshStandardMaterial({ color: 0x2a2a3e, side: THREE.DoubleSide })\n  );\n  wall.position.copy(pos);\n  if (rot) wall.rotation.copy(rot);\n  wall.receiveShadow = true;\n  scene.add(wall);\n}\n\ncreateWall(20, 5, new THREE.Vector3(0, 2.5, -5));\ncreateWall(10, 5, new THREE.Vector3(-10, 2.5, 0), new THREE.Euler(0, Math.PI / 2, 0));\ncreateWall(10, 5, new THREE.Vector3(10, 2.5, 0), new THREE.Euler(0, -Math.PI / 2, 0));",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 이미지 프레임 생성\nconst loader = new THREE.TextureLoader();\nconst frames = [];\n\nfunction createFrame(imageUrl, position) {\n  const group = new THREE.Group();\n  const frameMesh = new THREE.Mesh(\n    new THREE.BoxGeometry(2.2, 1.7, 0.1),\n    new THREE.MeshStandardMaterial({ color: 0xc0a060, metalness: 0.8, roughness: 0.3 })\n  );\n  frameMesh.castShadow = true;\n  group.add(frameMesh);\n\n  const imgMesh = new THREE.Mesh(\n    new THREE.PlaneGeometry(1.9, 1.4),\n    new THREE.MeshBasicMaterial({ map: loader.load(imageUrl) })\n  );\n  imgMesh.position.z = 0.06;\n  imgMesh.userData.frameName = imageUrl;\n  group.add(imgMesh);\n\n  group.position.copy(position);\n  scene.add(group);\n  frames.push(imgMesh);\n}\n\ncreateFrame('/img/art1.jpg', new THREE.Vector3(-4, 2, -4.9));\ncreateFrame('/img/art2.jpg', new THREE.Vector3(0, 2, -4.9));\ncreateFrame('/img/art3.jpg', new THREE.Vector3(4, 2, -4.9));\n\n// 클릭 감지\nconst raycaster = new THREE.Raycaster();\nconst mouse = new THREE.Vector2();\nrenderer.domElement.addEventListener('click', (e) => {\n  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;\n  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;\n  raycaster.setFromCamera(mouse, camera);\n  const hits = raycaster.intersectObjects(frames);\n  if (hits.length > 0) {\n    console.log('Selected:', hits[0].object.userData.frameName);\n  }\n});\n\n// 렌더 루프\nconst controls = new OrbitControls(camera, renderer.domElement);\ncontrols.enableDamping = true;\ncontrols.target.set(0, 2, 0);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  controls.update();\n  renderer.render(scene, camera);\n}\nanimate();",
          },
          {
            type: 'list',
            items: [
              'Fog — 거리감을 주어 공간의 깊이감 표현',
              'THREE.Group — 여러 메시를 하나로 묶어 함께 이동/회전',
              'receiveShadow / castShadow — 그림자 설정',
              'userData — 메시에 사용자 정의 데이터 저장',
              'Raycaster + frames 배열로 특정 객체만 클릭 감지',
            ],
          },
          {
            type: 'tip',
            text: '실전 프로젝트에서는 성능 최적화가 중요합니다. 동일한 머티리얼은 재사용하고, 화면에 보이지 않는 객체는 visible = false로 설정하세요. renderer.info.render에서 드로우콜 수를 확인할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Three.js 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Three.js 핵심 API 레퍼런스',
          },
          {
            type: 'text',
            text: 'Three.js의 주요 클래스와 자주 사용하는 API를 정리합니다. 이 레퍼런스를 통해 각 기능의 역할과 매개변수를 빠르게 확인할 수 있습니다.',
          },
          {
            type: 'heading',
            text: '씬과 렌더링',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// Scene\nconst scene = new THREE.Scene();\nscene.background = new THREE.Color(0x000000);\nscene.fog = new THREE.Fog(color, near, far);\nscene.add(object);\nscene.remove(object);\n\n// Camera\nconst cam = new THREE.PerspectiveCamera(fov, aspect, near, far);\ncam.position.set(x, y, z);\ncam.lookAt(target);\ncam.updateProjectionMatrix();\n\n// Renderer\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\nrenderer.setSize(width, height);\nrenderer.setPixelRatio(window.devicePixelRatio);\nrenderer.shadowMap.enabled = true;\nrenderer.render(scene, camera);",
          },
          {
            type: 'heading',
            text: '지오메트리와 머티리얼',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// Geometry\nnew THREE.BoxGeometry(width, height, depth);\nnew THREE.SphereGeometry(radius, widthSeg, heightSeg);\nnew THREE.CylinderGeometry(topR, bottomR, height, segments);\nnew THREE.PlaneGeometry(width, height);\nnew THREE.TorusGeometry(radius, tubeR, radialSeg, tubularSeg);\n\n// Material\nnew THREE.MeshBasicMaterial({ color, wireframe });\nnew THREE.MeshStandardMaterial({ color, metalness, roughness, map });\nnew THREE.MeshPhongMaterial({ color, shininess, specular });\nnew THREE.MeshLambertMaterial({ color });",
          },
          {
            type: 'heading',
            text: '조명, 로더, 유틸리티',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// Light\nnew THREE.AmbientLight(color, intensity);\nnew THREE.DirectionalLight(color, intensity);\nnew THREE.PointLight(color, intensity, distance);\nnew THREE.SpotLight(color, intensity);\n\n// Helper\nnew THREE.AxesHelper(size);\nnew THREE.GridHelper(size, divisions);\n\n// Loader\nnew THREE.TextureLoader().load(url);\nnew THREE.CubeTextureLoader().load([px, nx, py, ny, pz, nz]);\n\n// Math\nTHREE.MathUtils.lerp(start, end, t);\nTHREE.MathUtils.clamp(value, min, max);\nTHREE.MathUtils.degToRad(degrees);",
          },
          {
            type: 'list',
            items: [
              'Scene — 3D 공간의 루트 컨테이너',
              'PerspectiveCamera — 원근 투영, OrthographicCamera — 직교 투영',
              'WebGLRenderer — GPU 기반 렌더링 엔진',
              'Mesh = Geometry + Material — 3D 객체의 기본 단위',
              'TextureLoader / GLTFLoader — 에셋 로딩',
              'Raycaster — 광선-객체 교차 검사 (마우스 인터랙션)',
              'AnimationMixer — 키프레임 애니메이션 재생/제어',
              'Clock — 프레임 독립적 시간 관리',
            ],
          },
          {
            type: 'tip',
            text: '공식 문서(threejs.org/docs)와 예제(threejs.org/examples)를 적극 활용하세요. examples 페이지에서 원하는 효과를 찾은 뒤 소스코드를 분석하는 것이 가장 효율적인 학습 방법입니다.',
          },
        ],
      },
    ],
  },

  // ─── 2. p5.js 크리에이티브 코딩 ──────────────────────────────────────
  {
    slug: 'p5',
    title: 'p5.js 크리에이티브 코딩',
    description: '코드로 만드는 비주얼 아트',
    category: 'creative',
    color: 'bg-rose-500',
    difficulty: 'beginner',
    objectives: [
      'setup/draw 구조와 기본 도형',
      '색상, 변환, 애니메이션',
      '이미지 처리와 픽셀 조작',
      '물리 시뮬레이션과 사운드',
      '실전 인터랙티브 아트와 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'p5-basics',
        title: 'p5.js 시작하기',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'p5.js의 기본 구조: setup()과 draw()',
          },
          {
            type: 'text',
            text: 'p5.js는 크리에이티브 코딩을 위한 자바스크립트 라이브러리입니다. 모든 p5.js 프로그램은 두 가지 핵심 함수로 구성됩니다: setup()은 프로그램 시작 시 한 번 실행되어 캔버스를 만들고 초기 설정을 하며, draw()는 매 프레임마다 반복 호출되어 화면을 그립니다. 기본적으로 draw()는 초당 60회 호출됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// p5.js 기본 구조
function setup() {
  // 프로그램 시작 시 1번만 실행
  createCanvas(800, 600);  // 800x600 크기의 캔버스 생성
  background(20);          // 배경색 (0=검정, 255=흰색)
  frameRate(60);           // 초당 프레임 수 설정
}

function draw() {
  // 매 프레임마다 반복 실행 (기본 60fps)
  background(20);  // 매 프레임 배경을 다시 그려 잔상 제거

  // 캔버스 중앙에 원 그리기
  fill(255, 100, 150);         // 채우기 색상 (R, G, B)
  ellipse(width / 2, height / 2, 100, 100); // x, y, 너비, 높이
}`,
          },
          {
            type: 'list',
            items: [
              'createCanvas(w, h) — 지정한 크기의 HTML5 캔버스를 생성',
              'background(color) — 캔버스 전체를 지정한 색으로 채움',
              'frameRate(fps) — draw() 호출 빈도 설정 (기본 60)',
              'width / height — 캔버스의 현재 가로/세로 크기',
              'setup() — 초기화 코드, draw() — 반복 렌더링 코드',
            ],
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- HTML에서 p5.js 사용하기 -->
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
  <script src="sketch.js"></script>
</head>
<body>
  <!-- 캔버스는 p5.js가 자동으로 생성합니다 -->
</body>
</html>`,
          },
          {
            type: 'tip',
            text: 'draw() 안에서 background()를 호출하지 않으면 이전 프레임의 그림이 그대로 남아 흔적(trail) 효과가 생깁니다. 이 효과를 의도적으로 활용하면 멋진 비주얼을 만들 수 있습니다.',
          },
        ],
      },
      {
        slug: 'shapes-colors',
        title: '도형과 색상',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: '다양한 도형 그리기',
          },
          {
            type: 'text',
            text: 'p5.js는 원, 사각형, 선, 삼각형, 호 등 다양한 기본 도형 함수를 제공합니다. 각 도형은 위치와 크기를 매개변수로 받으며, fill()과 stroke()으로 색을 지정합니다. 색상은 RGB(빨강, 초록, 파랑) 또는 HSB(색상, 채도, 밝기) 모드로 표현할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `function setup() {
  createCanvas(600, 400);
  background(240);
}

function draw() {
  background(240);

  // ── 채우기와 테두리 설정 ──
  fill(66, 135, 245);       // RGB 파란색 채우기
  stroke(30, 60, 120);      // 테두리 색상
  strokeWeight(3);           // 테두리 두께

  // ── 기본 도형들 ──
  ellipse(100, 100, 80, 80);           // 원: x, y, 너비, 높이
  rect(200, 60, 80, 80);               // 사각형: x, y, 너비, 높이
  line(350, 60, 430, 140);             // 선: x1, y1, x2, y2
  triangle(500, 60, 460, 140, 540, 140); // 삼각형: x1,y1, x2,y2, x3,y3

  // ── 호(arc) ──
  fill(245, 166, 66);
  arc(100, 280, 80, 80, 0, PI + QUARTER_PI, PIE); // x, y, w, h, 시작각, 끝각, 모드

  // ── 채우기/테두리 없이 ──
  noFill();                  // 채우기 없음 (투명)
  stroke(220, 50, 50);
  ellipse(250, 280, 80, 80);

  noStroke();                // 테두리 없음
  fill(50, 200, 100);
  rect(350, 240, 80, 80);
}`,
          },
          {
            type: 'heading',
            text: '색상 모드: RGB vs HSB',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(0);

  // ── RGB 모드 (기본) ──
  // colorMode(RGB, 최대R, 최대G, 최대B, 최대Alpha)
  colorMode(RGB, 255);
  fill(255, 0, 0);       // 빨강
  rect(20, 20, 50, 50);
  fill(0, 255, 0);       // 초록
  rect(80, 20, 50, 50);
  fill(0, 0, 255);       // 파랑
  rect(140, 20, 50, 50);
  fill(255, 200, 0, 150); // 노랑 (반투명)
  rect(200, 20, 50, 50);

  // ── HSB 모드 — 무지개 색상 만들기에 유리 ──
  // colorMode(HSB, 최대Hue, 최대Sat, 최대Bright)
  colorMode(HSB, 360, 100, 100);
  noStroke();
  for (let i = 0; i < 360; i += 10) {
    fill(i, 90, 90);
    rect(20 + i * 1.5, 150, 15, 80);
  }
}`,
          },
          {
            type: 'list',
            items: [
              'fill(r, g, b, a) — 도형 안쪽 색상 설정 (a는 투명도, 0~255)',
              'stroke(r, g, b) — 도형 테두리 색상 설정',
              'strokeWeight(n) — 테두리 두께 (픽셀)',
              'noFill() / noStroke() — 채우기 또는 테두리 비활성화',
              'colorMode(HSB) — HSB 모드에서 색상(Hue)만 바꾸면 무지개 생성 가능',
            ],
          },
          {
            type: 'tip',
            text: 'HSB 컬러 모드는 그라데이션이나 색상 팔레트를 만들 때 매우 편리합니다. Hue(0~360)만 변경하면 빨-주-노-초-파-보 순서로 자연스럽게 색이 바뀝니다.',
          },
        ],
      },
      {
        slug: 'interaction',
        title: '인터랙션과 애니메이션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '마우스와 키보드 인터랙션',
          },
          {
            type: 'text',
            text: 'p5.js는 마우스 위치, 클릭, 키보드 입력 등을 쉽게 처리할 수 있는 내장 변수와 함수를 제공합니다. mouseX와 mouseY는 현재 마우스 좌표를, mousePressed()와 keyPressed()는 이벤트 콜백을 제공합니다. 이를 수학 함수(sin, cos, random, noise)와 결합하면 인터랙티브한 비주얼 아트를 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `let particles = [];

function setup() {
  createCanvas(800, 600);
  background(10);
}

function draw() {
  background(10, 25); // 반투명 배경으로 잔상 효과

  // 마우스 위치에 원 그리기
  noStroke();
  fill(255, 150, 200, 200);
  ellipse(mouseX, mouseY, 30, 30);

  // 파티클 업데이트
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += random(-2, 2);
    p.y += random(-2, 2);
    p.life -= 2;
    fill(p.r, p.g, p.b, p.life);
    ellipse(p.x, p.y, p.size);
    if (p.life <= 0) particles.splice(i, 1);
  }
}

// 마우스 클릭 시 파티클 생성
function mousePressed() {
  for (let i = 0; i < 20; i++) {
    particles.push({
      x: mouseX, y: mouseY,
      r: random(150, 255), g: random(50, 200), b: random(100, 255),
      size: random(5, 15),
      life: 255,
    });
  }
}

// 키보드 입력
function keyPressed() {
  if (key === 'c') background(10); // 'c' 키로 화면 지우기
}`,
          },
          {
            type: 'heading',
            text: '수학 함수를 활용한 유기적 움직임',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(10, 15, 30);
  noStroke();
  let t = frameCount * 0.02;

  for (let i = 0; i < 200; i++) {
    // noise() — 자연스러운 난수 (Perlin Noise)
    let n = noise(i * 0.1, t);

    // map() — 값의 범위를 변환
    let x = map(sin(t + i * 0.05), -1, 1, 100, width - 100);
    let y = map(cos(t + i * 0.07), -1, 1, 100, height - 100);

    // sin/cos 로 원형 움직임
    let offsetX = cos(i * 0.3 + t) * 80;
    let offsetY = sin(i * 0.3 + t) * 80;

    let size = map(n, 0, 1, 3, 12);
    fill(map(i, 0, 200, 100, 255), 150, 255, 180);
    ellipse(x + offsetX, y + offsetY, size);
  }
}`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// translate/rotate/push/pop 으로 좌표계 변환
function draw() {
  background(0);
  let t = frameCount * 0.01;

  // push/pop — 변환 상태를 저장/복원
  push();
    translate(width / 2, height / 2); // 원점을 화면 중앙으로
    rotate(t);                         // 회전 (라디안)
    fill(100, 200, 255);
    rectMode(CENTER);
    rect(0, 0, 100, 100);

    // 중첩 변환
    push();
      translate(100, 0);
      rotate(t * 3);
      fill(255, 100, 150);
      rect(0, 0, 40, 40);
    pop();
  pop();
}`,
          },
          {
            type: 'list',
            items: [
              'mouseX / mouseY — 현재 마우스 좌표 (매 프레임 자동 업데이트)',
              'random(min, max) — 지정 범위의 무작위 값 반환',
              'noise(x, y) — Perlin Noise로 부드럽게 변하는 0~1 난수',
              'map(val, min1, max1, min2, max2) — 값의 범위를 변환',
              'sin() / cos() — 원형 운동, 파동 등 주기적 움직임',
              'push() / pop() — translate, rotate 등 변환 상태를 격리',
            ],
          },
          {
            type: 'tip',
            text: 'noise()는 random()과 달리 입력값이 가까우면 출력값도 비슷합니다. 이 특성으로 구름, 지형, 물결 같은 자연스러운 패턴을 만들 수 있습니다. noise(i * 0.01)처럼 작은 증분을 사용하면 더 부드러운 변화를 얻습니다.',
          },
        ],
      },
      {
        slug: 'images-pixels',
        title: '이미지와 픽셀 조작',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '이미지 로딩과 표시',
          },
          {
            type: 'text',
            text: 'p5.js에서는 loadImage()로 이미지를 로드하고 image()로 캔버스에 표시할 수 있습니다. 또한 pixels 배열에 직접 접근하여 픽셀 단위로 이미지를 조작할 수 있습니다. 이를 통해 필터 효과, 색상 변환, 이미지 분석 등 다양한 처리가 가능합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "let img;\n\n// preload()에서 이미지 미리 로딩\nfunction preload() {\n  img = loadImage('photo.jpg');\n}\n\nfunction setup() {\n  createCanvas(800, 600);\n}\n\nfunction draw() {\n  background(0);\n\n  // 이미지 표시\n  image(img, 0, 0);                    // 원본 크기\n  image(img, 400, 0, 200, 150);        // 크기 지정\n\n  // 이미지 일부 자르기 (sx, sy, sw, sh, dx, dy, dw, dh)\n  image(img, 0, 300, 200, 150, 100, 50, 300, 200);\n\n  // 틴트(색조) 적용\n  tint(255, 100, 100);    // 빨간 틴트\n  image(img, 400, 300, 200, 150);\n  noTint();                // 틴트 초기화\n}",
          },
          {
            type: 'heading',
            text: '픽셀 조작',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "let img;\n\nfunction preload() {\n  img = loadImage('photo.jpg');\n}\n\nfunction setup() {\n  createCanvas(800, 400);\n  img.resize(400, 400);\n  noLoop(); // draw()를 한 번만 실행\n}\n\nfunction draw() {\n  // 원본 표시\n  image(img, 0, 0);\n\n  // 픽셀 데이터 접근\n  img.loadPixels(); // 픽셀 배열 로드 (필수)\n\n  // 그레이스케일 변환\n  for (let i = 0; i < img.pixels.length; i += 4) {\n    let r = img.pixels[i];     // Red\n    let g = img.pixels[i + 1]; // Green\n    let b = img.pixels[i + 2]; // Blue\n    // Alpha는 img.pixels[i + 3]\n\n    let gray = (r + g + b) / 3;\n    img.pixels[i] = gray;\n    img.pixels[i + 1] = gray;\n    img.pixels[i + 2] = gray;\n  }\n\n  img.updatePixels(); // 변경사항 적용 (필수)\n  image(img, 400, 0); // 변환된 이미지 표시\n}",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 모자이크 효과\nfunction setup() {\n  createCanvas(800, 600);\n  noStroke();\n}\n\nfunction draw() {\n  background(0);\n  img.loadPixels();\n\n  let blockSize = 10; // 모자이크 블록 크기\n\n  for (let x = 0; x < img.width; x += blockSize) {\n    for (let y = 0; y < img.height; y += blockSize) {\n      // 블록의 중앙 픽셀 색상 가져오기\n      let idx = ((y * img.width) + x) * 4;\n      let r = img.pixels[idx];\n      let g = img.pixels[idx + 1];\n      let b = img.pixels[idx + 2];\n\n      fill(r, g, b);\n      rect(x, y, blockSize, blockSize);\n    }\n  }\n}",
          },
          {
            type: 'list',
            items: [
              'preload() — setup() 전에 실행, 이미지/폰트 등 에셋 로딩',
              'loadImage(url) — 이미지 파일을 p5.Image 객체로 로드',
              'loadPixels() — 픽셀 배열에 접근하기 전에 반드시 호출',
              'pixels[] — RGBA 순서로 4개씩 묶인 1차원 배열',
              'updatePixels() — 픽셀 수정 후 반드시 호출하여 반영',
            ],
          },
          {
            type: 'tip',
            text: '픽셀 인덱스 계산: index = (y * width + x) * 4로 특정 좌표의 픽셀에 접근합니다. 4를 곱하는 이유는 각 픽셀이 R, G, B, A 4개의 값을 가지기 때문입니다.',
          },
        ],
      },
      {
        slug: 'physics-motion',
        title: '물리와 움직임',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '벡터와 물리 시뮬레이션',
          },
          {
            type: 'text',
            text: 'p5.js의 createVector()를 사용하면 위치, 속도, 가속도를 벡터로 표현하여 자연스러운 물리 시뮬레이션을 구현할 수 있습니다. 뉴턴의 운동 법칙(F=ma)을 코드로 옮기면 중력, 바람, 마찰 등 현실적인 움직임을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 물리 기반 공 튀기기\nlet position, velocity, acceleration;\nlet gravity;\n\nfunction setup() {\n  createCanvas(800, 600);\n  position = createVector(width / 2, 100);\n  velocity = createVector(2, 0);\n  gravity = createVector(0, 0.3); // 중력\n}\n\nfunction draw() {\n  background(20);\n\n  // 물리 업데이트: 가속도 -> 속도 -> 위치\n  velocity.add(gravity);       // 속도에 중력 적용\n  position.add(velocity);       // 위치에 속도 적용\n\n  // 바닥 충돌\n  if (position.y > height - 20) {\n    position.y = height - 20;\n    velocity.y *= -0.8;  // 반발 (에너지 손실 20%)\n  }\n\n  // 벽 충돌\n  if (position.x > width - 20 || position.x < 20) {\n    velocity.x *= -1;\n  }\n\n  // 공 그리기\n  fill(255, 100, 150);\n  noStroke();\n  ellipse(position.x, position.y, 40, 40);\n}",
          },
          {
            type: 'heading',
            text: '파티클 시스템',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "let particles = [];\n\nfunction setup() {\n  createCanvas(800, 600);\n}\n\nfunction draw() {\n  background(10, 20, 30);\n\n  // 마우스 위치에서 파티클 생성\n  if (mouseIsPressed) {\n    for (let i = 0; i < 3; i++) {\n      particles.push({\n        pos: createVector(mouseX, mouseY),\n        vel: p5.Vector.random2D().mult(random(1, 4)),\n        life: 255,\n        size: random(4, 12),\n        hue: random(360),\n      });\n    }\n  }\n\n  // 파티클 업데이트 및 렌더링\n  colorMode(HSB, 360, 100, 100, 255);\n  noStroke();\n\n  for (let i = particles.length - 1; i >= 0; i--) {\n    let p = particles[i];\n    p.vel.y += 0.05; // 중력\n    p.pos.add(p.vel);\n    p.life -= 3;\n\n    fill(p.hue, 80, 100, p.life);\n    ellipse(p.pos.x, p.pos.y, p.size);\n\n    if (p.life <= 0) particles.splice(i, 1);\n  }\n}",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 인력/척력 시뮬레이션\nlet attractor;\nlet movers = [];\n\nfunction setup() {\n  createCanvas(800, 600);\n  attractor = createVector(width / 2, height / 2);\n\n  for (let i = 0; i < 50; i++) {\n    movers.push({\n      pos: createVector(random(width), random(height)),\n      vel: createVector(0, 0),\n      mass: random(1, 5),\n    });\n  }\n}\n\nfunction draw() {\n  background(10, 25);\n  attractor.set(mouseX, mouseY);\n\n  // 인력 중심 표시\n  fill(255, 50, 50);\n  noStroke();\n  ellipse(attractor.x, attractor.y, 20);\n\n  for (let m of movers) {\n    // 인력 계산 (뉴턴 만유인력)\n    let force = p5.Vector.sub(attractor, m.pos);\n    let dist = constrain(force.mag(), 5, 50);\n    force.normalize();\n    let strength = (10 * m.mass) / (dist * dist);\n    force.mult(strength);\n\n    // F = ma -> a = F/m\n    let acc = p5.Vector.div(force, m.mass);\n    m.vel.add(acc);\n    m.vel.mult(0.99); // 마찰\n    m.pos.add(m.vel);\n\n    fill(100, 200, 255, 200);\n    ellipse(m.pos.x, m.pos.y, m.mass * 6);\n  }\n}",
          },
          {
            type: 'list',
            items: [
              'createVector(x, y) — 2D 벡터 생성 (위치, 속도, 힘 표현)',
              'vec.add(other) — 벡터 덧셈 (속도를 위치에 더하기 등)',
              'vec.mult(scalar) — 벡터 스칼라 곱 (힘의 크기 조절)',
              'p5.Vector.sub(a, b) — 새 벡터 반환 (방향 계산)',
              'p5.Vector.random2D() — 무작위 방향의 단위 벡터',
              'constrain(val, min, max) — 값의 범위 제한',
            ],
          },
          {
            type: 'tip',
            text: '물리 시뮬레이션에서 마찰을 적용하려면 velocity.mult(0.99)처럼 속도에 1보다 작은 값을 곱합니다. 이 값이 1에 가까울수록 마찰이 적고, 0에 가까울수록 빠르게 멈춥니다.',
          },
        ],
      },
      {
        slug: 'sound-interaction',
        title: '사운드와 인터랙션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'p5.sound 라이브러리',
          },
          {
            type: 'text',
            text: 'p5.sound는 p5.js의 사운드 라이브러리로, 오디오 파일 재생, 마이크 입력, FFT 분석, 오실레이터 생성 등 오디오 관련 기능을 제공합니다. 사운드 데이터를 시각화하면 음악에 반응하는 인터랙티브 비주얼을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "let song;\nlet fft;\nlet amplitude;\n\nfunction preload() {\n  song = loadSound('music.mp3');\n}\n\nfunction setup() {\n  createCanvas(800, 600);\n\n  // FFT 분석기 (주파수 분석)\n  fft = new p5.FFT(0.8, 128); // smoothing, bins\n\n  // 진폭 분석기\n  amplitude = new p5.Amplitude();\n}\n\nfunction draw() {\n  background(10);\n\n  // 주파수 스펙트럼 시각화\n  let spectrum = fft.analyze();\n  noStroke();\n\n  for (let i = 0; i < spectrum.length; i++) {\n    let x = map(i, 0, spectrum.length, 0, width);\n    let h = map(spectrum[i], 0, 255, 0, height);\n\n    colorMode(HSB, 360, 100, 100);\n    fill(map(i, 0, spectrum.length, 0, 360), 80, 90);\n    rect(x, height - h, width / spectrum.length, h);\n  }\n\n  // 전체 볼륨 표시\n  let vol = amplitude.getLevel();\n  fill(255);\n  ellipse(width / 2, height / 2, vol * 500);\n}\n\nfunction mousePressed() {\n  if (song.isPlaying()) {\n    song.pause();\n  } else {\n    song.play();\n  }\n}",
          },
          {
            type: 'heading',
            text: '마이크 입력과 오실레이터',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "let mic;\nlet osc;\n\nfunction setup() {\n  createCanvas(800, 600);\n\n  // 마이크 입력\n  mic = new p5.AudioIn();\n  mic.start();\n\n  // 오실레이터 (사인파 생성)\n  osc = new p5.Oscillator('sine');\n  osc.freq(440); // 주파수 440Hz (라 음)\n  osc.amp(0);    // 초기 볼륨 0\n  osc.start();\n}\n\nfunction draw() {\n  background(10, 20, 30);\n\n  // 마이크 볼륨 시각화\n  let vol = mic.getLevel();\n  let size = map(vol, 0, 1, 10, 400);\n\n  noStroke();\n  fill(100, 200, 255, 200);\n  ellipse(width / 2, height / 2, size);\n\n  // 마이크 파형 시각화\n  stroke(255, 100, 150);\n  noFill();\n  beginShape();\n  let waveform = fft.waveform();\n  for (let i = 0; i < waveform.length; i++) {\n    let x = map(i, 0, waveform.length, 0, width);\n    let y = map(waveform[i], -1, 1, 0, height);\n    vertex(x, y);\n  }\n  endShape();\n}\n\n// 마우스 Y 위치로 오실레이터 주파수 제어\nfunction mouseMoved() {\n  let freq = map(mouseY, 0, height, 880, 110);\n  osc.freq(freq);\n}\n\nfunction mousePressed() {\n  osc.amp(0.3, 0.05); // 볼륨 올리기\n}\n\nfunction mouseReleased() {\n  osc.amp(0, 0.5); // 볼륨 내리기\n}",
          },
          {
            type: 'list',
            items: [
              'loadSound(url) — 오디오 파일 로드 (mp3, wav, ogg)',
              'p5.FFT — 주파수 분석, analyze()로 스펙트럼, waveform()으로 파형',
              'p5.Amplitude — 전체 볼륨(진폭) 측정',
              'p5.AudioIn — 마이크 입력 캡처',
              'p5.Oscillator — 사인/사각/삼각/톱니파 생성',
            ],
          },
          {
            type: 'tip',
            text: 'p5.sound는 별도 스크립트로 로드해야 합니다. CDN에서 p5.sound.min.js를 추가하세요. 마이크 접근은 HTTPS 환경에서만 가능하며, 사용자 허가가 필요합니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 인터랙티브 아트',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '인터랙티브 아트 프로젝트',
          },
          {
            type: 'text',
            text: '지금까지 배운 p5.js 기능을 모두 활용하여 마우스와 키보드에 반응하는 인터랙티브 제너러티브 아트 작품을 만듭니다. 파티클 시스템, 색상 변환, 수학 함수, 좌표 변환을 결합하여 독창적인 비주얼을 구현합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 제너러티브 꽃 패턴\nlet petals = [];\nlet colorPalette;\nlet mode = 0;\n\nfunction setup() {\n  createCanvas(800, 800);\n  colorMode(HSB, 360, 100, 100, 100);\n  background(0);\n  colorPalette = [0, 30, 60, 180, 270, 330]; // 색상 팔레트\n}\n\nfunction draw() {\n  // 반투명 배경으로 잔상\n  background(0, 0, 0, 3);\n\n  // 마우스 움직임에 따라 꽃잎 생성\n  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);\n  if (speed > 2) {\n    let hue = colorPalette[int(random(colorPalette.length))];\n    petals.push({\n      x: mouseX,\n      y: mouseY,\n      angle: random(TWO_PI),\n      size: random(20, 60),\n      hue: hue,\n      life: 100,\n      rotSpeed: random(-0.02, 0.02),\n      petalCount: int(random(5, 12)),\n    });\n  }\n\n  // 꽃잎 렌더링\n  for (let i = petals.length - 1; i >= 0; i--) {\n    let p = petals[i];\n    drawFlower(p);\n    p.angle += p.rotSpeed;\n    p.life -= 0.5;\n    if (p.life <= 0) petals.splice(i, 1);\n  }\n}",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 꽃 그리기 함수\nfunction drawFlower(p) {\n  push();\n  translate(p.x, p.y);\n  rotate(p.angle);\n\n  let alpha = map(p.life, 0, 100, 0, 80);\n\n  for (let j = 0; j < p.petalCount; j++) {\n    rotate(TWO_PI / p.petalCount);\n    fill(p.hue, 70, 90, alpha);\n    noStroke();\n    ellipse(p.size / 3, 0, p.size, p.size / 3);\n  }\n\n  // 꽃 중심\n  fill(60, 90, 100, alpha);\n  ellipse(0, 0, p.size / 4);\n  pop();\n}\n\nfunction keyPressed() {\n  if (key === 'c') background(0);          // 화면 지우기\n  if (key === 's') saveCanvas('art', 'png'); // 저장\n  if (key === '1') mode = 0;                // 꽃 모드\n  if (key === '2') mode = 1;                // 기하학 모드\n}\n\nfunction mousePressed() {\n  // 클릭하면 원형 폭발\n  for (let i = 0; i < 20; i++) {\n    let angle = random(TWO_PI);\n    let dist = random(50, 150);\n    petals.push({\n      x: mouseX + cos(angle) * dist,\n      y: mouseY + sin(angle) * dist,\n      angle: angle,\n      size: random(30, 80),\n      hue: colorPalette[int(random(colorPalette.length))],\n      life: 100,\n      rotSpeed: random(-0.03, 0.03),\n      petalCount: int(random(5, 12)),\n    });\n  }\n}",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 기하학적 패턴 모드\nfunction drawGeometricPattern() {\n  push();\n  translate(width / 2, height / 2);\n  let t = frameCount * 0.01;\n\n  for (let i = 0; i < 100; i++) {\n    let angle = map(i, 0, 100, 0, TWO_PI * 3);\n    let r = map(sin(angle * 3 + t), -1, 1, 50, 300);\n    let x = cos(angle + t * 0.5) * r;\n    let y = sin(angle + t * 0.5) * r;\n\n    let hue = map(i, 0, 100, 0, 360);\n    fill(hue, 80, 100, 60);\n    noStroke();\n\n    let size = map(sin(t + i * 0.1), -1, 1, 3, 15);\n    ellipse(x, y, size);\n  }\n  pop();\n}\n\n// saveCanvas로 작품 저장\n// saveCanvas('myArt', 'png');\n// saveFrames('frame', 'png', 5, 25); // 5초간 25fps로 프레임 저장",
          },
          {
            type: 'list',
            items: [
              'push() / pop() — 변환 상태 격리로 복잡한 패턴 구성',
              'dist(x1, y1, x2, y2) — 두 점 사이의 거리 계산',
              'pmouseX / pmouseY — 이전 프레임의 마우스 좌표',
              'saveCanvas(name, ext) — 캔버스를 이미지로 저장',
              'TWO_PI, HALF_PI, QUARTER_PI — 자주 쓰는 각도 상수',
            ],
          },
          {
            type: 'tip',
            text: '제너러티브 아트에서는 무작위성과 규칙성의 균형이 핵심입니다. random()으로 다양성을, noise()와 sin/cos로 일관성을 부여하세요. 결과물이 마음에 들면 saveCanvas()로 저장할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'p5.js 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'p5.js 핵심 API 레퍼런스',
          },
          {
            type: 'text',
            text: 'p5.js의 주요 함수와 자주 사용하는 API를 카테고리별로 정리합니다. 빠른 참조를 위해 핵심 기능을 모아두었습니다.',
          },
          {
            type: 'heading',
            text: '구조와 환경',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 라이프사이클 함수\nfunction preload() { }  // 에셋 로딩 (setup 전 실행)\nfunction setup() { }    // 초기화 (1회 실행)\nfunction draw() { }     // 렌더링 루프 (매 프레임)\n\n// 캔버스\ncreateCanvas(width, height);     // 2D 캔버스 생성\ncreateCanvas(w, h, WEBGL);       // 3D 캔버스 (WebGL)\nresizeCanvas(width, height);     // 캔버스 크기 변경\nbackground(r, g, b, a);          // 배경색 설정\n\n// 프레임\nframeRate(fps);          // 프레임 속도 설정\nframeCount;              // 현재까지 그려진 프레임 수\nloop() / noLoop();       // draw() 루프 제어",
          },
          {
            type: 'heading',
            text: '도형과 색상',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 기본 도형\nellipse(x, y, w, h);     // 타원/원\nrect(x, y, w, h);       // 사각형\nline(x1, y1, x2, y2);   // 선\ntriangle(x1, y1, x2, y2, x3, y3); // 삼각형\narc(x, y, w, h, start, stop);     // 호\npoint(x, y);             // 점\n\n// 색상\nfill(r, g, b, a);        // 채우기 색\nstroke(r, g, b);         // 테두리 색\nstrokeWeight(w);         // 테두리 두께\nnoFill();                // 채우기 없음\nnoStroke();              // 테두리 없음\ncolorMode(RGB | HSB, max); // 색상 모드\n\n// 변환\ntranslate(x, y);         // 좌표계 이동\nrotate(angle);           // 회전 (라디안)\nscale(s);                // 확대/축소\npush() / pop();          // 변환 상태 저장/복원",
          },
          {
            type: 'heading',
            text: '입력과 수학',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 마우스\nmouseX, mouseY;          // 현재 마우스 좌표\npmouseX, pmouseY;        // 이전 프레임 좌표\nmouseIsPressed;          // 마우스 눌림 여부\nfunction mousePressed() { }  // 클릭 이벤트\nfunction mouseDragged() { }  // 드래그 이벤트\n\n// 키보드\nkey;                     // 마지막으로 누른 키\nkeyCode;                 // 키 코드 (UP_ARROW 등)\nkeyIsPressed;            // 키 눌림 여부\nfunction keyPressed() { }    // 키 누름 이벤트\n\n// 수학\nrandom(min, max);        // 무작위 값\nnoise(x, y, z);          // Perlin Noise (0~1)\nmap(val, min1, max1, min2, max2); // 범위 변환\nconstrain(val, min, max);// 범위 제한\nlerp(start, end, t);     // 선형 보간\ndist(x1, y1, x2, y2);   // 거리 계산\nsin(angle), cos(angle);  // 삼각함수",
          },
          {
            type: 'list',
            items: [
              'preload/setup/draw — p5.js 프로그램의 3대 라이프사이클 함수',
              'createCanvas(w, h) — 프로그램의 시작점, 캔버스 생성',
              'fill/stroke/noFill/noStroke — 도형의 색상 제어',
              'push/pop — 좌표 변환과 스타일을 격리하여 독립적 렌더링',
              'mouseX/mouseY/key — 사용자 입력을 활용한 인터랙션',
              'random/noise/map — 제너러티브 아트의 핵심 수학 함수',
              'p5.Vector — 물리 시뮬레이션을 위한 2D/3D 벡터',
              'loadImage/loadSound — 에셋 로딩 (preload에서 사용)',
            ],
          },
          {
            type: 'tip',
            text: '공식 레퍼런스(p5js.org/reference)에서 모든 함수의 상세 설명과 예제를 확인할 수 있습니다. 또한 p5js.org/examples에서 다양한 예제를 실행해볼 수 있습니다.',
          },
        ],
      },
    ],
  },

  // ─── 3. Tone.js 웹 오디오 ────────────────────────────────────────────
  {
    slug: 'tone',
    title: 'Tone.js 웹 오디오',
    description: '브라우저에서 음악과 사운드 프로그래밍',
    category: 'creative',
    color: 'bg-pink-500',
    difficulty: 'intermediate',
    objectives: [
      '오실레이터와 기본 사운드 생성',
      '신디사이저와 엔벨로프',
      '이펙트, 시퀀싱, 패턴',
      '샘플링과 오디오 프로세싱',
      '실전 드럼 머신과 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'synths',
        title: '신디사이저 기본',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Tone.js 신디사이저로 소리 만들기',
          },
          {
            type: 'text',
            text: 'Tone.js는 Web Audio API를 쉽게 다룰 수 있는 라이브러리입니다. 신디사이저(Synth)는 코드로 소리를 생성하는 가상 악기입니다. Tone.Synth는 가장 기본적인 신디사이저이며, triggerAttackRelease()로 음을 연주합니다. 브라우저 보안 정책상 사용자 인터랙션(클릭) 이후에 Tone.start()를 호출해야 오디오가 활성화됩니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `import * as Tone from 'tone';

// 오디오 컨텍스트 시작 — 반드시 사용자 클릭 이벤트 안에서 호출
document.getElementById('startBtn').addEventListener('click', async () => {
  await Tone.start();
  console.log('오디오 준비 완료!');
});

// ── 기본 신디사이저 ──
const synth = new Tone.Synth().toDestination();

// triggerAttackRelease(음이름, 길이, 시작시간?)
synth.triggerAttackRelease('C4', '8n');  // 도(C4), 8분음표 길이
synth.triggerAttackRelease('E4', '8n', '+0.3'); // 0.3초 뒤 미(E4)
synth.triggerAttackRelease('G4', '4n', '+0.6'); // 0.6초 뒤 솔(G4)`,
          },
          {
            type: 'heading',
            text: '다양한 신디사이저 종류',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// PolySynth — 여러 음을 동시에 연주 (화음)
const polySynth = new Tone.PolySynth(Tone.Synth).toDestination();
polySynth.triggerAttackRelease(['C4', 'E4', 'G4'], '2n'); // C 메이저 코드

// AMSynth — 진폭 변조 신디사이저 (떨리는 소리)
const amSynth = new Tone.AMSynth().toDestination();
amSynth.triggerAttackRelease('A3', '2n');

// FMSynth — 주파수 변조 신디사이저 (금속적/종소리)
const fmSynth = new Tone.FMSynth({
  modulationIndex: 12,
  harmonicity: 3.01,
}).toDestination();
fmSynth.triggerAttackRelease('D4', '4n');

// MembraneSynth — 드럼/타악기 소리
const kick = new Tone.MembraneSynth().toDestination();
kick.triggerAttackRelease('C1', '8n');`,
          },
          {
            type: 'list',
            items: [
              'Tone.Synth — 단순 오실레이터 + 엔벨로프, 기본 멜로디에 적합',
              'Tone.PolySynth — 화음 연주 가능, 내부에 여러 Synth 보유',
              'Tone.AMSynth — 진폭 변조, 트레몰로 같은 떨리는 음색',
              'Tone.FMSynth — 주파수 변조, 다양한 음색 합성 가능',
              'toDestination() — 스피커(출력)에 연결하는 메서드',
              '음이름 형식: "C4" = 4옥타브 도, "A#3" = 3옥타브 라#',
            ],
          },
          {
            type: 'tip',
            text: '브라우저의 자동재생(Autoplay) 정책으로 인해, 반드시 버튼 클릭 등 사용자 인터랙션 이벤트 핸들러 안에서 await Tone.start()를 먼저 호출해야 합니다. 그렇지 않으면 소리가 나지 않습니다.',
          },
        ],
      },
      {
        slug: 'effects',
        title: '이펙트와 프로세싱',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '오디오 이펙트 체인 구성하기',
          },
          {
            type: 'text',
            text: '이펙트(Effect)는 원본 소리를 가공하여 새로운 느낌을 만듭니다. Reverb는 공간감(잔향), Delay는 메아리, Distortion은 일그러짐, Filter는 특정 주파수를 걸러냅니다. Tone.js에서는 .connect()로 이펙트를 연결하거나, .chain()으로 여러 이펙트를 순서대로 연결할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `import * as Tone from 'tone';

// ── 개별 이펙트 생성 ──
// Reverb — 잔향 (콘서트홀처럼 울리는 효과)
const reverb = new Tone.Reverb({
  decay: 3,       // 잔향 길이 (초)
  wet: 0.5,       // 원본 대비 이펙트 비율 (0~1)
}).toDestination();

// Delay — 메아리 효과
const delay = new Tone.FeedbackDelay({
  delayTime: '8n',   // 딜레이 간격 (8분음표)
  feedback: 0.4,      // 반복 감쇄 (0~1)
  wet: 0.3,
}).toDestination();

// Distortion — 소리 일그러짐
const distortion = new Tone.Distortion({
  distortion: 0.6,   // 일그러짐 정도 (0~1)
  wet: 0.7,
}).toDestination();

// Filter — 주파수 필터링
const filter = new Tone.Filter({
  frequency: 800,     // 기준 주파수 (Hz)
  type: 'lowpass',     // lowpass, highpass, bandpass
  rolloff: -24,        // 감쇄 기울기 (dB/octave)
}).toDestination();`,
          },
          {
            type: 'heading',
            text: '이펙트 체인 연결하기',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── connect()로 하나씩 연결 ──
const synth1 = new Tone.Synth();
synth1.connect(reverb); // synth → reverb → destination
synth1.triggerAttackRelease('C4', '4n');

// ── chain()으로 여러 이펙트를 순서대로 연결 ──
const chorus = new Tone.Chorus(4, 2.5, 0.5);
const tremolo = new Tone.Tremolo(9, 0.75).start();

const synth2 = new Tone.PolySynth(Tone.Synth);
// synth2 → chorus → tremolo → reverb → speaker
synth2.chain(chorus, tremolo, reverb, Tone.Destination);

synth2.triggerAttackRelease(['E4', 'G4', 'B4'], '2n');

// ── 실시간으로 이펙트 파라미터 변경 ──
reverb.decay = 5;
delay.delayTime.value = 0.25;
filter.frequency.rampTo(2000, 1); // 1초에 걸쳐 주파수 변경`,
          },
          {
            type: 'list',
            items: [
              'Reverb — 공간감/잔향, decay로 길이 조절',
              'FeedbackDelay — 반복 메아리, feedback으로 감쇄 조절',
              'Distortion — 기타 앰프 같은 일그러짐',
              'Filter — lowpass(고음 제거), highpass(저음 제거), bandpass(특정 대역만)',
              '.connect(effect) — 한 개의 이펙트에 연결',
              '.chain(a, b, c, Tone.Destination) — 여러 이펙트를 순서대로 체이닝',
              'wet — 이펙트 적용 비율 (0: 원본만, 1: 이펙트만)',
            ],
          },
          {
            type: 'tip',
            text: 'rampTo() 메서드를 사용하면 파라미터를 부드럽게 전환할 수 있습니다. filter.frequency.rampTo(4000, 2)처럼 목표값과 시간(초)을 지정하면 2초에 걸쳐 점진적으로 변합니다.',
          },
        ],
      },
      {
        slug: 'sequences',
        title: '시퀀스와 패턴',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Transport와 시퀀싱',
          },
          {
            type: 'text',
            text: 'Tone.Transport는 음악의 "지휘자" 역할로 BPM(템포), 재생/정지, 타임라인을 관리합니다. Sequence는 배열의 음을 순서대로 반복 재생하고, Pattern은 다양한 순서 패턴(위/아래/랜덤 등)으로 재생하며, Loop는 지정 간격마다 콜백을 실행합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `import * as Tone from 'tone';

// ── Transport 설정 ──
Tone.Transport.bpm.value = 120; // 분당 박자 수

// ── Sequence — 순서대로 반복 재생 ──
const synth = new Tone.Synth().toDestination();

const melody = new Tone.Sequence(
  (time, note) => {
    synth.triggerAttackRelease(note, '8n', time);
  },
  ['C4', 'E4', 'G4', 'B4', 'C5', 'B4', 'G4', 'E4'], // 음 배열
  '8n'  // 각 음의 간격 (8분음표)
);

melody.start(0);           // Transport 시작 시점부터
Tone.Transport.start();    // 재생 시작`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── Pattern — 다양한 패턴으로 재생 ──
const bellSynth = new Tone.FMSynth({
  modulationIndex: 4,
}).toDestination();

const pattern = new Tone.Pattern(
  (time, note) => {
    bellSynth.triggerAttackRelease(note, '4n', time);
  },
  ['C4', 'D4', 'E4', 'F4', 'G4'],
  'upDown'  // 패턴: up, down, upDown, downUp, random, randomOnce
);

pattern.interval = '4n';
pattern.start(0);

// ── Loop — 일정 간격 반복 실행 ──
const kick = new Tone.MembraneSynth().toDestination();

const drumLoop = new Tone.Loop((time) => {
  kick.triggerAttackRelease('C1', '8n', time);
}, '4n'); // 4분음표마다 반복

drumLoop.start(0);`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── Transport 제어 ──
// 재생 / 정지 / 일시정지
Tone.Transport.start();
Tone.Transport.stop();
Tone.Transport.pause();

// BPM 변경 (부드러운 전환)
Tone.Transport.bpm.rampTo(140, 2); // 2초에 걸쳐 140 BPM으로

// 시간 표현 (Tone.Time)
console.log(Tone.Time('4n').toSeconds());   // 4분음표 → 초
console.log(Tone.Time('1m').toSeconds());   // 1마디 → 초
console.log(Tone.Time('2n + 8n').toSeconds()); // 2분음표 + 8분음표

// 멜로디 정지
melody.stop();
drumLoop.stop();
Tone.Transport.stop();`,
          },
          {
            type: 'list',
            items: [
              'Tone.Transport — 전역 타임라인 관리자 (start/stop/pause/bpm)',
              'Tone.Sequence — 배열의 음을 순서대로 반복 재생',
              'Tone.Pattern — up/down/upDown/random 등 다양한 순서로 재생',
              'Tone.Loop — 지정 간격마다 콜백 함수 반복 실행',
              'Tone.Time — "4n"(4분음표), "1m"(1마디), "2s"(2초) 등 시간 표기',
              'BPM 120 기준: 4n=0.5초, 8n=0.25초, 1m=2초',
            ],
          },
          {
            type: 'tip',
            text: 'Sequence와 Pattern의 콜백에서 받는 time 매개변수를 triggerAttackRelease의 세 번째 인자로 전달하면 정확한 타이밍에 소리가 납니다. time 대신 현재 시간을 사용하면 약간의 지연이 발생할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'effects-processing',
        title: '이펙트와 오디오 프로세싱',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '고급 이펙트 체인 구성',
          },
          {
            type: 'text',
            text: '이펙트 체인은 소리가 여러 이펙트를 순서대로 통과하며 가공되는 구조입니다. Tone.js는 EQ, 컴프레서, 코러스, 페이저, 비트크러셔 등 다양한 이펙트를 제공합니다. 이펙트의 순서에 따라 최종 사운드가 크게 달라지므로 체인 구성이 중요합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as Tone from 'tone';\n\n// EQ3 — 3밴드 이퀄라이저\nconst eq = new Tone.EQ3({\n  low: -6,      // 저음 (dB)\n  mid: 3,       // 중음\n  high: -3,     // 고음\n  lowFrequency: 400,   // 저음 기준 주파수\n  highFrequency: 2500, // 고음 기준 주파수\n});\n\n// Compressor — 다이나믹 레인지 압축\nconst compressor = new Tone.Compressor({\n  threshold: -20,  // 압축 시작점 (dB)\n  ratio: 4,        // 압축 비율\n  attack: 0.003,   // 반응 속도\n  release: 0.25,   // 해제 속도\n});\n\n// Chorus — 풍성한 사운드\nconst chorus = new Tone.Chorus({\n  frequency: 1.5,     // LFO 주파수\n  delayTime: 3.5,     // 딜레이 시간 (ms)\n  depth: 0.7,         // 효과 깊이\n  wet: 0.5,\n}).start();",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// Phaser — 위상 변조 효과\nconst phaser = new Tone.Phaser({\n  frequency: 0.5,   // LFO 속도\n  octaves: 3,       // 주파수 범위\n  stages: 10,       // 필터 단계 수\n  wet: 0.5,\n});\n\n// BitCrusher — 로파이/레트로 사운드\nconst bitCrusher = new Tone.BitCrusher({\n  bits: 4, // 비트 수 (1~16, 낮을수록 거칠음)\n});\n\n// AutoWah — 와와 페달 효과\nconst autoWah = new Tone.AutoWah({\n  baseFrequency: 100,\n  octaves: 6,\n  sensitivity: 0,\n  wet: 0.8,\n});\n\n// 이펙트 체인 구성\nconst synth = new Tone.PolySynth(Tone.Synth);\nsynth.chain(eq, chorus, compressor, Tone.Destination);\n\nsynth.triggerAttackRelease(['C4', 'E4', 'G4'], '2n');",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 실시간 이펙트 파라미터 제어\nconst reverb = new Tone.Reverb({ decay: 4, wet: 0.5 }).toDestination();\nconst delay = new Tone.FeedbackDelay('8n', 0.5).connect(reverb);\nconst synth = new Tone.Synth().connect(delay);\n\n// 슬라이더로 이펙트 제어하기\nfunction updateReverb(value) {\n  reverb.wet.value = value; // 0~1\n}\n\nfunction updateDelay(time) {\n  delay.delayTime.rampTo(time, 0.1); // 부드럽게 전환\n}\n\n// LFO로 파라미터 자동 변조\nconst lfo = new Tone.LFO('4n', 200, 2000); // 주기, 최소, 최대\nlfo.connect(autoWah.baseFrequency);\nlfo.start();",
          },
          {
            type: 'list',
            items: [
              'EQ3 — 저/중/고음 3밴드 이퀄라이저',
              'Compressor — 소리의 다이나믹 레인지를 압축',
              'Chorus — 소리를 약간 지연/변조하여 풍성하게',
              'Phaser — 위상차로 독특한 스위핑 효과',
              'BitCrusher — 비트 해상도를 낮춰 레트로 사운드',
              'LFO — 다른 파라미터를 주기적으로 변조',
            ],
          },
          {
            type: 'tip',
            text: '이펙트 체인의 순서가 중요합니다. 일반적으로 EQ -> Compression -> Modulation(Chorus 등) -> Time(Delay/Reverb) 순서가 자연스럽습니다. Reverb는 보통 체인의 마지막에 배치합니다.',
          },
        ],
      },
      {
        slug: 'sequencing',
        title: '시퀀싱과 패턴',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '고급 시퀀싱 기법',
          },
          {
            type: 'text',
            text: 'Tone.js의 시퀀싱 기능을 활용하면 복잡한 리듬 패턴과 멜로디를 프로그래밍할 수 있습니다. Part를 사용하면 각 음에 개별 시간과 길이를 지정할 수 있고, 여러 Part를 조합하여 완전한 악곡 구성이 가능합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as Tone from 'tone';\n\n// Part — 각 음에 개별 시간/길이/속도 지정\nconst synth = new Tone.Synth().toDestination();\n\nconst melody = new Tone.Part(\n  (time, event) => {\n    synth.triggerAttackRelease(\n      event.note,\n      event.duration,\n      time,\n      event.velocity\n    );\n  },\n  [\n    { time: '0:0:0', note: 'C4', duration: '8n', velocity: 0.9 },\n    { time: '0:0:2', note: 'E4', duration: '8n', velocity: 0.7 },\n    { time: '0:1:0', note: 'G4', duration: '4n', velocity: 0.8 },\n    { time: '0:2:0', note: 'B4', duration: '8n', velocity: 0.6 },\n    { time: '0:2:2', note: 'C5', duration: '2n', velocity: 1.0 },\n  ]\n);\n\nmelody.loop = true;\nmelody.loopEnd = '1m'; // 1마디마다 반복\nmelody.start(0);\n\nTone.Transport.bpm.value = 120;\nTone.Transport.start();",
          },
          {
            type: 'heading',
            text: '다중 트랙 구성',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 멜로디 트랙\nconst melodySynth = new Tone.Synth({\n  oscillator: { type: 'triangle' },\n}).toDestination();\n\nconst melodyPart = new Tone.Sequence(\n  (time, note) => {\n    if (note !== null) {\n      melodySynth.triggerAttackRelease(note, '8n', time);\n    }\n  },\n  ['C4', 'E4', 'G4', null, 'E4', 'C4', null, 'G3'],\n  '8n'\n);\n\n// 베이스 트랙\nconst bassSynth = new Tone.MonoSynth({\n  oscillator: { type: 'sawtooth' },\n  filter: { Q: 2, frequency: 800, type: 'lowpass' },\n  envelope: { attack: 0.01, decay: 0.3, sustain: 0.4, release: 0.8 },\n}).toDestination();\n\nconst bassPart = new Tone.Sequence(\n  (time, note) => {\n    bassSynth.triggerAttackRelease(note, '4n', time);\n  },\n  ['C2', 'C2', 'G2', 'E2'],\n  '4n'\n);\n\n// 드럼 트랙\nconst kick = new Tone.MembraneSynth().toDestination();\nconst snare = new Tone.NoiseSynth({\n  noise: { type: 'white' },\n  envelope: { attack: 0.005, decay: 0.15, sustain: 0 },\n}).toDestination();\n\nconst drumPart = new Tone.Loop((time) => {\n  kick.triggerAttackRelease('C1', '8n', time);\n  snare.triggerAttackRelease('16n', time + Tone.Time('8n').toSeconds());\n}, '4n');",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 모든 트랙 동시 시작/정지\nfunction startAll() {\n  melodyPart.start(0);\n  bassPart.start(0);\n  drumPart.start(0);\n  Tone.Transport.start();\n}\n\nfunction stopAll() {\n  melodyPart.stop();\n  bassPart.stop();\n  drumPart.stop();\n  Tone.Transport.stop();\n}\n\n// BPM 변경\nfunction setBPM(bpm) {\n  Tone.Transport.bpm.rampTo(bpm, 1); // 1초에 걸쳐 변경\n}\n\n// 스윙 추가 (셔플 느낌)\nTone.Transport.swing = 0.3;    // 0~1, 스윙 정도\nTone.Transport.swingSubdivision = '8n'; // 스윙 적용 단위\n\n// 시간 표기법\n// '0:0:0' = 마디:박:16분음표\n// '4n' = 4분음표, '8n' = 8분음표\n// '1m' = 1마디, '2t' = 2분음표 셋잇단",
          },
          {
            type: 'list',
            items: [
              'Part — 각 이벤트에 개별 시간/값을 지정하는 유연한 시퀀서',
              'Sequence — 배열을 균등 간격으로 순차 재생',
              'Loop — 일정 간격마다 콜백 반복',
              'null — Sequence에서 해당 타이밍을 쉼표(rest)로 처리',
              'swing — 셔플/스윙 느낌 추가 (재즈, 펑크 등)',
              '시간 표기: "마디:박:16분음표" 또는 "4n"(음표 단위)',
            ],
          },
          {
            type: 'tip',
            text: 'Part에서 time은 "마디:박:16분음표" 형식입니다. "0:0:0"은 시작점, "0:1:0"은 두 번째 박, "1:0:0"은 두 번째 마디입니다. 4/4 박자에서 한 마디는 4박입니다.',
          },
        ],
      },
      {
        slug: 'sampling-playback',
        title: '샘플링과 재생',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Sampler와 Player',
          },
          {
            type: 'text',
            text: 'Sampler는 녹음된 소리(샘플)를 피치 변환하여 악기처럼 사용할 수 있게 해줍니다. Player는 오디오 파일을 직접 재생합니다. 실제 악기 소리나 사운드 이펙트를 사용할 때 매우 유용합니다. GrainPlayer를 사용하면 그래뉼러 합성으로 독특한 사운드를 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as Tone from 'tone';\n\n// Sampler — 샘플 기반 악기\nconst sampler = new Tone.Sampler({\n  urls: {\n    C4: 'piano-C4.mp3',\n    E4: 'piano-E4.mp3',\n    G4: 'piano-G4.mp3',\n    C5: 'piano-C5.mp3',\n  },\n  baseUrl: '/samples/piano/',\n  onload: () => {\n    console.log('샘플 로드 완료');\n    // 로드 후 연주 가능\n    sampler.triggerAttackRelease('C4', '4n');\n  },\n}).toDestination();\n\n// 로드 후 다른 음도 자동 피치 변환\n// C4와 E4 사이의 D4는 자동으로 보간됨\nsampler.triggerAttackRelease('D4', '4n');\nsampler.triggerAttackRelease(['C4', 'E4', 'G4'], '2n'); // 화음",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// Player — 오디오 파일 재생\nconst player = new Tone.Player({\n  url: '/samples/drum-loop.mp3',\n  loop: true,\n  loopStart: 0,\n  loopEnd: '1m',\n  playbackRate: 1, // 재생 속도 (0.5 = 반속, 2 = 배속)\n  onload: () => console.log('로드 완료'),\n}).toDestination();\n\n// 재생 제어\nplayer.start();           // 재생\nplayer.stop();            // 정지\nplayer.playbackRate = 1.5; // 재생 속도 변경\n\n// Players — 여러 오디오 파일 관리\nconst players = new Tone.Players({\n  kick: '/samples/kick.mp3',\n  snare: '/samples/snare.mp3',\n  hihat: '/samples/hihat.mp3',\n}).toDestination();\n\n// 개별 재생\nplayers.player('kick').start();\nplayers.player('snare').start('+0.5'); // 0.5초 뒤",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// GrainPlayer — 그래뉼러 합성\nconst grainPlayer = new Tone.GrainPlayer({\n  url: '/samples/vocal.mp3',\n  grainSize: 0.1,     // 그레인 크기 (초)\n  overlap: 0.05,      // 그레인 오버랩\n  playbackRate: 0.5,  // 재생 속도 (피치 변경 없이)\n  detune: 0,          // 피치 미세 조정 (센트)\n  loop: true,\n}).toDestination();\n\ngrainPlayer.start();\n\n// Buffer — 오디오 데이터 직접 조작\nconst buffer = new Tone.ToneAudioBuffer('/samples/sound.mp3', () => {\n  console.log('Duration:', buffer.duration);\n  console.log('Channels:', buffer.numberOfChannels);\n  console.log('Sample Rate:', buffer.sampleRate);\n\n  // 버퍼를 역재생\n  buffer.reverse = true;\n\n  const player = new Tone.Player(buffer).toDestination();\n  player.start();\n});",
          },
          {
            type: 'list',
            items: [
              'Sampler — 샘플을 피치 변환하여 악기처럼 사용',
              'Player — 단일 오디오 파일 재생/루프',
              'Players — 여러 오디오 파일을 이름으로 관리',
              'GrainPlayer — 그래뉼러 합성으로 피치와 속도 독립 제어',
              'ToneAudioBuffer — 오디오 데이터에 직접 접근/조작',
              'playbackRate — 재생 속도 (1 = 원본, 2 = 2배속)',
            ],
          },
          {
            type: 'tip',
            text: 'Sampler에 모든 음의 샘플을 제공할 필요는 없습니다. 2~3옥타브 간격으로 샘플을 제공하면 Tone.js가 사이 음을 자동으로 피치 변환합니다. 단, 원음에서 멀어질수록 음질이 저하됩니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 드럼 머신 만들기',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '드럼 머신 프로젝트',
          },
          {
            type: 'text',
            text: '지금까지 배운 Tone.js의 기능을 활용하여 인터랙티브 드럼 머신을 만듭니다. 16스텝 시퀀서로 킥, 스네어, 하이햇 패턴을 프로그래밍하고, 실시간으로 BPM과 이펙트를 조절할 수 있는 프로젝트입니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "import * as Tone from 'tone';\n\n// 드럼 사운드 정의\nconst kick = new Tone.MembraneSynth({\n  pitchDecay: 0.05,\n  octaves: 6,\n  oscillator: { type: 'sine' },\n  envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 },\n}).toDestination();\n\nconst snare = new Tone.NoiseSynth({\n  noise: { type: 'white' },\n  envelope: { attack: 0.005, decay: 0.15, sustain: 0 },\n}).toDestination();\n\nconst hihat = new Tone.MetalSynth({\n  frequency: 200,\n  envelope: { attack: 0.001, decay: 0.05, release: 0.01 },\n  harmonicity: 5.1,\n  modulationIndex: 32,\n  resonance: 4000,\n  octaves: 1.5,\n}).toDestination();\nhihat.volume.value = -10; // 볼륨 낮추기",
          },
          {
            type: 'heading',
            text: '16스텝 시퀀서 구현',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 16스텝 패턴 정의 (1 = 활성, 0 = 비활성)\nconst patterns = {\n  kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],\n  snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],\n  hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],\n};\n\nlet currentStep = 0;\n\n// 메인 시퀀서 루프\nconst sequencer = new Tone.Sequence(\n  (time, step) => {\n    currentStep = step;\n\n    if (patterns.kick[step]) {\n      kick.triggerAttackRelease('C1', '8n', time);\n    }\n    if (patterns.snare[step]) {\n      snare.triggerAttackRelease('16n', time);\n    }\n    if (patterns.hihat[step]) {\n      hihat.triggerAttackRelease('32n', time, 0.3);\n    }\n\n    // UI 업데이트 (메인 스레드에서)\n    Tone.Draw.schedule(() => {\n      updateStepUI(step);\n    }, time);\n  },\n  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],\n  '16n'\n);\n\nTone.Transport.bpm.value = 120;",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 패턴 토글 함수\nfunction toggleStep(instrument, step) {\n  patterns[instrument][step] = patterns[instrument][step] ? 0 : 1;\n}\n\n// 재생/정지 제어\nasync function startDrumMachine() {\n  await Tone.start(); // 오디오 컨텍스트 시작\n  sequencer.start(0);\n  Tone.Transport.start();\n}\n\nfunction stopDrumMachine() {\n  sequencer.stop();\n  Tone.Transport.stop();\n  currentStep = 0;\n}\n\n// BPM 변경\nfunction changeBPM(bpm) {\n  Tone.Transport.bpm.rampTo(bpm, 0.5);\n}\n\n// 프리셋 패턴\nconst presets = {\n  basic: {\n    kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],\n    snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],\n    hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],\n  },\n  funky: {\n    kick:  [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],\n    snare: [0,0,1,0, 1,0,0,1, 0,0,1,0, 1,0,0,0],\n    hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],\n  },\n};\n\nfunction loadPreset(name) {\n  const preset = presets[name];\n  Object.keys(preset).forEach(inst => {\n    patterns[inst] = [...preset[inst]];\n  });\n}",
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// UI 업데이트 함수 (예시)\nfunction updateStepUI(step) {\n  // 모든 스텝의 활성 표시 제거\n  document.querySelectorAll('.step').forEach(el => {\n    el.classList.remove('active');\n  });\n\n  // 현재 스텝 활성 표시\n  document.querySelectorAll('.step-' + step).forEach(el => {\n    el.classList.add('active');\n  });\n}\n\n// 이펙트 추가\nconst reverb = new Tone.Reverb({ decay: 2, wet: 0.2 }).toDestination();\nconst delay = new Tone.FeedbackDelay('8n.', 0.3);\ndelay.connect(reverb);\n\n// 스네어에만 리버브 적용\nsnare.connect(reverb);\n\n// 마스터 볼륨\nconst masterVol = new Tone.Volume(-6).toDestination();\nkick.connect(masterVol);\nsnare.connect(masterVol);\nhihat.connect(masterVol);",
          },
          {
            type: 'list',
            items: [
              'MembraneSynth — 막 진동을 시뮬레이션 (킥 드럼)',
              'NoiseSynth — 노이즈 기반 타악기 (스네어)',
              'MetalSynth — 금속 타악기 (하이햇, 심벌)',
              'Tone.Draw.schedule — 오디오 타이밍에 맞춰 UI 업데이트',
              'patterns 배열로 비트 패턴 프로그래밍',
              '프리셋으로 다양한 리듬 패턴 전환',
            ],
          },
          {
            type: 'tip',
            text: 'Tone.Draw.schedule()을 사용하면 오디오 타이밍에 정확하게 맞춘 UI 업데이트가 가능합니다. 직접 DOM을 업데이트하면 오디오와 시각적 피드백 사이에 타이밍 차이가 발생할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Tone.js 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Tone.js 핵심 API 레퍼런스',
          },
          {
            type: 'text',
            text: 'Tone.js의 주요 클래스와 자주 사용하는 API를 카테고리별로 정리합니다. 빠른 참조를 위한 핵심 기능 모음입니다.',
          },
          {
            type: 'heading',
            text: '신디사이저와 소스',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 신디사이저\nnew Tone.Synth();         // 기본 모노 신스\nnew Tone.PolySynth();     // 폴리포닉 (화음)\nnew Tone.MonoSynth();     // 모노포닉 + 필터\nnew Tone.FMSynth();       // FM 합성\nnew Tone.AMSynth();       // AM 합성\nnew Tone.MembraneSynth(); // 드럼 킥\nnew Tone.NoiseSynth();    // 노이즈 (스네어)\nnew Tone.MetalSynth();    // 금속 타악기\nnew Tone.PluckSynth();    // 기타/현악기\n\n// 재생\nsynth.triggerAttackRelease(note, duration, time, velocity);\nsynth.triggerAttack(note, time, velocity);\nsynth.triggerRelease(time);\n\n// 소스\nnew Tone.Player(url);     // 오디오 파일 재생\nnew Tone.Players(urls);   // 여러 오디오 관리\nnew Tone.Sampler(urls);   // 샘플 기반 악기\nnew Tone.GrainPlayer(url);// 그래뉼러 합성",
          },
          {
            type: 'heading',
            text: '이펙트와 라우팅',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 이펙트\nnew Tone.Reverb({ decay, wet });       // 잔향\nnew Tone.FeedbackDelay(time, feedback);// 딜레이\nnew Tone.Distortion(amount);           // 디스토션\nnew Tone.Filter(freq, type);           // 필터\nnew Tone.Chorus(freq, delay, depth);   // 코러스\nnew Tone.Phaser({ frequency, octaves });// 페이저\nnew Tone.EQ3(low, mid, high);          // 이퀄라이저\nnew Tone.Compressor(threshold, ratio); // 컴프레서\nnew Tone.BitCrusher(bits);             // 비트크러셔\nnew Tone.AutoWah(baseFreq, octaves);   // 오토와\nnew Tone.Tremolo(freq, depth);         // 트레몰로\n\n// 라우팅\nsynth.connect(effect);                  // 연결\nsynth.chain(a, b, c, Tone.Destination);// 체이닝\nsynth.toDestination();                  // 스피커로",
          },
          {
            type: 'heading',
            text: '시퀀싱과 Transport',
          },
          {
            type: 'code',
            language: 'javascript',
            code: "// 시퀀서\nnew Tone.Sequence(callback, events, subdivision);\nnew Tone.Part(callback, events);\nnew Tone.Pattern(callback, values, pattern);\nnew Tone.Loop(callback, interval);\n\n// Transport\nTone.Transport.start();       // 재생\nTone.Transport.stop();        // 정지\nTone.Transport.pause();       // 일시정지\nTone.Transport.bpm.value = 120; // BPM 설정\nTone.Transport.bpm.rampTo(140, 2); // BPM 전환\nTone.Transport.swing = 0.3;   // 스윙\n\n// 시간 표기\n// '4n' = 4분음표, '8n' = 8분음표\n// '1m' = 1마디\n// '0:0:0' = 마디:박:16분음표\n// '+0.5' = 현재로부터 0.5초 후\n\n// 유틸리티\nawait Tone.start();           // 오디오 컨텍스트 시작\nTone.now();                   // 현재 오디오 시간\nTone.Draw.schedule(fn, time); // UI 동기화",
          },
          {
            type: 'list',
            items: [
              'Synth/PolySynth — 기본 사운드 생성',
              'Player/Sampler — 녹음된 오디오 재생/악기화',
              'Reverb/Delay/Filter — 핵심 이펙트',
              '.connect() / .chain() — 오디오 라우팅',
              'Sequence/Part/Loop — 시퀀싱과 반복',
              'Transport — 전역 타임라인 (BPM, start/stop)',
              'Tone.start() — 사용자 인터랙션 후 필수 호출',
              'Tone.Draw.schedule() — 오디오 동기화 UI 업데이트',
            ],
          },
          {
            type: 'tip',
            text: '공식 문서(tonejs.github.io)에서 모든 클래스의 상세 API를 확인할 수 있습니다. 또한 tone-js-examples 저장소에서 다양한 예제를 실행해볼 수 있습니다.',
          },
        ],
      },
    ],
  },

  // ─── 4. Matter.js 물리 엔진 ──────────────────────────────────────────
  {
    slug: 'matter',
    title: 'Matter.js 물리 엔진',
    description: '2D 물리 시뮬레이션 구현',
    category: 'creative',
    color: 'bg-red-500',
    difficulty: 'intermediate',
    objectives: [
      '물리 엔진 기본: 월드, 바디, 엔진',
      '힘, 속도, 중력 제어',
      '제약조건과 복합 바디',
      '충돌 감지와 커스텀 렌더링',
      '실전 퍼즐 게임과 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'engine-world',
        title: '엔진과 월드',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Matter.js 물리 엔진 시작하기',
          },
          {
            type: 'text',
            text: 'Matter.js는 웹 브라우저에서 2D 물리 시뮬레이션을 구현하는 자바스크립트 라이브러리입니다. Engine은 물리 연산을 수행하고, World는 물리 객체(Body)가 존재하는 공간이며, Render는 시뮬레이션을 화면에 그립니다. Runner는 매 프레임 Engine을 업데이트하여 물리가 진행되도록 합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// Matter.js 모듈 가져오기
const { Engine, Render, Runner, World, Bodies } = Matter;

// ── 1. 엔진 생성 — 물리 연산 담당 ──
const engine = Engine.create({
  gravity: { x: 0, y: 1 }, // 중력 방향 (아래쪽)
});

// ── 2. 렌더러 생성 — 시뮬레이션 화면 표시 ──
const render = Render.create({
  element: document.getElementById('canvas-container'),
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false,     // false면 색상/질감 표시
    background: '#1a1a2e',
  },
});

// ── 3. 렌더러 및 러너 실행 ──
Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 바디(Bodies) 생성 — 물리 객체 ──

// 떨어지는 공
const ball = Bodies.circle(400, 50, 30, {
  restitution: 0.8,                // 탄성 (0~1, 1이면 완벽한 반동)
  render: { fillStyle: '#e74c3c' },
});

// 떨어지는 박스
const box = Bodies.rectangle(300, 100, 60, 60, {
  restitution: 0.5,
  render: { fillStyle: '#3498db' },
});

// 바닥 (isStatic: true → 움직이지 않는 고정 객체)
const ground = Bodies.rectangle(400, 580, 810, 40, {
  isStatic: true,
  render: { fillStyle: '#2c3e50' },
});

// 벽
const wallLeft = Bodies.rectangle(0, 300, 40, 600, { isStatic: true });
const wallRight = Bodies.rectangle(800, 300, 40, 600, { isStatic: true });

// 월드에 추가
World.add(engine.world, [ball, box, ground, wallLeft, wallRight]);`,
          },
          {
            type: 'list',
            items: [
              'Engine.create() — 물리 엔진 인스턴스 생성, 중력 등 설정',
              'Render.create() — 캔버스 렌더러 생성, wireframes: false로 컬러 표시',
              'Runner.run(runner, engine) — 매 프레임 물리 시뮬레이션 업데이트',
              'Bodies.circle(x, y, radius, options) — 원형 바디 생성',
              'Bodies.rectangle(x, y, width, height, options) — 사각형 바디 생성',
              'World.add(world, bodies) — 월드에 바디 추가',
            ],
          },
          {
            type: 'tip',
            text: 'isStatic: true로 설정한 바디는 중력이나 충돌의 영향을 받지 않고 고정됩니다. 바닥, 벽, 플랫폼 등을 만들 때 사용하세요. restitution 값은 0(찰흙처럼 흡수)부터 1(완벽한 반동)까지 설정합니다.',
          },
        ],
      },
      {
        slug: 'bodies-constraints',
        title: '바디와 제약',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Body 옵션과 물리 속성',
          },
          {
            type: 'text',
            text: 'Matter.js의 모든 Body는 질량, 마찰, 탄성 등 물리 속성을 가집니다. Constraint(제약)은 두 바디를 연결하여 줄, 스프링, 관절 같은 구조를 만듭니다. Composite는 여러 바디와 제약을 하나의 그룹으로 묶어 관리합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const { Bodies, World, Constraint, Composite } = Matter;

// ── Body 물리 옵션 상세 ──
const heavyBall = Bodies.circle(200, 100, 40, {
  restitution: 0.9,  // 탄성 계수 (0: 흡수, 1: 완전 반동)
  friction: 0.05,    // 표면 마찰 (0: 빙판, 1: 거친 표면)
  frictionAir: 0.01, // 공기 저항 (클수록 빨리 감속)
  density: 0.005,    // 밀도 → 질량에 영향 (높을수록 무거움)
  render: {
    fillStyle: '#f39c12',
    strokeStyle: '#e67e22',
    lineWidth: 2,
  },
});

// isStatic: true → 고정 객체 (바닥, 벽, 피벗)
const pivot = Bodies.circle(400, 100, 10, {
  isStatic: true,
  render: { fillStyle: '#ecf0f1' },
});`,
          },
          {
            type: 'heading',
            text: 'Constraint — 바디 연결하기',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 진자(Pendulum) 만들기 ──
const pendulumBob = Bodies.circle(500, 300, 25, {
  density: 0.004,
  render: { fillStyle: '#e74c3c' },
});

// Constraint로 피벗과 추를 연결 (줄)
const pendulumString = Constraint.create({
  bodyA: pivot,          // 연결 바디 A (고정점)
  bodyB: pendulumBob,    // 연결 바디 B (추)
  length: 200,           // 줄 길이
  stiffness: 1,          // 강성 (1: 단단한 막대, 0에 가까울수록 느슨)
  damping: 0,            // 감쇄 (0: 없음, 1: 최대 감쇄)
  render: {
    strokeStyle: '#bdc3c7',
    lineWidth: 2,
  },
});

// ── 스프링(Spring) 만들기 ──
const boxA = Bodies.rectangle(300, 200, 50, 50);
const boxB = Bodies.rectangle(500, 200, 50, 50);

const spring = Constraint.create({
  bodyA: boxA,
  bodyB: boxB,
  stiffness: 0.01,  // 낮은 강성 = 스프링처럼 늘어남
  damping: 0.05,    // 약간의 감쇄
  render: { strokeStyle: '#2ecc71' },
});

// ── Composite로 그룹 관리 ──
const pendulumGroup = Composite.create();
Composite.add(pendulumGroup, [pivot, pendulumBob, pendulumString]);

World.add(engine.world, [pendulumGroup, boxA, boxB, spring]);`,
          },
          {
            type: 'list',
            items: [
              'restitution — 충돌 반발 계수 (0: 에너지 흡수, 1: 완전 반동)',
              'friction — 접촉 시 표면 마찰력 (0~1)',
              'frictionAir — 공기 저항으로 인한 감속 (0~1)',
              'density — 밀도, 면적 x 밀도 = 질량',
              'Constraint.stiffness — 연결 강성 (1: 막대, 0.01: 스프링)',
              'Constraint.damping — 진동 감쇄 (1에 가까울수록 빨리 멈춤)',
              'Composite — 바디와 제약을 그룹으로 묶어 한꺼번에 관리',
            ],
          },
          {
            type: 'tip',
            text: 'stiffness를 1로 설정하면 강체 연결(rigid), 0.01~0.1 범위로 설정하면 탄성이 있는 스프링 연결이 됩니다. 줄을 흔들리게 하고 싶다면 stiffness를 약간 낮추고 damping을 0에 가깝게 설정하세요.',
          },
        ],
      },
      {
        slug: 'events-interaction',
        title: '이벤트와 인터랙션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '충돌 감지와 이벤트',
          },
          {
            type: 'text',
            text: 'Matter.js의 Events 시스템은 물리 시뮬레이션에서 발생하는 다양한 이벤트(충돌, 프레임 업데이트 등)를 감지합니다. Mouse와 MouseConstraint를 사용하면 마우스로 바디를 클릭하고 드래그할 수 있어 인터랙티브한 물리 시뮬레이션을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const { Events, Mouse, MouseConstraint, Body } = Matter;

// ── 충돌 이벤트 감지 ──
Events.on(engine, 'collisionStart', (event) => {
  // 충돌이 시작된 모든 쌍을 순회
  event.pairs.forEach((pair) => {
    const { bodyA, bodyB } = pair;
    console.log("충돌 감지: " + bodyA.label + " ↔ " + bodyB.label);

    // 충돌 시 색상 변경 효과
    bodyA.render.fillStyle = '#ff0000';
    bodyB.render.fillStyle = '#ff0000';

    // 0.5초 후 원래 색으로 복원
    setTimeout(() => {
      bodyA.render.fillStyle = bodyA.originalColor || '#3498db';
      bodyB.render.fillStyle = bodyB.originalColor || '#e74c3c';
    }, 500);
  });
});

// 충돌 종료 이벤트
Events.on(engine, 'collisionEnd', (event) => {
  event.pairs.forEach((pair) => {
    console.log('충돌 종료');
  });
});`,
          },
          {
            type: 'heading',
            text: '마우스 인터랙션',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 마우스로 바디 드래그하기 ──
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,     // 드래그 강도
    render: {
      visible: true,
      strokeStyle: '#90cdf4',
      lineWidth: 2,
    },
  },
});

World.add(engine.world, mouseConstraint);

// 렌더러에 마우스 동기화
render.mouse = mouse;

// ── 마우스 이벤트 ──
Events.on(mouseConstraint, 'mousedown', (event) => {
  const { mouse } = event;
  console.log("클릭 위치: (" + mouse.position.x + ", " + mouse.position.y + ")");
});

Events.on(mouseConstraint, 'startdrag', (event) => {
  console.log('드래그 시작:', event.body.label);
});`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 힘과 속도 적용 ──
const ball = Bodies.circle(400, 300, 30, {
  label: 'ball',
  render: { fillStyle: '#3498db' },
});
World.add(engine.world, ball);

// applyForce — 특정 지점에서 힘 가하기
Body.applyForce(ball, ball.position, {
  x: 0.05,  // 오른쪽으로 힘
  y: -0.08, // 위쪽으로 힘
});

// setVelocity — 직접 속도 설정
Body.setVelocity(ball, { x: 5, y: -10 });

// setAngularVelocity — 회전 속도
Body.setAngularVelocity(ball, 0.1);

// ── 키보드로 제어하기 ──
document.addEventListener('keydown', (e) => {
  const force = 0.005;
  switch (e.key) {
    case 'ArrowLeft':
      Body.applyForce(ball, ball.position, { x: -force, y: 0 });
      break;
    case 'ArrowRight':
      Body.applyForce(ball, ball.position, { x: force, y: 0 });
      break;
    case 'ArrowUp':
      Body.applyForce(ball, ball.position, { x: 0, y: -force });
      break;
  }
});`,
          },
          {
            type: 'list',
            items: [
              'Events.on(engine, "collisionStart") — 충돌 시작 감지',
              'Mouse.create(canvas) — 캔버스에 마우스 입력 연결',
              'MouseConstraint — 마우스로 바디를 드래그할 수 있게 함',
              'Body.applyForce(body, position, force) — 특정 지점에 힘 적용',
              'Body.setVelocity(body, {x, y}) — 속도를 직접 설정',
              'Body.setAngularVelocity(body, speed) — 회전 속도 설정',
            ],
          },
          {
            type: 'tip',
            text: 'applyForce의 힘 값은 매우 작은 수(0.001~0.05)를 사용하세요. 값이 너무 크면 바디가 순간이동하듯 날아갑니다. setVelocity는 현재 속도를 덮어쓰므로 자연스러운 물리 효과를 원하면 applyForce가 더 적합합니다.',
          },
        ],
      },
      {
        slug: 'constraints-composites',
        title: '제약조건과 복합체',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Constraint 심화와 Composite 활용',
          },
          {
            type: 'text',
            text: 'Constraint는 두 바디 사이의 물리적 연결을 정의하며, 포인트 제약, 거리 제약, 마우스 제약 등 다양한 형태가 있습니다. Composite는 여러 바디와 제약을 하나의 단위로 묶어 복잡한 구조물(체인, 브릿지, 소프트바디 등)을 만들 수 있게 합니다. Composites 모듈은 자주 사용되는 복합 구조를 미리 만들어 제공합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const { Composite, Composites, Constraint, Bodies, World } = Matter;

// ── 체인(Chain) 만들기 ──
// Composites.chain으로 바디들을 순차적으로 연결
const group = Composite.create();

// 체인 구성용 바디 5개 생성
const chainBodies = [];
for (let i = 0; i < 5; i++) {
  const link = Bodies.rectangle(200 + i * 50, 100, 40, 20, {
    density: 0.005,
    frictionAir: 0.02,
    render: { fillStyle: '#e67e22' },
  });
  chainBodies.push(link);
  Composite.add(group, link);
}

// 인접 바디끼리 Constraint로 연결
for (let i = 0; i < chainBodies.length - 1; i++) {
  const link = Constraint.create({
    bodyA: chainBodies[i],
    bodyB: chainBodies[i + 1],
    length: 30,
    stiffness: 0.8,
    render: { strokeStyle: '#d35400' },
  });
  Composite.add(group, link);
}

// 첫 번째 링크를 고정점에 연결
const anchor = Constraint.create({
  pointA: { x: 200, y: 50 },
  bodyB: chainBodies[0],
  length: 30,
  stiffness: 1,
});
Composite.add(group, anchor);

World.add(engine.world, group);`,
          },
          {
            type: 'heading',
            text: 'Composites 유틸리티',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── Composites.stack — 바디 스택 만들기 ──
// stack(x, y, columns, rows, columnGap, rowGap, callback)
const stack = Composites.stack(200, 200, 5, 4, 0, 0,
  function (x, y) {
    return Bodies.rectangle(x, y, 40, 40, {
      render: { fillStyle: '#3498db' },
    });
  }
);
World.add(engine.world, stack);

// ── Composites.softBody — 소프트바디 ──
// softBody(x, y, columns, rows, gapX, gapY, crossBrace, radius, options)
const soft = Composites.softBody(400, 100, 6, 4, 20, 20, true, 10, {
  render: { fillStyle: '#2ecc71' },
});
World.add(engine.world, soft);

// ── Composites.car — 간단한 자동차 ──
const car = Composites.car(150, 400, 100, 30, 25);
World.add(engine.world, car);

// ── Composites.newtonsCradle — 뉴턴의 요람 ──
const cradle = Composites.newtonsCradle(300, 50, 5, 25, 150);
World.add(engine.world, cradle);`,
          },
          {
            type: 'list',
            items: [
              'Composite.create() — 빈 복합체 생성',
              'Composite.add(composite, items) — 바디, 제약, 하위 복합체 추가',
              'Composites.stack() — 격자 형태로 바디 배열 생성',
              'Composites.chain() — 바디들을 순차적으로 체인 연결',
              'Composites.softBody() — 연결된 바디 격자로 부드러운 물체 구현',
              'Composites.car() — 바디와 바퀴로 구성된 자동차',
              'Composites.newtonsCradle() — 뉴턴의 요람 데모 구조물',
            ],
          },
          {
            type: 'tip',
            text: 'softBody의 crossBrace 매개변수를 true로 설정하면 대각선 제약이 추가되어 구조가 더 안정적으로 유지됩니다. false면 격자가 쉽게 찌그러지므로, 안정적인 구조가 필요하면 항상 true를 사용하세요.',
          },
        ],
      },
      {
        slug: 'collision-events',
        title: '충돌 감지와 이벤트',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '충돌 필터링과 이벤트 심화',
          },
          {
            type: 'text',
            text: 'Matter.js는 충돌 필터링 시스템을 통해 어떤 바디끼리 충돌할지 세밀하게 제어할 수 있습니다. collisionFilter의 category와 mask를 비트 연산으로 설정하여 그룹 간 충돌을 허용하거나 차단합니다. Events 시스템은 collisionStart, collisionActive, collisionEnd, beforeUpdate, afterUpdate 등 다양한 시점에 훅을 걸 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const { Events, Bodies, World, Body } = Matter;

// ── 충돌 필터 (Collision Filter) ──
// category: 비트 플래그 (1, 2, 4, 8, 16, ...)
// mask: 충돌 가능한 카테고리의 비트 OR 조합
const categoryA = 0x0001; // 그룹 A (1)
const categoryB = 0x0002; // 그룹 B (2)
const categoryC = 0x0004; // 그룹 C (4)

// 그룹 A: B와만 충돌
const ballA = Bodies.circle(200, 100, 25, {
  label: 'ballA',
  collisionFilter: {
    category: categoryA,
    mask: categoryB,         // B와만 충돌
  },
  render: { fillStyle: '#e74c3c' },
});

// 그룹 B: A, C 모두와 충돌
const ballB = Bodies.circle(400, 100, 25, {
  label: 'ballB',
  collisionFilter: {
    category: categoryB,
    mask: categoryA | categoryC,  // A와 C 모두 충돌
  },
  render: { fillStyle: '#3498db' },
});

// 그룹 C: B와만 충돌
const ballC = Bodies.circle(600, 100, 25, {
  label: 'ballC',
  collisionFilter: {
    category: categoryC,
    mask: categoryB,
  },
  render: { fillStyle: '#2ecc71' },
});

World.add(engine.world, [ballA, ballB, ballC]);`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 이벤트 심화: 게임 로직에 활용 ──
let score = 0;

// 충돌 시작
Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach((pair) => {
    const labels = [pair.bodyA.label, pair.bodyB.label];

    // 특정 바디 충돌 감지
    if (labels.includes('player') && labels.includes('coin')) {
      const coin = pair.bodyA.label === 'coin' ? pair.bodyA : pair.bodyB;
      score += 10;
      World.remove(engine.world, coin);
      console.log('점수: ' + score);
    }

    // 위험 구역 충돌
    if (labels.includes('player') && labels.includes('hazard')) {
      console.log('게임 오버!');
    }
  });
});

// 충돌 지속 중 (매 프레임)
Events.on(engine, 'collisionActive', (event) => {
  event.pairs.forEach((pair) => {
    // 지속 충돌 중인 바디 처리
  });
});

// 엔진 업데이트 전/후 훅
Events.on(engine, 'beforeUpdate', (event) => {
  // 물리 연산 전에 바디 상태 조정
  // 예: 속도 제한, 영역 이탈 체크
  const bodies = Composite.allBodies(engine.world);
  bodies.forEach((body) => {
    // 화면 밖으로 나간 바디 제거
    if (body.position.y > 700) {
      World.remove(engine.world, body);
    }
  });
});`,
          },
          {
            type: 'list',
            items: [
              'collisionFilter.category — 바디의 충돌 그룹 (비트 플래그)',
              'collisionFilter.mask — 충돌 허용 그룹 마스크 (비트 OR)',
              'collisionStart — 충돌이 처음 시작될 때 발생',
              'collisionActive — 충돌이 유지되는 동안 매 프레임 발생',
              'collisionEnd — 충돌이 끝났을 때 발생',
              'beforeUpdate / afterUpdate — 물리 엔진 업데이트 전후 훅',
              'event.pairs — 충돌한 바디 쌍 배열 (bodyA, bodyB)',
            ],
          },
          {
            type: 'tip',
            text: '충돌 필터의 category와 mask는 비트 연산을 사용합니다. category는 반드시 2의 거듭제곱(1, 2, 4, 8...)이어야 하며, mask에는 여러 카테고리를 | (OR) 연산자로 결합합니다. 기본값은 category: 0x0001, mask: 0xFFFFFFFF(모두 충돌)입니다.',
          },
        ],
      },
      {
        slug: 'rendering-custom',
        title: '커스텀 렌더링',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Canvas API를 이용한 커스텀 렌더링',
          },
          {
            type: 'text',
            text: 'Matter.js의 기본 Render 모듈 대신 Canvas 2D API로 직접 물리 바디를 그릴 수 있습니다. 이를 통해 스프라이트, 파티클, 트레일 효과 등 기본 렌더러로는 불가능한 비주얼을 구현할 수 있습니다. Engine.update()를 호출하여 물리를 진행하고, requestAnimationFrame 루프에서 바디 위치를 읽어 직접 그립니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const { Engine, World, Bodies, Composite, Body } = Matter;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// 엔진만 생성 (기본 Render 사용 안 함)
const engine = Engine.create({
  gravity: { x: 0, y: 1 },
});

// 바디 생성
const balls = [];
for (let i = 0; i < 10; i++) {
  const ball = Bodies.circle(
    100 + Math.random() * 600,
    50 + Math.random() * 100,
    15 + Math.random() * 15,
    {
      restitution: 0.7,
      friction: 0.05,
      label: 'ball-' + i,
    }
  );
  balls.push(ball);
}

const ground = Bodies.rectangle(400, 590, 800, 20, { isStatic: true });
const wallL = Bodies.rectangle(0, 300, 20, 600, { isStatic: true });
const wallR = Bodies.rectangle(800, 300, 20, 600, { isStatic: true });

World.add(engine.world, [...balls, ground, wallL, wallR]);`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 커스텀 렌더 루프 ──
const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
const trails = new Map(); // 트레일 효과용 위치 기록

function render() {
  // 물리 엔진 업데이트 (60fps 기준 ~16.67ms)
  Engine.update(engine, 1000 / 60);

  // 캔버스 초기화
  ctx.fillStyle = 'rgba(26, 26, 46, 0.3)'; // 반투명으로 잔상 효과
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 공 그리기
  balls.forEach((ball, i) => {
    const pos = ball.position;
    const radius = ball.circleRadius;
    const angle = ball.angle;

    // 트레일 기록
    if (!trails.has(ball.id)) trails.set(ball.id, []);
    const trail = trails.get(ball.id);
    trail.push({ x: pos.x, y: pos.y });
    if (trail.length > 15) trail.shift();

    // 트레일 그리기
    ctx.beginPath();
    trail.forEach((p, j) => {
      ctx.globalAlpha = j / trail.length * 0.3;
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // 메인 공 그리기
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angle);

    // 그라데이션 효과
    const gradient = ctx.createRadialGradient(
      -radius * 0.3, -radius * 0.3, radius * 0.1,
      0, 0, radius
    );
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, colors[i % colors.length]);

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  });

  // 바닥 그리기
  ctx.fillStyle = '#2c3e50';
  ctx.fillRect(0, 580, 800, 20);

  requestAnimationFrame(render);
}

render();`,
          },
          {
            type: 'list',
            items: [
              'Engine.update(engine, delta) — Render/Runner 없이 수동으로 물리 진행',
              'body.position — 바디의 현재 위치 {x, y}',
              'body.angle — 바디의 현재 회전 각도 (라디안)',
              'body.circleRadius — 원형 바디의 반지름',
              'body.vertices — 다각형 바디의 꼭짓점 배열',
              'Canvas 2D API로 그라데이션, 트레일, 파티클 등 커스텀 비주얼 구현',
              'requestAnimationFrame + Engine.update 조합으로 렌더 루프 구성',
            ],
          },
          {
            type: 'tip',
            text: '커스텀 렌더링 시 ctx.fillRect에 반투명 색상을 사용하면 이전 프레임이 서서히 사라지는 잔상(trail) 효과를 쉽게 만들 수 있습니다. rgba의 알파값(0.1~0.3)을 조절하여 잔상의 길이를 변경하세요.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 물리 퍼즐 게임',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '물리 기반 퍼즐 게임 만들기',
          },
          {
            type: 'text',
            text: '지금까지 배운 Matter.js의 모든 기능을 활용하여 물리 퍼즐 게임을 만들어봅니다. 플레이어가 공을 발사하여 목표물을 맞추는 게임으로, 장애물 배치, 충돌 감지, 점수 시스템, 레벨 구성 등을 포함합니다. 마우스로 발사 각도와 힘을 조절하고, 충돌 이벤트로 점수를 관리합니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `const { Engine, World, Bodies, Body, Events,
        Constraint, Mouse, MouseConstraint, Composite } = Matter;

// ── 게임 설정 ──
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

const engine = Engine.create({ gravity: { x: 0, y: 1 } });
let score = 0;
let shotsLeft = 5;

// ── 레벨 구성 ──
function createLevel() {
  // 바닥, 벽
  const ground = Bodies.rectangle(400, 590, 800, 20, {
    isStatic: true, label: 'ground',
    render: { fillStyle: '#2c3e50' },
  });
  const wallL = Bodies.rectangle(0, 300, 20, 600, { isStatic: true });
  const wallR = Bodies.rectangle(800, 300, 20, 600, { isStatic: true });

  // 장애물 플랫폼
  const platform1 = Bodies.rectangle(500, 400, 150, 15, {
    isStatic: true, angle: -0.2, label: 'platform',
    render: { fillStyle: '#7f8c8d' },
  });
  const platform2 = Bodies.rectangle(350, 300, 120, 15, {
    isStatic: true, angle: 0.15, label: 'platform',
    render: { fillStyle: '#7f8c8d' },
  });

  // 목표물 (별)
  const targets = [];
  const targetPositions = [
    { x: 600, y: 370 },
    { x: 400, y: 260 },
    { x: 550, y: 200 },
  ];
  targetPositions.forEach((pos, i) => {
    const target = Bodies.circle(pos.x, pos.y, 15, {
      isStatic: true, label: 'target',
      isSensor: true,  // 센서: 충돌 감지만 하고 물리 반응 없음
      render: { fillStyle: '#f1c40f' },
    });
    targets.push(target);
  });

  World.add(engine.world, [
    ground, wallL, wallR, platform1, platform2, ...targets
  ]);

  return targets;
}

const targets = createLevel();`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 발사 시스템 ──
let projectile = null;
let isAiming = false;
let aimStart = { x: 0, y: 0 };

canvas.addEventListener('mousedown', (e) => {
  if (shotsLeft <= 0) return;
  isAiming = true;
  aimStart = { x: e.offsetX, y: e.offsetY };
});

canvas.addEventListener('mouseup', (e) => {
  if (!isAiming) return;
  isAiming = false;

  // 드래그 방향과 거리로 발사 힘 계산
  const dx = aimStart.x - e.offsetX;
  const dy = aimStart.y - e.offsetY;
  const power = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.0005, 0.05);

  // 발사체 생성
  projectile = Bodies.circle(100, 500, 12, {
    label: 'projectile',
    restitution: 0.6,
    density: 0.004,
    render: { fillStyle: '#e74c3c' },
  });

  World.add(engine.world, projectile);
  Body.applyForce(projectile, projectile.position, {
    x: dx * power * 0.1,
    y: dy * power * 0.1,
  });
  shotsLeft--;
});

// ── 충돌 이벤트: 점수 처리 ──
Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach((pair) => {
    const labels = [pair.bodyA.label, pair.bodyB.label];
    if (labels.includes('projectile') && labels.includes('target')) {
      const target = pair.bodyA.label === 'target'
        ? pair.bodyA : pair.bodyB;
      World.remove(engine.world, target);
      score += 100;
      console.log('명중! 점수: ' + score);

      // 모든 목표물 제거 시 클리어
      const remaining = targets.filter(
        (t) => Composite.get(engine.world, t.id, 'body')
      );
      if (remaining.length === 0) {
        console.log('레벨 클리어! 총점: ' + score);
      }
    }
  });
});`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 게임 렌더 루프 ──
function gameLoop() {
  Engine.update(engine, 1000 / 60);

  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 모든 바디 그리기
  const bodies = Composite.allBodies(engine.world);
  bodies.forEach((body) => {
    const vertices = body.vertices;
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    for (let j = 1; j < vertices.length; j++) {
      ctx.lineTo(vertices[j].x, vertices[j].y);
    }
    ctx.closePath();

    // 라벨에 따라 색상 결정
    if (body.label === 'target') {
      ctx.fillStyle = '#f1c40f';
    } else if (body.label === 'projectile') {
      ctx.fillStyle = '#e74c3c';
    } else if (body.label === 'platform') {
      ctx.fillStyle = '#7f8c8d';
    } else {
      ctx.fillStyle = '#2c3e50';
    }
    ctx.fill();
    ctx.strokeStyle = '#34495e';
    ctx.stroke();
  });

  // 조준선 그리기
  if (isAiming) {
    ctx.beginPath();
    ctx.moveTo(100, 500);
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // UI 표시
  ctx.fillStyle = '#ffffff';
  ctx.font = '18px sans-serif';
  ctx.fillText('점수: ' + score, 20, 30);
  ctx.fillText('남은 발사: ' + shotsLeft, 20, 55);

  requestAnimationFrame(gameLoop);
}

gameLoop();`,
          },
          {
            type: 'list',
            items: [
              'isSensor: true — 물리 반응 없이 충돌 감지만 수행 (트리거 용도)',
              'Body.applyForce — 마우스 드래그 방향/거리로 발사 힘 계산',
              'Composite.get(world, id, type) — 월드에서 특정 바디 검색',
              'Composite.allBodies(world) — 월드의 모든 바디 배열 반환',
              'body.vertices — 바디의 꼭짓점으로 다각형 렌더링',
              'label 속성으로 바디 종류를 구분하여 게임 로직 처리',
            ],
          },
          {
            type: 'tip',
            text: 'isSensor를 활용하면 트리거 영역을 만들 수 있습니다. 센서 바디는 충돌 이벤트는 발생시키지만 물리적으로 다른 바디를 밀어내지 않습니다. 아이템 수집, 영역 진입 감지 등에 활용하세요.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'Matter.js 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'Matter.js 핵심 API 레퍼런스',
          },
          {
            type: 'text',
            text: 'Matter.js의 주요 모듈과 자주 사용하는 API를 정리합니다. Engine, World, Bodies, Body, Constraint, Composite, Events, Render, Runner, Mouse, MouseConstraint 등 핵심 모듈의 주요 메서드와 속성을 빠르게 참조할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ══════════════════════════════════════════
// Engine — 물리 엔진 관리
// ══════════════════════════════════════════
Engine.create(options)          // 엔진 생성
Engine.update(engine, delta)    // 물리 시뮬레이션 진행 (delta: ms)
// options: { gravity: { x, y, scale } }

// ══════════════════════════════════════════
// World / Composite — 바디 관리
// ══════════════════════════════════════════
World.add(world, bodies)        // 바디/제약 추가
World.remove(world, body)       // 바디/제약 제거
Composite.allBodies(composite)  // 모든 바디 배열 반환
Composite.allConstraints(comp)  // 모든 제약 배열 반환
Composite.clear(world, false)   // 월드 초기화

// ══════════════════════════════════════════
// Bodies — 바디 팩토리
// ══════════════════════════════════════════
Bodies.rectangle(x, y, w, h, opts)  // 사각형
Bodies.circle(x, y, radius, opts)   // 원
Bodies.polygon(x, y, sides, r, opts) // 다각형
Bodies.trapezoid(x, y, w, h, slope) // 사다리꼴
Bodies.fromVertices(x, y, verts)    // 꼭짓점 기반 커스텀 형태`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ══════════════════════════════════════════
// Body — 바디 조작
// ══════════════════════════════════════════
Body.applyForce(body, pos, force) // 힘 적용
Body.setVelocity(body, {x, y})   // 속도 설정
Body.setAngularVelocity(body, v)  // 회전 속도 설정
Body.setPosition(body, {x, y})    // 위치 직접 설정
Body.setAngle(body, angle)        // 각도 직접 설정
Body.setStatic(body, isStatic)    // 정적/동적 전환
Body.scale(body, scaleX, scaleY)  // 크기 변경

// 주요 바디 옵션:
// {
//   isStatic, isSensor, label,
//   restitution, friction, frictionAir, frictionStatic,
//   density, mass, inertia,
//   angle, angularVelocity,
//   collisionFilter: { group, category, mask },
//   render: { fillStyle, strokeStyle, lineWidth, opacity }
// }

// ══════════════════════════════════════════
// Constraint — 제약 조건
// ══════════════════════════════════════════
Constraint.create({
  bodyA, bodyB,          // 연결할 바디
  pointA, pointB,        // 연결 지점 (상대 좌표)
  length,                // 연결 길이
  stiffness,             // 강성 (0~1)
  damping,               // 감쇄 (0~1)
})

// ══════════════════════════════════════════
// Events — 이벤트 시스템
// ══════════════════════════════════════════
Events.on(target, eventName, callback)
Events.off(target, eventName, callback)
// 엔진 이벤트: collisionStart, collisionActive,
//              collisionEnd, beforeUpdate, afterUpdate
// 마우스 이벤트: mousedown, mouseup, mousemove,
//               startdrag, enddrag`,
          },
          {
            type: 'list',
            items: [
              'Engine — 물리 엔진 생성/업데이트, 중력 설정',
              'Bodies — 사각형, 원, 다각형 등 바디 팩토리 메서드',
              'Body — 힘, 속도, 위치, 각도 등 바디 직접 조작',
              'Constraint — 두 바디 간 연결 (줄, 스프링, 관절)',
              'Composite — 바디와 제약을 그룹으로 묶어 관리',
              'Events — 충돌, 업데이트, 마우스 이벤트 감지',
              'Mouse / MouseConstraint — 마우스 인터랙션 지원',
              'Render / Runner — 기본 렌더러와 시뮬레이션 러너',
            ],
          },
          {
            type: 'tip',
            text: 'Matter.js 공식 문서(brm.io/matter-js/docs)에서 모든 API의 상세 설명을 확인할 수 있습니다. GitHub 저장소의 examples 폴더에는 체인, 자동차, 천(cloth), 뉴턴의 요람 등 다양한 데모가 포함되어 있어 학습에 매우 유용합니다.',
          },
        ],
      },
    ],
  },

  // ─── 5. GLSL 셰이더 ──────────────────────────────────────────────────
  {
    slug: 'glsl',
    title: 'GLSL 셰이더',
    description: 'GPU에서 실행되는 셰이더 프로그래밍',
    category: 'creative',
    color: 'bg-violet-500',
    difficulty: 'advanced',
    objectives: [
      '셰이더 기본: vertex, fragment',
      'uniform, varying, 내장 함수',
      '텍스처 샘플링과 UV 좌표',
      '노이즈, 패턴, 포스트 프로세싱',
      '실전 비주얼 이펙트와 함수 레퍼런스',
    ],
    lessons: [
      {
        slug: 'shader-basics',
        title: '셰이더 기본',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'GLSL Fragment 셰이더란?',
          },
          {
            type: 'text',
            text: 'GLSL(OpenGL Shading Language)은 GPU에서 실행되는 프로그래밍 언어입니다. Fragment 셰이더(Pixel 셰이더)는 화면의 모든 픽셀에 대해 병렬로 실행되어 각 픽셀의 색상을 결정합니다. CPU에서 for 루프를 돌리는 것과 달리, GPU의 수천 개 코어가 동시에 각 픽셀을 처리하므로 매우 빠릅니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `// ── 가장 기본적인 Fragment 셰이더 ──
precision mediump float; // 부동소수점 정밀도 선언 (필수)

void main() {
  // gl_FragColor — 현재 픽셀의 최종 색상 (RGBA)
  // vec4(빨강, 초록, 파랑, 투명도) — 각 값은 0.0 ~ 1.0
  gl_FragColor = vec4(1.0, 0.0, 0.5, 1.0); // 밝은 핑크
}`,
          },
          {
            type: 'heading',
            text: '기본 데이터 타입과 gl_FragCoord',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

void main() {
  // gl_FragCoord — 현재 픽셀의 화면 좌표 (왼쪽 아래가 원점)
  // gl_FragCoord.x → 수평 위치 (픽셀)
  // gl_FragCoord.y → 수직 위치 (픽셀)

  // ── GLSL 기본 데이터 타입 ──
  float x = gl_FragCoord.x;  // 단일 부동소수점
  int count = 5;              // 정수
  vec2 uv = gl_FragCoord.xy;  // 2D 벡터 (x, y)
  vec3 color = vec3(1.0, 0.5, 0.2); // 3D 벡터 (r, g, b)
  vec4 rgba = vec4(color, 1.0);      // 4D 벡터 (r, g, b, a)

  // 화면 좌표를 이용한 그라데이션
  // 화면 너비를 800으로 가정
  float gradient = gl_FragCoord.x / 800.0;
  gl_FragColor = vec4(gradient, 0.2, 1.0 - gradient, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

void main() {
  // 벡터 연산 예시
  vec2 a = vec2(1.0, 2.0);
  vec2 b = vec2(3.0, 4.0);

  vec2 sum = a + b;        // (4.0, 6.0)
  vec2 scaled = a * 2.0;   // (2.0, 4.0)
  float dot = dot(a, b);   // 내적: 1*3 + 2*4 = 11.0
  float len = length(a);   // 길이: sqrt(1^2 + 2^2)

  // 스위즐링 — 벡터 성분을 자유롭게 추출/재조합
  vec4 color = vec4(0.1, 0.5, 0.9, 1.0);
  vec3 rgb = color.rgb;     // (0.1, 0.5, 0.9)
  vec2 rg = color.rg;       // (0.1, 0.5)
  vec3 bgr = color.bgr;     // (0.9, 0.5, 0.1) 순서 변경!

  gl_FragColor = vec4(rgb, 1.0);
}`,
          },
          {
            type: 'list',
            items: [
              'precision mediump float — 부동소수점 정밀도 선언 (WebGL 필수)',
              'gl_FragColor — 출력: 현재 픽셀의 RGBA 색상 (vec4)',
              'gl_FragCoord — 입력: 현재 픽셀의 화면 좌표 (vec4)',
              'float, int — 스칼라 타입',
              'vec2, vec3, vec4 — 2/3/4차원 벡터 타입',
              '스위즐링(.rgb, .xy, .bgr) — 벡터 성분 자유롭게 접근/재조합',
            ],
          },
          {
            type: 'tip',
            text: 'GLSL에서 0과 1.0은 다릅니다! float 변수에 0을 대입하면 오류가 날 수 있으므로 반드시 0.0으로 작성하세요. 마찬가지로 vec3(1, 0, 0)이 아닌 vec3(1.0, 0.0, 0.0)으로 작성해야 합니다.',
          },
        ],
      },
      {
        slug: 'uniforms-coords',
        title: 'Uniform과 좌표',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'Uniform 변수 — 외부 데이터 전달',
          },
          {
            type: 'text',
            text: 'Uniform은 JavaScript(CPU)에서 셰이더(GPU)로 값을 전달하는 변수입니다. 모든 픽셀이 동일한 uniform 값을 공유합니다. u_time(경과 시간), u_resolution(화면 크기), u_mouse(마우스 위치) 등을 전달하여 동적이고 인터랙티브한 셰이더를 만들 수 있습니다. 좌표를 정규화하면 화면 크기에 무관하게 0~1 범위에서 작업할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

// ── Uniform 선언 — CPU에서 전달받는 값 ──
uniform float u_time;       // 경과 시간 (초)
uniform vec2 u_resolution;  // 캔버스 크기 (width, height)
uniform vec2 u_mouse;       // 마우스 위치 (x, y)

void main() {
  // ── 좌표 정규화 — 0.0 ~ 1.0 범위로 변환 ──
  vec2 st = gl_FragCoord.xy / u_resolution;
  // st.x: 0(왼쪽) ~ 1(오른쪽)
  // st.y: 0(아래) ~ 1(위)

  // 정규화된 좌표로 그라데이션
  vec3 color = vec3(st.x, st.y, 0.5);
  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  // ── 시간에 따른 색상 변화 ──
  float r = sin(u_time) * 0.5 + 0.5;        // 0~1 사이 진동
  float g = sin(u_time + 2.094) * 0.5 + 0.5; // 120도 위상차
  float b = sin(u_time + 4.189) * 0.5 + 0.5; // 240도 위상차

  vec3 bgColor = vec3(r * st.x, g * st.y, b);

  // ── 마우스 위치 활용 ──
  vec2 mouseNorm = u_mouse / u_resolution; // 마우스도 정규화
  float dist = distance(st, mouseNorm);     // 픽셀~마우스 거리

  // 마우스 주변에 빛나는 원
  float glow = 0.05 / dist;
  vec3 glowColor = vec3(1.0, 0.8, 0.3) * glow;

  // 색상 혼합
  vec3 finalColor = bgColor + glowColor;
  gl_FragColor = vec4(finalColor, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// JavaScript에서 Uniform 값 전달하기 (WebGL)
const gl = canvas.getContext('webgl');

// uniform 위치 가져오기
const uTime = gl.getUniformLocation(program, 'u_time');
const uResolution = gl.getUniformLocation(program, 'u_resolution');
const uMouse = gl.getUniformLocation(program, 'u_mouse');

// 렌더 루프에서 매 프레임 업데이트
function render(time) {
  gl.uniform1f(uTime, time * 0.001); // 밀리초 → 초
  gl.uniform2f(uResolution, canvas.width, canvas.height);
  gl.uniform2f(uMouse, mouseX, canvas.height - mouseY); // y축 반전

  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(render);
}`,
          },
          {
            type: 'list',
            items: [
              'uniform float u_time — 시간 기반 애니메이션의 핵심',
              'uniform vec2 u_resolution — 화면 크기, 좌표 정규화에 사용',
              'uniform vec2 u_mouse — 마우스 인터랙션 구현',
              'st = gl_FragCoord.xy / u_resolution — 0~1 정규화 좌표',
              'distance(a, b) — 두 점 사이 거리 계산',
              'sin(u_time) * 0.5 + 0.5 — -1~1을 0~1 범위로 변환하는 패턴',
            ],
          },
          {
            type: 'tip',
            text: '좌표를 정규화(0~1)하면 해상도와 무관하게 동일한 결과를 얻습니다. 또한 중앙 기준 좌표가 필요하면 st = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y 처럼 변환하여 종횡비를 보정할 수 있습니다.',
          },
        ],
      },
      {
        slug: 'patterns-effects',
        title: '패턴과 이펙트',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'GLSL 내장 함수로 패턴 만들기',
          },
          {
            type: 'text',
            text: 'GLSL의 수학 함수들을 조합하면 원, 줄무늬, 격자, 그라데이션 등 다양한 패턴을 만들 수 있습니다. step()은 이진 분할, smoothstep()은 부드러운 전환, mix()는 선형 보간, fract()는 반복 패턴에 사용됩니다. 이 함수들을 창의적으로 조합하면 무한한 비주얼을 생성할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  // ── step(edge, x) — x가 edge보다 크면 1.0, 아니면 0.0 ──
  float s = step(0.5, st.x); // 왼쪽 절반 = 0, 오른쪽 절반 = 1

  // ── smoothstep(a, b, x) — a~b 사이에서 부드럽게 0→1 전환 ──
  float ss = smoothstep(0.3, 0.7, st.x); // 0.3~0.7 구간에서 서서히 전환

  // ── mix(a, b, t) — 두 값을 t 비율로 혼합 (선형 보간) ──
  vec3 red = vec3(1.0, 0.2, 0.2);
  vec3 blue = vec3(0.2, 0.2, 1.0);
  vec3 blended = mix(red, blue, st.x); // 왼→오른쪽으로 빨강→파랑

  gl_FragColor = vec4(blended, 1.0);
}`,
          },
          {
            type: 'heading',
            text: '원, 줄무늬, 그라데이션 패턴',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  // 중앙 기준 좌표 (-0.5 ~ 0.5), 종횡비 보정
  vec2 st = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y;

  // ── 원 그리기 ──
  float dist = length(st); // 중심으로부터 거리
  float circle = smoothstep(0.3, 0.28, dist); // 반지름 0.3 원

  // ── 줄무늬 패턴 ──
  // fract(x) — 소수 부분만 반환 (0~1 반복)
  float stripes = step(0.5, fract(st.x * 10.0)); // 수직 줄무늬 10개

  // ── 물결치는 줄무늬 ──
  float wave = sin(st.x * 20.0 + u_time * 3.0) * 0.5 + 0.5;

  // ── 동심원(링) 패턴 ──
  float rings = sin(dist * 40.0 - u_time * 5.0) * 0.5 + 0.5;

  // ── 회전하는 그라데이션 ──
  float angle = atan(st.y, st.x); // 각도 (-PI ~ PI)
  float spiral = fract(angle / 6.2832 + u_time * 0.2);

  // 색상 합성
  vec3 color = vec3(0.0);
  color += vec3(0.2, 0.5, 0.9) * circle;
  color += vec3(rings * 0.3, wave * 0.2, spiral * 0.5);

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

// ── 격자(Grid) 패턴 ──
float grid(vec2 st, float size) {
  vec2 grid = fract(st * size);
  // mod()로도 반복 가능: mod(st * size, 1.0)
  return step(0.05, grid.x) * step(0.05, grid.y);
}

// ── 방사형 패턴 ──
float radial(vec2 st, float count) {
  float angle = atan(st.y, st.x);
  return step(0.5, fract(angle * count / 6.2832));
}

void main() {
  vec2 st = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y;

  float d = length(st);
  float g = grid(st, 8.0);
  float r = radial(st, 12.0);

  vec3 color = vec3(0.05);
  color = mix(color, vec3(0.1, 0.3, 0.6), g);
  color = mix(color, vec3(0.8, 0.2, 0.5), r * smoothstep(0.4, 0.1, d));

  // 중앙 glow
  color += vec3(1.0, 0.7, 0.3) * (0.02 / d);

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'list',
            items: [
              'step(edge, x) — 임계값 기준 이진 분리 (0 또는 1)',
              'smoothstep(a, b, x) — a~b 구간에서 부드러운 전환 (0→1)',
              'mix(a, b, t) — t 비율로 선형 보간 (0: a, 1: b)',
              'length(v) — 벡터 길이 (원점으로부터 거리)',
              'distance(a, b) — 두 점 사이 거리',
              'fract(x) — 소수 부분 반환, 반복 패턴의 핵심',
              'mod(x, y) — 나머지 연산, fract와 유사한 반복 효과',
              'atan(y, x) — 각도 계산, 방사형/나선 패턴에 사용',
            ],
          },
          {
            type: 'tip',
            text: 'smoothstep의 두 인자 순서를 바꾸면(큰 값, 작은 값) 반전 효과를 얻습니다. 예를 들어 smoothstep(0.3, 0.28, dist)는 dist가 0.28 이하면 1.0, 0.3 이상이면 0.0입니다. 이 기법으로 테두리가 부드러운 도형을 만들 수 있습니다.',
          },
        ],
      },
      {
        slug: 'textures-sampling',
        title: '텍스처와 샘플링',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '텍스처 매핑과 UV 좌표',
          },
          {
            type: 'text',
            text: '텍스처는 셰이더에서 이미지 데이터를 읽어 픽셀 색상에 반영하는 핵심 기법입니다. sampler2D 타입으로 텍스처를 선언하고, texture2D() 함수로 특정 UV 좌표의 색상을 샘플링합니다. UV 좌표는 (0,0)이 왼쪽 아래, (1,1)이 오른쪽 위이며, 이 좌표를 조작하면 텍스처를 이동, 회전, 반복, 왜곡할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform sampler2D u_texture;  // 텍스처 (JS에서 바인딩)
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  // UV 좌표 계산 (0~1 정규화)
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // ── 기본 텍스처 샘플링 ──
  vec4 texColor = texture2D(u_texture, uv);
  gl_FragColor = texColor;
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // ── UV 좌표 변환 ──

  // 1. 텍스처 반복 (타일링)
  vec2 tiledUV = fract(uv * 3.0); // 3x3 반복

  // 2. 텍스처 스크롤 (이동)
  vec2 scrollUV = uv + vec2(u_time * 0.1, 0.0);
  scrollUV = fract(scrollUV); // 반복되도록 감싸기

  // 3. 텍스처 회전
  float angle = u_time * 0.5;
  vec2 center = vec2(0.5);
  vec2 rotatedUV = uv - center;
  rotatedUV = vec2(
    rotatedUV.x * cos(angle) - rotatedUV.y * sin(angle),
    rotatedUV.x * sin(angle) + rotatedUV.y * cos(angle)
  );
  rotatedUV += center;

  // 4. 텍스처 줌
  vec2 zoomUV = (uv - 0.5) * 0.5 + 0.5; // 2배 확대 (중앙 기준)

  // 5. 물결 왜곡
  vec2 waveUV = uv;
  waveUV.x += sin(uv.y * 10.0 + u_time) * 0.03;
  waveUV.y += cos(uv.x * 10.0 + u_time) * 0.03;

  vec4 color = texture2D(u_texture, waveUV);
  gl_FragColor = color;
}`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// JavaScript에서 텍스처 로딩 및 바인딩
const gl = canvas.getContext('webgl');

function loadTexture(url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 로딩 중 임시 픽셀 설정
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0,
    gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));

  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
      gl.RGBA, gl.UNSIGNED_BYTE, image);

    // 텍스처 래핑 모드
    gl.texParameteri(gl.TEXTURE_2D,
      gl.TEXTURE_WRAP_S, gl.REPEAT);    // 수평 반복
    gl.texParameteri(gl.TEXTURE_2D,
      gl.TEXTURE_WRAP_T, gl.REPEAT);    // 수직 반복
    // 필터링 모드
    gl.texParameteri(gl.TEXTURE_2D,
      gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,
      gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  };
  image.src = url;

  return texture;
}

// 텍스처를 셰이더에 전달
const tex = loadTexture('image.jpg');
const uTexture = gl.getUniformLocation(program, 'u_texture');
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.uniform1i(uTexture, 0); // TEXTURE0 유닛 번호`,
          },
          {
            type: 'list',
            items: [
              'sampler2D — 텍스처를 참조하는 데이터 타입',
              'texture2D(sampler, uv) — UV 좌표에서 텍셀(픽셀) 색상 읽기',
              'fract(uv * n) — UV 좌표를 n번 반복(타일링)',
              'TEXTURE_WRAP_S/T — REPEAT(반복), CLAMP_TO_EDGE(고정) 등',
              'TEXTURE_MIN/MAG_FILTER — LINEAR(부드러움), NEAREST(픽셀화)',
              'gl.activeTexture(gl.TEXTUREn) — 텍스처 유닛 활성화',
            ],
          },
          {
            type: 'tip',
            text: '텍스처 크기가 2의 거듭제곱(256, 512, 1024)이 아니면 WebGL 1에서 REPEAT 래핑과 밉맵을 사용할 수 없습니다. NPOT(Non-Power-Of-Two) 텍스처는 CLAMP_TO_EDGE와 LINEAR 필터링만 지원됩니다. WebGL 2에서는 이 제한이 없습니다.',
          },
        ],
      },
      {
        slug: 'noise-patterns',
        title: '노이즈와 패턴 생성',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '절차적 노이즈와 고급 패턴',
          },
          {
            type: 'text',
            text: '노이즈 함수는 자연스러운 패턴(구름, 불꽃, 지형 등)을 생성하는 핵심 기법입니다. GLSL에는 내장 노이즈 함수가 없으므로 직접 구현해야 합니다. 해시 기반 랜덤, Value Noise, Perlin Noise, Simplex Noise 등을 구현하고, FBM(Fractal Brownian Motion)으로 여러 옥타브의 노이즈를 합성하여 복잡한 패턴을 만듭니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

// ── 해시 기반 의사 랜덤 함수 ──
// 입력 좌표에 대해 0~1 범위의 "랜덤"값 반환
float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

// ── Value Noise ──
// 격자 꼭짓점의 랜덤값을 보간하여 부드러운 노이즈 생성
float valueNoise(vec2 st) {
  vec2 i = floor(st); // 격자 좌표 (정수)
  vec2 f = fract(st); // 셀 내 위치 (소수)

  // 격자 4개 꼭짓점의 랜덤값
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  // 부드러운 보간 (hermite 곡선)
  vec2 u = f * f * (3.0 - 2.0 * f);

  // 이중 선형 보간
  return mix(
    mix(a, b, u.x),
    mix(c, d, u.x),
    u.y
  );
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  st *= 8.0; // 노이즈 스케일

  float n = valueNoise(st + u_time * 0.5);
  gl_FragColor = vec4(vec3(n), 1.0);
}`,
          },
          {
            type: 'heading',
            text: 'FBM (Fractal Brownian Motion)',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// ── FBM: 여러 옥타브의 노이즈를 합산 ──
// 옥타브가 늘어날수록 세밀한 디테일이 추가됨
float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;   // 진폭 (매 옥타브마다 감소)
  float frequency = 1.0;   // 주파수 (매 옥타브마다 증가)

  for (int i = 0; i < 6; i++) {
    value += amplitude * noise(st * frequency);
    frequency *= 2.0;     // 주파수 2배 (lacunarity)
    amplitude *= 0.5;     // 진폭 절반 (gain)
  }
  return value;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  st *= 3.0;

  // 시간에 따라 움직이는 FBM
  float f = fbm(st + vec2(u_time * 0.2, u_time * 0.1));

  // 구름/연기 같은 색상 매핑
  vec3 color = mix(
    vec3(0.1, 0.1, 0.3),  // 어두운 부분
    vec3(1.0, 0.9, 0.7),  // 밝은 부분
    f
  );

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 st) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(st);
    st *= 2.0; a *= 0.5;
  }
  return v;
}

// ── 도메인 워핑 — FBM을 입력으로 FBM 호출 ──
// 대리석, 용암, 외계 지형 같은 복잡한 패턴 생성
void main() {
  vec2 st = gl_FragCoord.xy / u_resolution * 3.0;

  // 1차 워핑
  vec2 q = vec2(
    fbm(st + vec2(0.0, 0.0)),
    fbm(st + vec2(5.2, 1.3))
  );

  // 2차 워핑 (워핑의 워핑)
  vec2 r = vec2(
    fbm(st + 4.0 * q + vec2(1.7, 9.2) + u_time * 0.15),
    fbm(st + 4.0 * q + vec2(8.3, 2.8) + u_time * 0.12)
  );

  float f = fbm(st + 4.0 * r);

  // 색상 매핑
  vec3 color = mix(vec3(0.1, 0.0, 0.2), vec3(0.9, 0.5, 0.1), f);
  color = mix(color, vec3(0.0, 0.3, 0.6), length(q));
  color = mix(color, vec3(0.9, 0.2, 0.3), r.x);

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'list',
            items: [
              'random(st) — 해시 기반 의사 랜덤 함수 (결정적)',
              'Value Noise — 격자 꼭짓점의 랜덤값을 보간한 부드러운 노이즈',
              'FBM — 여러 옥타브의 노이즈를 합산하여 프랙탈 패턴 생성',
              'lacunarity — 옥타브 간 주파수 비율 (보통 2.0)',
              'gain — 옥타브 간 진폭 비율 (보통 0.5)',
              'Domain Warping — 노이즈를 좌표 왜곡에 사용하여 유기적 패턴 생성',
            ],
          },
          {
            type: 'tip',
            text: 'FBM의 옥타브 수를 늘리면 더 정밀한 패턴이 나오지만 GPU 연산량도 증가합니다. 모바일에서는 4~5 옥타브, 데스크톱에서는 6~8 옥타브가 적당합니다. Domain Warping은 FBM을 2~3번 중첩하므로 성능에 주의하세요.',
          },
        ],
      },
      {
        slug: 'post-processing',
        title: '포스트 프로세싱',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: '포스트 프로세싱 셰이더',
          },
          {
            type: 'text',
            text: '포스트 프로세싱은 3D 씬이 렌더링된 후 최종 이미지에 셰이더 효과를 적용하는 기법입니다. 렌더링 결과를 텍스처(FBO/Framebuffer Object)에 저장한 뒤, 이 텍스처를 화면 전체 사각형(Quad)에 매핑하면서 셰이더로 블러, 비네팅, 색상 보정, 글리치 등의 효과를 적용합니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform sampler2D u_scene;    // 렌더링된 씬 텍스처
uniform vec2 u_resolution;
uniform float u_time;

// ── 박스 블러 (Box Blur) ──
vec4 boxBlur(sampler2D tex, vec2 uv, vec2 texelSize, float radius) {
  vec4 color = vec4(0.0);
  float count = 0.0;

  for (float x = -4.0; x <= 4.0; x += 1.0) {
    for (float y = -4.0; y <= 4.0; y += 1.0) {
      if (length(vec2(x, y)) <= radius) {
        color += texture2D(tex, uv + vec2(x, y) * texelSize);
        count += 1.0;
      }
    }
  }

  return color / count;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 texelSize = 1.0 / u_resolution; // 1 픽셀 크기

  // 블러 적용
  vec4 blurred = boxBlur(u_scene, uv, texelSize, 4.0);
  vec4 original = texture2D(u_scene, uv);

  // 원본과 블러 블렌딩
  gl_FragColor = mix(original, blurred, 0.5);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform sampler2D u_scene;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // ── 비네팅 (Vignette) ──
  // 화면 가장자리를 어둡게 하는 효과
  float dist = distance(uv, vec2(0.5));
  float vignette = smoothstep(0.5, 0.2, dist);

  // ── 색수차 (Chromatic Aberration) ──
  // RGB 채널을 약간 분리하여 렌즈 효과
  float offset = 0.005;
  float r = texture2D(u_scene, uv + vec2(offset, 0.0)).r;
  float g = texture2D(u_scene, uv).g;
  float b = texture2D(u_scene, uv - vec2(offset, 0.0)).b;
  vec3 color = vec3(r, g, b);

  // ── 색상 보정 ──
  // 밝기 (brightness)
  color *= 1.1;
  // 대비 (contrast)
  color = (color - 0.5) * 1.2 + 0.5;
  // 채도 (saturation)
  float gray = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(gray), color, 1.3);

  // 비네팅 적용
  color *= vignette;

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform sampler2D u_scene;
uniform vec2 u_resolution;
uniform float u_time;

// ── 의사 랜덤 ──
float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // ── 글리치 효과 ──
  // 랜덤한 시간에 수평 줄이 어긋남
  float glitchStrength = step(0.95, random(vec2(floor(u_time * 10.0))));
  float lineNoise = step(0.5, random(vec2(floor(uv.y * 50.0), u_time)));
  float offset = glitchStrength * lineNoise * 0.1;
  uv.x += offset;

  vec4 color = texture2D(u_scene, uv);

  // 글리치 시 RGB 분리 강화
  if (glitchStrength > 0.5) {
    float shift = 0.02;
    color.r = texture2D(u_scene, uv + vec2(shift, 0.0)).r;
    color.b = texture2D(u_scene, uv - vec2(shift, 0.0)).b;
  }

  // ── 스캔라인 (CRT 효과) ──
  float scanline = sin(gl_FragCoord.y * 1.5) * 0.04;
  color.rgb -= scanline;

  // ── 필름 그레인 ──
  float grain = (random(uv + u_time) - 0.5) * 0.08;
  color.rgb += grain;

  gl_FragColor = color;
}`,
          },
          {
            type: 'list',
            items: [
              'Box Blur — 주변 픽셀의 평균으로 흐림 효과',
              'Vignette — distance(uv, center)로 가장자리 어둡게',
              'Chromatic Aberration — RGB 채널별 UV 오프셋으로 색수차',
              'Color Grading — 밝기, 대비, 채도 조절',
              'Glitch — 랜덤 수평 오프셋과 RGB 분리로 디지털 왜곡',
              'Scanline — sin(y)로 CRT 모니터 스캔라인 효과',
              'Film Grain — random()으로 필름 노이즈 추가',
            ],
          },
          {
            type: 'tip',
            text: '포스트 프로세싱 효과를 체이닝(연쇄)하려면 FBO를 여러 개 사용하여 핑퐁 렌더링을 합니다. 예를 들어 FBO-A에 블러를 적용한 결과를 FBO-B에 저장하고, FBO-B에 비네팅을 적용한 결과를 화면에 출력합니다.',
          },
        ],
      },
      {
        slug: 'practical-project',
        title: '실전: 비주얼 이펙트',
        duration: '25분',
        content: [
          {
            type: 'heading',
            text: '셰이더로 비주얼 이펙트 만들기',
          },
          {
            type: 'text',
            text: '지금까지 배운 GLSL 기법을 종합하여 인터랙티브 비주얼 이펙트를 만듭니다. 노이즈, 수학 함수, UV 조작, 색상 처리를 조합하여 불꽃, 오로라, 플라즈마, 워터 리플 등의 효과를 구현합니다. 마우스 위치와 시간 기반의 동적인 비주얼을 완성합니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// ── 불꽃(Fire) 이펙트 ──
float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 st) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(st);
    st *= 2.0; a *= 0.5;
  }
  return v;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  // 불꽃은 아래에서 위로 올라감
  vec2 fireUV = st;
  fireUV.y = 1.0 - fireUV.y; // y축 반전

  // 노이즈로 불꽃 형태 생성
  float fire = fbm(vec2(fireUV.x * 4.0, fireUV.y * 3.0 - u_time * 2.0));

  // 높이에 따라 불꽃 강도 감소
  fire *= smoothstep(1.0, 0.2, fireUV.y);

  // 중앙에 집중
  float centerFade = smoothstep(0.5, 0.0, abs(st.x - 0.5));
  fire *= centerFade;

  // 불꽃 색상 매핑 (검정 → 빨강 → 노랑 → 흰색)
  vec3 color = vec3(0.0);
  color = mix(color, vec3(0.5, 0.0, 0.0), smoothstep(0.1, 0.3, fire));
  color = mix(color, vec3(1.0, 0.3, 0.0), smoothstep(0.3, 0.5, fire));
  color = mix(color, vec3(1.0, 0.8, 0.2), smoothstep(0.5, 0.7, fire));
  color = mix(color, vec3(1.0, 1.0, 0.9), smoothstep(0.7, 0.9, fire));

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// ── 오로라(Aurora) 이펙트 ──
float random(vec2 st) {
  return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  // 마우스 영향
  vec2 mouseNorm = u_mouse / u_resolution;

  // 여러 겹의 물결
  float wave1 = sin(st.x * 6.0 + u_time + mouseNorm.x * 3.0) * 0.15;
  float wave2 = sin(st.x * 10.0 - u_time * 0.7) * 0.08;
  float wave3 = noise(vec2(st.x * 3.0, u_time * 0.3)) * 0.12;

  float aurora = wave1 + wave2 + wave3;

  // 오로라 띠 위치 (화면 상단 1/3)
  float band = smoothstep(0.15, 0.0, abs(st.y - 0.65 - aurora));
  band += smoothstep(0.1, 0.0, abs(st.y - 0.7 - aurora * 0.8)) * 0.5;

  // 색상 (녹색 ~ 보라)
  vec3 auroraColor = mix(
    vec3(0.1, 0.8, 0.4),   // 녹색
    vec3(0.5, 0.2, 0.9),   // 보라
    sin(st.x * 3.0 + u_time * 0.5) * 0.5 + 0.5
  );

  // 밤하늘 배경
  vec3 sky = vec3(0.02, 0.02, 0.08);
  // 별
  float star = step(0.998, random(floor(st * 200.0)));
  sky += star * 0.5;

  vec3 color = sky + auroraColor * band;

  gl_FragColor = vec4(color, 1.0);
}`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// ── 워터 리플(Water Ripple) 이펙트 ──
void main() {
  vec2 st = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y;
  vec2 mouseNorm = (u_mouse - u_resolution * 0.5) / u_resolution.y;

  // 마우스 위치에서 동심원 파장
  float dist = length(st - mouseNorm);
  float ripple = sin(dist * 40.0 - u_time * 6.0);
  ripple *= smoothstep(0.5, 0.0, dist); // 거리에 따라 감쇄

  // 여러 파원 추가
  float dist2 = length(st - vec2(0.2, 0.2));
  float ripple2 = sin(dist2 * 30.0 - u_time * 4.0);
  ripple2 *= smoothstep(0.4, 0.0, dist2) * 0.5;

  float totalRipple = ripple + ripple2;

  // 물 표면 굴절 효과
  vec2 distortion = vec2(
    totalRipple * 0.02,
    totalRipple * 0.02
  );

  // 배경색에 굴절 적용
  vec2 bgUV = st + distortion;
  vec3 waterColor = vec3(0.0, 0.2, 0.4);

  // 코스틱(caustics) 패턴
  float caustic = abs(sin(bgUV.x * 15.0 + u_time) *
                      sin(bgUV.y * 15.0 + u_time * 0.8));
  waterColor += vec3(0.1, 0.3, 0.4) * caustic * 0.3;

  // 반사 하이라이트
  float highlight = pow(max(0.0, totalRipple), 3.0) * 0.5;
  waterColor += vec3(highlight);

  gl_FragColor = vec4(waterColor, 1.0);
}`,
          },
          {
            type: 'list',
            items: [
              'Fire Effect — FBM + 높이 감쇠 + 온도 기반 색상 매핑',
              'Aurora Effect — sin 파동 중첩 + 띠 형태 마스킹 + 색상 변이',
              'Water Ripple — 동심원 sin + 거리 감쇠 + 코스틱 패턴',
              'smoothstep으로 부드러운 마스킹과 감쇠 적용',
              'mix()로 온도/높이에 따른 색상 그라데이션 매핑',
              'u_mouse로 인터랙티브 요소 추가 (파원 위치 등)',
            ],
          },
          {
            type: 'tip',
            text: '셰이더 이펙트를 개발할 때는 ShaderToy(shadertoy.com)나 The Book of Shaders(thebookofshaders.com)를 참고하세요. ShaderToy에서 iResolution, iTime, iMouse는 각각 u_resolution, u_time, u_mouse에 대응합니다.',
          },
        ],
      },
      {
        slug: 'reference',
        title: 'GLSL 레퍼런스',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'GLSL 핵심 레퍼런스',
          },
          {
            type: 'text',
            text: 'GLSL에서 자주 사용하는 데이터 타입, 내장 함수, 수식어(qualifier), 전처리 지시자를 정리합니다. Fragment 셰이더와 Vertex 셰이더 양쪽에서 공통으로 사용되는 함수와 각 셰이더 전용 변수를 빠르게 참조할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'glsl',
            code: `// ══════════════════════════════════════════
// 데이터 타입
// ══════════════════════════════════════════
// 스칼라:  float, int, bool
// 벡터:   vec2, vec3, vec4 (float)
//         ivec2, ivec3, ivec4 (int)
//         bvec2, bvec3, bvec4 (bool)
// 행렬:   mat2, mat3, mat4
// 텍스처: sampler2D, samplerCube

// ══════════════════════════════════════════
// 수식어 (Qualifier)
// ══════════════════════════════════════════
// attribute — 버텍스 셰이더 입력 (정점 데이터)
// uniform   — 모든 셰이더 공통 입력 (CPU에서 전달)
// varying   — 버텍스 → 프래그먼트 전달 (보간됨)
// const     — 컴파일 타임 상수
// precision — 정밀도 (lowp, mediump, highp)

// ══════════════════════════════════════════
// 내장 변수
// ══════════════════════════════════════════
// [Vertex Shader]
// gl_Position  — 출력: 정점 클립 좌표 (vec4, 필수)
// gl_PointSize — 출력: 점 크기 (float)
//
// [Fragment Shader]
// gl_FragCoord — 입력: 픽셀 윈도우 좌표 (vec4)
// gl_FragColor — 출력: 픽셀 최종 색상 (vec4)
// gl_FrontFacing — 입력: 앞면 여부 (bool)`,
          },
          {
            type: 'code',
            language: 'glsl',
            code: `// ══════════════════════════════════════════
// 수학 함수
// ══════════════════════════════════════════
// abs(x)            절대값
// sign(x)           부호 (-1, 0, 1)
// floor(x)          내림
// ceil(x)           올림
// fract(x)          소수 부분 (x - floor(x))
// mod(x, y)         나머지 (x - y * floor(x/y))
// min(x, y)         최솟값
// max(x, y)         최댓값
// clamp(x, a, b)    범위 제한 (a <= x <= b)
// mix(a, b, t)      선형 보간 (a*(1-t) + b*t)
// step(edge, x)     x >= edge ? 1.0 : 0.0
// smoothstep(a,b,x) a~b 구간 부드러운 전환

// ══════════════════════════════════════════
// 삼각/지수 함수
// ══════════════════════════════════════════
// sin(x), cos(x), tan(x)
// asin(x), acos(x), atan(y, x)
// pow(x, y)         거듭제곱
// exp(x), exp2(x)   지수 함수
// log(x), log2(x)   로그 함수
// sqrt(x)           제곱근
// inversesqrt(x)    역제곱근

// ══════════════════════════════════════════
// 벡터/기하 함수
// ══════════════════════════════════════════
// length(v)         벡터 길이
// distance(a, b)    두 점 거리
// dot(a, b)         내적
// cross(a, b)       외적 (vec3만)
// normalize(v)      단위 벡터
// reflect(I, N)     반사 벡터
// refract(I, N, r)  굴절 벡터

// ══════════════════════════════════════════
// 텍스처 함수
// ══════════════════════════════════════════
// texture2D(sampler, uv)     2D 텍스처 샘플링
// textureCube(sampler, dir)  큐브맵 샘플링`,
          },
          {
            type: 'list',
            items: [
              'float/vec/mat — 스칼라, 벡터(2~4D), 행렬(2x2~4x4)',
              'attribute/uniform/varying — 셰이더 간 데이터 전달 수식어',
              'mix, step, smoothstep — 색상/형태 블렌딩의 핵심 3 함수',
              'fract, mod — 반복 패턴 생성의 핵심',
              'length, distance, normalize — 기하 연산 함수',
              'reflect, refract — 반사/굴절 연산',
              'sin, cos, atan — 파동, 회전, 방사형 패턴에 필수',
              'texture2D — 텍스처 샘플링의 핵심 함수',
            ],
          },
          {
            type: 'tip',
            text: 'GLSL ES 1.0(WebGL 1)에서는 for 루프의 조건에 상수만 사용 가능하고, 배열 인덱스도 상수여야 합니다. WebGL 2(GLSL ES 3.0)에서는 이 제한이 완화되며, texture() 함수(texture2D 대체), in/out 키워드(attribute/varying 대체) 등 개선된 문법을 사용할 수 있습니다.',
          },
        ],
      },
    ],
  },

  // ─── 6. A-Frame WebVR/AR ─────────────────────────────────────────────
  {
    slug: 'aframe',
    title: 'A-Frame WebVR/AR',
    description: 'HTML로 만드는 3D/VR 환경',
    category: 'creative',
    color: 'bg-sky-600',
    difficulty: 'intermediate',
    objectives: [
      '엔티티-컴포넌트 시스템 이해',
      '3D 프리미티브와 씬 구성',
      '커스텀 컴포넌트와 시스템',
      '인터랙션, 컨트롤러, 에셋 관리',
      '실전 VR 갤러리와 API 레퍼런스',
    ],
    lessons: [
      {
        slug: 'aframe-basics',
        title: 'A-Frame 시작하기',
        duration: '15분',
        content: [
          {
            type: 'heading',
            text: 'A-Frame — HTML 태그로 3D/VR 만들기',
          },
          {
            type: 'text',
            text: 'A-Frame은 HTML 태그만으로 3D/VR 장면을 만들 수 있는 웹 프레임워크입니다. Three.js 위에 구축되어 있지만, JavaScript 없이 HTML 속성만으로 3D 씬을 구성할 수 있습니다. <a-scene>은 장면 전체를 감싸는 컨테이너이며, 그 안에 <a-box>, <a-sphere> 등 기본 도형 태그를 배치합니다. VR 헤드셋이 있으면 자동으로 VR 모드를 지원합니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
</head>
<body>
  <a-scene>
    <!-- 하늘 배경 -->
    <a-sky color="#1a1a2e"></a-sky>

    <!-- 바닥 평면 -->
    <a-plane
      position="0 0 -4"
      rotation="-90 0 0"
      width="10"
      height="10"
      color="#2c3e50"
    ></a-plane>

    <!-- 박스 (큐브) -->
    <a-box
      position="-1 0.5 -3"
      rotation="0 45 0"
      scale="1 1 1"
      color="#e74c3c"
    ></a-box>

    <!-- 구 -->
    <a-sphere
      position="0 1.25 -5"
      radius="1.25"
      color="#3498db"
    ></a-sphere>

    <!-- 원기둥 -->
    <a-cylinder
      position="1 0.75 -3"
      radius="0.5"
      height="1.5"
      color="#2ecc71"
    ></a-cylinder>
  </a-scene>
</body>
</html>`,
          },
          {
            type: 'list',
            items: [
              '<a-scene> — 3D 장면 전체를 감싸는 루트 태그',
              '<a-box> — 직육면체 (position, rotation, scale, color)',
              '<a-sphere> — 구 (radius로 크기 지정)',
              '<a-cylinder> — 원기둥 (radius, height)',
              '<a-plane> — 평면 (width, height, rotation으로 바닥/벽 생성)',
              '<a-sky> — 360도 배경 (color 또는 src로 이미지 지정)',
              'position="x y z" — 3D 공간에서의 위치',
              'rotation="x y z" — 각 축 기준 회전 (도)',
            ],
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- 다양한 기본 도형과 속성 -->
<a-scene background="color: #112233">
  <!-- 원환(도넛) -->
  <a-torus
    position="0 2 -5"
    color="#9b59b6"
    radius="1"
    radius-tubular="0.1"
  ></a-torus>

  <!-- 텍스트 -->
  <a-text
    value="Hello A-Frame!"
    position="0 3.5 -5"
    align="center"
    color="#ffffff"
    width="6"
  ></a-text>

  <!-- 이미지를 텍스처로 사용 -->
  <a-box
    position="3 1 -5"
    src="texture.jpg"
    width="2"
    height="2"
    depth="0.1"
  ></a-box>
</a-scene>`,
          },
          {
            type: 'tip',
            text: 'A-Frame은 WASD 키로 이동, 마우스 드래그로 시점 회전이 기본 내장되어 있습니다. VR 헤드셋이 연결되면 화면 오른쪽 하단의 VR 아이콘을 클릭해 몰입형 VR 모드로 전환됩니다.',
          },
        ],
      },
      {
        slug: 'components-entities',
        title: '컴포넌트와 엔티티',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'ECS(Entity-Component-System) 아키텍처',
          },
          {
            type: 'text',
            text: 'A-Frame은 ECS 아키텍처를 기반으로 합니다. Entity(<a-entity>)는 빈 컨테이너이고, Component는 기능(외형, 동작 등)을 부여하는 속성입니다. <a-box>는 사실 geometry="primitive: box"와 material 컴포넌트가 붙은 <a-entity>의 축약형입니다. 커스텀 컴포넌트를 만들면 원하는 기능을 자유롭게 추가할 수 있습니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- a-entity + 컴포넌트 조합 — a-box와 동일한 결과 -->
<a-entity
  geometry="primitive: box; width: 1; height: 1; depth: 1"
  material="color: #e74c3c; metalness: 0.5; roughness: 0.3"
  position="0 1 -3"
  rotation="0 45 0"
></a-entity>

<!-- 구 + 커스텀 재질 -->
<a-entity
  geometry="primitive: sphere; radius: 0.8; segmentsWidth: 64"
  material="color: #3498db; shader: standard; metalness: 0.8"
  position="-2 1 -4"
></a-entity>

<!-- 조명 컴포넌트 -->
<a-entity
  light="type: directional; color: #ffffff; intensity: 0.8"
  position="1 4 2"
></a-entity>

<a-entity
  light="type: point; color: #ff6600; intensity: 1; distance: 10"
  position="0 3 -3"
></a-entity>

<a-entity
  light="type: ambient; color: #404060; intensity: 0.4"
></a-entity>`,
          },
          {
            type: 'heading',
            text: '카메라, 커서, 커스텀 컴포넌트',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- 카메라와 커서 설정 -->
<a-entity
  camera
  look-controls
  wasd-controls="acceleration: 30"
  position="0 1.6 0"
>
  <!-- 시선 커서 (VR에서 응시로 선택) -->
  <a-entity
    cursor="fuse: true; fuseTimeout: 1500"
    position="0 0 -1"
    geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.025"
    material="color: white; shader: flat"
  ></a-entity>
</a-entity>`,
          },
          {
            type: 'code',
            language: 'javascript',
            code: `// ── 커스텀 컴포넌트 등록 ──
AFRAME.registerComponent('color-change', {
  // schema — 컴포넌트의 속성(파라미터) 정의
  schema: {
    baseColor: { type: 'color', default: '#3498db' },
    hoverColor: { type: 'color', default: '#e74c3c' },
  },

  // init — 컴포넌트 초기화 시 1회 실행
  init: function () {
    const el = this.el;
    const data = this.data;

    el.setAttribute('material', 'color', data.baseColor);

    el.addEventListener('mouseenter', () => {
      el.setAttribute('material', 'color', data.hoverColor);
    });

    el.addEventListener('mouseleave', () => {
      el.setAttribute('material', 'color', data.baseColor);
    });
  },

  // tick — 매 프레임 실행 (선택사항)
  tick: function (time, deltaTime) {
    // 매 프레임 실행할 로직
  },

  // remove — 컴포넌트 제거 시 정리
  remove: function () {
    // 이벤트 리스너 정리 등
  },
});

// HTML에서 사용:
// <a-box color-change="baseColor: #2ecc71; hoverColor: #f39c12"></a-box>`,
          },
          {
            type: 'list',
            items: [
              '<a-entity> — 빈 엔티티, 컴포넌트를 붙여 기능 부여',
              'geometry 컴포넌트 — 형태 정의 (primitive, width, height 등)',
              'material 컴포넌트 — 외형 정의 (color, metalness, roughness)',
              'light 컴포넌트 — 조명 (directional, point, ambient, spot)',
              'camera + look-controls + wasd-controls — 1인칭 카메라',
              'cursor — 마우스/시선 기반 선택 (fuse: VR 응시 선택)',
              'AFRAME.registerComponent — 커스텀 동작을 정의하는 핵심 API',
            ],
          },
          {
            type: 'tip',
            text: 'AFRAME.registerComponent의 schema에서 타입을 정의하면 HTML 속성 문자열이 자동으로 파싱됩니다. type: "vec3"이면 "1 2 3" 문자열이 {x:1, y:2, z:3} 객체로 변환됩니다. schema 없이도 컴포넌트를 만들 수 있지만, schema를 정의하면 재사용성과 가독성이 높아집니다.',
          },
        ],
      },
      {
        slug: 'animation-interaction',
        title: '애니메이션과 인터랙션',
        duration: '20분',
        content: [
          {
            type: 'heading',
            text: 'A-Frame 애니메이션 시스템',
          },
          {
            type: 'text',
            text: 'A-Frame의 animation 속성을 사용하면 JavaScript 없이 HTML만으로 애니메이션을 만들 수 있습니다. property(변경할 속성), to(목표 값), dur(시간), loop(반복), easing(가감속) 등을 지정합니다. 여러 animation 속성을 동시에 적용하면 복합 애니메이션이 가능합니다. 이벤트와 결합하면 클릭이나 시선에 반응하는 인터랙티브 VR 경험을 만들 수 있습니다.',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- 기본 애니메이션: 회전 -->
<a-box
  position="0 1 -3"
  color="#e74c3c"
  animation="
    property: rotation;
    to: 0 360 0;
    dur: 3000;
    loop: true;
    easing: linear;
  "
></a-box>

<!-- 위아래 부유 + 회전 — 여러 애니메이션 동시 적용 -->
<a-sphere
  position="2 1.5 -4"
  color="#3498db"
  animation__rotate="
    property: rotation;
    to: 360 360 0;
    dur: 5000;
    loop: true;
    easing: linear;
  "
  animation__float="
    property: position;
    to: 2 2.5 -4;
    dur: 2000;
    dir: alternate;
    loop: true;
    easing: easeInOutSine;
  "
></a-sphere>

<!-- 크기 변화 (펄스) -->
<a-cylinder
  position="-2 0.75 -3"
  color="#2ecc71"
  animation="
    property: scale;
    to: 1.3 1.3 1.3;
    dur: 1000;
    dir: alternate;
    loop: true;
    easing: easeInOutQuad;
  "
></a-cylinder>`,
          },
          {
            type: 'heading',
            text: '이벤트 기반 인터랙션',
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- 클릭 시 색상 변경 애니메이션 -->
<a-box
  position="0 1 -3"
  color="#e74c3c"
  class="clickable"
  animation__click="
    property: material.color;
    to: #f39c12;
    dur: 300;
    startEvents: click;
  "
  animation__scale="
    property: scale;
    to: 1.5 1.5 1.5;
    dur: 300;
    startEvents: click;
    dir: alternate;
  "
></a-box>

<!-- 마우스 오버 시 커지기 -->
<a-sphere
  position="2 1 -4"
  color="#3498db"
  class="clickable"
  animation__mouseenter="
    property: scale;
    to: 1.3 1.3 1.3;
    dur: 200;
    startEvents: mouseenter;
    easing: easeOutElastic;
  "
  animation__mouseleave="
    property: scale;
    to: 1 1 1;
    dur: 200;
    startEvents: mouseleave;
  "
></a-sphere>

<!-- 카메라 + 커서 (레이캐스터) 설정 -->
<a-entity camera look-controls position="0 1.6 0">
  <a-entity
    cursor="rayOrigin: mouse"
    raycaster="objects: .clickable"
  ></a-entity>
</a-entity>`,
          },
          {
            type: 'code',
            language: 'html',
            code: `<!-- VR 시선(Gaze) 기반 인터랙션 -->
<a-scene>
  <!-- 시선 커서 — 1.5초 동안 응시하면 클릭 -->
  <a-entity camera look-controls position="0 1.6 0">
    <a-entity
      cursor="fuse: true; fuseTimeout: 1500"
      raycaster="objects: .interactive"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
      material="color: #ffffff; shader: flat"
      animation__fusing="
        property: scale;
        to: 0.5 0.5 0.5;
        dur: 1500;
        startEvents: fusing;
      "
      animation__reset="
        property: scale;
        to: 1 1 1;
        dur: 200;
        startEvents: mouseleave;
      "
    ></a-entity>
  </a-entity>

  <!-- 인터랙티브 객체 -->
  <a-box
    class="interactive"
    position="0 1 -3"
    color="#e74c3c"
    animation__click="
      property: rotation;
      to: 0 360 0;
      dur: 1000;
      startEvents: click;
    "
  ></a-box>
</a-scene>`,
          },
          {
            type: 'list',
            items: [
              'animation 속성 — property, to, dur, loop, easing으로 구성',
              'animation__이름 — 접미사를 붙여 여러 애니메이션 동시 적용',
              'startEvents — 특정 이벤트 발생 시 애니메이션 시작 (click, mouseenter 등)',
              'dir: alternate — 정방향/역방향 번갈아 재생 (핑퐁)',
              'easing — linear, easeInOutSine, easeOutElastic 등 가감속 곡선',
              'cursor + raycaster — 마우스/시선으로 3D 객체 선택',
              'fuse: true — VR에서 일정 시간 응시하면 클릭으로 처리',
              'raycaster objects — CSS 선택자로 상호작용 대상 지정',
            ],
          },
          {
            type: 'tip',
            text: 'raycaster의 objects 속성에 CSS 선택자(.clickable 등)를 지정하면 해당 클래스를 가진 엔티티만 클릭/호버 이벤트를 받습니다. 모든 객체에 레이캐스팅하면 성능이 저하되므로, 반드시 상호작용할 객체만 대상으로 지정하세요.',
          },
        ],
      },
    ],
  },
];
