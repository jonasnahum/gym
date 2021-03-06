module.exports = (function() {
    var ClientesController = function(express, clientesApi) {
        this.express = express.module;
        this.clientesApi = clientesApi;
        this.router = this.express.Router();

        var router = this.router;

        router.get('/', clientesApi.getAll.bind(clientesApi));

        router.get('/clientesDeUsuario/:userId', clientesApi.clientesDeUsuario.bind(clientesApi));

        router.post('/', clientesApi.save.bind(clientesApi));

        router.get('/:id', clientesApi.getOne.bind(clientesApi));

        router.get('/lastpay/:id', clientesApi.getOneWithLastPay.bind(clientesApi));

        router.delete('/:id', clientesApi.delete.bind(clientesApi));
    }

    return ClientesController;
})();
