var $overlay = $("<div id = 'overlay'></div>");

$("body").append($overlay);

var $image = $("<img>");

$overlay.append($image);

var $button = $("<img id = 'closebutton'>");

$overlay.append($button);


$("#gallery a img").click(function(event) {
    event.preventDefault();

    var imgsrc = $(this).attr("src");
    $image.attr("src", imgsrc);
    $button.attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Simpleicons_Interface_power-button-symbol.svg/2000px-Simpleicons_Interface_power-button-symbol.svg.png");

    $overlay.show();
});

$button.click(function() {
    $($overlay).hide();
});