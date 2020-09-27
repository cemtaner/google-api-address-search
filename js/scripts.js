
	let latitude = null;
	let longitude = null;
	let map = null;
	let marker = null;

	function initialize() {
		var input = document.getElementById('search-address');
		let autocomplete = new google.maps.places.Autocomplete(input);
		google.maps.event.addListener(autocomplete, 'place_changed', function () {
			var place = autocomplete.getPlace();
			//console.table(place);
			//document.getElementById('city2').value = place.name;
			document.getElementById('latitude').value = place.geometry.location.lat();
			document.getElementById('longitude').value = place.geometry.location.lng();
			setCenter(place.name, place.geometry.location.lat(), place.geometry.location.lng());
		});
	}

	function init() {

		google.maps.event.addDomListener(window, 'load', initialize);

		initMap();
	}


	function initMap() {
		map = new google.maps.Map(document.getElementById("map-canvas"), {
			//This is the country and location you want to see when the map opens. latitude and longitude. You can search and find it on maps.google.com.
			center: { lat: 39.0014506, lng: 30.6868348 },
			//this is where zooming in on the map will get closer as the number increases. too close would not be a good choice.
			zoom: 6
		});
		//here you must enter the latitude and longitude of the location you want to specify when the map is first loaded.
		  var centerPosition = new google.maps.LatLng(39.925054, 32.8347552);
		//var centerPosition = new google.maps.LatLng(your latitude, your longitude);
		marker = new google.maps.Marker({
			position: centerPosition,
			map: map,
			draggable: true
		});
		marker.setIcon('img/marker.png');

		google.maps.event.addListener(marker, 'dragend', function(){
			document.getElementById('latitude').value = marker.position.lat();
			document.getElementById('longitude').value = marker.position.lng();
			setCenter("", marker.position.lat(), marker.position.lng());

		})

		google.maps.event.addListener(map,'click',function(mapsMouseEvent) {

			document.getElementById('latitude').value = mapsMouseEvent.latLng.lat();
			document.getElementById('longitude').value = mapsMouseEvent.latLng.lng();

			setCenter("", mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
		});

	}

	function setCenter(title, latitude, longitude) {

		var centerPosition = new google.maps.LatLng(latitude, longitude);
		marker.setPosition(centerPosition);
		map.setCenter(new google.maps.LatLng(latitude, longitude));
	}