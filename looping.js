let produto = 0;
n= 0;
let soma = 0;
do {
    n++;
    produto = parseFloat(prompt(`digite o valor do produto ${n}:` ));
    if (isNaN(produto) || produto < 0) {
        alert("não é um número válido");
    }else {
        soma += produto
    }

} while (produto >= 0 || isNaN(produto))

alert(`O total das compras foi de ${soma}`)