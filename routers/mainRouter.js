const express = require('express');
let router = express.Router();


/* Le indicamos la ruta a donde tiene que ir a buscarlo */
const controller = require('../controllers/mainController');


/* rutas de home y about */
router.get('/', controller.home);
router.get('/about', controller.about);


/* exportamos para ser utilizado */
module.exports = router;