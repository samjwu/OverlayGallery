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
    $button.attr("src", "https://res.cloudinary.com/teepublic/image/private/s--21aFqFwq--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1466431125/production/designs/554244_1.jpg");

    $overlay.show();
});