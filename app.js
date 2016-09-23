/*  shape control   */
$('.shape').shape();

var opt = {
	animate_period: 3000
}

var a = window.setInterval(
  function(){
    $('.shape').shape('flip up');
    console.log("run");
  },
  opt.animate_period
);
/*  global         */
$('#header>button').click(
	function(){
		$('#header>button').css('display','none');
		$('#header>div').css('display','none');
		$('#header').css('height','15%');
		$('#header>span').css('font-size','1.8rem');
		$('#header>span').css('top','20%');
		$('#header ul').css('top','65%');
		$('#content').css('height','120%');
		$('#content').css('display','block');
		window.clearInterval(a);
	}
);

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
		a = window.setInterval(
			function(){
				$('.shape').shape('flip up');
			},
			2500
		);
	}
);

$('.ui.top>.item').click(
	function(){
		$('.ui.top>.item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom#announce_content .item').click(
	function(){
		$('.ui.bottom#announce_content .item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom#research_content .item').click(
	function(){
		$('.ui.bottom#research_content .item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom#about_content .item').click(
	function(){
		$('.ui.bottom#about_content .item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom#people_content .item').click(
	function(){
		$('.ui.bottom#people_content .item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom#students_content .item').click(
	function(){
		$('.ui.bottom#students_content .item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom#links_content .item').click(
	function(){
		$('.ui.bottom#links_content .item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.top>.item').click(
  function(){
    $(".top").attr('data-content',$(this).attr('id').replace('$',/_content/));
  }
);
/*
$('#announce').click(
	function(){
		$('.segment').removeClass('show');
		$('#announce_content').addClass('show');
	}
);

$('#research').click(
	function(){
    $('.segment').removeClass('show');
    $('#research_content').addClass('show');
	}
);

$('#about').click(
	function(){
		$('.segment').removeClass('show');
		$('#about_content').addClass('show');
	}
);

$('#people').click(
	function(){
		$('.segment').removeClass('show');
		$('#people_content').addClass('show');
	}
);

$('#students').click(
	function(){
		$('.segment').removeClass('show');
		$('#students_content').addClass('show');
	}
);

$('#links').click(
	function(){
		$('.segment').removeClass('show');
		$('#links_content').addClass('show');
	}
);
*/

// $('#news_button').click(
// 	function(){
// 		$('.column').attr('data','news');	
// 	}
// );
// 
// $('#admission_button').click(
// 	function(){
// 		$('.column').attr('data','admission');
// 	}
// );
// 
// $('#scholarship_button').click(
// 	function(){
// 		$('.column').attr('data','scholarship');
// 	}
// );
// 
// $('#employment_button').click(
// 	function(){
// 		$('.column').attr('data','employment');
// 	}
// );

$('#announce_content .item').click(function(){
	$('.column').attr('data', $(this).attr('id').replace(/_button$/, ''))
})

// vi:et:nowrap:sw=2:ts=2
