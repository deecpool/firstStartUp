const Router  = require('../router/router.js');

Router.get('/main', (req, res) => {
    res.end('Users list');
});
