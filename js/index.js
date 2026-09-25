/* Alterna as fotos do projeto ao clicar (image1 → image2 → image3) */
(function () {
  var photos = [
    "./assets/img/image1.jpg",
    "./assets/img/image2.jpg",
    "./assets/img/image3.jpg"
  ];
  var current = 0;
  var photo = document.getElementById("photo");
  var dots = document.querySelectorAll(".photo-dots .dot");

  function show(index) {
    current = (index + photos.length) % photos.length;
    photo.setAttribute("src", photos[current]);
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  photo.addEventListener("click", function () {
    show(current + 1);
  });

  photo.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      show(current + 1);
    }
  });

  photo.setAttribute("tabindex", "0");
})();
