$(document).ready(function() {
	console.log("Let's get ready to party with jQuery!");
});
$('img').addClass('image-center');
$('p').get($('p').get().length - 1).remove();
$('#title').css('font-size', `${Math.floor(Math.random() * 101)}px`);
$('ol').append('<li>I love puppies!</li>');
$('aside').children().remove();
$('aside').append("<p>I am sorry for this aside's existance.</p>");

$('.form-control').on('keyup', function() {
	console.log('here');
	const colorsList = $('.form-control');
	console.log(colorsList.get().length);
	const red = colorsList.eq(0).val();
	const green = colorsList.eq(1).val();
	const blue = colorsList.eq(2).val();
	console.log(`rgb(${red}, ${green}, ${blue})`);
	$('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
});
$('img').on('click', function(event) {
	event.target.remove();
});
