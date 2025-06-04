//Objeto

let produto = {
    //Chave: "valor";
    nome: "Notebook",
    preco: 3500,
    emEstoque: true,
}

//Exibir as informações
console.log(produto);

//Exibir os valores
console.log(produto.nome);
console.log(produto.preco);

//Alternativa para exibir os valores
console.log(produto["nome"]);
console.log(produto["preco"]);

//Adicionar itens
produto.fabricante = "Dell"
console.log(produto);

//Alternativa para adicionar
produto["fabricante"] = "Dell"
console.log();

//Deletar itens
delete produto.emEstoque
console.log(produto);

//Alternativa para deletar
delete produto["emEstoque"]

