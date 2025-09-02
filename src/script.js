console.log("Script loaded successfully.");

// Controle de Estoque de Produtos

// Objetivo: Criar um sistema simples de controle de estoque de produtos.

// Requisitos:

// • Cada produto deve ter: nome, preço e quantidade em estoque.
let productName = prompt("Digite o nome do produto:");
let productPrice = Number(prompt("Digite o preço do produto:"))
  .toFixed(2)
  .replace(".", ",");

let productQuantity = Number(prompt("Digite a quantidade em estoque:"));

// • Usar uma matriz para armazenar os produtos.
const products = [];

function addProduct(name, price, quantity) {
  // • Cadastrar novo produto (não pode duplicar nomes).
  // Verifica se o produto já existe
  const existingProduct = products.find((product) => product.name === name);

  if (existingProduct) {
    console.log("Produto já existe. Não é possível duplicar nomes.");
    return;
  }

  products.push([name, price, quantity]);

  console.log(`
        ${name}, R$${price}, ${quantity}unidades. 
        Adicionado ao estoque.
    `);
}

addProduct(productName, productPrice, productQuantity);

// • Funcionalidades obrigatórias (menu interativo com prompt):
let option;

do {
  option = Number(
    prompt(`
    1. Cadastrar novo produto.
    2. Listar todos os produtos no console.
    3. Atualizar produto existente.
    4. Remover produto.
    5. Exibir no console o valor total em estoque (preço × quantidade de todos os produtos).
    6. Sair.
    `)
  );

  switch (option) {
    case 1:
      // • Cadastrar novo produto (não pode duplicar nomes).
      productName = prompt("Digite o nome do produto:");
      productPrice = Number(prompt("Digite o preço do produto:"))
        .toFixed(2)
        .replace(".", ",");
      productQuantity = Number(prompt("Digite a quantidade em estoque:"));

      addProduct(productName, productPrice, productQuantity);
      break;

    case 2:
      // • Listar todos os produtos no console.
      console.log("Produtos em estoque:");

      for (let i = 0; i < products.length; i += 1) {
        // • Se a quantidade for menor ou igual a 5, mostrar alerta de estoque baixo.
        console.log(`
            ${products[i][0]}, R$${products[i][1]}, ${products[i][2]} unidades.
            ${products[i][2] <= 5 ? "Alerta: Estoque baixo!" : ""}
        `);
      }

      break;

    case 3:
      // • Atualizar produto existente.
      productName = prompt("Digite o nome do produto que deseja atualizar:");
      productPrice = Number(prompt("Digite o novo preço do produto:"))
        .toFixed(2)
        .replace(".", ", ");
      productQuantity = Number(prompt("Digite a nova quantidade em estoque:"));

      for (let i =0; i < products.length; i += 1) {
        if (products[i][0].includes(productName)) {
          products[i][1] = productPrice;
          products[i][2] = productQuantity;
        };
      };
      break;

    case 4:
      // • Remover produto.
      productName = prompt("Digite o nome do produto que deseja remover:");

      for (let i = 0; i < products.length; i += 1) {
        if (products[i][0].includes(productName)) {
          products.splice(i, 1);
        };
      };

      break;

    case 5:
      // • Exibir no console o valor total em estoque (preço × quantidade de todos os produtos).
      let totalValue = 0;

      for (let i = 0; i < products.length; i += 1) {
        totalValue += products[i][1] * products[i][2];
      };

      console.log(`Valor total de estoque: R$${totalValue}`);
      break;

    case 6:
      console.log("Saindo...");

    default:
      break;
  }
} while (option !== 6);

// • Remover produto.

// • Exibir no console o valor total em estoque (preço × quantidade de todos os produtos).

// Conceitos usados:

// •Variáveis para representar produto, preço e quantidade.
// •Arrays/matrizes para registrar vários produtos.
// •Condicionais para checar estoque baixo.
// •Laços de repetição para atualizar e exibir os itens.

// Extra: relatório de produtos em falta.
