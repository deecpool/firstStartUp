let loaded = false
export const loadSqlite = (db) => {
    if (!loaded) {
        db.exec(` CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT,
            email TEXT
        )`)

        db.exec(` CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT
        )`)
        loaded = true;
    }
    return true;
}
