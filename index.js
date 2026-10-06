// Recebe vitórias e derrotas e devolve o saldo.
function calcularSaldo(vitorias, derrotas) {
  const resultado = vitorias - derrotas;

  return resultado;
}

// Lista de jogadores para testar.
const jogadores = [
  { vitorias: 8, derrotas: 3 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 105, derrotas: 20 }
];

// Repete o processo para cada jogador.
for (let i = 0; i < jogadores.length; i++) {
  const vitorias = jogadores[i].vitorias;
  const derrotas = jogadores[i].derrotas;

  // Chama a função e guarda seu retorno.
  const saldoVitorias = calcularSaldo(vitorias, derrotas);

  let nivel;

  // Define o nível pela quantidade de vitórias.
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Exibe a mensagem solicitada.
  console.log(
    `O Herói que tem o saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}