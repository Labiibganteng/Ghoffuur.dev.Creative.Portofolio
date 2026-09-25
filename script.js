// 1. Logika Intro / Loading Screen (Mirip Video Pertama)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Berikan jeda sedikit agar animasi loading terlihat elegan
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1200);
});

// 2. Efek Interaktif Mengikuti Gerakan Mouse pada ID Card (Mirip Video Kedua)
const card = document.getElementById('idCard');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    if(card) {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-8px)`;
    }
});

// Kembalikan posisi kartu saat mouse meninggalkan jendela
document.addEventListener('mouseleave', () => {
    if(card) {
        card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0px)`;
    }
});
