
Excelente\! Seu código implementa uma solução otimizada e robusta para contagem de frequência de caracteres.

Aqui está o `README.md` completo para o seu projeto **Contagem de Ocorrências de Caracteres** (`char-count/README.md`), destacando a eficiência da sua solução.

-----

## 📊 Desafio: Contagem de Ocorrências de Caracteres (Character Count)

Este projeto resolve o problema de calcular a frequência de cada caractere em uma *string* de forma eficiente, utilizando manipulação de *strings*, **Expressões Regulares** e a estrutura de dados **`Map`**.

-----

## 🎯 Requisitos e Funcionalidades

A solução atende aos seguintes requisitos:

1.  **Contagem de Frequência:** Calcula o número de vezes que cada caractere válido aparece na *string*.
2.  **Normalização:** Caracteres maiúsculos e minúsculos são contados como o mesmo caractere (Ex: 'A' e 'a' contam juntos).
3.  **Filtragem:** Apenas letras (`a-z`) e números (`0-9`) são considerados na contagem. Espaços e caracteres especiais são ignorados.
4.  **Estrutura de Dados:** Utiliza um `Map` para armazenar as contagens, aproveitando sua eficiência de busca de **O(1)**.

### Exemplo de Entrada

```javascript
const inputString = "Significados > insiginficantes # que $ resultam {}'()%&*! tudo com base em nada @ R10";
```

### Exemplo de Saída

```
s: 6
i: 7
g: 2
n: 5
f: 2
c: 3
a: 6
d: 3
o: 3
q: 1
u: 3
e: 5
r: 3
l: 1
t: 3
m: 3
b: 1
1: 1
0: 1
```

-----

## 💻 Solução e Lógica

O código é dividido em funções que demonstram uma pipeline de processamento de dados (preparação, mapeamento e exibição).

### 1\. Preparação e Filtragem (`prepare` e `mkListOfChar`)

A função `prepare(input)` é o coração da eficiência da solução:

```javascript
function prepare(input){
  // Converte para minúsculas e remove tudo que NÃO for letra (a-z) ou número (0-9)
  return input.toLowerCase().replace(/[^a-z0-9]/g, ''); 
}
```

  * **`toLowerCase()`:** Garante a normalização (contagem unificada de maiúsculas/minúsculas).
  * **`replace(/[^a-z0-9]/g, '')`:** Usa uma **Expressão Regular** para remover todos os caracteres indesejados (o `^` nega o conjunto, removendo tudo que não for `a-z` ou `0-9`).

### 2\. Lógica de Contagem (`check` e `run`)

A função `check(input)` gerencia a contagem de frequência no `Map` (`countCharsMap`) de forma segura, garantindo que o contador seja local ao processo de mapeamento e inicializado corretamente.

```javascript
function check(input){ 
   if(countCharsMap.has(input)){
     // Chave já existe: incrementa o contador
     let counter = countCharsMap.get(input)
     countCharsMap.set(input, counter+=1);
  } else {
    // Chave nova: inicializa o contador com 1
    countCharsMap.set(input, 1)
  }
}
```

  * Esta lógica garante que o código tenha uma complexidade de tempo **O(N)**, pois cada caractere limpo da *string* é processado uma única vez.


### 3\. Estrutura de Dados

O uso do `Map` (`countCharsMap`) é ideal, pois ele fornece o melhor desempenho para buscar (`.has()`, `.get()`) e atualizar chaves.

-----

## ▶️ Como Executar

Para rodar este script em seu terminal:

```bash
node char_count.js 
```
