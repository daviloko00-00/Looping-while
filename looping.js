let saldo = 500;//variável para o saldo simulado, deixando um valor limite para saque.
let saque = 0;// variável para o saque que será dito pelo usuário

do {
    saque = parseFloat(prompt("Bem vindo ao banco do Brasil!!\nDigite seu valor para saque:"))
    if (isNaN(saque) || saque > saldo) {// estrutura condicional para validar mensagem de erro ou não
        alert("valor inválido para o saque")
    }else {
        subtração = saldo - saque;
    }
} while (isNaN(saque) || saque > saldo || saque < 0 || saldo < saque)//estrutura condicional para o looping
alert(`Saque realizado!! \n O valor total em sua conta é: ${subtração}\n O valor sacado: ${saque}\n `)
