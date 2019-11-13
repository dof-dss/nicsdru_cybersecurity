(function ($) {
  $(document).ready(function () {
    // Toggle the visibility of the facet-widget-links div and change the icon on click of the heading.
    $(".block-facet--links h3").click(function () {
      $(this).siblings(".facets-widget-links").toggleClass("tw-hidden");
      if ($(this).children('svg').attr('data-icon') == 'chevron-down') {
        $(this).children('svg').attr('data-icon', 'chevron-up');
      } else {
        $(this).children('svg').attr('data-icon', 'chevron-down');
      };
    });

    // If one of the facet items are active then facets-widget-links should remain open on page reload.
    $(function () {
      if ($(".facet-item").children("a").hasClass("is-active")) {
        $(".facets-widget-links").removeClass("tw-hidden");

        if ($(".block-facet--links h3").children('svg').attr('data-icon') == 'chevron-down') {
          $(".block-facet--links h3").children('svg').attr('data-icon', 'chevron-up');
        }
      } else {
        $(".facets-widget-links").addClass("tw-hidden");

        if ($(".block-facet--links h3").children('svg').attr('data-icon') == 'chevron-up') {
          $(".block-facet--links h3").children('svg').attr('data-icon', 'chevron-down');
        }
      }
    });
  });
})(jQuery);
