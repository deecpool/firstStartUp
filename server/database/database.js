const path = require("path");
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync(path.resolve(__filename,"/data1.db"));

db.exec(`
    CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
    ) STRICT    
`);

const insert = db.prepare(`INSERT INTO data (key,value) VALUES (?,?)`);
insert.run(1,"TEXT1");
insert.run(2,"TEXT2");
insert.run(3,"TEXT3");
insert.run(4,"TEXT4");
insert.run(5,"TEXT5");

const query = db.prepare(`SELECT * FROM data ORDER BY key`);
console.log(query.all());
