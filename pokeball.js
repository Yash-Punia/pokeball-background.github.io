var openState = false;

$(".button").click(function() {
    if (openState == false) {
      openState = true;
      $(".red").animate({
          height: "20vh"
      }, 2000);
      $(".white").animate({
          height: "22vh"
      }, 2000);
      $(".black").animate({
          height: "60vh",
          top: "19vh"
      },2000);
      $(this).animate({
          top: "8vh"
      },2000);
      $(".zdmn").animate({
          opacity: "1.0"
      },2000);
    }
    else {
      openState = false;
      $(".red").animate({
          height: "46vh"
      }, 2000);
      $(".white").animate({
          height: "46vh"
      }, 2000);
      $(".black").animate({
          height: "8vh",
          top: "46vh"
      },2000);
      $(this).animate({
          top: "35vh"
      },2000);
      $(".zdmn").animate({
          opacity: "0.0"
      },2000);
    }
});
