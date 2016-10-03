/*  shape control   */
$('.shape').shape();

var opt = {
	animate_period: 3000
}

var a = window.setInterval(
  function(){
    $('.shape').shape('flip up');
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
    $(this).addClass('active').siblings('.item').removeClass('active')
	}
);

$('.top>.item').click(
  function(){
    $(".top").attr('data-content',$(this).attr('id').replace('$',/_content/));
  }
);

$('#announce_content .item').click(function(){
	$('.column').attr('data', $(this).attr('id').replace(/_button$/, ''))
})

$.getJSON('/do', { test: true, a: 'b' }, function(data){
  console.log(data)
  if(data.err === true)
    console.log('here')
})

// vi:et:nowrap:sw=2:ts=2
