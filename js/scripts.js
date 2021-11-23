console.log("this is a secret message");

let menuOpen = false;

function menuToggle() {
  let getBody = document.querySelector("Body");
  let getSideMenu = document.querySelector(".side-menu");
  let getSideMenuNav = document.querySelector(".side-menu nav");
  let getMenuMask = document.querySelector(".menu-mask");

  if (menuOpen === false) {
    // getBody.style.overflow = "hidden";
    getSideMenu.style.visibility = "visible";
    getSideMenu.style.width = "25vw";
    getSideMenuNav.style.opacity = "1";
    getMenuMask.style.visibility = "visible";
    getMenuMask.style.opacity = "0.5";

    menuOpen = true;

  } else {
    // getBody.style.overflow = "visible";
    getSideMenu.style.visibility = "hidden";
    getSideMenu.style.width = "0%";
    getSideMenuNav.style.opacity = "0";
    getMenuMask.style.visibility = "hidden";
    getMenuMask.style.opacity = "0";

    menuOpen = false;
  }
}
