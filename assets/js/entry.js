"use strict";

// ===== init =====
// ["pageshow", "load"].forEach(function (evt) {
//   window.addEventListener(evt, function () {
//     document.body.classList.remove("fadeout");
//   });
// });

// ===== handle change tab =====
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
