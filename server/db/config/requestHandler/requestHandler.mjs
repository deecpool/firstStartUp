//ROUTER
import Router from '../../../utils/router/router.mjs'
import loadHandle from '../../../utils/routes/index.mjs'
//db
import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync('database.db')
//params
const router = new Router
loadHandle(router,db)

export function requestHandler(req,res) {
    const method = req.method
    const path = req.url

    const handler = router.find(path,method)

    if(typeof handler === 'function') {
        handler(req,res)
    } else {
        res.writeHead(404, {"content-type" : "text/plain"})
        res.end("not found")
    }
}