
jQuery("a.aprimodalfiltri").click(function(){
    jQuery("#modalspallafiltrimobile").modal();
});

jQuery( function() {
  jQuery( "#sliderperomobile" ).slider({
    range: "max",
    min: 0,
    max: 36,
    value: 0,
    slide: function( event, ui ) {
      jQuery( "#valorepesomobile" ).val( ui.value );
    }
  });
  jQuery( "#valorepesomobile" ).val( jQuery( "#sliderperomobile" ).slider( "value" ) );
} );



/*jQuery( function() {
  jQuery( "#slideretamobile" ).slider({
    range: "max",
    min: 0,
    max: 12,
    value: 0,
    slide: function( event, ui ) {
      jQuery( "#valoreetamobile" ).val( ui.value );
    }
  });
  jQuery( "#valoreetamobile" ).val( jQuery( "#slideretamobile" ).slider( "value" ) );
} );*/

jQuery("#popinfo1mobile").popover();

jQuery("#popinfo2mobile").popover();

jQuery("#popinfo3mobile").popover();

jQuery("#popinfo4mobile").popover();

                                        
jQuery( function() {
  jQuery( "#slideprezzomobile" ).slider({
    range: "max",
    min: 0,
    max: 500,
    value: 0,
    slide: function( event, ui ) {
      jQuery( "#valoreprezzomobile" ).val( ui.value );
    }
  });
  jQuery( "#valoreprezzomobile" ).val( jQuery( "#slideprezzomobile" ).slider( "value" ) );
} );
          

jQuery( function() {
  jQuery( "#sliderpero" ).slider({
    range: "max",
    min: 0,
    max: 36,
    value: 0,
    slide: function( event, ui ) {
      jQuery( "#valorepeso" ).val( ui.value );
    }
  });
  jQuery( "#valorepeso" ).val( jQuery( "#sliderpero" ).slider( "value" ) );
} );


/*jQuery( function() {
  jQuery( "#slidereta" ).slider({
    range: "max",
    min: 0,
    max: 12,
    value: 0,
    slide: function( event, ui ) {
      jQuery( "#valoreeta" ).val( ui.value );
    }
  });
  jQuery( "#valoreeta" ).val( jQuery( "#slidereta" ).slider( "value" ) );
} );*/


jQuery("#popinfo1").popover();

jQuery("#popinfo2").popover();

jQuery("#popinfo3").popover();

jQuery("#popinfo4").popover();


jQuery( function() {
  jQuery( "#slideprezzo" ).slider({
    range: "max",
    min: 0,
    max: 500,
    value: 0,
    slide: function( event, ui ) {
      jQuery( "#valoreprezzo" ).val( ui.value );
    }
  });
  jQuery( "#valoreprezzo" ).val( jQuery( "#slideprezzo" ).slider( "value" ) );
} );



jQuery(document).ready(function ($) {
        jQuery(window).stellar();
});



jQuery(document).ready(function(){

    setaltezzaimmaginepagina();    

    jQuery(window).scroll(function (){
       spallafissa();
       scrolltobottomcambiaclasse();
    });


    jQuery(".scrollbottom").click(function(){
        posizionascrollbottom();
    });      

    accordion();

    jQuery(".accordion").click(function(){
        if (jQuery(this).hasClass("aperto")){
            accordion();
        }else{
            accordion();
            jQuery(this).next(".contaccordion").slideDown(300, function() {
                jQuery(this).addClass("aperto");
                jQuery(this).removeClass("chiuso");
            });
            jQuery(this).removeClass("chiuso");
            jQuery(this).addClass("aperto");
        }

    });


    jQuery("a#chiudimodal").click(function(){
        $('#modalspallafiltrimobile').modal('hide');
    });



});

jQuery(window).load(function(){
    setTimeout(centratestoslider, 500);
    centrascopribox();
    setTimeout(spallafissa,1000);
    centraevidenza();
    setTimeout(margineelencoprd,500);
    scrolltobottomcambiaclasse();
});


jQuery(window).resize(function(){
   setaltezzaimmaginepagina();    
   spallafissa();
   centratestoslider();
   centrascopribox();
   centraevidenza();
   margineelencoprd();
});


function spallafissa(){
    var iniziospallaaltezza=-jQuery("#pagina > header").height()+jQuery(".testata").height() + jQuery(".immaginepagina").height()+ jQuery(".intestazionepagina").height();
    var finespallaaltezza=(-jQuery("#pagina > header").height()+jQuery(".testata").height() + jQuery(".immaginepagina").height()+ jQuery(".intestazionepagina").height()+jQuery(".continfopagina").height())-(jQuery("aside#spalla").height());

    if(     (jQuery(window).scrollTop() > iniziospallaaltezza) && (jQuery(window).scrollTop() < finespallaaltezza) ){
            jQuery("aside#spalla").addClass("spallafissa");
            jQuery("aside#spalla").removeClass("spallamobile");
            jQuery("aside#spalla").css("top",jQuery("header#testata").height());
        }else{
            jQuery("aside#spalla").addClass("spallamobile");
            jQuery("aside#spalla").removeClass("spallafissa");
            jQuery("aside#spalla").css("top","auto");
        }
}

function setaltezzaimmaginepagina(){ 
    var larghezzaimgpagina=jQuery(".immaginepagina").width();
    var altezzaimgpagina=(larghezzaimgpagina*750)/1920;
    jQuery(".immaginepagina").height(altezzaimgpagina);
}

function centratestoslider(){
    var altezzaimmagine=jQuery(".immaginepagina").height();
    var altezzaboxtesto=jQuery(".continfoimg").height();
    jQuery(".continfoimg").css("margin-top",(altezzaimmagine/2)-(altezzaboxtesto/2));
}
function centraevidenza(){
    jQuery( ".elencoprodottipagina span.evidenza").each(function() {

        jQuery(this).css("margin-left",-(jQuery(this).outerWidth()/2));
        jQuery(this).css("left","50%");
    });
}
function centrascopribox(){
    jQuery("#bannerpromo .box span.scopri").css("margin-left",-(jQuery("#bannerpromo .box span.scopri").outerWidth()/2));
}

function margineelencoprd(){
    jQuery( ".prd").each(function() {
        var margineprd=jQuery(this).children(".contnomeprd").height();
        jQuery(this).children(".contnomeprd").css("bottom",-margineprd);
        jQuery(this).css("margin-bottom",margineprd);
    });
}
function posizionascrollbottom(){
    jQuery('html, body').animate({
        scrollTop: jQuery(".intestazionepagina").offset().top
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

function accordion(){
    jQuery(".accordion").each(function(){
        jQuery(this).removeClass("aperto");
        jQuery(this).addClass("chiuso");
        jQuery(this).next(".contaccordion").slideUp('fast', function() {
            jQuery(this).removeClass("aperto");
            jQuery(this).addClass("chiuso");
        });
    });
}
        
