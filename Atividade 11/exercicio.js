// Primeiro comentário de uma linha

var carros = new Array();
carros[0] = "volvo";
carros[1] = "BMW";
document.writeln(carros.length);
document.writeln(carros[0]);
document.writeln(carros[10]);
var idade = 20;
var pais = 'Brasil';
document.writeln(idade);
document.writeln(pais);

for (let i = 0; i <= 20; i ++){
    if(i % 2 == 0)
    {
        document.writeln("O número ", i, " é Par!");
    }    
    else{
        document.writeln(" O número ", i, " é impar");
    }
}
