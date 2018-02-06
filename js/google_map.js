
var google;

function init() {
    var myLatlng = new google.maps.LatLng(40.168212, 44.522218);
    var mapOptions = {
      zoom: 21,
      center: myLatlng
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"It's my location",
        icon: 'images/loc.png'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', init);