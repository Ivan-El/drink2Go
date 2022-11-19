//Mobile menu

const menuButton = document.querySelector(".main-header__navigation-toggle");

document.body.classList.remove("no-js");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-open-js");
    menuButton.classList.toggle("main-header__navigation-toggle--opened");
  });
}

// Site navigation

const navList = document.querySelector(".site-navigation");

if (navList) {
  navList.addEventListener("click", (evt) => {
    const curTarget = evt.currentTarget;
    const { target } = evt;
    if (target.classList.contains("site-navigation__link")) {
      curTarget
        .querySelector(".site-navigation__link--current")
        .classList.remove("site-navigation__link--current");
      target.classList.add("site-navigation__link--current");
    }
  });
}

// Slider

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    bulletcustomSelectent: "span",
    bulletClass: "promo-slider__pagination-bullet",
    bulletActiveClass: "promo-slider__pagination-bullet--current",
    clickable: true,
  },
});

// Range input

const rangeSlider = document.querySelector(".range-slider__js");
const inputMin = document.querySelector("#input-min");
const inputMax = document.querySelector("#input-max");
const inputs = [inputMin, inputMax];

const formatNumber = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  },
};

noUiSlider.cssClasses.connect += " range-slider__js-body";
noUiSlider.cssClasses.handle += " range-slider__js-toggle";

noUiSlider.create(rangeSlider, {
  start: ["0", "900"],
  connect: true,
  format: formatNumber,
  range: {
    min: 0,
    max: 1000,
  },
});

rangeSlider.noUiSlider.set(["0", "900"]);

inputMin.addEventListener("change", function () {
  rangeSlider.noUiSlider.set([this.value, null]);
});

inputMax.addEventListener("change", function () {
  rangeSlider.noUiSlider.set([null, this.value]);
});

rangeSlider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = values[handle];
});

// Reset button

const form = document.querySelector(".filter-form");
const resetAll = form.querySelector(".filter-form__reset-button");
const checkBoxes = form.querySelectorAll("input[type=checkbox]");
const radioButtons = form.querySelectorAll("input[type=radio]");

resetAll.addEventListener("click", () => {
  checkBoxes.forEach((checkbox) => {
    checkbox.hasAttribute("checked")
      ? checkbox.removeAttribute("checked")
      : null;
  });
  radioButtons.forEach((radiobutton) => {
    radiobutton.checked = false;
  });
  rangeSlider.noUiSlider.set(["0", "900"]);
});

// Custom select

const customSelect = document.querySelector(".sort-select");
const customSelectButton = document.querySelector(".sort-select__toggle");
const selectOptions = document.querySelectorAll(".sort-select__option");
customSelectButton.innerHTML = selectOptions[0].innerHTML;
let isOpen = false;

function setValue(title) {
  customSelectButton.innerHTML = title;
}

function toggle() {
  isOpen ? close() : open();
}

function open() {
  customSelect.classList.add("select-open-js");
  document.addEventListener("click", onDocumentClick);
  isOpen = true;
}

function close() {
  customSelect.classList.remove("select-open-js");
  document.removeEventListener("click", onDocumentClick);
  isOpen = false;
}

function onDocumentClick(event) {
  !customSelect.contains(event.target) ? close() : null;
}

customSelect.addEventListener("click", function (evt) {
  const curTarget = evt.currentTarget;
  const { target } = evt;

  if (target.classList.contains("sort-select__toggle")) {
    toggle();
  } else if (target.tagName === "LI") {
    setValue(target.innerHTML);
    close();
    curTarget
      .querySelector(".sort-select__option--current")
      .classList.remove("sort-select__option--current");
    target.classList.add("sort-select__option--current");
  }
});

// navList.addEventListener("click", (evt) => {
//   const curTarget = evt.currentTarget;
//   const { target } = evt;
//   if (target.classList.contains("site-navigation__link")) {

//   }
// });
