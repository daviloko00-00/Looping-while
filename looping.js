let nota = 0;
n= 0;
do {n = n ++;
    nota = parseFloat(prompt(`digite a nota ${i}` ));
    if (isNaN(nota) || nota <= 0) {
        alert("não é um número válido");
    }else {
        soma += nota
    }

} while (nota > 0 || isNaN(nota))
media = soma/n;
alert(`a média das notas é ${media}\n as notas colocadas foram ${nota}`)