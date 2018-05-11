var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var active = false; //menu starts out hidden


/* Controls the menu toggle */
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  if (active) {
    hideMenu();
  } else {
    showMenu();
  }
});

/* Slides menu in from left */
function showMenu() {
  active = true; //now active
  nav.style.visibility = "visible";
}

/* Slides menu back off screen */
function hideMenu() {
  active = false; //no longer active
  nav.style.visibility = "hidden";
}
