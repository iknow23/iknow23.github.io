'use strict';

;(function () {
  var cards = document.querySelectorAll('.accordion__btn');

  var openCard = function(i) {
    return function(evt) {
      evt.preventDefault();
      if ( cards[i].classList.contains('accordion__btn--closed') ) {
        cards[i].classList.remove('accordion__btn--closed');
        cards[i].classList.add('accordion__btn--open');
        cards[i].classList.add('accordion__btn--active');
      } else {
        cards[i].classList.remove('accordion__btn--open');
        cards[i].classList.remove('accordion__btn--active');
        cards[i].classList.add('accordion__btn--closed');
      }
    };
  };

  cards.forEach(function(el, i) {
    el.addEventListener('click', openCard(i));
  });
})();
