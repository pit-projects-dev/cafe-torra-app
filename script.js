const produtos = [
    { id: 1, nome: "Espresso Intenso", origem: "Sul de Minas", preco: 34.90 },
    { id: 2, nome: "Grão Especial V60", origem: "Chapada Diamantina", preco: 42.00 },
    { id: 3, nome: "Prensa Francesa", origem: "Cerrado Mineiro", preco: 38.50 }
];

let carrinho = [];

function renderizarProdutos() {
    const grid = document.getElementById("grid-produtos");
    if (!grid) return;
    
    grid.innerHTML = "";
    produtos.forEach(p => {
        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `
            <h3>${p.nome}</h3>
            <p>${p.origem}</p>
            <p><strong>R$ ${p.preco.toFixed(2).replace('.', ',')}</strong></p>
            <button onclick="adicionar(${p.id})">Comprar</button>
        `;
        grid.appendChild(card);
    });
}

function toggleCarrinho() {
    document.getElementById("drawer-carrinho").classList.toggle("ativo");
}

function adicionar(id) {
    const p = produtos.find(item => item.id === id);
    carrinho.push(p);
    document.getElementById("contador-carrinho").innerText = carrinho.length;
    toggleCarrinho();
}

function finalizarCheckout() {
    alert("Pedido finalizado com sucesso!");
    carrinho = [];
    document.getElementById("contador-carrinho").innerText = 0;
    toggleCarrinho();
}

function enviarAvaliacao() {
    alert("Avaliação enviada com sucesso!");
    document.getElementById("comentario-aval").value = "";
}

window.onload = renderizarProdutos;
