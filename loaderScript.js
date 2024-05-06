window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page
  }, 1000);

  let fade1 = document.getElementsByClassName("fade-1");
  let fade2 = document.getElementsByClassName("fade-2");
  let fade3 = document.getElementsByClassName("fade-3");
  let fade4 = document.getElementsByClassName("fade-4");

  /*getElementsByClassName gets "multiple elements" 
  so a forloop is needed to make it work*/
  setTimeout(() => {
    for (let i = 0; i < fade1.length; i++) {
      fade1[i].style.opacity = 1;
      fade1[i].style.transform = "translateY(0)";
    }
  }, 1250); //animation time + delay time

  setTimeout(() => {
    for (let i = 0; i < fade2.length; i++) {
      fade2[i].style.opacity = 1;
      fade2[i].style.transform = "translateY(0)";
    }
  }, 1750); //animation time + delay time

  setTimeout(() => {
    for (let i = 0; i < fade3.length; i++) {
      fade3[i].style.opacity = 1;
      fade3[i].style.transform = "translateY(0)";
    }
  }, 2250); //animation time + delay time

  setTimeout(() => {
    for (let i = 0; i < fade4.length; i++) {
      fade4[i].style.opacity = 1;
      fade4[i].style.transform = "translateY(0)";
    }
  }, 2750); //animation time + delay time

  window.scrollTo(0, 0);
});

window.addEventListener('load', function() {
    
});