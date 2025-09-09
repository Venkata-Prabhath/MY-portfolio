const menuOpen = document.querySelector(".fa-bars-staggered");
const navbarCollapse = document.querySelector(".navbar-collapse");
const menuLinks = document.querySelectorAll(".navbar-menus a");

menuOpen.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");

    if (menuOpen.classList.contains("fa-bars-staggered")) {
        menuOpen.classList.remove("fa-bars-staggered");
        menuOpen.classList.add("fa-xmark");
    } else {
        menuOpen.classList.remove("fa-xmark");
        menuOpen.classList.add("fa-bars-staggered");
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
        menuOpen.classList.remove("fa-xmark");
        menuOpen.classList.add("fa-bars-staggered");
    });
});

// Typing effect
const roles = [
    "MERN Stack Developer",
    "Prompt Engineer",
    "Data Scientist",
    "AI/ML Engineer"
];

let roleIndex = 0;
let charIndex = 0;
const typingText = document.querySelector(".typing-text");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

