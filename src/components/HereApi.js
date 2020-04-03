/**
 * Moves the map to display over Berlin
 *
 // @param  {H.Map} map      A HERE Map instance within the application*/

/*function moveMap(map){
    navigator.geolocation.getCurrentPosition(function(position) {
        const icon = "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/child-512.png"
        const iconObject = new window.H.map.Icon(icon, {size:{w: 56, h: 56}})
        //guardo la posicion en una constante
        const CurrentPosition = {lat:position.coords.latitude, lng:position.coords.longitude}
        //creo una instacia marcador de donde estoy ubicada
        const marker = new window.H.map.Marker(CurrentPosition, {icon:iconObject})
        //agrego el marcador al mapa
        map.addObject(marker)
        //agrego el mapa en la localizacion actual de mi dispositvo
        map.setCenter(CurrentPosition);
        //agrego un zoom por defecto
        map.setZoom(19);
      });
    
  }
  
  /**
   * Boilerplate map initialization code starts below:
   */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
/*var platform = new window.H.service.Platform({
    apikey: "wox89AdpK09BQJptcDqxR-KK2hb6fStBPrjvd62pwb0"
  });
  var defaultLayers = platform.createDefaultLayers();*/

//Step 2: initialize a map - this map is centered over Europe
/*var map = new window.H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: {lat:50, lng:5},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
  });*/
// add a resize listener to make sure that the map occupies the whole container
//window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
//var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

// Create the default UI components
//var ui = window.H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
/*window.onload = function () {
    moveMap(map);
  }*/
