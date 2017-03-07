
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


jQuery(document).ready(function(){
    jQuery(".rigadescrizione").html(jQuery(".contenitoreperscrollbar").html());
    var videohtml="<div id='videoprdmobilefocus' class='videoprd'>"+jQuery(".videoprd .aprivideo").first().outerHTML+"</div>";
    jQuery(".rigasocialevideomobile").html(videohtml);
    jQuery(".rigasocialevideomobile").append(jQuery(".social").html());

    jQuery("#videoprdmobilefocus").click(function(){
        jQuery("#videomodal").modal();
    });

    var idswipermobile=new Array();
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




    var select='<select class="selectpicker" data-style="btn-success" style="display: none;">';
    var swipertext='';
    var identificatoremobile="";

    jQuery(".contabscaratteristiche ul.nav-tabs li").each(function(){
        if(jQuery(this).hasClass("genitore")){

            if(jQuery(this).hasClass("nofigli")){
                select+="<option value='"+jQuery(this).children("a").attr("href")+"'>"+jQuery(this).children("a").text().trim()+"</option>";

            }

        }else{
            var genitore=jQuery(this).data("genitore");
            genitore=jQuery(".contabscaratteristiche ul.nav-tabs li.genitore a[href='#"+genitore+"']").text().trim();
            select+="<option value='"+jQuery(this).children("a").attr("href")+"'>"+genitore+" - "+jQuery(this).children("a").text().trim()+"</option>";
        }


        if((jQuery(this).hasClass("nofigli")) || ((jQuery(this).hasClass("figlio")))){
            idswipermobile.push(""+jQuery(this).children("a").attr("href").replace('#','')+"");
            identificatoremobile=jQuery(this).children("a").attr("href").replace('#','');

            swipertext+='<div class="swiper-containermobile'+identificatoremobile+'"><div class="swiper-wrapper">';

            chiave="";
            immagine="";
            slidehtml="";

            jQuery(".tab-content #"+identificatoremobile+" .menucaratteristiche li a").each(function(){
                chiave=jQuery(this).data("caratteristica");
                immagine=jQuery(".contimgcaratteristiche > div[data-caratteristica='"+chiave+"'] img").attr('src');
                swipertext+="<div class='swiper-slide'><div class='nomecategoria'>"+jQuery(this).text()+"</div><div class='imgcategoria'><img  class='img-responsive' src='"+immagine+"'></div></div>";

            });

            swipertext+='</div>';
            swipertext+='<div id="prevmobile'+identificatoremobile+'" class="swiper-button-prev"></div>';
            swipertext+='<div id="nextmobile'+identificatoremobile+'" class="swiper-button-next"></div>';
            swipertext+='</div>';

        }


    });
    jQuery(".elencoswiper").html(swipertext);
    select+='</select>';
    jQuery(".selectstyleone").html(select);

    for (i = 0; i < idswipermobile.length; ++i) {


        var swipermobileidswipermobile= new Swiper('.swiper-containermobile'+idswipermobile[i]+'', {
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            nextButton: '#nextmobile'+idswipermobile[i]+'',
            prevButton: '#prevmobile'+idswipermobile[i]+'',
            loop:true
        });

    }

    jQuery(".selectstyleone .selectpicker").on('change',function(){



        jQuery(".elencoswiper > div").css("display","none");
        jQuery(".elencoswiper > div.swiper-containermobile"+jQuery(this).val().trim().replace('#','')+"").css("display","block");
    });


    setTimeout(function(){jQuery(".elencoswiper > div:not(:first)").css("display","none"); },'500');


});


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


    /*############################################# CARATTERISTICHE ############################################# */

    jQuery(".menucaratteristiche > li > a").click(function(){
        var idconttab=jQuery(this).parents(".tab-pane").attr("id");

        jQuery("#"+idconttab+" .menucaratteristiche li").each(function(){
            jQuery(this).children("a").removeClass("cliccato");
        });

        jQuery("#"+idconttab+ " .menucaratteristiche li span").each(function(){
            jQuery(this).css("display","none");
        });

        jQuery("#"+idconttab+" .contimgcaratteristiche .attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
        });

        jQuery(this).addClass("cliccato");
        jQuery(this).siblings("span.more").css("display","block");


        var targetcaratteristiche=jQuery(this).data("caratteristica");
        jQuery("#"+idconttab+" .contimgcaratteristiche > div").each(function(){
            jQuery(this).removeClass("attivo");
            jQuery(this).addClass("nonattivo");
            jQuery(this).css("display","none");
        });
        jQuery("#"+idconttab+" .contimgcaratteristiche div[data-caratteristica='"+targetcaratteristiche+"']").css("display","block");

        jQuery("#"+idconttab+" .contimgcaratteristiche div[data-caratteristica='"+targetcaratteristiche+"']").addClass("attivo");
        jQuery("#"+idconttab+" .contimgcaratteristiche div[data-caratteristica='"+targetcaratteristiche+"']").removeClass("nonattivo");


        setTimeout(function(){jQuery('.descrizionecaratteristicatesto').perfectScrollbar('update');},500);
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
        var idconttab=jQuery(this).parents(".tab-pane").attr("id");
        jQuery(this).css("display","none");
        jQuery("#"+idconttab+" .cliccato ").siblings( ".less" ).css("display","block");
        jQuery("#"+idconttab+" .continfocaratteristica.attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
        });
        jQuery("#"+idconttab+" .continfocaratteristica.attivo").addClass("attiva");
        jQuery("#"+idconttab+" .continfocaratteristica.attivo > div ").css("visibility","visible");
    });
    jQuery("span.less").click(function(){
        var idconttab=jQuery(this).parents(".tab-pane").attr("id");
        jQuery(this).css("display","none");
        jQuery("#"+idconttab+" .cliccato ").siblings( ".more" ).css("display","block");
        jQuery("#"+idconttab+" .continfocaratteristica.attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
            jQuery(this).children(".continfocaratteristica.attivo > div ").css("visibility","hidden");
        });

    });



    jQuery("span.chiudioverview").click(function(){
        var idconttab=jQuery(this).parents(".tab-pane").attr("id");
        jQuery("#"+idconttab+" span.less").css("display","none");
        jQuery("#"+idconttab+" .cliccato ").siblings( ".more" ).css("display","block");
        jQuery("#"+idconttab+" .continfocaratteristica.attiva").each(function(){
            jQuery(this).removeClass("attiva");
            jQuery(this).children(".continfocaratteristichedett").css("visibility","hidden");
            jQuery(this).children(".continfocaratteristica.attivo > div ").css("visibility","hidden");
        });
    });



    jQuery(".titolosottosezione").click(function(){
        if(jQuery(this).hasClass("aperto")){
            jQuery(this).removeClass("aperto");
            jQuery(this).addClass("chiuso");
            jQuery( "#schedatecnica #"+jQuery(this).data("toggleid")+"").slideUp();
        }else{
            jQuery(this).removeClass("chiuso");
            jQuery(this).addClass("aperto");
            jQuery( "#schedatecnica #"+jQuery(this).data("toggleid")+"").slideDown();
        }

    });

    jQuery(".menucaratteristichesinistra li:first a").click();
    jQuery("#caratteristiche .nav-tabs li:first a").addClass("cliccatoprimavolta");

    jQuery("#caratteristiche ul.nav-tabs li a ").on('click',function(){
        if((jQuery(this).hasClass("cliccatoprimavolta"))){

        }else{
            jQuery(this).addClass("cliccatoprimavolta");
            jQuery(""+jQuery(this).attr("href")+" .menucaratteristichesinistra li:first a").click();

        }

        setTimeout(function(){jQuery('.descrizionecaratteristicatesto').perfectScrollbar('update');},1000);
        if(jQuery(this).parent("li").hasClass("genitore")&&(!(jQuery(this).parent("li").hasClass("attivo")))){
            var larghezzatabs=jQuery("#caratteristiche ul.nav-tabs").outerWidth()-1;
            var larghezzasingola=larghezzatabs/6;
            var larghezzasingolafigli=larghezzatabs/10;
            var marginesecondofiglio=0;
            var elementoattivo=jQuery(this).attr("href").replace("#","");
            jQuery("#caratteristiche ul.nav-tabs li").each(function(){

                if(jQuery(this).hasClass('genitore')){
                    jQuery(this).css("width",larghezzasingola);
                    marginesecondofiglio+=jQuery(this).outerWidth();
                }

            });
            jQuery("#caratteristiche ul.nav-tabs li[data-genitore='"+elementoattivo+"']").each(function(){
                marginesecondofiglio+=larghezzasingolafigli;
            });
            if(jQuery(this).parent("li").hasClass("active")){

            }else{
                jQuery("#caratteristiche ul.nav-tabs li.figlio").animate({
                    width:"0"
                });
                jQuery("#caratteristiche ul.nav-tabs li.figlio").css("margin-right","0");
                jQuery("#caratteristiche ul.nav-tabs li.figlio").removeClass("ultimo");
                var chiavetabs=jQuery(this).attr("href").replace('#','');

                jQuery("#caratteristiche ul.nav-tabs li.figlio[data-genitore='"+chiavetabs+"']").animate({
                    width:larghezzasingolafigli+"px"
                });

                jQuery("#caratteristiche ul.nav-tabs li[data-genitore='"+elementoattivo+"']").last().addClass("ultimo");
                jQuery("#caratteristiche ul.nav-tabs li[data-genitore='"+elementoattivo+"']").last().animate({
                    marginRight:larghezzatabs-marginesecondofiglio+"px"
                });



            }

            jQuery("#caratteristiche ul.nav-tabs li.genitore").removeClass("attivo");

        }else if (jQuery(this).parent("li").hasClass("figlio")){
            jQuery("#caratteristiche ul.nav-tabs li.genitore").removeClass("attivo");


            var figliocliccato="#"+jQuery(this).parent("li").data("genitore");
            jQuery("#caratteristiche ul.nav-tabs li a[href='"+figliocliccato+"']").parent("li").addClass("attivo");
        }

    });

    jQuery("#caratteristiche ul.nav-tabs li.figlio").css("width","0").css("overflow","hidden");
    jQuery("#caratteristiche ul.nav-tabs li:first a").click();


    jQuery("#pagina main#prodotto #caratteristiche .contabscaratteristiche li a").click(function(){

        if(jQuery(this).parent("li").hasClass("nofigli")==true && jQuery(this).parent("li").hasClass("genitore")){
            jQuery(".arrowcont .arrow#right").css("display","none");
            jQuery(".arrowcont .arrow#left").css("display","none");
        }else if(jQuery(this).parent("li").hasClass("ultimo")==true){
            jQuery(".arrowcont .arrow#right").css("display","none");
            jQuery(".arrowcont .arrow#left").css("display","block");

        }else if ( jQuery(this).parent("li").hasClass("genitore")==true){
            jQuery(".arrowcont .arrow#right").css("display","block");
            jQuery(".arrowcont .arrow#left").css("display","none");
        }else{
            jQuery(".arrowcont .arrow#right").css("display","block");
            jQuery(".arrowcont .arrow#left").css("display","block");
        }

    });



    jQuery(".arrowcont .arrow#right").click(function(){
        jQuery(".contabscaratteristiche li.active").next().children("a").click();
    });


    jQuery(".arrowcont .arrow#left").click(function(){
        jQuery(".contabscaratteristiche li.active").prev().children("a").click();
    });

    var altezzatabs=jQuery(".contabscaratteristiche .nav-tabs").outerHeight();
    console.log(altezzatabs);
    jQuery(".contabscaratteristiche").css("margin-top", - ( altezzatabs + 20) );


});

jQuery(window).load(function(){
    centraimgverticale();
    setTimeout(centratestoslider, 500);
    centraimgverticale();
    posizionaselettorecolore();
    altezzatriangolo();
    scrollbardescprd();
    margineelencoprd();
    centraevidenza();
    /*scroll bar*/
    jQuery('.partedescrittiva').perfectScrollbar({maxScrollbarLength:16,includePadding: true});
    jQuery('.descrizionecaratteristicatesto').perfectScrollbar({maxScrollbarLength:16,includePadding: true,suppressScrollX:true});
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

