// Questão 10 - Strings e Números I

// Função para obter as iniciais de um nome
function obterIniciais(nome) {
  if (!nome || typeof nome !== "string") {
    return "Nome inválido!";
  }

  // Dividir o nome em palavras e pegar a primeira letra de cada uma
  const palavras = nome.trim().split(" ");
  const iniciais = palavras
    .filter((palavra) => palavra.length > 0) // Remover espaços extras
    .map((palavra) => palavra[0].toUpperCase()) // Pegar a inicial e transformar em maiúscula
    .join("");

  return iniciais;
}

// Testes com diferentes cenários
const testes = [
  "João da Silva",
  "maria clara dias",
  "Ana",
  "Roberto Carlos",
  "   Julia  de   Andrade   ",
  "Lucas   ",
];

// Exibir os resultados com alert
testes.forEach((nome) => {
  const iniciais = obterIniciais(nome);
  alert(`O nome "${nome}" tem as iniciais: ${iniciais}`);
});
