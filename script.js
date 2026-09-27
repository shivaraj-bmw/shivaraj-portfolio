// ======================================
// Portfolio JavaScript
// ======================================

// Navbar Links
const navLinks = document.querySelectorAll(".navbar a");

// Sections
const sections = document.querySelectorAll("section");

// Header
const header = document.querySelector(".header");

// Contact Form
const form = document.querySelector("form");


// ======================================
// Active Navbar on Scroll
// ======================================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ======================================
// Header Shadow
// ======================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";

    }

});


// ======================================
// Smooth Scroll for Navbar
// ======================================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ======================================
// Contact Form
// ======================================

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();

});

}


// ======================================
// Fade Animation on Scroll
// ======================================

const cards = document.querySelectorAll(

".about-card, .skill-card, .project-card, .gallery-item, .contact-card"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{

threshold:0.2

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s ease";

observer.observe(card);

});


// ======================================
// Console Message
// ======================================

console.log("Portfolio Loaded Successfully");

// ===========================
// Mobile Menu
// ===========================

const menu = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});

