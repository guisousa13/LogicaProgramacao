let Produtos = [
    {nome: "Teclado", categoria: "Periférico", preco: 200},
    {nome: "Mouse", categoria: "Periférico", preco: 150},
    {nome: "Computador", categoria: "Eletrônico", preco: 5000},
    {nome: "Monitor", categoria: "Eletrônico", preco: 750}
]


//Lista de Produtos
Produtos.forEach((produto) => {
    console.log(produto);
    
})

// Percorrer um array com objetos 
Produtos.forEach((produto) => {
    console.log(`${produto.nome} R$ ${produto.preco}`)
})

//Fazer calculos de itens dentro de um array
const total = Produtos.reduce((soma, produto) => soma + produto.preco, 0)
console.log(`O valor total de todos os produtos é: R$ ${total}`);


//Ofertando desconto MAP
const produtosComDesconto = Produtos.map( produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
})
)

console.log(produtosComDesconto);


//Filtrando itens
const produtosEletronicos = Produtos.filter(produtos => produtos.categoria === "Periférico");
console.log(produtosEletronicos);

// Periférico - 5%, Eletrônico - 10% de desconto

console.log("Produtos Eletrônico");
// 1 - Criar um filtro por categoria - filter
const produtosEletronico = Produtos.filter(produto => produto.categoria === "Eletrônico");
// 2 - Aplicar o desconto por tipo categoria
const produtosEletronicoDesconto = produtosEletronico.map( produto => ({
    nome: produto.nome,
    categoria: produto.categoria,
    preco: produto.preco * 0.9
})
)
// 3 - Soma todos os produtos
const somaProdutoEletronicoDesconto = produtosEletronicoDesconto.reduce((soma, produto) => soma + produto.preco, 0)

console.log(produtosEletronicoDesconto),
console.log("R$", somaProdutoEletronicoDesconto);


console.log("Produtos Periférico");
// 1 - Criar um filtro por categoria - filter
const produtosPerifericos = Produtos.filter(produto => produto.categoria === "Periférico");
// 2 - Aplicar o desconto por tipo categoria
const produtosPerifericoDesconto = produtosPerifericos.map( produto => ({
    nome: produto.nome,
    categoria: produto.categoria,
    preco: produto.preco * 0.9
})
)

const somaProdutoPerifericoDesconto = produtosPerifericoDesconto.reduce((soma, produto) => soma + produto.preco, 0)

console.log(produtosPerifericoDesconto),
console.log("R$" , somaProdutoPerifericoDesconto);