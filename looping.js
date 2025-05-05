let n = 0;

do {
    let n = parseFloat(prompt("digite um número"));
    if(isNaN(n)){
        alert("não é um número válido");}
}while(n<0 || isNaN(n));