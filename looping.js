let produto = 0;// variável que recebe o preço dos produtos.
n= 0;// variável que onta quantos valores já foram adicionados.
let soma = 0;// variável que faz a soma dos valores já dados
do {
    n++;
    produto = parseFloat(prompt(`digite o valor do produto ${n}:` ));
    if (isNaN(produto) || produto < 0) {
        alert("não é um número válido");
    }else {
        soma += produto// adiciona e atribui o valor dos produtos à soma.
    }

} while (produto != 0 || isNaN(produto) || produto > 0)// estrutura lógica em relação ao looping 

alert(`O total das compras foi de ${soma}`)// sáida do código e valores