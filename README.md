# Description
넥슨 오픈 api를 이용한 카트라이더 전적사이트를 개발하였습니다. 
페이지는 유저의 전적을 볼 수 있는 개인 전적 조회 페이지, 유저들의 랭킹을 볼 수 있는 랭킹페이지 이렇게 2개의 페이지로 구성되어 있습니다.

### 다음과 같은 필수 요구사항을 최대한 만족하려고 노력하였습니다.
#### * React, Vuejs 두가지 중 하나의 프레임워크 사용하여 SPA로 구현
  * React를 사용하여 페이지를 구현하였습니다. 
#### * 두 종류 이상의 그래프 포함 필수
  <img width="348" alt="스크린샷 2022-03-05 오후 10 51 10" src="https://user-images.githubusercontent.com/22316798/156886252-19cb0290-3441-4244-83fa-893faaf004d2.png">
  <img width="330" alt="스크린샷 2022-03-05 오후 10 51 16" src="https://user-images.githubusercontent.com/22316798/156886269-2a1d5723-6048-48b4-aab0-3aac3ecd0bb1.png">
  <img width="346" alt="스크린샷 2022-03-05 오후 10 51 29" src="https://user-images.githubusercontent.com/22316798/156886275-db928c4d-66bc-4993-ab81-1498d4fece2b.png">
  * react-apexcharts를 이용하여 차트를 구현하였습니다. 
#### * 다섯 종류 이상의 애니메이션 포함 필수
  * 그래프에는 모두 애니메이션이 포함되어 있고 아래와 같이 애니메이션이 적용되어 있습니다.
  ![애니메이션1](https://user-images.githubusercontent.com/22316798/156886701-4dfd4087-c24d-4077-8c44-f5abb943dbfe.gif)
  ![애니메이션2](https://user-images.githubusercontent.com/22316798/156886707-968d35ca-6304-40fb-8dc4-e7840ff8952e.gif)
  ![애니메이션3](https://user-images.githubusercontent.com/22316798/156886720-9791c0c3-1dbd-4e24-9505-065a71612967.gif)
  ![애니메이션4](https://user-images.githubusercontent.com/22316798/156886727-35b90ecd-f654-4f6f-bec7-6a8d8531d842.gif)

#### * 필요한 경우 서버 개발은 가능하나 SSR 사용 불가
  * 서버는 따로 개발하지않았습니다. 다만 cors-anywhere를 이용하여 프록시 서버를 구성하였습니다.
  * 응원한마디 컴포넌트를 개발시 데이터를 저장하기 위해 firebase를 사용하였습니다.
#### * 하나 이상의 vanila script로 만들어진 모듈 구현
#### * 해당 사이트의 리소스를 사용하여도 무방하며 Bootstrap과 같은 UI 프레임워크 테마 사용도 가능
  * 대부분 넥슨의 카트 전적사이트를 따라 만들었으면 따로 UI라이브러리는 사용하지 않았습니다.

### 선택사항
#### * 컴포넌트 기반의 구조를 가질 수 있도록 설계
  * 저희가 구현한 페이지는 모두 컴포넌트를 기반으로 구현되었습니다.
#### * 라이브러리를 사용하지 않고 그레프, 애니메이션을 구현
  * 처음엔 일단 라이브러리를 사용하여 구현하고 시간이 괜찮다면 라이브러리를 제거하는 방향으로 정했습니다. 하지만 시간적 여유가 부족하여 라이브러리를 제거하진 못하였습니다.
#### * UI/UX를 고려한 기능 및 페이지 구성
  * 최대한 페이지의 정렬을 맞춰서 사용자의 경험 향상을 고려하였습니다.

# Usage(자세한 실행 방법)
1. git clone
```
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05.git
```
2. 필요한 라이브러리 설치
```
npm install
```
3. 실행
```
npm run start
```

# 기술스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/ReactJs-61DAFB?style=flat&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/styled%20components-DB7093?style=flat&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/apexchart-FF6384?style=flat&logo=react-apexchart&logoColor=white"> <img src="https://img.shields.io/badge/vercel-aaff11?style=flat&logo=vercel&logoColor=white">



# 배포 링크
https://wanted-codestates-project-05-02.vercel.app/

# 주요화면
<img width="1044" alt="스크린샷 2022-03-05 오후 11 59 20" src="https://user-images.githubusercontent.com/22316798/156888785-1d182528-ddf5-4fdb-92b2-f94e5940817b.png">
<img width="991" alt="스크린샷 2022-03-05 오후 11 59 04" src="https://user-images.githubusercontent.com/22316798/156888790-35d21049-65e3-403c-aa0b-51bcbd3c0420.png">


# 각 팀원의 구현한 방법과 간략한 설명

## <성현님>

### src/Reducer

## 리듀서 생성

- 상태 관리를 위해 리덕스 라이브러리를 이용하여 필요한 리듀서를 만들었습니다. 
- 개인 매치 리스트, 팀 매치 리스트, 개별 매치 리스트, 매치 디테일 4개의 네트워크 요청 및 데이터를 관리합니다. 
- 각 네트워크 요청의 로딩, 에러, 데이터 상태를 가지고 있습니다. 
- 네트워크 요청은 axios 를 이용하여 진행하였으며, API 키는 .env 파일에 두어 유출되지 않도록 관리했습니다. 
- NetworkRequest.js 파일은 리덕스 이용이 생소한 팀원을 위해, 예시 코드를 작성해 둔 것입니다. 
- 로컬 환경에서 CORS 오류를 해결하기 위해, http 리덕스 미들웨어를 사용했으며 배포 후 api 요청을 고려해 팀원들에게 프록시 서버를 요청하여 배포 전에 수정했습니다. 

<img width="333" alt="스크린샷 2022-03-05 오후 6 23 29" src="https://user-images.githubusercontent.com/70502670/156877168-0521361d-05e0-4344-ae80-69591206d465.png">

### src/components/UserInfoPage/CheerChat.js && src/service/EditFirebaseDB.js

## 응원 한마디 컴포넌트 생성

- firebase firestore 사용
  응원 한마디의 데이터 저장 및 불러오기 기능을 구현하기 위해 디비가 필요했고, firebase firestre 을 사용했습니다. 
  데이터를 받아와 비동기적으로 필요한 작업들을 수행하는 함수를 구현했습니다.(데이터 변환 및 ui 컴포넌트 생성)
  
  <img width="1440" alt="스크린샷 2022-03-05 오후 6 41 43" src="https://user-images.githubusercontent.com/70502670/156877778-e9e504c1-6b8d-4ae7-9f65-4faa068518ca.png">

- 애니메이션 추가
  오른쪽에서 왼쪽으로 나타내기 애니매이션을 css keyframe 을 이용하여 구현했습니다. 

- ui 구현

<img width="1440" alt="스크린샷 2022-03-05 오후 6 34 48" src="https://user-images.githubusercontent.com/70502670/156877525-dbd9bfc0-4bc0-409e-a0a6-5f5641fdbbf2.png">

### src/pages/UserInfoPage.js

## 컴포넌트 병합 && 페이지 필요 데이터 요청 및 관리

- 해당 페이지에 필요한 모든 컴포넌트를 결합하고 필요한 데이터의 상태 관리를 맡아 props 로 넘겨주는 코드를 작성했습니다. 
  이후 props 받아온 값을 이용할 수 있도록 해당 컴포넌트에서 코드를 변경해주었습니다. 
  (주요 결합 컴포넌트 : 헤더, 그래프 3개, 응원 한마디, 트랙-카드 ui)
- 개별 브랜치를 머지하던 과정에 발생한 오류를 팀원들 소통하며 직접 픽스, 머지하였습니다. 
  (주요한 오류는 상태관리, 네트워크 요청, 패키치, 파일명, ui 등에서 발생하였습니다. )
  
## <수영님>

#### 구현

- 차트 및 그래프

#### 구현방법

- react-apexcharts라는 라이브러리를 사용하여 구현하였습니다.
- 크기, 색상, 승률, 순위등의 데이터를 전달받아 렌데링 해줄 수 있도록 구현하였습니다.

#### 구현한 이유

- 보다 직관적이고 질 좋은 애니메이션등의 UI/UX를 보여 줄 수 있는게 라이브러리 였고, 커스텀해서 추후에도 반복 사용 가능할 것 같아 선택하여 사용했습니다.

## <윤구님>

# 제작한 컴포넌트

- UserInfoPage/infoContainer.js
- UserInfoPage/KarTable.js
- UserInfoPage/Match.js
- UserInfoPage/MatchDetail.js
- UserInfoPage/MatchListContainer.js
- UserInfoPage/TabButton.js
- UserInfoPage/TrackTable.js

# 구현 내용

카트라이더 유저정보 페이지에서 유저 매치 기록을 이용하여 유저 매치 기록 및 통계를 보여주는 페이지에서 api를 이용하여 데이터를 가공했습니다

# 구현 방법

넥슨에서 제공하는 카트라이더 api로 데이터를 호출한 후 필요한 데이터를 가공하여 사용했습니다.

- 유저닉네임을 쿼리로 받아와 api를 호출하여 유저의 코드를 받아오고 그 코드를 이용하여 유저의 매치정보를 가져와 매치 종료 시간, 매치 결과, 사용한 카트, 매치를 진행한 트랙, 매치기록 정보를 이용하여 매치 기록을 볼 수 있는 페이지를 만들었습니다.
  오른쪽 끝 버튼을 클릭하여 매치 상세정보 api를 호출하고 매치에서 플레이한 유저들의 카트와 기록, 등수, 닉네임을 보여주게 했습니다. 상제정보에서 유저 닉네임을 클릭하면 그 유저 정보 페이지로 이동합니다.

![matchfield](https://user-images.githubusercontent.com/85268135/156778113-9948655b-2fa8-43f6-9334-b41edcc820d7.gif)

![change](https://user-images.githubusercontent.com/85268135/156781092-b3a5521d-6f1a-445d-825c-0de9a0f6fc3c.gif)

- 유저의 경기 기록을 트랙별로 구분하여 표로 나타내어 보여줍니다. 트랙별 경기 횟수, 승률, 최고기록을 보여줍니다. 횟수를 기준으로 내림차순 정렬되어 있습니다.

![track](https://user-images.githubusercontent.com/85268135/156779157-754b5e3b-c353-4e8a-9e57-0641aa9b90d1.gif)

- 유저의 경기 기록을 이용한 카트별로 구분하여 표로 나타냅니다. 카트별 이용 횟수, 승률, 리타이어율을 보여주며 카트별로 최대 상위 4개까지 기록과 트랙을 보여줍니다.

![kart](https://user-images.githubusercontent.com/85268135/156781475-23b5162d-2cb4-46c8-97ae-5c0e8c9374f3.gif)

## <정민님>

### 구현한 내용
   1. 랭크 페이지 UI 작업 <br>
      **pages/RankPage.js**
   - 넥슨 랭크 페이지 보고 클론 코딩을 하였습니다.
   - 데스크탑 width:1000px,테블릿 width:820px,모바일 width:420px 으로 반응형을 구현해주었습니다.
   2. 랭크 페이지 - 가이드 모달창 만들기 <br>
      **componets/RankInfoPage/GuideModal.js**
   - 모달 컴포넌트를 따로 제작해 position으로 모달 창을 화면에 띄어 주고, 백그라운드 화면은 rgba로 투명도를 주어 모달창을 조금 더 눈에 띄게 처리해주었습니다.
   3. 랭크 페이지 - 개인전/팀전 탭기능 <br>
      **componets/RankInfoPage/RankTab.js**
   - useState(TabNum)을 만들어 0일 경우는 개인, 1일 경우는 팀으로 설정해주고 0일 경우에는 indiDatas 받아게 하고 1일 경우는 teamDatas 받아오게 하여 하위 리스트에 데이터가 렌더링 되게 해주었습니다.
   4. 랭크 페이지 - MORE 버튼 구현 <br>
      **componets/RankInfoPage/MoreButton.js**
   - 기본 useState(indiNum)에 처음 출력한 갯수를 정하고(30으로 정함), 배열로 받아온 datas에서 filter기능으로 인덱스가 indiNum보다 작을 경우만 출력하게 해주었습니다.
     그리고 more버튼을 클릭하면 indiNum의 수를 2배로 늘려 데이터를 더 보여줄 수 있게 구현하였습니다.
   5. 로딩 컴포넌트 구현 <br>
      **componets/common/Loading.js**
   - react-loader-spinner라는 라이브러리를 사용하였으며, 필요한 메세지를 props로 전달 받아 랭크페이지 뿐만 아니라 여러 페이지에서 사용할 수 있도록 공통 컴포넌트로 만들어 주었습니다.

### 주요 화면 캡쳐 사진

<img width="180" alt="스크린샷 2022-03-05 오후 2 36 53" src="https://user-images.githubusercontent.com/56882147/156871408-f2113184-fb11-4283-b4e5-bbb0f310b3fb.png">
<img width="100" alt="스크린샷 2022-03-05 오후 2 35 59" src="https://user-images.githubusercontent.com/56882147/156871404-e7621d1e-41d3-478b-a465-f1aeb3c9b240.png">
<img width="68" alt="스크린샷 2022-03-05 오후 2 52 02" src="https://user-images.githubusercontent.com/56882147/156871413-3b0cad7c-5191-4241-85ee-dfba37e4fb1e.png">
<img width="350" alt="Loading" src="https://user-images.githubusercontent.com/56882147/156871414-c31a1747-d883-4db1-88e5-428a00b43df4.gif">
<img width="350" alt="MoreBtn" src="https://user-images.githubusercontent.com/56882147/156871416-5b99dd7a-a6d1-4136-b822-1ab762b43025.gif">

## <승연님>

### 구현한 내용
  ## * 유저 페이지에서 프로필 컴포넌트<br>
  **1. UserInfoPage/Profile.js**
   - 넥슨 유저 페이지에 프로필 정보가 있는 담당하여 컴포넌트를 만들어 구현하였습니다. <br>
   - 리덕스에서 개인 매치 리스트 데이터에서 캐릭터 값을 가져와 이미지 링크와 연결하였습니다. <br>
    - 캐릭터값과 character.json에서 id값이 일치하면 해당 객체에 named을 가져와서 캐릭터 마우스 호버시 캐릭터 이름이 보이도록 애니메이션을 넣었습니다. <br>
    - 개인전 팀전 버튼 클릭시 버튼 색상을 변경되고, 링크 주소도 변경이 되도록 하였습니다. <br>

  <br>

  **2. UserInfoPage/ModalUserReport.js**
    - 모달 컴포넌트로 프로필에서 신고하기 버튼을 누르면 모달이 나오도록 구현하였습니다. <br>
    - 신고하는 내용 없이 확인을 누르면 내용입력해달라고 하는 모달창이 하나 더 나오고 뒤에 백그라운 화면이 더 어두워지게 하였습니다.  <br>

  <br>

  **3. UserInfoPage/ModalTxt.js**
  - 신고를 접수하면 접수를 확인했다고 하는 모달창이 나오고 확인을 누르면 모달창이 사라지게 구현하였습니다. <br>

   <br>

  **4. UserInfoPage/UserMatch.js**
  - 매칭 시뮬레이터 컴포넌트에 쿼리로 닉네임을 받아오고 css 애니메이션을 사용하여 배경에 그라데이션 애니메이션을 주었습니다. infinite를 주고 백그라운드 포지션을 움직여서 그라데이션을 애니메이션을 구현하였습니다.
  
  <br>

  **5. UserInfoPage/ModalShare.js**
  - 프로필에서 공유하기 버튼이 나오면 모달창이 생성됩니다. 
  - 페이스북을 누르면 새창에 페이스북 공유하기 페이지가 나오게 됩니다.
  - 'URL복사'를 누르면 복사가 되었다는 모달창이 나옵니다.

### 주요 화면 캡쳐 사진

<img alt="유저프로필" src="https://user-images.githubusercontent.com/54584337/156882861-cb56d8aa-425e-41bc-8963-d60c874b79ec.png">
<img alt="모달" src="https://user-images.githubusercontent.com/54584337/156882862-6dffa96f-e162-4ac1-b744-46cbe8f3e3f0.png">
<img alt="이중 모달" src="https://user-images.githubusercontent.com/54584337/156882864-40b1dbc3-8722-4d59-a2bc-c8d9dfd317d5.png">

![ne-min](https://user-images.githubusercontent.com/54584337/156883626-1db80503-a62f-4e0f-ac9a-a78fbce24d6e.gif)
![nes-min](https://user-images.githubusercontent.com/54584337/156883673-58e47b74-5a98-419b-944c-7023496298d1.gif)

# 각 팀원별 어려웠던 점

## <성현님>

- 리덕스 세팅 및 필요 함수 생성을 맡았는데, 팀원들과 어떤 데이터가 어떤 형식으로 필요한 지 이야기하는 과정에서 변경사항이 계속 발생했고, 이틀이라는 시간이 촉박하게 느껴졌다. 
- 구현할 내용이 많아서 페이지의 컴포넌트 병합이 늦어졌고 여러 팀원들이 동시에 코드를 병합하여 여러 오류가 발생했다. 오류 픽스 및 병합을 팀원들에게 화면을 공유하며 직접 진행했는데 내가 짠 코드가 아니다 보니 수정이 어려웠다. 그래도 라이브 코딩을 하면서 팀원들과 코드에 대한 생각도 나누도, 문제를 마주했을 때 더 빠르게 해결법을 찾을 수 있어서 좋았다.

## <정민님>

- 넥슨 랭크 페이지를 보고 클론 코딩을 하다보니 CSS부분에서 나만의 방식이 아니라 똑같이 하려고 하다보니 생각보다 원하는 CSS작업이 이루어지지 않아서 많은 고생을 하였습니다.<br>
  **해결방법**은 구글 개발자도구에서 Elements창을 활용해 CSS가 잘 적용 되는지, 그리고 어느 부분을 수정하면 내가 원하는 CSS가 나오는지를 확인하면서 작업해주었습니다.
- 다른 팀원이 넥슨 API를 활용해 데이터를 받아와서 랭크 페이지에 필요한 데이터를 가공해주었습니다.<br>
  그런데 데이터 통신을 1번을 하는게 아니라 모든 매치 리스트 조회를 하고, 그 조회된 matchType으로 특정 매치의 상세 정보를 조회 해야 하는 상황이여서, 통신을 200번씩 보내다 보니 네트워크 에러인 Too many error가 발생하였습니다.<br>
  팀원들과 다양한 시도를 하였고(넥슨api 데이터 양 늘리기, 프락시 서버 만들기 등), 통신을 200번에서 50번으로 줄여 최대한 로딩 시간을 줄이게 해주었습니다.

## <윤구님>

### 어려웠던 점
* 교차 출처 리소스 공유 (cors) 에러가 발생하여 데이터를 받아오지 못하는 문제가 있어 서버를 만들지 않고 해결하려 시도하였습니다.
* api로 받아온 데이터에서 원하는 정보를 이끌어내는 과정에서 예상 못한 데이터를 가져와 데이터를 고쳐서 사용하고 데이터를 필터링하는 과정에서 복잡함을 느꼈습니다.

### 해결 방법
* http-proxy-middleware 패키지를 이용해 프록시 설정을 하여 교차 출처 리소스 공유 에러를 해결하였습니다.
* 데이터 필터링은 JS array 메소드를 활용하여 해결하였습니다.

## <수영님>



## <승연님>

### 구현하며 어려웠던 점
- 모달창을 만들고 그 위에 새로운 모달창이 생겼을 때 접수가 완료할 경우에는 모달창을 모두 사라지게 하는 것이 어려웠습니다.<br>
- 개인 매치 리스트에서 캐릭터 값을 가져와서 화면에 보여지게 하는 것이 어려웠습니다. 팀원분이 해결을 해주었습니다.
### 해결방법 
- 팀원이 캐릭터 값을 props로 받을때 괄호로 받으면 콘솔에는 잘 나오지만 이미지 주소가 오브젝트로 들어간 것을 확인 한 후 객체로 담아서 값을 제대로 전달 받을 수 있었습니다. <br>
- 모달창 위에 새로운 모달창을 보낼때 이전 모달창에 보냈던 상태 값을 같이 보내 확인 버튼을 누르면 같이 상태가 변경하도록 하여 해결하였습니다.
