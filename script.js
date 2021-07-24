
$(document).ready(function () {
  $("#desi1").click(function () {
    $("#para1").toggle();
    $("#desi1").toggle();
  });
  $("#para1").click(function () {
    $("#para1").toggle();
    $("#desi1").toggle();
  });

  $("#development1").click(function () {
    $("#para2").toggle();
    $("#development1").toggle();
  });
  $("#para2").click(function () {
    $("#para2").toggle();
    $("#development1").toggle();
  });

  $("#management1").click(function () {
    $("#para3").toggle();
    $("#management1").toggle();
  });
  $("#para3").click(function () {
    $("#para3").toggle();
    $("#management1").toggle();
  });
  });

  $(document).ready(function() {
    $(".image1").mouseenter(function() {
               $(".image").show();
               $(".image1").css("opacity","0.7");
    });
    $(".image1").mouseleave(function() {
               $(".image").hide();
               $(".image1").css("opacity","3");
    });
}); 
