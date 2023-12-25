$(() => {
  $(".header-burger").click(() => {
    $(".header-burger").toggleClass("is-active");
    $(".header-burger-list").toggleClass("is-active");
  });

  $(".header-burger-link").click(() => {
    $(".header-burger").removeClass("is-active");
    $(".header-burger-list").removeClass("is-active");
  });
});
