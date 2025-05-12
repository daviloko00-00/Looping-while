let n = 0;// variável para o número que será analisado durante o looping

do {// inserção de valores para n, de forma a observar se n é um número positivo ou não
    n = parseFloat(prompt("digite um número positivo"));
    if(isNaN(n) || n <= 0){
        alert("não é um número válido, por favor tente novamente");}
    
}while(n<0 || isNaN(n));// estrutura lógica para o looping caso os valores sejam inválidos