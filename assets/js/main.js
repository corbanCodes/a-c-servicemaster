/* A/C Service Master — 60minutesites.com
   Phone-only site: no form handler here by design. */
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Dropdowns: tap-to-open on touch / small screens
  document.querySelectorAll('.nav-drop > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var drop = btn.parentElement;
      var wasOpen = drop.classList.contains('open');
      document.querySelectorAll('.nav-drop.open').forEach(function (d) { d.classList.remove('open'); });
      if (!wasOpen) drop.classList.add('open');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-drop')) {
      document.querySelectorAll('.nav-drop.open').forEach(function (d) { d.classList.remove('open'); });
    }
  });

  // Close the mobile menu after tapping any link inside it
  document.querySelectorAll('#mainNav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (nav) nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.nav-drop.open').forEach(function (d) { d.classList.remove('open'); });
    });
  });

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
