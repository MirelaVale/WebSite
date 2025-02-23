const express = require('express');
const connectDB = require('../config/db');
const ProductsDAO = require('../dao/productsDAO');

const router = express.Router();

router.get('/', async (req, res) => {
    const db = await connectDB();
    const products = await ProductsDAO.getProducts(db);
    res.json(products);
});

router.get('/descontos', async (req, res) => {
    const db = await connectDB();
    const products = await ProductsDAO.getDiscountedProducts(db);
    res.json(products);
});

router.get('/cor/:color', async (req, res) => {
    const db = await connectDB();
    const products = await ProductsDAO.getProductsByColor(db, req.params.color);
    res.json(products);
});

router.post('/add', async (req, res) => {
    const db = await connectDB();
    const { nome, descricao, preco, imagem, desconto, cor } = req.body;
    const newProduct = { nome, descricao, preco, imagem, desconto, cor };
    const result = await ProductsDAO.insertProduct(db, newProduct);
    res.json(result);
});

router.delete('/delete/:nome', async (req, res) => {
    const db = await connectDB();
    const result = await ProductsDAO.deleteProductByName(db, req.params.nome);
    res.json(result);
});

router.put('/update/:nome/:preco', async (req, res) => {
    const db = await connectDB();
    const result = await ProductsDAO.updateProductPriceByName(db, req.params.nome, parseFloat(req.params.preco));
    res.json(result);
});

module.exports = router;
