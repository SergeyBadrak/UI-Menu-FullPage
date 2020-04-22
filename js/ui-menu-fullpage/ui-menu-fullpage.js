// Full Page Menu with Page Scrolling
// Dont use jQuery SLIM. Use only min.

(function ( $ ) {

    var menuBtn = '#menu_btn';
    var menuContainer = '.main-navigation';
    var menuLocalPageItem = '.local-page-items';

    menu ();
    clickToScroll ();

// --- Menu Init
    function menu () {
        $(menuBtn).click(function (event) {
        event.preventDefault();
        showMenu ();
    });
    }

// --- Click and Scrol to local page content
    function clickToScroll () {
        $(menuContainer + ' ' +  menuLocalPageItem).on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500, "swing");
            showMenu();
    });
    }

// --- Show / Hide menu
    function showMenu () {
        $('.menu_ico').toggleClass('menu_ico_close');
        $('.overlay-m').toggleClass('menu_is_visible');
    }

})(jQuery);
