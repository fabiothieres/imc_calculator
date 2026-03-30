let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

function calcular(event) {
  event.preventDefault();

  if (peso.value.trim() === "" || altura.value.trim() === "") {
    alert("Por favor, preencha os campos de peso e altura.");
    return;
  }

  let pesoF = parseFloat(peso.value.replace(",", "."));
  let alturaF = parseFloat(altura.value.replace(",", "."));

  if (isNaN(pesoF) || isNaN(alturaF) || pesoF <= 0 || alturaF <= 0) {
    alert("Por favor, insira valores numéricos válidos e maiores que zero.");
    return;
  }

  if (alturaF > 3) {
    alturaF = alturaF / 100;
  }

  let imc = pesoF / (alturaF ** 2);
  
  let resposta = document.querySelector("#resposta");
  let avaliacao = document.querySelector("#avaliacao");
  let msg = document.querySelector("#msg");
  let fundo = document.querySelector("#fundo_resp");
  
  resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.`;

  if (imc < 18.5) { 
    avaliacao.innerHTML = "Abaixo do peso";
    msg.innerHTML = "É importante buscar orientação de um profissional de saúde para avaliação.";
    fundo.style.backgroundColor = "#E3F2FD";
    fundo.style.borderLeft = "5px solid #2196F3";
    resposta.style.color = "#1976D2";
  } else if (imc < 25) {
    avaliacao.innerHTML = "Peso normal";
    msg.innerHTML = "Parabéns! Seu IMC está na faixa considerada saudável.";
    fundo.style.backgroundColor = "#E8F5E9";
    fundo.style.borderLeft = "5px solid #4CAF50";
    resposta.style.color = "#388E3C";
  } else if (imc < 30) {
    avaliacao.innerHTML = "Sobrepeso";
    msg.innerHTML = "Seu IMC indica sobrepeso. Pequenos ajustes na rotina podem ajudar a manter o equilíbrio e prevenir riscos.";
    fundo.style.backgroundColor = "#FFF8E1";
    fundo.style.borderLeft = "5px solid #FFC107";
    resposta.style.color = "#F57C00";
  } else if (imc < 35) {
    avaliacao.innerHTML = "Obesidade Grau I";
    msg.innerHTML = "Atenção: seu IMC está na faixa de obesidade grau I. Consultar um especialista pode ajudar a traçar metas seguras.";
    fundo.style.backgroundColor = "#FFF3E0";
    fundo.style.borderLeft = "5px solid #FF9800";
    resposta.style.color = "#E64A19";
  } else if (imc < 40) {
    avaliacao.innerHTML = "Obesidade Grau II";
    msg.innerHTML = "Alerta: seu IMC indica obesidade grau II. O acompanhamento médico é fundamental para cuidar da sua saúde.";
    fundo.style.backgroundColor = "#FFEBEE";
    fundo.style.borderLeft = "5px solid #F44336";
    resposta.style.color = "#D32F2F";
  } else {
    avaliacao.innerHTML = "Obesidade Grau III";
    msg.innerHTML = "Cuidado redobrado: seu IMC indica obesidade grau III. Procure suporte profissional especializado imediatamente.";
    fundo.style.backgroundColor = "#FFCDD2";
    fundo.style.borderLeft = "5px solid #B71C1C";
    resposta.style.color = "#B71C1C";
  }
}