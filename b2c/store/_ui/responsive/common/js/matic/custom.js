if (window.jQuery){
    var altezza_brw=jQuery(window).height();
    var altezza_icona=jQuery(".loading i").height();
    var spazio=(altezza_brw-altezza_icona)/2;
    spazio=spazio+"px 0 ";
    jQuery(".loading").css("height",altezza_brw);
    jQuery(".loading i").css("margin",spazio);
}

/*
jQuery( document ).ready(function() {
    var idselezionato;
    var vocemenuselezionata;
    jQuery('.cont-sottomenu').hide();
    jQuery(".contmainmenu li.dropdown").click(function (){
        vocemenuselezionata=jQuery(this);



        var idsubmenu=jQuery(this).attr("data-id-submenu");

        if (jQuery("#menusottostante").hasClass("aperto")){
            //console.log("primo selezionato:"+idselezionato+"|secondo selezionato:"+jQuery(this).attr("id"));
            if((jQuery(this).attr("id"))===idselezionato){
                jQuery(this).parent("li").addClass("open");
                jQuery("#"+idsubmenu).show();
                jQuery("#menusottostante").slideUp('slow',function(){
                    jQuery("#menusottostante").addClass("chiuso");
                    jQuery("#menusottostante").removeClass("aperto");
                    vocemenuselezionata.parents("li").addClass("vocechiusa");
                    vocemenuselezionata.parents("li").removeClass("voceaperta");
                });
                idselezionato=jQuery(this).attr("id");
            }else{
                idselezionato=jQuery(this).attr("id");
                jQuery("#menusottostante #"+idsubmenu).show();
                jQuery("#menubottom li.dropdown").each(function(){
                    jQuery(this).removeClass("voceaperta");
                });
                vocemenuselezionata.parents("li").addClass("voceaperta");
                vocemenuselezionata.parents("li").removeClass("vocechiusa");
            }

        }else{
            idselezionato=jQuery(this).attr("id");
            jQuery("#"+idsubmenu).show();
            vocemenuselezionata.parents("li").addClass("voceaperta");
            vocemenuselezionata.parents("li").removeClass("vocechiusa");
            jQuery("#menusottostante").slideDown('slow',function(){
                jQuery("#menusottostante").addClass("aperto");
                jQuery("#menusottostante").removeClass("chiuso");

            });
        }

    });

    /* SOTTOVOCI */
    /*jQuery("#pagina > header #menusottostante .sottomenu li a").mouseover(function(){
        var idsottomenu=jQuery(this).attr("data-id-cont");
        jQuery(".elenco-descrizione-sottovocemenu >div").each(function(){
            jQuery(".descsottovocemenu").css("display","none");
        });

        jQuery(".descsottovocemenu"+idsottomenu).css("display","block");

    });

    jQuery("#pagina > header #menutop button.navbar-toggle").click(function(){
        if (jQuery("#pagina > header").hasClass("menutopaperto")){
            jQuery("#pagina > header").removeClass("menutopaperto");
            jQuery("#pagina > header").addClass("menutopchiuso");
        }else{
            jQuery("#pagina > header").removeClass("menutopchiuso");
            jQuery("#pagina > header").addClass("menutopaperto");
        }

    });

    jQuery("#pagina > header #menubottom button.navbar-toggle").click(function(){
        if (jQuery("#pagina > header").hasClass("menubottomaperto")){
            jQuery("#pagina > header").removeClass("menubottomaperto");
            jQuery("#pagina > header").addClass("menubottomchiuso");
        }else{
            jQuery("#pagina > header").removeClass("menubottomchiuso");
            jQuery("#pagina > header").addClass("menubottomaperto");
        }

    });

    jQuery("#pagina > header #menuprodottimobile button.navbar-toggle").click(function(){
        if (jQuery("#pagina > header").hasClass("menumobileaperto")){
            jQuery("#pagina > header").removeClass("menumobileaperto");
            jQuery("#pagina > header").addClass("menumobilechiuso");
        }else{
            jQuery("#pagina > header").removeClass("menumobilechiuso");
            jQuery("#pagina > header").addClass("menumobileaperto");
        }

    });

});*/

BrowserDetection();
function BrowserDetection() {
    //console.log(navigator.userAgent);
    //Check if browser is IE or not
    if (navigator.userAgent.search("MSIE") >= 0) {
        jQuery("body").addClass("internetexplorer");
    }
    //Check if browser is Edge or not
    else if (navigator.userAgent.search("Edge") >= 0) {
        jQuery("body").addClass("edge");

    }
    //Check if browser is Explorer new or not
    else if (navigator.userAgent.search("Trident") >= 0) {
        jQuery("body").addClass("internetexplorer");

    }
    //Check if browser is Chrome or not
    else if (navigator.userAgent.search("Chrome") >= 0) {
        jQuery("body").addClass("chrome");

    }
    //Check if browser is Firefox or not
    else if (navigator.userAgent.search("Firefox") >= 0) {
        jQuery("body").addClass("firefox");
    }
    //Check if browser is Safari or not
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        jQuery("body").addClass("safari");
    }
    //Check if browser is Opera or not
    else if (navigator.userAgent.search("Opera") >= 0) {
        jQuery("body").addClass("opera");
    }
}


//Initialize Swiper -->
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
     console.log("entro qui");
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
    //console.log("calcolo:"+spaziodaaltoperscroll);
    //console.log("quanto scrollo:"+jQuery(window).scrollTop());
    if((jQuery(window).scrollTop()) > (spaziodaaltoperscroll) ){
        jQuery("a.scrollbottom").addClass("assoluto");
        jQuery("a.scrollbottom").removeClass("fisso");
    }else{
        jQuery("a.scrollbottom").addClass("fisso");
        jQuery("a.scrollbottom").removeClass("assoluto");
    }
}

/* Da Eliminare perche Duplicata
jQuery( document ).ready(function() {
    jQuery("footer #footer2 .contenitore-selettore-lingua > ul > li > a").click(function(){
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
});*/

//scroll to top script -->
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
        //jQuery('.scrollup').css('margin-right',(-(larghezza_pagina/2))-margine_scrolltop-(jQuery('.scrollup').width()));
    }else{
        margine_scrolltop=0;
        //jQuery('.scrollup').css('margin-right',-larghezza_pagina/2);
    }

}
jQuery( window ).load(function() {
    /*
     jQuery(".loading").css("display","none");
     jQuery("#pagina").css({"visibility":"visible","height":"auto"});
     jQuery("#pagina").addClass("animated fadeIn");
     /*fix per fare in modo che i modal e i colorbox vadano correttamente*/
    /*
     window.setTimeout(function(){jQuery("#pagina").removeClass("animated");},1000);
     posiziona_scroll_to_top();
     */
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

});


//Jquery per Login/Registration
if (window.jQuery){
    var altezza_brw=jQuery(window).height();
    var altezza_icona=jQuery(".loading i").height();
    var spazio=(altezza_brw-altezza_icona)/2;
    spazio=spazio+"px 0 ";
    jQuery(".loading").css("height",altezza_brw);
    jQuery(".loading i").css("margin",spazio);
}

jQuery('#sesso').selectpicker({
    style: 'btn-info',
    size: 4
});

jQuery(function(){
    jQuery.datepicker.setDefaults(
        jQuery.extend(jQuery.datepicker.regional['it'])
    );
    jQuery('#datanascita').datepicker( {changeMonth: true,changeYear: true,yearRange: "-100:+0"});
});


jQuery('#prov').selectpicker({
    style: 'btn-info',
    size: 4
});

jQuery('#stato').selectpicker({
    style: 'btn-info',
    size: false
});


function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

switch($_GET('stato')){
    case "errore":
        console.log("sono nell'errore");
        jQuery("#clickstatoerrore").click();
        break;
    case "ok":
        console.log("sono nell' ok");
        jQuery("#clickstatook").click();
        break;
}

$( document ).ready(function() {
    jQuery("a.recupera_password").click(function(){
        jQuery("div.esegui_accesso").css("display","none");
        jQuery("div.recuperapss").css("display","block");
        setaltezzacornici();
    });

    jQuery("a.linkaccedi").click(function(){
        jQuery("div.esegui_accesso").css("display","block");
        jQuery("div.recuperapss").css("display","none");
        setTimeout(setaltezzacornici,200);
    });

    jQuery("a.linkregistrazione").click(function(){
        jQuery("div.esegui_accesso").css("display","block");
        jQuery("div.recuperapss").css("display","none");
        setTimeout(setaltezzacornici,200);

    });

});

$(window).load(function(){
    setaltezzacornici();
});

$(window).resize(function(){
    setaltezzacornici();
});

function setaltezzacornici(){
    var altezza_tabs=jQuery(".conttab").height();
    var altezza_menu_tab=jQuery("ul.nav-tabs").height();
    var marginetoptab=altezza_menu_tab+65;
    jQuery(".conttab").css("margin-top",marginetoptab);
    jQuery(".cornice1").css("height",altezza_tabs+altezza_menu_tab);
    jQuery(".cornice2").css("height",altezza_tabs+altezza_menu_tab);
}

jQuery( document ).ready(function() {
    jQuery("footer #footer2 .contenitore-selettore-lingua > ul > li > a").click(function(){
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

});



jQuery(document).ready(function(){

    altezzaslideprd();
    jQuery(".menuprddettaglio ul li a").click(function(){
        var scrolltoelement=jQuery(this).data("scrollto");
        jQuery('html, body').animate({
            scrollTop: jQuery(scrolltoelement).offset().top - (jQuery("#pagina > header").height()+jQuery(".menuprddettaglio").height())
        }, 500);
    });

    jQuery(".menucaratteristiche li a").click(function(){

        jQuery(".menucaratteristiche li").each(function(){
            console.log("li");
            jQuery(this).children("a").removeClass("cliccato");
        });

        jQuery(".menucaratteristiche li span").each(function(){
            jQuery(this).css("display","none");
        });

        jQuery(".contimgcaratteristiche .attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
        });




        jQuery(this).addClass("cliccato");
        jQuery(this).siblings("span.more").css("display","block");

        var targetcaratteristiche=jQuery(this).data("caratteristica");
        jQuery(".contimgcaratteristiche > div").each(function(){
            jQuery(this).removeClass("attivo");
            jQuery(this).addClass("nonattivo");
            jQuery(this).css("display","none");
        });
        jQuery(".contimgcaratteristiche div[data-caratteristica='"+targetcaratteristiche+"']").css("display","block");

        jQuery(".contimgcaratteristiche div[data-caratteristica='"+targetcaratteristiche+"']").addClass("attivo");
        jQuery(".contimgcaratteristiche div[data-caratteristica='"+targetcaratteristiche+"']").removeClass("nonattivo");

    });

    jQuery(window).scroll(function (){
        menuprdfisso();
    });


    jQuery("#schedatecnica .titolosezione").click(function(){

        if(jQuery(this).hasClass("aperto")){
            jQuery(this).removeClass("aperto");
            jQuery(this).addClass("chiuso");
            jQuery( "#schedatecnica .contsezione" ).slideUp();
        }else{
            jQuery(this).removeClass("chiuso");
            jQuery(this).addClass("aperto");
            jQuery( "#schedatecnica .contsezione" ).slideDown();
        }


    });
    jQuery("#download .titolosezione").click(function(){
        if(jQuery(this).hasClass("aperto")){
            jQuery(this).removeClass("aperto");
            jQuery(this).addClass("chiuso");
            jQuery( "#download .contsezione" ).slideUp();
        }else{
            jQuery(this).removeClass("chiuso");
            jQuery(this).addClass("aperto");
            jQuery( "#download .contsezione" ).slideDown();
        }
    });


    jQuery("span.more").click(function(){
        jQuery(this).css("display","none");
        jQuery(".cliccato ").siblings( ".less" ).css("display","block");
        jQuery(".continfocaratteristica.attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
        });
        jQuery(".continfocaratteristica.attivo").addClass("attiva");
        jQuery(".continfocaratteristica.attivo > div ").css("visibility","visible");
    });
    jQuery("span.less").click(function(){
        jQuery(this).css("display","none");
        jQuery(".cliccato ").siblings( ".more" ).css("display","block");
        jQuery(".continfocaratteristica.attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
            jQuery(this).children(".continfocaratteristica.attivo > div ").css("visibility","hidden");
        });

    });


    jQuery("#menucaratteristichesinistra li:first a").click();
    jQuery("span.chiudioverview").click(function(){
        jQuery("span.less").css("display","none");
        jQuery(".cliccato ").siblings( ".more" ).css("display","block");
        jQuery(".continfocaratteristica.attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
            jQuery(this).children(".continfocaratteristica.attivo > div ").css("visibility","hidden");
        });
    });


});

jQuery(window).load(function(){
    centraimgverticale();
    posizionaselettorecolore();
    altezzatriangolo();
    scrollbardescprd();
    margineelencoprd();
    centraevidenza();
    /*scroll bar*/
    window.setTimeout(function(){jQuery('.partedescrittiva').perfectScrollbar({maxScrollbarLength:16,includePadding: true}); });
    window.setTimeout(function(){jQuery('.descrizionecaratteristicatesto').perfectScrollbar({maxScrollbarLength:16,includePadding: true,suppressScrollX:true}); });

    /*fine scrollbar */
});

jQuery(window).resize(function(){
    altezzaslideprd();
    altezzatriangolo();
    centraimgverticale();
    posizionaselettorecolore();
    margineelencoprd();
    centraevidenza();
    scrollbardescprd();
});

function altezzaslideprd(){
    var larghezzacontprd=jQuery(".contprodotto").width();
    var altezzacont=(690*larghezzacontprd)/1920;
    jQuery(".contprodotto").height(altezzacont);
}

function centraimgverticale(){
    var altezzacontbackground=jQuery(".contprodotto").height();
    var altezzaconteimg=jQuery(".contimgprddettaglio").height();

    if(altezzaconteimg>altezzacontbackground){
        jQuery(".contimgprddettaglio").css("height",altezzacontbackground-((altezzacontbackground/100)*20));
        jQuery(".contimgprddettaglio img").css("max-height",altezzacontbackground-((altezzacontbackground/100)*20));
        jQuery(".contimgprddettaglio").css("margin-top",((altezzacontbackground/100)*5));

    }else{
        jQuery(".contimgprddettaglio").css("height","initial");
        jQuery(".contimgprddettaglio img").css("max-height","initial");
        jQuery(".contimgprddettaglio").css("margin-top",(((altezzacontbackground-((altezzacontbackground/100)*10))-altezzaconteimg)/4));
    }



}
function altezzatriangolo(){
    var larghezzacolore=jQuery(".contcoloreprd").width();
    jQuery("#pagina main#prodotto .eventualefreccia").css("border-left",""+(larghezzacolore/2)+"px solid transparent");
    jQuery("#pagina main#prodotto .eventualefreccia").css("border-right",""+(larghezzacolore/2)+"px solid transparent");
    jQuery("#pagina main#prodotto .eventualefreccia").css("border-bottom",""+50+"px solid #9ab6b9");
}
function posizionaselettorecolore(){
    var altezzatestata=jQuery("main#prodotto .testata").height();
    var altezzaetichette=jQuery("main#prodotto .conetichette").height();
    var altezzacontprd=jQuery("main#prodotto .contprodotto").height();
    var toppixel=altezzatestata+altezzaetichette+altezzacontprd;
    jQuery("#pagina main#prodotto .selezionacolorecontenitore").css("top",toppixel-75);
}
function scrollbardescprd(){
    var altezzatestodsc=jQuery(".partedescrittiva").height();
    var altezzacontprincipale=jQuery(".contimgprddettaglio").height();
    if( jQuery("#pagina main#prodotto .infoprddettaglio").height() > altezzacontprincipale){
        jQuery("#pagina main#prodotto .infoprddettaglio .partedescrittiva").css("overflow-y","scroll").css("height",altezzacontprincipale-jQuery(".infoprddettaglio .costoprd").height()-30-75);

    }else{
        jQuery("#pagina main#prodotto .infoprddettaglio .partedescrittiva").css("overflow-y","initial").css("height","initial");

    }

}
function menuprdfisso(){
    var inizioaltezzamenuprd=-jQuery("#pagina > header").outerHeight()+jQuery(".testata").outerHeight() + jQuery(".etichettaprodotto").outerHeight()+ jQuery(".contprodotto").outerHeight()+ jQuery(".selezionacolorecontenitore").outerHeight()-jQuery(".menuprddettaglio").outerHeight();
    if(     (jQuery(window).scrollTop() > inizioaltezzamenuprd) ){
        jQuery(".menuprddettaglio").addClass("menufisso");
        jQuery(".menuprddettaglio").removeClass("menurelativo");
        jQuery(".menuprddettaglionascosto").css("height",jQuery(".menuprddettaglio").outerHeight());
        jQuery(".menuprddettaglionascosto").css("display","block");

        jQuery(".menuprddettaglio").css("top",jQuery("header#testata").height());
    }else{
        jQuery(".menuprddettaglio").addClass("menurelativo");
        jQuery(".menuprddettaglio").removeClass("menufisso");
        jQuery(".menuprddettaglio").css("top","auto");
        jQuery(".menuprddettaglionascosto").css("height","0");
        jQuery(".menuprddettaglionascosto").css("display","none");
    }
}
function margineelencoprd(){
    jQuery( ".prd").each(function() {
        var margineprd=jQuery(this).children(".contnomeprd").height();
        //jQuery(this).children(".contnomeprd").css("bottom",-margineprd);  Distrugge il layout della griglia di ricerca
        jQuery(this).css("margin-bottom",margineprd);
    });
}
function centraevidenza(){
    jQuery( "span.evidenza").each(function() {
        jQuery(this).css("margin-left",-(jQuery(this).outerWidth()/2));
        jQuery(this).css("left","50%");
    });
}



jQuery("#imgplayjt1").click(function(){
    jQuery("#videoyt1").modal();
});
jQuery("#testoplayjt1").click(function(){
    jQuery("#videoyt1").modal();
})


jQuery("#imgplayjt2").click(function(){
    jQuery("#videoyt2").modal();
});
jQuery("#testoplayjt2").click(function(){
    jQuery("#videoyt2").modal();
});

jQuery("#imgplayjt3").click(function(){
    jQuery("#videoyt3").modal();
});
jQuery("#testoplayjt3").click(function(){
    jQuery("#videoyt3").modal();
});


var swipervideoaggiuntivi = new Swiper('.swiper-containervideoaggiuntivi', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});

var swiperaccessori = new Swiper('.swiper-containeraccessori', {
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop:true,
    // Responsive breakpoints
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is <= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

//[GF] 23012017 Codice pagina contatti


jQuery('#prov').selectpicker({
    style: 'btn-info',
    size: 4
});