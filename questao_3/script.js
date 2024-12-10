// Questão 3 - Arrays III

// Passo 1: Criar um array com 5 nomes próprios
let nomes = ["Ana", "Bruno", "Carlos", "Débora", "Eduardo"];

// Ordenar o array em ordem crescente e exibir no console
nomes.sort();
console.log("Nomes em ordem crescente:", nomes);

// Passo 2: Criar outro array com 10 números
let numeros = [42, 7, 15, 23, 8, 34, 2, 19, 10, 5];

// Ordenar o array em ordem crescente numérica e exibir no console
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);

// Passo 3: Embaralhar o array de números e exibir no console
numeros.sort(() => Math.random() - 0.5);
console.log("Números embaralhados:", numeros);
