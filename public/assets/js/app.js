"use strict";function initMap(a){console.log("hola");var e={lat:-25.363,lng:131.044},t=new google.maps.Map(document.getElementById("mapa"),{zoom:4,center:e}),n=void 0;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){n={lat:a.coords.latitude,lng:a.coords.longitude};var e=new google.maps.Map(document.getElementById("mapa"),{zoom:14,center:n});new google.maps.Marker({position:n,map:e})}):handleLocationError(!1,t,t.getCenter())}function handleLocationError(a,e,t){e.setPosition(t),e.setContent(a?"Error: The Geolocation service failed.":"Error: Your browser doesn't support geolocation.")}function calculateAndDisplayRoute(a,e,t){var e=new google.maps.DirectionsRenderer,a=new google.maps.DirectionsService;e.setMap(map),a.route({origin:t,destination:{lat:state.selectedStation.lat,lng:state.selectedStation.long},travelMode:"DRIVING"},function(a,t){if("OK"==t){e.setDirections(a);var n=a.routes[0].legs[0].distance.text;$("#km").text(n)}else window.alert("Directions request failed due to "+t)})}var root=$(".root"),render=function(a){a.empty();var e=$('<div class="wrapper"></div>');switch(state.pagina){case null:e.append(Home(updated));break;case 1:e.append(Recicla(updated));break;case 2:e.append(MapaRecicla(updated));break;case 3:e.append(RutaRecicla(updated));break;case 4:e.append(FormAcopio(updated));break;case 5:e.append(SuccesAcopio(updated));break;case 6:e.append(TipsR(updated));break;case 7:e.append(Contacto(updated))}a.append(e),2==state.pagina&&initMap()},updated=function(){render(root)},state={pagina:null};$(function(a){var e=$(".root");render(e)});var Home=function(a){var e=$('<div class="center-align"></div>'),t=$('<div class="recicla"><a class="waves-effect waves-light btn-large actions">Recicla</a></div><br>'),n=$('<div><a class="waves-effect waves-light btn-large actions">Cargar Nuevo Punto</a></div><br>'),i=$('<div><a class="waves-effect waves-light btn-large actions">Tips</a></div><br>');return e.append(t),e.append(n),e.append(i),t.on("click",function(e){e.preventDefault(),state.pagina=1,a()}),n.on("click",function(e){e.preventDefault(),state.page=2,a()}),i.on("click",function(e){e.preventDefault(),state.page=3,a()}),e},locationDetail=function(a){var e=$('<div class=""></div>'),t=$('<span class=""></span>'),n=$('<span class = "ruta"></span>');return e.append(t),e.append(n),n.on("click",function(a){a.preventDefault()}),e},MapaRecicla=function(a){var e=$('<div class=""></div>'),t=$('<div id="mapa"></div>'),n=$('<div class=""></div>');return e.append(t),e.append(n),state.locations.map(function(a){locationDetail(n,a)}),e},Recicla=function(a){var e=[{name:"Plastico",img:""},{name:"Vidrio",img:""},{name:"Ropa",img:""},{name:"Aceite",img:""},{name:"Cartón y Papel",img:""},{name:"Pilas",img:""}],t=$('<div class="container"></div>'),n=$('<div class="row"><div>'),i=$('<div class="center-align col s12">Recicla</div>'),o=$('<div class="center-align col s12"></div>'),c=$('<div><a class="waves-effect waves-light btn-large actions">Volver</a></div>');return e.forEach(function(e){var t=$('<div class="col s6" data-id = "'+e.name+'"></div>'),n=$('<a class=""><span class=""></span></a>'),i=$('<h5 class="morado">'+e.name+"</h5>");t.append(i),t.append(n),o.append(t),t.on("click",function(e){e.preventDefault(),state.material=$(e.currentTarget).data("id"),state.pagina=2,a()})}),c.on("click",function(e){e.preventDefault(),state.pagina=null,state.material=null,state.locations=null,a()}),n.append(i),n.append(o),t.append(n),t.append(c),t},filerByMaterial=function(a){};