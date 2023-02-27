//Declaracao de Funcao


//function minhaFuncao(param){
    //bloco de codigo
//}
//minhaFuncao("param")

//--------------------------------

//Expressao de funcao (nao tem nome na funcao, so no const)

//const soma = function(num1, num2){return num1 + num2}
//console.log(soma(1, 1))

//
console.log(apresentar())
function apresentar(){
    return "ola";
}

// se comporta como uma variavel
const soma = function(num1, num2){return num1 + num2}
console.log(soma(1, 1))

//diferenca principal: HOISTING
//funcoes e var sao listadas no topo do arquivo