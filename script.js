function calculateTotal() {
  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const rateWeb = parseFloat(document.getElementById("rate-web").value) || 0;
  const rateGraphics =
    parseFloat(document.getElementById("rate-graphics").value) || 0;
  const rateMarketing =
    parseFloat(document.getElementById("rate-marketing").value) || 0;

  const totalWeb = hours * rateWeb;
  const totalGraphics = hours * rateGraphics;
  const totalMarketing = hours * rateMarketing;

  const total = totalWeb + totalGraphics + totalMarketing;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Wynagrodzenie: ${total.toFixed(2)} PLN`;
}

document.body.classList.add("loaded");
/*--------------------------------toggle icon navbar------------------------------------*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*--------------------------sekcja scrolla-----------------------------------------------*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header nav");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
///////8888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
});

document.getElementById("instagram").onclick = function () {
  window.location.href = "https://www.instagram.com/iambjally/";
};

document.getElementById("behance").onclick = function () {
  window.location.href = "https://www.behance.net/jakubbiaasik";
};

document.getElementById("linkedin").onclick = function () {
  window.location.href =
    "https://www.linkedin.com/in/jakub-bia%C5%82asik-687a8823b/";
};

document.getElementById("pobierzPrzycisk").onclick = function () {
  var link = document.createElement("a");
  link.href = "Jakub Białasik Curriculum Vitae.pdf";
  link.download = "Jakub Białasik Curriculum Vitae.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
//////////////////////////////////////////////////////////////////////////////


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
////////////////////////////////////////////////////////////////////////////////////


function handleScroll() {
  var scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
}

function scrollToTop() {
  var position = window.pageYOffset;
  var scrollInterval = setInterval(function() {
    if (position > 0) {
      window.scrollTo(0, position);
      position -= 20; 
    } else {
      clearInterval(scrollInterval);
    }
  }, 10); 
}

