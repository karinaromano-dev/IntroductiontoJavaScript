//Funcoes

// let variavel que conseguimos reatribuir, trocar o valor dela
let x = "";
console.log(x)
x = "oi";
// aqui estou atribuindo oi, mas reatribuiu so depois que imprimiu (console.log)


                    //string
function imprimeTexto(texto){
    console.log(texto)
}

//DECLARACAO DE FUNCAO
// a funcao tem dois momentos:

//1) momento de declarar a funcao
                    //string
function imprimeTexto(texto){
    console.log(texto)
}
//2) executa a funcao (1 ou + vezes)
imprimeTexto("oi")
imprimeTexto("outro texto");

// tres formas de escrever funcoes
// return tem que ser a ultima linha da funcao
function soma(){
    //outros codigos
    //varios console.log()
    return 2 + 2;
}
console.log(soma()) //4

// funcao dentro de outra funcao

function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto(soma());
imprimeTexto("outro texto");

//Mais sobre funcoes

//Math.round() 
//Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3); //4
Math.round(3.85); //4
Math.round(2.5); //3, quando o numero termina com 0.5 a funcao arredonda pra cima

//Math.ceil()
//Faz o arredondamento para o valor mais alto, tambem conhecido como teto.

Math.ceil(5.2); // 6

//Math.floor()
//Faz o arredondamento para o valor mais baixo, tambem conhecido como piso.

Math.floor(5.2) //5

//Math.trunc
//Desconsidera os numeros decimais, o que eh conhecido como truncamento.

Math.trunc(4.3) //4
Math.trunc(4.8) //4

//Math.pow()
//Faz a exponenciacao de 2 numeros, quando for simples, como ao quadrado(2) ou cubo(3).
//Recomenda-se usar a multiplicacao por ser mais rapido.

Math.pow(4, 2) // retorna 4^2 = 16
Math.pow(2.5, 1.5) //retorna2.5^(3/2)=3.9528...

//Math.sqrt()
//Retorna a raiz quadrada de um numero

Math.sqrt(64) //8

//Math.min()
//Retorna o menor valor entre os argumentos

Math.min(0, 150, 30, 20, -8, -200) // -200

//Math.max()
//Retorna o maior valor entre os argumentos

Math.max(0, 150, 30, 20, -8, -200) //150

//Math.random()
//Retorna um valor randomico entre 0 e 1, entao nao teremos um valor esperado para receber.
Math.random() // retorna 0.7456916270759015
Math.random() //retorna 0.15449802102729304
Math.random() //retorna 0.4214269561951203