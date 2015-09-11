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