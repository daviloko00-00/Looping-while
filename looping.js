let nome = "";// variável para o nome declarada.

let sobrenome = "";// variável para o sobrenome declarada.
do {// pede o nome e sobrenome ao usuário para depois usar a lógica e entender se necessita repetição ou não
    
        nome = prompt("Diga seu nome:");
        sobrenome = prompt("Diga seu sobrenome:");
        if(!(isNaN(nome && sobrenome)) || nome === "" || sobrenome === "" ){// estrutura lógica para mensagem de erro onde analísa se nome e sobrenome são palavras ou se estão sem valores.
            alert("digite um nome e sobrenome válido");
        }      
    }
 while (!isNaN(nome&&sobrenome) || sobrenome === "" || nome === "" );// estrutura lógica para looping onde analísa se nome e sobrenome são palavras ou se estão sem valores.

alert(`O seu nome é: \n${nome} ${sobrenome}\n bem vindo!!`);// saída final dos valores entregues para nome e sobrenome