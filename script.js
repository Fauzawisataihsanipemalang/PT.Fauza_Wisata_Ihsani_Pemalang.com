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

// Pengaturan slider
let currentIndex = 0; // Indeks slide saat ini
const slides = document.querySelectorAll('.slide');

if (slides.length > 0) { // Pastikan ada slide yang ditemukan
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('show'); // Hapus kelas 'show' dari semua slide
            if (i === index) {
                slide.classList.add('show'); // Tambahkan kelas 'show' untuk slide yang aktif
            }
        });
    }

    function changeSlide(n) {
        currentIndex = (currentIndex + n + slides.length) % slides.length; // Menghitung indeks slide berikutnya
        showSlide(currentIndex); // Tampilkan slide baru
    }

    // Tampilkan slide pertama
    showSlide(currentIndex);

    // Tambahkan interval otomatis
    setInterval(() => {
        changeSlide(1);
    }, 3000); // Ganti slide setiap 3 detik
} else {
    console.warn("Tidak ada slide ditemukan."); // Peringatan jika tidak ada slide
}