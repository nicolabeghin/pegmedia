jQuery( document ).ready(function() {

    jQuery("#pagina > header #iconemenu li.cerca-icona > a").click(function(){
        if (jQuery(".ricerca").hasClass("aperto")){
            jQuery(".ricerca").fadeToggle('fast',function(){
                jQuery(".ricerca").removeClass("aperto");
                jQuery(".ricerca").addClass("chiuso");
                jQuery(".conticone").removeClass("aperto");
                jQuery(".conticone").addClass("aperto");
                jQuery("#pagina > header #iconemenu li.cerca-icona a svg").css("fill","#766c76");
                jQuery("#pagina > header #iconemenu li.cerca-icona a svg").removeClass("sopra");
            });

        }else{
            jQuery(".ricerca").addClass("aperto");
            jQuery(".ricerca").removeClass("chiuso");
            jQuery(".conticone").addClass("aperto");
            jQuery(".conticone").removeClass("chiuso");

            jQuery(".ricerca").fadeToggle('fast',function(){
                jQuery("#pagina > header #iconemenu li.cerca-icona a svg").css("fill","#fff");
                jQuery("#pagina > header #iconemenu li.cerca-icona a svg").addClass("sopra");
            });

        }

    });


    var idselezionato;
    var vocemenuselezionata;
    jQuery("#menubottom li.dropdown .dropdown-toggle").click(function (){
        vocemenuselezionata=jQuery(this);
        jQuery( "#menusottostante > div > div" ).each(function() {
            jQuery(this).css("display","none");
        });
        var idsubmenu=jQuery(this).attr("data-id-submenu");

        if (jQuery("#menusottostante").hasClass("aperto")){
            //console.log("primo selezionato:"+idselezionato+"|secondo selezionato:"+jQuery(this).attr("id"));
            if((jQuery(this).attr("id"))===idselezionato){
                jQuery(this).parent("li").addClass("open");
                jQuery("#menusottostante #"+idsubmenu).css("display","block");
                jQuery("#menusottostante").slideUp('slow',function(){
                    jQuery("#menusottostante").addClass("chiuso");
                    jQuery("#menusottostante").removeClass("aperto");
                    vocemenuselezionata.parents("li").addClass("vocechiusa");
                    vocemenuselezionata.parents("li").removeClass("voceaperta");
                });
                idselezionato=jQuery(this).attr("id");
            }else{
                idselezionato=jQuery(this).attr("id");
                jQuery("#menusottostante #"+idsubmenu).css("display","block");
                jQuery("#menubottom li.dropdown").each(function(){
                    jQuery(this).removeClass("voceaperta");
                });
                vocemenuselezionata.parents("li").addClass("voceaperta");
                vocemenuselezionata.parents("li").removeClass("vocechiusa");
            }

        }else{
            idselezionato=jQuery(this).attr("id");
            jQuery("#menusottostante #"+idsubmenu).css("display","block");
            vocemenuselezionata.parents("li").addClass("voceaperta");
            vocemenuselezionata.parents("li").removeClass("vocechiusa");
            jQuery("#menusottostante").slideDown('slow',function(){
                jQuery("#menusottostante").addClass("aperto");
                jQuery("#menusottostante").removeClass("chiuso");

            });
        }

    });

    /* SOTTOVOCI */
    jQuery("#pagina > header #menusottostante .sottomenu li a").mouseover(function(){
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

});

BrowserDetection();
function BrowserDetection() {

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

