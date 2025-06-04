// Consumir a API do correio
//  https://viacep.com.br/ws/087173080/json/ 

const cep = document.querySelector("#cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target
    console.log(cepUsuario.value);
    // console.log(`https://viacep.com.br/ws/${cepUsuario.value}/json/`);
    buscaCep(cepUsuario.value);
})

async function buscaCep(cep){
    let erroCep = document.querySelector("#erro")
    erroCep.innerHTML = ""

    try { 
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(consultaCep);
    
    let consultaCepJson = await consultaCep.json()
    console.log(consultaCepJson);
    

        if(consultaCepJson.erro){
            throw Error ("CEP Inexistente");
        
        }

        preencheCampos(consultaCepJson)
    }
    catch(erro){
        console.log("erro");
        apagaCampos();
        erroCep.innerHTML = "<p> CEP Inválido, tente novamente. </p>"
    }
}

function preencheCampos(resultadoCep) {
    let rua = document.querySelector("#rua")
    let bairro = document.querySelector("#bairro")
    let cidade = document.querySelector("#cidade")
    let estado = document.querySelector("#estado")

    rua.value = resultadoCep.logradouro
    bairro.value = resultadoCep.bairro
    cidade.value = resultadoCep.localidade
    estado.value = resultadoCep.estado
}

function apagaCampos() {
    let rua = document.querySelector("#rua")
    let bairro = document.querySelector("#bairro")
    let cidade = document.querySelector("#cidade")
    let estado = document.querySelector("#estado")

    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}