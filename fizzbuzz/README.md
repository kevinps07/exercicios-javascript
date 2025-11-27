# 📚 Meus Exercícios de Código

Este repositório serve como um portfólio e arquivo de soluções para diversos desafios e exercícios de programação.

---

## 🧩 Solução: FizzBuzz

### 🎯 Descrição do Problema

O **FizzBuzz** é um clássico desafio de programação frequentemente usado para testar a compreensão de laços de repetição (loops) e lógica condicional.

O objetivo é imprimir números de 1 a 100, seguindo estas regras:

1.  Se o número for divisível por **3**, imprimir **"Fizz"**.
2.  Se o número for divisível por **5**, imprimir **"Buzz"**.
3.  Se o número for divisível por **3 E 5**, imprimir **"FizzBuzz"**.
4.  Caso contrário, imprimir o próprio **número**.

### 💻 Como o Código Funciona (`fizzbuzz.js`)

O código em JavaScript utiliza funções separadas para manter a lógica limpa e legível:

| Função | Descrição | Lógica |
| :--- | :--- | :--- |
| `divideBy3(index)` | Verifica se o número é divisível por 3. | `index % 3 === 0` |
| `divideBy5(index)` | Verifica se o número é divisível por 5. | `index % 5 === 0` |
| `divideBy3and5(index)` | Verifica se o número é divisível por 3 e 5. | Combina as duas funções acima (`&&`). |
| `check(number)` | Contém a estrutura condicional (`if/else if`) que decide o que imprimir. | Aplica a regra de *FizzBuzz* (priorizando 3 e 5) e imprime o resultado no console. |

Um loop `for` é usado para iterar de `1` a `100`, chamando a função `check(number)` para cada iteração.

### ▶️ Como Executar

Para rodar este script (assumindo que você tem o Node.js instalado):

```bash
node fizzbuzz.js
