$('button').on('click', function() {
	const title = $('input').eq(0).val();
	const rating = $('input').eq(1).val();
	$('body').append(`<div>${title}: ${rating} <button class="remove">Remove Entry</button></div>`);
	$('input').val('');
});
$('body').on('click', '.remove', function() {
	$(this).parent().remove();
});
