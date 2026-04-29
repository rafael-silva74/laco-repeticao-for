let soma = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt(`Digite o ${i}º número:`));

  // validação simples (evita erro se o usuário digitar vazio ou texto)
  if (isNaN(num)) {
    alert("Digite apenas números inteiros!");
    i--; // repete a tentativa
  } else {
    soma += num;
  }
}

console.log("Soma total dos 10 números:", soma);
alert("Soma total: " + soma);