(function ($) {
  $(".block-facet--links h3").click(function () {
    $(this).siblings(".facets-widget-links").toggleClass("tw-hidden");
    if ($(this).children('svg').attr('data-icon') == 'chevron-down') {
      $(this).children('svg').attr('data-icon', 'chevron-up');
    } else {
      $(this).children('svg').attr('data-icon', 'chevron-down');
    };
  });
})(jQuery);
