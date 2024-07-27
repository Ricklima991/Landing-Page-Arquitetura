var image = window.document.getElementById("image-svg");

function toggleImage() {
  if (image.getAttribute("xlink:href").includes("./assets/img/image1.jpg")) {
    image.setAttribute("xlink:href", "./assets/img/image2.jpg");
  } else if (
    image.getAttribute("xlink:href").includes("./assets/img/image2.jpg")
  ) {
    image.setAttribute("xlink:href", "./assets/img/image3.jpg");
  } else {
    image.setAttribute("xlink:href", "./assets/img/image1.jpg");
  }
}
