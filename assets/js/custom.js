const listElm = document.querySelector("#ajaxPost");
let ppp = 20; // Post per page
let pageNumber = 1;

function load_posts() {
  pageNumber++;
  let str =
    "&pageNumber=" + pageNumber + "&ppp=" + ppp + "&action=more_post_ajax";
  $.ajax({
    type: "POST",
    dataType: "html",
    url: ajax_posts.ajaxurl,
    data: str,
    success: function (data) {
      let $data = $(data);
      if ($data.length) {
        $("#ajaxPost").append($data);
        //$("#more_posts").attr("disabled",false); // Uncomment this if you want to disable the button once all posts are loaded
        $("#loading-bar-spinner").hide(); // This will hide the button once all posts have been loaded
      } else {
        $("#loading-bar-spinner").attr("disabled", true);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
    },
  });
  return false;
}

$(window).on("scroll pageshow", function () {
  if (
    listElm &&
    $(window).scrollTop() + listElm.clientHeight >=
      listElm.scrollHeight + $(".js-footer").height()
  ) {
    load_posts();
  }
});
