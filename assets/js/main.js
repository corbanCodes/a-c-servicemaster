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


  // ---------- Recent Work carousel + lightbox ----------
  var track = document.getElementById('galTrack');
  if (track) {
    var items   = Array.prototype.slice.call(track.querySelectorAll('.gal-item'));
    var prevBtn = document.getElementById('galPrev');
    var nextBtn = document.getElementById('galNext');
    var dotsBox = document.getElementById('galDots');

    var perPage = function () {
      if (!items.length) return 1;
      var w = items[0].getBoundingClientRect().width + 16;
      return Math.max(1, Math.round(track.clientWidth / w));
    };
    var pageCount = function () { return Math.max(1, Math.ceil(items.length / perPage())); };
    var currentPage = function () {
      var w = track.clientWidth;
      return w ? Math.round(track.scrollLeft / w) : 0;
    };

    var countBox = document.getElementById('galCount');

    var buildDots = function () {
      dotsBox.innerHTML = '';
      var n = pageCount();
      // a phone shows one photo at a time, which would mean twenty dots —
      // past six pages a plain counter is easier to read than a row of dots
      dotsBox.hidden = n > 6;
      for (var i = 0; i < n; i++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-label', 'Page ' + (i + 1) + ' of ' + n);
        b.setAttribute('aria-selected', i === currentPage() ? 'true' : 'false');
        (function (idx) {
          b.addEventListener('click', function () {
            track.scrollTo({ left: idx * track.clientWidth, behavior: 'smooth' });
          });
        })(i);
        dotsBox.appendChild(b);
      }
    };

    var syncControls = function () {
      var atStart = track.scrollLeft <= 2;
      var atEnd   = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      prevBtn.disabled = atStart;
      nextBtn.disabled = atEnd;
      var cur = currentPage();
      Array.prototype.forEach.call(dotsBox.children, function (d, i) {
        d.setAttribute('aria-selected', i === cur ? 'true' : 'false');
      });
      if (countBox) countBox.textContent = (cur + 1) + ' of ' + pageCount();
    };

    prevBtn.addEventListener('click', function () {
      track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function () {
      track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
    });

    var raf;
    track.addEventListener('scroll', function () {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncControls);
    });
    window.addEventListener('resize', function () { buildDots(); syncControls(); });
    buildDots(); syncControls();

    // ----- lightbox -----
    var lb      = document.getElementById('lightbox');
    var lbImg   = document.getElementById('lbImg');
    var lbCap   = document.getElementById('lbCap');
    var lbCount = document.getElementById('lbCount');
    var idx = 0, lastFocus = null;

    var show = function (i) {
      idx = (i + items.length) % items.length;
      var img = items[idx].querySelector('img');
      lbImg.src = img.getAttribute('src');
      lbImg.alt = img.getAttribute('alt') || '';
      lbCap.textContent = img.getAttribute('alt') || '';
      lbCount.textContent = (idx + 1) + ' of ' + items.length;
    };
    var open = function (i) {
      lastFocus = document.activeElement;
      show(i);
      lb.hidden = false;
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      document.getElementById('lbClose').focus();
    };
    var close = function () {
      lb.hidden = true;
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };

    items.forEach(function (it, i) {
      it.addEventListener('click', function () { open(i); });
    });
    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', function () { show(idx - 1); });
    document.getElementById('lbNext').addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  // Footer year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
