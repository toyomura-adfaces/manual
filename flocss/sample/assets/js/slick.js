
$(function () {
    $("#js-slick").slick({
        arrow: true,
        asNavFor: "#js-sub",
        slidesToShow: 1,
    });
    $("#js-sub").slick({
        //ここにオプション
        asNavFor: "#js-slick",
        focusOnSelect: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    })
});

$(function () {
    $(".js-slick-location").slick({
        arrow: false,
        slidesToShow: 6,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
