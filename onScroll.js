(function($){
	$.fn.onScroll = function(fn){		
	   var hT = $(this).offset().top,
	       hH = $(this).outerHeight(),
	       fired = false;
	       $(window).scroll(function() {
	       var wH = $(window).height(),
	       wS = $(window).scrollTop();
				if (wS > (hT+hH-wH) && fired == false){
						 fired = true;
				     fn();
				}	 
	       })
	}
})(jQuery);