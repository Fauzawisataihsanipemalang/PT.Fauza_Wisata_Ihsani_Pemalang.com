// script.js

// ====================================
// 1. Toggle Nav Menu (Mobile)
// ====================================

// Tunggu hingga seluruh DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    // Pastikan elemen ditemukan sebelum menambahkan event listener
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Opsional: Tambahkan kelas ke body untuk mencegah scroll saat menu terbuka
            // document.body.classList.toggle('menu-open');
        });

        // Opsional: Tutup menu saat link diklik (terutama berguna di mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                // document.body.classList.remove('menu-open');
            });
        });
    } else {
        console.error("Menu icon or nav menu element not found!");
    }

    // ====================================
    // 2. Scroll Reveal Animation
    // ====================================

    // Fungsi untuk memeriksa apakah elemen terlihat di viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.bottom >= 0 &&
            rect.right >= 0
        );
    }

    // Fungsi untuk menangani animasi saat scroll
    function handleScrollAnimations() {
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

        elementsToAnimate.forEach(el => {
            // Jika elemen belum terlihat dan sekarang terlihat
            if (!el.classList.contains('is-visible') && isElementInViewport(el)) {
                // Ambil nilai data-delay
                const delay = el.getAttribute('data-delay');
                if (delay) {
                    // Set variabel CSS --delay pada elemen untuk transisi delay
                    el.style.setProperty('--delay', delay);
                }

                // Tambahkan kelas is-visible setelah delay jika ada, atau langsung
                 setTimeout(() => {
                      el.classList.add('is-visible');
                 }, delay ? parseFloat(delay) * 1000 : 0); // Ubah delay string menjadi milidetik
            }
             // Opsional: Hapus kelas is-visible saat elemen keluar viewport jika ingin animasi berulang
             /*
            else if (el.classList.contains('is-visible') && !isElementInViewport(el)) {
                 el.classList.remove('is-visible');
                 el.style.removeProperty('--delay'); // Hapus delay saat keluar viewport
            }
            */
        });
    }

    // Panggil fungsi saat pertama kali halaman dimuat
    handleScrollAnimations();

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScrollAnimations);

    // Panggil juga saat window di-resize (untuk menangani perubahan viewport)
    window.addEventListener('resize', handleScrollAnimations);
});

// Opsional: Fungsi lain bisa ditambahkan di sini, misalnya untuk slider, form validation, dll.
