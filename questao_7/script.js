// Questão 7 - Funções I

// Função para contar as ocorrências de uma palavra em uma frase
function contarOcorrencias(frase, palavra) {
  // Null safety: verificar se os valores são válidos
  if (!frase || !palavra) {
    return 0; // Retorna 0 se a frase ou a palavra forem nulas ou vazias
  }

  // Transformar a frase e a palavra para letras minúsculas para busca case-insensitive
  const fraseMinuscula = frase.toLowerCase();
  const palavraMinuscula = palavra.toLowerCase();

  // Dividir a frase em palavras e filtrar as ocorrências da palavra
  const palavras = fraseMinuscula.split(/\s+/); // Dividir por espaços
  const ocorrencias = palavras.filter((p) => p === palavraMinuscula).length;

  return ocorrencias;
}

// Receber frase e palavra do usuário
const fraseUsuario = prompt("Digite uma frase:");
const palavraBusca = prompt("Digite a palavra a ser buscada:");

// Chamar a função e exibir o resultado
const resultado = contarOcorrencias(fraseUsuario, palavraBusca);

console.log(`A palavra "${palavraBusca}" ocorre ${resultado} vezes na frase.`);
