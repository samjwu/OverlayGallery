var $overlay = $("<div id = 'overlay'></div>");

$("body").append($overlay);

var $image = $("<img>");

$overlay.append($image);

var $button = $("<img id = 'xbutton'>");

$overlay.append($button);


$("#gallery a").click(function(event) {
    event.preventDefault();

    var imgsrc = $(this).attr("href");
    $image.attr("src", imgsrc)
    $button.attr("src", "https://image.flaticon.com/icons/svg/69/69381.svg")
});