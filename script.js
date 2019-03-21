$(document).ready(function(){
	


$(window).scroll(function() {

    if ($(window).scrollTop()>75)
     {
		 $('.under').fadeOut().addClass("change");
		 
     }
	
	  else 
     {
		 $('#under').addClass("under").removeClass("change");
     }
			
		});
	
	
	});
