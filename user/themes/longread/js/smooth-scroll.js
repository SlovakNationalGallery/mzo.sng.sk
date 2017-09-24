// enable smooth scrolling on internal hash anchor links    
// also enable set hash behaviour on section titles
document.addEventListener("DOMContentLoaded", function(event) {
	$('a[href*=\\#]:not([href=\\#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({ scrollTop: target.offset().top }, 500);
	      if ($(this).hasClass('sethash')) {
		      location.hash = this.hash;
	      }
	      return false;
	    }
	  }
	});
});