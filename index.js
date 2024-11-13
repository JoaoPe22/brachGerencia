let soma1 = document.getElementById("soma1");
let soma2 = document.getElementById("soma2");

const calcular = () => {
  let numero1 = Number(soma1.value);
  let numero2 = Number(soma2.value);

  let soma = numero1 + numero2;

  let saida = document.getElementById("soma");
  saida.innerHTML = "Resultado é " + soma;
};
