function enterWebsite() {

    document.querySelector(".opening").style.display = "none";

    document.querySelector("#main-content").style.display = "block";

    window.scrollTo(0, 0);

    const music = document.getElementById("backgroundMusic");

    music.volume = 0.5;

    music.play()
        .then(() => {
            console.log("Musik berhasil diputar 🎵");
        })
        .catch(error => {
            console.log("Musik gagal diputar:", error);
        });
}


// TANGGAL JADIAN
const anniversary = new Date("2026-08-03T00:00:00");


function updateCounter() {

    const now = new Date();

    const difference = now - anniversary;

    if (difference < 0) {
        return;
    }

    const seconds = Math.floor(difference / 1000);

    const days = Math.floor(seconds / 86400);

    const hours = Math.floor(
        (seconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (seconds % 3600) / 60
    );

    const secs = seconds % 60;


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        hours.toString().padStart(2, "0");

    document.getElementById("minutes").textContent =
        minutes.toString().padStart(2, "0");

    document.getElementById("seconds").textContent =
        secs.toString().padStart(2, "0");

}


setInterval(updateCounter, 1000);

updateCounter();

const photos = [

    "images/foto-01.jpeg",
    "images/foto-02.jpeg",
    "images/foto-03.jpeg",
    "images/foto-04.jpeg",
    "images/foto-05.jpeg",
    "images/foto-06.jpeg",
    "images/foto-07.jpeg",
    "images/foto-08.jpeg",
    "images/foto-09.jpeg",
    "images/foto-10.jpeg",
    "images/foto-11.jpeg",
    "images/foto-12.jpeg",
    "images/foto-13.jpeg",
    "images/foto-14.jpeg",
    "images/foto-15.jpeg"

];


let currentPhotoIndex = 0;


function nextPhoto() {

    const photo = document.getElementById("memoryPhoto");

    const counter =
        document.getElementById("currentPhoto");

    const container =
        document.querySelector(".photo-container");


    // Animasi keluar

    container.classList.add("changing");


    setTimeout(() => {

        // Foto berikutnya

        currentPhotoIndex++;


        // Kalau sudah foto terakhir,
        // kembali ke foto pertama

        if (currentPhotoIndex >= photos.length) {

            currentPhotoIndex = 0;

        }


        // Ganti gambar

        photo.src =
            photos[currentPhotoIndex];


        // Update nomor

        counter.textContent =
            String(currentPhotoIndex + 1)
            .padStart(2, "0");


        // Animasi masuk

        setTimeout(() => {

            container.classList.remove("changing");

        }, 50);


    }, 400);

}