let temDinheiro=true;
let taChovendo=false;
let carroEstaNaGaragem=true;

let logicaAnd='#AND você vai ao cinema? ';
logicaAnd+=temDinheiro && taChovendo;
console.log(logicaAnd)

let logicaOr='#OR você vai ao cinema? '
logicaOr+=taChovendo||carroEstaNaGaragem
console.log(logicaOr)