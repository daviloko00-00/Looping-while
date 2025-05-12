let nome = "";

let sobrenome = "";
do {
    
        nome = prompt("Diga seu nome:");
        sobrenome = prompt("Diga seu sobrenome:");
        if(!(isNaN(nome && sobrenome)) || nome === "" || sobrenome === "" ){
            alert("digite um nome e sobrenome válido");
        }      
    }
 while (!isNaN(nome&&sobrenome) || sobrenome === "" || nome === "" );

alert(`O seu nome é: \n${nome} ${sobrenome}\n bem vindo!!`);