// 카카오 맵을 활용해서 우리의 위치를 파악해보자!!
// 카카오 맵을 활용해서 전국에 존재하는 캠핑장을 마커로 찍어보자!
// https://github.com/public-apis/public-apis
// https://apis.map.kakao.com

//지도를 담을 영역의 DOM 레퍼런스
let container = document.querySelector("#map");
let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
