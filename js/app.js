/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(anchor).offset().top - 100 + "px",
            },
            1000
        );
});

// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $(".navbar");
    let links = $("header a");
    if ($(".navbar").offset().top > 400) {
        $(header).css("background", "#f4f4f4");
        $(links).css("color", "#000");
    } else {
        // $(".navbar").addClass("navbar-expand-lg");
        $(header).css("background", "transparent");
        $(links).css("color", "#fff");
    }
});
