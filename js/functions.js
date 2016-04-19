$(document).ready(function() {
  console.log("Initialized");
});

$(function (){
	$('[data-toggle="popover"]').popover({ trigger: "hover" })
});

$(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
  var startY = $('.navbar-inverse').height() * 2; //The point where the navbar changes in px
  if($(window).scrollTop() > startY){
    $('.navbar-inverse').addClass("scrolled");
  }else{
    $('.navbar-inverse').removeClass("scrolled");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
    checkScroll();
  });
}