

$('.first_box img').on('touchend',function(){
	var $index = $('.first_box img').index(this);
	console.log($('.first_box img').eq($index).attr('src'));
	var $src = $('.first_box p').eq($index).html();
	$('.first_box img').eq($index).attr('src','../images/'+ $src +'1.png');
	$('.first_box p').eq($index).css('color','white')
})

























