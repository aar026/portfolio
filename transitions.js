var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};

/**Barba.Pjax.start();*/


// Barba.js
Barba.Pjax.start();
Barba.Prefetch.init();

Barba.Dispatcher.on('newPageReady', function(currentStatus) {
  const link = currentStatus.url.split(window.location.origin)[1].substring(1); // get path of current page

  const navigation             = document.querySelector('.navMenu'); //selects ul menu
  const spans			       = navigation.querySelectorAll('.activeDot'); //selects all spans
  const navLinks			   = navigation.querySelectorAll('.navLink'); //selects all navlinks
 // const navigationLinkIsActive = navLinks.querySelector(`[href="${link}"]`); // selects link that is active
  console.log(navigation);
  console.log(spans);
  console.log(navLinks);
  console.log(navigationLinkIsActive);
  console.log(link);
	
  Array.prototype.forEach.call(spans, (span) => spans.classList.remove('activeDot')); 
	

  navigationLinkIsActive.querySelector(".dot").classList.add('activeDot'); // add CSS class to current .navigation__link

});