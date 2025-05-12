let nota = 0;// variável para declarar notas que serão colocadas. 
n= 0;// variável que conta quantas notas já foram adicionadas.
let soma = 0;// variável que faz a soma das notas já colocadas.
do {
    n++;//adição para sempre estar atualizado em relação à nota
    nota = parseFloat(prompt(`digite a nota ${n}` ));
    if (isNaN(nota) || nota <= 0 || nota >= 10) {
        alert("não é um número válido");
    }else {
        soma += nota // atribui e adiciona valores a soma
    }

} while (nota >= 0 || isNaN(nota))
media = (soma/n).toFixed(2);// faz a média dos valores pelo número de notas
alert(`a média das notas é ${media}`)//saída final do código.
alert (`as notas colocadas foram ${nota}`)