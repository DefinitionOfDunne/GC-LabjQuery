$(document).ready(function(){
    $('#add-button').click(function() {
        $('.active-items').prepend('<li class="in-cart">' + $('#input-items').val() + '</li>');
   });
  	$('.active-items').on('click', 'li', function() {
  		$(this).removeClass("active-items");
  		$(this).addClass ("bought");	
	});
	$('#clear-button').click(function(){
		$('.active-items').empty();
		$('.bought').empty();
	});
});