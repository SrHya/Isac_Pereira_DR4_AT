// Questão 5 - Iterações II

// Passo 1: Criar um array para armazenar os votos de cada chapa
let votos = [120, 230, 300, 150, 200]; // Exemplo de votos para cada chapa (números naturais)

// Passo 2: Calcular o total de votos
let totalVotos = votos.reduce((soma, voto) => soma + voto, 0);

// Passo 3: Exibir os votos de cada chapa e seus percentuais
console.log("Resultados da eleição:");
for (let i = 0; i < votos.length; i++) {
  let percentual = ((votos[i] / totalVotos) * 100).toFixed(2);
  console.log(`Chapa ${i + 1}: ${votos[i]} votos (${percentual}%)`);
}

// Passo 4: Verificar se há segundo turno
let maiorVotos = Math.max(...votos);
let chapaVencedora = votos.indexOf(maiorVotos) + 1;

// Verificar se a chapa com mais votos obteve mais de 50%
if (maiorVotos > totalVotos / 2) {
  console.log(
    `Chapa ${chapaVencedora} venceu no primeiro turno com ${(
      (maiorVotos / totalVotos) *
      100
    ).toFixed(2)}% dos votos.`
  );
} else {
  console.log(
    "Nenhuma chapa obteve mais de 50% dos votos. Haverá segundo turno."
  );

  // Identificar as duas chapas com mais votos
  let indicesOrdenados = [...votos]
    .map((voto, indice) => ({ voto, indice }))
    .sort((a, b) => b.voto - a.voto);

  let segundaChapa1 = indicesOrdenados[0].indice + 1;
  let segundaChapa2 = indicesOrdenados[1].indice + 1;

  console.log(
    `As chapas ${segundaChapa1} e ${segundaChapa2} irão para o segundo turno.`
  );
}
