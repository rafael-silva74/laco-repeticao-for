let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let resultado = "";

for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) {
        resultado += i + "\n";
    }
}

alert(resultado);