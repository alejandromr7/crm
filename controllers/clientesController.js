const Clientes = require("../models/Clientes");

const consultarClientes = async (req, res) => {
    const cliente = await Clientes.findOne({ where: { email: req.body.email } });
    res.json(cliente);
}

const crearCliente = async (req, res) => {
    const cliente = await Clientes.findOne({ where: { email: req.body.email } });

    if (cliente) {
        res.json({ msg: 'Este cliente ya se encuentra registrado', error: true });
        return;
    }
    await Clientes.create(req.body);
    res.json({ msg: 'Registrado correctamente', error: false });
}

const actualizarCliente = async (req, res) => {

    const { id } = req.params;
    const { nombre, email, empresa, telefono, notas } = req.body;
    const cliente = await Clientes.findByPk(id)

    if (!cliente) {
        res.json({ msg: 'No hay coincidencias para este cliente', error: true });
        return;
    }

    try {
        cliente.nombre = nombre;
        cliente.email = email;
        cliente.empresa = empresa;
        cliente.telefono = telefono;
        cliente.notas = notas;
        await cliente.save();

        res.json({ msg: 'Cliente actualizado correctamente', error: false });
    } catch (error) {
        console.log(error);
    }
}

const eliminarCliente = async (req, res) => {

    const { id } = req.params;
    const cliente = await Clientes.findByPk(id)

    if (!cliente) {
        res.json({ msg: 'No hay coincidencias para este cliente', error: true });
        return;
    }

    try {
        await cliente.destroy()
        res.json({ msg: 'Cliente eliminado correctamente', error: false });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    consultarClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}