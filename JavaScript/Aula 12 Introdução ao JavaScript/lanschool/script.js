//getElementsByTagName - Seleciona todas as tags que eu desejar

let paragrafos = document.getElementsByTagName("p")
//console.log(paragrafos);
//console.log("Vai Corinthians");
paragrafos[0].innerHTML = "Palmeiras sem Mundial"

//getElementById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Alterado usando JS"

//getElementByClassName - Seleciona todos os elementos do tipo class
const caixas = document.getElementsByClassName("caixa")
console.log(caixas);
caixas[0].style.backgroundColor = "lightgreen"
caixas[1].style.backgroundColor = "cyan"

//querySelector - Selecione um elemento do tipo Class ou ID
// # para id e . para class
const paragrafoQuery = document.querySelector("#paragrafoQuery")  
paragrafoQuery.style.backgroundColor = "grey"
paragrafoQuery.style.padding = "10px"

function alteraTexto() {
    let input = document.getElementsByTagName("input")[1].value
    titulo.textContent = input  
//    console.log("sei la");
}

function alteraParagrafo() {
    let input = document.getElementsByTagName("input")[0].value
    paragrafos[0].innerHTML = input   
}

//querySelectorAll - Seleciona todos os elementos do tipo Class ou ID
const caixaQuery = document.querySelectorAll(".caixaQuery")[0]
caixaQuery.style.backgroundColor = "purple" 
