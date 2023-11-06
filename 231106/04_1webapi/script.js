// 카카오 맵을 활용해서 우리의 위치를 파악해보자!!
// 카카오 맵을 활용해서 전국에 존재하는 캠핑장을 마커로 찍어보자!
// https://github.com/public-apis/public-apis
// https://apis.map.kakao.com

const lat = 37.5025398;
const lng = 127.0248679;

let container = document.querySelector("#map");
let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

//지도 생성 및 객체 리턴
let map = new kakao.maps.Map(container, options);

//마커가 표시될 위치 정의
let markerPosition = new kakao.maps.LatLng(lat, lng);

//마커 생성하기
let marker = new kakao.maps.Marker({
  position: markerPosition,
});

//지도위에 마커 출력하기
marker.setMap(map);

let iwContent = `<div><a href="https://gn.ezenac.co.kr/" target="_blank">이젠아카데미 강남점</a></div>`;
let iwRemoveable = true;

let infowindow = new kakao.maps.InfoWindow({
  content: iwContent,
  removable: iwRemoveable,
});

//마커 클릭 시, 출력되는 이벤트 정의
kakao.maps.event.addListener(marker, "click", () => {
  infowindow.open(map, marker);
});
