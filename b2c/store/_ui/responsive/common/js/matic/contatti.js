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

        jQuery("#clickstatoerrore").click();
    break;
    case "ok":

        jQuery("#clickstatook").click();
    break;           
}
jQuery(document).ready(function(){

});


jQuery(window).load(function(){

});


jQuery(window).resize(function(){

});
        

