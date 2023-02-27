// Os parametros e o retorno das funcoes sao utilizados de acordo com cada caso especifico.
//Nem sempre todas as funcoes precisara de um ou outro pra fazer o que precisam.

//Funcao sem retorno e sem parametros
//A funcao abaixo apenas executa uma instrucao, sem necessidade de disponibilizar o resultado para o 
//restante do codigo.
//Neste exemplo abaixo, escolheu-se usar uma string fixa, entao nah ha necessidade de parametro:

function cumprimentar(){
    console.log('oi gente!')
}

cumprimentar()

//Funcao sem retorno e com parametro
//Similar a anterior, porem agora a funcao recebe, via parametro, o nome da pessoa a ser cumprimentada.
//Dessa forma eh possivel reaproveitar a funcao para que funcione de maneira parecdia com o nome de
//qualquer pessoa (desde que esteja no formato de dado string).

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}`)
}

cumprimentaPessoa('Gianluca')

//Funcao com retorno, sem parametro
//Eh possivel combinar funcoes para que cada uma controle apenas uma parte do codigo e elas
//trabalhem juntas.
// Mas logo abaixo vemos que ela esta sendo utilizada para montar uma string funcao 
//cumprimentarPessoa1(nomePessoa). Isso significa que a string oi gente deve estar disponivel para outras 
//partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.



function cumprimentar1(){
    return 'oi gente linda!'
}

function cumprimentarPessoa1(nomePessoa) {
    console.log(`${cumprimentar1()} Meu nome eh ${nomePessoa}`)
}

cumprimentarPessoa1('Paula')

//A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde 
//podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. 
//Quando isso acontecer, a função cumprimentar() será executada também, e seu valor de 
//retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está sendo chamada.

//Funcao com return e mais de um parametro:
//As funcoes podem receber a quantidade de parametros necessaria, e o JS identifica os parametros pela ordem.
// O parametro numero1 se refere a 15, o parametro numero2 se refere a 30, e o parametro numero3 se refere a 45.

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90