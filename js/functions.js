$(document).ready(function() {
  console.log("Initialized");
});

// Bootstrap Hotspot Initialize
$(function (){
    $('[data-toggle="popover"]').popover({ trigger: "hover" })
});

// Navigation Show Hide
function checkScroll(){

  if($(window).scrollTop() > 100){
    $('.navbar-default').addClass("show-header").removeClass("hide-header");
  }else{
    $('.navbar-default').removeClass("show-header").addClass("hide-header");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
    checkScroll();
  });
}

// Mobile Nav
$(function() {

    $('.menu-toggle').on('click', function() {
          $('body').toggleClass('menu-show');
          $('#menu-toggle').toggleClass('active');
    });
});
