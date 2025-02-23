const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.URI);

async function connectDB() {
    try {
        await client.connect();
        console.log('✅ Conectado ao banco de dados MongoDB');
        return client.db('cores_do_pulso').collection('produtos');
    } catch (err) {
        console.error('❌ Erro ao conectar ao banco de dados:', err);
    }
}

module.exports = connectDB;
