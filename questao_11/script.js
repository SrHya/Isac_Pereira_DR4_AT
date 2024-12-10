// Adiciona evento ao botão
document.getElementById("processButton").addEventListener("click", function () {
  // Captura o valor do input
  const inputText = document.getElementById("textInput").value;

  // Remove as vogais e transforma as consoantes em maiúsculas
  const result = inputText
    .replace(/[aeiou]/gi, "") // Remove vogais (maiúsculas e minúsculas)
    .toUpperCase(); // Transforma o restante em maiúsculas

  // Exibe o resultado no parágrafo
  document.getElementById("result").textContent = result;
});
