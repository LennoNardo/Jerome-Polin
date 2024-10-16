function simple_local_time(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    var suffix = "AM";

    if (hours >= 12) {
        hours = hours -12;
        suffix = "PM";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var time = hours + ":" + minutes + " " + suffix ;
    jQuery("#time").text(time);
    var t = setTimeout(simple_local_time, 500);
}


window.onload=simple_local_time();


function disableAOSonSmallScreens() {
    if (window.innerWidth <= 576) {
        // Menghapus atribut data-aos dari semua elemen yang memilikinya
        document.querySelectorAll('[data-aos]').forEach(function(element) {
            element.removeAttribute('data-aos');
        });
        // Refresh AOS untuk menerapkan perubahan
        AOS.refresh();
    } else {
        // Inisialisasi AOS jika layar di atas 576px
        AOS.init({
            duration: 1000,
        });
    }
}

// Panggil fungsi saat halaman dimuat
window.addEventListener('load', disableAOSonSmallScreens);

// Panggil fungsi saat ukuran layar berubah
window.addEventListener('resize', disableAOSonSmallScreens);
