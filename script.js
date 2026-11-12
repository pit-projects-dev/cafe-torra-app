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
    atualizarCarrinho();
    toggleCarrinho();
}

function atualizarCarrinho() {
    const itensContainer = document.getElementById("drawer-items");
    const contador = document.getElementById("contador-carrinho");
    
    if (contador) contador.innerText = carrinho.length;
    if (!itensContainer) return;

    itensContainer.innerHTML = "";
    let subtotal = 0;

    carrinho.forEach(item => {
        subtotal += item.preco;
        const div = document.createElement("div");
        div.style.cssText = "display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem; border-bottom: 1px solid #eee; padding-bottom: 5px;";
        div.innerHTML = `
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
        `;
        itensContainer.appendChild(div);
    });

    const frete = 15.00;
    const total = subtotal > 0 ? subtotal + frete : 0;

    const valTotalEl = document.getElementById("val-total");
    if (valTotalEl) {
        valTotalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

function finalizarCheckout() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Pedido finalizado com sucesso!");
    carrinho = [];
    atualizarCarrinho();
    toggleCarrinho();
}

function enviarAvaliacao() {
    alert("Avaliação enviada com sucesso!");
    document.getElementById("comentario-aval").value = "";
}

window.onload = renderizarProdutos;
