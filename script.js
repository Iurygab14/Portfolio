// =========================================
// MENU MOBILE
// =========================================

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fecha o menu quando o usuário clica em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================================
// ANO AUTOMÁTICO DO FOOTER
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================================
// ANIMAÇÃO AO ENTRAR NA TELA
// =========================================

const animatedElements = document.querySelectorAll(
    ".project-card, .skill-category, .about-highlight, .education-item"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});