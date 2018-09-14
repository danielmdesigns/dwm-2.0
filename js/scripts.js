$(document).ready(function(){
	"use strict";

//README
$("#js-readme").on("click", function(e){
    e.preventDefault();
    $(".is-hidden").slideToggle(800);
    $(this).text($(this).text() === "Read Less" ? "Read More" : "Read Less");
});
	
//GALLERY MOUSE HOVER
$(".gallery-item > a > img").hover(function(){
	$(this).stop().animate({"opacity": "1"}, "slow");
},function(){
	$(this).stop().animate({"opacity": "0.7"}, "slow");
});

//IF HANDHELD, ALL PHOTOS 100% OPACITY
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
  $(".gallery-item > a > img").css({"opacity": "1"});
}
	
//BACK TO TOP
$("#js-top").on("click", function(){
  if($(window).scrollTop() > 0){
	$("html, body").animate({scrollTop: 0}, 1500);
	return false;
  }else{
	//alert("I'm already at the top bro!");
  }
});
	
});