// Questão 8 - Funções II

// Função para verificar se um ano é bissexto
function isBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// Receber lista de anos do usuário (separados por vírgulas)
const entrada = prompt("Digite uma lista de anos separados por vírgula:");
const anos = entrada
  ? entrada.split(",").map((ano) => parseInt(ano.trim(), 10)) // Converter para números inteiros
  : [];

// Usar forEach() para encontrar e exibir os anos bissextos
console.log("Anos bissextos da lista:");
anos.forEach((ano) => {
  if (isBissexto(ano)) {
    console.log(ano);
  }
});
