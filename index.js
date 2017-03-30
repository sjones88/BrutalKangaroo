$(() => {
	var $blue = $('div#blue');
	$blue.css({"background-color": "blue", "height": "100px", "width": "100px"});
	$('.container').append($blue);
})