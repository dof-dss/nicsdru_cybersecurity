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

// $(function () {
//   var scrWidth = window.innerWidth;
//
//   if (scrWidth < 765) {
//     $(".menu_main--item").find("a").each(function(){
//       var linkText = $(this).text();
//       $(this).before(linkText);
//       $(this).remove();
//     });
//     $(".menu_main--item").on("click", function() {
//       if ($(".menu-main--sub").hasClass("tw-invisible")) {
//         $(".menu-main--sub").removeClass("tw-invisible");
//       }
//     });
//   }
// });

// //refresh page on browser resize
// $(window).bind('resize', function(e)
// {
//   if (window.RT) clearTimeout(window.RT);
//   window.RT = setTimeout(function()
//   {
//     this.location.reload(false); /* false to get page from cache */
//   }, 200);
// });
