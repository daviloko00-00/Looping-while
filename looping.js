let n = 0;

do {
    n = parseFloat(prompt("digite um número positivo"));
    if(isNaN(n) || n <= 0){
        alert("não é um número válido");}
    
}while(n<0)