// let peso = document.querySelector("#peso").value;
// let altura = document.querySelector("#altura").value;

function calcularIMC() {
  let peso = document.querySelector("#peso").value;
  let altura = document.querySelector("#altura").value;
  let imc = (peso / (altura * altura)).toFixed(2);
  let divresutlado = document.querySelector(".resultado");
  if (peso >= 0 && peso <= 30) {
    divresutlado.innerHTML = `<p class="resultadoinv">Peso invalido</p>`;
  } else if (altura <= 1.3 || altura >= 2.2) {
    divresutlado.innerHTML = `<p class="resultadoinv">Peso invalido</p>`;
  } else {
    if (imc < 18.5) {
      divresutlado.innerHTML = `<p class="presultado">Seu IMC foi de ${imc} =  Abaixo do peso</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      divresutlado.innerHTML = `<p class="presultado">Seu IMC foi de ${imc} = Peso normal</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
      divresutlado.innerHTML = `<p class="presultado">Seu IMC foi de ${imc} = Sobrepeso</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      divresutlado.innerHTML = `<p class="presultado">Seu IMC foi de ${imc} = Obesidade grau 1</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      divresutlado.innerHTML = `<p class="presultado">Seu IMC foi de ${imc} = Obesidade grau 2</p>`;
    } else if (imc >= 40) {
      divresutlado.innerHTML = `<p class="presultado">Seu IMC foi de ${imc} = Obesidade grau 3</p>`;
    }
  }
}
