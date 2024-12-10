// Questão 9 - Funções III

// Função para converter binário para decimal
function binarioParaDecimal(binario) {
  let decimal = 0;
  const tamanho = binario.length;

  // Usando estrutura de repetição para conversão
  for (let i = 0; i < tamanho; i++) {
    const digito = parseInt(binario[i], 10);
    if (digito !== 0 && digito !== 1) {
      console.error(`"${binario}" não é um número binário válido.`);
      return null;
    }
    decimal += digito * Math.pow(2, tamanho - 1 - i);
  }

  return decimal;
}

// Casos de teste
const testes = [
  "1001", // 9
  "110", // 6
  "10101", // 21
  "1111", // 15
  "0", // 0
  "100000", // 32
];

// Testar e exibir os resultados
testes.forEach((bin) => {
  const resultado = binarioParaDecimal(bin);
  if (resultado !== null) {
    console.log(`O binário "${bin}" equivale a ${resultado} em decimal.`);
  }
});
