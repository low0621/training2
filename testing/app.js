$(document).ready(function(){
	$('button[type = submit]').click(function(){
		$.ajax({
			data:{
				id:$('input[name=id]').val()
			},
			url:'./do.njs',
			success:function(data){
				$('#content').html(data);
			}
		});	
		$('#content').html('loading');
	});
});
