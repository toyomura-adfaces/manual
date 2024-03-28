$(function () {
    $(".js-map-modal").modaal();
    $(".js-modal01-01").modaal();
    $(".js-modal01-02").modaal();
    $(".js-modal01-03").modaal();
    $(".js-modal01-04").modaal();
    $(".js-modal01-05").modaal();
    $('#js-map-close').click(function () {
        $('.js-map-modal').modaal('close');
    });
    $('.js-room-close').click(function () {
        $('.js-modal01-01').modaal('close');
    });
    $('.js-room-close').click(function () {
        $('.js-modal01-02').modaal('close');
    });
    $('.js-room-close').click(function () {
        $('.js-modal01-03').modaal('close');
    });
    $('.js-room-close').click(function () {
        $('.js-modal01-04').modaal('close');
    });
    $('.js-room-close').click(function () {
        $('.js-modal01-05').modaal('close');
    });
});

