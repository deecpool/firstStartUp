const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../routes');
fs.readdirSync(routesDir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => require(path.join(routesDir, file)));
