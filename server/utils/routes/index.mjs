import  loadPosts  from './posts.mjs'
import loadUsers from './users.mjs'

export default function loadHandle(router, db) {
    loadPosts(router)
    loadUsers(router,db)
}