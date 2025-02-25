const express = require('express');
const router = express.Router();
const mongoose = require('../config/db');
const ProdutosDAO = require('../dao/produtosDAO');

const produtosCollection = mongoose.connection.collection('produtos');

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
    const produtos = await ProdutosDAO.getProducts(produtosCollection);
    res.json(produtos);
});

// Rota para adicionar um novo produto
router.post('/add', async (req, res) => {
    const novoProduto = req.body;
    const result = await ProdutosDAO.insertProduct(produtosCollection, novoProduto);
    res.json(result);
});

// Rota para deletar um produto pelo nome
router.delete('/delete/:nome', async (req, res) => {
    const nome = req.params.nome;
    const result = await ProdutosDAO.deleteProductByName(produtosCollection, nome);
    res.json(result);
});

// Rota para atualizar preço de um produto
router.put('/update/:nome', async (req, res) => {
    const nome = req.params.nome;
    const { preco } = req.body;
    const result = await ProdutosDAO.updateProductPriceByName(produtosCollection, nome, preco);
    res.json(result);
});

// Rota para buscar produtos com desconto
router.get('/descontos', async (req, res) => {
    const produtos = await ProdutosDAO.getDiscountedProducts(produtosCollection);
    res.json(produtos);
});

// Rota para buscar produtos por cor
router.get('/cor/:color', async (req, res) => {
    const color = req.params.color;
    const produtos = await ProdutosDAO.getProductsByColor(produtosCollection, color);
    res.json(produtos);
});

module.exports = router;
