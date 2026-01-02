const Router  = require('../router/router.js');

Router.get('/data', (req, res) => {
    res.end('Users list');
});
