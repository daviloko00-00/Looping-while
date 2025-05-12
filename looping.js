let n = 0;

do {
    n = parseFloat(prompt("digite um número positivo"));
    if(isNaN(n) || n <= 0){
        alert("não é um número válido, por favor tente novamente");}
    
}while(n<0 || isNaN(n));