// O bloco `finally` é uma parte opcional do `try...catch` que será executado sempre,
// independentemente de um erro ter ocorrido ou não no bloco `try`.

// Estrutura do `try...catch...finally`:
// 1. O bloco `try` contém o código que pode gerar um erro.
// 2. O bloco `catch` é acionado se um erro for lançado no `try`.
// 3. O bloco `finally` é executado sempre, mesmo que:
//    - Um erro tenha sido capturado no `catch`.
//    - Nenhum erro tenha ocorrido.
//    - Um `return` ou `throw` tenha sido usado no `try` ou no `catch`.

// Para que serve o `finally`?
// - O bloco `finally` é útil para executar ações que devem ocorrer sempre, como:
//   - Liberar recursos (ex.: fechar conexões de banco de dados).
//   - Limpar variáveis ou estados temporários.
//   - Garantir que certas tarefas sejam realizadas mesmo em caso de erro.

// Exemplo prático:
try {
  console.log("Bloco try executado.");
  // Simulação de um erro
  throw new Error("Erro simulado!");
} catch (error) {
  console.error("Erro capturado no catch:", error.message);
} finally {
  console.log("Bloco finally executado sempre.");
}

// No exemplo acima:
// - O console exibirá "Bloco try executado."
// - Em seguida, o erro será capturado e "Erro capturado no catch: Erro simulado!" será exibido.
// - Por último, o `finally` será executado e "Bloco finally executado sempre." será exibido.

// Observação Importante:
// - Mesmo que um `return` ou `throw` seja usado no bloco `try` ou `catch`,
//   o bloco `finally` ainda será executado antes de a execução do programa sair do método.
// - Não é recomendado usar `finally` para substituir o tratamento de erros, mas sim para garantir
//   que determinadas ações sejam realizadas consistentemente.
