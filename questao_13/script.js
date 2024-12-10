// O bloco try...catch é utilizado para tratar erros em JavaScript. Ele permite que o programa
// continue sendo executado mesmo quando ocorre um erro em uma parte do código.
// A estrutura do try...catch funciona da seguinte forma:

// 1. O bloco `try` é onde colocamos o código que queremos executar e que pode potencialmente gerar um erro.
// 2. O bloco `catch` captura qualquer erro que ocorreu dentro do bloco `try` e permite tratar ou exibir uma mensagem apropriada.
// 3. Opcionalmente, é possível incluir um bloco `finally`, que será executado sempre, independentemente de um erro ter ocorrido ou não.

// Exemplo de uso básico:
try {
  // Código que pode gerar um erro
  const result = 10 / 0; // Esse código não gera erro, mas exemplifica uma situação perigosa.
  console.log(result);

  // Simulação de um erro
  JSON.parse("{invalid JSON}"); // Isso gera um erro porque a string não é um JSON válido.
} catch (error) {
  // O bloco `catch` captura o erro e o trata
  console.error("Um erro ocorreu:", error.message); // Exibe a mensagem de erro no console
} finally {
  // O bloco `finally` é executado sempre, independentemente de ter ocorrido erro ou não
  console.log("Bloco finally executado!");
}

// Benefícios do uso do try...catch:
// - Impede que um erro interrompa todo o programa.
// - Permite personalizar a resposta a erros (como exibir uma mensagem amigável ao usuário).
// - Pode ser usado para executar ações de "limpeza", como fechar conexões ou liberar recursos no bloco `finally`.

// Observação:
// - É uma boa prática usar try...catch somente em trechos de código que possam gerar erros previsíveis.
// - Usar try...catch em excesso pode prejudicar a legibilidade e desempenho do código.
