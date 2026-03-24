let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

function calcular(event) {
  let pesoF = parseFloat(peso.value.replace(",", "."));
  let alturaF = parseFloat(altura.value.replace(",", "."));
  let imc = pesoF / alturaF ** 2;
  let resposta = document.querySelector("#resposta");
  let avaliacao = document.querySelector("#avaliacao");
  let msg = document.querySelector("#msg");
  let fundo = document.querySelector("#fundo_resp");
  resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.`;

  if (imc < 18.5) {
    avaliacao.innerHTML = "Abaixo do peso";
    msg.innerHTML =
      "É importante buscar orientação de um profissional de saúde para avaliação.";

    fundo.style.backgroundColor = "#F2FCFE";
    fundo.style.borderLeft = "5px solid #8E44AD";
  } else if (imc < 25) {
    avaliacao.innerHTML = "Peso normal";
    msg.innerHTML = "Parabéns! Seu IMC está na faixa considerada saudável.";

    fundo.style.backgroundColor = "#F2FCFE";
    fundo.style.borderLeft = "5px solid #007C91";
  } else if (imc < 30) {
    avaliacao.innerHTML = "Sobrepeso";
    msg.innerHTML =
      "Seu IMC indica sobrepeso. Pequenos ajustes na rotina podem ajudar a manter o equilíbrio e prevenir riscos.";

    fundo.style.backgroundColor = "#FFF6E5";
    fundo.style.borderLeft = "5px solid #F39C12";
  } else if (imc < 35) {
    avaliacao.innerHTML = "Obesidade Grau I";
    msg.innerHTML =
      "Atenção: seu IMC está na faixa de obesidade grau I. Consultar um especialista pode ajudar a traçar metas seguras.";

    fundo.style.backgroundColor = "#FEF6F5";
    fundo.style.borderLeft = "5px solid #F1948A";
  } else if (imc < 40) {
    avaliacao.innerHTML = "Obesidade Grau II";
    msg.innerHTML =
      "Alerta: seu IMC indica obesidade grau II. O acompanhamento médico é fundamental para cuidar da sua saúde.";

    fundo.style.backgroundColor = "#FEF6F5";
    fundo.style.borderLeft = "5px solid #E74C3C";
  } else {
    avaliacao.innerHTML = "Obesidade Grau III";
    msg.innerHTML =
      "Cuidado redobrado: seu IMC indica obesidade grau III. Procure suporte profissional especializado imediatamente.";

    fundo.style.backgroundColor = "#FDECEA";
    fundo.style.borderLeft = "5px solid #C0392B";
  }

  event.preventDefault();
}
