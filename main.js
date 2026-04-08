function showSurpriseModal() {
    const mainContainer = document.getElementById('mainContainer');
    const modal = document.getElementById('surpriseModal');
    
    // Sembunyikan kartu utama dengan transisi bersih
    mainContainer.style.animation = 'fadeOutUp 0.6s ease-out forwards';
    
    // Tampilkan modal ucapannya
    setTimeout(() => {
        mainContainer.classList.add('hidden');
        modal.classList.remove('hidden');
        // Pastiin kartu utama gak ilang total, cuma hidden, biar bisa balik
    }, 600); // Tunggu animasi keluar selesai
}

// Fungsi buat nutup Modal Ucapan Rahasia
function closeSurpriseModal() {
    const mainContainer = document.getElementById('mainContainer');
    const modal = document.getElementById('surpriseModal');
    
    // Transisi modal menutup
    modal.style.animation = 'fadeOutDown 0.6s ease-out forwards';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        // Tampilkan kembali kartu utama
        mainContainer.classList.remove('hidden');
        mainContainer.style.animation = 'slideUp 0.8s ease-out';
        // Reset animasi modal biar bisa dibuka lagi
        modal.style.animation = 'modalPop 0.6s ease-out forwards';
    }, 600); 
}

// Tambahin animasi fade keluar di head HTML (buat transisi bersih)
const styleNode = document.createElement('style');
styleNode.type = 'text/css';
const keyframes = `
@keyframes fadeOutUp {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-50px); }
}
@keyframes fadeOutDown {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to { opacity: 0; transform: translateY(50px) scale(0.9); }
}`;
styleNode.innerHTML = keyframes;
document.getElementsByTagName('head')[0].appendChild(styleNode);