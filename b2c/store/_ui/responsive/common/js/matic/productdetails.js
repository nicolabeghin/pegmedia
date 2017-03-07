
jQuery(".aprivideo").click(function(){
    jQuery("#videomodal").modal();
});

jQuery('#videomodal').on('shown.bs.modal', function() {
    var swipercvideo = new Swiper('.swiper-container', {
        paginationClickable: true,
        slidesPerView: 1,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var larghezzamodal=jQuery("#videomodal .modal").width();

});



setTimeout(function(){

    var swiper = new Swiper('.swiper-container1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            // when window width is <= 768
            768: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            // when window width is <= 640px
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        loop: false,
        slideToClickedSlide:true,
        preventClicksPropagation: false,
        preventClicks: false
        /*
        onClick:function(swipe,e){


            if(swipe.clickedSlide===undefined){
            }else{
                swipe.slideTo(swipe.activeIndex-1, 0, false);

            }
            var elementoattivo=jQuery(".selettorecolore .swiper-slide-next > div").attr("data-id-prd");
            jQuery(".selettorecolore .swiper-slide").removeClass("swiper-no-swiping");
            jQuery(".selettorecolore .swiper-slide-next").addClass("swiper-no-swiping");
            jQuery(".contimgprddettaglio img:not(.nascosta)").addClass("nascosta");
            jQuery(".contimgprddettaglio").find("[data-id-prd='" + elementoattivo + "']").removeClass("nascosta");

            jQuery(".prezzoprodottodettaglio:not(.nascondoprezzo)").addClass("nascondoprezzo");
            jQuery(".costoprd").find("[data-id-prd='" + elementoattivo + "']").removeClass("nascondoprezzo");



        },
        onTouchEnd:function(swipe){
            if(swipe.clickedSlide===undefined){
            }else{
                swipe.slideTo(swipe.activeIndex-1, 0, false);

            }
            var elementoattivo=jQuery(".selettorecolore .swiper-slide-next > div").attr("data-id-prd");
            jQuery(".selettorecolore .swiper-slide").removeClass("swiper-no-swiping");
            jQuery(".selettorecolore .swiper-slide-next").addClass("swiper-no-swiping");
            jQuery(".contimgprddettaglio img:not(.nascosta)").addClass("nascosta");
            jQuery(".contimgprddettaglio").find("[data-id-prd='" + elementoattivo + "']").removeClass("nascosta");

            jQuery(".prezzoprodottodettaglio:not(.nascondoprezzo)").addClass("nascondoprezzo");
            jQuery(".costoprd").find("[data-id-prd='" + elementoattivo + "']").removeClass("nascondoprezzo");
        }
        */
    });


},500);




/*
jQuery(document).ready(function(){
    jQuery(".rigadescrizione").html(jQuery(".contenitoreperscrollbar").html());
    var videohtml="<div id='videoprdmobilefocus' class='videoprd'>"+jQuery(".videoprd .aprivideo")[0].outerHTML+"</div>";
    jQuery(".rigasocialevideomobile").html(videohtml);
    jQuery(".rigasocialevideomobile").append(jQuery(".social").html());

    jQuery("#videoprdmobilefocus").click(function(){
        jQuery("#videomodal").modal();
    });

    jQuery('#videomodal').on('shown.bs.modal', function() {
        var swipercvideo = new Swiper('.swiper-container', {
            paginationClickable: true,
            slidesPerView: 1,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
        var larghezzamodal=jQuery("#videomodal .modal").width();

    });


    var slidehtml="";
    var chiave="";
    var immagine="";
    jQuery(".menucaratteristiche li a").each(function(){
        chiave=jQuery(this).data("caratteristica");
        immagine=jQuery(".contimgcaratteristiche > div[data-caratteristica='"+chiave+"'] img").attr('src');
        slidehtml="<div class='swiper-slide'><div class='nomecategoria'>"+jQuery(this).text()+"</div><div class='imgcategoria'><img  class='img-responsive' src='"+immagine+"'></div></div>";
        jQuery(".swiper-containermobile .swiper-wrapper").append(slidehtml);
    });



    var swipermobile = new Swiper('.swiper-containermobile', {
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '#nextmobile',
        prevButton: '#prevmobile',
        loop:true
    });

});
*/

/*
jQuery("#imgplayjt").click(function(){
    jQuery("#videoyt1").modal();
});
jQuery("#testoplayjt").click(function(){
    jQuery("#videoyt1").modal();
});


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
*/


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

var swiperprdcorrelati = new Swiper('.swiper-containerprdcorrelati', {
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop:true,
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

setTimeout(function(){
    var swiperprodottodesc = new Swiper('.swiper-containersliderprddes', {
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop:true,
        preventClicksPropagation:true
    });
},5000);


jQuery(document).ready(function(){
    setaltezzaimmaginepagina();

    altezzaslideprd();
    jQuery(".menuprddettaglio ul li a").click(function(){
        var scrolltoelement=jQuery(this).data("scrollto");
        jQuery('html, body').animate({
            scrollTop: jQuery(scrolltoelement).offset().top - (jQuery("#pagina > header").height()+jQuery(".etichettaprodotto").height())
        }, 500);
    });

    jQuery(".menucaratteristiche li a").click(function(){

        jQuery(".menucaratteristiche li").each(function(){

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
        scrolltobottomcambiaclasse();
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
    setTimeout(centratestoslider, 500);
    posizionaselettorecolore();
    altezzatriangolo();
    scrollbardescprd();
    margineelencoprd();
    centraevidenza();
    /*scroll bar*/
    window.setTimeout(function(){jQuery('.partedescrittiva').perfectScrollbar({maxScrollbarLength:16,includePadding: true}); });
    window.setTimeout(function(){jQuery('.descrizionecaratteristicatesto').perfectScrollbar({maxScrollbarLength:16,includePadding: true,suppressScrollX:true}); });
    scrolltobottomcambiaclasse();
    /*fine scrollbar */
});

jQuery(window).resize(function(){
    setaltezzaimmaginepagina();
    centratestoslider();
    altezzaslideprd();
    altezzatriangolo();
    centraimgverticale();
    posizionaselettorecolore();
    margineelencoprd();
    centraevidenza();
    scrollbardescprd();
});

jQuery(".scrollbottom").click(function(){
    posizionascrollbottom();
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
    var altezzacontprincipale=500;

    if( jQuery("#pagina main#prodotto .infoprddettaglio").height() > altezzacontprincipale){
        jQuery("#pagina main#prodotto .infoprddettaglio .partedescrittiva").css("overflow-y","scroll").css("height",altezzacontprincipale);

    }else{
        jQuery("#pagina main#prodotto .infoprddettaglio .partedescrittiva").css("overflow-y","initial").css("height","initial");

    }

}
function menuprdfisso(){
    var inizioaltezzamenuprd=-jQuery("#pagina > header").outerHeight()+jQuery(".testata").outerHeight() + jQuery(".etichettaprodotto").outerHeight()+jQuery(".immaginepagina").outerHeight();



    if(     (jQuery(window).scrollTop() > inizioaltezzamenuprd) ){
        jQuery(".etichettaprodotto").addClass("menufisso");
        jQuery(".etichettaprodotto").removeClass("menurelativo");
        jQuery(".etichettaprodotto").css("height",jQuery(".etichettaprodotto").outerHeight());
        jQuery(".etichettaprodotto").css("display","block");

        jQuery(".etichettaprodotto").css("top",jQuery("header#testata").height());
    }else{
        jQuery(".etichettaprodotto").removeClass("menufisso");
        jQuery(".etichettaprodotto").css("top","auto");
        jQuery(".etichettaprodotto").css("height","auto");
        jQuery(".etichettaprodotto").css("display","block");
    }
}
function margineelencoprd(){
    jQuery( ".prd").each(function() {
        var margineprd=jQuery(this).children(".contnomeprd").height();
        jQuery(this).children(".contnomeprd").css("bottom",-margineprd);
        jQuery(this).css("margin-bottom",margineprd);
    });
}
function centraevidenza(){
    jQuery( "span.evidenza").each(function() {
        jQuery(this).css("margin-left",-(jQuery(this).outerWidth()/2));
        jQuery(this).css("left","50%");
    });
}
function setaltezzaimmaginepagina(){
    var larghezzaimgpagina=jQuery(".immaginepagina").width();
    var altezzaimgpagina=(larghezzaimgpagina*730)/1920;
    jQuery(".immaginepagina").height(altezzaimgpagina);
}
function centratestoslider(){
    var altezzaimmagine=jQuery(".immaginepagina").height();
    var altezzaboxtesto=jQuery(".continfoimg").outerHeight();
    jQuery(".continfoimg").css("margin-top",(altezzaimmagine/2)-(altezzaboxtesto/2));
    jQuery(".continfoimg").css("visibility","visible");
}

function posizionascrollbottom(){
    jQuery('html, body').animate({
        scrollTop: jQuery(".contprodotto").offset().top
    }, 2000);
}

function scrolltobottomcambiaclasse(){
    var spaziodaaltoperscroll=-jQuery("#pagina > header").height()+jQuery(".testata").height();
    if(jQuery(window).scrollTop() > spaziodaaltoperscroll ){
        jQuery("a.scrollbottom").addClass("assoluto");
        jQuery("a.scrollbottom").removeClass("fisso");
    }else{
        jQuery("a.scrollbottom").addClass("fisso");
        jQuery("a.scrollbottom").removeClass("assoluto");
    }
}