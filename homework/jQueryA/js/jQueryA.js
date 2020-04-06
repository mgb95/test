$(document).ready(function(){

  $("#Mingredients").click(function(){
    $(".gridContent div:first-child").show();
  });

$("#Bingredients").click(function(){
  $(".gridContent div:first-child").hide();
});

$("#Bingredients").click(function(){
  $(".gridContent div:nth-child(2)").show();
});

$("#steps").click(function(){
  $(".gridContent div:nth-child(2)").hide();
});

$("#steps").click(function(){
  $(".gridContent div:first-child").hide();
});

$("#steps").click(function() {
  $(".gridContent div:nth-child(3)").css("background-color", "lightpink");
});

$("#nutrition").click(function() {
  $(".gridContent div:nth-child(4)").html("<center> <b>NAHHH...</b> don't worry about the calories, just enjoy! </center>");
});

$("#photos").click(function() {
  $(".gridContent div:nth-child(5)").toggle();
});

$("#photos").click(function() {
  $(".gridContent div:nth-child(6)").toggle();
});


$("footer").mouseover(function(){
    $("footer p").html("Let me know what you think!");
});

$("footer").mouseleave(function() {
  $("footer p").html("More recipes to come!");
});


});
