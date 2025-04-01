// Switch Case - Menu
//if

// Metodos de Pagamento
// 1 - Pix = 10% de Desconto
// 2 - Débito - 5% de Desconto
// 3 - Crédito - Valor Total

function calcularPagamento() {

    let formaPagamento = "credito"
    let valorTotal = 100
    let valorFinal
    switch (formaPagamento) {
        case "pix":
            valorFinal = valorTotal * 0.9
            console.log(valorFinal);
            break
        case "debito":
            valorFinal = valorTotal * 0.95
            console.log(valorFinal);
            break
        case "credito":
            console.log(valorTotal);
            break
        default:
            console.log("Informe uma forma de pagamento válida");
            break
    }
}