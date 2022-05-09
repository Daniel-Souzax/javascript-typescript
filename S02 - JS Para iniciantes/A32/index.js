// const pessoal = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
//   idade: 25,
// };

// const pessoal2 = {
//   nome: "Maria",
//   sobrenome: "Oliveira",
//   idade: 55,
// };
// console.log(pessoal.nome);
// console.log(pessoal.sobrenome);

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }

// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa("Luiz", "Otávio", 25);
// console.log(pessoa1);

const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}. `);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
