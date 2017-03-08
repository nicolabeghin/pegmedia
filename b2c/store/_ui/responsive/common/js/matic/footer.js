
jQuery( document ).ready(function() {
    jQuery("footer #footer2 .contenitore-selettore-lingua > ul > li").click(function(){
        if (jQuery(".mondolingua").hasClass("aperto")){
            jQuery(".mondolingua").slideUp('slow',function(){
                jQuery(".mondolingua").removeClass("aperto");
                jQuery(".mondolingua").addClass("chiuso");
            });
        }else{
            jQuery(".mondolingua").removeClass("chiuso");
            jQuery(".mondolingua").addClass("aperto");
            jQuery(".mondolingua").slideDown('slow');
            jQuery("html, body").animate({ scrollTop: $(document).height() }, "slow");
        }
    });
});



jQuery(document).ready(function () {

    jQuery('.scrollup').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
});
jQuery( window ).resize(function() {
    posiziona_scroll_to_top();
});
function posiziona_scroll_to_top(){
    var larghezza_pagina=jQuery("#pagina").width();
    var margine_scrolltop=0;
    if(larghezza_pagina>=1600){
        margine_scrolltop=15;
        jQuery('.scrollup').css('margin-right',(-(larghezza_pagina/2))-margine_scrolltop-(jQuery('.scrollup').width()));
    }else{
        margine_scrolltop=0;
        jQuery('.scrollup').css('margin-right',-larghezza_pagina/2);
    }

}

jQuery( window ).load(function() {
    jQuery(window).scroll(function () {
        if ( (jQuery(this).scrollTop() > jQuery("#pagina > header").height()*2) ) {
            jQuery('.scrollup').fadeIn();
            jQuery('#pagina > header').addClass("fixed");
            jQuery('#pagina > header').removeClass("relative");
        } else {
            jQuery('.scrollup').fadeOut();
            jQuery('#pagina > header').removeClass("fixed");
            jQuery('#pagina > header').addClass("relative");
        }
    });
	console.log("prova");
});
           
                            
