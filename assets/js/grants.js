// ======== GRANTS PAGE =======

"pageshow resize".split(" ").forEach((evt) => {
  window.addEventListener(evt, () => {
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
      // #####
      // #####
      // #####
    } else {
      const swiperImages = () => {
        const swiperLb = new Swiper("[data-grants-sw]", {
          loop: true,
          speed: 600,
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

      // REMOVE INTRO
      let myInterval;
      function folienwechsel() {
        if ($("body").hasClass("fadeout") === false) {
          $(".js-grant-intro").fadeOut(1000);
          clearInterval(myInterval);
        } else {
          //In other scenarios you may need to reset it.
          myInterval = setInterval(function () {
            folienwechsel();
          }, 1000);
        }
      }
      myInterval = setInterval(function () {
        folienwechsel();
      }, 2500);
    }
  });
});

// ======== DETAIL PAGE =======
if ($(".grantspage .detail")) {
  const swiperDetail = new Swiper("[data-grants-detail-sw]", {
    loop: true,
    speed: 600,
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        let e = this.realIndex + 1;
        document.querySelector(".detail_pager .current").innerHTML = e;
      },
      beforeInit: function () {
        let numOfSlides =
          this.wrapperEl.querySelectorAll(".swiper-slide").length;
        document.querySelector(".detail_pager .total").innerHTML = numOfSlides;
      },
    },
  });

  // CURSOR
  const cursorPrev = document.querySelector(".cursor-prev");
  const cursorNext = document.querySelector(".cursor-next");

  function mousemoveHandler(e) {
    const target = e.target;
    const tl = gsap.timeline({
      defaults: {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      },
    });

    if (
      document.querySelector(".swiper-button-next") &&
      document.querySelector(".swiper-button-prev")
    ) {
      // hover section slider
      if (
        target.tagName.toLowerCase() === "button" &&
        target.closest(".swiper-button-next")
      ) {
        tl.to(cursorPrev, {
          opacity: 0,
        }).to(
          cursorNext,
          {
            opacity: 1,
          },
          "-=0.5"
        );
      } else if (
        target.tagName.toLowerCase() === "button" &&
        target.closest(".swiper-button-prev")
      ) {
        tl.to(cursorPrev, {
          opacity: 1,
        }).to(
          cursorNext,
          {
            opacity: 0,
          },
          "-=0.5"
        );
      } else {
        tl.to(".cursor", {
          opacity: 0,
        });
      }
    }
  }

  function mouseleaveHandler() {
    if (document.querySelector(".cursor")) {
      gsap.to(".cursor", {
        opacity: 0,
      });
    }
  }

  document.addEventListener("mousemove", mousemoveHandler);
  document.addEventListener("mouseleave", mouseleaveHandler);
}
