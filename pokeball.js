var openState = false;

$(".button").click(function() {
    if (openState == false) {
      openState = true;
      $(".red").animate({
          height: "20vh"
      }, 1000);
      $(".white").animate({
          height: "22vh"
      }, 1000);
      $(".black").animate({
          height: "60vh",
          top: "19vh"
      },1000);
      $(this).animate({
          top: "8vh"
      },1000);
      $(".zdmn").animate({
          opacity: "1.0"
      },1000);
    }
    else {
      openState = false;
      $(".red").animate({
          height: "46vh"
      }, 1000);
      $(".white").animate({
          height: "46vh"
      }, 1000);
      $(".black").animate({
          height: "8vh",
          top: "46vh"
      },1000);
      $(this).animate({
          top: "35vh"
      },1000);
      $(".zdmn").animate({
          opacity: "0.0"
      },1000);
    }
});
