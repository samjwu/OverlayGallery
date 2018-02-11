var $overlay = $("<div id = 'overlay'></div>");

$("body").append($overlay);

var $image = $("<img>");

$overlay.append($image);

var $button = $("<img id = 'xbutton'>");

$overlay.append($button);


$("#gallery a").click(function(event) {
    event.preventDefault();
});