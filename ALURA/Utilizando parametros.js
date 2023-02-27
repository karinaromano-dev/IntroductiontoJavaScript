// No Python - quando executamos uma funcao que espera um parametro, e ele nao eh passado
// recebemos uma mensagem de erro TypeError: comParametro() takes exactly 1 argument (0 given).
//indicando que a funcao comParametro espera um parametro. Porem, isso nao acontece no JS

function comParametro(param) {
    console.log(param)
}
comParametro() // undefined
