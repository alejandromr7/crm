const { Router } = require('express');
const { consultarClientes, crearCliente, actualizarCliente, eliminarCliente } = require('../controllers/clientesController');
const router = Router();

router.route('/').get(consultarClientes).post(crearCliente);
router.route('/:id').put(actualizarCliente).delete(eliminarCliente);

module.exports = router;