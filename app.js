$('#header>button').click(
	function(){
		$('#header>button').css('display','none');
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

$('#announce').click(
	function(){
		$('.segment').removeClass('show');
		$('#announce_content').addClass('show');
	}
)

$('#research').click(
	function(){
		$('.segment').removeClass('show');
		$('#research_content').addClass('show');
	}
)

$('#about').click(
	function(){
		$('.segment').removeClass('show');
		$('#about_content').addClass('show');
	}
)

$('#people').click(
	function(){
		$('.segment').removeClass('show');
		$('#students_content').addClass('show');
	}
)

$('#students').click(
	function(){
		$('.segment').removeClass('show');
		$('#students_content').addClass('show');
	}
)

$('#links').click(
	function(){
		$('.segment').removeClass('show');
		$('#links_content').addClass('show');
	}
)
