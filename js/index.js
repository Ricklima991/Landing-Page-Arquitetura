/* Vitrine 3D: alterna fotos + tilt que segue o mouse + reveal no scroll */
(function () {
  var photos = [
    "./assets/img/image1.jpg",
    "./assets/img/image2.jpg",
    "./assets/img/image3.jpg"
  ];
  var current = 0;
  var photo = document.getElementById("photo");
  var tilt = document.getElementById("photoTilt");
  var dots = document.querySelectorAll(".photo-dots .dot");

  function show(index) {
    current = (index + photos.length) % photos.length;
    photo.setAttribute("src", photos[current]);
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  photo.addEventListener("click", function () { show(current + 1); });
  photo.setAttribute("tabindex", "0");
  photo.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      show(current + 1);
    }
  });

  /* Tilt 3D suave */
  if (tilt && window.matchMedia("(pointer: fine)").matches) {
    tilt.addEventListener("mousemove", function (e) {
      var r = tilt.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform =
        "rotateY(" + (x * 14).toFixed(2) + "deg) rotateX(" + (-y * 14).toFixed(2) + "deg)";
    });
    tilt.addEventListener("mouseleave", function () {
      tilt.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  }

  /* Reveal */
  ["#menu-informacional .item", "#text-informacional", "#photo-informacional", "#formulario .form-grid"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { el.classList.add("reveal"); });
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
