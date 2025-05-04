// Menangani toggle menu
const menuToggle = document.getElementById("menu-toggle");
if (menuToggle) { // Periksa apakah elemen ada
    menuToggle.addEventListener("click", function () {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.toggle("active");
    });
}

// Mengelola navigasi link smooth scroll
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Mencegah perilaku default
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) { // Periksa apakah elemen target ada
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

