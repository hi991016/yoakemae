// ========= entry page =======
if (document.getElementById("entrypage")) {
  //
  const tabs = document.querySelectorAll(".js-entry-nav li");
  const contents = document.querySelectorAll(".js-entry-content");

  tabs.forEach((tab) =>
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => tab.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("show-content"));
      const contentId = this.dataset.content;
      this.classList.add("active");
      document
        .querySelector(`.js-entry-content[data-content="${contentId}"]`)
        .classList.add("show-content");
    })
  );
  //
  if (document.querySelector('.js-contact-send')) {
    document.querySelector('.js-contact-send').addEventListener('click', function () {
      $(this).addClass("disabled");
    })
  }
}

// ========= lazy loading =======
$("main img")
  .on("load", function () {
    // when the browser cache is disabled, only this code doesn't work:
    $(this).addClass("loaded");
    // console.log("image loaded correctly");
  })
  .each(function () {
    // to make it work you have to add, catch when image is cache
    if ($(this).prop("complete")) $(this).addClass("loaded");
  });
