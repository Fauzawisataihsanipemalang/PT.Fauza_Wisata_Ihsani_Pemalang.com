// Pastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    /* ====================================
       Toggle Menu Navigasi (Mobile)
       ==================================== */
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    // Tambahkan event listener untuk klik pada ikon menu
    if (menuIcon && navMenu) { // Pastikan elemen ditemukan
        menuIcon.addEventListener('click', function() {
            // Toggle class 'active' pada nav-menu
            navMenu.classList.toggle('active');
            // Opsional: Ubah ikon menu saat dibuka/ditutup (misal: dari bars ke times)
            const icon = menuIcon.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Menggunakan ikon 'x'
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Kembali ke ikon 'bars'
            }
        });
    }


    /* ====================================
       Scroll Reveal Animation (Intersection Observer)
       ==================================== */
    // Temukan semua elemen yang memiliki kelas 'fade-in' atau 'animate-on-scroll'
    const fadeIns = document.querySelectorAll('.fade-in, .animate-on-scroll');

    // Buat Intersection Observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Jika elemen sedang terlihat (isIntersecting)
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible' untuk memicu animasi CSS
                entry.target.classList.add('is-visible');
                // Berhenti mengamati elemen ini setelah terlihat (opsional, agar animasi tidak berulang)
                // observer.unobserve(entry.target);
            } else {
                 // Opsional: Hapus kelas is-visible saat elemen keluar dari viewport
                 // agar animasi berulang saat scroll kembali
                 // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        // Opsi Intersection Observer
        threshold: 0.1 // 10% dari elemen harus terlihat untuk memicu
        // rootMargin: '0px 0px -50px 0px' // Contoh: Pemicu 50px sebelum elemen sepenuhnya terlihat
    });

    // Amati setiap elemen yang ditemukan
    fadeIns.forEach(element => {
        observer.observe(element);
    });

    /* ====================================
       Smooth Scrolling (Opsional - jika ada link #section)
       ==================================== */
    // Contoh: Jika Anda memiliki link seperti <a href="#services">Layanan</a>
    // Script ini akan membuat scroll ke section tersebut menjadi halus.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll ke elemen target dengan perilaku smooth
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Opsional: Tutup menu mobile setelah klik link (jika menu terbuka)
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                     const icon = menuIcon.querySelector('i');
                     icon.classList.remove('fa-times');
                     icon.classList.add('fa-bars');
                }
            }
        });
    });


    /* ====================================
       Slider Script (Dihapus karena menggunakan Mozaik)
       ==================================== */
    // Script slider yang sebelumnya ada di HTML telah dihapus karena Anda menggunakan mozaik.
    // Jika di masa depan Anda ingin menambahkan slider di bagian lain,
    // Anda bisa menempatkan script slider di sini.

}); // Akhir dari DOMContentLoaded
