$(function (){

    /* Nav Toggle on mobile */
    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function (event){
        event.preventDefault();

        $(this).toggleClass('active');
        nav.toggleClass('show');
    });










    let intro = $('#intro');
    let header = $('#header');

    headerScroll();

    $(window).on('scroll resize', function () {
        headerScroll();
    });

    function headerScroll() {
        let introH = intro.innerHeight();
        let headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if (scrollTop >= (introH - headerH)) {
            header.addClass('header--dark');
        } else {
            header.removeClass('header--dark');
        }
    }
})