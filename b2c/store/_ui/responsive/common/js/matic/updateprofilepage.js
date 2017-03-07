
jQuery(document).ready(function(){
    jQuery(":file").jfilestyle({input: false});
});


jQuery(document).ready(function(){
    jQuery("#informazionibase :input").attr("disabled", true);
    jQuery("#modinfogeneriche").click(function(){
        jQuery("#informazionibase :input").attr("disabled", false);
    });

    jQuery(".imgtonda").click(function(){
        jQuery("span.focus-jfilestyle > label").click();
    });


});



jQuery.datepicker.setDefaults(
    jQuery.extend(jQuery.datepicker.regional['it'])
);
jQuery('#stato1').selectpicker({
    style: 'btn-info',
    size: 4
});


jQuery.datepicker.setDefaults(
    jQuery.extend(jQuery.datepicker.regional['it'])
);
jQuery('#provincia1').selectpicker({
    style: 'btn-info',
    size: 4
});



jQuery("#aggiungiindirizzo").click(function(){
    var numeroindirizzi=jQuery( "#formimieindirizzi > .campiindirizzo" ).length;
    numeroindirizzi++;

    var htmlindirizzo=jQuery("#formimieindirizzi > #campiindirizzo1").html();
    var htmleliminaindirizzo='<div class="eliminaindirizzo"><a id="eliminaindirizzo" onclick=eliminaindirizzo(this) href="javascript:void(0)">Elimina  Indirizzo    <svg version="1.1" xmlns="http://www.w3.org/2.000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="5px" height="9px" viewBox="0 0 5 9" enable-background="new 0 0 5 9" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.785,9c0.184,0,0.368-0.075,0.507-0.226l3.431-3.697 C5,4.778,5,4.297,4.723,3.999L1.292,0.301C1.014,0.002,0.562,0,0.282,0.298C0.001,0.595,0,1.08,0.278,1.379l2.931,3.158L0.278,7.696 C0,7.996,0.001,8.48,0.282,8.778C0.421,8.926,0.603,9,0.785,9z"></path></svg></a></div>';
    jQuery('#formimieindirizzi > .campiindirizzo:last').after('<div class="campiindirizzo" id="campiindirizzo'+numeroindirizzi+'" >'+htmlindirizzo+htmleliminaindirizzo+'</div>');
    jQuery("#formimieindirizzi > #campiindirizzo"+numeroindirizzi+" :input[type='text']").each(function(){

        if(jQuery(this).attr("id").indexOf("via") >= 0){
            jQuery(this).attr("id",'via'+numeroindirizzi);
            jQuery(this).attr("name","via"+numeroindirizzi);
        }
        if(jQuery(this).attr("id").indexOf("cap") >= 0){
            jQuery(this).attr("id",'cap'+numeroindirizzi);
            jQuery(this).attr("name","cap"+numeroindirizzi);
        }
        if(jQuery(this).attr("id").indexOf("citta") >= 0){
            jQuery(this).attr("id",'citta'+numeroindirizzi);
            jQuery(this).attr("name","citta"+numeroindirizzi);
        }
        if(jQuery(this).attr("id").indexOf("etichetta") >= 0){
            jQuery(this).attr("id",'etichetta'+numeroindirizzi);
            jQuery(this).attr("name","etichetta"+numeroindirizzi);
        }

    });

    jQuery("#formimieindirizzi > #campiindirizzo"+numeroindirizzi+" div.bootstrap-select").each(function(){
        var stringahtml=jQuery(this).html();
        if(stringahtml.indexOf("stato") >= 0){
            jQuery(this).replaceWith('<select class="selectpicker" id="stato'+numeroindirizzi+'" name="stato'+numeroindirizzi+'" >'+jQuery("#formimieindirizzi > #campiindirizzo1 #stato1").html()+'</select>');
            jQuery('#stato'+numeroindirizzi).selectpicker({
                style: 'btn-info',
                size: 50
            });
        }else{
            jQuery(this).replaceWith('<select class="selectpicker" id="provincia'+numeroindirizzi+'" name="provincia'+numeroindirizzi+'">'+jQuery("#formimieindirizzi > #campiindirizzo1 #provincia1").html()+'</select>');
            var idelemento=jQuery(this).attr("id");
            jQuery('#provincia'+numeroindirizzi).selectpicker({
                style: 'btn-info',
                size: 50
            });
        }
        jQuery("#formimieindirizzi :input").attr("disabled", false);

    });
});

jQuery("#modindirizzo").click(function(){
    jQuery("#formimieindirizzi :input").attr("disabled", false);
});

function eliminaindirizzo(elementocliccato){
    var genitore=jQuery(elementocliccato).parents(".campiindirizzo");
    genitore.remove();

    var numeroindirizzi=jQuery( "#formimieindirizzi > .campiindirizzo" ).length;

    var contatorenumeroindirizzi=1;
    jQuery("#formimieindirizzi .campiindirizzo").each(function(){



        jQuery(this).each(function(){
            jQuery(this).attr("id","campiindirizzo"+contatorenumeroindirizzi);
            var idcontenitore=jQuery(this).attr("id");
            jQuery("#"+idcontenitore+ " input[type='text']").each(function(){
                if(jQuery(this).attr("id").indexOf("via") >= 0){
                    jQuery(this).attr("id",'via'+contatorenumeroindirizzi);
                    jQuery(this).attr("name","via"+contatorenumeroindirizzi);
                }
                if(jQuery(this).attr("id").indexOf("cap") >= 0){
                    jQuery(this).attr("id",'cap'+contatorenumeroindirizzi);
                    jQuery(this).attr("name","cap"+contatorenumeroindirizzi);
                }
                if(jQuery(this).attr("id").indexOf("citta") >= 0){
                    jQuery(this).attr("id",'citta'+contatorenumeroindirizzi);
                    jQuery(this).attr("name","citta"+contatorenumeroindirizzi);
                }
                if(jQuery(this).attr("id").indexOf("etichetta") >= 0){
                    jQuery(this).attr("id",'etichetta'+contatorenumeroindirizzi);
                    jQuery(this).attr("name","etichetta"+contatorenumeroindirizzi);
                }
                if(jQuery(this).attr("id").indexOf("provincia") >= 0){
                    jQuery(this).attr("id",'provincia'+contatorenumeroindirizzi);
                    jQuery(this).attr("name","provincia"+contatorenumeroindirizzi);
                }
                if(jQuery(this).attr("id").indexOf("stato") >= 0){
                    jQuery(this).attr("id",'stato'+contatorenumeroindirizzi);
                    jQuery(this).attr("name","stato"+contatorenumeroindirizzi);
                }
            });

            jQuery("#"+idcontenitore+" div.bootstrap-select").each(function(){
                var stringahtml=jQuery(this).html();
                if(stringahtml.indexOf("stato") >= 0){
                    jQuery(this).replaceWith('<select class="selectpicker" id="stato'+contatorenumeroindirizzi+'" name="stato'+contatorenumeroindirizzi+'" >'+jQuery("#formimieindirizzi > #campiindirizzo1 #stato1").html()+'</select>');
                    jQuery('#stato'+contatorenumeroindirizzi).selectpicker({
                        style: 'btn-info',
                        size: 50
                    });
                }else{
                    jQuery(this).replaceWith('<select class="selectpicker" id="provincia'+contatorenumeroindirizzi+'" name="provincia'+contatorenumeroindirizzi+'">'+jQuery("#formimieindirizzi > #campiindirizzo1 #provincia1").html()+'</select>');
                    var idelemento=jQuery(this).attr("id");
                    jQuery('#provincia'+contatorenumeroindirizzi).selectpicker({
                        style: 'btn-info',
                        size: 50
                    });
                }

            });

        });
        contatorenumeroindirizzi++;
    });
}

jQuery("#formimieindirizzi :input").attr("disabled", true);

jQuery.datepicker.setDefaults(
    jQuery.extend(jQuery.datepicker.regional['it'])
);
jQuery('#ingravidanza').selectpicker({
    style: 'btn-info',
    size: 4
});
function selectgravidanza(valore){
    if(valore==="si"){
        jQuery("#baloongrfavidanza").css("display","block");
        jQuery("#baloongrfavidanza").html('<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 nopadding"><p class="campoform">Data prevista del parto</p></div><div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 nopadding"><div class="form-group"><input type="text" readonly placeholder="data prevista del parto" class="form-control" id="dataprevistaparto" name="dataprevistaparto" readonly/></div></div>');
        jQuery('#dataprevistaparto').datepicker( {changeMonth: true,changeYear: true,yearRange: "-100:+0"});
    }else{
        jQuery("#baloongrfavidanza").css("display","none");
        jQuery("#baloongrfavidanza").html("");
        jQuery('#dataprevistaparto').datepicker("remove");

    }
}


jQuery('#numerofigli').selectpicker({
    style: 'btn-info',
    size: 12
});
function selectnumerofigli(valore){
    if(valore > 0){
        jQuery("#baloonnumerofigli").css("display","block");
        var stringacampi='';
        for (i = 1; i <= valore; i++) {
            stringacampi+='<div class="sottorigacalendario"><div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 nopadding"><p class="campoform">Data di nascita figlio '+i+'</p></div><div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 nopadding"><div class="form-group"><input readonly type="text" placeholder="data nascita figlio '+i+'" class="form-control" id="datanascita'+i+'" name="datanascita'+i+'" readonly/></div></div></div>';
        }

        jQuery("#baloonnumerofigli").html(stringacampi);
        for (i = 1; i <= valore; i++) {
            jQuery('#datanascita'+i+'').datepicker( {changeMonth: true,changeYear: true,yearRange: "-100:+0"});
        }
    }else{
        jQuery("#baloonnumerofigli").css("display","none");
        jQuery("#baloonnumerofigli").html("");
        jQuery('#datanascita1').datepicker("remove");
    }
}


jQuery('#haiprodotto').selectpicker({
    style: 'btn-info',
    size: 4
});
function selecthaiprodotto(valore){
    if(valore ==="si"){
        jQuery("#baloonhaiprodotto").css("display","block");
        jQuery("#baloonhaiprodotto").html('<div class="sottorigacalendario"><div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 nopadding"><p class="campoform">Nome Prodotto</p></div><div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 nopadding"><div class="form-group"><input data-idcont="1" type="text" id="nomeprd1" name="nomeprd1" placeholder="Nome Prodotto"></div></div></div>');
        jQuery("#baloonhaiprodotto").append('<div class="rigaaggiungiprd"><a onclick="clickaggiungiprd()" id="aggiungiprd" href="javascript:void(0)">Aggiungi Prodotto <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><path fill="#FFFFFF" d="M14.479,6.461H9.539v-4.94C9.539,0.684,8.836,0,8,0C7.163,0,6.461,0.684,6.461,1.521v4.94h-4.94	C0.684,6.461,0,7.163,0,8c0,0.836,0.684,1.539,1.521,1.539h4.94v4.939C6.461,15.314,7.163,16,8,16c0.836,0,1.539-0.686,1.539-1.521	V9.539h4.939C15.314,9.539,16,8.836,16,8C16,7.163,15.314,6.461,14.479,6.461L14.479,6.461z M14.479,6.461"/></svg></a></div>');

    }else{
        jQuery("#baloonhaiprodotto").css("display","none");
        jQuery("#baloonhaiprodotto").html();
    }
}
function clickaggiungiprd(){
    var numeroelementi=jQuery( "#baloonhaiprodotto > .sottorigacalendario" ).length;
    numeroelementi=numeroelementi+1;
    jQuery('#baloonhaiprodotto > .sottorigacalendario:last').after('<div class="sottorigacalendario"><div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 nopadding"><p class="campoform">Nome Prodotto</p></div><div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 nopadding"><div class="form-group"><input data-idcont="1" type="text" id="nomeprd'+numeroelementi+'" name="nomeprd'+numeroelementi+'" placeholder="Nome Prodotto"><a class="chiudi" onclick="chiudiprodotto(this)" href="javascript:void(0)"></a></div></div></div>');

}
function chiudiprodotto(acliccata){

    jQuery(acliccata).parents(".sottorigacalendario").remove();
    //edit
    jQuery("#baloonhaiprodotto input").each(function(i){

        jQuery(this).attr("id","nomeprd"+(i+1)+"");
        jQuery(this).attr("name","nomeprd"+(i+1)+"");
    });
}


jQuery('#iscrizionenewsletter').selectpicker({
    style: 'btn-info',
    size: 4
});

if ( jQuery(window).width()<768){
    jQuery("form#prdinteressati").css("display","none");
}
jQuery("#prodottiinteressati h1").click(function(){
    if ( jQuery(window).width()<768){
        jQuery("#prdinteressati").slideToggle();
    }
});

jQuery( ".linkprdordinato span" ).on( "click", function() {

    var elementocliccato=jQuery(this).data("id").replace("#","");
    var elementovisibile= jQuery(".contenutovisibile").attr("id");


    jQuery(this).parents(".maincontent").siblings( ".pannelloslide").find(".pannelloelemento").css("display","none").addClass("contenutonascosto").removeClass("contenutovisibile");
    jQuery(this).parents(".maincontent").siblings( ".pannelloslide").find("div"+jQuery(this).data('id')+"").css("display","block").addClass("contenutovisibile").removeClass("contenutonascosto");


    if(jQuery(this).parents(".maincontent").siblings( ".pannelloslide").hasClass('aperto')){

        if ( elementovisibile == elementocliccato ){
            jQuery(this).parents(".maincontent").siblings( ".pannelloslide").slideUp('slow');
            jQuery(this).parents(".maincontent").siblings( ".pannelloslide").removeClass('aperto');
        }

    }else{
        jQuery(this).parents(".maincontent").siblings( ".pannelloslide").slideDown('slow');
        jQuery(this).parents(".maincontent").siblings( ".pannelloslide").addClass('aperto');
    }

});

jQuery(window).resize(function(){
    setTimeout(settaaltezza,0);
});
jQuery("#pagina main#profilo ul#tabspagina li a").click(function(){

    setTimeout(settaaltezza,0);
});


function settaaltezza(){
    jQuery(".elencolistaprodottiprofilo").each(function(){

        var altezzacont=jQuery(this).find(".contimgprdordine").outerHeight();
        var altezzadescr=jQuery(this).find(".infodescprdordinato").outerHeight();

        if(altezzadescr<altezzacont){

            jQuery(this).find(".infodescprdordinato").height(altezzacont);
        }else{
            jQuery(this).find(".infodescprdordinato").height("auto");
        }
    });
}