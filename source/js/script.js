const menuButton = document.querySelector(".main-header__navigation-toggle");

document.body.classList.remove("no-js");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-open-js");
    menuButton.classList.toggle("main-header__navigation-toggle--opened");
  });
}

const navList = document.querySelector(".site-navigation");

if (navList) {
  navList.addEventListener("click", (evt) => {
    const curTarget = evt.currentTarget;
    const { target } = evt;
    if (target.classList.contains("site-navigation__link")) {
      curTarget.querySelector(".site-navigation__link--current").classList.remove("site-navigation__link--current");
      target.classList.add("site-navigation__link--current");
    }
  });
}

const swiper = new Swiper (".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});
