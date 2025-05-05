const numSecreto = Math.floor(Math.random()*100)+1;// criação de um número aleatório entre 0 a 100

let numTentativa = 0;
let i = 0;

while(numTentativa !== numSecreto){// looping while para adivinhação de numSecreto
    i++;
    do {
        numTentativa= parseInt(prompt(`${i}° tentativa. Tente adivinhar um número entre 1 e 100:`));
        if(numTentativa>100){
            alert("número inválido!! Digite um número menor que 100")
        }else if(numTentativa<1){
            alert("número inválido!! Digite um número maior que 1")}else if (isNaN(numTentativa)){
                alert("Inválido!! Digite um número entre 1 e 100")// alertas para caso o usuário escreva algum número inválido
            }

    }while(isNaN(numTentativa)|| numTentativa<1 || numTentativa>100);
    if (numTentativa<numSecreto){// caso o numero seja maior que 100 ou menor que 1, ele coloca um alert de acordo com oq é necessário 
        alert("O número secreto é maior que isso zé mané ");
    }else if(numTentativa>numSecreto){alert("O número secreto é menor que isso zé mané");
    }

    
}alert(`Parabens!!!! O número era ${numSecreto}\n tentativas:${i}`)