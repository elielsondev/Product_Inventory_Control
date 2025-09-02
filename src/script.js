console.log("Script loaded successfully.");

// Controle de Estoque de Produtos

// Objetivo: Criar um sistema simples de controle de estoque de produtos.

// Requisitos:

// • Cada produto deve ter: nome, preço e quantidade em estoque.
let productName = prompt("Digite o nome do produto:");
let productPrice = Number(prompt("Digite o preço do produto:")).toFixed(2).replace('.', ',');
let productQuantity = Number(prompt("Digite a quantidade em estoque:"));


// • Usar uma matriz para armazenar os produtos.
const products = [];

function addProduct(name, price, quantity) {
    // • Cadastrar novo produto (não pode duplicar nomes).
    // Verifica se o produto já existe
    const existingProduct = products.find(product => product.name === name);
    
    if (existingProduct) {
        console.log("Produto já existe. Não é possível duplicar nomes.");
    }
    
    products.push([ name, price, quantity ]);

    console.log(`
        ${name}, R$${price}, ${quantity}unidades. 
        Adicionado ao estoque.
    `);
    
};

addProduct(productName, productPrice, productQuantity);

// • Funcionalidades obrigatórias (menu interativo com prompt):


// • Listar todos os produtos no console.

// • Se a quantidade for menor ou igual a 5, mostrar alerta de estoque baixo.

// • Atualizar produto existente.

// • Remover produto.

// • Exibir no console o valor total em estoque (preço × quantidade de todos os produtos).


// Conceitos usados:

// •Variáveis para representar produto, preço e quantidade.
// •Arrays/matrizes para registrar vários produtos.
// •Condicionais para checar estoque baixo.
// •Laços de repetição para atualizar e exibir os itens.

// Extra: relatório de produtos em falta.