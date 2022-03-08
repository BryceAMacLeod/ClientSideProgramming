// IIFE
(() => {

    //create map in leaflet and tie it to the div called 'theMap'
    let map = L.map('theMap').setView([44.6,-63.6], 4);
    // using the provided plane 2 icon
    let planeIcon = L.icon({
        iconUrl: 'plane2.png',
        iconSize: [50,50]
    })  
    //creating a geoJSON layer
    var geoLayer = L.geoJSON();
    // default map appearance
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    // calling the updateMap method that updates the markers in the map
    setInterval(updateMap, 7000);

    function updateMap() {
        // fetching data
        fetch("https://opensky-network.org/api/states/all")
        .then(response => response.json())
        .then(data => {
            // empty array to push flights from canada to
            let geoJson = [];
            // getting the flights from canada
            updateMapData(data, geoJson);
            // creating a usable object for the mapping software
            let geoJsonCollection = {
                "type": "FeatureCollection",
                "features": geoJson 
            }
            // clearing out the old map data
            if(geoLayer !== undefined) {
                geoLayer.clearLayers();
            }
            // adding in the new map data
            geoLayer = L.geoJSON(geoJsonCollection, {
                // giving the marker the icon,
                // and rotating the icon to match the plane's trajectory
               pointToLayer:  function(geoJsonPoint, latlng) {
                   return L.marker(latlng, {
                       icon: planeIcon,
                       rotationAngle: geoJsonPoint.properties.TrueTrack
                   });
               } 
               // adding in the popup from each plane's data
            }).bindPopup((layer) => {
                return layer.feature.properties.popupContent;
                // adding to map
            }).addTo(map);
        });
    }
    // filters the fresh data to flights from canada
    // and sets the coordinates, popup content with relevant data
    // and gets the trajectory 'true track'
    function updateMapData(mapData, geoJson){
        mapData.states
        .filter((flight) => flight[2] === "Canada")
        .map(flight => {
            let geoJsonFeature = {
                "type": "Feature",
                "properties": {
                    "popupContent": "<ul>" +
                        "<li>Transponder Address: "+  flight[0] + "</li>" +
                        "<li>Callsign: " + flight[1] + "</li>" +
                        "<li>Country of Origin: " + flight[2] + "</li>" +
                        "<li>Latitude: " + flight[6] + "</li>" +
                        "<li>Longitude: " + flight[5] + "</li>" +
                        "<li>On Ground: " + flight[8] + "</li>" +
                        "<li>True Track: " + flight[10] + "</li>" +
                        "</ul>",
                    "TrueTrack": flight[10]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates":[flight[5],flight[6]]
                }
            }
            // adds the new 'feature' (point/plane) to storage array
            geoJson.push(geoJsonFeature);
            // for assignment demonstration
            console.log(geoJsonFeature);
        })
        // for assignment demonstration
        // console.log(mapData);
        // console.log(mapData.states.filter((flight) => flight[2]==="Canada"))
    }
})()