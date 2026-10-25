// Forwards any drabdude.github.io URL to the matching page on the UW site.
(function () {
  var base = "https://students.washington.edu/as12/";
  var p = location.pathname.replace(/^\/+/, "");
  var map = { "": "", "cv/": "cv.html", "cv": "cv.html", "projects/": "research.html", "research/": "research.html",
              "publications/": "research.html", "index.html": "" };
  var known = /^(index|research|cv)\.html$|^research\/(hss|kalman|proximal|mixed-precision)\.html$/;
  var target = p in map ? map[p] : (known.test(p) ? p : "");
  location.replace(base + target + location.hash);
})();
