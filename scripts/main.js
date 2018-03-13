var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var menu = document.querySelector(".menu");
var content = document.querySelector(".content");
var h2 = document.querySelector("h2");
var active = true;
var small = false;

/* Run the setInit() function upon window load */
if(window.addEventListener){
    window.addEventListener('load',setInit,false); //W3C
}
else{
    window.attachEvent('onload',setInit); //IE
}

/* Width of viewport determines whether or not the menu begins as toggled*/
function setInit() {
  setSize();
  if (small) //portrait tablet or phone
  {
    hamburger.classList.toggle("is-active");
    hideMenu();
  } else {
    showMenu();
  }
}

/* When on mobile, hide menu when nav is clicked */
nav.addEventListener("click", function() {
  if (small) {
    hamburger.classList.toggle("is-active");
    hideMenu();
  }
});

/* Controls the menu toggle */
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  if (active) {
    hideMenu();
    setSize(); //re-check size in case window is changed
  } else {
    showMenu();
  }
});

/* Checks browser width to adjust menu functionality */
function setSize() {
  var width = window.innerWidth;
  h2.innerHTML = width;
  if (width < 750) {
    small = true;
  } else {
    small = false;
  }
}

/* Slides menu in from left */
function showMenu() {
  active = true; //now active
  menu.style.left = 0;
  content.style.left = 300+"px";
  content.style.width = 75+'%';
  if (small) {
    menu.style.width = 100 + "%";
  }
}

/* Slides menu back off screen */
function hideMenu() {
  active = false; //no longer active
  menu.style.left = -330 + "px";
  content.style.width = 100+"%";
  content.style.left = 0;
  if (small) {
    menu.style.width = 250 + "px";
  }
}
