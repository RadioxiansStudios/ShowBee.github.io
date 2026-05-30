// Seleziona gli elementi principali
const videoUpload = document.getElementById('video-upload');
const videoPreview = document.getElementById('video-preview');
const fileList = document.getElementById('file-list');

videoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videoPreview.src = videoURL;
        
        // Puliamo la lista e aggiungiamo il file in modo dinamico
        fileList.innerHTML = ''; 
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `<strong>${file.name}</strong>`;
        fileList.appendChild(fileItem);
        
        console.log("ShowBee: Loaded " + file.name);
    }
});
