// Função que retoorna função.

function criarMultiplicador(fator){
    return function(numero){
        numero*fator;
    }
}
const dobrar = criarMultiplicador(2);
const tri=criarMultiplicador(3);

console.log(dobrar(4));
console.log(tri(6));