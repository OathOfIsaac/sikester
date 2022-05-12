// add routes file structure in controllers like in mod 13
const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;
