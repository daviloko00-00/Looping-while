let saldo = 500;
let saque = 0;

do {
    saque = parseFloat(prompt("Bem vindo ao banco do Brasil!!\nDigite seu valor para saque:"))
    if (isNaN(saque) || saque > saldo) {
        alert("valor inválido para o saque")
    }else {
        subtração = saldo - saque;
    }
} while (isNaN(saque) || saque > saldo || saque < 0 || saldo < saque)
alert(`Saque realizado!! \n O valor total em sua conta é: ${subtração}\n O valor sacado: ${saque}\n `)
