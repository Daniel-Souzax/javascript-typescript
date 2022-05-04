/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valor Copiados

Referência (mutável) - array, objetc, function - Passados por referencia
*/

// let a = [1, 2, 3];
// let b = a;
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push("Luiz");
// console.log(c);

const a = {
  nome: "Luiz",
  sobrenome: "Otávio",
};
const b = { ...a }; // assim ele não aponta mais pro mesmo resultado, agr ele é uma copia independente

a.nome = "João";
console.log(a);
console.log(b);
