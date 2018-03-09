var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var content = document.querySelector(".content");
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
    hideMenu();
  } else {
    showMenu();
  }
}

/* Controls the menu toggle */
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  if (active) {
    hideMenu();
  } else {
    showMenu();
  }
});

function setSize() {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (width < 750) {
    small = true;
  } else {
    small = false;
  }
}

function showMenu() {
  active = true; //now active
  menu.style.left = 0;
  content.style.left = 300+"px";
  content.style.width = 75+'%';
}

function hideMenu() {
  active = false; //no longer active
  menu.style.left = -330 + "px";
  content.style.width = 100+"%";
  content.style.left = 0;
}
