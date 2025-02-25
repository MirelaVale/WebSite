class ProdutosDAO {
    static async getProducts(client, filter = {}) {
        try {
            const cursor = await client.find(filter).project({_id: 0}).sort({ nome: 1 });
            return await cursor.toArray();
        } catch (err) {
            console.error("❌ Erro ao buscar produtos:", err);
        }
    }

    static async insertProduct(client, product) {
        try {
            return await client.insertOne(product);
        } catch (err) {
            console.error("❌ Erro ao inserir produto:", err);
        }
    }

    static async deleteProductByName(client, nome) {
        try {
            return await client.deleteOne({ nome });
        } catch (err) {
            console.error("❌ Erro ao deletar produto:", err);
        }
    }

    static async updateProductPriceByName(client, nome, newPrice) {
        try {
            return await client.updateOne({ nome }, { $set: { preco: newPrice } });
        } catch (err) {
            console.error("❌ Erro ao atualizar preço do produto:", err);
        }
    }

    static async getDiscountedProducts(client) {
        try {
            return await client.find({ desconto: { $exists: true, $gt: 0 } }).toArray();
        } catch (err) {
            console.error("❌ Erro ao buscar produtos com desconto:", err);
        }
    }

    static async getProductsByColor(client, color) {
        try {
            return await client.find({ cor: color }).toArray();
        } catch (err) {
            console.error("❌ Erro ao buscar produtos por cor:", err);
        }
    }
}

module.exports = ProdutosDAO;
