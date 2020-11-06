const COMPLETELY = false;
const PARTIALLY = true;

(function ($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {
    const $element      = $(this);
    const $window       = $(window);
    const viewTop       = $window.scrollTop();
    const viewBottom    = viewTop + $window.height() - 30;
    const elementTop    = $element.offset().top;
    const elementBottom = elementTop + $element.height();
    const compareTop    = partial ? elementBottom : elementTop;
    const compareBottom = partial ? elementTop : elementBottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

})($);

const $animatedElements = $('.animate');

$(window).scroll(() => {
  $animatedElements.each((_, ele) => {
    const $element = $(ele);
    if ($element.visible(PARTIALLY)) {
      const animationDelay = $element.attr('data-delay') || 0;
      const animationClass = $element.attr('data-animation');
      setTimeout(() => {
        $element.addClass(animationClass);
      }, animationDelay);
    }
  })
})
console.log($('.subcomponent2').attr('data-animation'))