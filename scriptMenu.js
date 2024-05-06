let menuOpened = false;
let cooldown = false;
let background = document.getElementById("menu-page-background");
let home = document.getElementById("home-link");
let theIssue = document.getElementById("the-issue-link");
let solutions = document.getElementById("solutions-link");
let about = document.getElementById("about-link");

function menu() {
  if(!menuOpened) {
    openMenu();
  } else {
    closeMenu();
  }
  menuOpened = !menuOpened;
}

function openMenu() {
  background.style.visibility = "visible";
  home.style.visibility = "visible";
  theIssue.style.visibility = "visible";
  solutions.style.visibility = "visible";
  about.style.visibility = "visible";
  background.style.animation = 'grow 0.7s cubic-bezier(.25,0,0,.75) forwards';
  setTimeout(() => {
    home.style.pointerEvents = "all";
    home.style.animation = 'show 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  }, 700);
  setTimeout(() => {
    theIssue.style.pointerEvents = "all";
    theIssue.style.animation = 'show 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  }, 850);
  setTimeout(() => {
    solutions.style.pointerEvents = "all";
    solutions.style.animation = 'show 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  }, 1000);
  setTimeout(() => {
    about.style.pointerEvents = "all";
    about.style.animation = 'show 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  }, 1150);
}

function closeMenu() {
  home.style.pointerEvents = "none";
  theIssue.style.pointerEvents = "none";
  solutions.style.pointerEvents = "none";
  about.style.pointerEvents = "none";
  /* stops animations */
  home.style.animation = 'hide 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  theIssue.style.animation = 'hide 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  solutions.style.animation = 'hide 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  about.style.animation = 'hide 0.3s cubic-bezier(.22,.9,.82,.94) forwards';
  setTimeout(() => {
    background.style.animation = 'shrink 0.7s cubic-bezier(.25,0,0,.75) forwards';
  }, 400);
  setTimeout(() => {
    background.style.visibility = "hidden";
  }, 1100.00000000000000001); //animation time + delay time
}