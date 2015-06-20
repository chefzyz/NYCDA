$(document).ready(function(){
	$("body").click(function(){
	$(".slideDiv").hide();
	$(".show_hide").show();
	$('.show_hide').click(function(){
	$(".slideDiv").slideToggle();
	});

	$( "#click" ).click(function() {
  $( "#seal" ).slideUP( "slow");
  });
});



