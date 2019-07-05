$(document).ready(function(){
  $(".menu-burger").click(function(){
  	if (window.matchMedia('(max-width: 767px)').matches) {
        
    } else {
	  	if($(this).attr('data-toggle') == 0){
	  		$(this).find('i').removeClass('fa-navicon');
	  		$(this).find('i').addClass('fa-arrow-left');
	  		$(this).find('i').css('color', '#E1E2E2');
			$('.menu').animate({
		    	width:'20%'
		    }), $(this).animate({
		    	left: '15%',
		    	top: '1%'
		    }), $('.menu-items').fadeToggle();
		    $(this).attr('data-toggle', '1');
		}
		else{
			$(this).find('i').addClass('fa-navicon');
	  		$(this).find('i').removeClass('fa-arrow-left');
	  		$(this).find('i').css('color', '#1D2228');
	  		$('.menu-items').fadeToggle(), $('.menu').animate({
		    	width:'0%'
		    }), $(this).animate({
		    	left: '0%',
		    	top: '0%'
		    });
		    $(this).attr('data-toggle', '0');
		}	
    }
  });
});