

const consultarClientes = async (req, res) => {
    res.json('Clientes');
}

const crearCliente = async (req, res) => {
    res.json('Cliente guardado');
}


module.exports = {
    consultarClientes,
    crearCliente
}