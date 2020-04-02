$(document).ready(function(){


$("#Mingredients").click(function(){
  $(".gridContent div:first-child ul").toggle();
});

$("#).click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("If you enjoyed this recipe let us know!");
});

$("footer").mouseleave(function() {
  $("footer p").html("Visit this site for more recipes to come!");
});

});
