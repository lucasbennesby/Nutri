const idade = document.querySelector("#idade");
const sexo = document.querySelector(".sexo");
const gestante = document.querySelector(".gestante");
const gestanteCheck = document.querySelector(".gestanteCheck");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const calcula = document.querySelector("#calcular");
const displayPesoIdeal = document.querySelector("#displayPesoIdeal");
const displayAdequacaoPeso = document.querySelector("#displayAdequacaoPeso");
const displayPesoAjustado = document.querySelector("#displayPesoAjustado");
const displayIMC = document.querySelector("#displayIMC");

const inputs = [peso, altura, idade];
const alerts = ["peso", "altura", "idade"];
console.log();

//habilita gestante
sexo.addEventListener("change", () => {
  if (sexo.value == "Feminino") {
    gestante.removeAttribute("disabled");
    gestanteCheck.removeAttribute("disabled");
  } else if (sexo.value == "Masculino") {
    gestante.setAttribute("disabled", "");
    gestanteCheck.setAttribute("disabled", "");
  }
});

//logica calculo
calcula.addEventListener("click", () => {
  if (verificaIdade() || verificaSexo() || verificaPeso() || verificaAltura()) {
    console.log("tenta dnv");
  } else if (
    !verificaIdade() &&
    !verificaSexo() &&
    !verificaPeso() &&
    !verificaAltura()
  ) {
    let IMC = 0;
    var adequacao = 0;
    var PI = 0;
    var PA = 0.0;

    //verificação de sexo - MASC
    if (sexo.value == "Masculino") {
      //calculo masculino
      calculaIMC(altura.value, peso.value);
      PI = calculaPesoIdealHomem(altura.value);
      adequacao = calculaAdequacaoDePeso(peso.value, PI);
      if (90 > adequacao || adequacao > 110) {
        PA = calculaPesoAjustado(PI, peso.value);
      }
    } else if (sexo.value == "Feminino") {
      //calculo feminino

      calculaIMC(altura.value, peso.value);
      PI = calculaPesoIdealMulher(altura.value);
      adequacao = calculaAdequacaoDePeso(peso.value, PI);
      if (90 > adequacao || adequacao > 110) {
        PA = calculaPesoAjustado(PI, peso.value);
      }
    }
  }

  displayIMC.innerHTML = `${IMC.toFixed(2)}Kgs/m²`;
  displayPesoIdeal.innerHTML = `${PI.toFixed(2)}Kgs`;
  displayAdequacaoPeso.innerHTML = `${adequacao.toFixed(2)}%`;
  displayPesoAjustado.innerHTML = `${PA.toFixed(2)}Kgs`;
  //display.innerHTML = `${PI.toFixed(2)} Kgs`;
  //display2.innerHTML = `${Ap.toFixed(2)} %`;
  // display3.innerHTML = `${Pa} Kgs`;
  //displayIMC.innerHTML = `${IMC.toFixed(2)} Kg/M²`;

  console.log(`peso ideal ${PI}`);
  console.log(`esse eh o imc${IMC}`);
  console.log(`adequacao eh ${adequacao}`);
  console.log(`Peso ajustado eh ${PA}`);
});

//PI = IMCideal * ESTATURA²
//IMC homem = 22,5 kg/m²
//IMC mulher = 21,5 kg/m²

/*


 */
function verificaIdade() {
  if (idade.value == "") {
    alert("Preencha o campo 'Idade' ");
    return true;
  } else {
    return false;
  }
}
function verificaSexo() {
  if (sexo.value == "default") {
    alert("Escolha o 'Sexo' ");
    return true;
  } else {
    return false;
  }
}
function verificaPeso() {
  if (peso.value == "") {
    alert("Preencha o campo 'Peso' ");
    return true;
  } else {
    return false;
  }
}
function verificaAltura() {
  if (altura.value == "") {
    alert("Preencha o campo 'Altura");
    return true;
  } else {
    return false;
  }
}

function calculaIMC(altura, peso) {
  IMC = peso / (altura * altura);

  return IMC;
}
function calculaPesoIdealHomem(altura) {
  PesoIdeal = altura * altura * 22.5;
  return PesoIdeal;
}
function calculaPesoIdealMulher(altura) {
  PesoIdeal = altura * altura * 21.5;
  return PesoIdeal;
}

function calculaAdequacaoDePeso(peso, pesoIdeal) {
  adequacaoDePeso = (peso / pesoIdeal) * 100;

  return adequacaoDePeso;
}

function calculaPesoAjustado(pesoIdeal, pesoAtual) {
  pesoAjustado = pesoIdeal - pesoAtual;
  pesoAjustado *= 0.25;
  pesoAjustado = parseFloat(pesoAtual) + parseFloat(pesoAjustado);

  return pesoAjustado;
}
//imc = peso/ altura²
//peso ideal = altura² * 21,5 --> mulher
//peso ideal = altura² * 22,5 --> homem
//adequação de peso = (PesoAtual/PesoIdeal) * 100
//pesoAjustado = ((PesoIdeal - PesoAtual) * 0,25) + pesoAtual
