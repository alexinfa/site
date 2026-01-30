document.addEventListener("DOMContentLoaded", function () {

    var showMenu = document.querySelector(".btn-menu");
    showMenu.addEventListener("click", function (e) {
        let menuContent = document.querySelector(".navigation");
        menuContent.classList.toggle("show");
        showMenu.classList.toggle("open");
        document.body.classList.toggle("noscroll");  
    });

    var scrollPageBtn = document.querySelector(".btn-large");
    window.addEventListener("scroll", function () {
        let scroll = window.scrollY;
        if (scroll > 1) {
            scrollPageBtn.classList.add("move");
            scrollPageBtn.href = "#top";
        } else {
            scrollPageBtn.classList.remove("move");
            scrollPageBtn.href = "#content";
        }
    });

    // // carousel
    // $('.one-time').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true
    // });

    console.log("JS loaded");
});
