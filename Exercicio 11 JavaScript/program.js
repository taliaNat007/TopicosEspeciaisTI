// Array
var num = [];
for (var i = 1; i <= 16; i++){
    num.push(i);
}



// Apresentnado os dados do Array
document.write("<strong>Tabela: </strong>");
document.write("<table>");

for (var i = 0; i < num.length; i += 4) {
    document.write("<tr>");
    for (var j = i; j < i + 4 && j < num.length; j++) {
        document.write("<td>" + num[j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table><br>");

// Encontrando/Exibindo número dez
var numDez = num[9]; 
document.write("Encontrando/Exibindo número DEZ: " + numDez + "<br>");

// Comparando variáveis
document.write("<br><strong>Comparando as variáveis: </strong><br>");

// Verificando se a e b são iguais
var a = 1;
var b = 11;
if (a == b) {
    document.write("Os valores de A e B são iguais! <br>");
}

//  Verificando se a e b são diferentes
if (a != b) {
    document.write("Os valores de A e B são diferentes! <br>");
}

// Verificando se a e b são diferentes: valor e tipo
if (a !== b) {
    document.write("Os valores e tipo de A e B são diferentes! <br>");
}

// Verificando se a e b são iguais: valor e tipo
if (a === b) {
    document.write("Os valores e tipo de A e B são iguas! <br>");
}

// Verificando se a e b são diferentes: valor ou tipo
if (a !== b) {
    document.write("A e B possuem tipos diferentes! <br>");
}

// Verificando se a é menor que b
if (a < b) {
    document.write("A é menor que B! <br>");
}

// Verificando se a é maior que b
if (a > b) {
    document.write("A é maior que B! <br>");
}

// Verificando se a é menor ou igual a b
if (a <= b) {
    document.write("A é menor ou igual a B! <br>");
}

// Verificando se a é maior ou igual a b
if (a >= b) {
    document.write("A é maior ou igual a B! <br>");
}