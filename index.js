document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let x;
let toast = document.getElementById("toast");
function showToast(){
    clearTimeout(x);
    toast.style.transform = "translateX(10px)";
    x = setTimeout(()=>{
        toast.style.transform = "translateX(400px)"
    }, 5000);
}
function closeToast(){
    toast.style.transform = "translateX(400px)";
}


const typeWriter = document.getElementById('typewriter-text');
const text = 'Ticket System';

if (typeWriter) {
    typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length);
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* window.addEventListener('load', (event) => {
  showToast();
}); */

