$('#header>button').click(
	function(){
		$('#header>button').css('display','none');
		$('#header>div').css('display','none');
		$('#header').css('height','15%');
		$('#header>span').css('font-size','1.8rem');
		$('#header>span').css('top','20%');
		$('#header ul').css('top','65%');
		$('#content').css('height','100%');
		$('#content').css('display','block');
	}
)

$('#header>span').click(
	function(){
		$('#header>button').css('display','block');
		$('#header>div').css('display','block');
   		$('#header').css('height','90%');
		$('#header>span').css('font-size','2rem');
		$('#header>span').css('top','35%');
   		$('#header ul').css('top','90%');
		$('#content').css('height','0%');
		$('#content').css('display','none');
	}
)

$('.ui.top>.item').click(
	function(){
		$('.ui.top>.item').removeClass('active');
		$(this).addClass('active');
	}
)

$('.ui.bottom#announce_content .item').click(
	function(){
		$('.ui.bottom#announce_content .item').removeClass('active');
		$(this).addClass('active');
	}
)

$('.ui.bottom#research_content .item').click(
	function(){
		$('.ui.bottom#research_content .item').removeClass('active');
		$(this).addClass('active');
	}
)

$('.ui.bottom#about_content .item').click(
	function(){
		$('.ui.bottom#about_content .item').removeClass('active');
		$(this).addClass('active');
	}
)

$('.ui.bottom#people_content .item').click(
	function(){
		$('.ui.bottom#people_content .item').removeClass('active');
		$(this).addClass('active');
	}
)

$('.ui.bottom#students_content .item').click(
	function(){
		$('.ui.bottom#students_content .item').removeClass('active');
		$(this).addClass('active');
	}
)

$('.ui.bottom#links_content .item').click(
	function(){
		$('.ui.bottom#links_content .item').removeClass('active');
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
		$('#people_content').addClass('show');
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
