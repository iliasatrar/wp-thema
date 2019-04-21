( function( $ ) {

	wp.customize( 'accent_color', function( value ) {
		value.bind( function( newval ) {
			$('.post-content a').css('color', newval );
			$('.widget-content a').css('color', newval );
			$('.featured-media .sticky-post').css('background', newval );
			$('.widget_search #searchsubmit').css('background', newval ).css('border', newval );
		} );
	} );

} )( jQuery );
