$('#header').click(
	function(){
		$('#header').css('height','15%');
		$('#header>span').css('font-size','1.8em');
		$('#header>span').css('top','20%');
		$('#header ul').css('top','65%');
		$('#content').css('height','100%');
	}
)

$('.item').click(
	function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	}
)
