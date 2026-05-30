// 1. Lo "Stato" del progetto (Il cuore di ShowBee)
let projectState = {
    clips: [],
    currentTime: 0,
    isPlaying: false
};

// 2. Funzione per aggiungere un clip alla timeline (Logica, non solo UI)
function addClipToTimeline(file) {
    const newClip = {
        id: Date.now(),
        name: file.name,
        duration: 0, // Dovremmo leggerla dal video
        startTime: 0
    };
    
    projectState.clips.push(newClip);
    renderTimeline(); // Funzione che ridisegna la UI basandosi sullo stato
}

// 3. Render Engine (La funzione che trasforma i dati in HTML)
function renderTimeline() {
    const timelineElement = document.getElementById('timeline');
    timelineElement.innerHTML = ''; // Svuota la timeline
    
    projectState.clips.forEach(clip => {
        const clipDiv = document.createElement('div');
        clipDiv.className = 'clip';
        clipDiv.innerText = clip.name;
        timelineElement.appendChild(clipDiv);
    });
}
