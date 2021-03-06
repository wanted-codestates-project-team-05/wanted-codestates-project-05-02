# 구현 내용

카트라이더 유저정보 페이지에서 유저 매치 기록을 이용하여 유저 매치 기록 및 통계를 보여주는 페이지에서 api를 이용하여 데이터를 가공했습니다

# 구현 방법

넥슨에서 제공하는 카트라이더 api로 데이터를 호출한 후 필요한 데이터를 가공하여 사용했습니다.

- 유저닉네임을 쿼리로 받아와 api를 호출하여 유저의 코드를 받아오고 그 코드를 이용하여 유저의 매치정보를 가져와 매치 종료 시간, 매치 결과, 사용한 카트, 매치를 진행한 트랙, 매치기록 정보를 이용하여 매치 기록을 볼 수 있는 페이지를 만들었습니다.
  오른쪽 끝 버튼을 클릭하여 매치 상세정보 api를 호출하고 매치에서 플레이한 유저들의 카트와 기록, 등수, 닉네임을 보여주게 했습니다.

![matchfield](https://user-images.githubusercontent.com/85268135/156778113-9948655b-2fa8-43f6-9334-b41edcc820d7.gif)

-

![track](https://user-images.githubusercontent.com/85268135/156779157-754b5e3b-c353-4e8a-9e57-0641aa9b90d1.gif)

# 어려웠던 점

교차 출처 리소스 공유 (cors) 에러가 발생하여 데이터를 받아오지 못하는 문제가 있어 서버를 만들지 않고 해결하려 시도하였습니다.
api로 받아온 데이터에서 원하는 정보를 이끌어내는 과정에서 예상 못한 데이터를 가져와 데이터를 고쳐서 사용하고 데이터를 필터링하는 과정에서 복잡함을 느꼈습니다.

# 해결 방법

http-proxy-middleware 패키지를 이용해 프록시 설정을 하여 교차 출처 리소스 공유 에러를 해결하였습니다.

데이터 필터링은 JS array 메소드를 활용하여 해결하였습니다.
