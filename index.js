const blue = () => {
	var $blue = $('div#blue')[0];
	$blue.css({"background-color": "blue", "height": "100px", "width": "100px"});
	$('.container').append($blue);
};

$(blue());