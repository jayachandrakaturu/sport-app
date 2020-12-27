// $(window).scroll(function () { $(".navbar-fixed-top").toggleClass("scrolled", $(this).scrollTop() > 200) }),

$(document).ready(function () {
    $(".select-dropdown .dropdown-menu a").on("click", function (e) {
        $(e.currentTarget).parents(".select-dropdown").find(".dropdown-toggle").html($(this).html() + '<span class="fa fa-angle-right"></span>')
    });

    $("#create_page").on("click", function (e) {
        $('.clsAfterCreate').removeClass('d-none');
        $('.clsBeforeCreate').addClass('d-none');
    });
});


$(document).ready(function () {

    $("#forget_pin").on("click", function () {
        $('.clsMobile_verify').removeClass('d-none');
        $('.clsBeforeLogin').addClass('d-none');
    });

    $("#get_otp").on("click", function () {
        $('.clsVerify').removeClass('d-none');
        $('.clsMobile_verify').addClass('d-none');
    });

    $("#newpin_generate").on("click", function () {
        $('.clsNewPinLogin').removeClass('d-none');
        $('.clsVerify').addClass('d-none');
    });

    $("#update_pin").on("click", function () {
        $('.clsBeforeLogin').removeClass('d-none');
        $('.clsVerify').addClass('d-none');
        $('.clsNewPinLogin').addClass('d-none');
    });

    /* toggle start */

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('.toggled').toggleClass('open');
    });


    $('.hamburger').click(function () {
        $(".clsRightBlock").toggleClass("clsWidth-90");
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#filterOpen").on("click", function () {
        $('.filterContainer').toggleClass('active');
    });

    $("#filterClose").on("click", function () {
        $('.filterContainer.active').removeClass('active');
    });
});