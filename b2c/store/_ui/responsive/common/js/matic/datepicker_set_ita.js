/* Italian initialisation for the jQuery UI date picker plugin. */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.it = {
	closeText: "Chiudi",
	prevText: "Precedente",
	nextText: "Successivo",
	currentText: "Oggi",
	monthNames: [ "Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
		"Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre" ],
	monthNamesShort: [ "Gen","Feb","Mar","Apr","Mag","Giu",
		"Lug","Ago","Set","Ott","Nov","Dic" ],
	dayNames: [ "Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato" ],
	dayNamesShort: [ "Dom","Lun","Mar","Mer","Gio","Ven","Sab" ],
	dayNamesMin: [ "Do","Lu","Ma","Me","Gi","Ve","Sa" ],
	weekHeader: "Sm",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.it );

return datepicker.regional.it;

} ) );

