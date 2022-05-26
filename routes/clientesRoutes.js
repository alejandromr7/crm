const { Router } = require('express');
const { consultarClientes, crearCliente } = require('../controllers/clientesController');
const router = Router();

router.route('/').get(consultarClientes).post(crearCliente);

module.exports = router;