//É feito com uma chaves, seria como um dicionário
const aluno={
    nome: 'Vini', //Dentro do objeto precisa usar : para definir um valor
    idd: 15,
    curso: 'Técnico em Desenvolvimento de Sistemas'
}
console.log(aluno.nome)
aluno.matricula='2026TDS'
aluno.idd=18
delete aluno.nome;
console.log(aluno)