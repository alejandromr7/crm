const express = require('express');
const cors = require('cors');
const db = require('./db/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
        this.listen();
        this.dbConnection();
    }

    async dbConnection() {
        try {
            require('./models/Clientes');
            await db.sync();
            //console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api', require('./routes/clientesRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`);
        })
    }
}

module.exports = Server;