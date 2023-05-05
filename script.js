const idade = document.querySelector("#idade");
const sexo = document.querySelector(".sexo");
const gestante = document.querySelector(".gestante");
const gestanteCheck = document.querySelector(".gestanteCheck");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const calcula = document.querySelector("#calcular");
const display = document.querySelector("#display");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#display3");

const inputs = [peso, altura, idade];
const alerts = ["peso", "altura", "idade"];
console.log();

//habilita gestante
sexo.addEventListener("change", () => {
  if (sexo.value == "Feminino") {
    gestante.removeAttribute("disabled");
    gestanteCheck.removeAttribute("disabled");
  } else if (sexo.value == "Masculino") {
    gestante.setAttribute("disabled");
    gestanteCheck.setAttribute("disabled");
  }
});

//logica calculo
calcula.addEventListener("click", () => {
  const H = 22.5;
  const M = 21.5;
  let Pi = 0.0;
  let Ap = 0;
  let Pa = 0;

  if (verificaIdade() || verificaSexo() || verificaPeso() || verificaAltura()) {
    console.log("tenta dnv");
  } else if (
    !verificaIdade() &&
    !verificaSexo() &&
    !verificaPeso() &&
    !verificaAltura()
  ) {
    //verificação de sexo - MASC
    if (sexo.value == "Masculino") {
      Pi = H * Math.pow(altura.value, altura.value);
      Ap = (peso.value / Pi) * 100;
      if (95.0 > Ap || Ap > 115.0) {
        Pa = ((Pi - peso.value) * 0, 25) + Pa;
      }
      //FEM
    } else if (sexo.value == "Feminino") {
      Pi = M * Math.pow(altura.value, altura.value);
      Ap = (peso.value / Pi) * 100;
      if (95.0 > Ap || Ap > 115.0) {
        Pa = (Pi - peso.value) * 0.25 + Pa;
      }
    }
    display.innerHTML = `${Pi} Kgs`;
    display2.innerHTML = `${Ap.toFixed(2)} %`;
    display3.innerHTML = `${Pa} Kgs`;
  }

  console.log(Pi);
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
