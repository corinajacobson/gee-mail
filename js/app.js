var main = function() {
        $('.email').click(function() {
        $('.email').removeClass('.current');
        $('.email-content').hide();

        $(this).addClass('current');
        $(this).children('email-content').show();
        });

    $(document).keypress(function(event) {
    	if(event.which === 111) {
      		$('.email-content').hide();
      		$('.current').children('.email-content').show();
  		  }

   		else if(event.which === 110) {
      		var currentEmail = $('.current');
      		var nextEmail = currentEmail.next();
      
      		currentEmail.removeClass('current');
      		nextEmail.addClass('current');
    	}
 	 });

}

        	$(document).ready(main);