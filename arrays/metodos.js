const valores=[1,2,3,4,5,8]

valores[0]=100;
valores.push(200);
console.log(valores);


console.log(valores.indexOf(8))
console.log(valores.includes(10))//verifica se existe o valor 10
console.log(valores.includes(1000))
console.log(valores.join(' - '));//coloca um - entre os valores

