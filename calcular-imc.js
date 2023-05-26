// Resultado abaixo de 17 - Muito abaixo do peso; 
//             Resultado entre 17 e 18,49 - Abaixo do peso; 
//             Resultado entre 18,5 e 24,99 - Peso ideal; 
//             Resultado entre 25 e 29,99 - Sobrepeso; 
//             Resultado entre 30 e 34,9 - Obesidade grau I; 
//             Resultado entre 35 e 39,9 - Obesidade grau II (severa); 
//             Resultado acima de 4 - Obesidade grau III (morbida); 

var area = document.getElementById("area");
function entrar() {
    var nome = prompt("Digite o seu nome");
    if (nome == "" || nome == null) {
        alert("Por favor Preencher todos os Campos!");
        area.innerHTML = "Clique no botão para acessar..."
    }

    else {
        area.innerHTML = "Seja Bem-Vindo: " + nome
    }
}

var nome;
var altura;
var peso;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    nome = (document.getElementById("nome").value);
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    // console.log(peso);
    // console.log(altura);

    imc = peso / (altura * altura);
    console.log(imc);

    resultado = document.getElementById("resultado");


    if (imc < 17) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    }
    else if (imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi: " + imc.toFixed(2) + " <br/> Abaixo do peso!";
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";
    }
    else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está com sobrepeso!"
    }
    else if (imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi : " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    }
    else if (imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    }
    else if (imc >= 40) {
        resultado.innerHTML = "<br/>" + nome + " Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    document.getElementById("nome").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

}


