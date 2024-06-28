function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function initMap() {
  const initialLocation = { lat: -23.5618, lng: -46.6436 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: initialLocation,
    disableDefaultUI: true,
  });

  let markers = [];
  for (let i = 0; i < 10; i++) {
    let lat = getRandomNumber(-0.02, 0.02) + initialLocation.lat;
    let lng = getRandomNumber(-0.02, 0.02) + initialLocation.lng;
    let marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: 'Mestre da mesa: ' + (i + 1)
    });
    markers.push(marker);
  }

  markers.forEach(function(marker) {
    new google.maps.Marker({
      position: marker.position,
      map: map,
      title: marker.title
    });
  });
}

window.addEventListener("load", () => {
  initMap();
});
