## 💾 Desafio: Classificação e Filtragem de Registros (`RecordsSorting`)

Este projeto demonstra a capacidade de manipular *arrays* de objetos aplicando múltiplas regras de processamento, incluindo **filtragem condicional** e **classificação numérica (sorting)**.

A meta é refinar uma lista de registros de usuários para extrair e ordenar apenas aqueles que atendem a critérios específicos.

### 🎯 Requisitos Atendidos

1.  **Filtragem:** Incluir apenas usuários `active: true` **E** `idade` maior que **25**.
2.  **Classificação:** Ordenar o *array* filtrado em ordem **decrescente** pela propriedade `score`.

-----

### 💻 Dados de Entrada

```javascript
const userRecords = [
  { id: 1, nome: "Calango", active: true, score: 85, idade: 30 },
  { id: 2, nome: "zero", active: false, score: 92, idade: 22 },
  { id: 3, nome: "Mount", active: true, score: 78, idade: 28 },
  { id: 4, nome: "Zig", active: true, score: 95, idade: 20 },
  { id: 5, nome: "nextage", active: true, score: 88, idade: 35 }
];
```

-----

###Implementação Original (Filtragem por Loop)

Minha solução utiliza funções separadas (`select` e `sort`) para delegar responsabilidades, o que é um bom princípio de programação. A filtragem é feita manualmente com um `forEach` e um *array* auxiliar (`result`).

#### Código

```javascript
function select(user) {
  return (user.active === true && user.idade > 25) ? user : false;
}

function sort(user){
  return user.sort((a,b) => b.score - a.score)
}

function show(input) {
  let result = [];
  
  input.forEach(element => {
    if (select(element)) {
      result.push(element);   
    }
  });

  let data =  sort(result);
  data.forEach(element => console.log(element));
}

show(userRecords);
```

#### Resultado (Saída no Console)

```
{ id: 5, nome: 'nextage', active: true, score: 88, idade: 35 }
{ id: 1, nome: 'Calango', active: true, score: 85, idade: 30 }
{ id: 3, nome: 'Mount', active: true, score: 78, idade: 28 }
```

-----

### ✨ Sugestão Aprimorada (Encadeamento de Métodos)

A versão aprimorada utiliza o conceito de **encadeamento de métodos** (*method chaining*) para aplicar a **filtragem** (`Array.filter()`) e a **classificação** (`Array.sort()`) sequencialmente no *array*, resultando em um código mais conciso e **funcionalmente puro**.

#### Código Otimizado

```javascript
function sortUsers(users) {
  // Encadeia as operações: Filtra primeiro, depois ordena o resultado.
  return users
    .filter(user => user.active === true && user.idade > 25)
    .sort((a, b) => b.score - a.score); // b - a para ordem decrescente
}

function show(input) {
    const data = sortUsers(input);
    data.forEach(element => console.log(element));
}

show(userRecords);
```

#### Benefícios da Otimização

  * **Clareza:** O código expressa a intenção de forma direta: "filtre e depois ordene".
  * **Imutabilidade:** O `filter()` sempre retorna um novo *array*, preservando o *array* original (`userRecords`).
  * **Eficiência de Código:** Não há necessidade de *arrays* auxiliares (`result`) ou loops `forEach` manuais para a filtragem.

-----

### ▶️ Como Executar

Para rodar o script (assumindo que o arquivo se chame `recordsortingsorting.js`):

```bash
node recordsorting.js
```
