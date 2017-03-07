       
jQuery(document).ready(function(){

});


jQuery(window).load(function(){
    altezzaboxdestra();
    centrastrisciabox();
});


jQuery(window).resize(function(){
    altezzaboxdestra();
    centrastrisciabox();
});


function altezzaboxdestra(){
    var altezzaboxsinistra=jQuery(".boxsinistraistituzionale").height();
    jQuery(".boxdestroistituzionale").height(altezzaboxsinistra+85);
}
function centrastrisciabox(){
    jQuery( ".fasciaistituzionale" ).each(function() {
        var altezzafascia=jQuery(this).outerHeight();                
        var altezzariga=jQuery(this).parents(".riga").height();                
        jQuery(".fasciaistituzionale").css("margin-top",(altezzariga/2)-(altezzafascia/2));                
    });
}
    

