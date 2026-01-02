const path = require("path");
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync(path.resolve(__dirname,"data.db"));

