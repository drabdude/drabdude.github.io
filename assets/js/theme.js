// Light/dark toggle. The initial theme is set inline in <head> to avoid a flash.
(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
