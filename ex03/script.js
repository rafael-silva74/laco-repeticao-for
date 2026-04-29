let num = parseInt(prompt("Digite um número:"));
let resultado = "";

for (let i = 1; i <= 10; i++) {
    resultado += `${num} x ${i} = ${num * i}\n`;
}

alert(resultado);