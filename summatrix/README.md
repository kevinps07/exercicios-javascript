# 🥋 Desafio: Soma Condicional de Matriz (Matrix Conditional Sum)

Este projeto resolve um desafio fundamental que envolve a manipulação de estruturas de dados multidimensionais (matrizes) e a aplicação de lógica condicional combinada.

### 🎯 Descrição do Problema

Criar uma função que recebe uma **matriz de números** (um array de arrays) e calcula a soma total de todos os elementos que satisfazem duas condições simultâneas:

1. O número deve ser **positivo** (`> 0`).
  
2. O número deve ser **par** (`% 2 === 0`).
  

### Exemplo

| **Entrada (matrix)** | **Números Válidos (Positivos e Pares)** | **Saída Esperada** |
| --- | --- | --- |
| `[[1, 2, 3], [2, 4], [5, 6], [3, 6, 9, 12]]` | `2, 2, 4, 6, 6, 12` | `32` |

---

## 🧠 Solução e Lógica

A solução utiliza **loops aninhados** (`for` e `forEach`) para acessar cada elemento da estrutura de duas dimensões, garantindo que a função seja totalmente independente de variáveis globais para ser reutilizável.

### Funções Chave

#### 1. `accepted(number)`

Esta função de utilidade retorna o número se ele atender às condições, ou `false` caso contrário.

JavaScript

```
const accepted = (number) => (number % 2 === 0 && number > 0) ? number : false;
```

- **Lógica:** O operador lógico `&&` (AND) garante que ambas as condições (paridade e positividade) sejam verdadeiras antes de retornar o valor.

#### 2. `sumMatrix(matrix)`

Esta é a função principal que gerencia o cálculo.

- **Estrutura da Matriz:** Para percorrer a matriz `matrix[linha][coluna]`, a solução utiliza:
  
  - Um loop **`for`** externo para iterar sobre os arrays internos (as linhas).
    
  - Um loop **`forEach`** interno para iterar sobre os elementos de cada array (as colunas).
    
- **Acumulador Local:** A variável `partial` é declarada **dentro** da função, garantindo que o cálculo de cada chamada comece do zero e não dependa de estados globais.
  
- **Cálculo da Soma:** A função utiliza o método `reduce()` no array `partial` para calcular a soma total dos números que foram aceitos.
  

---

## ▶️ Como Executar

Para rodar o script e ver o resultado no seu ambiente Node.js:

Bash

```
node matrix_sum.js
```