
jQuery( document ).ready(function() {
    jQuery("#sliderhome a.scrollbottom").css("margin-left",-(jQuery("#sliderhome a.scrollbottom").width()/2));
    centrascopribox();
    centrascopriboxgrande();
    jQuery("#sliderhome a.scrollbottom").click(function(){
        jQuery('html, body').animate({
            scrollTop: jQuery(".scrollbottom").offset().top - 180
        }, 500);
    });

    jQuery( window ).scroll(function() {
        scrolltobottomcambiaclasse();
    });
});

jQuery( window ).resize(function() {
    jQuery("#sliderhome a.scrollbottom").css("margin-left",-(jQuery("#sliderhome a.scrollbottom").width()/2));
    centraSliderInfoAltezza();
    setaltezzaslider();
    setposizionecontroller();
    window.setTimeout(setpositionscrolldown(),1000);
    centrascopribox();
    centrascopriboxgrande();
    scrolltobottomcambiaclasse();
});

var sliderhome = new Swiper('.swiper-container-full-screen', {
        pagination: '.swiper-pagination',
        effect:'fade',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
});

//centro la descrzione dello slider sull'asse y per ogni slide a secondo dell'altezza
jQuery( window ).load(function() {
    setaltezzaslider();
    centraSliderInfoAltezza();
    setposizionecontroller();
    window.setTimeout(setpositionscrolldown(),1000);
    scrolltobottomcambiaclasse();

});

function centraSliderInfoAltezza(){
    var altezzasezioneslider=jQuery("section#sliderhome").outerHeight(true);
    var larghezzabrowser=jQuery(window).width();

        jQuery("section#sliderhome .swiper-container-full-screen .swiper-wrapper .swiper-slide").each(function(){        
            var altezza_contenitore_testo=jQuery(this).find(".info-slider").outerHeight(true);
            jQuery(this).find(".info-slider").css("top",(altezzasezioneslider/2)-(altezza_contenitore_testo/2));

        });

}

function setaltezzaslider(){
    var larghezzaimg=jQuery("#sliderhome .swiper-container-full-screen .cont-slide").width();
    var altezzaslide=(885*larghezzaimg)/1920;
    jQuery("#sliderhome .swiper-container-full-screen .cont-slide").css("height",altezzaslide);
    jQuery("#sliderhome").css("height",altezzaslide);
}

function setposizionecontroller(){
    var larghezzaimg=jQuery("#sliderhome .swiper-container-full-screen .cont-slide").width();
    var altezzaslide=(885*larghezzaimg)/1920;
    var posizioneslidecontrol=(100*altezzaslide)/885;
    jQuery(".controller-slider").css("margin-top",posizioneslidecontrol);
}

function setpositionscrolldown(){
    var altezzabrowser=jQuery( window ).height();
    var altezzasliderhome=jQuery("#sliderhome").height();
    jQuery("#sliderhome a.scrollbottom").addClass("assoluto");
    /*
    if(altezzabrowser > altezzasliderhome ){
        jQuery("#sliderhome a.scrollbottom").addClass("assoluto");
        jQuery("#sliderhome a.scrollbottom").removeClass("fisso");
    }else{
        jQuery("#sliderhome a.scrollbottom").addClass("fisso");

        jQuery("#sliderhome a.scrollbottom").removeClass("assoluto");
    }
    */
}
function centrascopribox(){
    jQuery("#bannerpromo .box span.scopri").css("margin-left",-(jQuery("#bannerpromo .box span.scopri").outerWidth()/2));
}
function centrascopriboxgrande(){
    jQuery("#infoprodottopeg #box1sinistra a").css("margin-left",-(jQuery("#infoprodottopeg #box1sinistra a").outerWidth()/2)-30);
}

function scrolltobottomcambiaclasse(){
    var spaziodaaltoperscroll=-jQuery("#pagina > header").height()+(jQuery("#pagina #sliderhome").height()/5);

    if((jQuery(window).scrollTop()) > (spaziodaaltoperscroll) ){
        jQuery("a.scrollbottom").addClass("assoluto");
        jQuery("a.scrollbottom").removeClass("fisso");
    }else{
        jQuery("a.scrollbottom").addClass("fisso");
        jQuery("a.scrollbottom").removeClass("assoluto");
    }
}
            


