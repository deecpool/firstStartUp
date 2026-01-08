import {loadSqlUsers} from '../../db/data/loaders/loadSqlUsers.mjs'

export default function loadUsers(router, db) {
    router.get('/users' , (req,res) => {
        res.writeHead(200, { "Content-type" : "application/json" })
        res.end(JSON.stringify({ users: loadSqlUsers(db) }))
    })
}