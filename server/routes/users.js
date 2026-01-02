const Router  = require('../router/router.js');

Router.get('/users', (req, res) => {
    res.end('Users list');
});
