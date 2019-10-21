(function ($) {
  // Show main navigation sub-menu on click of parent
  $(".menu_main--item").click(function() {
    $(this).find(".menu_main--sub").toggleClass("tw-invisible");
    $(this).siblings().children(".menu_main--sub").addClass("tw-invisible");
  });

  // When click anywhere but the menu link or its children, set submenu to invisible
  $(document).click(function(e) {
    $('.menu_main--item')
      .not($('.menu_main--item').has($(e.target)))
      .children('.menu_main--sub')
      .addClass('tw-invisible');
  });

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


