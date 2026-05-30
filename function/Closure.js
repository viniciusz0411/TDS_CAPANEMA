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
/*Uma função que consegue acessar variáveis do escopo onde foi criada, mesmo após esse escopo já ter acabado.

No seu caso:

cada função retornada guarda seu próprio fator
dobrar guarda 2
tri guarda 3*/