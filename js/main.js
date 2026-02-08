document.addEventListener("DOMContentLoaded", function () {
  var showMenu = document.querySelector(".btn-menu");
  showMenu.addEventListener("click", function (e) {
    let menuContent = document.querySelector(".navigation");
    menuContent.classList.toggle("show");
    showMenu.classList.toggle("open");
    document.body.classList.toggle("noscroll");
  });

  var scrollPageBtn = document.querySelector(".btn-large");
  var headerScroll = document.querySelector(".head");
  var burgerMenuScroll = document.querySelector(".btn-menu");
  window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    if (scroll > 1) {
      scrollPageBtn.classList.add("move");
      scrollPageBtn.href = "#top";
      headerScroll.classList.add("resize");
      burgerMenuScroll.classList.add("color");
    } else {
      scrollPageBtn.classList.remove("move");
      headerScroll.classList.remove("resize");
      burgerMenuScroll.classList.remove("color");
      scrollPageBtn.href = "#content";
    }
  });

  // loader

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const seen = localStorage.getItem("loaderSeen");
    document.body.style.overflow = "hidden";
    if (seen) {
      loader.style.display = "none";
      document.body.style.overflow = "";
    } else {
      setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.style.display = "none";
          document.body.style.overflow = "";
        }, 800);
        localStorage.setItem("loaderSeen", "true");
      }, 2000);
    }
  });
});
