class ShowBeeEngine {
    constructor() {
        this.nodes = [];
        this.logElement = document.getElementById('log-output');
        this.canvas = document.getElementById('canvas');
        this.inspector = document.getElementById('prop-editor');
    }

    log(msg) {
        const entry = document.createElement('div');
        entry.textContent = `> ${new Date().toLocaleTimeString()} :: ${msg}`;
        this.logElement.appendChild(entry);
        this.logElement.scrollTop = this.logElement.scrollHeight;
    }

    addNode(type) {
        const newNode = { 
            id: Date.now(), 
            type: type, 
            x: 50 + (this.nodes.length * 20), 
            y: 50 + (this.nodes.length * 20) 
        };
        
        this.nodes.push(newNode);
        this.renderNode(newNode);
        this.log(`Node added: ${type}`);
    }

    renderNode(node) {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node-card';
        nodeEl.style.position = 'absolute';
        nodeEl.style.left = node.x + 'px';
        nodeEl.style.top = node.y + 'px';
        nodeEl.style.width = '180px';
        nodeEl.style.padding = '15px';
        nodeEl.style.background = '#161b22';
        nodeEl.style.border = '1px solid #58a6ff';
        nodeEl.style.borderRadius = '8px';
        nodeEl.style.cursor = 'move';
        
        nodeEl.innerHTML = `<strong>${node.type}</strong><br><small>ID: ${node.id}</small>`;
        
        // Cliccando il nodo, aggiorniamo l'inspector
        nodeEl.onclick = () => this.selectNode(node);
        
        this.canvas.appendChild(nodeEl);
    }

    selectNode(node) {
        this.inspector.innerHTML = `
            <div style="padding:10px; border-bottom:1px solid #30363d">
                <p><strong>Configuring:</strong> ${node.type}</p>
                <label>Node Name:</label>
                <input type="text" class="input-field" value="${node.type}">
                <label style="display:block; margin-top:10px;">Settings:</label>
                <textarea class="input-field" rows="3"></textarea>
            </div>
        `;
        this.log(`Inspector updated for Node ID: ${node.id}`);
    }

run() {
        this.log("Executing Sequence: Renaming 3 folders...");
        
        // Simuliamo l'elaborazione dei dati
        const foldersToRename = ["CIAO_1", "CIAO_2", "CIAO_3"];
        
        foldersToRename.forEach((folder, index) => {
            setTimeout(() => {
                const newName = `PROCESSED_${folder}`;
                this.log(`Renaming: ${folder} -> ${newName}... SUCCESS`);
                
                // Se siamo all'ultimo file, chiudiamo il processo
                if(index === foldersToRename.length - 1) {
                    this.log("--- SEQUENCE COMPLETED: 3 Folders Renamed ---");
                }
            }, (index + 1) * 1000);
        });
    }

    clear() {
        this.nodes = [];
        this.canvas.innerHTML = '';
        this.inspector.innerHTML = 'Select a node to edit';
        this.log("Canvas cleared.");
    }
}

// Inizializzazione
const engine = new ShowBeeEngine();

// Binding dei click sulla sidebar
document.querySelectorAll('.tool-group').forEach(item => {
    item.addEventListener('click', (e) => {
        engine.addNode(e.target.textContent.trim());
    });
});
