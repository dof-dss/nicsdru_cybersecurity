(function ($, Drupal) {
  Drupal.behaviors.nicsdruOriginsExtWin = {
    attach: function attach(context) {
      var $extLinkText = Drupal.t("external link opens in a new window / tab"),
        $intLinkText = Drupal.t("opens in a new window / tab");
      $("a[href*='http://'], a[href*='https://'], a[href^='//']", context).once("elink").each(function () {
        $(this).not("a.no-ext-icon, a:has(img), .social-links a").filter(function () {
          return this.hostname && this.hostname !== location.hostname
        }).append('<span class="visually-hidden">(' + $extLinkText + ')</span><svg aria-hidden="true" class="ico ico-elink"><title>' + $extLinkText + '</title><use xlink:href="#elink"></use></svg>')
          .attr("title", $extLinkText)
          .attr("target", "_blank")
          .attr("rel", "noopener noreferrer");

        $(this).filter(".social-links a").filter(function () {
          return this.hostname && this.hostname !== location.hostname
        }).append('<span class="visually-hidden">(' + $extLinkText + ')</span>')
          .attr("title", $extLinkText)
          .attr("target", "_blank")
          .attr("rel", "noopener noreferrer");
      });
      $("a[data-ext-type^='External']", context).once("elink").each(function () {
        $(this)
          .attr("href", $(this).attr("data-ext-url"))
      });
      $("a[target='_blank']", context).once("elink").each(function () {
        $(this).not("a.no-ext-icon, a:has(img), a[href*='http://'], a[href*='https://'], #main a[href^='//']")
          .append('<span class="visually-hidden">(' + $intLinkText + ')</span><svg aria-hidden="true" class="ico ico-elink"><title>' + $intLinkText + '</title><use xlink:href="#elink"></use></svg>')
          .attr("title", $intLinkText)
          .attr("rel", "noopener noreferrer")
      })
    }
  }
})(jQuery, Drupal);
