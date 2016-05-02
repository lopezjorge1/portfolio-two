$("#recent-work").click(function(e) {
    e.preventDefault();

    var n = $(".hero").height();
    $('html, body').animate({ scrollTop: n }, 1000);
});

$("#about-me").click(function(e) {
    e.preventDefault();

    var n = $(".hero").height() + $(".work").height();
    $('html, body').animate({ scrollTop: n }, 1000);
});

$("#contact-me").click(function(e) {
    e.preventDefault();

    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 1000);
});