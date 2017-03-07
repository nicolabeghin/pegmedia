jQuery(function () {
    jQuery.datepicker.setDefaults(
        jQuery.extend(jQuery.datepicker.regional['it'])
    );
    jQuery('#datanascita').datepicker({changeMonth: true, changeYear: true, yearRange: "-100:+0"});
});


jQuery('#prov').selectpicker({
    style: 'btn-info',
    size: 4
});


jQuery('#stato').selectpicker({
    style: 'btn-info',
    size: false
});

/*
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

switch ($_GET('stato')) {
    case "errore":

        jQuery("#clickstatoerrore").click();
        break;
    case "ok":

        jQuery("#clickstatook").click();
        break;
}
*/
$(document).ready(function () {
    jQuery(".conttab").css("visibility", "hidden");
    jQuery("a.recupera_password").click(function () {
        jQuery("div.esegui_accesso").css("display", "none");
        jQuery("div.recuperapss").css("display", "block");
        setaltezzacornici();
    });

    jQuery("a.linkaccedi").click(function () {
        jQuery("div.esegui_accesso").css("display", "block");
        jQuery("div.recuperapss").css("display", "none");
        setTimeout(setaltezzacornici, 200);
    });

    jQuery("a.linkregistrazione").click(function () {
        jQuery("div.esegui_accesso").css("display", "block");
        jQuery("div.recuperapss").css("display", "none");
        setTimeout(setaltezzacornici, 200);

    });

});

$(window).load(function () {
    setaltezzacornici();
});

$(window).resize(function () {
    setaltezzacornici();
});

function setaltezzacornici() {
    var altezza_tabs = jQuery(".conttab").height();
    var altezza_menu_tab = jQuery("ul.nav-tabs").height();
    var marginetoptab = altezza_menu_tab + 65;
    jQuery(".conttab").css("margin-top", marginetoptab);
    jQuery(".cornice1").css("height", altezza_tabs + altezza_menu_tab);
    jQuery(".cornice2").css("height", altezza_tabs + altezza_menu_tab);
    jQuery(".conttab").css("visibility", "visible");
}
