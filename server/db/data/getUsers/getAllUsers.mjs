export const getAllUsers = (db) => {
    const stmt = db.prepare('SELECT * FROM users');
    return stmt.all(); 
}
