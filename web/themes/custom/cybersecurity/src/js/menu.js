(function ($) {
  // Add class open to menu-mob on click of burger nav icon
  $(".burger-nav").on("click", function() {
    if (!$(".menu-mob").hasClass("open")) {
      $(".menu-mob").addClass("open");
    }
  });

  // Remove class open from menu-mob on click of menu close icon
  $(".menu-close").on("click", function() {
    if ($(".menu-mob").hasClass("open")) {
      $(".menu-mob").removeClass("open");
    }
  });
})(jQuery);


