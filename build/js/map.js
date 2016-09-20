function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 2,
        styles: [
            {
                "featureType": "water"
                , "elementType": "geometry.fill"
                , "stylers": [ { "color": "#ffffff" } ]
            }
            ,{
                "featureType": "water"
                , "elementType": "labels.text"
                , "stylers": [ { "visibility": "off" } ]
            }
            ,{
                "featureType": "administrative.country"
                , "elementType": "geometry.stroke"
                , "stylers": [ { "visibility": "off" } ]
            }
            ,{
                "featureType": "administrative"
                , "elementType": "labels.text"
                , "stylers": [ { "visibility": "off" } ]
            }
            ,{
                "featureType": "landscape"
                , "elementType": "geometry"
                , "stylers": [ { "color": "#000000" } ]
            }
            ,{
                "featureType": "road"
                , "stylers": [
                    { "hue": "#ffaa00" }
                    , { "saturation": 86 }
                    , { "lightness": -8 } ]
            }
            ,{
                "featureType": "poi"
                , "stylers": [ { "visibility": "off" } ]
            }
        ]

    });
}