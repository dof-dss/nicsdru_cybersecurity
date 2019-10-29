(function ($) {
  // Show main navigation sub-menu on click of parent
  $(".menu_main--item-text, .menu_main--item .next").click(function() {
    $(this).siblings(".menu_main--sub").toggleClass("tw-invisible");

    // Hide any open main navigation sibling sub-menu on click of parent
    $(this).parent(".menu_main--item").siblings().children(".menu_main--sub").addClass("tw-invisible");
  });

  // When click anywhere but the menu link or its children, set submenu to invisible
  $(document).click(function(e) {
    $(".menu_main--item")
      .not($(".menu_main--item").has($(e.target)))
      .children(".menu_main--sub")
      .addClass("tw-invisible");
  });

  // When you click the gradient under the main menu submenu, the submenu is set to invisible
  $(".menu_main--grad").click(function () {
    $(this).parent(".menu_main--sub").addClass("tw-invisible");
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

  $(".menu_main--sub--buttons .back").click(function () {
    if ($(window).width() < 765) {
      $(this).parents(".menu_main--sub").toggleClass("tw-invisible");
    }
  })
})(jQuery);


