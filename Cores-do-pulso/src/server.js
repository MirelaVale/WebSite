require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db'); // Importa a conexão com o MongoDB
const produtosRoutes = require('./routes/produtos');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para permitir JSON no body das requisições
app.use(express.static('public')); // Para servir arquivos estáticos

// Rotas
app.use('/api/produtos', produtosRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
