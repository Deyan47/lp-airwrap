document.addEventListener("DOMContentLoaded", function () {
  const expandableDivs = document.querySelectorAll(".cols-wrapper-col-item");
  const faqExpandableDiv = document.querySelectorAll(".faq-q-a-item");

  expandableDivs.forEach((div) => {
    div.addEventListener("click", function () {
      expandableDivs.forEach((openDiv) => {
        if (openDiv !== this && openDiv.classList.contains("expanded")) {
          openDiv.classList.remove("expanded");
        }
      });
      this.classList.toggle("expanded");
    });
  });

  faqExpandableDiv.forEach((div) => {
    div.addEventListener("click", function () {
      faqExpandableDiv.forEach((openDiv) => {
        if (openDiv !== this && openDiv.classList.contains("expanded")) {
          openDiv.classList.remove("expanded");
        }
      });
      this.classList.toggle("expanded");
    });
  });
});

function toggleMenu() {
  var nav = document.querySelector("header nav");
  nav.classList.toggle("show");
}

function openVideo() {
  var videoContainer = document.getElementsByClassName("video-container")[0];
  videoContainer.style.display = "flex";
}

function closeVideo() {
  var videoContainer = document.getElementsByClassName("video-container")[0];
  videoContainer.style.display = "none";
}

var currentImage = 0;
var maxImages = document.querySelectorAll(".gallery-image").length;

function openGallery() {
  var galleryContainer =
    document.getElementsByClassName("gallery-container")[0];
  galleryContainer.style.display = "flex";
}

function closeGallery() {
  var galleryContainer =
    document.getElementsByClassName("gallery-container")[0];
  galleryContainer.style.display = "none";
}

function changeImage(direction) {
  currentImage += direction;

  if (currentImage < 0) {
    currentImage = maxImages - 1;
  } else if (currentImage >= maxImages) {
    currentImage = 0;
  }

  var imageGallery = document.getElementsByClassName("image-gallery")[0];
  var offset = -currentImage * 100;
  imageGallery.style.transform = "translateX(" + offset + "%)";
}
