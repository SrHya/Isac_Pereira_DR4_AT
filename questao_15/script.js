// Função que processa um valor numérico e simula uma operação
function processarNumero(numero) {
  try {
    console.log("Bloco try iniciado.");

    // Verifica se o valor é um número válido
    if (isNaN(numero)) {
      throw new Error("O valor fornecido não é um número!");
    }

    // Simula um cálculo ou operação
    const resultado = numero * 2;
    console.log(`O número processado é: ${resultado}`);
  } catch (erro) {
    // Trata o erro caso o valor não seja válido
    console.error("Erro capturado no bloco catch:", erro.message);
  } finally {
    // Bloco executado sempre, independente de erro ou sucesso
    console.log("Bloco finally executado: Operação finalizada.");
  }
}

// Demonstração do caso sem erros
console.log("Exemplo 1: Caso sem erros.");
processarNumero(10); // Número válido

// Demonstração do caso com erro
console.log("\nExemplo 2: Caso com erro.");
processarNumero("texto"); // Valor inválido, não é um número
