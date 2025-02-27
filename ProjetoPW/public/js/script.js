let contadorCarrinho = 0;

function adicionarAoCarrinho(nomeProduto) {
    contadorCarrinho++;
    document.getElementById("contadorCarrinho").innerText = contadorCarrinho;
    alert(`${nomeProduto} adicionado ao carrinho!`);
}

function mostrarContato() {
    alert("Contato: contato@coresdopulso.com");
}

function mostrarCarrinho() {
    alert("Você tem " + contadorCarrinho + " itens no carrinho.");
}
