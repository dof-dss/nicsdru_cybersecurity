$(function () {
  $(".burger-nav").on("click", function() {
    if (!$(".menu-mob").hasClass("open")) {
      $(".menu-mob").addClass("open");
    }
  });
});

$(function () {
  $(".menu-close").on("click", function() {
    if ($(".menu-mob").hasClass("open")) {
      $(".menu-mob").removeClass("open");
    }
  });
});
