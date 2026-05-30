// Seleziona gli elementi principali
const videoUpload = document.getElementById('video-upload');
const videoPreview = document.getElementById('video-preview');
const fileList = document.getElementById('file-list');

// 1. Funzione per caricare il video e aggiungerlo alla "Libreria"
videoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videoPreview.src = videoURL;
        
        // Aggiorniamo la sidebar invece di lasciarla vuota
        fileList.innerHTML = `<div class="file-item" style="padding:5px; border:1px solid #444; margin-top:5px;">${file.name}</div>`;
        
        console.log("ShowBee: " + file.name);
    }
});

// 2. Setup iniziale della Timeline (Logica base)
document.querySelectorAll('.clip').forEach(clip => {
    clip.addEventListener('dragstart', (e) => {
        console.log("You are moving " + e.target.innerText);
    });
});

console.log("ShowBee v0.1");
