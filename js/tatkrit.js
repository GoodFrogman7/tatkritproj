/**
 * TATKRIT — portfolio scroll reveal + 3D tilt on live project cards
 */
(function () {
  'use strict';

  var cards = document.querySelectorAll('.project-card.has-cover');
  if (!cards.length) return;

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) en.target.classList.add('in-view');
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  cards.forEach(function (card) {
    io.observe(card);

    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--tiltY', px * -5 + 'deg');
      card.style.setProperty('--tiltX', py * 5 + 'deg');
    });

    card.addEventListener('mouseleave', function () {
      card.style.setProperty('--tiltX', '0deg');
      card.style.setProperty('--tiltY', '0deg');
    });
  });
})();
