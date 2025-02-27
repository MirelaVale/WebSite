let contadorCarrinho = 0;

function adicionarAoCarrinho(nomeProduto) {
    contadorCarrinho++;
    document.getElementById("contadorCarrinho").innerText = contadorCarrinho;
    alert(`${nomeProduto} adicionado ao carrinho!`);
}

function mostrarContato() {
    alert("Contato: contato@coresdopulso.com");
}

function sobreNos() {
    window.location.href = 'https://www.instagram.com/mirelamoreirav/?next=%2F';
}
    


function mostrarCarrinho() {
    alert("Você tem " + contadorCarrinho + " itens no carrinho.");
}
