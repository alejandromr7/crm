const { Router } = require('express');
const { consultarClientes, crearCliente, actualizarCliente, eliminarCliente, consultarCliente } = require('../controllers/clientesController');
const router = Router();

router.route('/').get(consultarClientes).post(crearCliente);
router.route('/:id').put(actualizarCliente).delete(eliminarCliente).get(consultarCliente);

module.exports = router;