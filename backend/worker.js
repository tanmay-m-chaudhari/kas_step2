const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../frontend/public/data.json');

function writeData() {
    const data = {
        timestamp: Date.now(),
        generated: new Date().toISOString(),
        items: ['item1', 'item2', 'item3'],
    };
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

writeData();

setInterval(writeData, 5000);
