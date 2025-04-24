function Adicionar(){
    let form = document.querySelector('#form-adiciona')

    let produtoNome = form.produto.value
    let valor = form.valor.value
    let quantidade = form.quantidade.value

    if (!produto || !quantidade || !valor){
        window.alert("Por favor, preencha todos os campos!")
    }
    else {
        //Criando Elementos
        let produto = document.createElement("tr")
        let codigoTD = document.createElement("td")
        let produtoTD = document.createElement("td")
        let quantidadeTD = document.createElement("td")
        let valorUnitTD = document.createElement("td")
        let valorTotalTD = document.createElement("td")

        //Atribuir valores aos elementos
        codigoTD.textContent = document.querySelectorAll('tr').length
        produtoTD.textContent = "Bolo de " + produtoNome 
        valorUnitTD.textContent = valor
        quantidadeTD = quantidade
        valorTotalTD = "R$ " + (parseInt(quantidade) * parseFloat(valor)).toFixed(2) 

        //
        produto.appendChild(codigoTD)
        produto.appendChild(produtoTD)
        produto.appendChild(quantidadeTD)
        produto.appendChild(valorUnitTD)
        produto.appendChild(valorTotalTD)
    
        let tabela = document.querySelector("#tabela-produtos")
        tabela.appendChild(produto)
    }
}