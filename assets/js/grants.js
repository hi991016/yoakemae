// ===== Hover Effect =====
if (window.matchMedia("(min-width: 1024px)").matches) {
  // Showed cover
  $(".home-artist").on("mouseover", function () {
    let coverColor = $(".artist-link", this).attr("data-color");
    let dataCover = $(".artist-link", this).attr("data-cover");

    $(".artist-cover img").attr("hidden", true);
    $(".artist-name").stop(true, true).css("opacity", 0.04);
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

const swiperGrant = new Swiper(".js-grant-swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
