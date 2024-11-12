// ===== Hover Effect =====
if (window.matchMedia("(min-width: 1024px)").matches) {
  // Showed cover
  $(".home-artist").on("mouseover", function () {
    let coverColor = $(this).attr("data-color");
    let dataCover = $(this).attr("data-artist");

    $(".artist-cover img").attr("hidden", true);
    $(".artist-name").stop(true, true).css("opacity", 0.1);
    $(".artist-name", this).stop(true, true).css("opacity", 1);
    $(".artist-cover").stop(true, true).addClass("showed");
    $(".artist-cover img").stop(true, true).addClass("hovered");
    $(".home-overlay").css("backgroundColor", coverColor);
    $(`[data-img="${dataCover}"]`).fadeIn();
    $(`[data-img="${dataCover}"]`).attr("hidden", false);
  });

  // Hiding cover
  $(".home-artist").on("mouseleave", function () {
    $(".artist-name").stop(true, true).css("opacity", 1);
    $(".artist-cover img").fadeOut();
    $(".artist-cover").stop(true, true).removeClass("showed");
    $(".home-overlay").css("backgroundColor", "#ffffff");
  });

  // Add delay after first hover
  $(".artists-list").on("mouseenter", function () {
    $(".grant")
      .addClass("first-showed")
      .delay(300)
      .queue(function (next) {
        $(this).removeClass("first-showed");
        next();
      });
  });

  // Remove delay after first hover
  $(".artists-list").on("mouseleave", function () {
    $(".grant").removeClass("first-showed");
  });
}

// ====== SWIPER ======
let index = 0;
let swiperLb;

const swiperImages = () => {
  swiperLb = new Swiper(".js-grant-swiper", {
    loop: true,
    speed: 400,
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: doSomethingWithActiveSlide,
      slideChange: doSomethingWithActiveSlide,
    },
  });
};
swiperImages();

function doSomethingWithActiveSlide() {
  const EL_currentSlide = this.slides[this.activeIndex];
  const currentTitle = EL_currentSlide.dataset.cover;

  $("[data-artist]").removeClass("active");
  $(`[data-artist="${currentTitle}"]`).addClass("active");
}
