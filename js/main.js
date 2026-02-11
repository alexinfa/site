document.addEventListener("DOMContentLoaded", function () {
  /**loader**/
  const loader = document.getElementById("loader");
  const percentText = document.querySelector(".percent");
  const seen = localStorage.getItem("loaderSeen");
  if (!seen && loader && percentText) {
    document.body.classList.add("loading");
    let progress = 0;
    const interval = setInterval(() => {
      progress++;
      percentText.textContent = progress + "%";
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add("fade-out");
          setTimeout(() => {
            loader.style.display = "none";
            document.body.classList.remove("loading");
            localStorage.setItem("loaderSeen", "true");
          }, 800);
        }, 300);
      }
    }, 20);
  } else if (loader) {
    loader.style.display = "none";
  }

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
    } else {
      scrollPageBtn.classList.remove("move");
      headerScroll.classList.remove("resize");
      scrollPageBtn.href = "#content";
    }
  });
});
