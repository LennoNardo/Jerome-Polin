var t1 = new TimelineMax({ paused: true });

t1.to(".nav-container", 1, {
	left: 0,
	ease: Expo.easeInOut,
});

t1.staggerFrom(
	".menu > div",
	0.8,
	{ y: 100, opacity: 0, ease: Expo.easeOut },
	"0.1",
	"-=0.4"
);

t1.staggerFrom(
	".socials",
	0.8,
	{ y: 100, opacity: 0, ease: Expo.easeOut },
	"0.4",
	"-=0.6"
);



t1.reverse();
$(document).on("click", ".menu-open", function () {
	t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close", function () {
	t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-toggle", function () {
	t1.reversed(!t1.reversed()); // Mengatur animasi

	// Mengganti class untuk mengubah tampilan antara menu open dan close
	$(this).toggleClass("menu-open menu-close");
});


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var element = document.querySelector('.menu-open');

    // Cek ukuran layar
    if (window.innerWidth > 576) {
        if (scrollPosition > 100) { // Ganti 100 dengan jumlah piksel yang kamu inginkan
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.pointerEvents = 'auto'; // Mengaktifkan klik
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-50px)';
            element.style.pointerEvents = 'none'; // Menonaktifkan klik
        }
    } else {
        // Pada layar yang lebih kecil atau sama dengan 576px, tampilkan menu tanpa scroll
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.pointerEvents = 'auto';
    }
});


const menuOpen = document.querySelector(".menu-open");
const burger = document.querySelector(".burger");

menuOpen.addEventListener("click", function(){
    burger.classList.toggle("open");
});

