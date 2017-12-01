var width = 1000;
var height = 1000;

function onMouseMove(event){
	var diffX = event.offsetX - (width / 2.0);
	var diffY = event.offsetY - (height / 2.0);

	var allLayers = $('.layer');
	for (var i = 0; i < allLayers.length; i++) {
		var layerElem = allLayers[i];
	
		var amountX = parseFloat(layerElem.getAttribute('amt-x') || 0 );
		var amountY = parseFloat(layerElem.getAttribute('amt-y') || 0 );

		var x = amountX * diffX;
		var y = amountY * diffY;

		layerElem.style.transform = 'translate(' + x + 'px,' + y + 'px)';
	}

}

$(document).ready(function() {
	$('#container').on('mousemove', onMouseMove);

});