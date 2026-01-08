import {getAllUsers} from '../getUsers/getAllUsers.mjs'

export const loadSqlUsers = (db) => {
    try {
        const users = getAllUsers(db)
        return users
    } catch(err) {
        console.log("EXECUTE SQL ERROR:..." , err)
        return []
    }
}