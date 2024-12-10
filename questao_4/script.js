// Questão 4 - Iterações I

// Passo 1: Criar uma sequência de 5 números inteiros
let numeros = [12, 7, 25, 9, 15];

// Inicializar variáveis
let soma = 0;
let maior = numeros[0];
let menor = numeros[0];

// Passo 2: Utilizar um loop para calcular a soma, média, maior e menor número
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // Adicionar o número atual à soma

  if (numeros[i] > maior) {
    maior = numeros[i]; // Atualizar o maior número
  }

  if (numeros[i] < menor) {
    menor = numeros[i]; // Atualizar o menor número
  }
}

// Calcular a média
let media = soma / numeros.length;

// Exibir os resultados no console
console.log("Números:", numeros);
console.log("Soma:", soma);
console.log("Média:", media.toFixed(2));
console.log("Maior número:", maior);
console.log("Menor número:", menor);
