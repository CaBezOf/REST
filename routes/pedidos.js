const express = require ('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS    
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//INSERE UM PEDIDOS
router.post('/', (req,res,next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

//RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_pedido', (req,res,next) => {
    const id = req.params.id_pedido
        res.status(200).send({
            mensagem: 'Detalhes do Pedido',
            id_pedido: id
        });
});

//DELETA UM PEDIDO
router.delete('/', (req,res,next) => {
    res.status(201).send({
        mensagem: 'Pedido Excluído'
    });
});

module.exports = router;
