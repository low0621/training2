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
    $('#header').attr('data-state','main');
		window.clearInterval(a);
	}
);

$('#header>span').click(
	function(){
    $('#header').attr('data-state','home');
		a = window.setInterval(
			function(){
				$('.shape').shape('flip up');
			},
			opt.animate_period
		);
	}
);

$('.ui.top>.item').click(
	function(){
		$('.ui.top>.item').removeClass('active');
		$(this).addClass('active');
	}
);

$('.ui.bottom .item').click(
	function(){
		$('.ui.bottom .item').removeClass('active');
		$(this).addClass('active');
	}
);
/*
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
);*/

$('.top>.item').click(
  function(){
    $(".top").attr('data-content',$(this).attr('id').replace('$',/_content/));
  }
);

$('#announce_content .item').click(function(){
	$('.column').attr('data', $(this).attr('id').replace(/_button$/, ''))
})

// vi:et:nowrap:sw=2:ts=2
