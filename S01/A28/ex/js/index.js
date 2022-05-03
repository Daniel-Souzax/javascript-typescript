const numero = Number(prompt("Digite um numero:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>
<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondando pra baixo: ${Math.ceil(numero)}</p>
<p>Arredondando pra cima: ${Math.floor(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p> `;
