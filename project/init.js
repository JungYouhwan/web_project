// init.js

/*
소규모 매장 재고 관리

로그인
-아이디와 비밀번호 입력 후 로그인.

재고관리
-전체 상품의 목록을 화면에 출력(품목코드, 품목명, 위치, 재고, 실 재고)
-재고 수정가능.

품목관리
-품목코드, 품목명, 카테고리, 규격정보, 품목그룹, 거래처 명, 거래처
-품목 추가, 삭제, 수정 가능.

*/

// 재고
const invenData = [
  { 
    invenCode: "A001",
    invenName: "롯데 아이스크림 바닐라 80g",
    invenLocat: "1번창고",
    invenTory: 200,
    invenReal: 180
  },
  { 
    invenCode: "A002",
    invenName: "하리보 골드베어 200g",
    invenLocat: "3번창고",
    invenTory: 150,
    invenReal: 130
  },
  { 
    invenCode: "A003",
    invenName: "오리온 초코송이 90g",
    invenLocat: "3번창고",
    invenTory: 180,
    invenReal: 170
  },
  { 
    invenCode: "A004",
    invenName: "롯데 과자 새우깡 120g",
    invenLocat: "4번창고",
    invenTory: 250,
    invenReal: 240
  },
  { 
    invenCode: "A005",
    invenName: "빙그레 아이스크림 바나나맛 100ml",
    invenLocat: "1번창고",
    invenTory: 160,
    invenReal: 140
  },
  { 
    invenCode: "A006",
    invenName: "팔도 비빔면 120g",
    invenLocat: "5번창고",
    invenTory: 300,
    invenReal: 290
  },
  { 
    invenCode: "A007",
    invenName: "롯데 아이스크림 바닐라 100g",
    invenLocat: "1번창고",
    invenTory: 220,
    invenReal: 210
  },
  { 
    invenCode: "A008",
    invenName: "삼양 라면 130g",
    invenLocat: "5번창고",
    invenTory: 280,
    invenReal: 270
  },
  { 
    invenCode: "A009",
    invenName: "농심 새우깡 100g",
    invenLocat: "4창고",
    invenTory: 240,
    invenReal: 230
  },
  { 
    invenCode: "A010",
    invenName: "정식품 두유 200ml",
    invenLocat: "2번창고",
    invenTory: 190,
    invenReal: 180
  },
  { 
    invenCode: "A011",
    invenName: "롯데 빼빼로 초코 100g",
    invenLocat: "4번창고",
    invenTory: 210,
    invenReal: 200
  },
  { 
    invenCode: "A012",
    invenName: "딸기 우유 200ml",
    invenLocat: "2번창고",
    invenTory: 170,
    invenReal: 150
  },
  { 
    invenCode: "A013",
    invenName: "삼양 짜파게티 140g",
    invenLocat: "5번창고",
    invenTory: 230,
    invenReal: 220
  },
  { 
    invenCode: "A014",
    invenName: "배스킨라빈스 아이스크림 120ml",
    invenLocat: "1번창고",
    invenTory: 140,
    invenReal: 130
  },
  { 
    invenCode: "A015",
    invenName: "오리온 고래밥 80g",
    invenLocat: "4번창고",
    invenTory: 200,
    invenReal: 190
  },
  { 
    invenCode: "A016",
    invenName: "CJ 햇반 210g",
    invenLocat: "5번창고",
    invenTory: 250,
    invenReal: 240
  },
  { 
    invenCode: "A017",
    invenName: "마시멜로 100g",
    invenLocat: "4번창고",
    invenTory: 180,
    invenReal: 170
  },
  { 
    invenCode: "A018",
    invenName: "롯데 후렌치프라이 150g",
    invenLocat: "4번창고",
    invenTory: 220,
    invenReal: 210
  },
  { 
    invenCode: "A019",
    invenName: "롯데 칸쵸 100g",
    invenLocat: "4번창고",
    invenTory: 210,
    invenReal: 200
  },
  { 
    invenCode: "A020",
    invenName: "오뚜기 진라면 120g",
    invenLocat: "5번창고",
    invenTory: 300,
    invenReal: 290
  }
]
/*
품목관리
-품목코드, 품목명, 카테고리, 규격정보, 품목그룹, 거래처 명, 거래처
-품목 추가, 삭제, 수정 가능.
 */

const productData = [
  { 
    productCode: "A001",
    productName: "롯데 아이스크림 바닐라 80g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "과자",
    productRet: "롯데푸드",
    productStore: "이마트 대구점"
  },
  { 
    productCode: "A002",
    productName: "하리보 골드베어 200g",
    productCate: "간식",
    productPack: "10봉지",
    productGrup: "젤리",
    productRet: "하리보",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A003",
    productName: "오리온 초코송이 90g",
    productCate: "간식",
    productPack: "12개",
    productGrup: "과자",
    productRet: "오리온",
    productStore: "이마트 만촌점"
  },
  { 
    productCode: "A004",
    productName: "롯데 과자 새우깡 120g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "과자",
    productRet: "롯데푸드",
    productStore: "이마트 대구점"
  },
  { 
    productCode: "A005",
    productName: "빙그레 아이스크림 바나나맛 100ml",
    productCate: "음료",
    productPack: "6개",
    productGrup: "음료",
    productRet: "빙그레",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A006",
    productName: "팔도 비빔면 120g",
    productCate: "간식",
    productPack: "5개",
    productGrup: "라면",
    productRet: "팔도",
    productStore: "이마트 대구점"
  },
  { 
    productCode: "A007",
    productName: "롯데 아이스크림 바닐라 100g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "과자",
    productRet: "롯데푸드",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A008",
    productName: "삼양 라면 130g",
    productCate: "간식",
    productPack: "5개",
    productGrup: "라면",
    productRet: "삼양식품",
    productStore: "이마트 만촌점"
  },
  { 
    productCode: "A009",
    productName: "농심 새우깡 100g",
    productCate: "간식",
    productPack: "6개",
    productGrup: "과자",
    productRet: "농심",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A010",
    productName: "정식품 두유 200ml",
    productCate: "음료",
    productPack: "20개",
    productGrup: "음료",
    productRet: "정식품",
    productStore: "이마트 대구점"
  },
  { 
    productCode: "A011",
    productName: "롯데 빼빼로 초코 100g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "과자",
    productRet: "롯데푸드",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A012",
    productName: "딸기 우유 200ml",
    productCate: "음료",
    productPack: "10개",
    productGrup: "음료",
    productRet: "빙그레",
    productStore: "이마트 만촌점"
  },
  { 
    productCode: "A013",
    productName: "삼양 짜파게티 140g",
    productCate: "간식",
    productPack: "5개",
    productGrup: "라면",
    productRet: "삼양식품",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A014",
    productName: "배스킨라빈스 아이스크림 120ml",
    productCate: "간식",
    productPack: "6개",
    productGrup: "과자",
    productRet: "배스킨라빈스",
    productStore: "이마트 대구점"
  },
  { 
    productCode: "A015",
    productName: "오리온 고래밥 80g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "과자",
    productRet: "오리온",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A016",
    productName: "CJ 햇반 210g",
    productCate: "간식",
    productPack: "18개",
    productGrup: "밥류",
    productRet: "CJ제일제당",
    productStore: "이마트 만촌점"
  },
  { 
    productCode: "A017",
    productName: "마시멜로 100g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "간식",
    productRet: "크라운제과",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A018",
    productName: "롯데 후렌치프라이 150g",
    productCate: "간식",
    productPack: "10개",
    productGrup: "과자",
    productRet: "롯데푸드",
    productStore: "이마트 대구점"
  },
  { 
    productCode: "A019",
    productName: "롯데 칸쵸 100g",
    productCate: "간식",
    productPack: "6개",
    productGrup: "과자",
    productRet: "롯데푸드",
    productStore: "홈플러스 대구수성점"
  },
  { 
    productCode: "A020",
    productName: "오뚜기 진라면 120g",
    productCate: "간식",
    productPack: "5개",
    productGrup: "라면",
    productRet: "오뚜기",
    productStore: "이마트 만촌점"
  }
]
const newProduct = [
  { 
    newCode: "A021",
    newName: "열라면 120g",
    newCate: "라면",
    newPack: "5개",
    newGrup: "라면",
    newRet: "오뚜기",
    newStore: "미정",
    newImage: "/assets/images/products/hot.JPG"
  },
  { 
    newCode: "A022",
    newName: "진라면 순한맛 120g",
    newCate: "라면",
    newPack: "5개",
    newGrup: "라면",
    newRet: "오뚜기",
    newStore: "미정",
    newImage: "/assets/images/products/jin.JPG"
  },
  { 
    newCode: "A023",
    newName: "라면사리 110g",
    newCate: "라면",
    newPack: "5개",
    newGrup: "라면",
    newRet: "오뚜기",
    newStore: "미정",
    newImage: "/assets/images/products/noodles.JPG"
  },
  { 
    newCode: "A024",
    newName: "무파마 122g",
    newCate: "라면",
    newPack: "5개",
    newGrup: "라면",
    newRet: "농심",
    newStore: "미정",
    newImage: "/assets/images/products/mu.JPG"
  },
  { 
    newCode: "A025",
    newName: "팔도 틈새라면 120g",
    newCate: "라면",
    newPack: "5개",
    newGrup: "라면",
    newRet: "paldo",
    newStore: "미정",
    newImage: "/assets/images/products/teum.JPG"
  }
]

const memberData = [
  {id:'user01', password: '1111', product: 'P001', qty:1},
  {id:'user02', password: '2222', product: 'P002', qty:2},
  {id:'user03', password: '3333', product: 'P003', qty:3},
  {id:'user04', password: '4444', product: 'P004', qty:4},
  {id:'user05', password: '5555', product: 'P005', qty:5}
]