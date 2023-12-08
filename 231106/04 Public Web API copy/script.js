let lat = 37.5025398;
let lng = 127.0248679;

let mapContainer = document.querySelector('#map');
mapOption = {
  center: new kakao.maps.LatLng(lat, lng),
  level: 3,
};

let map = new kakao.maps.Map(mapContainer, mapOption);

let positions = [
  {
    title: `<div>이젠아카데미 강남점</div>`,
    latlng: new kakao.maps.LatLng(37.5025398, 127.0248679),
  },
  {
    title: `<div>그린아카데미 강남점</div>`,
    latlng: new kakao.maps.LatLng(37.4997906, 127.0282769),
  },
  {
    title: `<div>코리아IT 강남점</div>`,
    latlng: new kakao.maps.LatLng(37.5000065, 127.0356027),
  },
  {
    title: `<div>더조은아카데미 강남점</div>`,
    latlng: new kakao.maps.LatLng(37.4944858, 127.030066),
  },
];

let makeOverListener = (map, marker, infowindow) => {
  return () => {
    infowindow.open(map, marker);
  };
};

let makeOutListener = (infowindow) => {
  return () => {
    infowindow.close();
  };
};

for (let i = 0; i < positions.length; i++) {
  let marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
  });

  let infowindow = new kakao.maps.InfoWindow({
    content: positions[i].title,
  });

  kakao.maps.event.addListener(
    marker,
    'mouseover',
    makeOverListener(map, marker, infowindow)
  );

  kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}
