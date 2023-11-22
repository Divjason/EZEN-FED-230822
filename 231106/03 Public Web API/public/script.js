let mapContainer = document.querySelector('#map');
let lat = 37.5025398;
let lng = 127.0248679;

mapOption = {
  center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
  level: 3, // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption);

let markerPosition = new kakao.maps.LatLng(lat, lng);

let marker = new kakao.maps.Marker({
  position: markerPosition,
});

marker.setMap(map);

let iwContent = `<div style="padding:5px; font-size: 0.8em"><a href="https://gn.ezenac.co.kr/" target="_blank">이젠아카데미 강남점</a></div>`;
let iwRemoveable = true;

let infowindow = new kakao.maps.InfoWindow({
  content: iwContent,
  removable: iwRemoveable,
});

kakao.maps.event.addListener(marker, 'click', () => {
  infowindow.open(map, marker);
});
