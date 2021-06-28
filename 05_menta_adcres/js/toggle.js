$(function(){
  $("#accordion dt").on("click", function() {
      $(this).toggleClass('open');
      $(this).next().slideToggle(200);
  });

});