var header = document.querySelector(".header");
var navHamburger = document.querySelector(".nav__hamburger");
var navMenu = document.querySelector(".nav-menu");
var navMenuCross = document.querySelector(".nav-menu__cross");
var navMenuListItem = document.querySelectorAll(".nav-menu__list-item");
var navMenuSeparator = document.querySelector(".nav-menu__separator");
var navMenuText = document.querySelector(".nav-menu__text");
var navMenuEmail = document.querySelector(".nav-menu__email");
var navMenuSocialBtn = document.querySelector(".nav-menu__social-btn");
var i;
var itemsLength = navMenuListItem.length;
var listItem = "";

/* show menu items */
function animateItems(){
  for(i = 0; i < itemsLength; i++){
    listItem = navMenuListItem[i];
    if(listItem.classList.contains("nav-menu__items__animation")){
      listItem.classList.remove("nav-menu__items__animation");
    }else{
      listItem.classList.add("nav-menu__items__animation");
    }
  }
}
function animateElement(item){
  if(item.classList.contains("nav-menu__items__animation")){
    item.classList.remove("nav-menu__items__animation");
  }else{
    item.classList.add("nav-menu__items__animation");
  }
}


window.onload = fadeInHeader;
navHamburger.addEventListener("click", showMenu);
navMenuCross.addEventListener("click", hideMenu);

/* show header */
function fadeInHeader(){
  header.style.opacity = 1;
}

/* show menu */
function showMenu(){
  navMenu.style.width = "250px";
  navMenuCross.style.visibility = "visible";
  animateItems();
  animateElement(navMenuSeparator);
  animateElement(navMenuText);
  animateElement(navMenuEmail);
  animateElement(navMenuSocialBtn);
}

/* hide menu */
function hideMenu(){
  navMenuCross.style.visibility = "hidden";
  navMenu.style.width = "0px";
  animateItems();
  animateElement(navMenuSeparator);
  animateElement(navMenuText);
  animateElement(navMenuEmail);
  animateElement(navMenuSocialBtn);
}
