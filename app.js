"use strict";

const SUBJECTS = [
  {
    id: "design", name: "산업디자인 일반", short: "디자인 일반", emoji: "🎨", color: "#635bff",
    sections: [
      { id: "conditions", title: "디자인의 기본 조건", summary: "목적·미·경제·차별·질서", facts: [
        ["합목적성", "목적과 기능에 맞아야 한다."],
        ["심미성", "보기 좋고 아름다워야 한다."],
        ["경제성", "비용과 생산성이 좋아야 한다."],
        ["독창성", "새롭고 차별화되어야 한다."],
        ["질서성", "조화롭고 정돈되어야 한다."]
      ]},
      { id: "elements", title: "디자인 요소", summary: "점·선·면·형태·색채·질감·공간·명암", facts: [
        ["점", "시선을 집중시키고 위치를 표시한다."],
        ["선", "방향, 움직임, 속도감을 나타낸다."],
        ["면", "넓이와 공간감을 나타낸다."],
        ["형태", "사물의 외형과 구조를 나타낸다."],
        ["색채", "감정과 분위기를 전달한다."],
        ["질감", "재료가 주는 표면의 느낌이다."],
        ["공간", "여백과 깊이감을 만든다."],
        ["명암", "입체감을 만들고 특정 부분을 강조한다."]
      ]},
      { id: "principles", title: "디자인 원리", summary: "통일·변화·균형·비례·강조·리듬·조화·대비·점이", facts: [
        ["통일", "전체가 하나처럼 보이게 하는 원리이다."],
        ["변화", "단조로움을 막고 다양성을 주는 원리이다."],
        ["균형", "시각적인 안정감을 주는 원리이다."],
        ["비례", "부분과 전체 사이의 크기 관계이다."],
        ["강조", "중요한 부분을 눈에 띄게 하는 원리이다."],
        ["리듬", "반복을 통해 움직임을 느끼게 하는 원리이다."],
        ["조화", "여러 요소가 서로 어울리는 상태이다."],
        ["대비", "서로 다른 요소를 비교시켜 강조하는 원리이다."],
        ["점이", "크기·색·형태 등이 점진적으로 변하는 원리로, 그라데이션과 비슷하다."]
      ]},
      { id: "classification", title: "디자인 분류", summary: "시각·제품·환경·공예·디지털", facts: [
        ["시각디자인", "포스터, 광고, 편집, 포장, CI, BI, 로고, 픽토그램 분야이다."],
        ["제품디자인", "가전, 가구, 생활용품을 설계하는 분야이다."],
        ["환경디자인", "실내, 전시, 도시, 조경을 다루는 분야이다."],
        ["공예디자인", "도자기, 금속, 섬유를 다루는 분야이다."],
        ["디지털디자인", "웹, 앱, UI, 영상, 모션그래픽을 다루는 분야이다."]
      ]},
      { id: "history", title: "디자인사 빈출", summary: "운동·양식과 대표 특징 연결", facts: [
        ["미술공예운동", "윌리엄 모리스가 대표적이며 수공예의 회복을 추구했다."],
        ["아르누보", "식물에서 가져온 유기적 곡선과 장식성이 특징이다."],
        ["아르데코", "기하학적·직선적 형태와 화려한 장식성이 특징이다."],
        ["바우하우스", "기능주의를 바탕으로 예술과 기술의 통합을 추구했다."],
        ["데 스틸", "몬드리안, 수직·수평선, 삼원색이 핵심이다."],
        ["구성주의", "기하학적 구성과 사회적 목적을 중시했다."],
        ["모더니즘", "기능, 합리성, 단순함을 중시했다."],
        ["포스트모더니즘", "다양성, 장식, 여러 양식의 혼합을 중시했다."],
        ["팝아트", "대중문화, 광고, 만화 이미지를 예술에 활용했다."],
        ["옵아트", "착시를 이용해 시각적인 움직임을 만든다."]
      ]},
      { id: "marketing", title: "마케팅 빈출", summary: "4P·CI·BI·USP·브레인스토밍", facts: [
        ["4P", "Product 제품, Price 가격, Place 유통, Promotion 촉진이다."],
        ["CI", "기업 이미지와 정체성을 통합하는 작업이다."],
        ["BI", "브랜드 이미지와 정체성을 통합하는 작업이다."],
        ["USP", "제품만의 독특하고 차별적인 판매 포인트이다."],
        ["브레인스토밍", "비판 금지, 자유로운 발상, 양 중시, 결합과 개선이 원칙이다."]
      ]}
    ]
  },
  {
    id: "color", name: "색채 및 도법", short: "색채·도법", emoji: "🌈", color: "#ff7c6c",
    sections: [
      { id: "attributes", title: "색의 3속성", summary: "색상·명도·채도", facts: [
        ["색상", "빨강, 파랑처럼 색의 종류를 구별하는 속성이다."],
        ["명도", "색이 밝고 어두운 정도를 나타내는 속성이다."],
        ["채도", "색이 선명하고 탁한 정도를 나타내는 속성이다."]
      ]},
      { id: "chromatic", title: "유채색과 무채색", summary: "무채색에는 명도만 존재", facts: [
        ["유채색", "빨강·파랑·노랑처럼 색상을 가진 색으로 색상, 명도, 채도가 있다."],
        ["무채색", "흰색·검정·회색처럼 색상이 없으며 명도만 있다."]
      ]},
      { id: "mixing", title: "색 혼합", summary: "RGB 가산 / CMYK 감산", facts: [
        ["RGB", "빛의 3원색을 쓰는 가산혼합이다. 섞을수록 밝아지고 모두 섞으면 흰색이며 화면용이다."],
        ["CMYK", "색료의 3원색과 먹을 쓰는 감산혼합이다. 섞을수록 어두워지며 인쇄용이다."]
      ]},
      { id: "wheel", title: "색상환 기본", summary: "1·2차색, 보색, 유사색, 난색·한색", facts: [
        ["1차색", "빨강, 노랑, 파랑이다."],
        ["2차색", "주황, 초록, 보라이다."],
        ["보색", "색상환에서 서로 반대편에 놓인 색의 관계이다."],
        ["유사색", "색상환에서 서로 가까이 놓인 색의 관계이다."],
        ["난색", "빨강·주황·노랑 계열로 따뜻하며 진출하고 팽창해 보인다."],
        ["한색", "파랑·청록 계열로 차가우며 후퇴하고 수축해 보인다."]
      ]},
      { id: "contrast", title: "색채 대비", summary: "색상·명도·채도·보색·면적·동시·계시·연변", facts: [
        ["색상대비", "색상의 차이 때문에 색이 더 강하게 느껴지는 현상이다."],
        ["명도대비", "밝고 어두운 차이가 서로를 더 뚜렷하게 만드는 현상이다."],
        ["채도대비", "선명한 색과 탁한 색의 차이가 강조되는 현상이다."],
        ["보색대비", "색상환의 반대색끼리 만나 강렬하게 보이는 현상이다."],
        ["면적대비", "색이 차지하는 면적이 클수록 그 색의 영향도 커지는 현상이다."],
        ["동시대비", "주변색의 영향 때문에 같은 색도 다르게 보이는 현상이다."],
        ["계시대비", "먼저 본 색의 영향이 잔상으로 남아 다음 색에 영향을 주는 현상이다."],
        ["연변대비", "서로 맞닿은 색의 경계 부분에서 대비가 더 강해 보이는 현상이다."]
      ]},
      { id: "systems", title: "표색계", summary: "먼셀·오스트발트·CIE·Lab", facts: [
        ["먼셀", "색상 H, 명도 V, 채도 C로 표시하며 표기는 H V/C이다."],
        ["오스트발트", "순색, 흰색, 검정의 혼합 비율로 색을 표시한다."],
        ["CIE", "국제조명위원회가 색을 과학적으로 표시하기 위해 만든 체계이다."],
        ["Lab", "장치에 독립적인 색공간이며 L은 밝기를 나타낸다."]
      ]},
      { id: "projection", title: "도법 핵심", summary: "정투상·등각·사투상·1·2·3점 투시", facts: [
        ["정투상도", "정면도, 평면도, 측면도로 물체를 정확하게 나타낸다."],
        ["등각투상도", "세 축의 각도가 같도록 하여 입체를 표현한다."],
        ["사투상도", "정면은 실제 모양으로 그리고 깊이를 비스듬히 표현한다."],
        ["투시도", "소실점을 이용해 원근감을 표현한다."],
        ["1점 투시", "정면을 바라보는 공간 표현에 적합하며 소실점이 1개이다."],
        ["2점 투시", "물체의 모서리를 중심으로 보며 소실점이 2개이다."],
        ["3점 투시", "고층 건물처럼 위아래 방향까지 왜곡하며 소실점이 3개이다."]
      ]},
      { id: "lines", title: "제도 선", summary: "외형·치수·중심·숨은·절단선", facts: [
        ["외형선", "물체의 보이는 윤곽을 굵은 실선으로 나타낸다."],
        ["치수선", "치수를 나타내는 가는 실선이다."],
        ["중심선", "물체의 중심을 나타내는 가는 1점 쇄선이다."],
        ["숨은선", "보이지 않는 부분을 나타내는 파선이다."],
        ["절단선", "절단 위치를 나타내는 굵은 1점 쇄선이다."]
      ]}
    ]
  },
  {
    id: "material", name: "디자인 재료", short: "디자인 재료", emoji: "🧱", color: "#e6a524",
    sections: [
      { id: "paper", title: "종이 기본", summary: "평량·판형과 종이 종류", facts: [
        ["평량", "종이의 무게와 두께를 g/㎡ 단위로 나타낸다."],
        ["A판", "A0를 반으로 자를 때마다 A1, A2, A3, A4가 된다."],
        ["A4", "크기는 210×297mm이다."],
        ["모조지", "일반 책과 복사용지에 많이 쓰이는 종이이다."],
        ["아트지", "광택이 있고 사진이나 카탈로그 인쇄에 적합하다."],
        ["스노우지", "은은한 무광 표면으로 고급 인쇄물에 적합하다."],
        ["크라프트지", "갈색을 띠며 포장지에 많이 쓰인다."],
        ["트레이싱지", "비쳐 보이는 반투명 종이이다."]
      ]},
      { id: "printing", title: "인쇄 방식", summary: "평판·오목판·볼록판·공판·디지털", facts: [
        ["오프셋 인쇄", "평판 인쇄 방식으로 일반 상업 인쇄와 대량 인쇄에 널리 쓰인다."],
        ["그라비어 인쇄", "오목판 인쇄 방식으로 고품질 사진과 대량 포장재에 적합하다."],
        ["플렉소 인쇄", "볼록판 인쇄 방식으로 포장지, 비닐, 골판지에 적합하다."],
        ["스크린 인쇄", "공판 인쇄 방식으로 천, 간판, 여러 특수재료에 인쇄할 수 있다."],
        ["디지털 인쇄", "소량을 빠르게 제작할 수 있고 가변 데이터 인쇄가 가능하다."]
      ]},
      { id: "prepress", title: "제판·인쇄 용어", summary: "망점·선수·트래핑·도련", facts: [
        ["망점", "연속적인 이미지를 크기가 다른 점으로 표현한다."],
        ["선수(lpi)", "인쇄에서 망점이 얼마나 촘촘한지를 나타내는 밀도 단위이다."],
        ["트래핑", "인쇄 정합 오차로 흰 틈이 생기지 않도록 색을 살짝 겹치는 처리이다."],
        ["오버프린트", "한 색 위에 다른 색을 겹쳐 인쇄하는 설정이다."],
        ["별색", "CMYK 조합이 아니라 별도로 지정한 잉크 색이다."],
        ["교정", "본 인쇄 전에 색상과 내용의 오류를 확인하는 과정이다."],
        ["재단선", "인쇄물이 실제로 잘려 나가는 위치를 표시한 선이다."],
        ["도련", "재단 오차로 흰 테두리가 생기지 않도록 바깥까지 늘린 여분 영역이다."]
      ]},
      { id: "finishing", title: "후가공", summary: "코팅·박·형압·도무송·제본", facts: [
        ["코팅", "표면을 보호하고 광택 또는 무광 효과를 준다."],
        ["라미네이팅", "인쇄물 표면에 필름을 씌워 보호한다."],
        ["박", "금박이나 은박 같은 금속성 장식을 입힌다."],
        ["형압", "종이를 눌러 오목하거나 볼록한 입체감을 만든다."],
        ["도무송·톰슨", "칼날 모양대로 인쇄물을 원하는 형태로 따낸다."],
        ["접지", "인쇄물을 용도에 맞게 접는 가공이다."],
        ["중철제본", "책의 가운데를 스테이플러로 철하는 제본이다."],
        ["무선제본", "책등을 풀로 붙이는 제본이다."],
        ["양장제본", "단단한 하드커버를 사용하는 제본이다."]
      ]},
      { id: "properties", title: "재료 성질", summary: "물·열·빛·마찰·흡수·투명", facts: [
        ["내수성", "물이 닿아도 성질이 잘 변하지 않는 정도이다."],
        ["내열성", "높은 열에도 견디는 정도이다."],
        ["내광성", "빛을 받아도 변색이 적은 정도이다."],
        ["내마모성", "마찰이나 닳음에 견디는 정도이다."],
        ["흡수성", "잉크나 물을 흡수하는 정도이다."],
        ["투명성", "빛이 재료를 통과하는 정도이다."]
      ]}
    ]
  },
  {
    id: "graphics", name: "컴퓨터그래픽스", short: "컴퓨터그래픽스", emoji: "💻", color: "#21b5aa",
    sections: [
      { id: "rastervector", title: "비트맵 vs 벡터", summary: "사진은 비트맵, 로고는 벡터", facts: [
        ["비트맵", "픽셀 기반으로 사진에 적합하지만 확대하면 깨진다."],
        ["벡터", "수학적인 선과 면 기반으로 로고·아이콘에 적합하며 확대해도 선명하다."],
        ["포토샵", "비트맵 이미지 편집이 중심인 프로그램이다."],
        ["일러스트레이터", "벡터 그래픽 제작이 중심인 프로그램이다."],
        ["인디자인", "편집과 페이지 레이아웃이 중심인 프로그램이다."]
      ]},
      { id: "resolution", title: "해상도", summary: "픽셀·ppi·dpi·lpi", facts: [
        ["픽셀", "디지털 이미지를 구성하는 최소 단위이다."],
        ["ppi", "화면 이미지에서 1인치당 픽셀 수를 나타낸다."],
        ["dpi", "프린터 출력에서 1인치당 도트 수를 나타낸다."],
        ["lpi", "인쇄에서 1인치당 망점선 수를 나타낸다."],
        ["고해상도", "이미지가 선명해지지만 파일 용량도 커진다."],
        ["매체별 색상", "웹과 화면은 RGB, 인쇄는 CMYK를 기본으로 생각한다."]
      ]},
      { id: "bitdepth", title: "비트 깊이", summary: "1·8·24·32비트", facts: [
        ["1bit", "2가지 색을 표현할 수 있다."],
        ["8bit", "256가지 색을 표현할 수 있다."],
        ["24bit", "약 1,677만 색을 표현하는 True Color이다."],
        ["32bit", "24bit 색상 정보에 8bit 알파 채널이 더해진다."]
      ]},
      { id: "formats", title: "파일 형식", summary: "PSD·AI·JPG·PNG·GIF·TIFF·PDF·SVG", facts: [
        ["PSD", "포토샵 원본 형식으로 레이어를 보존한다."],
        ["AI", "일러스트레이터 원본 형식으로 벡터 작업에 적합하다."],
        ["INDD", "인디자인의 편집·레이아웃 원본 형식이다."],
        ["JPEG·JPG", "사진에 적합한 손실 압축 형식이며 투명 배경을 지원하지 않는다."],
        ["PNG", "무손실 압축을 사용하며 투명 배경을 지원한다."],
        ["GIF", "256색을 지원하며 간단한 애니메이션이 가능하다."],
        ["TIFF", "고품질 인쇄 이미지에 많이 쓰이는 형식이다."],
        ["EPS", "인쇄와 벡터 데이터 교환에 쓰이는 형식이다."],
        ["PDF", "문서 공유와 인쇄 출력에 널리 쓰이는 형식이다."],
        ["SVG", "확대해도 선명한 웹용 벡터 형식이다."],
        ["RAW", "카메라 센서가 기록한 가공 전 원본 데이터 형식이다."]
      ]},
      { id: "compression", title: "압축", summary: "손실·무손실·RLE·LZW", facts: [
        ["손실 압축", "파일을 줄이는 과정에서 품질 일부가 손상되며 JPEG가 대표적이다."],
        ["무손실 압축", "원본 품질을 유지하며 PNG, 일부 TIFF, ZIP이 대표적이다."],
        ["RLE", "같은 값이 반복되는 데이터를 묶어 저장하는 압축 방식이다."],
        ["LZW", "반복되는 문자열을 사전으로 치환하는 무손실 압축 방식이다."]
      ]},
      { id: "terms", title: "그래픽 기본 용어", summary: "계단·디더링·모아레·하프톤·마스크", facts: [
        ["안티앨리어싱", "이미지 가장자리의 계단 현상을 부드럽게 완화한다."],
        ["앨리어싱", "낮은 해상도 등으로 가장자리가 계단처럼 보이는 현상이다."],
        ["디더링", "제한된 색의 점 패턴으로 없는 중간색이 있는 것처럼 표현한다."],
        ["모아레", "망점이나 반복 패턴의 간섭으로 생기는 물결무늬이다."],
        ["하프톤", "연속톤 이미지를 크기가 다른 망점으로 표현하는 방식이다."],
        ["알파채널", "이미지의 투명도 정보를 저장하는 채널이다."],
        ["레이어", "이미지 요소를 독립적으로 편집할 수 있는 작업 층이다."],
        ["마스크", "이미지의 특정 부분만 보이거나 숨기도록 조절한다."],
        ["클리핑마스크", "아래쪽 오브젝트의 모양 안에 위쪽 이미지를 표시한다."],
        ["블렌딩모드", "위아래 레이어의 색을 계산해 합성하는 방식이다."]
      ]},
      { id: "modes", title: "색상 모드", summary: "RGB·CMYK·Grayscale·Bitmap·Indexed·Lab", facts: [
        ["RGB 모드", "빛의 가산혼합을 사용하는 화면용 색상 모드이다."],
        ["CMYK 모드", "잉크의 감산혼합을 사용하는 인쇄용 색상 모드이다."],
        ["Grayscale", "검정부터 흰색까지 회색조로 표현하는 모드이다."],
        ["Bitmap 모드", "검정과 흰색 두 가지 값만 사용하는 모드이다."],
        ["Indexed Color", "정해진 수의 제한된 색상 팔레트를 사용하는 모드이다."],
        ["Lab 모드", "장치에 독립적인 색상 체계로 L은 밝기를 뜻한다."]
      ]},
      { id: "devices", title: "컴퓨터 장치", summary: "연산·그래픽·메모리·저장·입출력", facts: [
        ["CPU", "컴퓨터의 명령과 일반 연산을 처리한다."],
        ["GPU", "그래픽과 대규모 병렬 연산을 처리한다."],
        ["RAM", "작업 중인 데이터가 잠시 머무는 임시 메모리이다."],
        ["SSD·HDD", "프로그램과 파일을 오래 보관하는 저장장치이다."],
        ["스캐너", "종이의 문자와 이미지를 디지털화하는 입력장치이다."],
        ["프린터", "디지털 자료를 종이에 인쇄하는 출력장치이다."],
        ["태블릿", "펜의 움직임과 압력을 입력하는 입력장치이다."],
        ["모니터", "컴퓨터의 영상 정보를 보여 주는 출력장치이다."]
      ]}
    ]
  }
];

const FINAL_LINES = [
  "RGB는 빛, CMYK는 인쇄", "RGB는 섞을수록 밝고, CMYK는 섞을수록 어둡다",
  "비트맵은 사진, 벡터는 로고", "JPEG는 손실 압축, PNG는 투명 배경 가능",
  "GIF는 256색과 애니메이션", "TIFF는 고품질 인쇄",
  "PSD·AI·INDD는 원본 파일", "해상도가 높으면 선명하지만 용량 증가",
  "1bit 2색, 8bit 256색, 24bit True Color", "안티앨리어싱은 계단 현상 완화",
  "모아레는 망점·패턴 간섭", "먼셀은 H V/C",
  "색의 3속성은 색상·명도·채도", "무채색은 명도만 있다",
  "보색은 색상환 반대색", "난색은 진출·팽창, 한색은 후퇴·수축",
  "오프셋은 평판 인쇄", "그라비어는 오목판, 고품질 대량",
  "플렉소는 볼록판, 포장재", "스크린은 공판, 천·간판",
  "중철은 스테이플러, 무선은 풀 제본", "도련은 재단 여유",
  "트래핑은 인쇄 오차 보정", "외형선은 굵은 실선",
  "숨은선은 파선", "중심선은 가는 1점 쇄선",
  "1점·2점·3점 투시는 소실점도 각각 1·2·3개", "3점 투시는 위아래 방향까지 표현",
  "바우하우스는 기능주의", "아르누보는 곡선·식물",
  "아르데코는 기하학·직선·장식", "데 스틸은 몬드리안·수직수평·삼원색",
  "미술공예운동은 윌리엄 모리스", "CI는 기업 이미지, BI는 브랜드 이미지",
  "4P는 제품·가격·유통·촉진", "디자인 조건은 합목적성·심미성·경제성·독창성·질서성"
];

const ALL_FACTS = [];
SUBJECTS.forEach(subject => subject.sections.forEach(section => section.facts.forEach((fact, index) => {
  ALL_FACTS.push({
    id: `${subject.id}-${section.id}-${index}`,
    subjectId: subject.id,
    subject: subject.name,
    subjectShort: subject.short,
    sectionId: section.id,
    section: section.title,
    term: fact[0],
    desc: fact[1]
  });
})));

const STORAGE_KEY = "pixel-pass-state-v1";
const defaultState = {
  mastered: [], ratings: {}, wrong: [], answered: 0, correct: 0,
  sessions: 0, quizHistory: [], activeDays: [], lastRoute: "home"
};

let state = loadState();
let currentRoute = state.lastRoute || "home";
let noteFilter = "all";
let noteSearch = "";
let cardFilter = "all";
let cardQueue = [];
let cardIndex = 0;
let quiz = null;
let timerId = null;

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch (_) { return { ...defaultState }; }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateGlobalUI();
}

function todayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function recordToday() {
  const today = todayKey();
  if (!state.activeDays.includes(today)) {
    state.activeDays.push(today);
    state.activeDays = state.activeDays.slice(-120);
    saveState();
  }
}

function getStreak() {
  const days = new Set(state.activeDays);
  let streak = 0;
  const cursor = new Date();
  if (!days.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(todayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return Math.max(streak, 1);
}

function getMasteredSet() { return new Set(state.mastered); }
function overallProgress() { return Math.round((state.mastered.length / ALL_FACTS.length) * 100) || 0; }
function subjectProgress(id) {
  const facts = ALL_FACTS.filter(f => f.subjectId === id);
  const mastered = getMasteredSet();
  return Math.round((facts.filter(f => mastered.has(f.id)).length / facts.length) * 100) || 0;
}
function accuracy() { return state.answered ? Math.round((state.correct / state.answered) * 100) : 0; }
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[c]));
}
function formatDate() {
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(new Date());
}
function levelText(pct) {
  if (pct >= 85) return "합격 준비 완료";
  if (pct >= 60) return "합격권 진입";
  if (pct >= 30) return "개념 연결 중";
  if (pct > 0) return "첫 회독 진행";
  return "첫 회독 시작";
}

function updateGlobalUI() {
  const pct = overallProgress();
  document.getElementById("side-progress").textContent = `${pct}%`;
  document.getElementById("side-ring").style.setProperty("--pct", pct);
  document.getElementById("side-level").textContent = levelText(pct);
  document.getElementById("wrong-badge").textContent = state.wrong.length;
  const due = ALL_FACTS.filter(f => state.ratings[f.id] !== "easy").length;
  document.getElementById("due-badge").textContent = due;
  document.getElementById("streak-count").textContent = getStreak();
}

function setActiveNav(route) {
  document.querySelectorAll("[data-route]").forEach(button => {
    button.classList.toggle("active", button.dataset.route === route && (button.closest("nav") || button.classList.contains("nav-item")));
  });
}

function navigate(route) {
  if (timerId) { clearInterval(timerId); timerId = null; }
  currentRoute = route;
  state.lastRoute = route;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  setActiveNav(route);
  window.scrollTo(0, 0);
  const app = document.getElementById("app");
  if (route === "home") renderHome(app);
  else if (route === "notes") renderNotes(app);
  else if (route === "cards") renderCards(app);
  else if (route === "quiz") renderQuizModes(app);
  else if (route === "wrong") renderWrong(app);
  app.focus({ preventScroll: true });
}

function pageHead(kicker, title, subtitle) {
  return `<div class="page-head"><div><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${subtitle}</p></div><span class="date-chip">${formatDate()}</span></div>`;
}

function renderHome(app) {
  const pct = overallProgress();
  const learned = Object.keys(state.ratings).length;
  const roadmapDone = Math.min(5, Math.floor((learned + state.answered) / 35));
  const focusTitle = state.wrong.length ? `오답 ${state.wrong.length}개부터<br>기억을 다시 연결해요` : "15분이면 충분해요.<br>핵심 12개만 꺼내볼까요?";
  app.innerHTML = `
    ${pageHead("TODAY'S MISSION", "오늘도 합격에 가까워져요", "짧게 자주, 읽기보다 먼저 떠올리기 — 그게 가장 빠른 길입니다.")}
    <section class="home-grid">
      <article class="hero-card">
        <span class="hero-kicker">⚡ 오늘의 15분 루틴</span>
        <h2>${focusTitle}</h2>
        <p>잘 외워지는 것은 넘기고, 막히는 개념은 더 자주 보여드릴게요. 틀려도 괜찮아요. 지금 틀리는 게 시험장에서 맞히는 방법입니다.</p>
        <div class="hero-actions">
          <button class="primary-btn" data-action="focus">집중 학습 시작 →</button>
          <button class="ghost-btn" data-route="notes">노트 먼저 보기</button>
          <span class="hero-time">카드 12개 + 미니퀴즈 5개</span>
        </div>
      </article>
      <article class="card mastery-card">
        <div class="card-label"><h3>나의 합격 숙련도</h3><span>${levelText(pct)}</span></div>
        <div class="big-ring" style="--pct:${pct}"><div class="ring-copy"><strong>${pct}%</strong><small>${state.mastered.length} / ${ALL_FACTS.length} 개념</small></div></div>
        <div class="subject-bars">
          ${SUBJECTS.map(s => { const p = subjectProgress(s.id); return `<div class="bar-row"><b>${s.emoji} ${s.short}</b><div class="bar"><i style="width:${p}%;background:${s.color}"></i></div><span>${p}%</span></div>`; }).join("")}
        </div>
      </article>
      <div class="stat-grid">
        <article class="card stat-card"><span class="stat-icon">◇</span><div class="stat-copy"><small>학습한 카드</small><strong>${learned}</strong></div></article>
        <article class="card stat-card"><span class="stat-icon">✓</span><div class="stat-copy"><small>누적 정답률</small><strong>${accuracy()}%</strong></div></article>
        <article class="card stat-card"><span class="stat-icon">🔥</span><div class="stat-copy"><small>연속 학습</small><strong>${getStreak()}일</strong></div></article>
        <article class="card stat-card"><span class="stat-icon">↺</span><div class="stat-copy"><small>남은 오답</small><strong>${state.wrong.length}</strong></div></article>
      </div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><h2>5단계 합격 루트</h2><p>외운다는 느낌보다, 정답을 꺼내는 연습에 집중하세요.</p></div><button class="text-button" data-route="quiz">CBT 바로 풀기 →</button></div>
      <div class="roadmap">
        ${[
          ["암기노트 2회", "전체 지도를 빠르게 익히기"], ["빠른 퀴즈", "10문항으로 빈틈 발견"],
          ["오답만 반복", "틀린 이유를 한 문장으로"], ["빈출 재암기", "색채·파일·인쇄·디자인사"],
          ["직전 문장", "시험 전에는 36문장만"]
        ].map((r,i) => `<article class="card road-step ${i < roadmapDone ? "done" : i === roadmapDone ? "current" : ""}" data-step="${i+1}"><span class="day">STEP 0${i+1}</span><h3>${r[0]}</h3><p>${r[1]}</p></article>`).join("")}
      </div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><h2>시험 전략</h2><p>100점이 아니라 65~75점 안정권을 노립니다.</p></div></div>
      <div class="final-lines">
        ${[
          "60문제 중 36개만 맞으면 합격", "모르는 문제는 붙잡지 말고 아는 문제부터",
          "디자인 일반·색채·컴퓨터그래픽스에서 점수 확보", "디자인 재료는 용어 연결 위주로 암기"
        ].map((line,i) => `<div class="final-line"><i>${i+1}</i><span>${line}</span></div>`).join("")}
      </div>
    </section>`;

  app.querySelector("[data-action='focus']").addEventListener("click", () => {
    cardFilter = "focus";
    navigate("cards");
  });
}

function renderNotes(app) {
  app.innerHTML = `
    ${pageHead("CORE NOTES", "핵심노트", "필요한 개념을 찾고, 이해한 항목은 ‘외웠어요’로 표시하세요.")}
    <div class="note-overview">
      ${SUBJECTS.map(s => `<button class="card subject-tile" data-subject-jump="${s.id}"><span class="subject-emoji">${s.emoji}</span><span class="tile-pct">${subjectProgress(s.id)}%</span><h3>${s.name}</h3><p>${ALL_FACTS.filter(f=>f.subjectId===s.id).length}개 핵심 개념</p></button>`).join("")}
    </div>
    <div class="filter-row">
      <button class="filter-chip ${noteFilter === "all" ? "active" : ""}" data-note-filter="all">전체</button>
      ${SUBJECTS.map(s => `<button class="filter-chip ${noteFilter === s.id ? "active" : ""}" data-note-filter="${s.id}">${s.emoji} ${s.short}</button>`).join("")}
      <label class="search-box"><input id="note-search" type="search" placeholder="용어 검색" value="${escapeHtml(noteSearch)}" aria-label="노트 검색"></label>
    </div>
    <div id="notes-list" class="notes-list"></div>
    <section class="section-block">
      <div class="section-title"><div><h2>🔥 시험 직전 암기 문장</h2><p>마지막 회독에서는 이 문장만 소리 내어 읽으세요.</p></div></div>
      <div class="final-lines">${FINAL_LINES.map((line,i) => `<div class="final-line"><i>✓</i><span>${line}</span></div>`).join("")}</div>
    </section>`;
  drawNoteList();
  app.querySelectorAll("[data-note-filter]").forEach(b => b.addEventListener("click", () => { noteFilter = b.dataset.noteFilter; renderNotes(app); }));
  app.querySelectorAll("[data-subject-jump]").forEach(b => b.addEventListener("click", () => { noteFilter = b.dataset.subjectJump; renderNotes(app); }));
  app.querySelector("#note-search").addEventListener("input", e => { noteSearch = e.target.value; drawNoteList(); });
}

function drawNoteList() {
  const list = document.getElementById("notes-list");
  if (!list) return;
  const mastered = getMasteredSet();
  const query = noteSearch.trim().toLowerCase();
  const sections = [];
  SUBJECTS.filter(s => noteFilter === "all" || s.id === noteFilter).forEach(subject => {
    subject.sections.forEach(section => {
      const facts = ALL_FACTS.filter(f => f.subjectId === subject.id && f.sectionId === section.id)
        .filter(f => !query || `${f.term} ${f.desc} ${f.section}`.toLowerCase().includes(query));
      if (facts.length) sections.push({ subject, section, facts });
    });
  });
  if (!sections.length) {
    list.innerHTML = `<div class="card empty-state"><span class="empty-icon">⌕</span><h3>검색 결과가 없어요</h3><p>다른 용어나 과목으로 찾아보세요.</p></div>`;
    return;
  }
  list.innerHTML = sections.map((item, i) => `
    <article class="card note-section ${query || sections.length < 4 ? "open" : ""}">
      <button class="note-section-head" aria-expanded="${query || sections.length < 4}">
        <span class="note-num" style="background:${item.subject.color}18;color:${item.subject.color}">${item.subject.emoji}</span>
        <span><h3>${item.section.title}</h3><p>${item.subject.short} · ${item.section.summary}</p></span><span class="chevron">⌄</span>
      </button>
      <div class="note-content">
        ${item.facts.map(f => `<div class="fact-row"><b>${f.term}</b><span>${f.desc}</span><button class="master-btn ${mastered.has(f.id) ? "mastered" : ""}" data-master="${f.id}">${mastered.has(f.id) ? "✓ 외웠어요" : "외웠어요"}</button></div>`).join("")}
      </div>
    </article>`).join("");
  list.querySelectorAll(".note-section-head").forEach(button => button.addEventListener("click", () => {
    const section = button.closest(".note-section");
    section.classList.toggle("open");
    button.setAttribute("aria-expanded", section.classList.contains("open"));
  }));
  list.querySelectorAll("[data-master]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.master;
    const set = getMasteredSet();
    if (set.has(id)) set.delete(id); else set.add(id);
    state.mastered = [...set];
    saveState();
    drawNoteList();
  }));
}

function buildCardQueue() {
  let source = ALL_FACTS;
  if (cardFilter === "focus") {
    const wrong = new Set(state.wrong);
    const weak = ALL_FACTS.filter(f => wrong.has(f.id) || state.ratings[f.id] === "again" || !state.ratings[f.id]);
    source = weak.length ? weak : ALL_FACTS;
    return shuffle(source).slice(0, 12);
  }
  if (cardFilter !== "all") source = ALL_FACTS.filter(f => f.subjectId === cardFilter);
  const priority = source.filter(f => state.ratings[f.id] !== "easy");
  return shuffle(priority.length ? priority : source);
}

function renderCards(app) {
  cardQueue = buildCardQueue();
  cardIndex = Math.min(cardIndex, Math.max(cardQueue.length - 1, 0));
  app.innerHTML = `
    ${pageHead("ACTIVE RECALL", "암기카드", "앞면을 보고 먼저 답을 떠올린 뒤 카드를 뒤집으세요.")}
    <div class="filter-row">
      <button class="filter-chip ${cardFilter === "all" ? "active" : ""}" data-card-filter="all">전체 카드</button>
      <button class="filter-chip ${cardFilter === "focus" ? "active" : ""}" data-card-filter="focus">⚡ 오늘의 12개</button>
      ${SUBJECTS.map(s => `<button class="filter-chip ${cardFilter === s.id ? "active" : ""}" data-card-filter="${s.id}">${s.emoji} ${s.short}</button>`).join("")}
    </div>
    <div class="study-layout"><div><div id="flashcard-host"></div><div class="card-controls" id="card-controls">
      <button class="rate-btn again" data-rate="again"><b>다시</b><small>곧 재등장</small></button>
      <button class="rate-btn good" data-rate="good"><b>알겠어요</b><small>외운 개념</small></button>
      <button class="rate-btn easy" data-rate="easy"><b>너무 쉬워요</b><small>우선순위 낮춤</small></button>
    </div></div>
    <aside class="study-side">
      <article class="card"><h3>오늘의 카드 현황</h3><div class="queue-line"><span>남은 카드</span><b id="cards-left">${cardQueue.length}</b></div><div class="queue-line"><span>다시 볼 카드</span><b>${Object.values(state.ratings).filter(v=>v==="again").length}</b></div><div class="queue-line"><span>완전히 외움</span><b>${state.mastered.length}</b></div></article>
      <article class="card memory-tip"><h3>🧠 3초 회상법</h3><p>답을 바로 보지 말고 3초만 버텨보세요. 기억을 ‘읽는 것’보다 ‘꺼내는 것’이 훨씬 오래 남습니다.</p></article>
    </aside></div>`;
  drawFlashcard();
  app.querySelectorAll("[data-card-filter]").forEach(b => b.addEventListener("click", () => { cardFilter = b.dataset.cardFilter; cardIndex = 0; renderCards(app); }));
  app.querySelectorAll("[data-rate]").forEach(b => b.addEventListener("click", () => rateCard(b.dataset.rate)));
}

function drawFlashcard() {
  const host = document.getElementById("flashcard-host");
  if (!host) return;
  if (!cardQueue.length) {
    host.innerHTML = `<div class="card empty-state"><span class="empty-icon">🎉</span><h3>이 덱은 모두 완료했어요</h3><p>전체 카드에서 다음 개념을 이어가세요.</p><button class="secondary-btn" data-show-all>전체 카드 보기</button></div>`;
    host.querySelector("[data-show-all]").addEventListener("click", () => { cardFilter = "all"; renderCards(document.getElementById("app")); });
    return;
  }
  const fact = cardQueue[cardIndex];
  host.innerHTML = `<div class="flashcard-wrap"><article class="flashcard" id="flashcard" role="button" tabindex="0" aria-label="카드 뒤집기">
    <div class="card-face card-front"><span class="card-tag">${fact.subjectShort} · ${fact.section}</span><span class="card-count">${cardIndex+1} / ${cardQueue.length}</span><p>다음 설명에 해당하는 용어는?</p><h2>“${fact.desc}”</h2><span class="flip-hint">카드를 눌러 정답 확인 ↻</span></div>
    <div class="card-face card-back"><span class="card-tag">정답</span><span class="card-count">${cardIndex+1} / ${cardQueue.length}</span><h2>${fact.term}</h2><p>${fact.desc}</p><span class="flip-hint">알맞은 난이도를 선택하세요</span></div>
  </article></div>`;
  const card = host.querySelector("#flashcard");
  const flip = () => card.classList.toggle("flipped");
  card.addEventListener("click", flip);
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
}

function rateCard(rating) {
  if (!cardQueue.length) return;
  const fact = cardQueue[cardIndex];
  state.ratings[fact.id] = rating;
  const mastered = getMasteredSet();
  if (rating === "good" || rating === "easy") mastered.add(fact.id); else mastered.delete(fact.id);
  state.mastered = [...mastered];
  if (rating === "again" && cardQueue.length < 30) cardQueue.push(fact);
  state.sessions += 1;
  saveState();
  cardIndex += 1;
  if (cardIndex >= cardQueue.length) {
    toast("오늘 카드 학습을 완료했어요! 🎉");
    cardQueue = [];
  }
  drawFlashcard();
  const left = document.getElementById("cards-left");
  if (left) left.textContent = Math.max(cardQueue.length - cardIndex, 0);
}

function renderQuizModes(app) {
  app.innerHTML = `
    ${pageHead("CBT PRACTICE", "CBT 퀴즈", "빠르게 빈틈을 찾고, 실전처럼 60문항으로 마무리하세요.")}
    <div class="mode-grid">
      <button class="card mode-card" data-quiz-mode="quick"><span class="mode-icon">⚡</span><h3>빠른 10문항</h3><p>과목을 섞어 핵심 개념만 가볍게 점검합니다.</p><div class="mode-meta"><span>약 5분</span><b>바로 시작 →</b></div></button>
      <button class="card mode-card featured" data-quiz-mode="exam"><span class="mode-icon">✓</span><h3>실전 CBT 60</h3><p>1시간 타이머와 60문항. 36개 이상이면 합격입니다.</p><div class="mode-meta"><span>60분 · 합격 60점</span><b>실전 시작 →</b></div></button>
      <button class="card mode-card" data-quiz-mode="wrong"><span class="mode-icon">↺</span><h3>오답만 재도전</h3><p>틀렸던 ${state.wrong.length}개 개념을 다시 정답으로 바꿉니다.</p><div class="mode-meta"><span>${state.wrong.length || 0}문항</span><b>${state.wrong.length ? "오답 정복 →" : "오답 없음"}</b></div></button>
    </div>
    <section class="section-block">
      <div class="section-title"><div><h2>최근 학습 기록</h2><p>최근 5회의 결과를 확인하세요.</p></div></div>
      ${state.quizHistory.length ? `<div class="final-lines">${state.quizHistory.slice(-5).reverse().map(h => `<div class="final-line"><i>${h.score}</i><span><b>${h.mode}</b> · ${h.correct}/${h.total} 정답 · ${h.date}</span></div>`).join("")}</div>` : `<div class="card empty-state"><span class="empty-icon">✓</span><h3>첫 퀴즈를 기다리고 있어요</h3><p>10문항부터 가볍게 시작해보세요.</p></div>`}
    </section>`;
  app.querySelectorAll("[data-quiz-mode]").forEach(b => b.addEventListener("click", () => startQuiz(b.dataset.quizMode)));
}

function makeQuestion(fact) {
  let pool = ALL_FACTS.filter(f => f.sectionId === fact.sectionId && f.subjectId === fact.subjectId && f.id !== fact.id);
  if (pool.length < 3) pool = ALL_FACTS.filter(f => f.subjectId === fact.subjectId && f.id !== fact.id);
  const distractors = shuffle(pool).slice(0, 3).map(f => f.term);
  return { ...fact, options: shuffle([fact.term, ...distractors]) };
}

function startQuiz(mode) {
  let pool;
  if (mode === "wrong") {
    pool = ALL_FACTS.filter(f => state.wrong.includes(f.id));
    if (!pool.length) { toast("아직 저장된 오답이 없어요."); return; }
  } else if (mode === "exam") {
    const perSubject = SUBJECTS.flatMap(s => shuffle(ALL_FACTS.filter(f => f.subjectId === s.id)).slice(0, 15));
    pool = shuffle(perSubject);
  } else {
    pool = shuffle(ALL_FACTS).slice(0, 10);
  }
  quiz = {
    mode, questions: pool.map(makeQuestion), index: 0, correct: 0, answered: false,
    results: [], remaining: mode === "exam" ? 3600 : Math.max(300, pool.length * 45), started: Date.now()
  };
  renderQuizQuestion();
  timerId = setInterval(() => {
    quiz.remaining -= 1;
    const timer = document.getElementById("quiz-timer");
    if (timer) timer.textContent = formatTime(quiz.remaining);
    if (quiz.remaining <= 0) finishQuiz();
  }, 1000);
}

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`;
}

function renderQuizQuestion() {
  const app = document.getElementById("app");
  const q = quiz.questions[quiz.index];
  const pct = Math.round((quiz.index / quiz.questions.length) * 100);
  app.innerHTML = `<div class="quiz-shell">
    <div class="page-head"><div><p class="eyebrow">${quiz.mode === "exam" ? "REAL CBT MODE" : quiz.mode === "wrong" ? "WRONG ANSWERS" : "QUICK CHECK"}</p><h1>${quiz.mode === "exam" ? "실전 CBT" : quiz.mode === "wrong" ? "오답 재도전" : "빠른 퀴즈"}</h1></div><button class="ghost-btn" data-quit-quiz>그만하기</button></div>
    <div class="quiz-top"><div class="quiz-progress"><i style="width:${pct}%"></i></div><span class="timer" id="quiz-timer">${formatTime(quiz.remaining)}</span></div>
    <article class="card quiz-card">
      <div class="question-meta"><span><b>Q${String(quiz.index+1).padStart(2,"0")}</b> / ${quiz.questions.length}</span><span>${q.subjectShort} · ${q.section}</span></div>
      <h2 class="question">“${q.desc}”에 해당하는 용어는?</h2>
      <div class="answers">${q.options.map((option,i) => `<button class="answer-btn" data-answer="${escapeHtml(option)}"><span class="answer-num">${i+1}</span><span>${option}</span></button>`).join("")}</div>
      <div class="explanation" id="explanation"><b>핵심 연결</b><br>${q.term} — ${q.desc}</div>
      <div class="quiz-actions"><small>모르면 넘기기보다 지금 한 번 추측해보세요.</small><button class="secondary-btn" id="next-question" hidden>${quiz.index === quiz.questions.length-1 ? "결과 보기" : "다음 문제 →"}</button></div>
    </article>
  </div>`;
  setActiveNav("quiz");
  app.querySelector("[data-quit-quiz]").addEventListener("click", () => navigate("quiz"));
  app.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => answerQuestion(button.dataset.answer)));
  app.querySelector("#next-question").addEventListener("click", nextQuestion);
}

function answerQuestion(answer) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.questions[quiz.index];
  const isCorrect = answer === q.term;
  if (isCorrect) quiz.correct += 1;
  quiz.results.push({ id: q.id, isCorrect, answer });
  state.answered += 1;
  if (isCorrect) {
    state.correct += 1;
    state.wrong = state.wrong.filter(id => id !== q.id);
    const mastered = getMasteredSet(); mastered.add(q.id); state.mastered = [...mastered];
  } else if (!state.wrong.includes(q.id)) state.wrong.push(q.id);
  saveState();
  document.querySelectorAll("[data-answer]").forEach(button => {
    button.disabled = true;
    if (button.dataset.answer === q.term) button.classList.add("correct");
    else if (button.dataset.answer === answer) button.classList.add("wrong");
  });
  document.getElementById("explanation").classList.add("show");
  document.getElementById("next-question").hidden = false;
}

function nextQuestion() {
  if (quiz.index >= quiz.questions.length - 1) { finishQuiz(); return; }
  quiz.index += 1;
  quiz.answered = false;
  renderQuizQuestion();
}

function finishQuiz() {
  if (!quiz) return;
  if (timerId) { clearInterval(timerId); timerId = null; }
  const total = quiz.questions.length;
  const score = Math.round((quiz.correct / total) * 100);
  const elapsed = Math.max(1, Math.floor((Date.now() - quiz.started) / 1000));
  const passed = quiz.mode === "exam" ? quiz.correct >= 36 : score >= 60;
  const modeLabel = quiz.mode === "exam" ? "실전 CBT" : quiz.mode === "wrong" ? "오답 재도전" : "빠른 퀴즈";
  state.quizHistory.push({ mode: modeLabel, score, correct: quiz.correct, total, date: todayKey() });
  state.quizHistory = state.quizHistory.slice(-20);
  saveState();
  const app = document.getElementById("app");
  app.innerHTML = `<article class="card result-card">
    <span class="result-badge">${passed ? "PASS · 합격권" : "ONE MORE ROUND"}</span>
    <div class="result-score">${score}<span>점</span></div>
    <h2>${passed ? "좋아요, 합격 흐름입니다!" : "빈틈을 찾았으니 이제 점수가 오를 차례예요."}</h2>
    <p>${quiz.correct}개 정답 · ${total-quiz.correct}개 오답 · ${formatTime(elapsed)} 소요</p>
    <div class="result-stats"><div class="result-stat"><small>정답</small><b>${quiz.correct}</b></div><div class="result-stat"><small>오답</small><b>${total-quiz.correct}</b></div><div class="result-stat"><small>합격 기준</small><b>${quiz.mode === "exam" ? "36개" : "60점"}</b></div></div>
    <div class="result-actions"><button class="secondary-btn" data-route="wrong">오답 복습하기</button><button class="ghost-btn" data-retry>같은 모드 다시</button><button class="ghost-btn" data-route="home">오늘 학습으로</button></div>
  </article>`;
  app.querySelector("[data-retry]").addEventListener("click", () => startQuiz(quiz.mode));
}

function renderWrong(app) {
  const wrongFacts = state.wrong.map(id => ALL_FACTS.find(f => f.id === id)).filter(Boolean);
  app.innerHTML = `
    ${pageHead("RETRY & MASTER", "오답노트", "틀린 개념만 모았습니다. 정답으로 바꾸면 목록에서 자동으로 사라져요.")}
    <div class="section-title"><div><h2>${wrongFacts.length}개의 빈틈</h2><p>용어와 설명의 연결을 다시 확인하세요.</p></div>${wrongFacts.length ? `<button class="secondary-btn" data-wrong-quiz>오답 퀴즈 시작 →</button>` : ""}</div>
    <div class="wrong-list">
      ${wrongFacts.length ? wrongFacts.map((f,i) => `<article class="card wrong-item"><span class="wrong-num">${String(i+1).padStart(2,"0")}</span><div><h3>${f.term}</h3><p>${f.desc}</p><p><b>${f.subjectShort}</b> · ${f.section}</p></div><button class="remove-wrong" data-remove-wrong="${f.id}" aria-label="오답에서 제거">×</button></article>`).join("") : `<div class="card empty-state"><span class="empty-icon">🎉</span><h3>현재 남은 오답이 없어요</h3><p>빠른 퀴즈를 풀면 틀린 개념이 이곳에 자동으로 모입니다.</p><button class="secondary-btn" data-route="quiz">퀴즈 풀러 가기</button></div>`}
    </div>`;
  app.querySelector("[data-wrong-quiz]")?.addEventListener("click", () => startQuiz("wrong"));
  app.querySelectorAll("[data-remove-wrong]").forEach(b => b.addEventListener("click", () => {
    state.wrong = state.wrong.filter(id => id !== b.dataset.removeWrong); saveState(); renderWrong(app);
  }));
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function showResetModal() {
  const modal = document.getElementById("modal");
  document.getElementById("modal-content").innerHTML = `<h2 id="modal-title">학습 기록을 초기화할까요?</h2><p>암기 표시, 카드 난이도, 오답과 퀴즈 기록이 모두 지워집니다. 이 작업은 되돌릴 수 없어요.</p><div class="modal-actions"><button class="ghost-btn" data-close-modal>취소</button><button class="danger-btn" id="confirm-reset">초기화</button></div>`;
  modal.hidden = false;
  modal.querySelectorAll("[data-close-modal]").forEach(b => b.addEventListener("click", () => modal.hidden = true));
  document.getElementById("confirm-reset").addEventListener("click", () => {
    state = { ...defaultState, activeDays: [todayKey()] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    modal.hidden = true;
    updateGlobalUI();
    navigate("home");
    toast("학습 기록을 초기화했어요.");
  });
}

document.addEventListener("click", event => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) navigate(routeButton.dataset.route);
});
document.getElementById("reset-button").addEventListener("click", showResetModal);
document.getElementById("modal").addEventListener("click", e => { if (e.target.id === "modal") e.currentTarget.hidden = true; });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !document.getElementById("modal").hidden) document.getElementById("modal").hidden = true;
});

recordToday();
updateGlobalUI();
navigate(currentRoute);
