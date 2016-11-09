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

$.getJSON('/do', function(it){
  if(it.err)
    return console.log(it.err)
  console.log(it.list.announce)

  let arr = it.list
  d3.select('#date-content').selectAll('.news.info').data(arr.announce).enter().append('div').classed('news info',true).text(function(it){ return it.date })
  d3.select('#news-content').selectAll('.news.info').data(arr.announce).enter().append('div').classed('news info',true).text(function(it){ return it.title })
  d3.select('#admission-content').selectAll('.admission.info').data(arr.admission).enter().append('div').classed('admission info',true).text(function(it){ return it.title })
  d3.select('#scholarship-content').selectAll('.scholarship.info').data(arr.scholarship).enter().append('div').classed('scholarship info',true).text(function(it){ return it.title })
  d3.select('#employment-content').selectAll('.employment.info').data(arr.employment).enter().append('div').classed('employment info',true).text(function(it){ return it.title })
})
/****color style****/
$('#white').click(
  function(){
    $('#content').css('background-color','#E8DAC0')
    $('#content>div').css('background-color','#E8DAC0')
    $('.column').css('background-color','#CAB797')
    $('.grid').css('background-color','#CAB797')
  }
)

$('#teal').click(
  function(){
    $('#content').css('background-color','#80CBC4')
    $('#content>div').css('background-color','#80CBC4')
    $('.column').css('background-color','#9ECF8E')
    $('.grid').css('background-color','#9ECF8E')
  }
)

$('#blue').click(
  function(){
    $('#content').css('background-color','#ABC3BC')
    $('#content>div').css('background-color','#ABC3BC')
    $('.column').css('background-color','#FFE5B4')
    $('.grid').css('background-color','#FFE5B4')
  }
)


$('#olive').click(
  function(){
    $('#content').css('background-color','#DAF5B8')
    $('#content>div').css('background-color','#DAF5B8')
    $('.column').css('background-color','#9CD6BE')
    $('.grid').css('background-color','#9CD6BE')
  }
)

// vi:et:nowrap:sw=2:ts=2
