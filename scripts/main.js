var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var content = document.querySelector(".content");
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var active = true;

/* Run the setInit() function upon window load */
if(window.addEventListener){
    window.addEventListener('load',setInit,false); //W3C
}
else{
    window.attachEvent('onload',setInit); //IE
}

/* Width of viewport determines whether or not the menu begins as toggled*/
function setInit() {
  if (width <= 800) //portrait tablet or phone
  {
    hamburger.classList.toggle("is-active"); //not active on load
    menu.style.left = -330 + "px";
    content.style.width = 100+"%";
    content.style.left = 0;
  } else {
    content.style.left = 300+"px";
    content.style.width = 75+'%';
  }
}

/* Controls the menu toggle */
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  if (active) {
    active = false; //no longer active
    menu.style.left = -330 + "px";
    content.style.width = 100+"%";
    content.style.left = 0;
  } else {
    active = true; //now active
    menu.style.left = 0;
    content.style.left = 300+"px";
    content.style.width = 75+'%';
  }
});
