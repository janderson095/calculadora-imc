// Resultado abaixo de 17 - Muito abaixo do peso; 
//             Resultado entre 17 e 18,49 - Abaixo do peso; 
//             Resultado entre 18,5 e 24,99 - Peso ideal; 
//             Resultado entre 25 e 29,99 - Sobrepeso; 
//             Resultado entre 30 e 34,9 - Obesidade grau I; 
//             Resultado entre 35 e 39,9 - Obesidade grau II (severa); 
//             Resultado acima de 4 - Obesidade grau III (morbida); 

var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite o seu nome");
    if(nome=="" || nome==null){
        alert("Por favor Preencher todos os Campos!");
        area.innerHTML = "Clique no botão para acessar..."
    }

    else{
        area.innerHTML = "Seja Bem-Vindo: " +nome
    }
}

var nome = [];
var altura = [];
var peso = [];
var imc = [];
var resultado = [];

function calcular(event){
    event.preventDefault();
    
    nome[0] = (document.getElementById("nome1").value);
    peso[0] = parseFloat(document.getElementById("peso1").value);
    altura[0] = parseFloat(document.getElementById("altura1").value);

    // console.log(peso);
    // console.log(altura);

    imc[0] = peso[0] / (altura[0] * altura[0]);
    console.log(imc);

    resultado[0] = document.getElementById("resultado1");
    
    

    if(imc[0] < 17){
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi: "+ imc[0].toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    }
    else if (imc[0] >= 17 && imc[0] <= 18.49) {
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi: "+imc[0].toFixed(2) +" <br/> Abaixo do peso!";
    }
    else if (imc[0] >= 18.5 && imc[0] <= 24.99) {
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi: "+ imc[0].toFixed(2) + "<br/> Você está no peso ideal!";
    }
    else if (imc[0] >= 25 && imc[0] <= 29.99) {
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi: "+ imc[0].toFixed(2) + "<br/> Você está com sobrepeso!"
    }
    else if (imc[0] >= 30 && imc[0] <= 34.99) {
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi : "+ imc[0].toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    }
    else if (imc[0] >= 35 && imc[0] <=39.99) {
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi: "+ imc[0].toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    }
    else if (imc[0] >= 40) {
        resultado.innerHTML = "<br/>"+ nome[0] +" Seu resultado foi: "+ imc[0].toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    document.getElementById("nome1").value = "";
    document.getElementById("peso1").value = "";
    document.getElementById("altura1").value = "";

    // CODIGO DE CALCULO DA SEGUNDA PESSOA

    // nome[1] = (document.getElementById("nome2").value);
    // peso[1] = parseFloat(document.getElementById("peso2").value);
    // altura[1] = parseFloat(document.getElementById("altura2").value);

    // console.log(peso);
    // console.log(altura);

    imc[1] = peso[1] / (altura[1] * altura[1]);
    console.log(imc);

    resultado[1] = document.getElementById("resultado2");

    if(imc[1] < 17){
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi: "+ imc[1].toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    }
    else if (imc[1] >= 17 && imc[1] <= 18.49) {
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi: "+imc[1].toFixed(2) +" <br/> Abaixo do peso!";
    }
    else if (imc[1] >= 18.5 && imc[1] <= 24.99) {
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi: "+ imc[1].toFixed(2) + "<br/> Você está no peso ideal!";
    }
    else if (imc[1] >= 25 && imc[1] <= 29.99) {
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi: "+ imc[1].toFixed(2) + "<br/> Você está com sobrepeso!"
    }
    else if (imc[1] >= 30 && imc[1] <= 34.99) {
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi : "+ imc[1].toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    }
    else if (imc[1] >= 35 && imc[1] <=39.99) {
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi: "+ imc[1].toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    }
    else if (imc[1] >= 40) {
        resultado.innerHTML = "<br/>"+ nome[1] +" Seu resultado foi: "+ imc[1].toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    // document.getElementById("nome2").value = "";
    // document.getElementById("peso2").value = "";
    // document.getElementById("altura2").value = "";

    // CALCULO DA TERCEIRA PESSOA 

    nome[2] = (document.getElementById("nome3").value);
    peso[2] = parseFloat(document.getElementById("peso3").value);
    altura[2] = parseFloat(document.getElementById("altura3").value);

    // console.log(peso);
    // console.log(altura);

    imc[2] = peso[2] / (altura[2] * altura[2]);
    console.log(imc);

    resultado[2] = document.getElementById("resultado3");

    if(imc[2] < 17){
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi: "+ imc[2].toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    }
    else if (imc[2] >= 17 && imc[2] <= 18.49) {
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi: "+imc[2].toFixed(2) +" <br/> Abaixo do peso!";
    }
    else if (imc[2] >= 18.5 && imc[2] <= 24.99) {
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi: "+ imc[2].toFixed(2) + "<br/> Você está no peso ideal!";
    }
    else if (imc[2] >= 25 && imc[0] <= 29.99) {
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi: "+ imc[2].toFixed(2) + "<br/> Você está com sobrepeso!"
    }
    else if (imc[2] >= 30 && imc[2] <= 34.99) {
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi : "+ imc[2].toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    }
    else if (imc[2] >= 35 && imc[2] <=39.99) {
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi: "+ imc[2].toFixed(2) + "<br/> CUIDADO, obesidade grau II!";
    }
    else if (imc[2] >= 40) {
        resultado.innerHTML = "<br/>"+ nome[2] +" Seu resultado foi: "+ imc[2].toFixed(2) + "<br/> CUIDADO, obesidade grau III!";
    }

    // document.getElementById("nome3").value = "";
    // document.getElementById("peso3").value = "";
    // document.getElementById("altura3").value = "";
}


