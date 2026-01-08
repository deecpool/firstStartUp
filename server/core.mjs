//exec sql
import { DatabaseSync } from 'node:sqlite'
import { loadSqlite } from './db/sql/index.mjs'

const db = new DatabaseSync('database.db');
loadSqlite(db)

//exec server
import {startServer} from './db/config/listener/serverListener.mjs'
startServer()
