const Router  = require('../router/router.js');
const { getPosts } = require("../database/database.js");

Router.get('/posts', (req, res) => {
    const limit = parseInt(req.query.limit  || 10);
    const posts = getPosts(limit);
    res.json(posts); 
});
