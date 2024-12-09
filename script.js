function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  let img1 = document.getElementById("img1");
  img1.addEventListener("click", function() {
    window.location.href = "https://pizzaslice99.netlify.app/";
  });
  let img2 = document.getElementById("img2");
  img2.addEventListener("click", function() {
    window.location.href = "https://infinityweb99.netlify.app/";
  });
  let img3 = document.getElementById("img3");
  img3.addEventListener("click", function() {
    window.location.href = "https://natours99.netlify.app/";
  });