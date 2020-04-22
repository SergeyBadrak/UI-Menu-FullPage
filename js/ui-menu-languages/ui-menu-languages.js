(function ( $ ) {

    var el = '<div class="lang-dropdown"></div>';
    var cloneEl = $('.lang-switcher ul:first').clone();

//    $('.lang-switcher ul:first').after(el);
    $('.lang-switcher').append( el );
    $('.lang-dropdown').append( cloneEl );

}( jQuery ));
