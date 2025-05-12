let nota = 0;
n= 0;
let soma = 0;
do {
    n++;
    nota = parseFloat(prompt(`digite a nota ${n}` ));
    if (isNaN(nota) || nota <= 0) {
        alert("não é um número válido");
    }else {
        soma += nota
    }

} while (nota >= 0 || isNaN(nota))
media = (soma/n).toFixed(2);
alert(`a média das notas é ${media}`)