class ShowBeeEngine {
    constructor() {
        this.nodes = [];
        this.logElement = document.getElementById('log-output');
    }

    log(msg) {
        const entry = document.createElement('div');
        entry.textContent = `> ${new Date().toLocaleTimeString()} :: ${msg}`;
        this.logElement.appendChild(entry);
        this.logElement.scrollTop = this.logElement.scrollHeight;
    }

    run() {
        this.log("Starting Execution Sequence...");
        if(this.nodes.length === 0) {
            this.log("ERROR: No modules found in canvas.");
            return;
        }
        // Qui la logica per iterare i nodi
        this.nodes.forEach(node => {
            this.log(`Processing module: ${node.type}...`);
        });
        this.log("Sequence Completed.");
    }

    addNode(type) {
        const newNode = { id: Date.now(), type: type };
        this.nodes.push(newNode);
        this.log(`Node added: ${type}`);
    }

    clear() {
        this.nodes = [];
        this.log("Canvas cleared.");
    }
}

// Inizializzazione
const engine = new ShowBeeEngine();

// Event Listeners (Esempio per aggiungere nodi)
document.querySelectorAll('.tool-group').forEach(item => {
    item.addEventListener('click', (e) => {
        engine.addNode(e.target.textContent);
    });
});
