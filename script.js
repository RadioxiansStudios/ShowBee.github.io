// Seleziona gli elementi
const videoUpload = document.getElementById('video-upload');
const videoPreview = document.getElementById('video-preview');

// Evento per caricare il video
videoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videoPreview.src = videoURL;
        console.log("Video caricato con successo: " + file.name);
    }
});

console.log("ShowBee script.js caricato!");
