$(document).ready(function(){
  // Fade in page title
  $("h1").hide().fadeIn(2000);

  // Hover effect on profile image
  $(".profile-img").hover(
    function(){ $(this).css("transform", "scale(1.1)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );
});
