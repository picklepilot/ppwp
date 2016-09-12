// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	class Hero {
		constructor() {
			$('.hero-slider').flexslider({
				animation: "slide"
			});
		}
	}
	
	const hero = new Hero();

} )( jQuery, window, document );

