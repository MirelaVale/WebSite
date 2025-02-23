document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();

    document.getElementById('filter-color').addEventListener('change', (event) => {
        const corSelecionada = event.target.value;
        if (corSelecionada) {
            carregarProdutos(`/api/produtos/cor/${corSelecionada}`);
        } else {
            carregarProdutos();
        }
    });
});

function carregarProdutos(endpoint = '/api/produtos') {
    fetch(endpoint)
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('product-list');
            container.innerHTML = '';

            produtos.forEach(produto => {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-3');

                card.innerHTML = `
                    <div class="card">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome}</h5>
                            <p class="card-text">${produto.descricao}</p>
                            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                            ${produto.desconto > 0 ? `<p class="text-danger">Desconto: ${produto.desconto}%</p>` : ''}
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('❌ Erro ao buscar produtos:', error));
}
