// Função recursiva para calcular A x B (multiplicação)
function multiplicacaoRecursiva(a, b) {
  if (b === 0) {
    return 0; // Base: qualquer número multiplicado por 0 é 0
  }
  if (b > 0) {
    return a + multiplicacaoRecursiva(a, b - 1); // Adição repetida
  }
  // Caso b seja negativo
  return -multiplicacaoRecursiva(a, -b);
}

// Função recursiva para calcular A elevado a B (potência)
function potenciaRecursiva(a, b) {
  if (b === 0) {
    return 1; // Base: qualquer número elevado a 0 é 1
  }
  if (b > 0) {
    return a * potenciaRecursiva(a, b - 1); // Multiplicação repetida
  }
  // Caso b seja negativo (potência fracionária)
  return 1 / potenciaRecursiva(a, -b);
}

// Testes para multiplicação recursiva
console.log("Testes: Multiplicação Recursiva");
console.log(multiplicacaoRecursiva(3, 4)); // 12
console.log(multiplicacaoRecursiva(-3, 4)); // -12
console.log(multiplicacaoRecursiva(3, -4)); // -12
console.log(multiplicacaoRecursiva(-3, -4)); // 12
console.log(multiplicacaoRecursiva(0, 5)); // 0
console.log(multiplicacaoRecursiva(5, 0)); // 0

// Testes para potência recursiva
console.log("\nTestes: Potência Recursiva");
console.log(potenciaRecursiva(2, 3)); // 8
console.log(potenciaRecursiva(5, 0)); // 1
console.log(potenciaRecursiva(2, -3)); // 0.125
console.log(potenciaRecursiva(-2, 3)); // -8
console.log(potenciaRecursiva(-2, 4)); // 16
console.log(potenciaRecursiva(10, 1)); // 10
