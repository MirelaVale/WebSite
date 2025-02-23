const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const produtosRoutes = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/produtos', produtosRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
