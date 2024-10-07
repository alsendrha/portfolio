export const projectData = [
  {
    id: 0,
    img: [
      "/images/project/project01-image01.png",
      "/images/project/project01-image03.png",
      "/images/project/project01-image04.png",
      "/images/project/project01-image05.png",
      "/images/project/project01-image02.png",
      "/images/project/project01-image06.png",
      "/images/project/project01-image07.png",
      "/images/project/project01-image08.png",
    ],
    imgReview: [
      {
        title: "메인페이지",
        content:
          "처음 화면은 메인페이지에서 시작하며 전반적인 페이지를 볼 수 있습니다.\n상단에는 슬라이더 기능이 있는 이미지가 있습니다. 메뉴바 최상단에는 마이페이지 로그인이 있고 기본 메뉴엔 경매와 커뮤니티가 있습니다. \n스크롤을 내리면 상단 앱바의 크기가 줄어들며 반응형으로 동작합니다. 마이페이지를 눌렀을때 로그인이 되어있지 않다면 alert창이 뜨고 로그인 페이지로 이동합니다.\n경매를 누르면 경매 물품 페이지로 이동하고 경매 물품 리스트들을 볼 수 있습니다. 커뮤니티는 일반적인 게시판 형식으로 만들었습니다.",
      },
      {
        title: "로그인",
        content:
          "아이디와 비밀번호를 입력하고 로그인 버튼을 누르면 메인 페이지로 이동합니다. 소셜 로그인은 미구현이고 일반 로그인만 가능합니다. 회원가입 외에는 미구현 입니다.",
      },
      {
        title: "회원가입",
        content:
          "회원가입은 아이디, 비밀번호, 이름, 이메일, 전화번호를 입력하고 회원가입 버튼을 누르면 회원가입이 완료됩니다.\n이메일 확인은 입력한 이메일로 인증코드를 발송하고 코드가 발송되면 인증코드 입력창이 나타납니다. 인증 코드를 입력해야 회원가입을 할 수 있습니다. 회원가입이 완료되면 로그인 페이지로 이동합니다.",
      },
      {
        title: "물품 등록",
        content:
          "물품등록에서는 사진은 총 3장까지 등록 가능하며 카테고리 제목, 초기 경매가격을 적어 등록을 합니다. 일반적인 등록폼입니다.\n등록된 상품은 관리자가 있다는 전제하에 관리자가 물품을 검수하고 최종 승인을 내줄때까지 대기상태가 됩니다. 자신의 물품 상태는 마이페이지에서 확인이 가능합니다.",
      },
      {
        title: "디테일 페이지",
        content:
          "이 홈페이지의 <strong style='color:#e65124;'>핵심</strong>인 디테일 페이지 입니다.\n채팅이 실시간으로 이루어지며 가격별로 입찰가가 정해져있어 해당 금액에 입찰을 누르면 정해진 입찰 금액으로 입찰이 됩니다. 가격도 실시간으로 늘어나며 최종 입찰시 모달창이 뜨며 입찰자는 결제 페이지로, 미입찰자는 다른 추천 상품 페이지로 이동 가능한 모달창이 뜹니다.\n 채팅은 웹소켓을 이용하여 구현하였습니다.",
      },
      {
        title: "마이 페이지",
        content:
          "마이페이지에선 자신의 물품 상태와 회원정보 수정, 주소 등록이 가능합니다.\n<strong style='color:#e65124;'>Order</strong> : 입찰된 물품과 결제예정인 물품들을 볼수있습니다.\n<strong style='color:#e65124;'>WishList</strong> : 찜한 물품들을 볼수있습니다(미구현)\n<strong style='color:#e65124;'>Address</strong> : 회원가입 메뉴에 없었던 주소를 등록하고 수정이 가능힙니다. 총 3개까지 등록이 가능하며 등록된 주소 클릭시 메인 주소로 선택이 가능합니다.\n<strong style='color:#e65124;'>Password</strong> : 비밀번호 변경을 할 수 있습니다.(미구현)\n<strong style='color:#e65124;'>프로필 관리</strong> : 자신의 프로필 이미지, 닉네임, 자기소개 변경이 가능합니다.\n <strong style='color:#e65124;'>Logout</strong> : 로컬스토리지에 저장되어있는 토큰을 삭제하여 로그아웃이 됩니다.",
      },
      {
        title: "커뮤니티",
        content:
          "백엔드에서 게시판 미구현으로 <strong style='color:#e65124;'>파이어베이스</strong>를 활용하여 커뮤니티 게시판을 구현하였습니다. 사진은 파이어베이스 스토리지를 사용하였고 다른 내용들은 파이어베이스 데이터베이스를 사용하였습니다. 일반적인 게시판으로 게시물 작성과 댓글을 작성할 수 있습니다. 게시물과 댓글 모두 수정과 삭제가 가능합니다.",
      },
    ],
    title: "우리동네 경매장",
    content: "명품 경매 서비스",
    detail:
      "경매 사이트로 실시간으로 입찰이 가능한 서비스입니다. 아무나 구매하지 못하도록 명품 컨셉을 잡았습니다. 채팅을 통해 입찰자들과 소통이 가능하며 경매가 끝나면 바로 결제하기 또는 마이페이지를 통해서 결제를 할 수 있습니다. 또한 커뮤니티 게시판에서 질문과 답변 잡담도 가능합니다.",
    github: "https://github.com/OZ-Coding-School/oz_01_main-002-FE",
    date: "2024-05-01 ~ 2024-05-31",
    people: "frontend 2명, backend 3명",
    backend: "Aws, Django, Mysql, Firebase",
    myJob: [
      {
        name: "프로젝트 셋팅",
        content:
          "어떤 툴을 사용하여 개발을 할 것인지, 어떤 라이브러리를 사용 할 것인지를 정하고 설치와 셋팅을 하였습니다. 본 프로젝트는 Next.js로 개발하였습니다.",
      },
      {
        name: "전체 페이지 개발",
        content:
          "메인 페이지부터 리스트 페이지, 디테일 페이지, 마이페이지, 로그인, 회원가입, 물품 등록 페이지, 수정페이지, 커뮤티니 페이지, 커뮤니티 디테일 페이지를 개발하였고 결제 페이지는 UI와 modal등 추가 작업을 하였습니다. ",
      },
      {
        name: "웹소켓을 활용한 채팅 구현",
        content:
          "경매 사이트답게 실시간으로 진행되는 만큼 실시간 채팅을 활용하여 입찰 시스템을 개발하였습니다. 채팅은 기본적으로 내장되있는 Websocket을 이용하여 개발하였고 입찰 버튼을 눌렀을때 가격과 채팅에 ~님이 입찰하였습니다 문구가 나가게 개발하였습니다.",
      },
      {
        name: "카카오 주소를 이용한 주소 등록 구현",
        content:
          "마이페이지에서 회원 주소등록은 카카오 주소 라이브러리를 사용하여 주소등록을 개발하였습니다. 주소는 총 3개까지 등록되게 하였고 해당 주소를 클릭하면 메인 주소가 변경되게 하였습니다. 삭제 버튼을 클릭하면 주소가 삭제됩니다.",
      },
      {
        name: "firebase를 활용한 게시판 구현",
        content:
          "백엔드에서 커뮤니티 페이지 api를 작성하지 못하여 firebase를 이용하여 커뮤니티 페이지의 CRUD를 구현하였습니다. 각 게시물마다 댓글을 작성 할 수 있고 게시물과 댓글 모두 수정과 삭제도 가능합니다.",
      },
      {
        name: "배포",
        content:
          "페이지의 배포를 담당하였습니다. netlify, vercel로 배포를 하였지만 백엔드의 api가 http라 연동이 안되었습니다. 그래서 s3로 정적 배포를 하였지만 요금 문제로 다시 서버에서 내리게 되었습니다. 그리고 현재 백엔드로 서버를 내린 상태라 s3로 재배포를 한다해도 동작이 안됩니다. 나머지 두 사이트는 접속이 가능합니다(기능은 불가능)",
      },
      {
        name: "(전체 기여도 100%)",
        content: "모든 페이지를 담당하여 기여도 100% 입니다.",
      },
    ],
    tech: [
      "NextJs, ",
      "Typescript, ",
      "Tailwindcss, ",
      "Axios, ",
      "React-query, ",
      "Zustand, ",
      "Firebase",
    ],
    link: "zO9jtUQCDSw",
    link2: "https://superlative-boba-26e889.netlify.app/",
    techImg: [
      "/images/logo/nextjs.png",
      "/images/logo/typescript.png",
      "/images/logo/axios.png",
      "/images/logo/react-query.png",
      "/images/logo/tailwindcss.png",
      "/images/logo/zustand.png",
      "/images/logo/firebase.png",
    ],
  },
  {
    id: 1,
    img: [
      "/images/project/3eng-01.png",
      "/images/project/3eng-07.png",
      "/images/project/3eng-06.png",
      "/images/project/3eng-08.png",
      "/images/project/3eng-09.png",
      "/images/project/3eng-02.png",
      "/images/project/3eng-04.png",
      "/images/project/3eng-03.png",
      "/images/project/3eng-05.png",
    ],
    imgReview: [
      {
        title: "시작 페이지",
        content:
          "시작페이지 입니다\n시작하기 버튼을 누르면 로그인과 회원가입 스와이프 할수있는 페이지로 이동하게 됩니다. <strong style='color:#e65124;'>vanilla extract css</strong>를 사용하여 동적으로 움직이는 화면을 만들었습니다.",
      },
      {
        title: "로그인",
        content:
          "아이디와 비밀번호를 입력하고 로그인 버튼을 누르면 메인 페이지로 이동합니다. 소셜 로그인은 없으며 옆 회원가입 버튼을 누르면 회원가입 폼으로 스와이프됩니다.",
      },
      {
        title: "회원가입",
        content:
          "회원가입은 간단하게 이메일, 닉네임, 비밀번호를 입력하고 회원가입 버튼을 누르면 회원가입이 됩니다. 이메일은 정규식을 통해 이메일 형식이 아니면 회원가입이 되지 않습니다. 회원가입이 완료되면 로그인 페이지로 스와이프합니다.",
      },
      {
        title: "난이도 선택 페이지",
        content:
          "초등학생, 중학생, 고등학생, 일반인으로 나누어져 있으며 해당 난이도를 선택하면 다음 페이지로 이동합니다. 반응형으로 제작하였으며 화면이 줄어들면 한줄(가로) 스크롤이 가능하게 만들었습니다.\n그리고 상단 앱바가 아닌 왼쪽 사이드로 앱바를 제작해보았습니다. 앱바를 통해 다른 페이지들로 이동 가능합니다.",
      },
      {
        title: "날짜 선택 페이지",
        content:
          "날짜 선택 페이지에서는 오늘 날짜밖에 선택이 안됩니다. 난이도별로 하루 총 5회 선택 가능하며 문제풀이가 완료된 날짜는 다른 색깔로 표시가 됩니다.",
      },
      {
        title: "퀴즈 페이지",
        content:
          "<strong style='color:#e65124;'>Open AI</strong>를 통해 총 5문제를 받아오고 문제를 풀 수 있는 페이지 입니다. 문제를 풀고 정답버튼을 누르게되면 다시 <strong style='color:#e65124;'>open AI</strong>에게 요청하여 정답을 받아오게 됩니다. 정답을 받아오면 다음 페이지로 넘어가며 해당 풀이를 확인할 수 있습니다.",
      },
      {
        title: "점수확인 페이지",
        content:
          "해당 페이지는 Open AI에게 답을 받아와 표시해주고 5문제의 평균점수를 계산하여 표시해줍니다. 점수 카드를 클릭하면 회전하며 뒷면에 정답 풀이가 표시됩니다.",
      },
      {
        title: "나의 학습공간 페이지",
        content:
          "이제까지 풀었던 문제들을 표시해주며 내가 푼 문제를 클릭하면 날짜별로 풀었던 문제들을 다시 풀어볼 수 있습니다. 3번 틀리면 정답이 나타나며 평균 점수와 풀었던 문제들의 수를 표시해줍니다. 반응형으로 화면을 줄였을시 카드형태로 변하며 회전하며 양쪽에 해당 메뉴들이 나타납니다.",
      },
      {
        title: "나의 정보 페이지",
        content:
          "회원 정보가 나타나는 페이지입니다.\n프로필 이미지, 닉네임, 비밀번호 변경이 가능하며 회원탈퇴 버튼을 누르면 회원탈퇴가 가능합니다. 회원탈퇴시 로컬스토리지에 저장된 토큰을 삭제하고 로그인 페이지로 이동합니다.",
      },
    ],
    title: "3-ENG",
    content: "매일 AI 5문제 영어",
    detail:
      "매일 난이도별 5문제씩 영어 문제를 풀 수 있는 퀴즈 사이트 입니다. 난이도 별로 5문제씩 있으며 풀이를 보고 다음 문제로 넘어가거나 다시 풀기를 할 수 있습니다. 또한 나의 학습공간에서 내가 푼 문제들을 볼 수 있고 평균 점수를 확인 할 수 있습니다.",
    github: "https://github.com/OZ-Coding-School/oz_01_collabo-003",
    date: "2024-04-01 ~ 2024-04-30",
    people: "frontend 2명, backend 2명",
    backend: "Aws, Django, Mysql",
    myJob: [
      {
        name: "프로젝트 셋팅",
        content:
          "어떤 툴을 사용하여 개발을 할 것인지, 어떤 라이브러리를 사용 할 것인지를 정하고 설치와 셋팅을 하였습니다. 본 프로젝트는 vite로 개발하였습니다.",
      },
      {
        name: "레벨 페이지 제작",
        content:
          "프로젝트의 레벨 선택 페이지를 개발하였습니다. 해당 난이도를 선택하면 다음 날짜 선택 페이지로 이동됩니다. params를 이용하여 페이지 재활용을 하게 만들었습니다.",
      },
      {
        name: "날짜 선택 페이지 제작",
        content:
          "날짜 선택 페이지를 개발하였습니다. 일요일에서 토요일까지 선택 화면이 보이지만 날짜는 오늘날짜만 선택 가능합니다. params를 통해 해당 난이도의 문제를 오픈 AI에게 요청하고 문제 페이지로 이동하게 만들었습니다.",
      },
      {
        name: "나의 학습공간 페이지 제작",
        content:
          "나의 학습공간 페이지 제작를 개발하였습니다. 모든 문제를 다 풀고 나의 학습공간에서 문제를 재확인 할 수 있습니다. 날짜별 문제를 다시 풀어 볼 수 있으며 3번 틀리면 정답이 나타납니다. 그리고 현재까지 풀었던 문제들의 숫자와 평균 점수도 확인이 가능합니다.",
      },
      {
        name: " 앱바 제작",
        content:
          "앱바를 개발하였습니다. 왼쪽 사이드에 있는 앱바이며 햄버거 아이콘을 클릭하면 나의 기본적인 정보들과 메뉴들이 나타납니다. 정보수정 페이지에서 나의 정보를 수정하면 실시간으로 수정된 정보가 갱신됩니다.",
      },
      {
        name: "배포",
        content:
          "netlify를 통해 배포를 하였습니다. 백엔드에서도 https로 변경하였지만 현재 백엔드 서버가 내려가서 해당 사이트 접속은 가능하나 기능은 작동하지 않습니다.",
      },
      {
        name: "도메인 주소 변경(가비아)",
        content: "가비아 도메인을 사용하여 도메인 주소를 변경하였습니다.",
      },
      {
        name: "(전체 기여도 50%)",
        content:
          "프로젝트의 50% 기여하였고 팀원에게 개발 정보를 알려주며 개발하였습니다.",
      },
    ],
    tech: [
      "React vite, ",
      "Typescript, ",
      "Axios, ",
      "Vanilla-extract/css, ",
      "Zustand",
    ],
    link: "n2IU83g5n78",
    link2: "https://3eng.site/",
    techImg: [
      "/images/logo/react_vite.png",
      "/images/logo/typescript.png",
      "/images/logo/axios.png",
      "/images/logo/vanilla-extract.png",
      "/images/logo/zustand.png",
    ],
  },
  {
    id: 2,
    img: [
      "/images/project/min-01.png",
      "/images/project/min-07.png",
      "/images/project/min-02.png",
      "/images/project/min-03.png",
      "/images/project/min-04.png",
      "/images/project/min-05.png",
      "/images/project/min-06.png",
    ],
    imgReview: [
      {
        title: "메인페이지",
        content:
          "처음 시작 페이지입니다. 리액트를 배우고 처음 만들어본 당근마켓(웹 중고거래) 클론 페이지 입니다.\n 상단에는 검색창과 카테고리가 있으며 중고거래 상품들이 나열되어 있습니다.\n검색 input에 검색어를 입력하면 상품 검색이 가능하며 상품을 클릭하면 디테일 페이지로 이동하여 상품의 상세정보를 볼 수 있습니다.\n 글쓰기 버튼도 fixed로 항상 활성화 되어있으며 클릭시 로그인이 되어있지 않으면 로그인 페이지로 이동하게 됩니다.",
      },
      {
        title: "로그인",
        content:
          "아이디와 비밀번호를 입력하고 로그인 버튼을 누르면 메인 페이지로 이동합니다. 소셜 로그인은 미구현이고 일반 로그인만 가능합니다. 아이디가 없으면 회원가입을 통해 회원가입이 가능합니다.",
      },
      {
        title: "회원가입",
        content:
          "<strong style='color:#e65124;'>Firebase</strong>를 활용하여 만들었으며 회원가입은 이메일, 비밀번호, 닉네임을 입력, 회원가입 버튼을 누르면 회원가입이 완료됩니다.\n이메일은 회원가입 버튼을 누르면 자동으로 중복확인을 해주며 닉네임은 닉네임 확인 버튼을 통해 중복확인이 가능합니다. 회원가입이 완료되면 로그인 페이지로 이동합니다.",
      },
      {
        title: "물품 등록",
        content:
          "물품 등록은 사진 및 제목, 내용을 입력하며 나눔인지 판매인지 선택하여 금액을 설정합니다. 만약 나눔을 선택하면 0원이 입력되며 input창은 자동으로 비활성화됩니다. 그리고 당근마켓 특성을 살려 어디서 거래를 할 것인지 지도를 클릭할수 있으며 지도는 구글맵을 사용했고 주소는 <strong style='color:#e65124;'>kakao geo geocoder api</strong>를 사용하여 주소로 변환하였습니다.",
      },
      {
        title: "디테일 페이지",
        content:
          "상품의 정보를 확인 할 수 있고 어디서 거래를 할 것인지 지도를 통해 확인이 가능합니다. 유저 정보쪽에 <strong style='color:#e65124;'>채팅</strong>이 가능한 버튼도 있어서 누르면 1:1 채팅이 가능합니다. 게시자는 채팅을 요청한 상대를 클릭하여 채팅 페이지로 이동할 수 있습니다.",
      },
      {
        title: "마이 페이지",
        content:
          "마이페이지에서는 자신이 올린 게시물 수를 확인 가능하며 숫자를 클릭하면 게시물 리스트로 이동하게 됩니다.\n<strong style='color:#e65124;'>나의 정보</strong> : 프로필 정보 확인 및 수정이 가능합니다.\n <strong style='color:#e65124;'>홈페이지 정보</strong> : 홈페이지 생성일 및 완성일자, 버전 확인이 가능합니다.",
      },
      {
        title: "회원정보",
        content:
          "회원정보를 확인 및 수정할 수 있습니다. 처음엔 수정하기 버튼만 있고 클릭하면 사진과 같이 변경됩니다. 현재는 닉네임만 변경이 가능합니다.",
      },
    ],
    title: "배추마켓",
    content: "당근마켓 클론",
    detail:
      "개인 프로젝트로 당근마켓 웹 사이트의 중고장터를 클론하여 개발하였습니다. 웹 페이지에선 등록버튼을 찾을 수 없어서 등록 페이지는 당근마켓 앱의 구성으로 만들어 봤으며 나머지 마이페이지는 창작을 통해 개발하였습니다.",
    github: "https://github.com/alsendrha/firebaseCRUD",
    date: "2024-03-01 ~ 2024-03-25",
    people: "frontend 1명",
    backend: "Firebase",
    myJob: [
      {
        name: "전체 페이지 개발",
        content:
          "당근마켓 클론 배추마켓의 모든 페이지를 개발하였습니다. 페이지는 메인 페이지(리스트), 디테일 페이지, 등록 페이지(수정 페이지 재활용), 채팅 페이지, 마이페이지, 서치 페이지, 로그인, 로그아웃 페이지가 있습니다. 등록 페이지의 장소 선택은 구글 맵을 사용하여 개발하였으며 구글 맵에서 클릭하여 얻은 위도와 경도는 카카오 웹 api geocoding을 사용하여 주소로 변환하였습니다.",
      },
      {
        name: "배포",
        content:
          "firebase로 개발하여 firebase로 배포를 해보았습니다. github action을 이용하여 배포를 하여 commit push를 하면 자동으로 업데이트 됩니다.",
      },
      {
        name: "도매인 주소 변경",
        content: "가비아 도메인을 사용하여 도메인 주소를 변경하였습니다.",
      },
      {
        name: "(전체 기여도 100%)",
        content: "모든 페이지를 담당하여 기여도 100% 입니다.",
      },
    ],
    tech: ["React, ", "Google-map-api, ", "Kakao-web-api, ", "Firebase"],
    link: "",
    link2: "https://alsendrha.shop/",
    techImg: [
      "/images/logo/react.png",
      "/images/logo/google_map.png",
      "/images/logo/kakao.png",
      "/images/logo/firebase.png",
    ],
  },
];

export const skillData = [
  {
    name: "Html,Css,Js",
    img: [
      { img: "/images/logo/html.png" },
      { img: "/images/logo/javascript.png" },
      { img: "/images/logo/css.png" },
    ],
    content:
      "- 원하는 UI를 실용적이고, 익숙하게 만들어 낼수 있습니다.\n- Css의 기본적인 문법을 사용할수 있습니다.\n다양한 속성과 메소드 사용이 가능합니다.\n- 비동기 통신으로 데이터를 요청을 할 수 있습니다.",
  },
  {
    name: "React",
    img: [{ img: "/images/logo/react.png" }],
    content:
      "- 컴포넌트 생명주기와 속성을 사용할 수 있습니다.\n- 라우터 설정을 하여 자유롭게 페이지 이동이 가능합니다.\n- props와 context를 활용하여 데이터 전달이 가능합니다.\n- provider 라이브러리 사용이 가능합니다.",
  },
  {
    name: "React-native",
    img: [{ img: "/images/logo/react-native.png" }],
  },
  {
    name: "NextJs",
    img: [{ img: "/images/logo/nextjs.png" }],
    content:
      "- Next 14 SSR과 CSR을 구분지어서 사용 가능합니다.\n- 폴더 방식의 routing을 이해하고 사용 가능합니다.\n- loading, not-found등 기본적인 페이지 사용이 가능합니다.",
  },
  {
    name: "Typescript",
    img: [{ img: "/images/logo/typescript.png" }],
    content: "- 타입을 지정하여 개발 환경을 쾌적하게 만들수있습니다.",
  },
  {
    name: "Axios",
    img: [{ img: "/images/logo/axios.png" }],
    content:
      "- axios를 통해서 비동기 통신이 가능합니다.\n- interceptor 사용이 가능합니다.",
  },
  {
    name: "React-query",
    img: [{ img: "/images/logo/react-query.png" }],
    content:
      "- useQuery와 useMutation을 사용하여 데이터를 요청할수 있습니다.\n- 기본적인 기능들을 사용할수 있습니다.",
  },
  {
    name: "Styled-components",
    img: [{ img: "/images/logo/styled_components.png" }],
    content:
      "- 태그를 이용한 css작성이 가능합니다.\n- props를 활용하여 css 변경이 가능합니다.",
  },
  {
    name: "Tailwindcss",
    img: [{ img: "/images/logo/tailwindcss.png" }],
    content:
      "- 기본적인 css작성이 가능합니다.\n- 옵션을 통해 애니메이션등의 기능을 사용할수 있습니다.",
  },
  {
    name: "Vanilla-extract/css",
    img: [{ img: "/images/logo/vanilla-extract.png" }],
    content:
      "- 기본적인 css작성이 가능합니다.\n- props를 활용하여 css 변경이 가능힙니다.",
  },
  {
    name: "Zustand",
    img: [{ img: "/images/logo/zustand.png" }],
    content:
      "- 기본적인 데이터 이동이 가능합니다.\n- 데이터 저장 옵션 기능 사용이 가능합니다.",
  },
];
