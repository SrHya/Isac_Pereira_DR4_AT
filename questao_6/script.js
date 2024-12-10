// Questão 6 - Iterações III

// Função para exibir uma tabuada genérica
function exibirTabuada(operacao, simbolo) {
  console.log(`Tabuada de ${operacao}:`);
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let resultado;
      switch (operacao) {
        case "multiplicação":
          resultado = i * j;
          break;
        case "divisão":
          resultado = (i / j).toFixed(2); // Arredondar para 2 casas decimais
          break;
        case "adição":
          resultado = i + j;
          break;
        case "subtração":
          resultado = i - j;
          break;
      }
      console.log(`${i} ${simbolo} ${j} = ${resultado}`);
    }
    console.log(""); // Quebra de linha entre tabuadas
  }
}

// Exibir as tabuadas de 1 a 10
exibirTabuada("multiplicação", "x");
exibirTabuada("divisão", "÷");
exibirTabuada("adição", "+");
exibirTabuada("subtração", "-");
