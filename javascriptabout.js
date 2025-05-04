<script>
// Script untuk toggle menu nav
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// Script untuk mengatur slider
let currentIndex = 0; // Indeks slide saat ini
const slides = document.querySelectorAll('.slide');

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

// Tambahkan interval otomatis jika diinginkan
setInterval(() => {
    changeSlide(1);
}, 3000); // Ganti slide setiap 3 detik
</script>