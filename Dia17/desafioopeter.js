// Desafio Operador Ternário
let nota = 85;
let avaliacao;

if (nota >= 90) {
  avaliacao = "Excelente";
} else if (nota >= 70) {
  avaliacao = "Bom";
} else if (nota >= 50) {
  avaliacao = "Satisfatório";
} else {
  avaliacao = "Insatisfatório";
}

console.log(avaliacao);

// Resolução com Operador Ternário
let avaliacaoTernaria =
  nota >= 90
    ? "Excelente"
    : nota >= 70
    ? "Bom"
    : nota >= 50
    ? "Satosfatório"
    : "Insatisfatório";
