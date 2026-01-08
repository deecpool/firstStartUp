export default function loadPosts(router) {
    router.get('/posts' , (req,res) => {
        res.writeHead(200, { "Content-type" : "application/json" })
        res.end(JSON.stringify({ message: "Hello you are good" }))
    })
}