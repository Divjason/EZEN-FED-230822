const getLocation = document.querySelector('#getLocation');

const showPosition = (position) => {
  document.querySelector('#result').innerHTML = `
  <b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}
  `;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener('click', (e) => {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 300000);
  } else {
    alert('지오로케이션을 지원하지 않습니다!');
  }
});
