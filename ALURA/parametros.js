
function soma() {
    return 2+2;
}

console.log(soma())

// Nesse caso acima a funcao soh funciona com 2+2

// Para reaproveitar o codigo, essa funcao tem que funcionar com qualquer conjunto de dois numeros:

function soma() {
    return num1 + num2;
}
console.log(soma())

// para a funcao saber de onde vem a num1 e num2 = Parametros de funcao
//serve 

function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(2, 2))
console.log(soma(245, 25))
console.log(soma(-500, 60))

// parametros x argumentos
// ordem dos parametros
//
function nomeIdade(nome, idade) {
    return `meu nome eh ${nome} e minha idade eh ${idade}`;
}

console.log(nomeIdade(40, "Juliana")) // argumentos foram passados na ordem errada

function multiplica(numero1, numero2){
    return numero1 * numero2;
}
                            //9   *  //6 =54
console.log(multiplica(soma(4, 5), soma(3,3)))
console.log(multiplica(soma(4, 5))) //NaN, pois nao passamos um parametro

//podemos colocar o nome que quisermos nos parametros e eles so sao validos no escopo da funcao
//ou seja, so quando a funcao estiver em execucao

//o nome da funcao tem que ter o nome do que ela faz

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                            //9   *  //6 =54
console.log(multiplica(soma(4, 5), soma(3,3)))
console.log(multiplica(soma(4, 5))) //9, pois passamos o parametro 1 lah em cima na linha function 9*1