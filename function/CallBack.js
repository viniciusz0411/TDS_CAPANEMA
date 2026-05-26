function executarOperacao(n1,n2, operacao){
    return operacao(n1,n2)
}

function multiplicar(n1,n2){
    return n1*n2
}
var resultado=executarOperacao(4,5,multiplicar)
console.log(resultado)