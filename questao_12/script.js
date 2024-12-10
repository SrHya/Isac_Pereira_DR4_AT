document.getElementById("processButton").addEventListener("click", function () {
  const inputText = document.getElementById("textInput").value;

  // Exibe a string em maiúsculas
  const uppercase = inputText.toUpperCase();
  document.getElementById(
    "resultUppercase"
  ).textContent = `Maiúsculas: ${uppercase}`;

  // Exibe a string em minúsculas
  const lowercase = inputText.toLowerCase();
  document.getElementById(
    "resultLowercase"
  ).textContent = `Minúsculas: ${lowercase}`;

  // Exibe a string invertida
  const reversed = inputText.split("").reverse().join("");
  document.getElementById(
    "resultReversed"
  ).textContent = `Invertida: ${reversed}`;

  // Exibe a string criptografada
  const encrypted = inputText
    .replace(/a/gi, "@")
    .replace(/e/gi, "&")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/u/gi, "$");
  document.getElementById(
    "resultEncrypted"
  ).textContent = `Criptografada: ${encrypted}`;
});
