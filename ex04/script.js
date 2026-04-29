let soma = 0;

for (let i = 1; i <= 5; i++) {
    soma += parseFloat(prompt("Digite a nota:"));
}

let media = soma / 5;

alert("Média: " + media);