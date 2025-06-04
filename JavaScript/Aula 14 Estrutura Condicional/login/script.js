function verificarLogin() {

    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;
    let mensagem = document.querySelector("#mensagem");

if(usuario === "admin" && senha === "123") {
        mensagem.innerHTML = "Login bem sucedido."
 }

else if(usuario === "admin") {
        mensagem.innerHTML = "Senha inválida."
}
else if(senha === "123") {
        mensagem.innerHTML = "Usuário inválido."
}
else {
    mensagem.innerHTML = "Login Inválido"
 }
}