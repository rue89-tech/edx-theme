// listen for the DOMContentLoaded event, then bind our function
document.addEventListener('DOMContentLoaded', function() {
	$faq = $('.faq');
	$item = $faq.find('details');
	$question = $item.find('summary');
	$answer = $item.children().not('summary');
	$answer.addClass('answer').hide();
	$item.on('click', function() {
		$(this).toggleClass('open');
		$(this).children().not('summary').slideToggle(400);
	});
});

// position video in 'about' page
document.addEventListener('DOMContentLoaded', function() {
	if( $('.media .hero').length ) {
		// Resize the modal as it appears
		$('.media').on('click', function(){
			listen = setInterval(waitForModal, 100);
		});
	}
});

function waitForModal(){
	if($('#modal_clone').length) {
		// Stop listening...
		clearInterval(listen);
		// Set size
		doResize();
		// Listen for window resize
		waitForResize();
	}
}

function waitForResize(){
	$(window).resize(function(){
		doResize();
	});
}

function doResize(){
	$width = $('.media .hero img').width();
	$height = $('.media .hero').height();
	$top = $('.media .hero img').offset().top;
	var styles = {
		backgroundColor : '#fff',
		overflow	: 'hidden',
		height		: $height,
		width		: $width,
		padding		: 0
	};
	$('#modal_clone').addClass('resized');
	$('#modal_clone').css(styles);
	// because we have an !important to override
	$('#modal_clone').css('cssText', $('#modal_clone').attr('style')+'top: ' + $top + 'px !IMPORTANT;');
	// Make sure the player doesn't bleed out
	$('#modal_clone iframe').css('max-height', $height);
}
