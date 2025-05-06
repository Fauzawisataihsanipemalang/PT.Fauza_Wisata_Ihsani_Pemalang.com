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

    <script>
        // Script untuk toggle menu nav
        const menuIcon = document.getElementById('menu-icon');
        const navMenu = document.getElementById('nav-menu');

        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Tambahkan script untuk Scroll Reveal Animation (memerlukan library atau implementasi sendiri)
        // Contoh sederhana (memerlukan library seperti ScrollReveal JS)
        // Jika Anda ingin menggunakan ScrollReveal JS, tambahkan:
        // <script src="https://unpkg.com/scrollreveal"></script>
        // ScrollReveal().reveal('.animate-on-scroll', {
        //     delay: 200,
        //     distance: '50px',
        //     origin: 'bottom',
        //     easing: 'ease-in-out',
        //     interval: 100
        // });

         // Contoh sederhana untuk animasi fade-in saat elemen terlihat (tanpa library)
        document.addEventListener('DOMContentLoaded', function() {
            const fadeIns = document.querySelectorAll('.fade-in, .animate-on-scroll'); // Targetkan kelas animasi

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
                    }
                });
            }, {
                threshold: 0.1 // Persentase elemen yang terlihat untuk memicu
            });

            fadeIns.forEach(element => {
                observer.observe(element);
            });
        });


         // Script untuk slider testimoni sederhana (jika Anda menggunakannya)
         // Memerlukan penambahan tombol navigasi di HTML
         /*
         const testimonials = document.querySelectorAll('.testimonial-item');
         let currentTestimonial = 0;

         function showTestimonial(index) {
             testimonials.forEach((item, i) => {
                 item.style.display = 'none';
                 if (i === index) {
                     item.style.display = 'block';
                 }
             });
         }

         function changeTestimonial(n) {
             currentTestimonial = (currentTestimonial + n + testimonials.length) % testimonials.length;
             showTestimonial(currentTestimonial);
         }

         // show first testimonial initially
         showTestimonial(currentTestimonial);

         // Add event listeners to buttons if you add them in HTML
         // document.querySelector('.prev-testimonial').addEventListener('click', () => changeTestimonial(-1));
         // document.querySelector('.next-testimonial').addEventListener('click', () => changeTestimonial(1));

         // Auto rotate testimonials (optional)
         // setInterval(() => {
         //     changeTestimonial(1);
         // }, 5000); // Change every 5 seconds
         */

    </script>
