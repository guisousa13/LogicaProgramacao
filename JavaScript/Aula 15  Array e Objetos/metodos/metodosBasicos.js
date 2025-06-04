//Array
let timesPaulistas = ["Corinthians","São Paulo", "Vasco"]

//Acessar um item do Array
console.log(timesPaulistas[0]);

//Verificar o tamanho do Array
console.log(timesPaulistas.length);

//Adicionar um item no Array
timesPaulistas.push("Bahia")
console.log(timesPaulistas);

//Adicionar um item no inicio do Array
timesPaulistas.unshift("Paysandu")

//Removendo um item no começo do Array
timesPaulistas.shift()
console.log(timesPaulistas);

//Remover um item no fim do Array
timesPaulistas.pop()
console.log(timesPaulistas);

//Verificar a posição de um item
console.log(timesPaulistas.indexOf("São Paulo"))

//Metodo Splice
// - Adicionar
// - Remover
// - Modificar

timesPaulistas.splice(1,1)
console.log(timesPaulistas);

//Remover um item a partir de uma posição
//array.splice(posição, quantidadeDeItensRemovidos)
timesPaulistas.splice(1,1)
console.log(timesPaulistas);

//Remover um item a partir de um valor
timesPaulistas.splice(timesPaulistas.indexOf("São Paulo"),1)
console.log(timesPaulistas);

// Adicionando itens dentro de um Array
timesPaulistas.splice(0,0,"Grêmio", "Juventude", "Fluminense", "Vasco")
console.log(timesPaulistas);

// Modificando itens de um Array
timesPaulistas.splice(1,1,"Corinthians")
console.log(timesPaulistas);

// Percorrer um Array
console.log("Maiores Times Paulistas");
let i = 0;

timesPaulistas.forEach((time) => {
    i++
    console.log(i , "-", time);
    
})

