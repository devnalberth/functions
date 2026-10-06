# 🦸 Calculadora de Partidas Rankeadas

Desafio de lógica de programação da [DIO](https://www.dio.me/): a partir da quantidade de vitórias e derrotas de um jogador, o programa calcula o saldo de vitórias, determina seu nível e exibe o resultado no console.

## 🎯 Objetivo

Criar uma função que recebe a quantidade de vitórias e derrotas de um jogador e retorna o saldo (`vitórias - derrotas`). Com base na quantidade de vitórias, usar estruturas de decisão para classificar o jogador em um dos níveis abaixo e mostrar a mensagem:

```text
O Herói que tem o saldo de {saldoVitorias} está no nível de {nivel}
```

## 🏆 Tabela de níveis

| Vitórias      | Nível    |
| ------------- | -------- |
| Até 10        | Ferro    |
| 11 a 20       | Bronze   |
| 21 a 50       | Prata    |
| 51 a 80       | Ouro     |
| 81 a 90       | Diamante |
| 91 a 100      | Lendário |
| 101 ou mais   | Imortal  |

## 🧠 Conceitos aplicados

- **Variáveis**: `const` para guardar os jogadores, as vitórias, as derrotas e o saldo; `let` para o índice do laço e o nível.
- **Funções**: `calcularSaldo(vitorias, derrotas)` recebe parâmetros e devolve o resultado com `return`.
- **Operador aritmético**: `-` para calcular o saldo de vitórias.
- **Arrays e objetos**: lista de jogadores com suas quantidades de vitórias e derrotas.
- **Laços de repetição**: `for` para percorrer a lista e processar cada jogador.
- **Operador de comparação**: `<=` para checar os limites de cada faixa.
- **Estruturas de decisão**: cadeia de `if` / `else if` / `else` para escolher o nível.
- **Template literals**: interpolação com `` `${}` `` para montar a mensagem final.

## 🚀 Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

No terminal, acesse a pasta `functions` e execute:

```bash
node index.js
```

Saída esperada com os jogadores padrão:

```text
O Herói que tem o saldo de 5 está no nível de Ferro
O Herói que tem o saldo de 25 está no nível de Prata
O Herói que tem o saldo de 85 está no nível de Imortal
```

Para testar outros jogadores, altere a lista em [index.js](index.js):

```js
const jogadores = [
  { vitorias: 8, derrotas: 3 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 105, derrotas: 20 }
];
```

## 🧪 Exemplos

| Vitórias | Derrotas | Saldo | Nível    |
| -------- | -------- | ----- | -------- |
| 8        | 3        | 5     | Ferro    |
| 35       | 10       | 25    | Prata    |
| 75       | 20       | 55    | Ouro     |
| 105      | 20       | 85    | Imortal  |

> O nível é definido pela quantidade de vitórias. As derrotas são usadas apenas no cálculo do saldo.

## 📁 Estrutura do projeto

```text
.
├── index.js    # cálculo do saldo e classificação dos jogadores
└── readme.md   # documentação do projeto
```

## 👤 Autor

Desenvolvido por **Nalberth** ([@devnalberth](https://github.com/devnalberth)) durante os estudos na DIO.
