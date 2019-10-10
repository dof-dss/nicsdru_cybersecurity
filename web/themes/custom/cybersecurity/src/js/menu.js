// Add class open to menu-mob on click of burger nav icon
$(function () {
  $(".burger-nav").on("click", function() {
    if (!$(".menu-mob").hasClass("open")) {
      $(".menu-mob").addClass("open");
    }
  });
});

// Remove class open from menu-mob on click of menu close icon
$(function () {
  $(".menu-close").on("click", function() {
    if ($(".menu-mob").hasClass("open")) {
      $(".menu-mob").removeClass("open");
    }
  });
});
