"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log("navbarHeight: ${navbarHeight}");
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// scrolling navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  // console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoViews(link);
});

// scrolling contact me button
const contactButton = document.querySelector(".home__contact");
contactButton.addEventListener("click", () => {
  // const scrollTo = document.querySelector("#contact");
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoViews("#contact");
});

function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// transparent home
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow
const arrow = document.querySelector(".arrow");
document.addEventListener("scroll", () => {
  if (window.scrollY < 200) {
    arrow.classList.remove("visible");
  } else {
    arrow.classList.add("visible");
  }
});

arrow.addEventListener("click", () => {
  scrollIntoViews("#home");
});

// project filtering
const workContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add("anim-out");

  // 0.3초가 지나면 해당 함수를 불러줘
  setTimeout(() => {
    projects.forEach((project) => {
      //console.log(proejct.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});
