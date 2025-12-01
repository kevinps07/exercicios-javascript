## 📊 Desafio: Cálculo da Média Ponderada com `Array.reduce()`

Este projeto resolve o problema de calcular uma média aritmética a partir de um *array* de objetos, com uma regra de negócio específica: **apenas registros ativos devem ser incluídos no cálculo**.

Exploramos duas abordagens principais para resolver este desafio, destacando a elegância do *pipeline* de dados e a eficiência do `reduce` para consolidação complexa.

-----

### 🎯 Regras de Negócio

1.  **Filtro:** Apenas usuários onde `active` é `true` devem ser considerados.
2.  **Cálculo:** Retornar a média aritmética do `score` desses usuários ativos.

### 🧪 Dados de Entrada

```javascript
const userRecords = [
  { id: 1, nome: "Calango", active: true, score: 85, idade: 30 },
  { id: 2, nome: "zero", active: false, score: 92, idade: 22 },
  { id: 3, nome: "Mount", active: true, score: 78, idade: 28 },
  { id: 4, nome: "Zig", active: true, score: 95, idade: 20 },
  { id: 5, nome: "nextage", active: true, score: 88, idade: 35 }
];
```

**Resultado Esperado:** `86.5`

-----

## 1\. Solução por Pipeline (`filter` + `reduce`)

Esta é a minha **solução inicial** e a mais **legível** para este tipo de problema, pois separa claramente as responsabilidades: a função `validate` filtra e a função principal soma.

### 🛠️ Implementação

A lógica é dividida em dois passos essenciais:

1.  Uso `Array.filter()` para criar um novo *array* contendo apenas os registros ativos.
2.  Uso `Array.reduce()` para somar os *scores* desse novo *array*.

<!-- end list -->

```javascript
// Passo 1: Filtragem
function validate(records) {
  return records.filter(item => item.active === true);
}

// Passo 2: Redução e Cálculo Final
function calculateAverageScore(records) {
  const recordsAccepted = validate(records);
  const activeRecordsCount = recordsAccepted.length;
  
  // Uso o reduce para somar os scores do array já filtrado
  let total = recordsAccepted.reduce((total, current) => {
    return total += current.score;
  }, 0);
  
  // Cálculo final
  return total / activeRecordsCount;
}
```

-----

## 2\. Solução Otimizada (`reduce` Único)

Esta solução é um **refinamento** que demonstra a versatilidade do `Array.reduce()`. Eu realizo a **filtragem e a consolidação (soma + contagem) em uma única passada** (*single-pass*) sobre o *array* original, evitando a criação de um *array* intermediário.

### 🛠️ Implementação

1.  O `reduce` é iniciado com um objeto acumulador: `{ sum: 0, count: 0 }`.
2.  Dentro do `reduce`, eu verifico o status `active`. Se o usuário não for ativo, eu simplesmente retorno o acumulador sem modificá-lo (função de filtragem).
3.  No final, eu divido a `sum` pela `count` que foi acumulada.

<!-- end list -->

```javascript
function calculateAverageScore(records) {
  
  // O reduce acumula a soma total (sum) e a contagem de ativos (count)
  const result = records.reduce((accumulator, record) => {
    
    if (record.active === true) {
      // Se ativo, retorna o novo acumulador com valores atualizados
      return {
        sum: accumulator.sum + record.score,
        count: accumulator.count + 1
      };
    }
    
    // Se não for ativo, retorna o acumulador sem modificação
    return accumulator;
    
  }, { sum: 0, count: 0 }); // <-- Valor inicial (objeto)

  // Calcula a média fora do reduce
  return result.sum / result.count;
}
```

### 💡 Vantagem

A principal vantagem desta abordagem é a **eficiência**. Evitar a criação de *arrays* intermediários pode economizar tempo e memória em grandes volumes de dados.

-----

### ▶️ Como Executar

```bash
node waverage.js
```
