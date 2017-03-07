jQuery(document).ready(function () {

    /* [GF] BARRA RICERCA */
    jQuery('#cercasvg').on('click', function () {
        //alert("show");
        if (jQuery('#js-site-search-input').hasClass('hidden-search')) {
            //alert("show");
            jQuery('#js-site-search-input').addClass('showed-search').addClass('fadeInDown').removeClass('hidden-search').removeClass('fadeOutUp');
        } else if (jQuery('#js-site-search-input').hasClass('showed-search')) {
            //alert("hide");
            jQuery('#js-site-search-input').addClass('fadeOutUp').addClass('hidden-search').removeClass('showed-search').removeClass('fadeInDown');

        }
    });
    /* [GF] MENU */


    jQuery('li.hasSubLevel > .dropdown-toggle').on('click', function () {
        var target = $(this).data('target');
        var level = $(this).data('level');

        //jQuery('.' + level).hide();
        //alert(target);
        if (jQuery(this).hasClass('voceaperta')) {
            jQuery('#' + target).removeClass('fadeInDown').addClass('fadeOutUp').removeClass('showed-menu').addClass('hidden-menu');
            //alert('voceaperta');
            jQuery(this).removeClass('voceaperta');
            jQuery('#sliderhome').css('top', 0);


        } else {
            //alert('showed');
            jQuery('.showed-menu').addClass('fadeOutUp').addClass('hidden-menu').removeClass('fadeInDown').removeClass('showed-menu');
            jQuery('.voceaperta').removeClass('voceaperta');
            jQuery('#' + target).removeClass('hidden-menu').removeClass('fadeOutUp').addClass('fadeInDown').addClass('showed-menu');
            var sh = jQuery(window).scrollTop();
            jQuery(this).addClass('voceaperta');
            if (sh < 10) {
                var h = jQuery('#'+target).outerHeight();
                //alert(h);
                jQuery('#sliderhome').css('top', h);
            }

        }


    });

    /*[GF] Sub level Menù*/
    jQuery(".category-secondlevel").mouseover(function () {
        var target = $(this).data('target');
        var parent = $(this).data('parent');
        //alert(parent);
        //DESCRIPTION
        jQuery("#" + parent + " .dsccatshowed").removeClass('dsccatshowed').addClass('dsccathidden');
        jQuery('#' + target).removeClass('dsccathidden').addClass('dsccatshowed');
        //TITLE
        jQuery("#" + parent + " .titlecatshowed").removeClass('titlecatshowed').addClass('titlecathidden');
        jQuery(this).removeClass('titlecathidden').addClass('titlecatshowed');

    });


    jQuery("#pagina > header .contmenutop button.navbar-toggle").click(function(){
        if (jQuery("#pagina > header").hasClass("menutopaperto")){
            jQuery("#pagina > header").removeClass("menutopaperto");
            jQuery("#pagina > header").addClass("menutopchiuso");
        }else{
            jQuery("#pagina > header").removeClass("menutopchiuso");
            jQuery("#pagina > header").addClass("menutopaperto");
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


    $(window).scroll(function () {
        var sh = jQuery(window).scrollTop();
        if (sh < 10) {
            var h = jQuery('#menusottostante').height();
            jQuery('.BigBannerWord .banner').css('top', h);
        } else {
            jQuery('.BigBannerWord .banner').css('top', 0);
        }
    });
});



/* DM Slider  filtri Mobile*/

/*jQuery( function() {
    var min = parseInt($('#mobileFilterMin').text());
    var max = parseInt($('#mobileFilterMax').text());
    jQuery( "#slideretamobile" ).slider({
        range: "max",
        min: min,
        max: max,
        value: min,
        slide: function( event, ui ) {
            jQuery( "#valoreetamobile" ).val( ui.value );
        }
    });
    jQuery( "#valoreetamobile" ).val( jQuery( "#slideretamobile" ).slider( "value" ) );
} );*/

/*DM Slider filtri Desktop*/
/*jQuery( function() {
    var min = parseInt($('#filterMin').text());
    var max = parseInt($('#filterMax').text());
    jQuery( "#slidereta" ).slider({
        range: "max",
        min: min,
        max: max,
        value: min,
        slide: function( event, ui ) {
            jQuery( "#valoreeta" ).val( ui.value );
        }
    });
    jQuery( "#valoreeta" ).val( jQuery( "#slidereta" ).slider( "value" ) );
} );*/

    //facet mobile


    var arrval = jQuery('#slidereta').data('allkey');
    if(typeof arrval != "undefined"){

        //facet desktop
        var bigValueSlider = document.getElementById('slidereta');

        var arrval = jQuery('#slidereta').data('allkey');
        var arrval = arrval.substring(0, arrval.length - 1);
        var start  = jQuery('#slidereta').data( 'start' );
        var arrval = arrval.split(",");

        noUiSlider.create(bigValueSlider, {
            start: start,
            step: 1,

            range: {
                min: 0,
                max: arrval.length - 1
            }
        });

        bigValueSlider.noUiSlider.on('update', function ( values, handle ) {
            var value = arrval[parseInt(values[handle])];
            $('#valoreeta').val(value);
        });

        bigValueSlider.noUiSlider.on('change', function ( values, handle ) {
            var value = arrval[parseInt(values[handle])];
            var url = $('#slidereta').data('k' + value);
            window.location.href =url;
        });
    }



/*Altezza Facet */
function spallafissa(){
    var iniziospallaaltezza=-jQuery("#pagina > header").height()+jQuery(".testata").height() + jQuery(".immaginepagina").height()+ jQuery(".intestazionepagina").height();
    var finespallaaltezza=(-jQuery("#pagina > header").height()+jQuery(".testata").height() + jQuery(".immaginepagina").height()+ jQuery(".intestazionepagina").height()+jQuery(".continfopagina").height())-(jQuery("aside#spalla").height());

    if(     (jQuery(window).scrollTop() > iniziospallaaltezza) && (jQuery(window).scrollTop() < finespallaaltezza) ){
        jQuery("aside#spalla").addClass("spallafissa");
        jQuery("aside#spalla").removeClass("spallamobile");
       // jQuery("aside#spalla").css("top",jQuery("header#testata").height());
        jQuery("aside#spalla").css("top","auto");
    }else{
        jQuery("aside#spalla").addClass("spallamobile");
        jQuery("aside#spalla").removeClass("spallafissa");
        jQuery("aside#spalla").css("top","auto");
    }
}


/*Regola Filtro quando viene selezionato la caratteristica desiderata rimane aperta*/

function accordion(){
    jQuery(".accordion").each(function(){
        jQuery(this).removeClass("aperto");
        jQuery(this).addClass("chiuso");
        jQuery(this).next(".contaccordion").slideUp('fast', function() {
            jQuery(this).removeClass("aperto");
            jQuery(this).addClass("chiuso");

            if($('#spunta').attr('checked')) {
                jQuery(this).addClass("aperto");
                jQuery(this).removeClass("chiuso");
            }

        });
    });
}




/* barra Menu dettaglio prodotto*/

jQuery(document).ready(function(){
    jQuery(".rigadescrizione").html(jQuery(".contenitoreperscrollbar").html());
    var videohtml="<div id='videoprdmobilefocus' class='videoprd'>"+jQuery(".videoprd .aprivideo").first().outerHTML+"</div>";
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






/* Video Dettaglio Prdotto*/

    jQuery("#imgplayjt1").click(function(){
        jQuery("#videoyt1").modal();
    });
    jQuery("#testoplayjt1").click(function(){
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

jQuery(document).ready(function () {

    /* nbeghin hide blocco prezzo se vuoto */
    if ($('div.prezzoprodottodettaglio').length && $.trim($('div.prezzoprodottodettaglio').html()).length == 0) {
        $('div.prezzoprodottodettaglio').remove();
    }

    if ($('div.costoprd').length && $.trim($('div.costoprd').html()).length == 0) {
        $('div.costoprd').remove();
    }

/*JS per pagina di login */
    jQuery("#staterrore").modal('hide');
    jQuery("#statook").modal('hide');

    switch ($_GET('stato')) {
        case "errore":

            jQuery("#staterrore").modal('show');
            break;
        case "ok":

            jQuery("#statook").modal('show');
            break;
    }

    /* RSS feed */
    if ($('body.page-homepage').length) {
        var rss_feed_url = 'http://blog.pegperego.com/feed';
        $("#box2sinistra .descrizionebox1sinistra").html('');
        $("#box2sinistra .descrizionebox1sinistra").rss(rss_feed_url, {
            ssl: true,
            limit: 4,
            error: function(){ console.log('Unable to load RSS feed from '+rss_feed_url); },
            entryTemplate:'<li><a target="_blank" href="{url}">{title}</a></li>'
        })
    }
});


function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

/*[GF] Fix Per checkbox*/
jQuery('.checkbox input[type="checkbox"] ').on('click', function () {

    var id = $(this).attr('id');
    //alert(id);
    if ( $('#' + id).is(":checked")) {
        //alert("chcek");
        $("label[for='" + id + "']").addClass('checked');
    } else{
        //alert("not chcek");
        $("label[for='" + id + "']").removeClass('checked');
    }
});

