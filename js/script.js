function init(){     
	var myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 7
	});
	var myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Москва!', 
            balloonContent: 'Столица России' 
        });
};
$(document).ready(function() {
	ymaps.ready(init);
});