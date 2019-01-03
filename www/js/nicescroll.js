
(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#828282", cursorwidth: '6', cursorborderradius: '10px', background: 'none', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

})(jQuery);

    // custom scrollbar MENU

(function() {
    "use strict";

    // custom scrollbar

    $(".mobile-side-menu").niceScroll({styler:"fb",cursorcolor:"#828282", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: 'none', spacebarenabled:false, cursorborder: '0'});

	
    $(".mobile-side-menu").getNiceScroll();
    if ($('nav.gn-menu-wrapper').hasClass('mobile-side-menu-collapsed')) {
        $(".mobile-side-menu").getNiceScroll().hide();
    }

})(jQuery);



